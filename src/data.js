import { EXTRA_PLAYERS } from "./extra-players.js";
import {
  AUDITED_PLAYER_NAME_OVERRIDES,
  AUDITED_PLAYER_SUMMARY,
} from "./generated-player-audit.js";
import {
  PLAYER_INTERVAL_ENRICHMENT_BY_ID,
  PLAYER_INTERVAL_ENRICHMENT_SUMMARY,
} from "./generated-player-enrichment.js";
import { GENERATED_DRAFT_SQUADS, GENERATED_PLAYERS } from "./generated-world-cup-data.js";

export const ROLE_ORDER = ["batsman", "wicketkeeper", "bowler"];

export const ROLE_LABELS = {
  batsman: "Batsman",
  wicketkeeper: "WK",
  bowler: "Bowler",
};

export const REQUIRED_ROLES = {
  batsman: 1,
  wicketkeeper: 1,
  bowler: 1,
};

const STRIPPABLE_NAME_FLAGS = new Set([
  "c",
  "captain",
  "vc",
  "vice captain",
  "vice-captain",
  "wk",
]);

const DATA_PLAYER_NAME_ALIASES = new Map([
  ["Yousuf Youhana", "Mohammad Yousuf"],
]);

function parseNameFlags(value) {
  return value
    .toLowerCase()
    .replace(/\band\b/g, "&")
    .split(/[,/&]+/)
    .map((token) => token.trim().replace(/\s+/g, " "))
    .filter(Boolean);
}

function hasOnlyMetadataFlags(value) {
  const tokens = parseNameFlags(value);
  return tokens.length > 0 && tokens.every((token) => STRIPPABLE_NAME_FLAGS.has(token));
}

function normalizePlayerName(name) {
  const cleaned = name
    .replace(/\(([^)]+)\)/g, (match, contents) => (hasOnlyMetadataFlags(contents) ? "" : match))
    .replace(/\s+/g, " ")
    .trim();

  return DATA_PLAYER_NAME_ALIASES.get(cleaned) || cleaned;
}

function hasWicketkeeperFlag(name) {
  const groups = [...name.matchAll(/\(([^)]+)\)/g)];
  return groups.some((group) => parseNameFlags(group[1]).includes("wk"));
}

const BASE_DRAFT_SQUADS = [
  {
    id: "india-1983",
    label: "India 1983",
    country: "India",
    year: 1983,
    note: "Swing, grit, and a lineup that still believes every total is defendable.",
  },
  {
    id: "pakistan-1992",
    label: "Pakistan 1992",
    country: "Pakistan",
    year: 1992,
    note: "Peak cornered-tigers energy with elite fast bowling upside.",
  },
  {
    id: "sri-lanka-1996",
    label: "Sri Lanka 1996",
    country: "Sri Lanka",
    year: 1996,
    note: "Aggressive ODI batting before most teams had caught up tactically.",
  },
  {
    id: "west-indies-1996",
    label: "West Indies 1996",
    country: "West Indies",
    year: 1996,
    note: "Silk in the top order and serious hostility with the new ball.",
  },
  {
    id: "australia-1999",
    label: "Australia 1999",
    country: "Australia",
    year: 1999,
    note: "Tournament steel, ruthless bowling, and no panic in tight finishes.",
  },
  {
    id: "south-africa-1999",
    label: "South Africa 1999",
    country: "South Africa",
    year: 1999,
    note: "Loaded with all-round quality and relentless seam options.",
  },
  {
    id: "india-2011",
    label: "India 2011",
    country: "India",
    year: 2011,
    note: "Control through the middle overs and batting built for pressure chases.",
  },
  {
    id: "australia-2015",
    label: "Australia 2015",
    country: "Australia",
    year: 2015,
    note: "Fast-scoring batting backed by left-arm pace and tournament punch.",
  },
  {
    id: "new-zealand-2019",
    label: "New Zealand 2019",
    country: "New Zealand",
    year: 2019,
    note: "Calm leadership and a bowling group that keeps dragging games deep.",
  },
  {
    id: "england-2019",
    label: "England 2019",
    country: "England",
    year: 2019,
    note: "Explosive white-ball batting with enough wicket-takers to back it up.",
  },
  {
    id: "bangladesh-2019",
    label: "Bangladesh 2019",
    country: "Bangladesh",
    year: 2019,
    note: "A golden modern ODI core with elite all-round production.",
  },
  {
    id: "india-2023",
    label: "India 2023",
    country: "India",
    year: 2023,
    note: "Top-order command and a fast-bowling attack that can bury a chase.",
  },
  {
    id: "pakistan-2023",
    label: "Pakistan 2023",
    country: "Pakistan",
    year: 2023,
    note: "Stylish batting and attack leaders who can crack open powerplays.",
  },
  {
    id: "afghanistan-2023",
    label: "Afghanistan 2023",
    country: "Afghanistan",
    year: 2023,
    note: "Spin-heavy threat with genuine upset potential and fearless batting moments.",
  },
  {
    id: "zimbabwe-1999",
    label: "Zimbabwe 1999",
    country: "Zimbabwe",
    year: 1999,
    note: "A golden Zimbabwe side with proper all-round stubbornness and upset history.",
  },
  {
    id: "kenya-2003",
    label: "Kenya 2003",
    country: "Kenya",
    year: 2003,
    note: "The semifinal run side that proved disciplined ODI cricket could punch above its weight.",
  },
  {
    id: "bermuda-2007",
    label: "Bermuda 2007",
    country: "Bermuda",
    year: 2007,
    note: "A landmark qualifier squad with experienced club-cricket steel.",
  },
  {
    id: "canada-2011",
    label: "Canada 2011",
    country: "Canada",
    year: 2011,
    note: "A multinational ODI unit with hitters, seamers, and plenty of unpredictability.",
  },
  {
    id: "ireland-2011",
    label: "Ireland 2011",
    country: "Ireland",
    year: 2011,
    note: "The giant-killing Irish core that could turn one session into chaos.",
  },
  {
    id: "scotland-2015",
    label: "Scotland 2015",
    country: "Scotland",
    year: 2015,
    note: "A balanced modern Scotland side with real batting craft and honest seam depth.",
  },
  {
    id: "uae-2015",
    label: "UAE 2015",
    country: "United Arab Emirates",
    year: 2015,
    note: "An associate squad with experienced middle-order batting and crafty spin support.",
  },
  {
    id: "namibia-2003",
    label: "Namibia 2003",
    country: "Namibia",
    year: 2003,
    note: "Namibia's breakthrough World Cup side, gritty and highly motivated.",
  },
  {
    id: "netherlands-2023",
    label: "Netherlands 2023",
    country: "Netherlands",
    year: 2023,
    note: "A smart Dutch side with modern all-round depth and real tactical flexibility.",
  },
];

const BASE_PLAYER_POOL = [
  {
    id: "sunil-gavaskar",
    name: "Sunil Gavaskar",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "batsman",
    batting: 87,
    bowling: 12,
    blurb: "Technical certainty for tricky surfaces and pressure starts.",
  },
  {
    id: "kris-srikkanth",
    name: "Kris Srikkanth",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "batsman",
    batting: 82,
    bowling: 20,
    blurb: "Chaos-up-top intent before that became the white-ball default.",
  },
  {
    id: "mohinder-amarnath",
    name: "Mohinder Amarnath",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "batsman",
    batting: 80,
    bowling: 72,
    blurb: "A pressure sponge who still gives you usable overs.",
  },
  {
    id: "syed-kirmani",
    name: "Syed Kirmani",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "wicketkeeper",
    batting: 72,
    bowling: 0,
    blurb: "Safe hands and composed lower-order resistance.",
  },
  {
    id: "kapil-dev",
    name: "Kapil Dev",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "bowler",
    batting: 84,
    bowling: 88,
    blurb: "Leadership, seam, and one of ODI cricket's original game-breakers.",
  },
  {
    id: "javed-miandad",
    name: "Javed Miandad",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "batsman",
    batting: 90,
    bowling: 18,
    blurb: "Street-smart control and total command of a chase.",
  },
  {
    id: "inzamam-ul-haq",
    name: "Inzamam-ul-Haq",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "batsman",
    batting: 89,
    bowling: 12,
    blurb: "Big-tournament timing with heavy middle-order presence.",
  },
  {
    id: "aamir-sohail",
    name: "Aamir Sohail",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "batsman",
    batting: 82,
    bowling: 18,
    blurb: "Left-handed tempo setter with strong ODI range.",
  },
  {
    id: "moin-khan",
    name: "Moin Khan",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "wicketkeeper",
    batting: 76,
    bowling: 0,
    blurb: "Lower-order scrapper with sharp glovework.",
  },
  {
    id: "imran-khan",
    name: "Imran Khan",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "bowler",
    batting: 83,
    bowling: 91,
    blurb: "Aura, new-ball discipline, and champion-level nerve.",
  },
  {
    id: "wasim-akram",
    name: "Wasim Akram",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "bowler",
    batting: 54,
    bowling: 96,
    blurb: "Reverse swing royalty and a complete ODI fast-bowling weapon.",
  },
  {
    id: "waqar-younis",
    name: "Waqar Younis",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "bowler",
    batting: 30,
    bowling: 91,
    blurb: "Pace, dip, yorkers, and stump-shattering endings.",
  },
  {
    id: "aravinda-de-silva",
    name: "Aravinda de Silva",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "batsman",
    batting: 92,
    bowling: 34,
    blurb: "The calm genius behind Sri Lanka's ODI leap forward.",
  },
  {
    id: "sanath-jayasuriya",
    name: "Sanath Jayasuriya",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "batsman",
    batting: 93,
    bowling: 76,
    blurb: "A powerplay revolution in human form.",
  },
  {
    id: "asaranka-gurusinha",
    name: "Asanka Gurusinha",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "batsman",
    batting: 80,
    bowling: 12,
    blurb: "Glue batting that let the stars attack around him.",
  },
  {
    id: "romesh-kaluwitharana",
    name: "Romesh Kaluwitharana",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "wicketkeeper",
    batting: 83,
    bowling: 0,
    blurb: "A wicketkeeper-opener who helped redefine ODI starts.",
  },
  {
    id: "muttiah-muralitharan",
    name: "Muttiah Muralitharan",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "bowler",
    batting: 22,
    bowling: 95,
    blurb: "Middle-over spin pressure that changes how innings breathe.",
  },
  {
    id: "chaminda-vaas",
    name: "Chaminda Vaas",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "bowler",
    batting: 38,
    bowling: 89,
    blurb: "Left-arm seam and economy that squeezes plans dry.",
  },
  {
    id: "brian-lara",
    name: "Brian Lara",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "batsman",
    batting: 97,
    bowling: 10,
    blurb: "A batting genius with the kind of ceiling only superstars get.",
  },
  {
    id: "shivnarine-chanderpaul",
    name: "Shivnarine Chanderpaul",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "batsman",
    batting: 86,
    bowling: 18,
    blurb: "Unorthodox shape, highly orthodox run production.",
  },
  {
    id: "carl-hooper",
    name: "Carl Hooper",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "batsman",
    batting: 84,
    bowling: 72,
    blurb: "A smooth all-round package with extra off-spin utility.",
  },
  {
    id: "junior-murray",
    name: "Junior Murray",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "wicketkeeper",
    batting: 76,
    bowling: 0,
    blurb: "Functional lower-order runs and tidy keeping.",
  },
  {
    id: "curtly-ambrose",
    name: "Curtly Ambrose",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "bowler",
    batting: 20,
    bowling: 92,
    blurb: "Bounce, menace, and lengths that felt permanently awkward.",
  },
  {
    id: "courtney-walsh",
    name: "Courtney Walsh",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "bowler",
    batting: 22,
    bowling: 91,
    blurb: "Relentless seam bowling with big-tournament control.",
  },
  {
    id: "ian-bishop",
    name: "Ian Bishop",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "bowler",
    batting: 24,
    bowling: 87,
    blurb: "Smart pace bowling with lift and late-over value.",
  },
  {
    id: "ricky-ponting",
    name: "Ricky Ponting",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "batsman",
    batting: 97,
    bowling: 16,
    blurb: "A final-boss No. 3 who earned his place in the 95-plus tier.",
  },
  {
    id: "michael-bevan",
    name: "Michael Bevan",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "batsman",
    batting: 88,
    bowling: 26,
    blurb: "The original chase mechanic in human form.",
  },
  {
    id: "steve-waugh",
    name: "Steve Waugh",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "batsman",
    batting: 86,
    bowling: 68,
    blurb: "Tournament steel and deceptively useful overs.",
  },
  {
    id: "adam-gilchrist",
    name: "Adam Gilchrist",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "wicketkeeper",
    batting: 95,
    bowling: 0,
    blurb: "A wicketkeeper-opener who always threatened to break the script.",
  },
  {
    id: "shane-warne",
    name: "Shane Warne",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "bowler",
    batting: 36,
    bowling: 96,
    blurb: "One of the few bowlers who belongs comfortably in the 95-plus tier.",
  },
  {
    id: "glenn-mcgrath",
    name: "Glenn McGrath",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "bowler",
    batting: 18,
    bowling: 95,
    blurb: "Metronomic accuracy and major-event suffocation.",
  },
  {
    id: "damien-fleming",
    name: "Damien Fleming",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "bowler",
    batting: 24,
    bowling: 84,
    blurb: "Swing and control that fit beautifully around the headline stars.",
  },
  {
    id: "herschelle-gibbs",
    name: "Herschelle Gibbs",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "batsman",
    batting: 90,
    bowling: 14,
    blurb: "Shot range and powerplay damage in equal measure.",
  },
  {
    id: "jacques-kallis",
    name: "Jacques Kallis",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "batsman",
    batting: 92,
    bowling: 81,
    blurb: "Structure with the bat, control with the ball, value everywhere.",
  },
  {
    id: "jonty-rhodes",
    name: "Jonty Rhodes",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "batsman",
    batting: 83,
    bowling: 22,
    blurb: "A sharp ODI middle-order operator who keeps tempo honest.",
  },
  {
    id: "mark-boucher",
    name: "Mark Boucher",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "wicketkeeper",
    batting: 84,
    bowling: 0,
    blurb: "Dependable keeping with useful lower-order force.",
  },
  {
    id: "lance-klusener",
    name: "Lance Klusener",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "bowler",
    batting: 86,
    bowling: 84,
    blurb: "Brute-force finishing and a serious seam-up wicket threat.",
  },
  {
    id: "shaun-pollock",
    name: "Shaun Pollock",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "bowler",
    batting: 72,
    bowling: 89,
    blurb: "Line, length, brains, and genuine batting depth.",
  },
  {
    id: "allan-donald",
    name: "Allan Donald",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "bowler",
    batting: 18,
    bowling: 90,
    blurb: "Hard pace and relentless hostility through the deck.",
  },
  {
    id: "sachin-tendulkar",
    name: "Sachin Tendulkar",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 98,
    bowling: 28,
    blurb: "Run-making certainty and a true 95-plus all-timer.",
  },
  {
    id: "virender-sehwag",
    name: "Virender Sehwag",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 91,
    bowling: 10,
    blurb: "An opening overs detonator with no patience for sighters.",
  },
  {
    id: "virat-kohli",
    name: "Virat Kohli",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 94,
    bowling: 8,
    blurb: "The chase engine you trust when the required rate tightens.",
  },
  {
    id: "ms-dhoni",
    name: "MS Dhoni",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "wicketkeeper",
    batting: 92,
    bowling: 0,
    blurb: "Finishing brains, finishing power, and permanent calm.",
  },
  {
    id: "yuvraj-singh",
    name: "Yuvraj Singh",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 90,
    bowling: 78,
    blurb: "A tournament-shaping all-round ODI package.",
  },
  {
    id: "zaheer-khan",
    name: "Zaheer Khan",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "bowler",
    batting: 22,
    bowling: 89,
    blurb: "New-ball thinking and a brilliant slower-ball toolkit.",
  },
  {
    id: "harbhajan-singh",
    name: "Harbhajan Singh",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "bowler",
    batting: 30,
    bowling: 86,
    blurb: "A middle-over off-spin pressure valve with personality.",
  },
  {
    id: "david-warner",
    name: "David Warner",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "batsman",
    batting: 92,
    bowling: 10,
    blurb: "Powerplay damage that changes field settings instantly.",
  },
  {
    id: "steve-smith",
    name: "Steve Smith",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "batsman",
    batting: 93,
    bowling: 18,
    blurb: "Control, tempo, and run accumulation from awkward angles.",
  },
  {
    id: "glenn-maxwell",
    name: "Glenn Maxwell",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "batsman",
    batting: 89,
    bowling: 73,
    blurb: "High-variance batting with very real off-spin value.",
  },
  {
    id: "brad-haddin",
    name: "Brad Haddin",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "wicketkeeper",
    batting: 82,
    bowling: 0,
    blurb: "Busy ODI keeper-batter with final-stage edge.",
  },
  {
    id: "mitchell-starc",
    name: "Mitchell Starc",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "bowler",
    batting: 36,
    bowling: 95,
    blurb: "Left-arm thunder and one of ODI cricket's true 95-plus bowlers.",
  },
  {
    id: "mitchell-johnson",
    name: "Mitchell Johnson",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "bowler",
    batting: 48,
    bowling: 88,
    blurb: "Pace and intimidation with extra lower-order sting.",
  },
  {
    id: "james-faulkner",
    name: "James Faulkner",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "bowler",
    batting: 79,
    bowling: 80,
    blurb: "A proper white-ball all-round specialist.",
  },
  {
    id: "kane-williamson",
    name: "Kane Williamson",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "batsman",
    batting: 93,
    bowling: 18,
    blurb: "Low pulse, high IQ, ideal for knockout cricket.",
  },
  {
    id: "martin-guptill",
    name: "Martin Guptill",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "batsman",
    batting: 88,
    bowling: 8,
    blurb: "A clean ball-striker who can flatten group games quickly.",
  },
  {
    id: "ross-taylor",
    name: "Ross Taylor",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "batsman",
    batting: 89,
    bowling: 10,
    blurb: "Middle-order control with strong spin hitting instincts.",
  },
  {
    id: "tom-latham",
    name: "Tom Latham",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "wicketkeeper",
    batting: 84,
    bowling: 0,
    blurb: "Reliable keeping with left-handed batting balance.",
  },
  {
    id: "jimmy-neesham",
    name: "Jimmy Neesham",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "batsman",
    batting: 78,
    bowling: 74,
    blurb: "A utility all-round option who can change an innings late.",
  },
  {
    id: "trent-boult",
    name: "Trent Boult",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "bowler",
    batting: 26,
    bowling: 90,
    blurb: "Early swing and clever angles for white-ball control.",
  },
  {
    id: "tim-southee",
    name: "Tim Southee",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "bowler",
    batting: 42,
    bowling: 87,
    blurb: "New-ball craft and valuable late-order hitting.",
  },
  {
    id: "lockie-ferguson",
    name: "Lockie Ferguson",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "bowler",
    batting: 18,
    bowling: 88,
    blurb: "High pace through the middle overs with wicket-taking upside.",
  },
  {
    id: "joe-root",
    name: "Joe Root",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "batsman",
    batting: 92,
    bowling: 22,
    blurb: "The organizer who makes aggressive batting cards feel stable.",
  },
  {
    id: "jason-roy",
    name: "Jason Roy",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "batsman",
    batting: 88,
    bowling: 8,
    blurb: "Front-foot aggression that forces defensive bowling plans early.",
  },
  {
    id: "ben-stokes",
    name: "Ben Stokes",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "batsman",
    batting: 91,
    bowling: 79,
    blurb: "One of white-ball cricket's premier clutch all-rounders.",
  },
  {
    id: "jos-buttler",
    name: "Jos Buttler",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "wicketkeeper",
    batting: 93,
    bowling: 0,
    blurb: "Late-overs violence with a premium keeper-batter profile.",
  },
  {
    id: "eoin-morgan",
    name: "Eoin Morgan",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "batsman",
    batting: 88,
    bowling: 6,
    blurb: "Leadership and match-up aggression in the middle order.",
  },
  {
    id: "chris-woakes",
    name: "Chris Woakes",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "bowler",
    batting: 74,
    bowling: 83,
    blurb: "Quality seam bowling with genuine batting depth.",
  },
  {
    id: "jofra-archer",
    name: "Jofra Archer",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "bowler",
    batting: 26,
    bowling: 91,
    blurb: "High pace and high leverage in the biggest overs.",
  },
  {
    id: "adil-rashid",
    name: "Adil Rashid",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "bowler",
    batting: 18,
    bowling: 88,
    blurb: "Attacking leg spin that buys wickets instead of just control.",
  },
  {
    id: "tamim-iqbal",
    name: "Tamim Iqbal",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "batsman",
    batting: 87,
    bowling: 8,
    blurb: "An ODI anchor-opener with enough power to own the arc.",
  },
  {
    id: "shakib-al-hasan",
    name: "Shakib Al Hasan",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "batsman",
    batting: 92,
    bowling: 90,
    blurb: "A long-time ICC No. 1 all-round benchmark and a monster ODI value pick.",
  },
  {
    id: "mushfiqur-rahim",
    name: "Mushfiqur Rahim",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "wicketkeeper",
    batting: 89,
    bowling: 0,
    blurb: "Busy, high-skill batting with dependable keeping.",
  },
  {
    id: "mahmudullah",
    name: "Mahmudullah",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "batsman",
    batting: 84,
    bowling: 71,
    blurb: "A reliable finishing bat with real off-spin utility.",
  },
  {
    id: "mashrafe-mortaza",
    name: "Mashrafe Mortaza",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "bowler",
    batting: 58,
    bowling: 82,
    blurb: "Leadership and seam craft more than raw pace by this stage.",
  },
  {
    id: "mustafizur-rahman",
    name: "Mustafizur Rahman",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "bowler",
    batting: 22,
    bowling: 86,
    blurb: "Cutters, angle, and death-overs discomfort.",
  },
  {
    id: "mohammad-saifuddin",
    name: "Mohammad Saifuddin",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "bowler",
    batting: 69,
    bowling: 74,
    blurb: "Lower-order runs and functional seam support.",
  },
  {
    id: "rohit-sharma",
    name: "Rohit Sharma",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "batsman",
    batting: 94,
    bowling: 10,
    blurb: "A six-hitting starter pistol for ODI innings.",
  },
  {
    id: "shubman-gill",
    name: "Shubman Gill",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "batsman",
    batting: 91,
    bowling: 8,
    blurb: "Elegant modern ODI tempo with full-field scoring range.",
  },
  {
    id: "shreyas-iyer",
    name: "Shreyas Iyer",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "batsman",
    batting: 88,
    bowling: 6,
    blurb: "Strong pace-hitting through the middle overs.",
  },
  {
    id: "kl-rahul",
    name: "KL Rahul",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "wicketkeeper",
    batting: 84,
    bowling: 0,
    blurb: "A calm ODI consolidator with tidy glovework.",
  },
  {
    id: "ravindra-jadeja",
    name: "Ravindra Jadeja",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "bowler",
    batting: 78,
    bowling: 86,
    blurb: "Spin squeeze, batting control, and complete all-round balance.",
  },
  {
    id: "jasprit-bumrah",
    name: "Jasprit Bumrah",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "bowler",
    batting: 24,
    bowling: 95,
    blurb: "A shape-shifting ODI spell machine in the true superstar bracket.",
  },
  {
    id: "mohammed-shami",
    name: "Mohammed Shami",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "bowler",
    batting: 22,
    bowling: 91,
    blurb: "Seam, swing, and wicket bursts that crack games open fast.",
  },
  {
    id: "babar-azam",
    name: "Babar Azam",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "batsman",
    batting: 93,
    bowling: 8,
    blurb: "Pure timing and tempo control through the heart of an ODI innings.",
  },
  {
    id: "fakhar-zaman",
    name: "Fakhar Zaman",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "batsman",
    batting: 86,
    bowling: 8,
    blurb: "A left-handed disruptor with big-innings upside.",
  },
  {
    id: "saud-shakeel",
    name: "Saud Shakeel",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "batsman",
    batting: 82,
    bowling: 6,
    blurb: "A calmer accumulator when the innings needs structure.",
  },
  {
    id: "mohammad-rizwan",
    name: "Mohammad Rizwan",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "wicketkeeper",
    batting: 90,
    bowling: 0,
    blurb: "Intensity, consistency, and high-volume ODI running.",
  },
  {
    id: "shadab-khan",
    name: "Shadab Khan",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "bowler",
    batting: 79,
    bowling: 78,
    blurb: "Useful leg spin with genuine batting upside.",
  },
  {
    id: "shaheen-afridi",
    name: "Shaheen Afridi",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "bowler",
    batting: 28,
    bowling: 90,
    blurb: "New-ball menace with left-arm angle and late inswing.",
  },
  {
    id: "haris-rauf",
    name: "Haris Rauf",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "bowler",
    batting: 20,
    bowling: 87,
    blurb: "Speed and hard lengths that create wickets in clumps.",
  },
  {
    id: "rahmanullah-gurbaz",
    name: "Rahmanullah Gurbaz",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "wicketkeeper",
    batting: 86,
    bowling: 0,
    blurb: "A fearless keeper-opener with genuine powerplay upside.",
  },
  {
    id: "ibrahim-zadran",
    name: "Ibrahim Zadran",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "batsman",
    batting: 84,
    bowling: 6,
    blurb: "Measured ODI batting with enough range to bat deep.",
  },
  {
    id: "hashmatullah-shahidi",
    name: "Hashmatullah Shahidi",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "batsman",
    batting: 82,
    bowling: 10,
    blurb: "An innings stabilizer who keeps collapses from cascading.",
  },
  {
    id: "mohammad-nabi",
    name: "Mohammad Nabi",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "bowler",
    batting: 80,
    bowling: 76,
    blurb: "A complete ODI all-round operator with veteran skill.",
  },
  {
    id: "rashid-khan",
    name: "Rashid Khan",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "bowler",
    batting: 62,
    bowling: 92,
    blurb: "A wrist-spin strike force who changes the shape of an innings.",
  },
  {
    id: "mujeeb-ur-rahman",
    name: "Mujeeb Ur Rahman",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "bowler",
    batting: 24,
    bowling: 84,
    blurb: "Powerplay spin and awkward angles from ball one.",
  },
];

export const DRAFT_SQUADS = [...BASE_DRAFT_SQUADS, ...GENERATED_DRAFT_SQUADS].sort(
  (left, right) => left.year - right.year || left.country.localeCompare(right.country),
);

const MANUAL_PLAYER_NAME_OVERRIDES = {
  "Sachin Tendulkar": { role: "batsman", batting: 96, bowling: 43 },
  "Ricky Ponting": { role: "batsman", batting: 94, bowling: 8 },
  "Virat Kohli": { role: "batsman", batting: 94, bowling: 10 },
  "Brian Lara": { role: "batsman", batting: 97, bowling: 10 },
  "Shane Warne": { role: "bowler", batting: 34, bowling: 95 },
  "Muttiah Muralitharan": { role: "bowler", batting: 24, bowling: 96 },
  "Glenn McGrath": { role: "bowler", batting: 18, bowling: 95 },
  "Jacques Kallis": { role: "batsman", batting: 93, bowling: 84 },
  "Allan Donald": { role: "bowler", batting: 18, bowling: 93 },
  "Anil Kumble": { role: "bowler", batting: 28, bowling: 92 },
  "Rahul Dravid": { role: "batsman", batting: 92, bowling: 8 },
  "AB de Villiers": { role: "batsman", batting: 95, bowling: 39 },
  "Babar Azam": { role: "batsman", batting: 92, bowling: 10 },
  "Curtly Ambrose": { role: "bowler", batting: 18, bowling: 94 },
  "Dale Steyn": { role: "bowler", batting: 22, bowling: 92 },
  "Daniel Vettori": { role: "bowler", batting: 58, bowling: 89 },
  "Eoin Morgan": { role: "batsman", batting: 88, bowling: 0 },
  "Hashim Amla": { role: "batsman", batting: 94, bowling: 0 },
  "Inzamam-ul-Haq": { role: "batsman", batting: 89, bowling: 10 },
  "Jasprit Bumrah": { role: "bowler", batting: 20, bowling: 93 },
  "KL Rahul": { role: "batsman", batting: 90, bowling: 0 },
  "Jonny Bairstow": { role: "batsman", batting: 90, bowling: 0 },
  "Joe Root": { role: "batsman", batting: 92, bowling: 22 },
  "Kane Williamson": { role: "batsman", batting: 92, bowling: 22 },
  "Kumar Sangakkara": { role: "wicketkeeper", batting: 94, bowling: 0 },
  "Mitchell Starc": { role: "bowler", batting: 28, bowling: 92 },
  "Rohit Sharma": { role: "batsman", batting: 93, bowling: 18 },
  "Sanath Jayasuriya": { role: "batsman", batting: 92, bowling: 74 },
  "Shaun Pollock": { role: "bowler", batting: 65, bowling: 89 },
  "Younis Khan": { role: "batsman", batting: 84, bowling: 0 },
  "Wasim Akram": { role: "bowler", batting: 54, bowling: 94 },
  "Waqar Younis": { role: "bowler", batting: 24, bowling: 93 },
  "Zaheer Abbas": { role: "batsman", batting: 92, bowling: 24, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Off Break" },
  "Yousuf Youhana": { role: "batsman", batting: 88, bowling: 18, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Off Break" },
  "Mohammad Yousuf": { role: "batsman", batting: 90, bowling: 12, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Off Break" },
  "Rameez Raja": { role: "batsman", batting: 84, bowling: 12, battingHand: "Right" },
  "Ramiz Raja": { role: "batsman", batting: 84, bowling: 12, battingHand: "Right" },
  "Aaqib Javed": { role: "bowler", batting: 22, bowling: 82, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Tahir Naqqash": { role: "bowler", batting: 24, bowling: 68, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Saleem Yousuf": { role: "wicketkeeper", batting: 61, bowling: 0, battingHand: "Right" },
  "Wajahatullah Wasti": { role: "batsman", batting: 68, bowling: 18, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Off Break" },
  "Wasim Raja": { role: "batsman", batting: 76, bowling: 58, battingHand: "Left", bowlingHand: "Right", bowlingStyle: "Medium" },
  "Azhar Mahmood": { role: "batsman", batting: 72, bowling: 74, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Medium" },
  "Abdul Razzaq": { role: "batsman", batting: 77, bowling: 76, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Mohammad Hafeez": { role: "batsman", batting: 82, bowling: 68, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Off Break" },
  "Shoaib Malik": { role: "batsman", batting: 83, bowling: 58, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Off Break" },
  "Umar Gul": { role: "bowler", batting: 24, bowling: 82, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Wahab Riaz": { role: "bowler", batting: 30, bowling: 80, battingHand: "Left", bowlingHand: "Left", bowlingStyle: "Fast" },
  "Yasir Shah": { role: "bowler", batting: 20, bowling: 78, battingHand: "Right", bowlingStyle: "Leg Break Googly" },
  "Imad Wasim": { role: "batsman", batting: 76, bowling: 68, battingHand: "Left", bowlingHand: "Left", bowlingStyle: "Orthodox" },
  "Shadab Khan": { role: "batsman", batting: 72, bowling: 74, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Leg Break" },
  "Mohammad Amir": { role: "bowler", batting: 32, bowling: 82, battingHand: "Left", bowlingHand: "Left", bowlingStyle: "Fast Medium" },
  "Hasan Ali": { role: "bowler", batting: 38, bowling: 80, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Medium Fast" },
  "Faheem Ashraf": { role: "batsman", batting: 60, bowling: 65, battingHand: "Left", bowlingHand: "Right", bowlingStyle: "Medium" },
  "Javed Miandad": { role: "batsman", batting: 89, bowling: 28 },
  "Saleem Malik": { role: "batsman", batting: 84, bowling: 22 },
  "Boeta Dippenaar": { role: "batsman", batting: 78, bowling: 0 },
  "Bruce Edgar": { role: "batsman", batting: 76, bowling: 12 },
  "Tillakaratne Dilshan": { role: "batsman", batting: 90, bowling: 70 },
  "Ali Shah": { role: "bowler", batting: 51, bowling: 58 },
  "Keith Sheridan": { role: "bowler", batting: 34, bowling: 62 },
  "Peter Steindl": { role: "bowler", batting: 32, bowling: 54 },
  "Wayne James": { role: "wicketkeeper", batting: 59, bowling: 0 },
  "Tariq Iqbal": { role: "wicketkeeper", batting: 56, bowling: 0 },
  "Marcel Schewe": { role: "wicketkeeper", batting: 44, bowling: 0 },
  "Steve Palframan": { role: "wicketkeeper", batting: 52, bowling: 0 },
  "Imtiaz Abbasi": { role: "wicketkeeper", batting: 43, bowling: 0 },
  "Alec Davies": { role: "wicketkeeper", batting: 48, bowling: 0 },
  "Melt van Schoor": { role: "wicketkeeper", batting: 46, bowling: 0 },
  "Andre van Schoor": { role: "wicketkeeper", batting: 42, bowling: 0 },
  "Kumar Sangakkara": { role: "wicketkeeper", batting: 94, bowling: 0 },
  "Mahela Jayawardene": { role: "batsman", batting: 93, bowling: 18 },
  "Lasith Malinga": { role: "bowler", batting: 22, bowling: 95 },
  "Marvan Atapattu": { role: "batsman", batting: 88, bowling: 12 },
  "Upul Tharanga": { role: "batsman", batting: 86, bowling: 0 },
  "Russel Arnold": { role: "batsman", batting: 80, bowling: 38 },
  "Farveez Maharoof": { role: "bowler", batting: 64, bowling: 82 },
  "Dilhara Fernando": { role: "bowler", batting: 24, bowling: 84 },
  "Nuwan Kulasekara": { role: "bowler", batting: 33, bowling: 84 },
  "Malinga Bandara": { role: "bowler", batting: 20, bowling: 80 },
  "Chamara Silva": { role: "batsman", batting: 78, bowling: 18 },
  "Quinton de Kock": { role: "wicketkeeper", batting: 90, bowling: 0 },
  "Sarfaraz Ahmed": { role: "wicketkeeper", batting: 82, bowling: 0 },
  "Shahid Afridi": { role: "batsman", batting: 84, bowling: 82 },
  "James Anderson": { role: "bowler", batting: 19, bowling: 91 },
  "Kevin Pietersen": { role: "batsman", batting: 94, bowling: 24 },
  "Graham Thorpe": { role: "batsman", batting: 88, bowling: 18 },
  "Graeme Fowler": { role: "batsman", batting: 82, bowling: 8 },
  "Graeme Hick": { role: "batsman", batting: 86, bowling: 36 },
  "Andrew Strauss": { role: "batsman", batting: 87, bowling: 10 },
  "Michael Vaughan": { role: "batsman", batting: 86, bowling: 14 },
  "Matt Prior": { role: "wicketkeeper", batting: 84, bowling: 0 },
  "Gary Wilson": { role: "wicketkeeper", batting: 76, bowling: 0 },
  "Maurice Ouma": { role: "wicketkeeper", batting: 71, bowling: 0 },
  "Morne van Wyk": { role: "wicketkeeper", batting: 80, bowling: 0 },
  "Afsar Zazai": { role: "wicketkeeper", batting: 70, bowling: 0 },
  "Shafiqullah": { role: "wicketkeeper", batting: 76, bowling: 0 },
  "Wesley Barresi": { role: "wicketkeeper", batting: 74, bowling: 0 },
  "Mohammad Ashraful": { role: "batsman", batting: 83, bowling: 38 },
  "Habibul Bashar": { role: "batsman", batting: 82, bowling: 12 },
  "Javed Omar": { role: "batsman", batting: 76, bowling: 8 },
  "Shahriar Nafees": { role: "batsman", batting: 74, bowling: 0 },
  "Aftab Ahmed": { role: "batsman", batting: 77, bowling: 26 },
  "Alok Kapali": { role: "batsman", batting: 72, bowling: 54 },
  "Imrul Kayes": { role: "batsman", batting: 74, bowling: 8 },
  "Junaid Siddique": { role: "batsman", batting: 77, bowling: 10 },
  "Naeem Islam": { role: "batsman", batting: 71, bowling: 66 },
  "Rajin Saleh": { role: "batsman", batting: 72, bowling: 18 },
  "Mahmudullah": { role: "batsman", batting: 84, bowling: 72 },
  "Mahmudullah Riyad": { role: "batsman", batting: 84, bowling: 72 },
  "Sabbir Rahman": { role: "batsman", batting: 78, bowling: 24 },
  "Taskin Ahmed": { role: "bowler", batting: 24, bowling: 86 },
  "Anderson Cummins": { role: "bowler", batting: 18, bowling: 82 },
  "Geoff Lawson": { role: "bowler", batting: 18, bowling: 86 },
  "Rodney Hogg": { role: "bowler", batting: 14, bowling: 82 },
  "Tom Hogan": { role: "bowler", batting: 12, bowling: 78 },
  "Winston Davis": { role: "bowler", batting: 18, bowling: 84 },
  "Gordon Greenidge": { role: "batsman", batting: 93, bowling: 16 },
  "Joel Garner": { role: "bowler", batting: 16, bowling: 94 },
  "Larry Gomes": { role: "batsman", batting: 82, bowling: 24 },
  "Wayne Daniel": { role: "bowler", batting: 18, bowling: 85 },
  "Neil Foster": { role: "bowler", batting: 18, bowling: 83 },
  "Andrew Hudson": { role: "batsman", batting: 84, bowling: 8 },
  "Omar Henry": { role: "bowler", batting: 20, bowling: 78 },
  "Peter Kirsten": { role: "batsman", batting: 80, bowling: 12 },
  "Neil Fairbrother": { role: "batsman", batting: 85, bowling: 12 },
  "Rodney Latham": { role: "batsman", batting: 76, bowling: 18 },
  "Fanie de Villiers": { role: "bowler", batting: 28, bowling: 89 },
  "Andy Caddick": { role: "bowler", batting: 18, bowling: 90 },
  "Kepler Wessels": { role: "batsman", batting: 83, bowling: 0 },
  "Tharindu Kaushal": { role: "bowler", batting: 24, bowling: 76 },
  "Dushan Hemantha": { role: "bowler", batting: 48, bowling: 68 },
  "Vijay Shankar": { role: "batsman", batting: 74, bowling: 58 },
  "Mansoor Akhtar": { role: "batsman", batting: 73, bowling: 12 },
  "Mohsin Khan": { role: "batsman", batting: 82, bowling: 10 },
  "Carlisle Best": { role: "wicketkeeper", batting: 71, bowling: 0 },
  "Andre Russell": { role: "batsman", batting: 82, bowling: 78, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Ashley Nurse": { role: "bowler", batting: 46, bowling: 72, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Off Break" },
  "Carlos Brathwaite": { role: "batsman", batting: 64, bowling: 74, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Medium Fast" },
  "Chris Gayle": { role: "batsman", batting: 89, bowling: 64, battingHand: "Left", bowlingHand: "Right", bowlingStyle: "Off Break" },
  "Corey Collymore": { role: "bowler", batting: 23, bowling: 76, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Daren Powell": { role: "bowler", batting: 24, bowling: 76, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Darren Bravo": { role: "batsman", batting: 82, bowling: 0, battingHand: "Left" },
  "Darren Sammy": { role: "batsman", batting: 68, bowling: 72, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Medium Fast" },
  "Denesh Ramdin": { role: "wicketkeeper", batting: 71, bowling: 0, battingHand: "Right" },
  "Devendra Bishoo": { role: "bowler", batting: 22, bowling: 76, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Leg Break Googly" },
  "Devon Smith": { role: "batsman", batting: 74, bowling: 0, battingHand: "Left" },
  "Devon Thomas": { role: "wicketkeeper", batting: 63, bowling: 0, battingHand: "Right" },
  "Dwayne Bravo": { role: "batsman", batting: 82, bowling: 80, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Medium Fast" },
  "Dwayne Smith": { role: "batsman", batting: 78, bowling: 62, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Medium" },
  "Evin Lewis": { role: "batsman", batting: 84, bowling: 0, battingHand: "Left" },
  "Fabian Allen": { role: "bowler", batting: 64, bowling: 68, battingHand: "Left", bowlingHand: "Left", bowlingStyle: "Orthodox" },
  "Ian Bradshaw": { role: "bowler", batting: 32, bowling: 74, battingHand: "Left", bowlingHand: "Left", bowlingStyle: "Fast Medium" },
  "Jason Holder": { role: "bowler", batting: 70, bowling: 79, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Jermaine Lawson": { role: "bowler", batting: 18, bowling: 74, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Jerome Taylor": { role: "bowler", batting: 28, bowling: 80, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Johnson Charles": { role: "wicketkeeper", batting: 72, bowling: 0, battingHand: "Right" },
  "Jonathan Carter": { role: "batsman", batting: 62, bowling: 18, battingHand: "Right" },
  "Kemar Roach": { role: "bowler", batting: 20, bowling: 80, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Kieron Pollard": { role: "batsman", batting: 82, bowling: 72, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Medium Fast" },
  "Kirk Edwards": { role: "batsman", batting: 72, bowling: 0, battingHand: "Right" },
  "Lendl Simmons": { role: "batsman", batting: 78, bowling: 24, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Medium" },
  "Marlon Samuels": { role: "batsman", batting: 82, bowling: 55, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Off Break" },
  "Nikita Miller": { role: "bowler", batting: 24, bowling: 72, battingHand: "Left", bowlingHand: "Left", bowlingStyle: "Orthodox" },
  "Nicholas Pooran": { role: "wicketkeeper", batting: 84, bowling: 0, battingHand: "Left" },
  "Nixon McLean": { role: "bowler", batting: 18, bowling: 72, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Oshane Thomas": { role: "bowler", batting: 18, bowling: 78, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast" },
  "Pedro Collins": { role: "bowler", batting: 18, bowling: 74, battingHand: "Left", bowlingHand: "Left", bowlingStyle: "Fast Medium" },
  "Ramnaresh Sarwan": { role: "batsman", batting: 86, bowling: 18, battingHand: "Right" },
  "Ravi Rampaul": { role: "bowler", batting: 22, bowling: 80, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Ricardo Powell": { role: "batsman", batting: 68, bowling: 28, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Medium Fast" },
  "Shai Hope": { role: "wicketkeeper", batting: 90, bowling: 0, battingHand: "Right" },
  "Shannon Gabriel": { role: "bowler", batting: 16, bowling: 78, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast" },
  "Sheldon Cottrell": { role: "bowler", batting: 18, bowling: 78, battingHand: "Right", bowlingHand: "Left", bowlingStyle: "Fast Medium" },
  "Shimron Hetmyer": { role: "batsman", batting: 82, bowling: 0, battingHand: "Left" },
  "Shivnarine Chanderpaul": { role: "batsman", batting: 84, bowling: 18, battingHand: "Left" },
  "Sulieman Benn": { role: "bowler", batting: 20, bowling: 74, battingHand: "Left", bowlingHand: "Left", bowlingStyle: "Orthodox" },
  "Vasbert Drakes": { role: "bowler", batting: 28, bowling: 76, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Fast Medium" },
  "Wavell Hinds": { role: "batsman", batting: 71, bowling: 46, battingHand: "Left", bowlingHand: "Right", bowlingStyle: "Off Break" },
  "Merv Hughes": { role: "bowler", batting: 16, bowling: 81 },
  "Richard Illingworth": { role: "bowler", batting: 58, bowling: 71 },
  "Vinod Kambli": { role: "batsman", batting: 82, bowling: 0 },
  "Tertius Bosch": { role: "bowler", batting: 18, bowling: 79 },
  "Angus Fraser": { role: "bowler", batting: 12, bowling: 88 },
  "Adam Gilchrist": { role: "wicketkeeper", batting: 92, bowling: 0 },
  "Adam Zampa": { role: "bowler", batting: 22, bowling: 82 },
  "Adil Rashid": { role: "bowler", batting: 28, bowling: 84 },
  "Aiden Markram": { role: "batsman", batting: 84, bowling: 28 },
  "Alex Carey": { role: "wicketkeeper", batting: 80, bowling: 0 },
  "Alex Hales": { role: "batsman", batting: 85, bowling: 0 },
  "Andile Phehlukwayo": { role: "bowler", batting: 58, bowling: 72 },
  "Andrew Flintoff": { role: "batsman", batting: 78, bowling: 80 },
  "Andrew Hall": { role: "bowler", batting: 63, bowling: 72 },
  "Andrew Symonds": { role: "batsman", batting: 84, bowling: 78 },
  "André Nel": { role: "bowler", batting: 18, bowling: 78 },
  "Anrich Nortje": { role: "bowler", batting: 16, bowling: 84 },
  "Ashton Agar": { role: "bowler", batting: 56, bowling: 68 },
  "Axar Patel": { role: "bowler", batting: 68, bowling: 74 },
  "Ben Stokes": { role: "batsman", batting: 88, bowling: 62 },
  "Bhuvneshwar Kumar": { role: "bowler", batting: 32, bowling: 84 },
  "Brad Haddin": { role: "wicketkeeper", batting: 82, bowling: 0 },
  "Brad Hogg": { role: "bowler", batting: 56, bowling: 82 },
  "Brendon McCullum": { role: "wicketkeeper", batting: 89, bowling: 0 },
  "Brett Lee": { role: "bowler", batting: 36, bowling: 91 },
  "Brydon Carse": { role: "bowler", batting: 42, bowling: 70 },
  "Chris Jordan": { role: "bowler", batting: 42, bowling: 78 },
  "Chris Morris": { role: "bowler", batting: 69, bowling: 76 },
  "Chris Woakes": { role: "bowler", batting: 65, bowling: 82 },
  "Chris Tremlett": { role: "bowler", batting: 24, bowling: 82 },
  "Colin de Grandhomme": { role: "batsman", batting: 69, bowling: 72 },
  "Corey Anderson": { role: "batsman", batting: 74, bowling: 68 },
  "Craig McMillan": { role: "batsman", batting: 76, bowling: 46 },
  "Dale Steyn": { role: "bowler", batting: 22, bowling: 92 },
  "Daniel Vettori": { role: "bowler", batting: 58, bowling: 89 },
  "Daryl Mitchell": { role: "batsman", batting: 84, bowling: 44 },
  "Daryl Tuffey": { role: "bowler", batting: 18, bowling: 74 },
  "David Miller": { role: "batsman", batting: 87, bowling: 0 },
  "David Willey": { role: "bowler", batting: 62, bowling: 76 },
  "David Warner": { role: "batsman", batting: 94, bowling: 0 },
  "Dawid Malan": { role: "batsman", batting: 88, bowling: 0 },
  "Devon Conway": { role: "batsman", batting: 87, bowling: 0 },
  "Dinesh Karthik": { role: "wicketkeeper", batting: 78, bowling: 0 },
  "Dwaine Pretorius": { role: "bowler", batting: 58, bowling: 74 },
  "Faf du Plessis": { role: "batsman", batting: 89, bowling: 0 },
  "Francois du Plessis": { role: "batsman", batting: 89, bowling: 0 },
  "Gautam Gambhir": { role: "batsman", batting: 86, bowling: 0 },
  "George Bailey": { role: "batsman", batting: 82, bowling: 0 },
  "Gerald Coetzee": { role: "bowler", batting: 18, bowling: 82 },
  "Glenn Maxwell": { role: "batsman", batting: 87, bowling: 59 },
  "Glenn Phillips": { role: "batsman", batting: 82, bowling: 28 },
  "Graeme Smith": { role: "batsman", batting: 86, bowling: 22 },
  "Graeme Swann": { role: "bowler", batting: 36, bowling: 82 },
  "Grant Elliott": { role: "batsman", batting: 76, bowling: 60 },
  "Gus Atkinson": { role: "bowler", batting: 14, bowling: 74 },
  "Hardik Pandya": { role: "batsman", batting: 82, bowling: 72 },
  "Harry Brook": { role: "batsman", batting: 84, bowling: 0 },
  "Hashim Amla": { role: "batsman", batting: 94, bowling: 0 },
  "Heinrich Klaasen": { role: "wicketkeeper", batting: 90, bowling: 0 },
  "Henry Nicholls": { role: "batsman", batting: 77, bowling: 0 },
  "Herschelle Gibbs": { role: "batsman", batting: 87, bowling: 0 },
  "Ian Bell": { role: "batsman", batting: 82, bowling: 24 },
  "Imran Tahir": { role: "bowler", batting: 18, bowling: 87 },
  "Irfan Pathan": { role: "bowler", batting: 67, bowling: 78 },
  "Ish Sodhi": { role: "bowler", batting: 18, bowling: 74 },
  "JP Duminy": { role: "batsman", batting: 83, bowling: 61 },
  "Jacob Oram": { role: "bowler", batting: 70, bowling: 77 },
  "James Faulkner": { role: "bowler", batting: 74, bowling: 79 },
  "James Franklin": { role: "batsman", batting: 61, bowling: 67 },
  "James Neesham": { role: "batsman", batting: 74, bowling: 66 },
  "Jimmy Neesham": { role: "batsman", batting: 74, bowling: 66 },
  "Jason Roy": { role: "batsman", batting: 88, bowling: 0 },
  "Jasprit Bumrah": { role: "bowler", batting: 20, bowling: 93 },
  "Jhye Richardson": { role: "bowler", batting: 14, bowling: 76 },
  "Joe Root": { role: "batsman", batting: 92, bowling: 22 },
  "Jofra Archer": { role: "bowler", batting: 26, bowling: 86 },
  "Johan Botha": { role: "bowler", batting: 48, bowling: 66 },
  "Jonny Bairstow": { role: "batsman", batting: 91, bowling: 0 },
  "Jos Buttler": { role: "wicketkeeper", batting: 90, bowling: 0 },
  "Josh Hazlewood": { role: "bowler", batting: 20, bowling: 86 },
  "Josh Inglis": { role: "wicketkeeper", batting: 78, bowling: 0 },
  "Kagiso Rabada": { role: "bowler", batting: 24, bowling: 88 },
  "Kane Williamson": { role: "batsman", batting: 92, bowling: 22 },
  "Kyle Abbott": { role: "bowler", batting: 16, bowling: 76 },
  "Kyle Jamieson": { role: "bowler", batting: 42, bowling: 78 },
  "Kyle Mills": { role: "bowler", batting: 28, bowling: 83 },
  "Kuldeep Yadav": { role: "bowler", batting: 18, bowling: 85 },
  "Liam Livingstone": { role: "batsman", batting: 76, bowling: 48 },
  "Liam Plunkett": { role: "bowler", batting: 28, bowling: 79 },
  "Lizaad Williams": { role: "bowler", batting: 14, bowling: 74 },
  "Lockie Ferguson": { role: "bowler", batting: 12, bowling: 84 },
  "Lungi Ngidi": { role: "bowler", batting: 18, bowling: 78 },
  "M.S. Dhoni": { role: "wicketkeeper", batting: 91, bowling: 0 },
  "MS Dhoni": { role: "wicketkeeper", batting: 91, bowling: 0 },
  "Makhaya Ntini": { role: "bowler", batting: 18, bowling: 88 },
  "Marco Jansen": { role: "bowler", batting: 66, bowling: 78 },
  "Marcus Stoinis": { role: "batsman", batting: 76, bowling: 62 },
  "Mark Boucher": { role: "wicketkeeper", batting: 79, bowling: 0 },
  "Mark Wood": { role: "bowler", batting: 18, bowling: 82 },
  "Marnus Labuschagne": { role: "batsman", batting: 83, bowling: 18 },
  "Martin Guptill": { role: "batsman", batting: 88, bowling: 0 },
  "Matt Henry": { role: "bowler", batting: 18, bowling: 85 },
  "Matt Prior": { role: "wicketkeeper", batting: 84, bowling: 0 },
  "Matthew Hayden": { role: "batsman", batting: 92, bowling: 0 },
  "Michael Clarke": { role: "batsman", batting: 89, bowling: 24 },
  "Michael Hussey": { role: "batsman", batting: 90, bowling: 0 },
  "Mitchell Johnson": { role: "bowler", batting: 35, bowling: 90 },
  "Mitchell Marsh": { role: "batsman", batting: 84, bowling: 56 },
  "Mitchell Santner": { role: "bowler", batting: 71, bowling: 76 },
  "Mitchell Starc": { role: "bowler", batting: 28, bowling: 92 },
  "Moeen Ali": { role: "batsman", batting: 76, bowling: 64 },
  "Mohammed Shami": { role: "bowler", batting: 18, bowling: 90 },
  "Mohammed Siraj": { role: "bowler", batting: 16, bowling: 82 },
  "Chris Martin": { role: "bowler", batting: 15, bowling: 78 },
  "Darren Sammy": { role: "batsman", batting: 68, bowling: 72, battingHand: "Right", bowlingHand: "Right", bowlingStyle: "Medium Fast" },
  "Morne van Wyk": { role: "wicketkeeper", batting: 78, bowling: 0 },
  "Morné Morkel": { role: "bowler", batting: 22, bowling: 86 },
  "Nathan Bracken": { role: "bowler", batting: 26, bowling: 87 },
  "Nathan Lyon": { role: "bowler", batting: 18, bowling: 68 },
  "Nathan McCullum": { role: "bowler", batting: 52, bowling: 70 },
  "Nathan Mitchell Coulter-Nile": { role: "bowler", batting: 58, bowling: 74 },
  "Pat Cummins": { role: "bowler", batting: 32, bowling: 89 },
  "Paul Collingwood": { role: "batsman", batting: 78, bowling: 52 },
  "Quinton de Kock": { role: "wicketkeeper", batting: 91, bowling: 0 },
  "Rachin Ravindra": { role: "batsman", batting: 84, bowling: 61 },
  "Rassie van der Dussen": { role: "batsman", batting: 88, bowling: 0 },
  "Ravichandran Ashwin": { role: "bowler", batting: 55, bowling: 82 },
  "Ravindra Jadeja": { role: "bowler", batting: 78, bowling: 83 },
  "Reece Topley": { role: "bowler", batting: 12, bowling: 78 },
  "Reeza Hendricks": { role: "batsman", batting: 77, bowling: 0 },
  "Rilee Rossouw": { role: "batsman", batting: 82, bowling: 0 },
  "Rishabh Pant": { role: "wicketkeeper", batting: 81, bowling: 0 },
  "Robin Peterson": { role: "bowler", batting: 60, bowling: 70 },
  "Rohit Sharma": { role: "batsman", batting: 93, bowling: 18 },
  "Ross Taylor": { role: "batsman", batting: 91, bowling: 0 },
  "Sam Curran": { role: "bowler", batting: 68, bowling: 74 },
  "Scott Styris": { role: "batsman", batting: 77, bowling: 68 },
  "Sean Abbott": { role: "bowler", batting: 58, bowling: 70 },
  "Shane Bond": { role: "bowler", batting: 18, bowling: 93 },
  "Shane Watson": { role: "batsman", batting: 86, bowling: 76 },
  "Shikhar Dhawan": { role: "batsman", batting: 91, bowling: 0 },
  "Shreyas Iyer": { role: "batsman", batting: 90, bowling: 0 },
  "Shubman Gill": { role: "batsman", batting: 93, bowling: 0 },
  "Shaun Pollock": { role: "bowler", batting: 65, bowling: 89 },
  "Shaun Tait": { role: "bowler", batting: 14, bowling: 82 },
  "Steve Smith": { role: "batsman", batting: 91, bowling: 20 },
  "Steven Finn": { role: "bowler", batting: 14, bowling: 78 },
  "Stuart Binny": { role: "batsman", batting: 64, bowling: 66 },
  "Stuart Broad": { role: "bowler", batting: 24, bowling: 79 },
  "Stuart Clark": { role: "bowler", batting: 26, bowling: 78 },
  "Suresh Raina": { role: "batsman", batting: 84, bowling: 34 },
  "Tabraiz Shamsi": { role: "bowler", batting: 10, bowling: 78 },
  "Temba Bavuma": { role: "batsman", batting: 82, bowling: 0 },
  "Tim Bresnan": { role: "bowler", batting: 62, bowling: 74 },
  "Tim Southee": { role: "bowler", batting: 34, bowling: 84 },
  "Tom Latham": { role: "wicketkeeper", batting: 82, bowling: 0 },
  "Travis Head": { role: "batsman", batting: 91, bowling: 26 },
  "Trent Boult": { role: "bowler", batting: 26, bowling: 90 },
  "Umesh Yadav": { role: "bowler", batting: 16, bowling: 80 },
  "Usman Khawaja": { role: "batsman", batting: 85, bowling: 0 },
  "Virender Sehwag": { role: "batsman", batting: 90, bowling: 32 },
  "Wayne Parnell": { role: "bowler", batting: 60, bowling: 74 },
  "Will Young": { role: "batsman", batting: 79, bowling: 0 },
  "Yusuf Pathan": { role: "batsman", batting: 74, bowling: 62 },
  "Yuvraj Singh": { role: "batsman", batting: 88, bowling: 62 },
  "Yuzvendra Chahal": { role: "bowler", batting: 14, bowling: 82 },
  "Zaheer Khan": { role: "bowler", batting: 30, bowling: 88 },
};

export const PLAYER_AUDIT_SUMMARY = AUDITED_PLAYER_SUMMARY;
export const PLAYER_INTERVAL_SUMMARY = PLAYER_INTERVAL_ENRICHMENT_SUMMARY;

const PLAYER_ID_OVERRIDES = {
  "pakistan-1983-rashid-khan": { role: "batsman", batting: 64, bowling: 18 },
  "bangladesh-2003-mohammad-ashraful": { role: "batsman", batting: 77, bowling: 38 },
};

const RAW_PLAYER_POOL = [...BASE_PLAYER_POOL, ...EXTRA_PLAYERS, ...GENERATED_PLAYERS];

const AMBIGUOUS_AUDIT_NAMES = (() => {
  const teamsByName = new Map();

  for (const player of RAW_PLAYER_POOL) {
    const normalizedName = normalizePlayerName(player.name);
    const teams = teamsByName.get(normalizedName) || new Set();
    teams.add(player.team);
    teamsByName.set(normalizedName, teams);
  }

  return new Set(
    [...teamsByName.entries()]
      .filter(([, teams]) => teams.size > 1)
      .map(([normalizedName]) => normalizedName),
  );
})();

const LEFT_HANDED_BATTER_OVERRIDES = new Set(
  [
    "Adam Gilchrist",
    "Alastair Cook",
    "Arjuna Ranatunga",
    "Brian Lara",
    "Chris Gayle",
    "David Warner",
    "Daniel Vettori",
    "Darren Lehmann",
    "Eoin Morgan",
    "Gautam Gambhir",
    "Graeme Smith",
    "Herschelle Gibbs",
    "Kumar Sangakkara",
    "Lance Klusener",
    "Marcus Trescothick",
    "Matthew Hayden",
    "Michael Hussey",
    "Misbah-ul-Haq",
    "Mohammad Ashraful",
    "Ravindra Jadeja",
    "Saeed Anwar",
    "Saurav Ganguly",
    "Shahid Afridi",
    "Shakib Al Hasan",
    "Tamim Iqbal",
    "Sanath Jayasuriya",
    "Tillakaratne Dilshan",
    "Yuvraj Singh",
  ].map((name) => normalizePlayerName(name)),
);

const LEFT_ARM_BOWLER_OVERRIDES = new Set(
  [
    "Chaminda Vaas",
    "Daniel Vettori",
    "Mitchell Johnson",
    "Mitchell Starc",
    "Nathan Bracken",
    "Ravindra Jadeja",
    "Shakib Al Hasan",
    "Sohail Tanvir",
    "Trent Boult",
    "Zaheer Khan",
    "Ashantha de Mel",
    "Mustafizur Rahman",
    "Taijul Islam",
    "Abdur Razzak",
    "Reece Topley",
    "David Willey",
    "Sam Curran",
    "Keshav Maharaj",
    "Tabraiz Shamsi",
  ].map((name) => normalizePlayerName(name)),
);

const BOWLING_STYLE_OVERRIDES = new Map(
  Object.entries({
    "Andrew Flintoff": "Fast Medium",
    "Anil Kumble": "Leg Break",
    "Ajit Agarkar": "Fast Medium",
    "Ashley Giles": "Orthodox",
    "Brett Lee": "Fast",
    "Chaminda Vaas": "Fast Medium",
    "Chris Harris": "Medium",
    "Daniel Vettori": "Orthodox",
    "Dale Steyn": "Fast",
    "Darren Lehmann": "Orthodox",
    "David Willey": "Fast Medium",
    "Glenn Maxwell": "Off Break",
    "Glenn McGrath": "Fast Medium",
    "Graeme Swann": "Off Break",
    "Harbhajan Singh": "Off Break",
    "Imran Tahir": "Leg Break",
    "Ish Sodhi": "Leg Break",
    "Jacob Oram": "Medium Fast",
    "Jacques Kallis": "Medium Fast",
    "James Anderson": "Fast Medium",
    "Javagal Srinath": "Fast Medium",
    "Johan Botha": "Off Break",
    "Jon Lewis": "Fast Medium",
    "Keshav Maharaj": "Orthodox",
    "Kuldeep Yadav": "Wrist Spin (Chinaman)",
    "Liam Plunkett": "Fast Medium",
    "Lungi Ngidi": "Fast Medium",
    "Mark Waugh": "Off Break",
    "Michael Bevan": "Orthodox",
    "Michael Clarke": "Off Break",
    "Michael Hussey": "Off Break",
    "Michael Vaughan": "Off Break",
    "Mitchell Johnson": "Fast",
    "Mitchell Santner": "Orthodox",
    "Mitchell Starc": "Fast",
    "Moeen Ali": "Off Break",
    "Muralitharan": "Off Break",
    "Muttiah Muralitharan": "Off Break",
    "Nathan Hauritz": "Off Break",
    "Nathan Lyon": "Off Break",
    "Paul Collingwood": "Medium",
    "Ravichandran Ashwin": "Off Break",
    "Ravindra Jadeja": "Orthodox",
    "Ravi Bopara": "Medium Fast",
    "Ricky Ponting": "Medium",
    "Robin Peterson": "Orthodox",
    "Ryan ten Doeschate": "Medium Fast",
    "Saqlain Mushtaq": "Off Break",
    "Scott Styris": "Medium Fast",
    "Shadab Khan": "Leg Break",
    "Shahid Afridi": "Leg Break",
    "Shane Warne": "Leg Break",
    "Shaun Pollock": "Fast Medium",
    "Shoaib Malik": "Off Break",
    "Stuart Broad": "Fast Medium",
    "Sunil Joshi": "Orthodox",
    "Tabraiz Shamsi": "Wrist Spin (Chinaman)",
    "Tim Southee": "Fast Medium",
    "Trent Boult": "Fast Medium",
    "Wasim Akram": "Fast Medium",
    "Yuvraj Singh": "Orthodox",
    "Zaheer Khan": "Fast Medium",
  }).map(([name, style]) => [normalizePlayerName(name), style]),
);

function hasMeaningfulBowling(player) {
  if (player.role === "wicketkeeper") {
    return false;
  }

  return (player.bowling || 0) >= 10;
}

function inferBattingHand(player) {
  if (player.battingHand === "Left" || player.battingHand === "Right") {
    return player.battingHand;
  }

  return LEFT_HANDED_BATTER_OVERRIDES.has(normalizePlayerName(player.name)) ? "Left" : "Right";
}

function inferBowlingHand(player) {
  if (!hasMeaningfulBowling(player)) {
    return "";
  }

  if (player.bowlingHand === "Left" || player.bowlingHand === "Right") {
    return player.bowlingHand;
  }

  if (LEFT_ARM_BOWLER_OVERRIDES.has(normalizePlayerName(player.name))) {
    return "Left";
  }

  return "Right";
}

function inferBowlingStyle(player, role, bowlingHand) {
  if (role === "wicketkeeper" || !hasMeaningfulBowling(player)) {
    return "";
  }

  if (player.bowlingStyle && player.bowlingStyle !== "Unspecified") {
    return player.bowlingStyle;
  }

  const normalizedName = normalizePlayerName(player.name);
  if (BOWLING_STYLE_OVERRIDES.has(normalizedName)) {
    return BOWLING_STYLE_OVERRIDES.get(normalizedName);
  }

  const battingLead = (player.batting || 0) - (player.bowling || 0) >= 15;
  const bowlingLead = (player.bowling || 0) - (player.batting || 0) >= 15 || role === "bowler";
  const economy = player.bowlingEconomy || 0;
  const strikeRate = player.bowlingStrikeRate || 0;

  if ((player.bowling || 0) < 40) {
    return "Medium";
  }

  if (bowlingHand === "Left") {
    if (bowlingLead && (player.bowling || 0) >= 75) {
      return "Fast Medium";
    }

    return "Orthodox";
  }

  if (bowlingLead) {
    if ((player.bowling || 0) >= 88) {
      return "Fast Medium";
    }

    if (economy > 0 && economy <= 4.45 && strikeRate >= 48) {
      return "Off Break";
    }

    return "Fast Medium";
  }

  if (battingLead) {
    if (economy > 0 && economy <= 4.65 && strikeRate >= 52) {
      return "Off Break";
    }

    return "Medium";
  }

  return economy > 0 && economy <= 4.6 ? "Off Break" : "Medium";
}

function getPlayerNameOverride(player) {
  const normalizedName = normalizePlayerName(player.name);
  const auditedOverride = AMBIGUOUS_AUDIT_NAMES.has(normalizedName)
    ? null
    : AUDITED_PLAYER_NAME_OVERRIDES[normalizedName];

  return {
    auditedOverride: auditedOverride || null,
    manualOverride: MANUAL_PLAYER_NAME_OVERRIDES[normalizedName] || null,
  };
}

function applyPlayerOverride(player) {
  const normalizedName = normalizePlayerName(player.name);
  const { auditedOverride, manualOverride } = getPlayerNameOverride(player);
  const playerIdOverride = PLAYER_ID_OVERRIDES[player.id] || null;
  const intervalEnrichment = PLAYER_INTERVAL_ENRICHMENT_BY_ID[player.id] || {};
  const inferredRole = hasWicketkeeperFlag(player.name) ? "wicketkeeper" : player.role;
  const hasUsableEnrichmentRatings =
    (intervalEnrichment.batting || 0) > 0 || (intervalEnrichment.bowling || 0) > 0;
  const explicitRole = playerIdOverride?.role || manualOverride?.role || "";
  const role = explicitRole || (hasUsableEnrichmentRatings ? intervalEnrichment.role || inferredRole : inferredRole);
  const merged = {
    ...player,
    name: normalizedName,
    ...(auditedOverride || {}),
    ...(manualOverride || {}),
    ...(playerIdOverride || {}),
  };
  const explicitBattingHand = playerIdOverride?.battingHand || manualOverride?.battingHand || "";
  const explicitBowlingHand = playerIdOverride?.bowlingHand || manualOverride?.bowlingHand || "";
  const explicitBowlingStyle = playerIdOverride?.bowlingStyle || manualOverride?.bowlingStyle || "";
  const hasExplicitRatingOverride =
    Boolean(
      (manualOverride && ("batting" in manualOverride || "bowling" in manualOverride || "role" in manualOverride)) ||
      (playerIdOverride && ("batting" in playerIdOverride || "bowling" in playerIdOverride || "role" in playerIdOverride)),
    );
  const batting =
    hasExplicitRatingOverride ? merged.batting : (intervalEnrichment.batting || 0) > 0 ? intervalEnrichment.batting : merged.batting;
  const bowling =
    hasExplicitRatingOverride ? merged.bowling : (intervalEnrichment.bowling || 0) > 0 ? intervalEnrichment.bowling : merged.bowling;
  let safeBatting = batting || 0;
  let safeBowling = bowling || 0;

  if (role === "bowler") {
    safeBatting = Math.max(15, safeBatting);
    safeBowling = Math.max(60, safeBowling);
  } else if (role === "wicketkeeper") {
    safeBatting = Math.max(50, safeBatting);
    safeBowling = 0;
  } else if (safeBatting < 50 && safeBowling < 50) {
    safeBatting = 50;
  }

  if (role !== "wicketkeeper") {
    safeBowling = Math.max(10, safeBowling);
  }

  const enriched = {
    ...merged,
    ...(intervalEnrichment || {}),
    role,
    batting: safeBatting,
    bowling: safeBowling,
    ratingLocked: hasExplicitRatingOverride,
    battingHand: explicitBattingHand || intervalEnrichment.battingHand || merged.battingHand || "",
    bowlingHand: explicitBowlingHand || intervalEnrichment.bowlingHand || merged.bowlingHand || "",
    bowlingStyle: explicitBowlingStyle || intervalEnrichment.bowlingStyle || merged.bowlingStyle || "",
  };
  const battingHand = inferBattingHand(enriched);
  const bowlingHand = inferBowlingHand(enriched);
  const bowlingStyle = inferBowlingStyle(enriched, role, bowlingHand);

  return {
    ...enriched,
    battingHand,
    bowlingHand,
    bowlingStyle,
    aggressionLevel: intervalEnrichment.aggressionLevel || "Balanced",
    battingStyle: intervalEnrichment.battingStyle || intervalEnrichment.aggressionLevel || "Balanced",
  };
}

function getTopAverage(roster, skill, count) {
  const selected = [...roster]
    .sort((left, right) => right[skill] - left[skill] || right.batting + right.bowling - (left.batting + left.bowling))
    .slice(0, Math.min(count, roster.length));

  return selected.reduce((total, player) => total + player[skill], 0) / selected.length;
}

function calibratePlayerPoolBySquad(playerPool) {
  const squadsById = new Map();

  for (const player of playerPool) {
    if (!squadsById.has(player.squadId)) {
      squadsById.set(player.squadId, []);
    }
    squadsById.get(player.squadId).push(player);
  }

  const squadMetrics = [...squadsById.entries()].map(([squadId, roster]) => ({
    squadId,
    year: roster[0]?.year,
    batting: getTopAverage(roster, "batting", 5),
    bowling: getTopAverage(roster, "bowling", 5),
  }));

  const yearBuckets = new Map();
  for (const metric of squadMetrics) {
    if (!yearBuckets.has(metric.year)) {
      yearBuckets.set(metric.year, []);
    }
    yearBuckets.get(metric.year).push(metric);
  }

  const yearMeans = new Map(
    [...yearBuckets.entries()].map(([year, entries]) => [
      year,
      {
        batting: entries.reduce((total, entry) => total + entry.batting, 0) / entries.length,
        bowling: entries.reduce((total, entry) => total + entry.bowling, 0) / entries.length,
      },
    ]),
  );

  const squadTargets = new Map(
    squadMetrics.map((metric) => {
      const yearMean = yearMeans.get(metric.year);
      const battingTarget = yearMean.batting + (metric.batting - yearMean.batting) * 0.78;
      const bowlingTarget = yearMean.bowling + (metric.bowling - yearMean.bowling) * 0.78;
      return [
        metric.squadId,
        {
          battingFactor: metric.batting > 0 ? battingTarget / metric.batting : 1,
          bowlingFactor: metric.bowling > 0 ? bowlingTarget / metric.bowling : 1,
        },
      ];
    }),
  );

  return playerPool.map((player) => {
    const factors = squadTargets.get(player.squadId) || { battingFactor: 1, bowlingFactor: 1 };
    let batting = player.ratingLocked ? player.batting : player.batting * factors.battingFactor;
    let bowling = player.ratingLocked ? player.bowling : player.bowling * factors.bowlingFactor;

    if (player.role === "bowler") {
      batting = Math.max(15, batting);
      bowling = Math.max(60, bowling);
    } else if (player.role === "wicketkeeper") {
      batting = Math.max(50, batting);
      bowling = 0;
    } else {
      batting = Math.max(batting, bowling < 50 ? 50 : batting);
      bowling = Math.max(10, bowling);
    }

    return {
      ...player,
      batting: Math.round(batting),
      bowling: Math.round(bowling),
    };
  });
}

export const PLAYER_POOL = calibratePlayerPoolBySquad(RAW_PLAYER_POOL.map(applyPlayerOverride));

export const TOURNAMENT_OPPONENTS = [
  {
    id: "bangladesh-2019",
    label: "Bangladesh 2019",
    shortName: "Bangladesh",
    stage: "Group Stage Match 1",
    batting: 82,
    bowling: 80,
    overall: 80,
    pressure: 0,
    note: "A modern ODI side with serious all-round depth and no soft overs.",
  },
  {
    id: "india-1983",
    label: "India 1983",
    shortName: "India",
    stage: "Group Stage Match 2",
    batting: 81,
    bowling: 83,
    overall: 82,
    pressure: 1,
    note: "They make you earn everything and still believe in every chase.",
  },
  {
    id: "pakistan-1992",
    label: "Pakistan 1992",
    shortName: "Pakistan",
    stage: "Group Stage Match 3",
    batting: 84,
    bowling: 87,
    overall: 85,
    pressure: 2,
    note: "Swing, swagger, and a pace unit that can turn the lights out.",
  },
  {
    id: "south-africa-1999",
    label: "South Africa 1999",
    shortName: "South Africa",
    stage: "QF",
    batting: 89,
    bowling: 89,
    overall: 89,
    pressure: 5,
    note: "Balanced, athletic, and packed with wicket-taking options.",
  },
  {
    id: "india-2011",
    label: "India 2011",
    shortName: "India",
    stage: "SF",
    batting: 92,
    bowling: 88,
    overall: 92,
    pressure: 7,
    note: "Elite chase control backed by experienced middle-overs bowling.",
  },
  {
    id: "australia-1999",
    label: "Australia 1999",
    shortName: "Australia",
    stage: "Final",
    batting: 92,
    bowling: 93,
    overall: 94,
    pressure: 10,
    note: "A champion side with superstar bowling and no emotional drop-off.",
  },
];
