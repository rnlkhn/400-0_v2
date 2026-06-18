import {
  DRAFT_SQUADS,
  PLAYER_POOL,
  REQUIRED_ROLES,
  ROLE_LABELS,
  ROLE_ORDER,
  TOURNAMENT_OPPONENTS,
} from "./data.js";

export {
  DRAFT_SQUADS,
  PLAYER_POOL,
  REQUIRED_ROLES,
  ROLE_LABELS,
  ROLE_ORDER,
  TOURNAMENT_OPPONENTS,
};

export const DIFFICULTY_LEVELS = [
  {
    id: "county",
    label: "County",
    description: "Prime ratings and bowler recommendations keep you ahead of the game.",
    usePrimeRatings: true,
    hideRatings: false,
    recommendBowler: true,
    rerolls: 3,
  },
  {
    id: "international",
    label: "International",
    description: "Baseline World Cup difficulty with full ratings visible.",
    usePrimeRatings: false,
    hideRatings: false,
    recommendBowler: false,
    rerolls: 1,
  },
  {
    id: "legend",
    label: "Legend",
    description: "Ratings are hidden, so you captain by instinct.",
    usePrimeRatings: false,
    hideRatings: true,
    recommendBowler: false,
    rerolls: 0,
  },
];

const DIFFICULTY_BY_ID = new Map(DIFFICULTY_LEVELS.map((level) => [level.id, level]));

const AGGRESSION_PROFILES = {
  "Very Aggressive": {
    boundary: 0.06,
    six: 0.03,
    rotate: -0.03,
    wicket: 0.022,
  },
  Aggressive: {
    boundary: 0.034,
    six: 0.014,
    rotate: -0.012,
    wicket: 0.011,
  },
  Balanced: {
    boundary: 0,
    six: 0,
    rotate: 0,
    wicket: 0,
  },
  Cautious: {
    boundary: -0.022,
    six: -0.01,
    rotate: 0.018,
    wicket: -0.007,
  },
  "Very Cautious": {
    boundary: -0.042,
    six: -0.018,
    rotate: 0.03,
    wicket: -0.012,
  },
};

const BOWLING_INTENTS = {
  attacking: {
    id: "attacking",
    label: "Attacking",
    wicket: 0.013,
    boundary: 0.018,
    dot: 0.012,
    single: -0.02,
  },
  balanced: {
    id: "balanced",
    label: "Balanced",
    wicket: 0,
    boundary: 0,
    dot: 0,
    single: 0,
  },
  defensive: {
    id: "defensive",
    label: "Defensive",
    wicket: -0.006,
    boundary: -0.022,
    dot: -0.01,
    single: 0.024,
  },
};

const WEATHER_OPTIONS = {
  overcast: { id: "overcast", label: "Overcast", batting: -1, seam: 5, swing: 6, spin: -1, chase: -1 },
  cool: { id: "cool", label: "Cool", batting: 0, seam: 2, swing: 2, spin: 0, chase: 0 },
  hot: { id: "hot", label: "Hot", batting: 1, seam: -1, swing: -2, spin: 2, chase: 0 },
  humid: { id: "humid", label: "Humid", batting: 0, seam: 2, swing: 4, spin: -1, chase: 1 },
  clear: { id: "clear", label: "Clear", batting: 2, seam: -1, swing: -1, spin: 0, chase: 1 },
};

const SURFACE_OPTIONS = {
  green: { id: "green", label: "Green", batting: -2, seam: 5, spin: -2, pace: 3 },
  dry: { id: "dry", label: "Dry", batting: 0, seam: -1, spin: 4, pace: 0 },
  crumbling: { id: "crumbling", label: "Crumbling", batting: -3, seam: -1, spin: 6, pace: -1 },
  hard: { id: "hard", label: "Hard", batting: 1, seam: 1, spin: -1, pace: 4 },
  flat: { id: "flat", label: "Flat", batting: 4, seam: -2, spin: -1, pace: 0 },
  used: { id: "used", label: "Used", batting: -1, seam: 0, spin: 3, pace: -1 },
};

const OUTFIELD_OPTIONS = {
  fast: { id: "fast", label: "Fast outfield", batting: 3, boundary: 0.03, double: -0.008 },
  average: { id: "average", label: "Average outfield", batting: 0, boundary: 0, double: 0 },
  slow: { id: "slow", label: "Slow outfield", batting: -2, boundary: -0.02, double: 0.01 },
  heavy: { id: "heavy", label: "Heavy outfield", batting: -3, boundary: -0.032, double: 0.014 },
};

const WEATHER_WEIGHTS_BY_TEAM = {
  england: [["overcast", 5], ["cool", 3], ["clear", 1]],
  "new zealand": [["overcast", 4], ["cool", 3], ["clear", 1]],
  ireland: [["overcast", 5], ["cool", 3], ["clear", 1]],
  scotland: [["overcast", 5], ["cool", 3], ["clear", 1]],
  netherlands: [["overcast", 4], ["cool", 3], ["clear", 2]],
  india: [["hot", 4], ["clear", 3], ["humid", 2]],
  pakistan: [["hot", 4], ["clear", 2], ["humid", 2]],
  sri_lanka: [["hot", 3], ["humid", 3], ["clear", 2]],
  bangladesh: [["humid", 4], ["hot", 3], ["clear", 1]],
  australia: [["clear", 4], ["hot", 3], ["cool", 1]],
  "south africa": [["clear", 4], ["hot", 2], ["cool", 2]],
  zimbabwe: [["clear", 3], ["hot", 3], ["humid", 1]],
  namibia: [["clear", 4], ["hot", 3], ["cool", 1]],
  "west indies": [["humid", 4], ["clear", 3], ["hot", 1]],
  default: [["clear", 3], ["hot", 2], ["humid", 1], ["overcast", 1]],
};

const SURFACE_WEIGHTS_BY_TEAM = {
  england: [["green", 3], ["used", 2], ["flat", 1]],
  "new zealand": [["green", 3], ["hard", 2], ["flat", 1]],
  india: [["dry", 3], ["used", 3], ["flat", 1]],
  pakistan: [["dry", 2], ["used", 2], ["flat", 2]],
  sri_lanka: [["dry", 3], ["used", 2], ["flat", 1]],
  bangladesh: [["used", 3], ["dry", 2], ["flat", 1]],
  australia: [["hard", 4], ["flat", 2], ["green", 1]],
  "south africa": [["hard", 4], ["green", 2], ["used", 1]],
  "west indies": [["flat", 3], ["used", 2], ["hard", 1]],
  default: [["flat", 2], ["used", 2], ["hard", 1], ["dry", 1]],
};

const OUTFIELD_WEIGHTS_BY_TEAM = {
  england: [["average", 3], ["slow", 2], ["fast", 1]],
  "new zealand": [["fast", 2], ["average", 2], ["slow", 1]],
  india: [["fast", 2], ["average", 2], ["slow", 1]],
  australia: [["fast", 4], ["average", 2]],
  "south africa": [["fast", 4], ["average", 2]],
  bangladesh: [["average", 3], ["slow", 2], ["heavy", 1]],
  "west indies": [["fast", 2], ["average", 2], ["heavy", 1]],
  default: [["average", 3], ["fast", 1], ["slow", 1]],
};

const PHASES = {
  draft: "draft",
  ready: "ready",
  pregame: "pregame",
  live: "live",
  finished: "finished",
};

const TOTAL_OVERS = 50;
const POWERPLAY_END = 10;
const DEATH_OVERS_START = 40;
const ROSTER_SIZE = 11;

const GAME_PLAYER_NAME_ALIASES = new Map([
  ["Yousuf Youhana", "Mohammad Yousuf"],
]);

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function round(value, precision = 0) {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
}

function randomSwing(random, swing) {
  return (random() - 0.5) * 2 * swing;
}

function weightedChoice(entries, random) {
  const totalWeight = entries.reduce((sum, [, weight]) => sum + weight, 0);
  let target = random() * totalWeight;

  for (const [value, weight] of entries) {
    target -= weight;
    if (target <= 0) {
      return value;
    }
  }

  return entries[entries.length - 1][0];
}

function normalizeName(name) {
  const cleaned = name
    .replace(/\(([^)]+)\)/g, (match, contents) => {
      const tokens = contents
        .toLowerCase()
        .replace(/\band\b/g, "&")
        .split(/[,/&]+/)
        .map((token) => token.trim())
        .filter(Boolean);
      const strippable = new Set(["c", "captain", "vc", "vice captain", "vice-captain", "wk"]);
      return tokens.length > 0 && tokens.every((token) => strippable.has(token)) ? "" : match;
    })
    .replace(/\s+/g, " ")
    .trim();

  return GAME_PLAYER_NAME_ALIASES.get(cleaned) || cleaned;
}

function normalizeStyle(style) {
  return String(style || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getPlayerIdentity(player) {
  return normalizeName(player.name).toLowerCase();
}

function uniqueByIdentity(players) {
  const seen = new Set();
  return players.filter((player) => {
    const identity = getPlayerIdentity(player);
    if (seen.has(identity)) {
      return false;
    }
    seen.add(identity);
    return true;
  });
}

export function isAllRounderPlayer(player) {
  return player.batting > 50 && player.bowling > 50;
}

function buildPrimeRatingsMap() {
  const byIdentity = new Map();

  for (const player of PLAYER_POOL) {
    const identity = getPlayerIdentity(player);
    const current = byIdentity.get(identity) || { batting: 0, bowling: 0 };
    current.batting = Math.max(current.batting, player.batting || 0);
    current.bowling = Math.max(current.bowling, player.bowling || 0);
    byIdentity.set(identity, current);
  }

  return byIdentity;
}

const PRIME_RATINGS_BY_IDENTITY = buildPrimeRatingsMap();

function getDifficultyProfile(difficultyId) {
  return DIFFICULTY_BY_ID.get(difficultyId) || DIFFICULTY_LEVELS[1];
}

export function getRerollAllowance(difficultyId) {
  return getDifficultyProfile(difficultyId).rerolls ?? 0;
}

export function getDifficultyAdjustedPlayer(player, difficultyId) {
  if (!player) {
    return player;
  }

  const difficulty = getDifficultyProfile(difficultyId);
  if (!difficulty.usePrimeRatings) {
    return { ...player };
  }

  const prime = PRIME_RATINGS_BY_IDENTITY.get(getPlayerIdentity(player));
  if (!prime) {
    return { ...player };
  }

  return {
    ...player,
    batting: Math.max(player.batting || 0, prime.batting || 0),
    bowling: Math.max(player.bowling || 0, prime.bowling || 0),
  };
}

export function getDisplayRoster(roster, difficultyId) {
  return roster.map((player) => getDifficultyAdjustedPlayer(player, difficultyId));
}

function getTopAverage(roster, skill, count = 5) {
  if (!roster.length) {
    return 0;
  }

  const selected = [...roster]
    .sort((left, right) => right[skill] - left[skill] || right.batting + right.bowling - (left.batting + left.bowling))
    .slice(0, Math.min(count, roster.length));

  return selected.reduce((total, player) => total + player[skill], 0) / selected.length;
}

export function getTeamMetrics(roster) {
  if (!roster.length) {
    return { batting: 0, bowling: 0 };
  }

  return {
    batting: round(getTopAverage(roster, "batting", 5)),
    bowling: round(getTopAverage(roster, "bowling", 5)),
  };
}

function takeBestPlayers(pool, scoreFn, count, selectedIds) {
  const picks = [];

  for (const player of [...pool]
    .filter((candidate) => !selectedIds.has(candidate.id))
    .sort((left, right) => scoreFn(right) - scoreFn(left))) {
    if (picks.length >= count) {
      break;
    }

    picks.push(player);
    selectedIds.add(player.id);
  }

  return picks;
}

function selectBestXI(roster) {
  if (roster.length <= ROSTER_SIZE) {
    return [...roster];
  }

  const xi = [];
  const selectedIds = new Set();
  const wicketkeeper = [...roster]
    .filter((player) => player.role === "wicketkeeper")
    .sort((left, right) => right.batting - left.batting || right.bowling - left.bowling)[0];

  if (wicketkeeper) {
    xi.push(wicketkeeper);
    selectedIds.add(wicketkeeper.id);
  }

  xi.push(
    ...takeBestPlayers(
      roster,
      (player) => player.bowling * 1.1 + player.batting * 0.18 + (isAllRounderPlayer(player) ? 5 : 0),
      4,
      selectedIds,
    ),
  );

  xi.push(
    ...takeBestPlayers(
      roster,
      (player) => player.batting * 1.08 + player.bowling * 0.16 + (player.role === "wicketkeeper" ? 3 : 0),
      4,
      selectedIds,
    ),
  );

  xi.push(
    ...takeBestPlayers(
      roster,
      (player) => player.batting * 0.56 + player.bowling * 0.44 + (isAllRounderPlayer(player) ? 6 : 0),
      ROSTER_SIZE - xi.length,
      selectedIds,
    ),
  );

  return xi.slice(0, ROSTER_SIZE);
}

function getOpponentRoster(opponentId) {
  return PLAYER_POOL.filter((player) => player.squadId === opponentId);
}

function buildConditions(opponent, random) {
  const teamKey = (opponent.shortName || opponent.label.split(" ").slice(0, -1).join(" ")).toLowerCase();
  const weatherId = weightedChoice(WEATHER_WEIGHTS_BY_TEAM[teamKey] || WEATHER_WEIGHTS_BY_TEAM.default, random);
  const surfaceId = weightedChoice(SURFACE_WEIGHTS_BY_TEAM[teamKey] || SURFACE_WEIGHTS_BY_TEAM.default, random);
  const outfieldId = weightedChoice(OUTFIELD_WEIGHTS_BY_TEAM[teamKey] || OUTFIELD_WEIGHTS_BY_TEAM.default, random);

  return {
    weather: WEATHER_OPTIONS[weatherId],
    surface: SURFACE_OPTIONS[surfaceId],
    outfield: OUTFIELD_OPTIONS[outfieldId],
  };
}

function buildOpponentCard(squad, difficultyId) {
  const roster = selectBestXI(getDisplayRoster(getOpponentRoster(squad.id), difficultyId));
  const metrics = getTeamMetrics(roster);
  return {
    id: squad.id,
    label: squad.label,
    shortName: squad.team || squad.country || squad.label.split(" ").slice(0, -1).join(" "),
    note: squad.note,
    batting: metrics.batting,
    bowling: metrics.bowling,
    overall: round((metrics.batting + metrics.bowling) / 2),
  };
}

function chooseOpponentForStage(state, stageBlueprint, random) {
  const availableSquads = DRAFT_SQUADS.filter((squad) => !state.usedOpponentIds.includes(squad.id));
  const evaluated = availableSquads.map((squad) => buildOpponentCard(squad, state.difficulty));

  if (!evaluated.length) {
    return null;
  }

  const shortlist = [...evaluated]
    .sort((left, right) => {
      const leftDistance = Math.abs(left.overall - stageBlueprint.overall);
      const rightDistance = Math.abs(right.overall - stageBlueprint.overall);
      return leftDistance - rightDistance || right.overall - left.overall;
    })
    .slice(0, Math.max(8, Math.ceil(evaluated.length * 0.18)));

  return weightedChoice(
    shortlist.map((candidate, index) => {
      const distance = Math.max(1, Math.abs(candidate.overall - stageBlueprint.overall));
      return [candidate, Math.max(1, 18 - distance - index * 0.35)];
    }),
    random,
  );
}

function getAggressionProfile(player) {
  return AGGRESSION_PROFILES[player.aggressionLevel] || AGGRESSION_PROFILES.Balanced;
}

function getStyleFlags(player = {}) {
  const style = (player.bowlingStyle || "").toLowerCase();
  return {
    pace:
      style.includes("fast") ||
      style.includes("medium fast") ||
      style.includes("fast medium") ||
      style === "medium" ||
      style === "slow medium",
    seam:
      style.includes("fast") ||
      style.includes("medium") ||
      style.includes("seam"),
    swing:
      style.includes("fast") ||
      style.includes("medium"),
    spin:
      style.includes("break") ||
      style.includes("orthodox") ||
      style.includes("chinaman") ||
      style.includes("slow"),
    wrist:
      style.includes("leg break") || style.includes("googly") || style.includes("chinaman"),
    finger:
      style.includes("off break") || style.includes("orthodox"),
    leftArm: (player.bowlingHand || "").toLowerCase() === "left",
  };
}

function getMatchupAdvantage(striker, bowler) {
  const hand = (striker.battingHand || "").toLowerCase();
  const style = (bowler.bowlingStyle || "").toLowerCase();

  if (!hand || !style) {
    return 0;
  }

  if (hand === "left" && style.includes("off break")) {
    return 0.03;
  }

  if (hand === "right" && style.includes("leg break")) {
    return 0.03;
  }

  if (hand === "right" && style.includes("orthodox")) {
    return 0.024;
  }

  if (hand === "left" && style.includes("chinaman")) {
    return 0.024;
  }

  if (hand === "right" && getStyleFlags(bowler).leftArm && getStyleFlags(bowler).pace) {
    return 0.018;
  }

  return 0;
}

function getBowlingConditionsAdvantage(conditions, bowler, overIndex) {
  const flags = getStyleFlags(bowler);
  const spinWindow = getSpinRecommendationWindow(conditions);
  const spinWear = clamp((overIndex - spinWindow) / 10, 0, 1);
  const freshBallFactor = clamp((18 - overIndex) / 18, 0, 1);
  let advantage = 0;

  if (flags.pace) {
    advantage += (conditions.weather.seam + conditions.surface.pace) * 0.0022 * (0.55 + freshBallFactor * 0.75);
  }

  if (flags.swing) {
    advantage += conditions.weather.swing * 0.0016 * (0.45 + freshBallFactor * 0.9);
  }

  if (flags.spin) {
    advantage += conditions.surface.spin * (overIndex >= spinWindow ? 0.0018 + spinWear * 0.0014 : 0.00045);
    advantage += conditions.weather.spin * (overIndex >= spinWindow ? 0.001 + spinWear * 0.0008 : 0.00025);
  }

  if (flags.wrist && overIndex >= spinWindow) {
    advantage += 0.002 + spinWear * 0.0025;
  }

  if (flags.finger && overIndex >= spinWindow + 2) {
    advantage += 0.0015 + spinWear * 0.0018;
  }

  if (overIndex < POWERPLAY_END && flags.seam) {
    advantage += 0.01;
  }

  if (overIndex >= DEATH_OVERS_START && flags.pace) {
    advantage += 0.006;
  }

  if (overIndex >= spinWindow && flags.spin) {
    advantage += 0.002 + spinWear * 0.004;
  }

  return advantage;
}

function getBattingConditionsAdvantage(conditions, overIndex) {
  let batting = (conditions.weather.batting + conditions.surface.batting + conditions.outfield.batting) * 0.0018;

  if (overIndex < POWERPLAY_END) {
    batting += 0.008;
  }

  if (overIndex >= DEATH_OVERS_START) {
    batting += 0.012;
  }

  return batting;
}

function getRequiredRunRate(innings) {
  if (!innings.target) {
    return null;
  }

  const runsNeeded = innings.target - innings.score;
  const ballsRemaining = TOTAL_OVERS * 6 - innings.balls;
  if (runsNeeded <= 0) {
    return 0;
  }
  if (ballsRemaining <= 0) {
    return runsNeeded * 6;
  }
  return (runsNeeded * 6) / ballsRemaining;
}

function getCurrentRunRate(innings) {
  if (innings.balls === 0) {
    return 0;
  }
  return (innings.score * 6) / innings.balls;
}

function getNextBatterQuality(innings) {
  const nextBatterId = innings.remainingBatters[0];
  if (!nextBatterId) {
    return 38;
  }
  return innings.teamById.get(nextBatterId)?.batting || 38;
}

function getSettlingTarget(player) {
  switch (player.aggressionLevel) {
    case "Very Cautious":
      return 10;
    case "Cautious":
      return 13;
    case "Aggressive":
      return 20;
    case "Very Aggressive":
      return 22;
    default:
      return 18;
  }
}

function getInitialBatterConfidence(player) {
  switch (player.aggressionLevel) {
    case "Very Aggressive":
      return 48;
    case "Aggressive":
      return 44;
    case "Cautious":
      return 38;
    case "Very Cautious":
      return 35;
    default:
      return 40;
  }
}

function getInitialBowlerRhythm(player) {
  const style = normalizeStyle(player.bowlingStyle || "");
  if (style.includes("fast") || style.includes("medium")) {
    return 42;
  }
  if (style.includes("break") || style.includes("spin")) {
    return 39;
  }
  return 40;
}

function getBatterConfidenceModifiers(player) {
  switch (player?.aggressionLevel) {
    case "Very Aggressive":
      return { rise: 1.14, fall: 1.18 };
    case "Aggressive":
      return { rise: 1.08, fall: 1.08 };
    case "Cautious":
      return { rise: 0.92, fall: 0.9 };
    case "Very Cautious":
      return { rise: 0.84, fall: 0.82 };
    default:
      return { rise: 1, fall: 1 };
  }
}

function getBatterSettledLevel(player, battingCard) {
  if (!player || !battingCard || battingCard.balls <= 0) {
    return 0;
  }

  const settlingTarget = getSettlingTarget(player);
  const boundaryBoost = battingCard.fours * 0.9 + battingCard.sixes * 1.4;
  const runBoost = battingCard.runs / 14;
  const aggressionBoost = player.aggressionLevel === "Very Aggressive" ? 1.4 : player.aggressionLevel === "Aggressive" ? 0.8 : 0;
  const progress = (battingCard.balls + boundaryBoost + runBoost + aggressionBoost) / settlingTarget;
  return clamp(round(progress * 99), 0, 99);
}

function getBatterConfidenceLevel(player, battingCard, innings) {
  if (!player || !battingCard) {
    return innings?.confidenceBase ?? 40;
  }
  return clamp(round(battingCard.confidence ?? getInitialBatterConfidence(player)), 0, 99);
}

function getBowlerRhythmLevel(player, bowlingCard) {
  if (!player || !bowlingCard) {
    return 40;
  }
  return clamp(round(bowlingCard.rhythm ?? getInitialBowlerRhythm(player)), 0, 99);
}

function getBowlerRhythmWithSpellGap(player, bowlingCard, innings) {
  const baseRhythm = getBowlerRhythmLevel(player, bowlingCard);
  if (!innings || !bowlingCard || bowlingCard.lastOverBowled == null) {
    return baseRhythm;
  }

  const currentOverNumber = Math.floor(innings.balls / 6) + 1;
  const oversSinceSpell = Math.max(currentOverNumber - bowlingCard.lastOverBowled - 1, 0);
  const gapPenalty = oversSinceSpell <= 2 ? 0 : Math.min((oversSinceSpell - 2) * 2, 12);

  return clamp(round(baseRhythm - gapPenalty), 0, 99);
}

function getActiveBatters(innings) {
  return [innings.strikerId, innings.nonStrikerId]
    .filter(Boolean)
    .map((playerId) => {
      const player = innings.teamById.get(playerId);
      const card = innings.battingCards[playerId];
      return player && card ? { player, card } : null;
    })
    .filter(Boolean);
}

function getCurrentPartnershipRuns(innings) {
  return innings.score - innings.lastWicketScore;
}

function getCurrentPartnershipBalls(innings) {
  return innings.balls - innings.lastWicketBall;
}

function getTopOrderDamage(innings, count = 4) {
  const topOrderIds = innings.teamRoster.slice(0, count);
  return topOrderIds.reduce((total, playerId) => total + (innings.battingCards[playerId]?.out ? 1 : 0), 0);
}

function getRecentWicketCount(innings, windowBalls = 18) {
  return innings.recentWickets.filter((ballNumber) => innings.balls - ballNumber <= windowBalls).length;
}

function getRecentOverRunRate(innings, count = 3) {
  const recentOvers = innings.overs.slice(-count);

  if (!recentOvers.length) {
    return getCurrentRunRate(innings);
  }

  const runs = recentOvers.reduce((total, over) => total + over.events.reduce((overTotal, event) => overTotal + (/^\d+$/.test(event) ? Number(event) : 0), 0), 0);
  return (runs * 6) / (recentOvers.length * 6);
}

function didPreviousInningsCollapse(previousInnings) {
  if (!previousInnings || previousInnings.wickets < 7 || previousInnings.wicketFalls.length < 4) {
    return false;
  }

  const lastFour = previousInnings.wicketFalls.slice(-4);
  const lastFourRuns = lastFour[lastFour.length - 1].score - lastFour[0].score;
  const lastFourBalls = lastFour[lastFour.length - 1].balls - lastFour[0].balls;
  const lastFive = previousInnings.wicketFalls.length >= 5 ? previousInnings.wicketFalls.slice(-5) : null;
  const lastFiveRuns = lastFive ? lastFive[lastFive.length - 1].score - lastFive[0].score : Number.POSITIVE_INFINITY;

  return lastFourRuns <= 35 || lastFourBalls <= 30 || lastFiveRuns <= 50;
}

function getInitialConfidenceBase(previousInnings) {
  if (!previousInnings) {
    return 40;
  }

  if (previousInnings.score > 350) {
    return 20;
  }

  if (didPreviousInningsCollapse(previousInnings)) {
    return 55;
  }

  return 40;
}

function getConfidenceTarget(innings) {
  const activeBatters = getActiveBatters(innings);
  const settledAverage = activeBatters.length
    ? activeBatters.reduce((total, batter) => total + getBatterSettledLevel(batter.player, batter.card), 0) / activeBatters.length
    : 0;
  const batterConfidenceAverage = activeBatters.length
    ? activeBatters.reduce((total, batter) => total + getBatterConfidenceLevel(batter.player, batter.card, innings), 0) / activeBatters.length
    : innings.confidenceBase;
  const partnershipRuns = getCurrentPartnershipRuns(innings);
  const partnershipBalls = getCurrentPartnershipBalls(innings);
  const topOrderDamage = getTopOrderDamage(innings);
  const recentWickets = getRecentWicketCount(innings);
  const currentRate = getCurrentRunRate(innings);
  const requiredRate = innings.target ? getRequiredRunRate(innings) : null;
  const recentOverRunRate = getRecentOverRunRate(innings, 3);
  const activeQuality = activeBatters.length
    ? activeBatters.reduce((total, batter) => total + batter.player.batting, 0) / activeBatters.length
    : 0;
  const activeRuns = activeBatters.reduce((total, batter) => total + batter.card.runs, 0);
  const nextBatterQuality = getNextBatterQuality(innings);
  const scoringBaseline = innings.target ? Math.max(requiredRate || 0, 5.2) : 5.2;
  const scoringMomentum = clamp((recentOverRunRate - scoringBaseline) * 1.6, -6, 9);
  const chaseControl = innings.target
    ? clamp(10 - Math.max((requiredRate || 0) - currentRate, 0) * 2.6 + Math.min((10 - innings.wickets) * 0.35, 3), -10, 12)
    : clamp((currentRate - 4.8) * 1.8, -5, 8);
  const collapseExposure = innings.wickets >= 8 ? 10 : innings.wickets >= 6 ? 6 : innings.wickets >= 4 ? 3 : 0;

  return clamp(
    round(
      innings.confidenceBase +
        settledAverage * 0.1 +
        (batterConfidenceAverage - 40) * 0.34 +
        Math.max(activeQuality - 70, 0) * 0.14 +
        Math.max(nextBatterQuality - 66, 0) * 0.06 +
        Math.min(activeRuns * 0.035, 10) +
        Math.min(partnershipRuns * 0.1, 9) +
        Math.min(partnershipBalls * 0.024, 4) +
        scoringMomentum +
        chaseControl -
        innings.wickets * 2.1 -
        topOrderDamage * 1.8 -
        recentWickets * 3.1 -
        collapseExposure,
    ),
    0,
    99,
  );
}

function getTeamConfidence(innings) {
  return clamp(round(innings.teamConfidence ?? innings.confidenceBase ?? 40), 0, 99);
}

function updateTeamConfidence(innings, event) {
  const target = getConfidenceTarget(innings);
  const current = innings.teamConfidence ?? innings.confidenceBase ?? 40;
  const delta = target - current;
  const requiredRate = innings.target ? getRequiredRunRate(innings) : 0;
  const currentRate = getCurrentRunRate(innings);
  const pressureGap = Math.max((requiredRate || 0) - currentRate, 0);
  const nextBatterQuality = getNextBatterQuality(innings);
  const wicketsInHand = Math.max(10 - innings.wickets, 0);
  const partnershipRuns = getCurrentPartnershipRuns(innings);
  const wicketShockBuffer = event === "W"
    ? clamp(
      Math.max(nextBatterQuality - 62, 0) * 0.06 +
        wicketsInHand * 0.09 +
        Math.min(partnershipRuns, 36) * 0.025,
      0,
      2.4,
    )
    : 0;
  const riseCap = event === "6"
    ? 0.95
    : event === "4"
      ? 0.72
      : event === "3"
        ? 0.62
        : event === "2"
          ? 0.45
          : event === "1"
            ? 0.28
            : event === "0"
              ? pressureGap >= 2.5
                ? 0.08
                : 0.14
              : 0;
  const fallCap = event === "W"
    ? clamp(4.2 - wicketShockBuffer, 1.6, 4.2)
    : event === "0"
      ? pressureGap >= 3
        ? 0.3
        : pressureGap >= 1.5
          ? 0.18
          : 0.08
      : 0.55;

  innings.teamConfidence = clamp(
    round(current + clamp(delta, -fallCap, riseCap)),
    0,
    99,
  );
}

function updateBatterConfidence(innings, batterId, bowlerId, event) {
  const batter = innings.teamById.get(batterId);
  const battingCard = innings.battingCards[batterId];
  const bowler = innings.bowlingById.get(bowlerId);
  const bowlingCard = innings.bowlingCards[bowlerId];

  if (!batter || !battingCard) {
    return;
  }

  const settled = getBatterSettledLevel(batter, battingCard);
  const settledFactor = settled / 99;
  const bowlerRhythm = getBowlerRhythmWithSpellGap(bowler, bowlingCard, innings);
  const teamConfidence = getTeamConfidence(innings);
  const current = getBatterConfidenceLevel(batter, battingCard, innings);
  const confidenceModifiers = getBatterConfidenceModifiers(batter);
  const requiredRate = innings.target ? getRequiredRunRate(innings) : null;
  const pressureGap = innings.target ? Math.max((requiredRate || 0) - getCurrentRunRate(innings), 0) : 0;
  const qualityEdge = clamp((batter.batting - (bowler?.bowling || 70)) * 0.03, -6, 6);
  const partnershipLift = clamp(getCurrentPartnershipRuns(innings) * 0.04, 0, 6);
  const battingPosition = innings.teamRoster.indexOf(batter.id);
  const lowerOrderBatter = battingPosition >= 6 || batter.batting < 68;
  const topOrderDamage = getTopOrderDamage(innings);
  const collapseMode = lowerOrderBatter && (topOrderDamage >= 2 || innings.wickets >= 4);
  const lowerOrderStability = collapseMode
    ? batter.aggressionLevel === "Very Cautious"
      ? 3.4
      : batter.aggressionLevel === "Cautious"
        ? 2.6
        : batter.aggressionLevel === "Balanced"
          ? 1.2
          : 0
    : 0;
  const lowerOrderPanic = collapseMode
    ? batter.aggressionLevel === "Very Aggressive"
      ? 2.8
      : batter.aggressionLevel === "Aggressive"
        ? 1.8
        : 0.4
    : 0;
  const target =
    getInitialBatterConfidence(batter) +
    settledFactor * 20 +
    (teamConfidence - 40) * 0.14 +
    qualityEdge +
    partnershipLift -
    clamp((bowlerRhythm - 50) * 0.15, -3, 6) -
    clamp(pressureGap * 1.25, 0, 6) +
    lowerOrderStability -
    lowerOrderPanic;

  let riseCap = 0.75;
  let fallCap = 1.2;

  switch (event) {
    case "6":
      riseCap = 1.9;
      break;
    case "4":
      riseCap = 1.35;
      break;
    case "3":
      riseCap = 0.95;
      break;
    case "2":
      riseCap = 0.72;
      break;
    case "1":
      riseCap = 0.42;
      fallCap = 0.32;
      break;
    case "0":
      riseCap = 0.1;
      fallCap = pressureGap >= 2 ? 0.5 : 0.24;
      break;
    case "W":
      riseCap = 0;
      fallCap = clamp(4.8 + pressureGap * 0.45 - Math.max(batter.batting - 80, 0) * 0.045, 3, 5.8);
      break;
    default:
      break;
  }

  riseCap *= confidenceModifiers.rise;
  fallCap *= confidenceModifiers.fall;

  battingCard.confidence = clamp(round(current + clamp(target - current, -fallCap, riseCap)), 0, 99);
}

function updateBowlerRhythm(innings, bowlerId, event) {
  const bowler = innings.bowlingById.get(bowlerId);
  const bowlingCard = innings.bowlingCards[bowlerId];
  if (!bowler || !bowlingCard) {
    return;
  }

  const current = getBowlerRhythmWithSpellGap(bowler, bowlingCard, innings);
  const overIndex = Math.floor(Math.max(innings.balls - 1, 0) / 6);
  const conditionsEdge = getBowlingConditionsAdvantage(innings.conditions, bowler, overIndex) * 900;
  const recentEconomy = bowlingCard.balls > 0 ? (bowlingCard.runsConceded * 6) / bowlingCard.balls : 6;
  const controlBoost = clamp((6.2 - recentEconomy) * 2.2, -6, 8);
  const target =
    getInitialBowlerRhythm(bowler) +
    Math.max(bowler.bowling - 75, 0) * 0.18 +
    clamp(conditionsEdge, -4, 8) +
    controlBoost;

  let riseCap = 0.7;
  let fallCap = 1;

  switch (event) {
    case "W":
      riseCap = 2.1;
      break;
    case "0":
      riseCap = 0.75;
      fallCap = 0.25;
      break;
    case "1":
      riseCap = 0.3;
      fallCap = 0.25;
      break;
    case "2":
      riseCap = 0.25;
      fallCap = 0.32;
      break;
    case "4":
      riseCap = 0.1;
      fallCap = current >= 72 ? 0.9 : 1.15;
      break;
    case "6":
      riseCap = 0;
      fallCap = current >= 72 ? 1.35 : 1.75;
      break;
    default:
      break;
  }

  bowlingCard.rhythm = clamp(round(current + clamp(target - current, -fallCap, riseCap)), 0, 99);
}

function getChasePressure(innings, wicketSlotsLeft) {
  if (!innings.target) {
    return 0;
  }

  const requiredRate = getRequiredRunRate(innings);
  const currentRate = getCurrentRunRate(innings);
  const runRateGap = clamp((requiredRate - currentRate) / 4, -0.8, 1.6);
  const lateOvers = innings.balls >= 40 * 6 ? 0.45 : innings.balls >= 30 * 6 ? 0.22 : 0;
  const wicketsInHandBoost = wicketSlotsLeft >= 6 ? 0.16 : wicketSlotsLeft >= 4 ? 0.08 : 0;

  return runRateGap + lateOvers + wicketsInHandBoost;
}

function getBowlingIntentProfile(intentId) {
  return BOWLING_INTENTS[intentId] || BOWLING_INTENTS.balanced;
}

function buildPlayerById(roster) {
  return new Map(roster.map((player) => [player.id, player]));
}

function buildUserBattingPlan(roster, openerIds) {
  const byId = buildPlayerById(roster);
  const used = new Set(openerIds);
  const remaining = [...roster]
    .filter((player) => !used.has(player.id))
    .sort(
      (left, right) =>
        right.batting - left.batting ||
        right.bowling - left.bowling ||
        left.name.localeCompare(right.name),
    )
    .map((player) => player.id);

  return {
    order: [...openerIds, ...remaining],
    openers: [...openerIds],
  };
}

function userBatsFirstFromPregame(pregame) {
  return pregame.tossWinner === "user" ? pregame.userDecision === "bat" : pregame.userDecision === "bowl";
}

function chooseBestRemainingBatter(remainingIds, byId, oversCompleted) {
  return [...remainingIds]
    .sort((leftId, rightId) => {
      const left = byId.get(leftId);
      const right = byId.get(rightId);
      const leftScore = left.batting + (oversCompleted >= 35 ? left.aggressionLevel === "Very Aggressive" ? 3 : 0 : 0);
      const rightScore = right.batting + (oversCompleted >= 35 ? right.aggressionLevel === "Very Aggressive" ? 3 : 0 : 0);
      return rightScore - leftScore;
    })[0];
}

function chooseAIOpeners(roster) {
  return [...roster]
    .sort((left, right) => {
      const leftScore = left.batting + (getAggressionProfile(left).boundary + getAggressionProfile(left).six) * 100;
      const rightScore = right.batting + (getAggressionProfile(right).boundary + getAggressionProfile(right).six) * 100;
      return rightScore - leftScore;
    })
    .slice(0, 2)
    .map((player) => player.id);
}

function buildAIBattingOrder(roster) {
  const openers = chooseAIOpeners(roster);
  const remaining = roster
    .filter((player) => !openers.includes(player.id))
    .sort((left, right) => {
      const leftScore = left.batting + left.bowling * 0.08;
      const rightScore = right.batting + right.bowling * 0.08;
      return rightScore - leftScore;
    })
    .map((player) => player.id);
  return [...openers, ...remaining];
}

function getSpinRecommendationWindow(conditions) {
  const spinSupport = conditions.weather.spin + conditions.surface.spin;
  const seamSupport = conditions.weather.seam + conditions.weather.swing + conditions.surface.seam + conditions.surface.pace;
  return clamp(18 - Math.max(spinSupport - 3, 0) + Math.max(seamSupport - 5, 0) * 0.45, 14, 23);
}

function scoreBowlerForPhase(player, overNumber, conditions) {
  const flags = getStyleFlags(player);
  const spinWindow = getSpinRecommendationWindow(conditions);
  const wornBallFactor = clamp((overNumber - spinWindow) / 10, 0, 1);
  let score = player.bowling;

  if (overNumber < POWERPLAY_END) {
    score += flags.pace ? 8 : -6;
    score += conditions.weather.seam + conditions.weather.swing;
  } else if (overNumber >= DEATH_OVERS_START) {
    score += flags.pace ? 7 : -4;
    score += player.batting < 40 ? 2 : 0;
  } else {
    if (overNumber < spinWindow) {
      score += flags.pace ? 4 : -5;
      score += (conditions.weather.seam + conditions.surface.pace) * 0.8;
      score += flags.spin ? conditions.surface.spin * 0.2 : 0;
    } else {
      score += flags.spin ? 4 + wornBallFactor * 6 : 0;
      score += conditions.surface.spin * (flags.spin ? (0.65 + wornBallFactor * 0.55) : 0.25);
      score += conditions.weather.spin * (flags.spin ? (0.45 + wornBallFactor * 0.35) : 0.15);
      score += flags.pace ? Math.max(1.5 - wornBallFactor * 3.5, -2) : 0;
    }
  }
  return score;
}

function getEligibleBowlerIds(innings, teamRoster, byId) {
  const primary = teamRoster
    .filter((player) => player.bowling >= 40)
    .filter((player) => (innings.bowlingCards[player.id]?.balls || 0) < 60)
    .filter((player) => player.id !== innings.lastBowlerId)
    .map((player) => player.id)
    .sort((leftId, rightId) => {
      const left = byId.get(leftId);
      const right = byId.get(rightId);
      return scoreBowlerForPhase(right, Math.floor(innings.balls / 6), innings.conditions) - scoreBowlerForPhase(left, Math.floor(innings.balls / 6), innings.conditions);
    });

  if (primary.length) {
    return primary;
  }

  const secondary = teamRoster
    .filter((player) => player.bowling >= 40)
    .filter((player) => (innings.bowlingCards[player.id]?.balls || 0) < 60)
    .map((player) => player.id)
    .sort((leftId, rightId) => {
      const left = byId.get(leftId);
      const right = byId.get(rightId);
      return scoreBowlerForPhase(right, Math.floor(innings.balls / 6), innings.conditions) - scoreBowlerForPhase(left, Math.floor(innings.balls / 6), innings.conditions);
    });

  if (secondary.length) {
    return secondary;
  }

  return [...teamRoster]
    .sort((left, right) => right.bowling - left.bowling || right.batting - left.batting)
    .slice(0, 5)
    .map((player) => player.id);
}

function chooseAIBowler(innings, teamRoster, byId) {
  const eligibleIds = getEligibleBowlerIds(innings, teamRoster, byId);
  const bowlerId = eligibleIds[0];
  const overNumber = Math.floor(innings.balls / 6);
  const spinWindow = getSpinRecommendationWindow(innings.conditions);
  const player = byId.get(bowlerId);
  const flags = getStyleFlags(player);
  let intent = "balanced";

  if (overNumber < POWERPLAY_END || overNumber >= DEATH_OVERS_START) {
    intent = flags.pace ? "attacking" : "balanced";
  } else if (flags.spin && overNumber >= spinWindow + 4) {
    intent = innings.target ? "defensive" : "balanced";
  } else if (flags.spin && overNumber >= spinWindow) {
    intent = innings.target ? "balanced" : "balanced";
  } else if (flags.spin && innings.target) {
    intent = "balanced";
  } else if (flags.spin) {
    intent = "attacking";
  }

  return { bowlerId, intent, eligibleIds };
}

function createEmptyInnings({ battingSide, battingLabel, bowlingSide, bowlingLabel, battingOrder, teamRoster, bowlingRoster, conditions, target }) {
  const byId = buildPlayerById(teamRoster);
  const bowlingById = buildPlayerById(bowlingRoster);
  const [strikerId, nonStrikerId, ...remaining] = battingOrder;

  return {
    battingSide,
    battingLabel,
    bowlingSide,
    bowlingLabel,
    target,
    score: 0,
    wickets: 0,
    balls: 0,
    strikerId,
    nonStrikerId,
    remainingBatters: remaining,
    battingCards: Object.fromEntries(
      teamRoster.map((player) => [
        player.id,
        {
          id: player.id,
          name: player.name,
          runs: 0,
          balls: 0,
          fours: 0,
          sixes: 0,
          out: false,
          notOut: false,
          confidence: getInitialBatterConfidence(player),
        },
      ]),
    ),
    bowlingCards: Object.fromEntries(
      bowlingRoster.map((player) => [
      player.id,
      {
        id: player.id,
        name: player.name,
        balls: 0,
        runsConceded: 0,
        wickets: 0,
        rhythm: getInitialBowlerRhythm(player),
        lastOverBowled: null,
      },
    ]),
  ),
    currentOver: {
      startBalls: 0,
      events: [],
      bowlerId: "",
      bowlerIntent: "balanced",
    },
    overs: [],
    lastBowlerId: "",
    lastWicket: null,
    lastWicketScore: 0,
    lastWicketBall: 0,
    recentWickets: [],
    wicketFalls: [],
    confidenceBase: 40,
    teamConfidence: 40,
    teamById: byId,
    bowlingById,
    teamRoster: teamRoster.map((player) => player.id),
    bowlingRoster: bowlingRoster.map((player) => player.id),
    conditions,
    lastStandoutId: "",
  };
}

function cloneInnings(innings) {
  return {
    ...innings,
    remainingBatters: [...innings.remainingBatters],
    battingCards: Object.fromEntries(Object.entries(innings.battingCards).map(([id, card]) => [id, { ...card }])),
    bowlingCards: Object.fromEntries(Object.entries(innings.bowlingCards).map(([id, card]) => [id, { ...card }])),
    currentOver: {
      ...innings.currentOver,
      events: [...innings.currentOver.events],
    },
    overs: innings.overs.map((over) => ({ ...over, events: [...over.events] })),
    lastWicket: innings.lastWicket ? { ...innings.lastWicket } : null,
    recentWickets: [...innings.recentWickets],
    wicketFalls: innings.wicketFalls.map((fall) => ({ ...fall })),
  };
}

function createMatch(state, tossWinner, userDecision, userOpeners, random) {
  const opponent = state.currentOpponent;
  const conditions = state.currentConditions;
  const difficultyId = state.difficulty;
  const userTeam = getDisplayRoster(state.roster, difficultyId);
  const opponentTeam = selectBestXI(getDisplayRoster(getOpponentRoster(opponent.id), difficultyId));
  const userBattingPlan = buildUserBattingPlan(userTeam, userOpeners);
  const opponentBattingOrder = buildAIBattingOrder(opponentTeam);
  const userBattingFirst = tossWinner === "user" ? userDecision === "bat" : userDecision === "bowl";
  const firstBattingSide = userBattingFirst ? "user" : "opponent";
  const firstInnings = createEmptyInnings({
    battingSide: firstBattingSide,
    battingLabel: firstBattingSide === "user" ? "You" : opponent.shortName,
    bowlingSide: firstBattingSide === "user" ? "opponent" : "user",
    bowlingLabel: firstBattingSide === "user" ? opponent.shortName : "You",
    battingOrder: firstBattingSide === "user" ? userBattingPlan.order : opponentBattingOrder,
    teamRoster: firstBattingSide === "user" ? userTeam : opponentTeam,
    bowlingRoster: firstBattingSide === "user" ? opponentTeam : userTeam,
    conditions,
    target: null,
  });
  firstInnings.confidenceBase = 40;
  firstInnings.teamConfidence = 40;

  return {
    opponent,
    stage: opponent.stage,
    conditions,
    tossWinner,
    userDecision,
    userBattingFirst,
    userTeam,
    opponentTeam,
    userBattingPlan,
    opponentBattingOrder,
    innings: [firstInnings],
    currentInningsIndex: 0,
    awaiting: firstBattingSide === "opponent" ? { type: "choose-bowler", overNumber: 1 } : null,
    latestOver: null,
    completed: false,
    result: null,
    firstSummaryShown: false,
    randomSeedNoise: random(),
    pendingTarget: null,
  };
}

function cloneMatch(match) {
  return {
    ...match,
    userTeam: match.userTeam.map((player) => ({ ...player })),
    opponentTeam: match.opponentTeam.map((player) => ({ ...player })),
    userBattingPlan: {
      ...match.userBattingPlan,
      order: [...match.userBattingPlan.order],
      openers: [...match.userBattingPlan.openers],
    },
    opponentBattingOrder: [...match.opponentBattingOrder],
    innings: match.innings.map(cloneInnings),
    awaiting: match.awaiting ? { ...match.awaiting } : null,
    latestOver: match.latestOver ? { ...match.latestOver, events: [...match.latestOver.events] } : null,
    result: match.result ? { ...match.result } : null,
    pendingTarget: match.pendingTarget,
  };
}

function createSecondInnings(match, target) {
  const secondBattingSide = match.userBattingFirst ? "opponent" : "user";
  const secondInnings = createEmptyInnings({
    battingSide: secondBattingSide,
    battingLabel: secondBattingSide === "user" ? "You" : match.opponent.shortName,
    bowlingSide: secondBattingSide === "user" ? "opponent" : "user",
    bowlingLabel: secondBattingSide === "user" ? match.opponent.shortName : "You",
    battingOrder: secondBattingSide === "user" ? match.userBattingPlan.order : match.opponentBattingOrder,
    teamRoster: secondBattingSide === "user" ? match.userTeam : match.opponentTeam,
    bowlingRoster: secondBattingSide === "user" ? match.opponentTeam : match.userTeam,
    conditions: match.conditions,
    target,
  });
  secondInnings.confidenceBase = getInitialConfidenceBase(match.innings[0]);
  secondInnings.teamConfidence = secondInnings.confidenceBase;
  return secondInnings;
}

function startSecondInnings(match, target) {
  const secondInnings = createSecondInnings(match, target);
  match.innings.push(secondInnings);
  match.currentInningsIndex = 1;
  match.latestOver = null;
  match.pendingTarget = null;
  match.awaiting = secondInnings.bowlingSide === "user" ? { type: "choose-bowler", overNumber: 1 } : null;
  return match;
}

function buildCurrentScoreline(innings) {
  return innings.wickets >= 10 ? `${innings.score}` : `${innings.score}/${innings.wickets}`;
}

function applyOverConfidenceAdjustment(innings, overSummary) {
  const overRuns = overSummary.events.reduce((total, event) => total + (/^\d+$/.test(event) ? Number(event) : 0), 0);
  const maiden = overRuns === 0;
  const requiredRate = getRequiredRunRate(innings);
  const currentRate = getCurrentRunRate(innings);
  const pressureGap = innings.target ? (requiredRate || 0) - currentRate : 0;
  let adjustment = 0;

  if (maiden) {
    adjustment -= 0.6;
    if (innings.target) {
      if ((requiredRate || 0) >= 10.5) {
        adjustment -= 1.4;
      } else if ((requiredRate || 0) >= 8.5) {
        adjustment -= 0.8;
      }
    }
  }

  if (innings.target) {
    if (pressureGap >= 4) {
      adjustment -= 0.75;
    } else if (pressureGap >= 2.25) {
      adjustment -= 0.45;
    } else if (pressureGap <= -4) {
      adjustment += 1.2;
    } else if (pressureGap <= -2.5) {
      adjustment += 0.75;
    }
  }

  if (overRuns >= 8) {
    adjustment += 1;
  }

  if (overRuns >= 12) {
    adjustment += 0.8;
  } else if (overRuns <= 2 && !maiden && innings.target && (requiredRate || 0) >= 7.5) {
    adjustment -= 0.6;
  }

  if (adjustment !== 0) {
    innings.teamConfidence = clamp(round((innings.teamConfidence ?? innings.confidenceBase ?? 40) + adjustment), 0, 99);
  }
}

function applyActiveBatterConfidenceAtOverEnd(innings, overSummary) {
  const overRuns = overSummary.events.reduce((total, event) => total + (/^\d+$/.test(event) ? Number(event) : 0), 0);
  const pressureGap = innings.target ? Math.max((getRequiredRunRate(innings) || 0) - getCurrentRunRate(innings), 0) : 0;
  const activeIds = [innings.strikerId, innings.nonStrikerId].filter(Boolean);

  let adjustment = 0;
  if (overRuns >= 12) {
    adjustment = 1;
  } else if (overRuns >= 8) {
    adjustment = 1;
  } else if (overRuns === 0) {
    adjustment = pressureGap >= 2 ? -1 : -0.5;
  }

  if (!adjustment) {
    return;
  }

  activeIds.forEach((playerId) => {
    const player = innings.teamById.get(playerId);
    const card = innings.battingCards[playerId];
    if (!player || !card || card.out) {
      return;
    }
    const modifiers = getBatterConfidenceModifiers(player);
    const scaledAdjustment = adjustment > 0 ? adjustment * modifiers.rise : adjustment * modifiers.fall;
    card.confidence = clamp(round(getBatterConfidenceLevel(player, card, innings) + scaledAdjustment), 0, 99);
  });
}

function finishOver(innings) {
  const overSummary = {
    overNumber: Math.floor(innings.currentOver.startBalls / 6) + 1,
    events: [...innings.currentOver.events],
    bowlerId: innings.currentOver.bowlerId,
    bowlerIntent: innings.currentOver.bowlerIntent,
    strikerId: innings.strikerId,
    nonStrikerId: innings.nonStrikerId,
    score: innings.score,
    wickets: innings.wickets,
    overs: formatOvers(innings.balls),
    requiredRate: getRequiredRunRate(innings),
  };
  innings.overs.push(overSummary);
  applyOverConfidenceAdjustment(innings, overSummary);
  applyActiveBatterConfidenceAtOverEnd(innings, overSummary);
  if (overSummary.bowlerId && innings.bowlingCards[overSummary.bowlerId]) {
    innings.bowlingCards[overSummary.bowlerId].lastOverBowled = overSummary.overNumber;
  }
  innings.lastBowlerId = innings.currentOver.bowlerId;
  innings.currentOver = {
    startBalls: innings.balls,
    events: [],
    bowlerId: "",
    bowlerIntent: "balanced",
  };
  [innings.strikerId, innings.nonStrikerId] = [innings.nonStrikerId, innings.strikerId];
  return overSummary;
}

export function formatOvers(balls) {
  const overs = Math.floor(balls / 6);
  const remainder = balls % 6;
  return remainder === 0 ? `${overs}` : `${overs}.${remainder}`;
}

function chooseNextBatterAutomatically(innings) {
  if (!innings.remainingBatters.length) {
    return null;
  }
  const nextId = chooseBestRemainingBatter(innings.remainingBatters, innings.teamById, Math.floor(innings.balls / 6));
  innings.remainingBatters = innings.remainingBatters.filter((candidateId) => candidateId !== nextId);
  return nextId;
}

function assignIncomingBatter(innings, nextBatterId) {
  innings.strikerId = nextBatterId;
}

function resolveBall(innings, bowler, bowlerIntentId, random) {
  const striker = innings.teamById.get(innings.strikerId);
  const battingCard = innings.battingCards[striker.id];
  const bowlingCard = innings.bowlingCards[bowler.id];
  const aggression = getAggressionProfile(striker);
  const intent = getBowlingIntentProfile(bowlerIntentId);
  const overIndex = Math.floor(innings.balls / 6);
  const matchup = getMatchupAdvantage(striker, bowler);
  const bowlingConditions = getBowlingConditionsAdvantage(innings.conditions, bowler, overIndex);
  const battingConditions = getBattingConditionsAdvantage(innings.conditions, overIndex);
  const wicketsLeft = 10 - innings.wickets;
  const chasePressure = getChasePressure(innings, wicketsLeft);
  const settledLevel = getBatterSettledLevel(striker, battingCard);
  const settledFactor = settledLevel / 99;
  const batterConfidence = getBatterConfidenceLevel(striker, battingCard, innings);
  const batterConfidenceFactor = (batterConfidence - 45) / 100;
  const teamConfidence = getTeamConfidence(innings);
  const teamConfidenceFactor = (teamConfidence - 45) / 100;
  const bowlerRhythm = getBowlerRhythmWithSpellGap(bowler, bowlingCard, innings);
  const bowlerRhythmFactor = (bowlerRhythm - 45) / 100;
  const batterStrength = striker.batting;
  const bowlerStrength = bowler.bowling;
  const battingPosition = innings.teamRoster.indexOf(striker.id);
  const isTopOrder = battingPosition >= 0 && battingPosition <= 3;
  const isLowerOrder = battingPosition >= 6 || batterStrength < 68;
  const sightingFactor = battingCard.balls < 12 ? (12 - battingCard.balls) / 12 : 0;
  const recentWickets = getRecentWicketCount(innings);
  const battingEdge = (batterStrength - bowlerStrength) * 0.0007;
  const earlyNewBall = overIndex < POWERPLAY_END ? 0.006 : 0;
  const deathFactor = overIndex >= DEATH_OVERS_START ? 0.008 : 0;
  const qualityShield = clamp((batterStrength - 70) * 0.00042, -0.005, 0.014);
  const topOrderShield = isTopOrder ? clamp(0.006 + Math.max(batterStrength - 80, 0) * 0.00018, 0.006, 0.015) : 0;
  const lowerOrderRisk = batterStrength < 45 ? 0.018 : batterStrength < 55 ? 0.012 : batterStrength < 70 ? 0.004 : 0;
  let earlyWicketMod = 0;
  let earlyBoundaryMod = 0;
  let earlyRotateMod = 0;

  switch (striker.aggressionLevel) {
    case "Very Aggressive":
      earlyWicketMod = sightingFactor * 0.012;
      earlyBoundaryMod = sightingFactor * 0.032;
      earlyRotateMod = sightingFactor * -0.016;
      break;
    case "Aggressive":
      earlyWicketMod = sightingFactor * 0.006;
      earlyBoundaryMod = sightingFactor * 0.018;
      earlyRotateMod = sightingFactor * -0.008;
      break;
    case "Cautious":
      earlyWicketMod = sightingFactor * -0.008;
      earlyBoundaryMod = sightingFactor * -0.014;
      earlyRotateMod = sightingFactor * 0.02;
      break;
    case "Very Cautious":
      earlyWicketMod = sightingFactor * -0.011;
      earlyBoundaryMod = sightingFactor * -0.02;
      earlyRotateMod = sightingFactor * 0.028;
      break;
    default:
      earlyWicketMod = sightingFactor * -0.002;
      earlyBoundaryMod = sightingFactor * -0.004;
      earlyRotateMod = sightingFactor * 0.008;
      break;
  }

  const newBatterRisk =
    (1 - settledFactor)
    * (striker.aggressionLevel === "Very Aggressive" ? 0.013 : striker.aggressionLevel === "Aggressive" ? 0.009 : 0.0065)
    * clamp(1.12 - Math.max(batterStrength - 70, 0) * 0.01, 0.58, 1.08);
  const collapseRisk = recentWickets >= 2 && innings.wickets >= 3 && teamConfidence < 42
    ? clamp((42 - teamConfidence) * 0.0008, 0, 0.02)
    : 0;
  const anchorShield = batterStrength >= 92 ? 0.007 : batterStrength >= 84 ? 0.004 : batterStrength <= 50 ? -0.003 : 0;
  const lowerOrderSlowdown = batterStrength < 55 && innings.wickets >= 5 ? 0.02 : 0;
  const topOrderDamage = getTopOrderDamage(innings);
  const collapseMode = isLowerOrder && (topOrderDamage >= 2 || innings.wickets >= 4);
  const collapseStability = collapseMode
    ? striker.aggressionLevel === "Very Cautious"
      ? 0.012
      : striker.aggressionLevel === "Cautious"
        ? 0.008
        : striker.aggressionLevel === "Balanced"
          ? 0.004
          : 0
    : 0;
  const collapsePanic = collapseMode
    ? striker.aggressionLevel === "Very Aggressive"
      ? 0.015
      : striker.aggressionLevel === "Aggressive"
        ? 0.01
        : 0.003
    : 0;
  const wicketChance = clamp(
    0.024 +
      intent.wicket +
      aggression.wicket +
      bowlingConditions +
      matchup * 0.45 +
      earlyNewBall -
      battingConditions +
      deathFactor +
      chasePressure * 0.008 -
      battingEdge +
      newBatterRisk +
      collapseRisk -
      settledFactor * 0.019 -
      batterConfidenceFactor * 0.024 +
      bowlerRhythmFactor * 0.026 -
      teamConfidenceFactor * 0.008 -
      qualityShield -
      topOrderShield -
      lowerOrderRisk -
      anchorShield +
      collapsePanic -
      collapseStability +
      earlyWicketMod,
    0.008,
    0.165,
  );

  const dotChance = clamp(
    0.292 +
      intent.dot +
      (bowlerStrength - batterStrength) * 0.0008 +
      bowlingConditions * 0.8 -
      battingConditions * 0.45 -
      chasePressure * 0.03 +
      (1 - settledFactor) * 0.032 +
      bowlerRhythmFactor * 0.06 -
      batterConfidenceFactor * 0.03 -
      lowerOrderSlowdown -
      qualityShield * 1.4 +
      earlyRotateMod * -0.35,
    0.12,
    0.52,
  );

  const fourChance = clamp(
    0.046 +
      aggression.boundary +
      battingConditions +
      innings.conditions.outfield.boundary +
      battingEdge * 2 -
      bowlingConditions * 0.65 -
      matchup * 0.18 +
      intent.boundary +
      (overIndex < POWERPLAY_END ? 0.012 : 0) +
      chasePressure * 0.012 +
      settledFactor * 0.014 +
      batterConfidenceFactor * 0.015 -
      bowlerRhythmFactor * 0.016 +
      teamConfidenceFactor * 0.003 -
      lowerOrderSlowdown +
      collapsePanic * 0.35 -
      collapseStability * 0.8 +
      qualityShield * 0.55 +
      earlyBoundaryMod,
    0.02,
    0.22,
  );

  const sixChance = clamp(
    0.005 +
      aggression.six +
      battingEdge * 1.2 -
      bowlingConditions * 0.25 +
      (overIndex >= DEATH_OVERS_START ? 0.012 : 0) +
      chasePressure * 0.008 +
      settledFactor * 0.005 +
      batterConfidenceFactor * 0.011 -
      bowlerRhythmFactor * 0.008 +
      teamConfidenceFactor * 0.002 -
      lowerOrderSlowdown * 0.6 +
      collapsePanic * 0.45 -
      collapseStability * 0.7 +
      earlyBoundaryMod * 0.65,
    0.002,
    0.08,
  );

  const doubleChance = clamp(
    0.054 +
      innings.conditions.outfield.double +
      aggression.rotate * 0.35 -
      intent.single * 0.12 +
      (overIndex >= DEATH_OVERS_START ? 0.006 : 0) +
      settledFactor * 0.008 +
      batterConfidenceFactor * 0.006 -
      bowlerRhythmFactor * 0.004 +
      collapseStability * 0.2 -
      collapsePanic * 0.08 +
      earlyRotateMod * 0.38 +
      qualityShield * 0.32,
    0.015,
    0.12,
  );

  const singleChance = clamp(
    0.238 +
      aggression.rotate +
      intent.single -
      chasePressure * 0.006 -
      (overIndex >= DEATH_OVERS_START ? 0.008 : 0) +
      settledFactor * 0.018 +
      (teamConfidence < 35 ? 0.01 : 0) +
      batterConfidenceFactor * 0.012 -
      bowlerRhythmFactor * 0.01 +
      collapseStability * 0.55 -
      collapsePanic * 0.16 +
      earlyRotateMod +
      qualityShield * 0.32,
    0.12,
    0.38,
  );

  const threeChance = clamp(0.01 + (innings.conditions.outfield.id === "heavy" ? 0.002 : 0), 0.002, 0.02);

  const eventWeights = [
    ["W", wicketChance],
    ["0", dotChance],
    ["1", singleChance],
    ["2", doubleChance],
    ["3", threeChance],
    ["4", fourChance],
    ["6", sixChance],
  ];

  const event = weightedChoice(eventWeights, random);
  battingCard.balls += 1;
  bowlingCard.balls += 1;
  innings.balls += 1;
  innings.currentOver.events.push(event);

  if (event === "W") {
    battingCard.out = true;
    bowlingCard.wickets += 1;
    innings.wickets += 1;
    innings.lastWicket = {
      id: striker.id,
      name: striker.name,
      runs: battingCard.runs,
      balls: battingCard.balls,
    };
    innings.lastWicketScore = innings.score;
    innings.lastWicketBall = innings.balls;
    innings.recentWickets.push(innings.balls);
    innings.recentWickets = innings.recentWickets.filter((ballNumber) => innings.balls - ballNumber <= 36);
    innings.wicketFalls.push({
      score: innings.score,
      balls: innings.balls,
      batterId: striker.id,
      batterName: striker.name,
      batterRating: striker.batting,
    });
    updateBowlerRhythm(innings, bowler.id, event);
    updateBatterConfidence(innings, striker.id, bowler.id, event);
    updateTeamConfidence(innings, event);
    return { event, wicket: true };
  }

  const runs = Number(event);
  battingCard.runs += runs;
  if (runs === 4) {
    battingCard.fours += 1;
  } else if (runs === 6) {
    battingCard.sixes += 1;
  }
  bowlingCard.runsConceded += runs;
  innings.score += runs;

  if (runs % 2 === 1) {
    [innings.strikerId, innings.nonStrikerId] = [innings.nonStrikerId, innings.strikerId];
  }

  updateBowlerRhythm(innings, bowler.id, event);
  updateBatterConfidence(innings, striker.id, bowler.id, event);
  updateTeamConfidence(innings, event);

  return { event, wicket: false, runs };
}

function markNotOutBatters(innings) {
  for (const card of Object.values(innings.battingCards)) {
    card.notOut = false;
  }
  if (innings.strikerId && innings.battingCards[innings.strikerId]) {
    innings.battingCards[innings.strikerId].notOut = !innings.battingCards[innings.strikerId].out;
  }
  if (innings.nonStrikerId && innings.battingCards[innings.nonStrikerId]) {
    innings.battingCards[innings.nonStrikerId].notOut = !innings.battingCards[innings.nonStrikerId].out;
  }
}

function isInningsComplete(innings) {
  if (innings.target && innings.score >= innings.target) {
    return true;
  }
  return innings.wickets >= 10 || innings.balls >= TOTAL_OVERS * 6;
}

function finalizeInnings(innings) {
  markNotOutBatters(innings);
  return innings;
}

function adjustLastScoringEvent(innings, delta) {
  for (let overIndex = innings.overs.length - 1; overIndex >= 0; overIndex -= 1) {
    const over = innings.overs[overIndex];
    for (let eventIndex = over.events.length - 1; eventIndex >= 0; eventIndex -= 1) {
      const event = over.events[eventIndex];
      if (!/^\d+$/.test(event)) {
        continue;
      }

      const value = Number(event);
      if (delta > 0 && value < 6) {
        over.events[eventIndex] = String(value + delta);
        return true;
      }

      if (delta < 0 && value > 0) {
        over.events[eventIndex] = String(value + delta);
        return true;
      }
    }
  }

  return false;
}

function awardDecisiveSingle(innings) {
  const strikerCard = innings.battingCards[innings.strikerId];
  const nonStrikerCard = innings.battingCards[innings.nonStrikerId];
  const battingCard = strikerCard && !strikerCard.out ? strikerCard : nonStrikerCard;
  const bowlingCard = innings.bowlingCards[innings.lastBowlerId];

  innings.score += 1;
  if (battingCard) {
    battingCard.runs += 1;
  }
  if (bowlingCard) {
    bowlingCard.runsConceded += 1;
  }
  adjustLastScoringEvent(innings, 1);
}

function turnTieIntoOneRunLoss(innings) {
  const bowlingCard = innings.bowlingCards[innings.lastBowlerId];
  const battingCard =
    innings.battingCards[innings.strikerId] ||
    innings.battingCards[innings.nonStrikerId] ||
    Object.values(innings.battingCards).find((card) => card.runs > 0);

  innings.score -= 1;
  if (battingCard && battingCard.runs > 0) {
    battingCard.runs -= 1;
  }
  if (bowlingCard && bowlingCard.runsConceded > 0) {
    bowlingCard.runsConceded -= 1;
  }
  adjustLastScoringEvent(innings, -1);
}

function resolveLevelScore(match) {
  if (match.innings.length < 2) {
    return;
  }

  const [firstInnings, secondInnings] = match.innings;
  if (!secondInnings.target || secondInnings.score !== firstInnings.score) {
    return;
  }

  if (secondInnings.wickets < 10) {
    awardDecisiveSingle(secondInnings);
    return;
  }

  turnTieIntoOneRunLoss(secondInnings);
}

function buildScorecardSummary(innings) {
  const batting = Object.values(innings.battingCards)
    .filter((card) => card.balls > 0)
    .sort((left, right) => right.runs - left.runs || left.balls - right.balls)
    .slice(0, 3);
  const bowling = Object.values(innings.bowlingCards)
    .filter((card) => card.balls > 0)
    .sort((left, right) => right.wickets - left.wickets || left.runsConceded - right.runsConceded)
    .slice(0, 3);
  return { batting, bowling };
}

function scoreBattingPerformance(card, innings) {
  const strikeRate = card.balls ? (card.runs * 100) / card.balls : 0;
  const runShare = innings.score > 0 ? card.runs / innings.score : 0;

  return (
    card.runs * 1.02 +
    card.fours * 0.35 +
    card.sixes * 0.7 +
    Math.min(runShare * 34, 22) +
    clamp((strikeRate - 85) / 10, -8, 12) +
    (card.notOut ? 4 : 0) +
    (card.runs >= 100 ? 8 : card.runs >= 50 ? 3 : 0)
  );
}

function scoreBowlingPerformance(card, innings) {
  const economy = card.balls ? (card.runsConceded * 6) / card.balls : 99;
  const strikeRate = card.wickets ? card.balls / card.wickets : 99;
  const workload = card.balls / 6;
  const inningsLength = Math.max(1, innings.balls / 6);

  return (
    card.wickets * 31 +
    clamp((6.2 - economy) * 6, -10, 22) +
    clamp((24 - strikeRate) * 0.7, -4, 12) +
    Math.min(workload * 1.1, 11) +
    (card.wickets >= 5 ? 12 : card.wickets >= 4 ? 6 : card.wickets >= 3 ? 2 : 0) +
    (innings.score <= 220 ? 3 : 0) +
    (inningsLength >= 45 ? 2 : 0)
  );
}

function pickMatchPlayer(match) {
  const performances = new Map();

  function upsert(player, side, add) {
    const current = performances.get(player.id) || {
      id: player.id,
      name: player.name,
      side,
      score: 0,
    };
    current.score += add;
    performances.set(player.id, current);
  }

  for (const innings of match.innings) {
    for (const [playerId, card] of Object.entries(innings.battingCards)) {
      if (card.balls <= 0) {
        continue;
      }
      const player = innings.teamById.get(playerId);
      upsert(player, innings.battingSide, scoreBattingPerformance(card, innings));
    }

    for (const [playerId, card] of Object.entries(innings.bowlingCards)) {
      if (card.balls <= 0) {
        continue;
      }
      const player = innings.bowlingById.get(playerId);
      upsert(player, innings.bowlingSide, scoreBowlingPerformance(card, innings));
    }
  }

  return [...performances.values()]
    .sort((left, right) => right.score - left.score || normalizeName(left.name).localeCompare(normalizeName(right.name)))[0] || null;
}

function pickTournamentPlayer(results) {
  const performances = new Map();

  function upsert(player, add) {
    const current = performances.get(player.id) || {
      id: player.id,
      name: player.name,
      score: 0,
      awards: 0,
    };
    current.score += add;
    performances.set(player.id, current);
  }

  for (const result of results) {
    for (const innings of result.innings || []) {
      for (const [playerId, card] of Object.entries(innings.battingCards || {})) {
        if (card.balls <= 0) {
          continue;
        }
        const player = innings.teamById.get(playerId);
        if (player) {
          upsert(player, scoreBattingPerformance(card, innings));
        }
      }

      for (const [playerId, card] of Object.entries(innings.bowlingCards || {})) {
        if (card.balls <= 0) {
          continue;
        }
        const player = innings.bowlingById.get(playerId);
        if (player) {
          upsert(player, scoreBowlingPerformance(card, innings));
        }
      }
    }

    const awardName = result.playerOfTheMatch || result.manOfTheMatch;
    if (!awardName) {
      continue;
    }

    for (const performance of performances.values()) {
      if (normalizeName(performance.name) === normalizeName(awardName)) {
        performance.score += 14;
        performance.awards += 1;
        break;
      }
    }
  }

  return [...performances.values()]
    .sort(
      (left, right) =>
        right.score - left.score ||
        right.awards - left.awards ||
        normalizeName(left.name).localeCompare(normalizeName(right.name)),
    )[0] || null;
}

function buildResult(match) {
  const [firstInnings, secondInnings] = match.innings;
  const firstScore = buildCurrentScoreline(firstInnings);
  const secondScore = buildCurrentScoreline(secondInnings);
  const secondWon = secondInnings.target && secondInnings.score >= secondInnings.target;
  const userWon =
    (match.userBattingFirst && !secondWon && firstInnings.score > secondInnings.score) ||
    (!match.userBattingFirst && secondWon);

  const winner = userWon ? "user" : "opponent";
  const marginRuns = Math.abs(firstInnings.score - secondInnings.score);
  const wicketsInHand = 10 - secondInnings.wickets;
  const opponentName = match.opponent.shortName || match.opponent.country || match.opponent.label;
  const outcomeCopy = winner === "user"
    ? secondWon
      ? `The chase stayed under control and you beat ${opponentName} by ${wicketsInHand} ${wicketsInHand === 1 ? "wicket" : "wickets"}.`
      : `You defended well and beat ${opponentName} by ${marginRuns} ${marginRuns === 1 ? "run" : "runs"}.`
    : secondWon
      ? `${opponentName} chased it with ${wicketsInHand} ${wicketsInHand === 1 ? "wicket" : "wickets"} in hand.`
      : `${opponentName} defended well and beat you by ${marginRuns} ${marginRuns === 1 ? "run" : "runs"}.`;

  const playerOfTheMatch = pickMatchPlayer(match);

  return {
    opponentId: match.opponent.id,
    stage: match.stage,
    opponent: match.opponent.label,
    conditions: match.conditions,
    innings: [firstInnings, secondInnings],
    userWon,
    winner,
    summary: outcomeCopy,
    playerOfTheMatch: playerOfTheMatch?.name || "",
    manOfTheMatch: playerOfTheMatch?.name || "",
    userScore: match.userBattingFirst ? firstScore : secondScore,
    opponentScore: match.userBattingFirst ? secondScore : firstScore,
    inningsOrderLines: [
      {
        label: firstInnings.battingLabel,
        score: firstScore,
      },
      {
        label: secondInnings.battingLabel,
        score: secondScore,
      },
    ],
  };
}

function moveToNextMatch(state, result) {
  const wins = state.wins + (result.userWon ? 1 : 0);
  const losses = state.losses + (result.userWon ? 0 : 1);
  const nextMatchIndex = state.matchIndex + 1;
  const groupComplete = nextMatchIndex >= 3;
  const qualified = groupComplete ? wins >= 2 : false;
  const eliminated = groupComplete && !qualified;
  const champion = nextMatchIndex >= TOURNAMENT_OPPONENTS.length && result.userWon;

  if (champion || eliminated || (!result.userWon && nextMatchIndex >= 3)) {
    return {
      ...state,
      phase: PHASES.finished,
      wins,
      losses,
      matchIndex: nextMatchIndex,
      currentMatch: null,
      currentOpponent: null,
      currentConditions: null,
      latestMatch: result,
      results: [...state.results, result],
      usedOpponentIds: result.opponentId ? [...state.usedOpponentIds, result.opponentId] : state.usedOpponentIds,
      champion,
      eliminated: !champion,
      finishedView: "results",
    };
  }

  return {
    ...state,
    phase: nextMatchIndex >= TOURNAMENT_OPPONENTS.length ? PHASES.finished : PHASES.ready,
    wins,
    losses,
    matchIndex: nextMatchIndex,
    currentMatch: null,
    currentOpponent: null,
    currentConditions: null,
    latestMatch: result,
    results: [...state.results, result],
    usedOpponentIds: result.opponentId ? [...state.usedOpponentIds, result.opponentId] : state.usedOpponentIds,
    champion: false,
    eliminated: false,
    finishedView: "results",
  };
}

export function createInitialState(random = Math.random) {
  const defaultDifficulty = DIFFICULTY_LEVELS[1].id;
  return {
    phase: PHASES.draft,
    difficulty: defaultDifficulty,
    roster: [],
    currentSquad: null,
    currentCandidates: [],
    usedSquadIds: [],
    usedOpponentIds: [],
    rerollsRemaining: getRerollAllowance(defaultDifficulty),
    matchIndex: 0,
    wins: 0,
    losses: 0,
    currentOpponent: null,
    currentConditions: null,
    pregame: null,
    currentMatch: null,
    latestMatch: null,
    results: [],
    champion: false,
    eliminated: false,
    finishedView: "results",
    randomSeed: random(),
  };
}

export function setDifficulty(state, difficultyId) {
  if (!DIFFICULTY_BY_ID.has(difficultyId) || state.phase !== PHASES.draft || state.roster.length > 0 || state.currentSquad) {
    return state;
  }

  return {
    ...state,
    difficulty: difficultyId,
    rerollsRemaining: getRerollAllowance(difficultyId),
  };
}

function getAvailableSquads(state) {
  const draftedIdentities = new Set(state.roster.map((player) => getPlayerIdentity(player)));
  return DRAFT_SQUADS.filter((squad) => {
    const candidates = PLAYER_POOL.filter(
      (player) => player.squadId === squad.id && !draftedIdentities.has(getPlayerIdentity(player)),
    );
    return candidates.length > 0;
  });
}

export function rerollCandidates(state, random = Math.random) {
  if (state.phase !== PHASES.draft) {
    return state;
  }

  const availableSquads = getAvailableSquads(state);
  if (!availableSquads.length) {
    return state;
  }

  const isTrueReroll = Boolean(state.currentSquad);
  if (isTrueReroll && state.rerollsRemaining <= 0) {
    return state;
  }

  const eligibleSquads = isTrueReroll
    ? availableSquads.filter((squad) => squad.id !== state.currentSquad.id)
    : availableSquads;
  const squadPool = eligibleSquads.length ? eligibleSquads : availableSquads;
  const squad = squadPool[Math.floor(random() * squadPool.length)];
  const draftedIdentities = new Set(state.roster.map((player) => getPlayerIdentity(player)));
  const candidates = PLAYER_POOL.filter(
    (player) => player.squadId === squad.id && !draftedIdentities.has(getPlayerIdentity(player)),
  );

  return {
    ...state,
    currentSquad: squad,
    currentCandidates: candidates,
    usedSquadIds: state.usedSquadIds.includes(squad.id) ? state.usedSquadIds : [...state.usedSquadIds, squad.id],
    rerollsRemaining: isTrueReroll ? Math.max(0, state.rerollsRemaining - 1) : state.rerollsRemaining,
  };
}

export function draftPlayer(state, playerId) {
  if (state.phase !== PHASES.draft) {
    return state;
  }

  const player = state.currentCandidates.find((candidate) => candidate.id === playerId);
  if (!player) {
    return state;
  }

  const nextRoster = [...state.roster, player];
  const nextPhase = nextRoster.length >= ROSTER_SIZE ? PHASES.ready : PHASES.draft;

  return {
    ...state,
    phase: nextPhase,
    roster: nextRoster,
    currentSquad: null,
    currentCandidates: [],
  };
}

export function getCurrentOpponent(state) {
  return state.currentOpponent;
}

export function getOpponentMetrics(state) {
  if (!state.currentOpponent) {
    return { batting: 0, bowling: 0 };
  }
  if (state.currentOpponent.batting && state.currentOpponent.bowling) {
    return {
      batting: state.currentOpponent.batting,
      bowling: state.currentOpponent.bowling,
    };
  }
  const roster = selectBestXI(getDisplayRoster(getOpponentRoster(state.currentOpponent.id), state.difficulty));
  return getTeamMetrics(roster);
}

export function getProgressLabel(state) {
  if (state.champion) {
    return "Champions";
  }
  if (state.currentOpponent) {
    return state.currentOpponent.stage;
  }
  if (state.matchIndex > 0 && state.matchIndex < TOURNAMENT_OPPONENTS.length) {
    return TOURNAMENT_OPPONENTS[state.matchIndex].stage;
  }
  if (state.phase === PHASES.ready) {
    return "Ready";
  }
  return "Draft";
}

export function revealNextOpponent(state, random = Math.random) {
  if (![PHASES.ready, PHASES.pregame].includes(state.phase) || state.matchIndex >= TOURNAMENT_OPPONENTS.length) {
    return state;
  }

  const stageBlueprint = TOURNAMENT_OPPONENTS[state.matchIndex];
  const opponent = chooseOpponentForStage(state, stageBlueprint, random);
  if (!opponent) {
    return state;
  }
  const conditions = buildConditions(opponent, random);
  const tossWinner = random() < 0.5 ? "user" : "opponent";
  const opponentDecision = (() => {
    const chaseBias = conditions.weather.chase + conditions.surface.batting + conditions.outfield.batting;
    return chaseBias >= 2 ? "bowl" : "bat";
  })();

  return {
    ...state,
    phase: PHASES.pregame,
    currentOpponent: {
      ...opponent,
      stage: stageBlueprint.stage,
      pressure: stageBlueprint.pressure,
    },
    currentConditions: conditions,
    pregame: {
      tossWinner,
      userDecision: tossWinner === "user" ? "" : opponentDecision,
      openers: [],
    },
  };
}

export function chooseTossDecision(state, decision) {
  if (state.phase !== PHASES.pregame || state.pregame?.tossWinner !== "user") {
    return state;
  }

  if (!["bat", "bowl"].includes(decision)) {
    return state;
  }

  return {
    ...state,
    pregame: {
      ...state.pregame,
      userDecision: decision,
    },
  };
}

export function toggleOpener(state, playerId) {
  const nextOpeners = (currentOpeners) =>
    currentOpeners.includes(playerId)
      ? currentOpeners.filter((id) => id !== playerId)
      : currentOpeners.length >= 2
        ? [...currentOpeners.slice(1), playerId]
        : [...currentOpeners, playerId];

  if (state.phase === PHASES.pregame && state.pregame) {
    const player = state.roster.find((candidate) => candidate.id === playerId);
    if (!player) {
      return state;
    }

    return {
      ...state,
      pregame: {
        ...state.pregame,
        openers: nextOpeners(state.pregame.openers),
      },
    };
  }

  if (state.phase === PHASES.live && state.currentMatch?.awaiting?.type === "choose-openers") {
    const player = state.currentMatch.userTeam.find((candidate) => candidate.id === playerId);
    if (!player) {
      return state;
    }

    const match = cloneMatch(state.currentMatch);
    const openers = nextOpeners(match.userBattingPlan.openers);
    match.userBattingPlan = buildUserBattingPlan(match.userTeam, openers);

    return {
      ...state,
      currentMatch: match,
    };
  }

  return state;
}

export function startMatch(state, random = Math.random) {
  if (state.phase !== PHASES.pregame || !state.currentOpponent || !state.currentConditions || !state.pregame) {
    return state;
  }

  const userBatsFirst = userBatsFirstFromPregame(state.pregame);
  if (!state.pregame.userDecision || (userBatsFirst && state.pregame.openers.length !== 2)) {
    return state;
  }

  const match = createMatch(
    state,
    state.pregame.tossWinner,
    state.pregame.userDecision,
    state.pregame.openers,
    random,
  );

  return {
    ...state,
    phase: PHASES.live,
    currentMatch: match,
  };
}

export function confirmChaseOpeners(state) {
  if (state.phase !== PHASES.live || !state.currentMatch || state.currentMatch.awaiting?.type !== "choose-openers") {
    return state;
  }

  if (state.currentMatch.userBattingPlan.openers.length !== 2 || !state.currentMatch.pendingTarget) {
    return state;
  }

  const match = cloneMatch(state.currentMatch);
  startSecondInnings(match, match.pendingTarget);

  return {
    ...state,
    currentMatch: match,
  };
}

function recommendedBowlerFromState(state) {
  if (state.difficulty !== "county" || state.phase !== PHASES.live || !state.currentMatch) {
    return "";
  }
  const match = state.currentMatch;
  const innings = match.innings[match.currentInningsIndex];
  if (innings.bowlingSide !== "user" || !match.awaiting || match.awaiting.type !== "choose-bowler") {
    return "";
  }
  const userById = buildPlayerById(match.userTeam);
  return chooseAIBowler(innings, match.userTeam, userById).bowlerId;
}

export function getRecommendedBowler(state) {
  return recommendedBowlerFromState(state);
}

function continueMatchAfterOver(match) {
  const innings = match.innings[match.currentInningsIndex];

  if (isInningsComplete(innings)) {
    finalizeInnings(innings);

    if (match.currentInningsIndex === 0) {
      const target = innings.score + 1;
      const secondBattingSide = innings.bowlingSide;
      if (secondBattingSide === "user" && match.userBattingPlan.openers.length !== 2) {
        match.latestOver = null;
        match.pendingTarget = target;
        match.awaiting = { type: "choose-openers" };
        return match;
      }

      startSecondInnings(match, target);
      return match;
    }

    resolveLevelScore(match);
    finalizeInnings(match.innings[1]);
    match.completed = true;
    match.result = buildResult(match);
    match.awaiting = null;
  } else {
    match.awaiting = innings.bowlingSide === "user" ? { type: "choose-bowler", overNumber: Math.floor(innings.balls / 6) + 1 } : null;
  }

  return match;
}

function playSegment(match, random, options = {}) {
  const innings = match.innings[match.currentInningsIndex];
  const manualUserBatting = options.manualUserBatting !== false;
  const manualUserBowling = options.manualUserBowling !== false;
  const battingRoster = innings.teamRoster.map((id) => innings.teamById.get(id));
  const bowlingRoster = innings.bowlingRoster.map((id) => innings.bowlingById.get(id));

  if (!innings.currentOver.bowlerId) {
    if (innings.bowlingSide === "user") {
      if (manualUserBowling) {
        match.awaiting = { type: "choose-bowler", overNumber: Math.floor(innings.balls / 6) + 1 };
        return match;
      }

      const userById = buildPlayerById(match.userTeam);
      const suggested = chooseAIBowler(innings, match.userTeam, userById);
      innings.currentOver.bowlerId = suggested.bowlerId;
      innings.currentOver.bowlerIntent = suggested.intent;
    } else {
      const opponentById = buildPlayerById(match.opponentTeam);
      const suggested = chooseAIBowler(innings, match.opponentTeam, opponentById);
      innings.currentOver.bowlerId = suggested.bowlerId;
      innings.currentOver.bowlerIntent = suggested.intent;
    }
  }

  const bowler = innings.bowlingById.get(innings.currentOver.bowlerId);

  while (!isInningsComplete(innings) && innings.balls < innings.currentOver.startBalls + 6) {
    const resolution = resolveBall(innings, bowler, innings.currentOver.bowlerIntent, random);
    if (resolution.wicket) {
      if (innings.battingSide === "user" && manualUserBatting) {
        if (!innings.remainingBatters.length) {
          break;
        }
        match.awaiting = {
          type: "choose-next-batter",
          overNumber: Math.floor(innings.balls / 6) + 1,
          events: [...innings.currentOver.events],
        };
        return match;
      }

      const nextBatterId = chooseNextBatterAutomatically(innings);
      if (!nextBatterId) {
        break;
      }
      assignIncomingBatter(innings, nextBatterId);
    }

    if (innings.target && innings.score >= innings.target) {
      break;
    }
  }

  const overSummary = finishOver(innings);
  match.latestOver = overSummary;
  match.awaiting = null;
  return continueMatchAfterOver(match);
}

export function chooseBowler(state, bowlerId, intentId, random = Math.random) {
  if (state.phase !== PHASES.live || !state.currentMatch || state.currentMatch.awaiting?.type !== "choose-bowler") {
    return state;
  }

  const match = cloneMatch(state.currentMatch);
  const innings = match.innings[match.currentInningsIndex];
  const eligibleIds = getEligibleBowlerIds(innings, match.userTeam, buildPlayerById(match.userTeam));
  if (!eligibleIds.includes(bowlerId)) {
    return state;
  }

  innings.currentOver.bowlerId = bowlerId;
  innings.currentOver.bowlerIntent = intentId in BOWLING_INTENTS ? intentId : "balanced";
  match.awaiting = null;
  const nextMatch = playSegment(match, random, { manualUserBatting: true, manualUserBowling: true });

  if (nextMatch.completed) {
    return moveToNextMatch({ ...state, currentMatch: null }, nextMatch.result);
  }

  return {
    ...state,
    currentMatch: nextMatch,
  };
}

export function chooseNextBatter(state, batterId, random = Math.random) {
  if (state.phase !== PHASES.live || !state.currentMatch || state.currentMatch.awaiting?.type !== "choose-next-batter") {
    return state;
  }

  const match = cloneMatch(state.currentMatch);
  const innings = match.innings[match.currentInningsIndex];
  if (!innings.remainingBatters.includes(batterId)) {
    return state;
  }

  innings.remainingBatters = innings.remainingBatters.filter((candidateId) => candidateId !== batterId);
  assignIncomingBatter(innings, batterId);
  match.awaiting = null;
  const nextMatch = playSegment(match, random, { manualUserBatting: true, manualUserBowling: true });

  if (nextMatch.completed) {
    return moveToNextMatch({ ...state, currentMatch: null }, nextMatch.result);
  }

  return {
    ...state,
    currentMatch: nextMatch,
  };
}

export function playOver(state, random = Math.random) {
  if (state.phase !== PHASES.live || !state.currentMatch || state.currentMatch.awaiting) {
    return state;
  }

  const match = cloneMatch(state.currentMatch);
  const nextMatch = playSegment(match, random, { manualUserBatting: true, manualUserBowling: true });

  if (nextMatch.completed) {
    return moveToNextMatch({ ...state, currentMatch: null }, nextMatch.result);
  }

  return {
    ...state,
    currentMatch: nextMatch,
  };
}

function runAutoplay(match, random, mode) {
  const autoplayUserBatting = mode !== "match" ? false : false;
  while (!match.completed) {
    if (match.awaiting?.type === "choose-openers") {
      if (mode === "innings") {
        break;
      }
      const openers = chooseAIOpeners(match.userTeam);
      match.userBattingPlan = buildUserBattingPlan(match.userTeam, openers);
      startSecondInnings(match, match.pendingTarget || match.innings[0].score + 1);
    }

    if (match.awaiting?.type === "choose-next-batter") {
      const innings = match.innings[match.currentInningsIndex];
      const nextBatterId = chooseNextBatterAutomatically(innings);
      if (!nextBatterId) {
        break;
      }
      assignIncomingBatter(innings, nextBatterId);
      match.awaiting = null;
    }

    if (match.awaiting?.type === "choose-bowler") {
      const innings = match.innings[match.currentInningsIndex];
      const userById = buildPlayerById(match.userTeam);
      const suggested = chooseAIBowler(innings, match.userTeam, userById);
      innings.currentOver.bowlerId = suggested.bowlerId;
      innings.currentOver.bowlerIntent = suggested.intent;
      match.awaiting = null;
    }

    playSegment(match, random, {
      manualUserBatting: false,
      manualUserBowling: false,
    });

    if (mode === "innings" && match.currentInningsIndex === 1) {
      break;
    }
  }

  return match;
}

export function simulateInnings(state, random = Math.random) {
  if (state.phase !== PHASES.live || !state.currentMatch) {
    return state;
  }

  const match = cloneMatch(state.currentMatch);
  const currentInningsIndex = match.currentInningsIndex;

  while (!match.completed && match.currentInningsIndex === currentInningsIndex) {
    runAutoplay(match, random, "innings");
    if (match.awaiting?.type === "choose-openers") {
      break;
    }
  }

  if (match.completed) {
    return moveToNextMatch({ ...state, currentMatch: null }, match.result);
  }

  return {
    ...state,
    currentMatch: match,
  };
}

export function simulateMatch(state, random = Math.random) {
  if (state.phase === PHASES.pregame) {
    const started = startMatch(state, random);
    if (started.phase === PHASES.pregame) {
      return started;
    }
    return simulateMatch(started, random);
  }

  if (state.phase !== PHASES.live || !state.currentMatch) {
    return state;
  }

  const match = cloneMatch(state.currentMatch);
  runAutoplay(match, random, "match");

  if (match.completed) {
    return moveToNextMatch({ ...state, currentMatch: null }, match.result);
  }

  return {
    ...state,
    currentMatch: match,
  };
}

export function getLiveContext(state) {
  if (state.phase !== PHASES.live || !state.currentMatch) {
    return null;
  }

  const match = state.currentMatch;
  const innings = match.innings[match.currentInningsIndex];
  const striker = innings.teamById.get(innings.strikerId);
  const nonStriker = innings.teamById.get(innings.nonStrikerId);
  const bowler = innings.currentOver.bowlerId ? innings.bowlingById.get(innings.currentOver.bowlerId) : null;

  return {
    match,
    innings,
    striker,
    nonStriker,
    bowler,
    overNumber: Math.floor(innings.balls / 6) + 1,
    requiredRate: getRequiredRunRate(innings),
    currentRate: getCurrentRunRate(innings),
    recommendation: recommendedBowlerFromState(state),
    settledStriker: getBatterSettledLevel(striker, innings.battingCards[innings.strikerId]),
    settledNonStriker: getBatterSettledLevel(nonStriker, innings.battingCards[innings.nonStrikerId]),
    confidenceStriker: getBatterConfidenceLevel(striker, innings.battingCards[innings.strikerId], innings),
    confidenceNonStriker: getBatterConfidenceLevel(nonStriker, innings.battingCards[innings.nonStrikerId], innings),
    bowlerRhythm: bowler ? getBowlerRhythmWithSpellGap(bowler, innings.bowlingCards[bowler.id], innings) : null,
    lastBowlerRhythm: match.latestOver?.bowlerId
      ? getBowlerRhythmWithSpellGap(
        innings.bowlingById.get(match.latestOver.bowlerId),
        innings.bowlingCards[match.latestOver.bowlerId],
        innings,
      )
      : null,
    teamConfidence: getTeamConfidence(innings),
    partnershipRuns: getCurrentPartnershipRuns(innings),
    partnershipBalls: getCurrentPartnershipBalls(innings),
  };
}

export function getPregameContext(state) {
  if (state.phase !== PHASES.pregame || !state.pregame || !state.currentOpponent || !state.currentConditions) {
    return null;
  }

  return {
    opponent: state.currentOpponent,
    conditions: state.currentConditions,
    pregame: state.pregame,
  };
}

export function getConfidenceTargetPreview(innings) {
  return getConfidenceTarget(innings);
}

export function getPlayerOfTheTournament(results) {
  return pickTournamentPlayer(results);
}
