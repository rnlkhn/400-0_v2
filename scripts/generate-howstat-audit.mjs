import fs from "node:fs/promises";
import path from "node:path";

import { PLAYER_POOL } from "../src/data.js";

const ROOT = path.resolve(".");
const OUTPUT_JSON = path.join(ROOT, "data", "howstat-player-audit.json");
const OUTPUT_MODULE = path.join(ROOT, "src", "generated-player-audit.js");
const CACHE_FILE = path.join(ROOT, "data", "howstat-audit-cache.json");
const SEARCH_URL = "https://www.howstat.com/Cricket/Statistics/Players/PlayerMenu.asp";
const PROFILE_URL = "https://www.howstat.com/Cricket/Statistics/Players/PlayerOverview_ODI.asp?PlayerID=";
const REQUEST_DELAY_MS = 350;
const REQUEST_HEADERS = {
  "user-agent": "Mozilla/5.0 (compatible; 400-0 audit bot/1.0; +https://github.com/rnlkhn/400-0)",
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "accept-language": "en-GB,en;q=0.8",
};

const COUNTRY_ALIASES = {
  Afghanistan: ["Afghanistan"],
  Australia: ["Australia"],
  Bangladesh: ["Bangladesh"],
  Bermuda: ["Bermuda"],
  Canada: ["Canada"],
  England: ["England"],
  India: ["India"],
  Ireland: ["Ireland"],
  Kenya: ["Kenya"],
  Namibia: ["Namibia"],
  Netherlands: ["Netherlands"],
  "New Zealand": ["New Zealand"],
  Pakistan: ["Pakistan"],
  Scotland: ["Scotland"],
  "South Africa": ["South Africa"],
  "Sri Lanka": ["Sri Lanka"],
  "United Arab Emirates": ["United Arab Emirates", "U.A.E.", "UAE"],
  "West Indies": ["West Indies"],
  Zimbabwe: ["Zimbabwe"],
  "United States": ["United States", "U.S.A.", "USA"],
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&ndash;|&#8211;/gi, "-")
    .replace(/&mdash;|&#8212;/gi, "-")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

function stripTags(value) {
  return decodeEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function normalizeIdentity(value) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshteinDistance(left, right) {
  if (left === right) {
    return 0;
  }

  if (!left.length) {
    return right.length;
  }

  if (!right.length) {
    return left.length;
  }

  const previous = new Array(right.length + 1).fill(0).map((_, index) => index);

  for (let i = 0; i < left.length; i += 1) {
    let current = [i + 1];
    for (let j = 0; j < right.length; j += 1) {
      const cost = left[i] === right[j] ? 0 : 1;
      current[j + 1] = Math.min(
        current[j] + 1,
        previous[j + 1] + 1,
        previous[j] + cost,
      );
    }

    for (let j = 0; j < current.length; j += 1) {
      previous[j] = current[j];
    }
  }

  return previous[right.length];
}

function similarityScore(left, right) {
  if (!left || !right) {
    return 0;
  }

  const distance = levenshteinDistance(left, right);
  return 1 - distance / Math.max(left.length, right.length);
}

function numberValue(value) {
  if (!value) {
    return null;
  }

  const cleaned = String(value)
    .replace(/,/g, "")
    .replace(/\*/g, "")
    .replace(/\u00a0/g, " ")
    .trim();

  if (!cleaned || cleaned === "-" || cleaned === "NA") {
    return null;
  }

  const match = cleaned.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function curvedScale(percentile, min = 20, max = 97, exponent = 1.35) {
  const curved = percentile ** exponent;
  return Math.round(min + (max - min) * curved);
}

function cleanHowstatName(name) {
  return name
    .replace(/\s+\d{4}.*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function buildPlayerGroups() {
  const byName = new Map();

  for (const player of PLAYER_POOL) {
    const key = normalizeIdentity(player.name);
    const existing = byName.get(key) || {
      name: player.name,
      identities: new Set(),
      teams: new Set(),
      years: new Set(),
      playerIds: new Set(),
    };

    existing.identities.add(player.name);
    existing.teams.add(player.team);
    existing.years.add(player.year);
    existing.playerIds.add(player.id);
    if (player.name.length > existing.name.length) {
      existing.name = player.name;
    }
    byName.set(key, existing);
  }

  return [...byName.values()].sort((left, right) => left.name.localeCompare(right.name));
}

async function fetchText(url, init, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, {
        ...init,
        headers: {
          ...REQUEST_HEADERS,
          ...(init?.headers || {}),
        },
      });

      if (response.ok) {
        return response.text();
      }

      if (attempt === retries) {
        throw new Error(`Request failed for ${url}: ${response.status}`);
      }
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }
    }

    await sleep(REQUEST_DELAY_MS * attempt);
  }

  throw new Error(`Unexpected fetch failure for ${url}`);
}

function parseSearchResults(html) {
  const tableMatch = html.match(/<table[^>]*id="Player_List"[\s\S]*?<\/table>/i);
  if (!tableMatch) {
    return [];
  }

  const results = [];
  const linkRegex = /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of tableMatch[0].matchAll(linkRegex)) {
    const href = match[1];
    const text = stripTags(match[2]);
    const infoMatch = text.match(/\(([^()]+?)\s+\d{4}[^)]*\)\s*(.*)$/);
    const fullName = infoMatch ? cleanHowstatName(infoMatch[1]) : text;
    const country = infoMatch ? infoMatch[2].trim() : "";
    results.push({
      href,
      text,
      fullName,
      country,
      playerId: Number(href.match(/PlayerID=(\d+)/i)?.[1] || 0),
    });
  }

  return results;
}

function countryMatches(candidateCountry, teamNames) {
  if (!candidateCountry) {
    return false;
  }

  const haystack = candidateCountry.toLowerCase();
  return teamNames.some((teamName) => {
    const aliases = COUNTRY_ALIASES[teamName] || [teamName];
    return aliases.some((alias) => haystack.includes(alias.toLowerCase()));
  });
}

function chooseBestMatch(group, results) {
  const target = normalizeIdentity(group.name);
  const teamNames = [...group.teams];
  const targetTokens = target.split(" ").filter(Boolean);
  const targetFirst = targetTokens[0] || "";
  const targetLast = targetTokens.at(-1) || "";

  const scored = results.map((result) => {
    const full = normalizeIdentity(result.fullName);
    const fullTokens = full.split(" ").filter(Boolean);
    const commonTokens = targetTokens.filter((token) => fullTokens.includes(token)).length;
    const overlap = targetTokens.length ? commonTokens / targetTokens.length : 0;
    const precision = fullTokens.length ? commonTokens / fullTokens.length : 0;
    const similarity = similarityScore(full, target);
    let score = 0;

    if (full === target) {
      score += 100;
    }

    if (countryMatches(result.country, teamNames)) {
      score += 40;
    }

    if (targetFirst && fullTokens[0] === targetFirst) {
      score += 10;
    }
    if (targetLast && fullTokens.at(-1) === targetLast) {
      score += 10;
    }

    score += Math.round(overlap * 25);
    score += Math.round(precision * 10);
    score += Math.round(similarity * 30);

    return { score, result };
  });

  scored.sort((left, right) => right.score - left.score || left.result.playerId - right.result.playerId);
  return scored[0]?.score >= 65 ? scored[0].result : null;
}

function parseMetadata(html) {
  const metadata = {};
  const rowRegex =
    /<td[^>]*class="FieldName"[^>]*>\s*([^<:]+):\s*<\/td>\s*<td[^>]*>\s*([\s\S]*?)\s*<\/td>/gi;
  for (const match of html.matchAll(rowRegex)) {
    metadata[match[1].trim()] = stripTags(match[2]);
  }

  return metadata;
}

function parseSections(html) {
  const sections = {};
  let currentSection = null;
  const validSections = new Set(["Batting", "Bowling", "Wicketkeeping", "Fielding", "Captaincy"]);
  const tokenRegex =
    /<td[^>]*colspan="2"[^>]*>\s*([^<]+?)\s*<\/td>|<span class="FieldName2">([^<]+?)<\/span>\s*<\/td>\s*<td class="FieldValue">\s*([\s\S]*?)\s*<\/td>/gi;

  for (const match of html.matchAll(tokenRegex)) {
    if (match[1]) {
      const heading = stripTags(match[1]).replace(/:$/, "");
      currentSection = validSections.has(heading) ? heading : null;
      if (currentSection && !sections[currentSection]) {
        sections[currentSection] = {};
      }
      continue;
    }

    if (!currentSection || !match[2]) {
      continue;
    }

    const label = stripTags(match[2]).replace(/:$/, "");
    sections[currentSection][label] = stripTags(match[3]);
  }

  return sections;
}

async function fetchProfile(playerId) {
  const html = await fetchText(`${PROFILE_URL}${playerId}`, {});
  const metadata = parseMetadata(html);
  const sections = parseSections(html);
  const matchesField = metadata.Matches || "";
  const rangeMatch = matchesField.match(/\((\d{4})-(\d{4}|\s*)\)/);

  return {
    playerId,
    fullName: metadata["Full Name"] || null,
    bats: metadata.Bats || null,
    bowls: metadata.Bowls || null,
    matches: numberValue(matchesField),
    fromYear: rangeMatch ? Number(rangeMatch[1]) : null,
    toYear: rangeMatch ? Number(rangeMatch[2]) : null,
    batting: sections.Batting || {},
    bowling: sections.Bowling || {},
    wicketkeeping: sections.Wicketkeeping || {},
    fielding: sections.Fielding || {},
  };
}

function percentile(sortedValues, value, invert = false) {
  if (!sortedValues.length || value == null) {
    return 0;
  }

  let low = 0;
  let high = sortedValues.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (sortedValues[mid] <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  const rank = sortedValues.length === 1 ? 1 : (low - 1) / (sortedValues.length - 1);
  return invert ? 1 - rank : rank;
}

function buildMetricArrays(entries) {
  const metrics = {
    batAverage: [],
    batStrikeRate: [],
    batAggregate: [],
    batRunsPerInnings: [],
    batMilestoneRate: [],
    batTeamRunsPct: [],
    bowlWickets: [],
    bowlWicketsPerMatch: [],
    bowlAverage: [],
    bowlEconomy: [],
    bowlStrikeRate: [],
    bowlHaulRate: [],
  };

  for (const entry of entries) {
    if (entry.raw.battingActive) {
      metrics.batAverage.push(entry.raw.batAverage);
      metrics.batStrikeRate.push(entry.raw.batStrikeRate);
      metrics.batAggregate.push(entry.raw.batAggregate);
      metrics.batRunsPerInnings.push(entry.raw.batRunsPerInnings);
      metrics.batMilestoneRate.push(entry.raw.batMilestoneRate);
      metrics.batTeamRunsPct.push(entry.raw.batTeamRunsPct);
    }

    if (entry.raw.bowlingActive) {
      metrics.bowlWickets.push(entry.raw.bowlWickets);
      metrics.bowlWicketsPerMatch.push(entry.raw.bowlWicketsPerMatch);
      metrics.bowlAverage.push(entry.raw.bowlAverage);
      metrics.bowlEconomy.push(entry.raw.bowlEconomy);
      metrics.bowlStrikeRate.push(entry.raw.bowlStrikeRate);
      metrics.bowlHaulRate.push(entry.raw.bowlHaulRate);
    }
  }

  for (const key of Object.keys(metrics)) {
    metrics[key].sort((left, right) => left - right);
  }

  return metrics;
}

function deriveRawMetrics(profile) {
  const innings = numberValue(profile.batting.Innings) || 0;
  const aggregate = numberValue(profile.batting.Aggregate) || 0;
  const batAverage = numberValue(profile.batting.Average) || 0;
  const batStrikeRate = numberValue(profile.batting["Scoring Rate"]) || 0;
  const fifties = numberValue(profile.batting["50s"]) || 0;
  const hundreds = numberValue(profile.batting["100s"]) || 0;
  const teamRunsPct = numberValue(profile.batting["% of Team Runs Scored"]) || 0;
  const runsPerInnings = innings > 0 ? aggregate / innings : 0;
  const milestoneRate = innings > 0 ? (fifties + hundreds * 2) / innings : 0;
  const battingActive = innings >= 10 || aggregate >= 250;

  const matches = profile.matches || 0;
  const balls = numberValue(profile.bowling.Balls) || 0;
  const wickets = numberValue(profile.bowling.Wickets) || 0;
  const bowlAverage = numberValue(profile.bowling.Average) || 0;
  const bowlEconomy = numberValue(profile.bowling["Economy Rate"]) || 0;
  const bowlStrikeRate = numberValue(profile.bowling["Strike Rate"]) || 0;
  const fourW = numberValue(profile.bowling["4 Wickets in Innings"]) || 0;
  const fiveW = numberValue(profile.bowling["5 Wickets in Innings"]) || 0;
  const wicketsPerMatch = matches > 0 ? wickets / matches : 0;
  const haulRate = matches > 0 ? (fourW + fiveW * 1.5) / matches : 0;
  const bowlingActive = wickets >= 5 || balls >= 300;

  const stumpings = numberValue(profile.wicketkeeping.Stumpings) || 0;
  const keeperCatches = numberValue(profile.wicketkeeping.Catches) || 0;

  return {
    battingActive,
    batAverage,
    batStrikeRate,
    batAggregate: aggregate,
    batRunsPerInnings: runsPerInnings,
    batMilestoneRate: milestoneRate,
    batTeamRunsPct: teamRunsPct,
    bowlingActive,
    bowlBalls: balls,
    bowlWickets: wickets,
    bowlWicketsPerMatch: wicketsPerMatch,
    bowlAverage,
    bowlEconomy,
    bowlStrikeRate,
    bowlHaulRate: haulRate,
    wicketkeepingDismissals: stumpings + keeperCatches,
    wicketkeepingStumpings: stumpings,
  };
}

function deriveRatings(entry, metrics) {
  const raw = entry.raw;
  let batting = 0;
  let bowling = 0;

  if (raw.battingActive) {
    const batPercentile =
      percentile(metrics.batAverage, raw.batAverage) * 0.34 +
      percentile(metrics.batStrikeRate, raw.batStrikeRate) * 0.16 +
      percentile(metrics.batAggregate, raw.batAggregate) * 0.2 +
      percentile(metrics.batRunsPerInnings, raw.batRunsPerInnings) * 0.14 +
      percentile(metrics.batMilestoneRate, raw.batMilestoneRate) * 0.1 +
      percentile(metrics.batTeamRunsPct, raw.batTeamRunsPct) * 0.06;

    batting = curvedScale(batPercentile, 20, 97, 1.3);

    if (raw.batAggregate < 500) {
      batting = Math.min(batting, 72);
    }
    if (raw.batAggregate < 1000) {
      batting = Math.min(batting, 80);
    }
  }

  if (raw.bowlingActive) {
    const bowlPercentile =
      percentile(metrics.bowlWickets, raw.bowlWickets) * 0.26 +
      percentile(metrics.bowlWicketsPerMatch, raw.bowlWicketsPerMatch) * 0.16 +
      percentile(metrics.bowlAverage, raw.bowlAverage, true) * 0.22 +
      percentile(metrics.bowlEconomy, raw.bowlEconomy, true) * 0.14 +
      percentile(metrics.bowlStrikeRate, raw.bowlStrikeRate, true) * 0.14 +
      percentile(metrics.bowlHaulRate, raw.bowlHaulRate) * 0.08;

    bowling = curvedScale(bowlPercentile, 20, 97, 1.35);

    if (raw.bowlWickets < 25) {
      bowling = Math.min(bowling, 76);
    }
    if (raw.bowlWickets < 10) {
      bowling = Math.min(bowling, 68);
    }
  }

  if (!raw.bowlingActive) {
    bowling = 0;
  }

  if (!raw.battingActive) {
    batting = 0;
  }

  const wicketkeeper = raw.wicketkeepingDismissals > 0;
  let role = "batsman";
  if (wicketkeeper) {
    role = "wicketkeeper";
  } else if (raw.bowlingActive && bowling >= batting + 8) {
    role = "bowler";
  }

  return {
    role,
    batting: clamp(Math.round(batting), 0, 97),
    bowling: clamp(Math.round(bowling), 0, 97),
  };
}

function isUsableAuditEntry(entry) {
  return Boolean(
    entry?.profile?.fullName &&
      (entry.raw.battingActive || entry.raw.bowlingActive || entry.raw.wicketkeepingDismissals > 0),
  );
}

function buildAuditRecord(group, match, profile) {
  return {
    name: group.name,
    teams: [...group.teams].sort(),
    years: [...group.years].sort((left, right) => left - right),
    match: {
      playerId: match.playerId,
      country: match.country,
      fullName: match.fullName,
      href: match.href,
    },
    profile,
    raw: deriveRawMetrics(profile),
  };
}

function toModuleSource(auditEntries, unresolvedNames) {
  const usableEntries = auditEntries.filter(isUsableAuditEntry);
  const overrides = Object.fromEntries(
    usableEntries.map((entry) => [
      entry.name,
      {
        role: entry.derived.role,
        batting: entry.derived.batting,
        bowling: entry.derived.bowling,
      },
    ]),
  );

  return `export const AUDITED_PLAYER_NAME_OVERRIDES = ${JSON.stringify(overrides, null, 2)};\n\nexport const AUDITED_PLAYER_SUMMARY = ${JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      source: "Howstat ODI career summaries",
      matchedPlayers: usableEntries.length,
      unresolvedPlayers: unresolvedNames,
    },
    null,
    2,
  )};\n`;
}

async function loadCheckpoint() {
  try {
    const raw = JSON.parse(await fs.readFile(CACHE_FILE, "utf8"));
    return {
      auditEntries: raw.auditEntries || [],
      unresolvedNames: raw.unresolvedNames || [],
      completedKeys: new Set(raw.completedKeys || []),
      searchCache: new Map(Object.entries(raw.searchCache || {})),
      profileCache: new Map(
        Object.entries(raw.profileCache || {}).map(([key, value]) => [Number(key), value]),
      ),
    };
  } catch {
    return {
      auditEntries: [],
      unresolvedNames: [],
      completedKeys: new Set(),
      searchCache: new Map(),
      profileCache: new Map(),
    };
  }
}

async function saveCheckpoint({ auditEntries, unresolvedNames, completedKeys, searchCache, profileCache }) {
  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await fs.writeFile(
    CACHE_FILE,
    `${JSON.stringify(
      {
        savedAt: new Date().toISOString(),
        auditEntries,
        unresolvedNames,
        completedKeys: [...completedKeys],
        searchCache: Object.fromEntries(searchCache),
        profileCache: Object.fromEntries(profileCache),
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
}

async function main() {
  const groups = buildPlayerGroups();
  const checkpoint = await loadCheckpoint();
  const auditEntries = checkpoint.auditEntries;
  const unresolvedNames = [...new Set(checkpoint.unresolvedNames)];
  const completedKeys = checkpoint.completedKeys;
  const searchCache = checkpoint.searchCache;
  const profileCache = checkpoint.profileCache;

  console.log(`Auditing ${groups.length} unique player names...`);
  if (completedKeys.size > 0) {
    console.log(`Resuming from checkpoint with ${completedKeys.size} completed names...`);
  }

  for (let index = 0; index < groups.length; index += 1) {
    const group = groups[index];
    const groupKey = normalizeIdentity(group.name);

    if (completedKeys.has(groupKey)) {
      continue;
    }

    const query = group.name;

    let results = searchCache.get(query);
    if (!results) {
      const html = await fetchText(SEARCH_URL, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          txtPlayer: query,
          txtAction: "FindPlayer",
        }),
      });
      results = parseSearchResults(html);
      searchCache.set(query, results);
      await sleep(REQUEST_DELAY_MS);
    }

    const match = chooseBestMatch(group, results);
    if (!match) {
      unresolvedNames.push(group.name);
      completedKeys.add(groupKey);
      console.log(`[${index + 1}/${groups.length}] unresolved: ${group.name}`);
      await saveCheckpoint({ auditEntries, unresolvedNames, completedKeys, searchCache, profileCache });
      continue;
    }

    let profile = profileCache.get(match.playerId);
    if (!profile) {
      profile = await fetchProfile(match.playerId);
      profileCache.set(match.playerId, profile);
      await sleep(REQUEST_DELAY_MS);
    }

    auditEntries.push(buildAuditRecord(group, match, profile));
    completedKeys.add(groupKey);
    if ((index + 1) % 50 === 0 || index === groups.length - 1) {
      console.log(`[${index + 1}/${groups.length}] matched ${auditEntries.length}, unresolved ${unresolvedNames.length}`);
    }
    if ((auditEntries.length + unresolvedNames.length) % 25 === 0) {
      await saveCheckpoint({ auditEntries, unresolvedNames, completedKeys, searchCache, profileCache });
    }
  }

  const metrics = buildMetricArrays(auditEntries);
  for (const entry of auditEntries) {
    entry.derived = deriveRatings(entry, metrics);
  }

  const invalidEntries = auditEntries.filter((entry) => !isUsableAuditEntry(entry)).map((entry) => entry.name);
  const finalUnresolvedNames = [...new Set([...unresolvedNames, ...invalidEntries])].sort((left, right) =>
    left.localeCompare(right),
  );
  const usableEntries = auditEntries.filter(isUsableAuditEntry);

  await fs.mkdir(path.dirname(OUTPUT_JSON), { recursive: true });
  await fs.writeFile(
    OUTPUT_JSON,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        source: "Howstat ODI career summaries",
        matchedPlayers: usableEntries.length,
        unresolvedPlayers: finalUnresolvedNames,
        players: auditEntries,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  await fs.writeFile(OUTPUT_MODULE, toModuleSource(auditEntries, finalUnresolvedNames), "utf8");
  await saveCheckpoint({ auditEntries, unresolvedNames, completedKeys, searchCache, profileCache });

  console.log(`Wrote ${OUTPUT_JSON}`);
  console.log(`Wrote ${OUTPUT_MODULE}`);
  console.log(`Matched ${usableEntries.length}/${groups.length}; unresolved ${finalUnresolvedNames.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
