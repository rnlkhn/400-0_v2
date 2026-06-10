import {
  DRAFT_SQUADS,
  PLAYER_POOL,
  REQUIRED_ROLES,
  ROLE_ORDER,
  ROLE_LABELS,
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
    description: "Your drafted players perform at their peak ratings.",
    usePrimeRatings: true,
    hideRatings: false,
  },
  {
    id: "international",
    label: "International",
    description: "Baseline World Cup difficulty.",
    usePrimeRatings: false,
    hideRatings: false,
  },
  {
    id: "legend",
    label: "Legend",
    description: "Player ratings are hidden, so you draft on instinct.",
    usePrimeRatings: false,
    hideRatings: true,
  },
];

const DIFFICULTY_BY_ID = new Map(DIFFICULTY_LEVELS.map((level) => [level.id, level]));

const AGGRESSION_PROFILES = {
  "Very Aggressive": {
    boundaryDelta: 0.05,
    sixDelta: 0.024,
    singleDelta: -0.035,
    doubleDelta: 0.01,
    wicketRisk: 0.018,
  },
  Aggressive: {
    boundaryDelta: 0.03,
    sixDelta: 0.012,
    singleDelta: -0.02,
    doubleDelta: 0.006,
    wicketRisk: 0.009,
  },
  Balanced: {
    boundaryDelta: 0,
    sixDelta: 0,
    singleDelta: 0,
    doubleDelta: 0,
    wicketRisk: 0,
  },
  Cautious: {
    boundaryDelta: -0.02,
    sixDelta: -0.01,
    singleDelta: 0.02,
    doubleDelta: 0.004,
    wicketRisk: -0.008,
  },
  "Very Cautious": {
    boundaryDelta: -0.038,
    sixDelta: -0.016,
    singleDelta: 0.03,
    doubleDelta: 0.006,
    wicketRisk: -0.014,
  },
};

const WEATHER_OPTIONS = {
  overcast: {
    id: "overcast",
    label: "Overcast",
    batting: -2,
    seam: 4,
    swing: 6,
    spin: -1,
    pace: 2,
    chase: -1,
  },
  cool: {
    id: "cool",
    label: "Cool",
    batting: 0,
    seam: 2,
    swing: 1,
    spin: 0,
    pace: 1,
    chase: 0,
  },
  hot: {
    id: "hot",
    label: "Hot",
    batting: 1,
    seam: -1,
    swing: -2,
    spin: 2,
    pace: 0,
    chase: 0,
  },
  humid: {
    id: "humid",
    label: "Humid",
    batting: 0,
    seam: 1,
    swing: 3,
    spin: -1,
    pace: 1,
    chase: 1,
  },
  clear: {
    id: "clear",
    label: "Clear",
    batting: 2,
    seam: -1,
    swing: -1,
    spin: 0,
    pace: 0,
    chase: 1,
  },
  dewy: {
    id: "dewy",
    label: "Dewy evening",
    batting: 2,
    seam: 0,
    swing: 1,
    spin: -3,
    pace: 0,
    chase: 3,
  },
};

const SURFACE_OPTIONS = {
  green: {
    id: "green",
    label: "Green",
    batting: -2,
    seam: 5,
    swing: 2,
    spin: -2,
    pace: 3,
  },
  dry: {
    id: "dry",
    label: "Dry",
    batting: 0,
    seam: -1,
    swing: -1,
    spin: 4,
    pace: 0,
  },
  crumbling: {
    id: "crumbling",
    label: "Crumbling",
    batting: -3,
    seam: -1,
    swing: -1,
    spin: 6,
    pace: -1,
  },
  hard: {
    id: "hard",
    label: "Hard",
    batting: 1,
    seam: 1,
    swing: 0,
    spin: -1,
    pace: 4,
  },
  flat: {
    id: "flat",
    label: "Flat",
    batting: 4,
    seam: -2,
    swing: -2,
    spin: -1,
    pace: 0,
  },
  used: {
    id: "used",
    label: "Used",
    batting: -1,
    seam: 0,
    swing: -1,
    spin: 3,
    pace: -1,
  },
};

const OUTFIELD_OPTIONS = {
  fast: {
    id: "fast",
    label: "Fast",
    batting: 3,
    boundary: 0.03,
    double: -0.005,
  },
  average: {
    id: "average",
    label: "Average",
    batting: 0,
    boundary: 0,
    double: 0,
  },
  slow: {
    id: "slow",
    label: "Slow",
    batting: -2,
    boundary: -0.02,
    double: 0.008,
  },
  heavy: {
    id: "heavy",
    label: "Heavy",
    batting: -3,
    boundary: -0.03,
    double: 0.01,
  },
};

const WEATHER_WEIGHTS_BY_TEAM = {
  england: [
    ["overcast", 5],
    ["cool", 3],
    ["clear", 1],
  ],
  "new zealand": [
    ["overcast", 4],
    ["cool", 4],
    ["clear", 1],
  ],
  ireland: [
    ["overcast", 5],
    ["cool", 3],
    ["humid", 1],
  ],
  scotland: [
    ["overcast", 5],
    ["cool", 3],
    ["humid", 1],
  ],
  netherlands: [
    ["overcast", 4],
    ["cool", 4],
    ["clear", 1],
  ],
  india: [
    ["hot", 4],
    ["clear", 2],
    ["dewy", 2],
  ],
  pakistan: [
    ["hot", 3],
    ["humid", 3],
    ["clear", 2],
  ],
  sri_lanka: [
    ["hot", 3],
    ["humid", 3],
    ["dewy", 2],
  ],
  bangladesh: [
    ["humid", 4],
    ["hot", 2],
    ["dewy", 3],
  ],
  afghanistan: [
    ["hot", 4],
    ["clear", 2],
    ["dewy", 1],
  ],
  australia: [
    ["clear", 4],
    ["hot", 3],
    ["dewy", 1],
  ],
  "south africa": [
    ["clear", 4],
    ["hot", 3],
    ["cool", 1],
  ],
  zimbabwe: [
    ["hot", 3],
    ["clear", 3],
    ["humid", 1],
  ],
  namibia: [
    ["clear", 4],
    ["hot", 3],
    ["cool", 1],
  ],
  "west indies": [
    ["humid", 4],
    ["dewy", 3],
    ["clear", 2],
  ],
};

const SURFACE_WEIGHTS_BY_TEAM = {
  england: [["green", 4], ["used", 2], ["flat", 1]],
  "new zealand": [["green", 3], ["used", 2], ["hard", 1]],
  ireland: [["green", 4], ["used", 2], ["flat", 1]],
  scotland: [["green", 4], ["used", 2], ["flat", 1]],
  netherlands: [["green", 3], ["used", 2], ["flat", 1]],
  india: [["dry", 3], ["used", 3], ["crumbling", 2], ["flat", 1]],
  pakistan: [["dry", 2], ["used", 3], ["flat", 2]],
  sri_lanka: [["dry", 3], ["used", 3], ["crumbling", 1]],
  bangladesh: [["used", 3], ["dry", 2], ["flat", 2]],
  afghanistan: [["dry", 4], ["crumbling", 2], ["hard", 1]],
  australia: [["hard", 4], ["flat", 3], ["green", 1]],
  "south africa": [["hard", 4], ["green", 2], ["flat", 2]],
  zimbabwe: [["hard", 3], ["dry", 2], ["used", 2]],
  namibia: [["hard", 4], ["dry", 2], ["flat", 1]],
  "west indies": [["flat", 3], ["used", 2], ["dry", 1]],
};

const OUTFIELD_WEIGHTS_BY_TEAM = {
  england: [["average", 3], ["slow", 2], ["fast", 1]],
  "new zealand": [["average", 3], ["fast", 2], ["slow", 1]],
  ireland: [["slow", 3], ["average", 2], ["heavy", 1]],
  scotland: [["slow", 3], ["average", 2], ["heavy", 1]],
  netherlands: [["average", 3], ["slow", 2], ["fast", 1]],
  india: [["fast", 3], ["average", 2], ["slow", 1]],
  pakistan: [["fast", 2], ["average", 3], ["slow", 1]],
  sri_lanka: [["fast", 2], ["average", 2], ["heavy", 1]],
  bangladesh: [["slow", 2], ["average", 3], ["heavy", 1]],
  afghanistan: [["fast", 2], ["average", 2], ["slow", 1]],
  australia: [["fast", 4], ["average", 2], ["slow", 1]],
  "south africa": [["fast", 4], ["average", 2], ["slow", 1]],
  zimbabwe: [["average", 3], ["fast", 2], ["slow", 1]],
  namibia: [["fast", 3], ["average", 2], ["slow", 1]],
  "west indies": [["fast", 3], ["average", 2], ["slow", 1]],
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value) {
  return Math.round(value);
}

function randomSwing(random, size) {
  return (random() - 0.5) * 2 * size;
}

function hashValue(text) {
  let value = 0;
  for (const char of text) {
    value = (value * 31 + char.charCodeAt(0)) % 1000003;
  }

  return value;
}

function normalizeTeamKey(team) {
  return team.toLowerCase().replace(/\s+/g, "_");
}

function getAggressionProfile(player) {
  return AGGRESSION_PROFILES[player.aggressionLevel] || AGGRESSION_PROFILES.Balanced;
}

function pickWeightedOption(optionsById, weights, random = Math.random) {
  const totalWeight = weights.reduce((sum, [, weight]) => sum + weight, 0);
  let threshold = random() * totalWeight;

  for (const [optionId, weight] of weights) {
    threshold -= weight;
    if (threshold <= 0) {
      return optionsById[optionId];
    }
  }

  return optionsById[weights[weights.length - 1][0]];
}

function getConditionsForOpponent(opponent, random = Math.random) {
  const teamKey =
    normalizeTeamKey(opponent.shortName) ||
    normalizeTeamKey(opponent.label.split(" ").slice(0, -1).join(" "));
  const weatherWeights = WEATHER_WEIGHTS_BY_TEAM[teamKey] || [["clear", 1]];
  const surfaceWeights = SURFACE_WEIGHTS_BY_TEAM[teamKey] || [["flat", 1]];
  const outfieldWeights = OUTFIELD_WEIGHTS_BY_TEAM[teamKey] || [["average", 1]];

  return {
    weather: pickWeightedOption(WEATHER_OPTIONS, weatherWeights, random),
    surface: pickWeightedOption(SURFACE_OPTIONS, surfaceWeights, random),
    outfield: pickWeightedOption(OUTFIELD_OPTIONS, outfieldWeights, random),
  };
}

function getTotalRequiredPlayers() {
  return ROLE_ORDER.reduce((total, role) => total + REQUIRED_ROLES[role], 0);
}

function getRosterSizeLimit() {
  return 11;
}

export function isAllRounderPlayer(player) {
  return player.batting > 50 && player.bowling > 50;
}

function getPlayerIdentity(player) {
  return player.name.toLowerCase().replaceAll(/[^a-z0-9]+/g, " ").trim();
}

function getCapabilityMask(player) {
  let mask = 0;
  const allRounder = isAllRounderPlayer(player);

  if (player.role === "batsman" || player.role === "wicketkeeper" || allRounder) {
    mask |= 1;
  }

  if (player.role === "bowler" || allRounder) {
    mask |= 2;
  }

  if (player.role === "wicketkeeper") {
    mask |= 4;
  }

  return mask;
}

function getCoverageMask(roster) {
  return roster.reduce((mask, player) => mask | getCapabilityMask(player), 0);
}

function createMaskCounts() {
  return new Array(8).fill(0);
}

function buildUndraftedInventory(state) {
  const draftedIds = new Set(state.roster.map((player) => player.id));
  const draftedIdentities = new Set(state.roster.map(getPlayerIdentity));
  const maskCounts = createMaskCounts();
  const players = [];

  for (const player of PLAYER_POOL) {
    if (draftedIds.has(player.id) || draftedIdentities.has(getPlayerIdentity(player))) {
      continue;
    }

    const mask = getCapabilityMask(player);
    maskCounts[mask] += 1;
    players.push({ player, mask });
  }

  return { maskCounts, players };
}

function canCoverMaskWithCounts(mask, maskCounts, slots, depth = 0) {
  if (mask === 0) {
    return true;
  }

  if (slots <= 0 || depth >= slots || depth >= 3) {
    return false;
  }

  for (let candidateMask = 1; candidateMask < 8; candidateMask += 1) {
    if (maskCounts[candidateMask] === 0) {
      continue;
    }

    maskCounts[candidateMask] -= 1;
    const covered = canCoverMaskWithCounts(mask & ~candidateMask, maskCounts, slots, depth + 1);
    maskCounts[candidateMask] += 1;

    if (covered) {
      return true;
    }
  }

  return false;
}

function canDraftWithInventory(state, player, inventory) {
  if (!player) {
    return false;
  }

  if (state.roster.length >= getRosterSizeLimit()) {
    return false;
  }

  const candidateMask = getCapabilityMask(player);
  const nextMask = getCoverageMask(state.roster) | candidateMask;
  const remainingNeededMask = 7 & ~nextMask;
  const remainingSlots = getRosterSizeLimit() - state.roster.length - 1;

  if (remainingNeededMask === 0) {
    return true;
  }

  if (remainingSlots === 0) {
    return false;
  }

  inventory.maskCounts[candidateMask] -= 1;
  const canCover = canCoverMaskWithCounts(
    remainingNeededMask,
    inventory.maskCounts,
    remainingSlots,
  );
  inventory.maskCounts[candidateMask] += 1;

  return canCover;
}

export function getRoleCounts(roster) {
  return roster.reduce(
    (counts, player) => ({
      ...counts,
      [player.role]: counts[player.role] + 1,
    }),
    {
      batsman: 0,
      wicketkeeper: 0,
      bowler: 0,
    },
  );
}

export function getRemainingSlots(roster) {
  const counts = getRoleCounts(roster);

  return ROLE_ORDER.reduce((remaining, role) => {
    remaining[role] = REQUIRED_ROLES[role] - counts[role];
    return remaining;
  }, {});
}

export function isRosterComplete(roster) {
  return roster.length === getRosterSizeLimit() && (getCoverageMask(roster) & 7) === 7;
}

export function canDraftPlayer(state, player) {
  return canDraftWithInventory(state, player, buildUndraftedInventory(state));
}

export function getEligiblePlayers(state) {
  const inventory = buildUndraftedInventory(state);

  return inventory.players
    .filter(({ player }) => canDraftWithInventory(state, player, inventory))
    .map(({ player }) => player);
}

export function getSquadPlayers(state, squadId) {
  return getEligiblePlayers(state).filter((player) => player.squadId === squadId);
}

export function getAvailableSquads(state) {
  return DRAFT_SQUADS.filter((squad) => getSquadPlayers(state, squad.id).length > 0);
}

export function buildCandidateSet(state, squadId) {
  return getSquadPlayers(state, squadId).sort((left, right) => {
    const adjustedLeft = getDifficultyAdjustedPlayer(left, state.difficulty);
    const adjustedRight = getDifficultyAdjustedPlayer(right, state.difficulty);
    const leftValue =
      adjustedLeft.batting + adjustedLeft.bowling + (isAllRounderPlayer(adjustedLeft) ? 8 : 0);
    const rightValue =
      adjustedRight.batting + adjustedRight.bowling + (isAllRounderPlayer(adjustedRight) ? 8 : 0);
    return rightValue - leftValue;
  });
}

function pickSquad(availableSquads, random) {
  if (availableSquads.length === 0) {
    return null;
  }

  const index = Math.floor(random() * availableSquads.length);

  return availableSquads[index];
}

export function rerollCandidates(state, random = Math.random) {
  if (state.phase !== "draft" || isRosterComplete(state.roster)) {
    return state;
  }

  const availableSquads = getAvailableSquads(state);
  const squad = pickSquad(availableSquads, random);
  if (!squad) {
    return state;
  }

  return {
    ...state,
    currentSquad: squad,
    candidateSet: buildCandidateSet(state, squad.id),
  };
}

export function createInitialState(random = Math.random) {
  return {
    phase: "draft",
    difficulty: "international",
    roster: [],
    battingOrder: [],
    bowlingOrder: [],
    currentSquad: null,
    candidateSet: [],
    matchIndex: 0,
    currentOpponent: null,
    results: [],
    latestMatch: null,
    champion: false,
    eliminated: false,
  };
}

export function setDifficulty(state, difficultyId) {
  if (state.phase !== "draft" || state.roster.length > 0 || state.currentSquad) {
    return state;
  }

  if (!DIFFICULTY_BY_ID.has(difficultyId)) {
    return state;
  }

  return {
    ...state,
    difficulty: difficultyId,
  };
}

function buildDefaultBattingOrder(roster) {
  return [...roster]
    .sort((left, right) => {
      const leftRoleWeight = left.role === "batsman" ? 8 : left.role === "wicketkeeper" ? 5 : 0;
      const rightRoleWeight = right.role === "batsman" ? 8 : right.role === "wicketkeeper" ? 5 : 0;
      return (
        right.batting + rightRoleWeight - (left.batting + leftRoleWeight) ||
        right.bowling - left.bowling
      );
    })
    .map((player) => player.id);
}

function buildDefaultBowlingOrder(roster) {
  return [...roster]
    .filter((player) => player.role !== "wicketkeeper")
    .sort((left, right) => right.bowling - left.bowling || right.batting - left.batting)
    .map((player) => player.id);
}

function ensureOrder(order, roster, fallbackIds) {
  const rosterIds = new Set(roster.map((player) => player.id));
  const seen = new Set();
  const ordered = [];

  for (const id of order) {
    if (rosterIds.has(id) && !seen.has(id)) {
      ordered.push(id);
      seen.add(id);
    }
  }

  for (const id of fallbackIds) {
    if (rosterIds.has(id) && !seen.has(id)) {
      ordered.push(id);
      seen.add(id);
    }
  }

  return ordered;
}

function buildTournamentOrders(roster) {
  const battingOrder = buildDefaultBattingOrder(roster);
  const bowlingOrder = buildDefaultBowlingOrder(roster);

  return { battingOrder, bowlingOrder };
}

export function getBattingOrderPlayers(state) {
  const fallback = buildDefaultBattingOrder(state.roster);
  const orderIds = ensureOrder(state.battingOrder || [], state.roster, fallback);
  const byId = new Map(state.roster.map((player) => [player.id, player]));
  return orderIds.map((id) => byId.get(id)).filter(Boolean);
}

export function getBowlingOrderPlayers(state) {
  const bowlingRoster = state.roster.filter((player) => player.role !== "wicketkeeper");
  const fallback = buildDefaultBowlingOrder(state.roster);
  const orderIds = ensureOrder(state.bowlingOrder || [], bowlingRoster, fallback);
  const byId = new Map(state.roster.map((player) => [player.id, player]));
  return orderIds.map((id) => byId.get(id)).filter(Boolean);
}

function moveId(order, playerId, direction) {
  const index = order.indexOf(playerId);
  if (index === -1) {
    return order;
  }

  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= order.length) {
    return order;
  }

  const nextOrder = [...order];
  [nextOrder[index], nextOrder[nextIndex]] = [nextOrder[nextIndex], nextOrder[index]];
  return nextOrder;
}

export function moveBattingOrder(state, playerId, direction) {
  if (state.phase !== "tournament" || state.currentOpponent) {
    return state;
  }

  const fallback = buildDefaultBattingOrder(state.roster);
  const currentOrder = ensureOrder(state.battingOrder || [], state.roster, fallback);

  return {
    ...state,
    battingOrder: moveId(currentOrder, playerId, direction),
  };
}

export function moveBowlingOrder(state, playerId, direction) {
  if (state.phase !== "tournament" || state.currentOpponent) {
    return state;
  }

  const bowlingRoster = state.roster.filter((player) => player.role !== "wicketkeeper");
  const fallback = buildDefaultBowlingOrder(state.roster);
  const currentOrder = ensureOrder(state.bowlingOrder || [], bowlingRoster, fallback);

  return {
    ...state,
    bowlingOrder: moveId(currentOrder, playerId, direction),
  };
}

export function draftPlayer(state, playerId, random = Math.random) {
  if (state.phase !== "draft") {
    return state;
  }

  const player = state.candidateSet.find((candidate) => candidate.id === playerId);
  const draftedIdentities = new Set(state.roster.map(getPlayerIdentity));

  if (!player || draftedIdentities.has(getPlayerIdentity(player))) {
    return state;
  }

  if (!canDraftPlayer(state, player)) {
    return state;
  }

  const roster = [...state.roster, player];
  const nextState = { ...state, roster };

  if (isRosterComplete(roster)) {
    const orders = buildTournamentOrders(roster);
    return {
      ...nextState,
      phase: "tournament",
      ...orders,
      currentSquad: null,
      candidateSet: [],
    };
  }

  return {
    ...nextState,
    currentSquad: null,
    candidateSet: [],
  };
}

export function getTeamMetrics(roster) {
  if (roster.length === 0) {
    return {
      batting: 0,
      bowling: 0,
      chemistry: 0,
      allRounders: 0,
      overall: 0,
    };
  }

  const topBatters = [...roster]
    .sort((left, right) => right.batting - left.batting || right.bowling - left.bowling)
    .slice(0, Math.min(5, roster.length));
  const topBowlers = [...roster]
    .sort((left, right) => right.bowling - left.bowling || right.batting - left.batting)
    .slice(0, Math.min(5, roster.length));

  const batting = topBatters.reduce((total, player) => total + player.batting, 0) / topBatters.length;
  const bowling = topBowlers.reduce((total, player) => total + player.bowling, 0) / topBowlers.length;

  const allRounders = roster.filter(isAllRounderPlayer).length;
  const counts = getRoleCounts(roster);
  const teamVariety = new Set(roster.map((player) => player.team)).size;
  const eraVariety = new Set(roster.map((player) => player.year)).size;
  const chemistry = Math.min(10, teamVariety * 0.65 + eraVariety * 0.25 + allRounders * 0.45);

  // Hidden realism penalty: teams with thin specialist coverage get punished in long tournaments.
  const battingDepth = counts.batsman + allRounders * 0.7 + counts.wicketkeeper * 0.35;
  const bowlingDepth = counts.bowler + allRounders * 0.75;
  const balancePenalty =
    Math.max(0, 5 - battingDepth) * 1.6 + Math.max(0, 5 - bowlingDepth) * 1.9;
  const overall = batting * 0.5 + bowling * 0.5 + chemistry * 0.15 - balancePenalty;

  return {
    batting: round(batting),
    bowling: round(bowling),
    chemistry: round(chemistry),
    allRounders,
    overall: round(overall),
  };
}

function buildPrimeRatingsMap() {
  const byIdentity = new Map();

  for (const player of PLAYER_POOL) {
    const identity = getPlayerIdentity(player);
    const current = byIdentity.get(identity) || {
      batting: player.batting,
      bowling: player.bowling,
    };

    current.batting = Math.max(current.batting, player.batting);
    current.bowling = Math.max(current.bowling, player.bowling);
    byIdentity.set(identity, current);
  }

  return byIdentity;
}

const PRIME_RATINGS_BY_IDENTITY = buildPrimeRatingsMap();

function getTopAverage(roster, skill, count) {
  if (roster.length === 0) {
    return 0;
  }

  const selected = [...roster]
    .sort((left, right) => right[skill] - left[skill] || right.batting + right.bowling - (left.batting + left.bowling))
    .slice(0, Math.min(count, roster.length));

  return selected.reduce((total, player) => total + player[skill], 0) / selected.length;
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
  if (roster.length <= 11) {
    return [...roster];
  }

  const selectedIds = new Set();
  const xi = [];
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
      (player) =>
        player.batting * 1.08 +
        player.bowling * 0.16 +
        (player.role === "wicketkeeper" ? 3 : 0) +
        (isAllRounderPlayer(player) ? 4 : 0),
      4,
      selectedIds,
    ),
  );

  xi.push(
    ...takeBestPlayers(
      roster,
      (player) => player.batting * 0.58 + player.bowling * 0.42 + (isAllRounderPlayer(player) ? 6 : 0),
      11 - xi.length,
      selectedIds,
    ),
  );

  return xi.slice(0, 11);
}

function formatScore(runs, wickets) {
  if (wickets >= 10) {
    return `${runs}`;
  }

  return `${runs}/${wickets}`;
}

function estimateWickets(runs, battingRating, bowlingRating, random) {
  const collapseRisk = (bowlingRating - battingRating) / 10;
  const lowRunsPressure = (305 - runs) / 58;
  const wickets = 4.5 + collapseRisk + lowRunsPressure + randomSwing(random, 1.35);
  return clamp(round(wickets), 2, 10);
}

function adjustRosterSkills(roster, battingDelta, bowlingDelta) {
  return roster.map((player) => ({
    ...player,
    batting: clamp(round(player.batting + battingDelta), 0, 99),
    bowling: clamp(round(player.bowling + bowlingDelta), 0, 99),
  }));
}

function applyDifficultyProfileToPlayer(player, difficultyId) {
  if (!player) {
    return player;
  }

  if (difficultyId !== "county") {
    return player;
  }

  const prime = PRIME_RATINGS_BY_IDENTITY.get(getPlayerIdentity(player));
  if (!prime) {
    return player;
  }

  return {
    ...player,
    batting: Math.max(player.batting, prime.batting),
    bowling: Math.max(player.bowling, prime.bowling),
  };
}

export function getDifficultyAdjustedPlayer(player, difficultyId) {
  return applyDifficultyProfileToPlayer(player, difficultyId);
}

export function getDisplayRoster(roster, difficultyId) {
  return roster.map((player) => getDifficultyAdjustedPlayer(player, difficultyId));
}

function chooseStandout(roster, skill, random) {
  const sorted = [...roster].sort(
    (left, right) =>
      right[skill] + randomSwing(random, 4) - (left[skill] + randomSwing(random, 4)),
  );

  return sorted[0];
}

function buildHeadline(won, marginType, marginValue, opponent) {
  if (won && marginType === "runs") {
    return `You defended sharply and beat ${opponent.shortName} by ${marginValue} runs.`;
  }

  if (won) {
    return `The chase stayed under control and you beat ${opponent.shortName} by ${marginValue} wickets.`;
  }

  if (marginType === "runs") {
    return `${opponent.shortName} squeezed you by ${marginValue} runs and ended the run.`;
  }

  return `${opponent.shortName} chased it with ${marginValue} wickets in hand.`;
}

function simulateInnings(battingRating, bowlingRating, pressure, random) {
  const rawScore =
    180 + battingRating * 1.55 - bowlingRating * 0.82 + pressure * 3.2 + randomSwing(random, 18);

  return clamp(round(rawScore), 145, 405);
}

function resolveChaseScore(projectedRuns, firstInningsRuns, battingRating, bowlingRating, random) {
  const target = firstInningsRuns + 1;
  const chaseSucceeded = projectedRuns >= target;
  const runs = chaseSucceeded ? target : Math.min(projectedRuns, firstInningsRuns - 1);
  const wickets = estimateWickets(runs, battingRating, bowlingRating, random);

  return {
    runs,
    wickets,
    chaseSucceeded,
  };
}

function distributeTotal(total, weights) {
  if (weights.length === 0) {
    return [];
  }

  const sum = weights.reduce((running, weight) => running + weight, 0) || weights.length;
  const rawShares = weights.map((weight) => (weight / sum) * total);
  const baseShares = rawShares.map((value) => Math.floor(value));
  let remainder = total - baseShares.reduce((running, value) => running + value, 0);

  const order = rawShares
    .map((value, index) => ({ index, fraction: value - Math.floor(value) }))
    .sort((left, right) => right.fraction - left.fraction);

  let cursor = 0;
  while (remainder > 0) {
    baseShares[order[cursor % order.length].index] += 1;
    remainder -= 1;
    cursor += 1;
  }

  return baseShares;
}

function distributeCappedTotal(total, weights, cap) {
  const result = new Array(weights.length).fill(0);
  let remaining = total;
  let openIndexes = weights.map((_, index) => index);

  while (remaining > 0 && openIndexes.length > 0) {
    const shares = distributeTotal(
      remaining,
      openIndexes.map((index) => weights[index]),
    );

    let allocated = 0;
    const nextOpenIndexes = [];

    shares.forEach((share, position) => {
      const index = openIndexes[position];
      const room = cap - result[index];
      const applied = Math.min(share, room);
      result[index] += applied;
      allocated += applied;

      if (result[index] < cap) {
        nextOpenIndexes.push(index);
      }
    });

    if (allocated === 0) {
      break;
    }

    remaining -= allocated;
    openIndexes = nextOpenIndexes;
  }

  return result;
}

function estimateInningsBalls(runs, wickets, isChaseCompleted) {
  if (wickets >= 10) {
    return clamp(round(150 + runs * 0.42), 150, 300);
  }

  if (isChaseCompleted) {
    return clamp(round(108 + runs * 0.56 - wickets * 3), 90, 300);
  }

  return 300;
}

function getProjectedBattingOrder(roster) {
  return [...roster].sort((left, right) => {
    const leftRoleWeight = left.role === "batsman" ? 10 : left.role === "wicketkeeper" ? 7 : 0;
    const rightRoleWeight = right.role === "batsman" ? 10 : right.role === "wicketkeeper" ? 7 : 0;
    return (
      right.batting + rightRoleWeight - (left.batting + leftRoleWeight) ||
      right.bowling - left.bowling
    );
  });
}

function buildBattingCard(roster, totalRuns, totalBalls, totalWickets, random) {
  const battingOrder = getProjectedBattingOrder(roster);
  const activeCount = clamp(totalWickets + 2, 2, battingOrder.length);
  const activeBatters = battingOrder.slice(0, activeCount);
  const inactiveBatters = battingOrder.slice(activeCount);
  const weights = activeBatters.map((player, index) => {
    const roleBoost =
      player.role === "batsman" ? 1.22 : player.role === "wicketkeeper" ? 1.08 : 0.92;
    const topOrderBoost = Math.max(0.7, 1.3 - index * 0.08);
    return Math.max(1, player.batting * roleBoost * topOrderBoost + randomSwing(random, 8));
  });
  const runs = distributeTotal(totalRuns, weights);
  const rawBalls = activeBatters.map((player, index) => {
    const strikeRate = clamp(66 + player.batting * 0.46 + randomSwing(random, 11), 58, 128);
    const playerRuns = runs[index];
    return playerRuns === 0
      ? clamp(round(4 + random() * 6), 1, 10)
      : clamp(round((playerRuns * 100) / strikeRate), 1, 140);
  });
  const balls = distributeTotal(totalBalls, rawBalls.map((value) => Math.max(1, value)));

  const activeEntries = activeBatters.map((player, index) => {
    const playerRuns = runs[index];

    return {
      id: player.id,
      name: player.name,
      runs: playerRuns,
      balls: balls[index],
    };
  });

  const inactiveEntries = inactiveBatters.map((player) => ({
    id: player.id,
    name: player.name,
    runs: 0,
    balls: 0,
  }));

  return [...activeEntries, ...inactiveEntries].sort(
    (left, right) => right.runs - left.runs || left.balls - right.balls,
  );
}

function buildBowlingCard(roster, totalRunsConceded, totalWickets, totalBalls, random) {
  const bowlingOptions = roster
    .filter((player) => player.bowling > 0)
    .map((player) => ({
      player,
      wicketWeight:
        player.bowling *
        (player.role === "bowler" ? 1.18 : isAllRounderPlayer(player) ? 0.96 : 0.72),
      economyWeight: Math.max(28, 128 - player.bowling + randomSwing(random, 8)),
    }));

  if (bowlingOptions.length === 0) {
    return [];
  }

  const primaryOptions = bowlingOptions
    .sort((left, right) => right.player.bowling - left.player.bowling)
    .slice(0, Math.min(5, bowlingOptions.length));

  const wickets = distributeTotal(
    totalWickets,
    primaryOptions.map((option) => option.wicketWeight),
  );
  const runsConceded = distributeTotal(
    totalRunsConceded,
    primaryOptions.map((option) => option.economyWeight),
  );
  const ballsBowled = distributeCappedTotal(
    totalBalls,
    primaryOptions.map((option) => option.player.bowling),
    60,
  );

  return primaryOptions
    .map((option, index) => ({
      id: option.player.id,
      name: option.player.name,
      wickets: wickets[index],
      runsConceded: runsConceded[index],
      ballsBowled: ballsBowled[index],
    }))
    .sort(
      (left, right) =>
        right.wickets - left.wickets || left.runsConceded - right.runsConceded,
    );
}

function getOpponentRoster(opponent) {
  const roster = PLAYER_POOL.filter((player) => player.squadId === opponent.id);
  return roster.length > 0 ? roster : [];
}

export function getOpponentMetrics(opponent) {
  const roster = selectBestXI(getOpponentRoster(opponent));

  if (roster.length === 0) {
    return {
      batting: 0,
      bowling: 0,
    };
  }

  return {
    batting: round(getTopAverage(roster, "batting", 5)),
    bowling: round(getTopAverage(roster, "bowling", 5)),
  };
}

function buildOpponentBattingOrder(roster) {
  return [...roster]
    .sort((left, right) => right.batting - left.batting || right.bowling - left.bowling)
    .map((player) => player.id);
}

function buildOpponentBowlingOrder(roster) {
  return [...roster]
    .filter((player) => player.role !== "wicketkeeper")
    .sort((left, right) => right.bowling - left.bowling || right.batting - left.batting)
    .map((player) => player.id);
}

function formatScorecardRoster(roster, orderIds) {
  const byId = new Map(roster.map((player) => [player.id, player]));
  return orderIds.map((id) => byId.get(id)).filter(Boolean);
}

function getStyleFlags(player) {
  const style = (player.bowlingStyle || "").toLowerCase();

  return {
    pace:
      style.includes("fast") ||
      style.includes("medium fast") ||
      style.includes("fast medium") ||
      style === "medium",
    seam:
      style.includes("fast") ||
      style.includes("medium fast") ||
      style.includes("fast medium") ||
      style === "medium",
    swing:
      style.includes("fast") ||
      style.includes("medium") ||
      style.includes("seam"),
    spin:
      style.includes("break") ||
      style.includes("orthodox") ||
      style.includes("chinaman") ||
      style.includes("slow"),
    wrist:
      style.includes("leg break") ||
      style.includes("googly") ||
      style.includes("chinaman"),
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

function getBowlingConditionsAdvantage(conditions, bowler, ballNumber, inningsIndex) {
  const flags = getStyleFlags(bowler);
  const inNewBall = ballNumber < 120;
  const { weather, surface, outfield } = conditions;
  let value = (weather.batting + surface.batting + outfield.batting) * -0.0015;

  if (flags.pace) {
    value += (weather.pace + surface.pace) * 0.0045;
  }

  if (flags.swing && inNewBall) {
    value += (weather.swing + surface.swing) * 0.0055;
  }

  if (flags.seam && inNewBall) {
    value += surface.seam * 0.004;
  }

  if (flags.spin && ballNumber >= 120) {
    value += (weather.spin + surface.spin) * 0.0048;
  }

  if (inningsIndex === 1 && weather.id === "dewy" && flags.spin && ballNumber >= 150) {
    value -= 0.02;
  }

  return value;
}

function getBattingConditionsModifier(conditions, inningsIndex) {
  const { weather, surface, outfield } = conditions;
  let modifier = (weather.batting + surface.batting + outfield.batting) * 0.0035;
  if (inningsIndex === 1) {
    modifier += weather.chase * 0.003;
  }
  return modifier;
}

function getOutfieldModifier(conditions) {
  return conditions.outfield;
}

function reorderAdjustedRoster(adjustedRoster, orderIds, fallbackOrderBuilder) {
  const fallbackIds = fallbackOrderBuilder(adjustedRoster);
  const orderedIds = ensureOrder(orderIds || [], adjustedRoster, fallbackIds);
  return formatScorecardRoster(adjustedRoster, orderedIds);
}

function pickNextBowler(rotation, stats, previousBowlerId) {
  const available = rotation.filter((player) => (stats.get(player.id)?.ballsBowled || 0) < 60);
  if (available.length === 0) {
    return null;
  }

  const next = available.find((player) => player.id !== previousBowlerId);
  return next || available[0];
}

function simulateOverByOver({
  battingOrder,
  bowlingOrder,
  inningsIndex,
  target,
  random,
  conditions,
}) {
  let strikerIndex = 0;
  let nonStrikerIndex = 1;
  let nextBatterIndex = 2;
  let totalRuns = 0;
  let wickets = 0;
  let balls = 0;
  let previousBowlerId = null;

  const battingStats = new Map(
    battingOrder.map((player) => [player.id, { id: player.id, name: player.name, runs: 0, balls: 0 }]),
  );
  const bowlingStats = new Map(
    bowlingOrder.map((player) => [
      player.id,
      { id: player.id, name: player.name, wickets: 0, runsConceded: 0, ballsBowled: 0 },
    ]),
  );

  while (balls < 300 && wickets < 10) {
    if (target && totalRuns >= target) {
      break;
    }

      const striker = battingOrder[strikerIndex];
      const bowler = pickNextBowler(bowlingOrder, bowlingStats, previousBowlerId);
      if (!striker || !bowler) {
        break;
      }

      const battingEntry = battingStats.get(striker.id);
      const bowlingEntry = bowlingStats.get(bowler.id);
      const aggressionProfile = getAggressionProfile(striker);
      const matchupAdvantage = getMatchupAdvantage(striker, bowler);
      const bowlingConditions = getBowlingConditionsAdvantage(conditions, bowler, balls, inningsIndex);
      const battingConditions = getBattingConditionsModifier(conditions, inningsIndex);
      const outfield = getOutfieldModifier(conditions);

      for (let ballInOver = 0; ballInOver < 6; ballInOver += 1) {
        if (balls >= 300 || wickets >= 10 || (target && totalRuns >= target)) {
        break;
      }

        const ballsRemaining = 300 - balls;
        const runsNeeded = target ? Math.max(0, target - totalRuns) : 0;
        const skillEdge = (striker.batting - bowler.bowling) / 100;
        const chaseRate = target ? runsNeeded / Math.max(1, ballsRemaining) : 0;
        const pressureBoost = target ? clamp(chaseRate - 1, -0.18, 0.45) : 0;
        const currentRunRate = balls > 0 ? totalRuns / balls : 0;
        const chaseUrgency = target ? clamp(chaseRate - currentRunRate, 0, 1.2) : 0;
        const lateChaseDesperation = target
          ? clamp((balls - 180) / 120, 0, 1) * clamp(chaseRate - 0.82, 0, 0.8)
          : 0;
        const deathOversBoost = balls >= 240 ? 0.03 : balls >= 180 ? 0.01 : 0;
        const newBallBoost = balls < 120 ? 0.012 : 0;
        const wicketChance = clamp(
          0.085 -
            skillEdge * 0.02 +
            matchupAdvantage +
            bowlingConditions +
            newBallBoost +
            Math.max(0, pressureBoost) * 0.02 +
            chaseUrgency * 0.03 +
            lateChaseDesperation * 0.05 +
            deathOversBoost * 0.5 +
            aggressionProfile.wicketRisk -
            battingConditions * 0.3,
          0.028,
          0.16,
        );
        const singleChance = clamp(
          0.27 +
            skillEdge * 0.025 +
            battingConditions * 0.2 -
            Math.max(0, pressureBoost) * 0.04 +
            chaseUrgency * -0.03 +
            lateChaseDesperation * -0.045 +
            aggressionProfile.singleDelta,
          0.18,
          0.36,
        );
        const doubleChance = clamp(
          0.065 +
            skillEdge * 0.014 +
            battingConditions * 0.03 +
            chaseUrgency * 0.006 +
            aggressionProfile.doubleDelta +
            outfield.double,
          0.025,
          0.1,
        );
        const boundaryChance = clamp(
          0.072 +
            skillEdge * 0.025 +
            battingConditions * 0.7 +
            deathOversBoost +
            chaseUrgency * 0.03 +
            lateChaseDesperation * 0.05 +
            aggressionProfile.boundaryDelta -
            bowlingConditions * 0.32 +
            outfield.boundary,
          0.028,
          0.14,
        );
        const sixChance = clamp(
          0.007 +
            skillEdge * 0.01 +
            battingConditions * 0.55 +
            deathOversBoost +
            chaseUrgency * 0.012 +
            lateChaseDesperation * 0.02 +
            aggressionProfile.sixDelta -
            bowlingConditions * 0.1,
          0.001,
          0.04,
        );
        const tripleChance = 0.005;
      const chanceJitter =
        (hashValue(`${inningsIndex}-${striker.id}-${bowler.id}-${balls}`) % 1000) / 1000;
      const chance = (random() * 0.55 + chanceJitter * 0.45) % 1;

      battingEntry.balls += 1;
      bowlingEntry.ballsBowled += 1;
      balls += 1;

      if (chance < wicketChance) {
        wickets += 1;
        bowlingEntry.wickets += 1;

        if (nextBatterIndex >= battingOrder.length) {
          break;
        }

        strikerIndex = nextBatterIndex;
        nextBatterIndex += 1;
        continue;
      }

      let runs = 0;
      if (chance < wicketChance) {
        runs = 0;
      } else if (chance < wicketChance + sixChance) {
        runs = 6;
      } else if (chance < wicketChance + sixChance + boundaryChance) {
        runs = 4;
      } else if (chance < wicketChance + sixChance + boundaryChance + tripleChance) {
        runs = 3;
      } else if (chance < wicketChance + sixChance + boundaryChance + tripleChance + doubleChance) {
        runs = 2;
      } else if (
        chance <
        wicketChance + sixChance + boundaryChance + tripleChance + doubleChance + singleChance
      ) {
        runs = 1;
      } else {
        runs = 0;
      }

      battingEntry.runs += runs;
      bowlingEntry.runsConceded += runs;
      totalRuns += runs;

      if (runs % 2 === 1) {
        [strikerIndex, nonStrikerIndex] = [nonStrikerIndex, strikerIndex];
      }
    }

    [strikerIndex, nonStrikerIndex] = [nonStrikerIndex, strikerIndex];
    previousBowlerId = bowler.id;
  }

  return {
    runs: totalRuns,
    wickets,
    balls,
    battingCard: [...battingStats.values()].sort(
      (left, right) => right.runs - left.runs || left.balls - right.balls,
    ),
    bowlingCard: [...bowlingStats.values()]
      .filter((entry) => entry.ballsBowled > 0)
      .sort((left, right) => right.wickets - left.wickets || left.runsConceded - right.runsConceded),
  };
}

export function simulateMatch(state, random = Math.random) {
  if (
    state.phase !== "tournament" ||
    state.matchIndex >= TOURNAMENT_OPPONENTS.length ||
    !state.currentOpponent
  ) {
    return state;
  }

  const opponent = state.currentOpponent;
  const userBatsFirst = random() >= 0.5;
  const stageBoost = opponent.pressure;
  const playerRoster = getDisplayRoster(state.roster, state.difficulty);
  const opponentRoster = selectBestXI(getOpponentRoster(opponent));
  const opponentAdjusted = adjustRosterSkills(
    opponentRoster,
    stageBoost,
    stageBoost,
  );
  const playerBattingOrder = reorderAdjustedRoster(
    playerRoster,
    state.battingOrder,
    buildDefaultBattingOrder,
  );
  const playerBowlingOrder = reorderAdjustedRoster(
    playerRoster.filter((player) => player.role !== "wicketkeeper"),
    state.bowlingOrder,
    buildDefaultBowlingOrder,
  );
  const opponentBattingOrder = buildOpponentBattingOrder(opponentAdjusted)
    .map((id) => opponentAdjusted.find((player) => player.id === id))
    .filter(Boolean);
  const opponentBowlingOrder = buildOpponentBowlingOrder(opponentAdjusted)
    .map((id) => opponentAdjusted.find((player) => player.id === id))
    .filter(Boolean);

  const firstInnings = simulateOverByOver({
    battingOrder: userBatsFirst ? playerBattingOrder : opponentBattingOrder,
    bowlingOrder: userBatsFirst ? opponentBowlingOrder : playerBowlingOrder,
    inningsIndex: 0,
    target: null,
    random,
    conditions:
      opponent.conditions || {
        weather: WEATHER_OPTIONS.clear,
        surface: SURFACE_OPTIONS.flat,
        outfield: OUTFIELD_OPTIONS.average,
      },
  });

  const secondInningsTarget = firstInnings.runs + 1;
  const secondInnings = simulateOverByOver({
    battingOrder: userBatsFirst ? opponentBattingOrder : playerBattingOrder,
    bowlingOrder: userBatsFirst ? playerBowlingOrder : opponentBowlingOrder,
    inningsIndex: 1,
    target: secondInningsTarget,
    random,
    conditions:
      opponent.conditions || {
        weather: WEATHER_OPTIONS.clear,
        surface: SURFACE_OPTIONS.flat,
        outfield: OUTFIELD_OPTIONS.average,
      },
  });

  const playerRuns = userBatsFirst ? firstInnings.runs : secondInnings.runs;
  const playerWickets = userBatsFirst ? firstInnings.wickets : secondInnings.wickets;
  const opponentRuns = userBatsFirst ? secondInnings.runs : firstInnings.runs;
  const opponentWickets = userBatsFirst ? secondInnings.wickets : firstInnings.wickets;
  const chaseSucceeded = secondInnings.runs >= secondInningsTarget;
  const playerWon = userBatsFirst ? !chaseSucceeded : chaseSucceeded;
  const playerBalls = userBatsFirst ? firstInnings.balls : secondInnings.balls;
  const opponentBalls = userBatsFirst ? secondInnings.balls : firstInnings.balls;

  let marginType = "runs";
  let marginValue = Math.max(1, Math.abs(playerRuns - opponentRuns));

  if (chaseSucceeded) {
    marginType = "wickets";
    marginValue = userBatsFirst
      ? clamp(10 - opponentWickets, 1, 10)
      : clamp(10 - playerWickets, 1, 10);
  }

  const playerBattingCard = userBatsFirst ? firstInnings.battingCard : secondInnings.battingCard;
  const playerBowlingCard = userBatsFirst ? secondInnings.bowlingCard : firstInnings.bowlingCard;
  const opponentBattingCard = userBatsFirst ? secondInnings.battingCard : firstInnings.battingCard;
  const opponentBowlingCard = userBatsFirst ? firstInnings.bowlingCard : secondInnings.bowlingCard;
  const performer = playerWon
    ? marginType === "wickets"
      ? playerBattingCard[0]
      : playerBowlingCard[0]
    : playerBowlingCard[0] || chooseStandout(state.roster, "bowling", random);

  const result = {
    opponent,
    stage: opponent.stage,
    conditions: opponent.conditions,
    won: playerWon,
    battingFirst: userBatsFirst ? "player" : "opponent",
    playerRuns,
    playerWickets,
    playerBalls,
    opponentRuns,
    opponentWickets,
    opponentBalls,
    playerScore: formatScore(playerRuns, playerWickets),
    opponentScore: formatScore(opponentRuns, opponentWickets),
    performer,
    playerBattingCard,
    playerBowlingCard,
    opponentBattingCard,
    opponentBowlingCard,
    marginType,
    marginValue,
    headline: buildHeadline(playerWon, marginType, marginValue, opponent),
  };

  const results = [...state.results, result];
  const isGroupStage = state.matchIndex < 3;
  const completedGroupMatches = results.filter((match, index) => index < 3);
  const groupWins = completedGroupMatches.filter((match) => match.won).length;
  const groupStageComplete = state.matchIndex === 2;
  const lastMatch = state.matchIndex === TOURNAMENT_OPPONENTS.length - 1;

  if (playerWon && lastMatch) {
    return {
      ...state,
      results,
      latestMatch: result,
      champion: true,
      phase: "finished",
      currentOpponent: null,
      matchIndex: state.matchIndex + 1,
    };
  }

  if (playerWon) {
    if (groupStageComplete && groupWins < 2) {
      return {
        ...state,
        results,
        latestMatch: result,
        eliminated: true,
        phase: "finished",
        currentOpponent: null,
      };
    }

    return {
      ...state,
      results,
      latestMatch: result,
      currentOpponent: null,
      matchIndex: state.matchIndex + 1,
    };
  }

  if (isGroupStage && !groupStageComplete) {
    return {
      ...state,
      results,
      latestMatch: result,
      currentOpponent: null,
      matchIndex: state.matchIndex + 1,
    };
  }

  if (groupStageComplete && groupWins >= 2) {
    return {
      ...state,
      results,
      latestMatch: result,
      currentOpponent: null,
      matchIndex: state.matchIndex + 1,
    };
  }

  return {
    ...state,
      results,
      latestMatch: result,
      eliminated: true,
      phase: "finished",
      currentOpponent: null,
    };
}

export function getCurrentOpponent(state) {
  return state.currentOpponent;
}

export function revealNextOpponent(state) {
  if (
    state.phase !== "tournament" ||
    state.currentOpponent ||
    state.matchIndex >= TOURNAMENT_OPPONENTS.length
  ) {
    return state;
  }

  return {
    ...state,
    currentOpponent: {
      ...TOURNAMENT_OPPONENTS[state.matchIndex],
      conditions: getConditionsForOpponent(TOURNAMENT_OPPONENTS[state.matchIndex]),
    },
  };
}

export function getProgressLabel(state) {
  if (state.champion) {
    return "Champions";
  }

  if (state.phase === "draft") {
    return "Draft Room";
  }

  if (state.latestMatch && state.eliminated) {
    return `Out in ${state.latestMatch.stage}`;
  }

  if (state.matchIndex >= TOURNAMENT_OPPONENTS.length) {
    return "Finished";
  }

  return TOURNAMENT_OPPONENTS[state.matchIndex].stage;
}
