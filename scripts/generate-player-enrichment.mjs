import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { PLAYER_POOL } from "../src/data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const MATCH_CSV = path.join(ROOT, "data", "odi_player_match_stats_1979_2023.csv");
const PROFILE_CSV = path.join(ROOT, "data", "odi_player_profiles_1979_2023.csv");
const OUTPUT_MODULE = path.join(ROOT, "src", "generated-player-enrichment.js");

const ODD_TEAM_TOKENS = new Set([
  "",
  "match tied",
  "icc world xi",
  "acc asian xi",
  "aca africa xi",
]);

const TEAM_ALIASES = new Map([
  ["united states of america", "united states"],
  ["usa", "united states"],
  ["uae", "united arab emirates"],
]);

const BATTING_97 = new Set(["sachin tendulkar", "brian lara"]);
const BATTING_94 = new Set([
  "ab de villiers",
  "hashim amla",
  "jacques kallis",
  "joe root",
  "kumar sangakkara",
  "ricky ponting",
  "rohit sharma",
  "virat kohli",
  "viv richards",
]);

const BOWLING_96 = new Set([
  "curtly ambrose",
  "glenn mcgrath",
  "joel garner",
  "malcolm marshall",
  "muttiah muralitharan",
  "shane warne",
  "waqar younis",
  "wasim akram",
]);

const MODERN_PATCH_TEAMS = new Set([
  "australia",
  "england",
  "india",
  "new zealand",
  "south africa",
]);

const NAME_ALIASES = new Map([
  ["ab de villiers", ["abraham benjamin de villiers"]],
  ["brad hodge", ["bradley hodge"]],
  ["chris tremlett", ["christopher tremlett"]],
  ["craig mcmillan", ["craig douglas mcmillan"]],
  ["francois du plessis", ["faf du plessis"]],
  ["imran tahir", ["mohammad imran tahir"]],
  ["jamie dalrymple", ["james dalrymple"]],
  ["james franklin", ["james edwar charles franklin"]],
  ["jimmy neesham", ["james neesham"]],
  ["jon lewis", ["johnathan lewis"]],
  ["jp duminy", ["jean paul duminy"]],
  ["kl rahul", ["kannaur lokesh rahul"]],
  ["lungi ngidi", ["lungisani true man ngidi"]],
  ["m s dhoni", ["mahendra singh dhoni"]],
  ["matt prior", ["matthew prior"]],
  ["mohammed shami", ["mohammed shami ahmed"]],
  ["imad wasim", ["syed imad wasim"]],
  ["ms dhoni", ["mahendra singh dhoni"]],
  ["nathan mitchell coulter nile", ["nathan coulter nile"]],
  ["rassie van der dussen", ["hendrik erasmus van der dussen"]],
  ["rameez raja", ["ramiz raja"]],
  ["ramiz raja", ["rameez raja"]],
  ["s sreesanth", ["sreesanth"]],
  ["tamim iqbal", ["tamim iqbal khan"]],
  ["wajahatullah wasti", ["syed wajahatullah wasti"]],
  ["yousuf youhana", ["mohammad yousuf"]],
  ["mohammad yousuf", ["yousuf youhana"]],
  ["mushfiqur rahim", ["mohammad mushfiqur rahim"]],
  ["vernon philander", ["vernon darryl philander"]],
  ["zaheer abbas", ["syed zaheer abbas kirmani"]],
]);

const ROLE_PRIORS = {
  batsman: { batting: 58, bowling: 18 },
  wicketkeeper: { batting: 60, bowling: 0 },
  bowler: { batting: 18, bowling: 62 },
};

const ROLE_BATTING_FLOOR = {
  batsman: 50,
  wicketkeeper: 50,
  bowler: 15,
};

const ROLE_BOWLING_FLOOR = {
  batsman: 0,
  wicketkeeper: 0,
  bowler: 60,
};

function readCsv(filePath) {
  const text = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
  const rows = [];
  let field = "";
  let row = [];
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        field += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }

      row.push(field);
      field = "";

      if (row.length > 1 || row[0] !== "") {
        rows.push(row);
      }

      row = [];
      continue;
    }

    field += char;
  }

  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const [header, ...values] = rows;
  return values.map((valueRow) =>
    Object.fromEntries(header.map((column, index) => [column, valueRow[index] ?? ""])),
  );
}

function toNumber(value) {
  if (!value) {
    return 0;
  }

  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalizeName(name) {
  return name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function tokenizeName(name) {
  return normalizeName(name).split(" ").filter(Boolean);
}

function initialsSignature(name) {
  const tokens = tokenizeName(name);
  if (tokens.length === 0) {
    return "";
  }

  const initials = tokens
    .flatMap((token) =>
      token.length <= 3 && /^[a-z]+$/.test(token) ? [...token] : [token[0]],
    )
    .join("");

  return `${initials}|${tokens[tokens.length - 1]}`;
}

function isPrefixTokens(shorter, longer) {
  if (shorter.length > longer.length) {
    return false;
  }

  return shorter.every((token, index) => longer[index] === token);
}

function namesLooselyMatch(leftName, rightName) {
  const left = tokenizeName(leftName);
  const right = tokenizeName(rightName);
  if (left.length === 0 || right.length === 0) {
    return false;
  }

  const leftNormalized = left.join(" ");
  const rightNormalized = right.join(" ");

  if (leftNormalized === rightNormalized) {
    return true;
  }

  if (leftNormalized.includes(rightNormalized) || rightNormalized.includes(leftNormalized)) {
    return true;
  }

  if (isPrefixTokens(left, right) || isPrefixTokens(right, left)) {
    return true;
  }

  return initialsSignature(leftName) === initialsSignature(rightName);
}

function getAliasNames(name) {
  const normalized = normalizeName(name);
  const aliases = NAME_ALIASES.get(normalized) || [];
  return [name, ...aliases];
}

function canonicalTeamName(team) {
  const normalized = team
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  return TEAM_ALIASES.get(normalized) || normalized;
}

function extractPrimaryTeam(rawTeam) {
  const tokens = rawTeam
    .split(";")
    .map((token) => canonicalTeamName(token))
    .filter((token) => !ODD_TEAM_TOKENS.has(token));

  if (tokens.length === 0) {
    return canonicalTeamName(rawTeam);
  }

  return tokens[tokens.length - 1];
}

function getIntervalForYear(year) {
  if (year <= 1983) {
    return "1979-1983";
  }

  if (year <= 1987) {
    return "1984-1987";
  }

  const intervalStart = year - 3;
  return `${intervalStart}-${year}`;
}

function createAggregate() {
  return {
    runs: 0,
    ballsFaced: 0,
    battingInnings: 0,
    dismissals: 0,
    fours: 0,
    sixes: 0,
    wickets: 0,
    ballsBowled: 0,
    runsConceded: 0,
    bowlingInnings: 0,
    matches: new Set(),
    battingHands: new Map(),
    bowlingHands: new Map(),
    bowlingStyles: new Map(),
  };
}

function incrementMap(map, value) {
  if (!value) {
    return;
  }

  map.set(value, (map.get(value) || 0) + 1);
}

function mostCommonValue(map, fallback = "") {
  let bestValue = fallback;
  let bestCount = -1;

  for (const [value, count] of map.entries()) {
    if (count > bestCount) {
      bestValue = value;
      bestCount = count;
    }
  }

  return bestValue;
}

function buildAggregateKey(name, interval, team) {
  return `${normalizeName(name)}|${interval}|${team}`;
}

function battingAggressionLabel(strikeRate) {
  if (strikeRate >= 120) {
    return "Very Aggressive";
  }

  if (strikeRate >= 90) {
    return "Aggressive";
  }

  if (strikeRate >= 70) {
    return "Balanced";
  }

  if (strikeRate >= 50) {
    return "Cautious";
  }

  return "Very Cautious";
}

function round(value) {
  return Math.round(value);
}

function average(values) {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getRolePrior(role) {
  return ROLE_PRIORS[role] || ROLE_PRIORS.batsman;
}

function inferPriorRole(player, aggregate) {
  if (player.role === "wicketkeeper" || /\bwk\b/i.test(player.name)) {
    return "wicketkeeper";
  }

  const bowlingWorkload = aggregate.ballsBowled >= 180 || aggregate.wickets >= 8;
  const battingWorkload = aggregate.dismissals >= 8 || aggregate.runs >= 180;

  if (player.role === "bowler" || (!battingWorkload && bowlingWorkload)) {
    return "bowler";
  }

  return "batsman";
}

function computeIntervalBaselines(aggregates) {
  const buckets = new Map();

  for (const aggregate of aggregates.values()) {
    const bucket = buckets.get(aggregate.interval) || {
      battingAverages: [],
      battingStrikeRates: [],
      bowlingAverages: [],
      bowlingStrikeRates: [],
      bowlingEconomies: [],
    };

    if (aggregate.dismissals >= 10) {
      bucket.battingAverages.push(aggregate.battingAverage);
      if (aggregate.ballsFaced >= 200) {
        bucket.battingStrikeRates.push(aggregate.battingStrikeRate);
      }
    }

    if (aggregate.wickets >= 15 && aggregate.ballsBowled >= 300) {
      bucket.bowlingAverages.push(aggregate.bowlingAverage);
      bucket.bowlingStrikeRates.push(aggregate.bowlingStrikeRate);
      bucket.bowlingEconomies.push(aggregate.bowlingEconomy);
    }

    buckets.set(aggregate.interval, bucket);
  }

  const baselines = new Map();

  for (const [interval, bucket] of buckets.entries()) {
    baselines.set(interval, {
      battingAverage: average(bucket.battingAverages),
      battingStrikeRate: average(bucket.battingStrikeRates),
      bowlingAverage: average(bucket.bowlingAverages),
      bowlingStrikeRate: average(bucket.bowlingStrikeRates),
      bowlingEconomy: average(bucket.bowlingEconomies),
    });
  }

  return baselines;
}

function deriveBattingRating(playerName, aggregate, baselines, priorRole) {
  const baseline = baselines.get(aggregate.interval);
  const prior = getRolePrior(priorRole).batting;
  if (aggregate.dismissals === 0 || aggregate.ballsFaced === 0 || aggregate.runs === 0) {
    return priorRole === "bowler" ? prior : Math.max(50, prior);
  }
  const averageWeight = aggregate.dismissals / (aggregate.dismissals + 12);
  const strikeRateWeight = aggregate.ballsFaced / (aggregate.ballsFaced + 600);
  const reliability =
    Math.min(
      0.95,
      (aggregate.dismissals / (aggregate.dismissals + 10)) * 0.65 +
        (aggregate.ballsFaced / (aggregate.ballsFaced + 350)) * 0.35,
    );
  const adjustedAverage =
    baseline.battingAverage +
    (aggregate.battingAverage - baseline.battingAverage) * averageWeight;
  const adjustedStrikeRate =
    baseline.battingStrikeRate +
    (aggregate.battingStrikeRate - baseline.battingStrikeRate) * strikeRateWeight;
  const volumeBonus = Math.min(5, Math.log2(aggregate.dismissals + 1) * 0.9);
  const raw =
    64 +
    (adjustedAverage - baseline.battingAverage) * 1.75 +
    (adjustedStrikeRate - baseline.battingStrikeRate) * 0.16 +
    volumeBonus;
  const posterior = prior + (raw - prior) * reliability;
  const normalizedName = normalizeName(playerName);
  const cap = BATTING_97.has(normalizedName)
    ? 97
    : BATTING_94.has(normalizedName)
      ? 94
      : 93;
  let cappedPosterior = posterior;

  if (priorRole === "bowler") {
    if (aggregate.dismissals < 8 || aggregate.runs < 80) {
      cappedPosterior = Math.min(cappedPosterior, 28);
    } else if (aggregate.dismissals < 18 || aggregate.runs < 220) {
      cappedPosterior = Math.min(cappedPosterior, 42);
    } else if (aggregate.dismissals < 35 || aggregate.runs < 450) {
      cappedPosterior = Math.min(cappedPosterior, 58);
    }
  }

  return clamp(round(cappedPosterior), ROLE_BATTING_FLOOR[priorRole] || 18, cap);
}

function deriveBowlingRating(playerName, aggregate, baselines, priorRole) {
  const prior = getRolePrior(priorRole).bowling;
  if (aggregate.ballsBowled === 0) {
    return priorRole === "bowler" ? prior : 0;
  }

  const baseline = baselines.get(aggregate.interval);
  const wicketsWeight = aggregate.wickets / (aggregate.wickets + 10);
  const ballsWeight = aggregate.ballsBowled / (aggregate.ballsBowled + 500);
  const reliability =
    Math.min(
      0.95,
      (aggregate.wickets / (aggregate.wickets + 8)) * 0.55 +
        (aggregate.ballsBowled / (aggregate.ballsBowled + 240)) * 0.45,
    );
  const adjustedAverage =
    baseline.bowlingAverage +
    (aggregate.bowlingAverage - baseline.bowlingAverage) * wicketsWeight;
  const adjustedStrikeRate =
    baseline.bowlingStrikeRate +
    (aggregate.bowlingStrikeRate - baseline.bowlingStrikeRate) * wicketsWeight;
  const adjustedEconomy =
    baseline.bowlingEconomy +
    (aggregate.bowlingEconomy - baseline.bowlingEconomy) * ballsWeight;
  const volumeBonus = Math.min(5.5, Math.log2(aggregate.wickets + 1) * 0.9);
  const raw =
    73 +
    (baseline.bowlingAverage - adjustedAverage) * 1.55 +
    (baseline.bowlingStrikeRate - adjustedStrikeRate) * 0.48 +
    (baseline.bowlingEconomy - adjustedEconomy) * 4.0 +
    volumeBonus;
  const posterior = prior + (raw - prior) * reliability;
  const normalizedName = normalizeName(playerName);
  const cap = BOWLING_96.has(normalizedName) ? 96 : 93;
  let cappedPosterior = posterior;

  if (priorRole !== "bowler") {
    if (aggregate.ballsBowled < 180 || aggregate.wickets < 5) {
      cappedPosterior = Math.min(cappedPosterior, 32);
    } else if (aggregate.ballsBowled < 480 || aggregate.wickets < 12) {
      cappedPosterior = Math.min(cappedPosterior, 45);
    } else if (aggregate.ballsBowled < 900 || aggregate.wickets < 24) {
      cappedPosterior = Math.min(cappedPosterior, 60);
    } else if (aggregate.ballsBowled < 1500 || aggregate.wickets < 36) {
      cappedPosterior = Math.min(cappedPosterior, 72);
    }
  }

  return clamp(round(cappedPosterior), ROLE_BOWLING_FLOOR[priorRole] || 0, cap);
}

function inferRole(player, batting, bowling, aggregate) {
  if (player.role === "wicketkeeper" || /\bwk\b/i.test(player.name)) {
    return "wicketkeeper";
  }

  const bowlingWorkload = aggregate.ballsBowled >= 180 || aggregate.wickets >= 8;

  if (bowlingWorkload && bowling >= batting + 8 && bowling >= 55) {
    return "bowler";
  }

  return "batsman";
}

function enforcePosteriorFloors(role, batting, bowling) {
  let safeBatting = batting;
  let safeBowling = bowling;

  if (role === "bowler") {
    safeBatting = Math.max(15, safeBatting || 0);
    safeBowling = Math.max(60, safeBowling || 0);
  } else if (role === "wicketkeeper") {
    safeBatting = Math.max(50, safeBatting || 0);
    safeBowling = 0;
  } else {
    safeBatting = Math.max(50, safeBatting || 0);
  }

  if (safeBatting < 50 && safeBowling < 50) {
    if (role === "bowler") {
      safeBowling = 60;
    } else if (safeBowling >= safeBatting) {
      safeBowling = 50;
    } else {
      safeBatting = 50;
    }
  }

  return { batting: safeBatting, bowling: safeBowling };
}

function applyModernPatch(player, enrichment) {
  const normalizedName = normalizeName(player.name);
  const patched = { ...enrichment };

  if (normalizedName === "tamim iqbal") {
    patched.batting =
      player.year === 2007 ? 80 : player.year === 2011 ? 84 : player.year === 2015 ? 87 : 88;
    patched.bowling = 8;
    return patched;
  }

  if (normalizedName === "mushfiqur rahim") {
    patched.batting =
      player.year === 2007 ? 72 : player.year === 2011 ? 78 : player.year === 2015 ? 84 : player.year === 2023 ? 85 : 88;
    patched.bowling = 0;
    return patched;
  }

  if (normalizedName === "shakib al hasan") {
    patched.batting =
      player.year === 2007 ? 80 : player.year === 2011 ? 84 : player.year === 2015 ? 87 : player.year === 2019 ? 90 : 84;
    patched.bowling =
      player.year === 2007 ? 84 : player.year === 2011 ? 89 : player.year === 2015 ? 91 : player.year === 2019 ? 85 : 88;
    return patched;
  }

  if (normalizedName === "virat kohli") {
    patched.batting =
      player.year === 2011 ? 87 : player.year === 2015 ? 92 : player.year === 2019 ? 94 : 94;
    patched.bowling = 8;
    return patched;
  }

  if (normalizedName === "daniel vettori") {
    patched.batting =
      player.year === 2007 ? 67 : player.year === 2011 ? 72 : player.year === 2015 ? 64 : patched.batting;
    patched.bowling =
      player.year === 2007 ? 88 : player.year === 2011 ? 90 : player.year === 2015 ? 84 : patched.bowling;
    return patched;
  }

  if (normalizedName === "andrew flintoff") {
    patched.batting =
      player.year === 2003 ? 82 : player.year === 2007 ? 84 : patched.batting;
    patched.bowling =
      player.year === 2003 ? 88 : player.year === 2007 ? 89 : patched.bowling;
    return patched;
  }

  if (normalizedName === "yuvraj singh") {
    patched.batting =
      player.year === 2003 ? 81 : player.year === 2007 ? 87 : player.year === 2011 ? 88 : patched.batting;
    patched.bowling =
      player.year === 2003 ? 72 : player.year === 2007 ? 74 : player.year === 2011 ? 79 : patched.bowling;
    return patched;
  }

  const team = canonicalTeamName(player.team);
  if (!MODERN_PATCH_TEAMS.has(team) || player.year < 2007) {
    return patched;
  }

  if (team === "india" && patched.role !== "wicketkeeper" && patched.batting >= 84) {
    patched.batting = Math.max(patched.batting, 90);
  }

  if (normalizeName(player.name) === "mitchell starc") {
    patched.bowling = Math.max(patched.bowling, 93);
  }

  return patched;
}

function getDefaultBowlingStyle(player) {
  if (player.bowling <= 0) {
    return "";
  }

  return player.role === "bowler" ? "Unspecified" : "";
}

function buildProfileLookup(profileRows) {
  const lookup = new Map();
  const byTeam = new Map();

  for (const row of profileRows) {
    const normalizedName = normalizeName(row.full_name);
    const team = canonicalTeamName(row.country || "");
    const key = `${normalizedName}|${team}`;
    const value = {
      battingHand: row.batting_hand || "",
      bowlingHand: row.bowling_hand || "",
      bowlingStyle: row.bowling_style || "",
      fullName: row.full_name,
      team,
    };
    lookup.set(key, value);
    const bucket = byTeam.get(team) || [];
    bucket.push(value);
    byTeam.set(team, bucket);
  }

  return { lookup, byTeam };
}

function buildAggregates(matchRows) {
  const aggregates = new Map();
  const byNameInterval = new Map();
  const byIntervalTeam = new Map();

  for (const row of matchRows) {
    const normalizedTeam = extractPrimaryTeam(row.team || row.country || "");
    const key = buildAggregateKey(row.player_name, row.interval, normalizedTeam);
    const aggregate = aggregates.get(key) || {
      ...createAggregate(),
      playerName: row.player_name,
      interval: row.interval,
      team: normalizedTeam,
    };

    aggregate.matches.add(row.match_code);

    if (row.did_bat === "True") {
      aggregate.battingInnings += 1;
      aggregate.runs += toNumber(row.runs);
      aggregate.ballsFaced += toNumber(row.balls_faced);
      aggregate.fours += toNumber(row.fours);
      aggregate.sixes += toNumber(row.sixes);
      if (row.not_out !== "True") {
        aggregate.dismissals += 1;
      }
    }

    if (row.did_bowl === "True") {
      aggregate.bowlingInnings += 1;
      aggregate.wickets += toNumber(row.wickets);
      aggregate.ballsBowled += toNumber(row.balls_bowled);
      aggregate.runsConceded += toNumber(row.runs_conceded);
    }

    incrementMap(aggregate.battingHands, row.batting_hand);
    incrementMap(aggregate.bowlingHands, row.bowling_hand);
    incrementMap(aggregate.bowlingStyles, row.bowling_style);

    aggregates.set(key, aggregate);

    const nameIntervalKey = `${normalizeName(row.player_name)}|${row.interval}`;
    const bucket = byNameInterval.get(nameIntervalKey) || [];
    if (!bucket.includes(key)) {
      bucket.push(key);
    }
    byNameInterval.set(nameIntervalKey, bucket);

    const intervalTeamKey = `${row.interval}|${normalizedTeam}`;
    const intervalTeamBucket = byIntervalTeam.get(intervalTeamKey) || [];
    if (!intervalTeamBucket.includes(key)) {
      intervalTeamBucket.push(key);
    }
    byIntervalTeam.set(intervalTeamKey, intervalTeamBucket);
  }

  for (const aggregate of aggregates.values()) {
    aggregate.matchesPlayed = aggregate.matches.size;
    aggregate.battingAverage = aggregate.dismissals > 0 ? aggregate.runs / aggregate.dismissals : 0;
    aggregate.battingStrikeRate =
      aggregate.ballsFaced > 0 ? (aggregate.runs * 100) / aggregate.ballsFaced : 0;
    aggregate.bowlingAverage = aggregate.wickets > 0 ? aggregate.runsConceded / aggregate.wickets : 0;
    aggregate.bowlingStrikeRate =
      aggregate.wickets > 0 ? aggregate.ballsBowled / aggregate.wickets : 0;
    aggregate.bowlingEconomy =
      aggregate.ballsBowled > 0 ? (aggregate.runsConceded * 6) / aggregate.ballsBowled : 0;
    aggregate.battingHand = mostCommonValue(aggregate.battingHands);
    aggregate.bowlingHand = mostCommonValue(aggregate.bowlingHands);
    aggregate.bowlingStyle = mostCommonValue(aggregate.bowlingStyles);
  }

  return { aggregates, byNameInterval, byIntervalTeam };
}

function chooseAggregate(player, aggregates, byNameInterval, byIntervalTeam) {
  const interval = getIntervalForYear(player.year);
  const normalizedTeam = canonicalTeamName(player.team);
  const aliasNames = getAliasNames(player.name);

  for (const aliasName of aliasNames) {
    const exactKey = buildAggregateKey(aliasName, interval, normalizedTeam);
    if (aggregates.has(exactKey)) {
      return aggregates.get(exactKey);
    }
  }

  const candidates = aliasNames.flatMap((aliasName) =>
    (byNameInterval.get(`${normalizeName(aliasName)}|${interval}`) || [])
      .map((key) => aggregates.get(key))
      .filter(Boolean),
  );

  if (candidates.length === 0) {
    return null;
  }

  const teamMatched = candidates.filter((candidate) => candidate.team === normalizedTeam);
  if (teamMatched.length === 1) {
    return teamMatched[0];
  }

  if (teamMatched.length > 1) {
    return [...teamMatched].sort(
      (left, right) =>
        right.matchesPlayed - left.matchesPlayed ||
        right.runs + right.wickets * 12 - (left.runs + left.wickets * 12),
    )[0];
  }

  if (candidates.length === 1) {
    return candidates[0];
  }

  const fuzzyCandidates = (byIntervalTeam.get(`${interval}|${normalizedTeam}`) || [])
    .map((key) => aggregates.get(key))
    .filter(Boolean)
    .filter((candidate) =>
      aliasNames.some((aliasName) => namesLooselyMatch(aliasName, candidate.playerName)),
    );

  if (fuzzyCandidates.length === 1) {
    return fuzzyCandidates[0];
  }

  if (fuzzyCandidates.length > 1) {
    return [...fuzzyCandidates].sort(
      (left, right) =>
        right.matchesPlayed - left.matchesPlayed ||
        right.runs + right.wickets * 12 - (left.runs + left.wickets * 12),
    )[0];
  }

  return [...candidates].sort(
    (left, right) =>
      right.matchesPlayed - left.matchesPlayed ||
      right.runs + right.wickets * 12 - (left.runs + left.wickets * 12),
  )[0];
}

function buildEnrichment() {
  const matchRows = readCsv(MATCH_CSV);
  const profileRows = readCsv(PROFILE_CSV);
  const profileLookup = buildProfileLookup(profileRows);
  const { aggregates, byNameInterval, byIntervalTeam } = buildAggregates(matchRows);
  const baselines = computeIntervalBaselines(aggregates);

  const enrichmentById = {};
  let matchedPlayers = 0;

  for (const player of PLAYER_POOL) {
    const aggregate = chooseAggregate(player, aggregates, byNameInterval, byIntervalTeam);
    if (!aggregate) {
      continue;
    }

    matchedPlayers += 1;

    let profile =
      profileLookup.lookup.get(`${normalizeName(player.name)}|${canonicalTeamName(player.team)}`) ||
      null;

    if (!profile) {
      const candidates = profileLookup.byTeam.get(canonicalTeamName(player.team)) || [];
      profile =
        candidates.find((candidate) =>
          getAliasNames(player.name).some((aliasName) =>
            namesLooselyMatch(aliasName, candidate.fullName),
          ),
        ) || null;
    }
    const priorRole = inferPriorRole(player, aggregate);
    const batting = deriveBattingRating(player.name, aggregate, baselines, priorRole);
    const bowling = deriveBowlingRating(player.name, aggregate, baselines, priorRole);
    const role = inferRole(player, batting, bowling, aggregate);
    const safeRatings = enforcePosteriorFloors(role, batting, bowling);
    let enrichment = {
      role,
      batting: safeRatings.batting,
      bowling: safeRatings.bowling,
      battingHand: aggregate.battingHand || profile?.battingHand || "",
      bowlingHand: aggregate.bowlingHand || profile?.bowlingHand || "",
      bowlingStyle:
        aggregate.bowlingStyle ||
        profile?.bowlingStyle ||
        getDefaultBowlingStyle(player),
      aggressionLevel: battingAggressionLabel(aggregate.battingStrikeRate),
      battingStyle: battingAggressionLabel(aggregate.battingStrikeRate),
      interval: aggregate.interval,
      battingAverage: round(aggregate.battingAverage * 100) / 100,
      battingStrikeRate: round(aggregate.battingStrikeRate * 100) / 100,
      bowlingAverage: round(aggregate.bowlingAverage * 100) / 100,
      bowlingStrikeRate: round(aggregate.bowlingStrikeRate * 100) / 100,
      bowlingEconomy: round(aggregate.bowlingEconomy * 100) / 100,
    };

    enrichment = applyModernPatch(player, enrichment);
    enrichmentById[player.id] = enrichment;
  }

  return {
    enrichmentById,
    summary: {
      generatedAt: new Date().toISOString(),
      matchedPlayers,
      unmatchedPlayers: PLAYER_POOL.length - matchedPlayers,
      totalPlayers: PLAYER_POOL.length,
    },
  };
}

function writeModule(output) {
  const content = `export const PLAYER_INTERVAL_ENRICHMENT_BY_ID = ${JSON.stringify(
    output.enrichmentById,
    null,
    2,
  )};\n\nexport const PLAYER_INTERVAL_ENRICHMENT_SUMMARY = ${JSON.stringify(
    output.summary,
    null,
    2,
  )};\n`;

  fs.writeFileSync(OUTPUT_MODULE, content);
}

const output = buildEnrichment();
writeModule(output);
console.log(
  `Generated player enrichment for ${output.summary.matchedPlayers}/${output.summary.totalPlayers} players.`,
);
