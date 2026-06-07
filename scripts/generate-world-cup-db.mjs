import fs from "node:fs/promises";
import path from "node:path";

import { PLAYER_POOL as SEEDED_PLAYERS } from "../src/data.js";

const OUTPUT_FILE = path.resolve("src/generated-world-cup-data.js");

const EXISTING_SQUAD_IDS = new Set([
  "india-1983",
  "pakistan-1992",
  "sri-lanka-1996",
  "west-indies-1996",
  "australia-1999",
  "south-africa-1999",
  "india-2011",
  "australia-2015",
  "new-zealand-2019",
  "england-2019",
  "bangladesh-2019",
  "india-2023",
  "pakistan-2023",
  "afghanistan-2023",
  "zimbabwe-1999",
  "kenya-2003",
  "bermuda-2007",
  "canada-2011",
  "ireland-2011",
  "scotland-2015",
  "uae-2015",
  "namibia-2003",
  "netherlands-2023",
]);

const WORLD_CUPS = [
  {
    year: 1983,
    page: "1983_Cricket_World_Cup_squads",
    participants: [
      "Australia",
      "England",
      "India",
      "New Zealand",
      "Pakistan",
      "Sri Lanka",
      "West Indies",
      "Zimbabwe",
    ],
  },
  {
    year: 1987,
    page: "1987_Cricket_World_Cup_squads",
    participants: [
      "Australia",
      "England",
      "India",
      "New Zealand",
      "Pakistan",
      "Sri Lanka",
      "West Indies",
      "Zimbabwe",
    ],
  },
  {
    year: 1992,
    page: "1992_Cricket_World_Cup_squads",
    participants: [
      "Australia",
      "England",
      "India",
      "New Zealand",
      "Pakistan",
      "South Africa",
      "Sri Lanka",
      "West Indies",
      "Zimbabwe",
    ],
  },
  {
    year: 1996,
    page: "1996_Cricket_World_Cup_squads",
    participants: [
      "Australia",
      "England",
      "India",
      "Kenya",
      "Netherlands",
      "New Zealand",
      "Pakistan",
      "South Africa",
      "Sri Lanka",
      "United Arab Emirates",
      "West Indies",
      "Zimbabwe",
    ],
  },
  {
    year: 1999,
    page: "1999_Cricket_World_Cup_squads",
    participants: [
      "Australia",
      "Bangladesh",
      "England",
      "India",
      "Kenya",
      "New Zealand",
      "Pakistan",
      "Scotland",
      "South Africa",
      "Sri Lanka",
      "West Indies",
      "Zimbabwe",
    ],
  },
  {
    year: 2003,
    page: "2003_Cricket_World_Cup_squads",
    participants: [
      "Australia",
      "Bangladesh",
      "Canada",
      "England",
      "India",
      "Kenya",
      "Namibia",
      "Netherlands",
      "New Zealand",
      "Pakistan",
      "South Africa",
      "Sri Lanka",
      "West Indies",
      "Zimbabwe",
    ],
  },
  {
    year: 2007,
    page: "2007_Cricket_World_Cup_squads",
    participants: [
      "Australia",
      "Bangladesh",
      "Bermuda",
      "Canada",
      "England",
      "India",
      "Ireland",
      "Kenya",
      "Netherlands",
      "New Zealand",
      "Pakistan",
      "Scotland",
      "South Africa",
      "Sri Lanka",
      "West Indies",
      "Zimbabwe",
    ],
  },
  {
    year: 2011,
    page: "2011_Cricket_World_Cup_squads",
    participants: [
      "Australia",
      "Bangladesh",
      "Canada",
      "England",
      "India",
      "Ireland",
      "Kenya",
      "Netherlands",
      "New Zealand",
      "Pakistan",
      "South Africa",
      "Sri Lanka",
      "West Indies",
      "Zimbabwe",
    ],
  },
  {
    year: 2015,
    page: "2015_Cricket_World_Cup_squads",
    participants: [
      "Afghanistan",
      "Australia",
      "Bangladesh",
      "England",
      "India",
      "Ireland",
      "New Zealand",
      "Pakistan",
      "Scotland",
      "South Africa",
      "Sri Lanka",
      "United Arab Emirates",
      "West Indies",
      "Zimbabwe",
    ],
  },
  {
    year: 2019,
    page: "2019_Cricket_World_Cup_squads",
    participants: [
      "Afghanistan",
      "Australia",
      "Bangladesh",
      "England",
      "India",
      "New Zealand",
      "Pakistan",
      "South Africa",
      "Sri Lanka",
      "West Indies",
    ],
  },
  {
    year: 2023,
    page: "2023_Cricket_World_Cup_squads",
    participants: [
      "Afghanistan",
      "Australia",
      "Bangladesh",
      "England",
      "India",
      "Netherlands",
      "New Zealand",
      "Pakistan",
      "South Africa",
      "Sri Lanka",
    ],
  },
];

const COUNTRY_STRENGTH = {
  Afghanistan: 74,
  Australia: 87,
  Bangladesh: 73,
  Bermuda: 59,
  Canada: 61,
  England: 82,
  India: 85,
  Ireland: 69,
  Kenya: 67,
  Namibia: 62,
  Netherlands: 66,
  "New Zealand": 80,
  Pakistan: 83,
  Scotland: 64,
  "South Africa": 84,
  "Sri Lanka": 79,
  "United Arab Emirates": 60,
  "West Indies": 81,
  Zimbabwe: 68,
};

const SQUAD_STRENGTH_OVERRIDES = {
  "australia-1987": 89,
  "australia-1992": 82,
  "australia-2003": 96,
  "australia-2007": 97,
  "australia-2011": 86,
  "bangladesh-2007": 68,
  "bangladesh-2011": 72,
  "bangladesh-2015": 77,
  "bangladesh-2023": 80,
  "england-1987": 84,
  "england-1992": 88,
  "england-2011": 76,
  "england-2015": 75,
  "india-1987": 86,
  "india-1992": 81,
  "india-1996": 88,
  "india-1999": 83,
  "india-2003": 91,
  "india-2007": 80,
  "india-2015": 87,
  "ireland-2015": 71,
  "new-zealand-1992": 87,
  "new-zealand-2015": 90,
  "pakistan-1983": 82,
  "pakistan-1987": 84,
  "pakistan-1996": 85,
  "pakistan-1999": 89,
  "pakistan-2003": 83,
  "south-africa-1992": 84,
  "south-africa-1996": 87,
  "south-africa-2003": 88,
  "south-africa-2007": 87,
  "south-africa-2011": 85,
  "south-africa-2015": 89,
  "south-africa-2019": 79,
  "south-africa-2023": 82,
  "sri-lanka-1983": 70,
  "sri-lanka-1987": 72,
  "sri-lanka-1992": 74,
  "sri-lanka-1999": 82,
  "sri-lanka-2003": 83,
  "sri-lanka-2007": 88,
  "sri-lanka-2011": 91,
  "sri-lanka-2015": 82,
  "sri-lanka-2019": 76,
  "sri-lanka-2023": 79,
  "west-indies-1983": 93,
  "west-indies-1987": 88,
  "west-indies-1992": 84,
  "west-indies-1999": 81,
  "west-indies-2003": 79,
  "west-indies-2007": 82,
  "west-indies-2011": 78,
  "west-indies-2015": 80,
  "west-indies-2019": 79,
  "zimbabwe-1992": 66,
  "zimbabwe-1996": 67,
  "zimbabwe-2003": 72,
  "zimbabwe-2007": 66,
  "zimbabwe-2011": 64,
  "zimbabwe-2015": 63,
};

const COUNTRY_NOTE_TRAITS = {
  Afghanistan: "fearless spin pressure and improving middle-order composure",
  Australia: "hard-nosed batting, tournament edge, and pace depth",
  Bangladesh: "stubborn batting and high-value all-round utility",
  Bermuda: "associate grit and experienced club-cricket nous",
  Canada: "scrappy batting and seam-heavy ODI hustle",
  England: "structured batting and seam resources that can snowball quickly",
  India: "batting depth, spin control, and enormous pressure-game expectations",
  Ireland: "upset energy, seam discipline, and aggressive middle-order intent",
  Kenya: "disciplined ODI shape and genuine giant-killing credibility",
  Namibia: "breakthrough ambition with honest seam effort and competitive batting",
  Netherlands: "adaptable one-day cricket with clever all-round balance",
  "New Zealand": "calm decision-making and bowlers who keep dragging games deep",
  Pakistan: "volatility, pace upside, and match-turning individual quality",
  Scotland: "organized associate cricket with proper top-order value",
  "South Africa": "athletic balance and relentless wicket-taking options",
  "Sri Lanka": "creative ODI batting and spin that can change the tempo of a chase",
  "United Arab Emirates": "resourceful associate cricket with practical middle-order value",
  "West Indies": "natural power and fast-bowling menace that can break games open",
  Zimbabwe: "stubborn all-round resistance and a history of awkward upsets",
};

const MANUAL_RATING_OVERRIDES = {
  "Allan Border": { role: "batsman", batting: 88, bowling: 54 },
  "Allan Lamb": { role: "batsman", batting: 85, bowling: 18 },
  "Aravinda de Silva": { role: "batsman", batting: 94, bowling: 62 },
  "Brian McMillan": { role: "bowler", batting: 76, bowling: 84 },
  "Chris Cairns": { role: "bowler", batting: 82, bowling: 84 },
  "Chris Harris": { role: "bowler", batting: 72, bowling: 77 },
  "Courtney Walsh": { role: "bowler", batting: 30, bowling: 93 },
  "Curtly Ambrose": { role: "bowler", batting: 18, bowling: 95 },
  "Dean Jones": { role: "batsman", batting: 90, bowling: 24 },
  "Desmond Haynes": { role: "batsman", batting: 88, bowling: 12 },
  "Graham Gooch": { role: "batsman", batting: 91, bowling: 28 },
  "Hansie Cronje": { role: "batsman", batting: 83, bowling: 70 },
  "Heath Streak": { role: "bowler", batting: 71, bowling: 84 },
  "Ian Botham": { role: "bowler", batting: 84, bowling: 88 },
  "Inzamam-ul-Haq": { role: "batsman", batting: 89, bowling: 12 },
  "Javed Miandad": { role: "batsman", batting: 91, bowling: 24 },
  "Lance Klusener": { role: "bowler", batting: 81, bowling: 87 },
  "Martin Crowe": { role: "batsman", batting: 91, bowling: 24 },
  "Michael Hussey": { role: "batsman", batting: 89, bowling: 18 },
  "Misbah-ul-Haq": { role: "batsman", batting: 85, bowling: 8 },
  "Morne Morkel": { role: "bowler", batting: 28, bowling: 88 },
  "Muttiah Muralitharan": { role: "bowler", batting: 18, bowling: 96 },
  "Nathan Astle": { role: "batsman", batting: 84, bowling: 52 },
  "Rashid Latif": { role: "wicketkeeper", batting: 72, bowling: 0 },
  "Romesh Kaluwitharana": { role: "wicketkeeper", batting: 81, bowling: 0 },
  "Sanath Jayasuriya": { role: "batsman", batting: 94, bowling: 74 },
  "Saeed Anwar": { role: "batsman", batting: 92, bowling: 8 },
  "Shoaib Akhtar": { role: "bowler", batting: 24, bowling: 94 },
  "Sourav Ganguly": { role: "batsman", batting: 91, bowling: 58 },
  "Stephen Fleming": { role: "batsman", batting: 87, bowling: 18 },
  "Tillakaratne Dilshan": { role: "batsman", batting: 89, bowling: 70 },
  "Virender Sehwag": { role: "batsman", batting: 93, bowling: 34 },
  "Yuvraj Singh": { role: "batsman", batting: 89, bowling: 76 },
};

const SEEDED_RATINGS = new Map();
for (const player of SEEDED_PLAYERS) {
  const key = normalizeName(player.name);
  if (!SEEDED_RATINGS.has(key)) {
    SEEDED_RATINGS.set(key, {
      role: player.role,
      batting: player.batting,
      bowling: player.bowling,
    });
  }
}

function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function slugify(value) {
  return normalizeName(value).replace(/\s+/g, "-");
}

function squadIdFor(country, year) {
  const countrySlug = country === "United Arab Emirates" ? "uae" : slugify(country);
  return `${countrySlug}-${year}`;
}

function decodeEntities(text) {
  return text
    .replace(/&#(x?[0-9a-fA-F]+);/g, (_, code) => {
      if (code.startsWith("x") || code.startsWith("X")) {
        return String.fromCodePoint(parseInt(code.slice(1), 16));
      }

      return String.fromCodePoint(parseInt(code, 10));
    })
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(html) {
  return decodeEntities(
    html
      .replace(/<sup[\s\S]*?<\/sup>/gi, "")
      .replace(/<br\s*\/?>/gi, " / ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function hashValue(text) {
  let value = 0;
  for (const char of text) {
    value = (value * 31 + char.charCodeAt(0)) % 1000003;
  }

  return value;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function titleForSquad(country, year) {
  if (country === "United Arab Emirates") {
    return `UAE ${year}`;
  }

  return `${country} ${year}`;
}

function buildSquadNote(country, year) {
  const trait = COUNTRY_NOTE_TRAITS[country] || "adaptable one-day cricket and competitive balance";
  const possessive = country.endsWith("s") ? `${country}'` : `${country}'s`;
  return `${possessive} ${year} World Cup squad with ${trait}.`;
}

function getSquadStrength(country, year) {
  const squadId = squadIdFor(country, year);
  return SQUAD_STRENGTH_OVERRIDES[squadId] ?? COUNTRY_STRENGTH[country] ?? 70;
}

function normalizeRoleText(text) {
  return normalizeName(text);
}

function inferRoleHint(player, index, total) {
  const nameText = normalizeRoleText(player.name);
  const roleText = normalizeRoleText(player.roleText || "");
  const bowlingText = normalizeRoleText(player.bowlingStyle || "");

  if (roleText.includes("wicket keeper") || nameText.includes(" wk ")) {
    return "wicketkeeper";
  }

  if (roleText.includes("all rounder")) {
    return "allrounder";
  }

  if (roleText.includes("batter") || roleText.includes("batsman")) {
    return "batsman";
  }

  if (roleText.includes("bowler")) {
    return "bowler";
  }

  if (bowlingText.includes("wicket keeper") || nameText.endsWith(" wk")) {
    return "wicketkeeper";
  }

  if (!bowlingText || bowlingText === "-" || bowlingText === "none") {
    return "batsman";
  }

  if (index >= total - 4) {
    return "bowler";
  }

  if (index <= 5) {
    return "batsman";
  }

  if (index <= 8) {
    return "allrounder";
  }

  return "bowler";
}

function buildPartTimeBowling(name, bowlingStyle) {
  if (!bowlingStyle || bowlingStyle === "-" || bowlingStyle === "None") {
    return 0;
  }

  const bowlingText = normalizeRoleText(bowlingStyle);
  const seed = hashValue(`${name}-${bowlingStyle}`);

  if (/off|leg|orthodox|slow|medium/.test(bowlingText)) {
    return 18 + (seed % 18);
  }

  if (/fast/.test(bowlingText)) {
    return 26 + (seed % 20);
  }

  return 12 + (seed % 12);
}

function genericRating(name, roleHint, country, year, index, total, bowlingStyle) {
  const squadStrength = getSquadStrength(country, year);
  const seedA = hashValue(`${name}-${country}-${year}`);
  const seedB = hashValue(`${country}-${name}-${year}`);

  if (roleHint === "wicketkeeper") {
    return {
      role: "wicketkeeper",
      batting: clamp(squadStrength - 2 + (seedA % 11) - 3, 64, 90),
      bowling: 0,
    };
  }

  if (roleHint === "batsman") {
    return {
      role: "batsman",
      batting: clamp(squadStrength + 2 + (seedA % 12) - Math.floor(index / 2), 62, 95),
      bowling: buildPartTimeBowling(name, bowlingStyle),
    };
  }

  if (roleHint === "bowler") {
    return {
      role: "bowler",
      batting: clamp(16 + (seedA % 22) + Math.max(0, 4 - (total - index)), 8, 58),
      bowling: clamp(squadStrength + 3 + (seedB % 11), 68, 95),
    };
  }

  const batting = clamp(squadStrength - 16 + (seedA % 14), 56, 79);
  const bowling = clamp(squadStrength - 13 + (seedB % 14), 55, 81);

  return {
    role: batting >= bowling ? "batsman" : "bowler",
    batting,
    bowling,
  };
}

function buildRating(player, country, year, index, total) {
  const normalized = normalizeName(player.name);
  const seeded = SEEDED_RATINGS.get(normalized);
  const manual = MANUAL_RATING_OVERRIDES[player.name];

  if (manual) {
    return manual;
  }

  if (seeded) {
    return seeded;
  }

  const roleHint = inferRoleHint(player, index, total);
  return genericRating(player.name, roleHint, country, year, index, total, player.bowlingStyle);
}

function buildBlurb(rating) {
  if (rating.role === "wicketkeeper") {
    return "Keeping security with one-day batting value.";
  }

  if (rating.batting > 50 && rating.bowling > 50) {
    return "A dual-skill option who strengthens ODI balance.";
  }

  if (rating.role === "bowler") {
    return "Bowling depth aimed at buying wickets, not just dots.";
  }

  return "A batting option built to give the XI structure and tempo.";
}

function extractSections(html) {
  const matches = [...html.matchAll(/<h([23])\b[^>]*>([\s\S]*?)<\/h\1>/gi)];
  return matches.map((match, index) => ({
    text: stripHtml(match[2]),
    start: match.index,
    end: match.index + match[0].length,
    nextStart: matches[index + 1]?.index ?? html.length,
  }));
}

function extractTables(sectionHtml) {
  const tables = [];
  let cursor = 0;

  while (cursor < sectionHtml.length) {
    const start = sectionHtml.indexOf("<table", cursor);
    if (start === -1) {
      break;
    }

    let depth = 1;
    let position = start + 6;

    while (depth > 0) {
      const nextOpen = sectionHtml.indexOf("<table", position);
      const nextClose = sectionHtml.indexOf("</table>", position);

      if (nextClose === -1) {
        break;
      }

      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth += 1;
        position = nextOpen + 6;
        continue;
      }

      depth -= 1;
      position = nextClose + 8;
    }

    tables.push(sectionHtml.slice(start, position));
    cursor = position;
  }

  return tables;
}

function parseHtmlTable(tableHtml) {
  const rows = [...tableHtml.matchAll(/<tr[\s\S]*?>([\s\S]*?)<\/tr>/gi)].map((match) => match[1]);
  const parsedRows = rows.map((rowHtml) =>
    [...rowHtml.matchAll(/<t([hd])\b[^>]*>([\s\S]*?)<\/t\1>/gi)].map((match) =>
      stripHtml(match[2]),
    ),
  );

  const [headers, ...bodyRows] = parsedRows;
  return {
    headers,
    rows: bodyRows.filter((row) => row.length > 0),
  };
}

function pickSquadTable(sectionHtml) {
  const tables = extractTables(sectionHtml);

  for (const tableHtml of tables) {
    const parsed = parseHtmlTable(tableHtml);
    const headers = parsed.headers.map((header) => normalizeRoleText(header));
    const hasPlayerHeader = headers.some((header) => header.includes("player") || header.includes("name"));

    if (hasPlayerHeader && parsed.rows.length >= 11) {
      return parsed;
    }
  }

  return null;
}

function cleanPlayerName(name) {
  return name
    .replace(/\(\s*c\s*\)/gi, "")
    .replace(/\(\s*vc\s*\)/gi, "")
    .replace(/\(\s*wk\s*\)/gi, "")
    .replace(/\(\s*captain\s*\)/gi, "")
    .replace(/\(\s*withdrawn\s*\)/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function buildPlayerRows(headers, rows) {
  const normalizedHeaders = headers.map((header) => normalizeRoleText(header));
  const findIndex = (...candidates) =>
    normalizedHeaders.findIndex((header) => candidates.some((candidate) => header.includes(candidate)));

  const nameIndex =
    findIndex("player", "name") >= 0 ? findIndex("player", "name") : 0;
  const roleIndex = findIndex("role");
  const bowlingIndex = findIndex("bowling style", "bowling");

  return rows
    .map((cells) => {
      const name = cleanPlayerName(cells[nameIndex] || "");
      if (!name || /withdrawn/i.test(cells[nameIndex] || "")) {
        return null;
      }

      return {
        name,
        roleText: roleIndex >= 0 ? cells[roleIndex] : "",
        bowlingStyle: bowlingIndex >= 0 ? cells[bowlingIndex] : "",
      };
    })
    .filter(Boolean);
}

async function fetchPageHtml(page) {
  const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${page}&prop=text&formatversion=2&format=json`;
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await fetch(url, {
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; 400-0/1.0; +https://example.com/contact)",
      },
    });

    if (response.ok) {
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 350));
      return data.parse.text;
    }

    if (response.status !== 429 || attempt === 4) {
      throw new Error(`Failed to fetch ${page}: ${response.status} ${response.statusText}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 1500 * (attempt + 1)));
  }
}

async function buildGeneratedData() {
  const squads = [];
  const players = [];

  for (const worldCup of WORLD_CUPS) {
    const html = await fetchPageHtml(worldCup.page);
    const sections = extractSections(html);

    for (const country of worldCup.participants) {
      const squadId = squadIdFor(country, worldCup.year);
      if (EXISTING_SQUAD_IDS.has(squadId)) {
        continue;
      }

      const section = sections.find((candidate) => candidate.text === country);
      if (!section) {
        throw new Error(`Missing section for ${country} in ${worldCup.page}`);
      }

      const sectionHtml = html.slice(section.end, section.nextStart);
      const parsed = pickSquadTable(sectionHtml);
      if (!parsed) {
        throw new Error(`Missing squad table for ${country} in ${worldCup.page}`);
      }

      const playerRows = buildPlayerRows(parsed.headers, parsed.rows);

      if (playerRows.length < 11) {
        throw new Error(`${country} ${worldCup.year} only yielded ${playerRows.length} players`);
      }

      squads.push({
        id: squadId,
        label: titleForSquad(country, worldCup.year),
        country,
        year: worldCup.year,
        note: buildSquadNote(country, worldCup.year),
      });

      for (const [index, player] of playerRows.entries()) {
        const rating = buildRating(player, country, worldCup.year, index, playerRows.length);
        players.push({
          id: `${squadId}-${slugify(player.name)}`,
          name: player.name,
          squadId,
          team: country,
          year: worldCup.year,
          role: rating.role,
          batting: rating.batting,
          bowling: rating.bowling,
          blurb: buildBlurb(rating),
        });
      }
    }
  }

  squads.sort((left, right) => left.year - right.year || left.country.localeCompare(right.country));
  players.sort((left, right) =>
    left.year - right.year ||
    left.team.localeCompare(right.team) ||
    left.name.localeCompare(right.name),
  );

  return { squads, players };
}

function toModuleCode({ squads, players }) {
  return `export const GENERATED_DRAFT_SQUADS = ${JSON.stringify(squads, null, 2)};\n\nexport const GENERATED_PLAYERS = ${JSON.stringify(players, null, 2)};\n`;
}

const data = await buildGeneratedData();
await fs.writeFile(OUTPUT_FILE, toModuleCode(data));

console.log(
  `Generated ${data.squads.length} additional squads and ${data.players.length} additional players.`,
);
