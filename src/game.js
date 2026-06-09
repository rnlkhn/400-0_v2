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
    description: "A friendlier ladder with a little breathing room.",
    playerBatting: 6,
    playerBowling: 6,
    opponentBatting: -4,
    opponentBowling: -4,
  },
  {
    id: "international",
    label: "International",
    description: "Baseline World Cup difficulty.",
    playerBatting: 0,
    playerBowling: 0,
    opponentBatting: 0,
    opponentBowling: 0,
  },
  {
    id: "legend",
    label: "Legend",
    description: "A harsher ladder where weak links get punished fast.",
    playerBatting: -4,
    playerBowling: -4,
    opponentBatting: 6,
    opponentBowling: 6,
  },
];

const DIFFICULTY_BY_ID = new Map(DIFFICULTY_LEVELS.map((level) => [level.id, level]));

export const BATTING_AGGRESSION_LEVELS = [
  {
    id: "cautious",
    label: "Cautious",
    description: "Bank wickets and trust the long chase.",
    scoreBias: -18,
    wicketBias: -1.4,
    boundaryDelta: -0.02,
    sixDelta: -0.01,
    singleDelta: 0.03,
    doubleDelta: 0.012,
  },
  {
    id: "mid",
    label: "Mid",
    description: "Balanced ODI tempo.",
    scoreBias: 0,
    wicketBias: 0,
    boundaryDelta: 0,
    sixDelta: 0,
    singleDelta: 0,
    doubleDelta: 0,
  },
  {
    id: "aggressive",
    label: "Aggressive",
    description: "Push the rate and accept more dismissal risk.",
    scoreBias: 22,
    wicketBias: 1.8,
    boundaryDelta: 0.028,
    sixDelta: 0.016,
    singleDelta: -0.025,
    doubleDelta: 0.008,
  },
];

const BATTING_AGGRESSION_BY_ID = new Map(
  BATTING_AGGRESSION_LEVELS.map((level) => [level.id, level]),
);

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
    const leftValue = left.batting + left.bowling + (isAllRounderPlayer(left) ? 8 : 0);
    const rightValue = right.batting + right.bowling + (isAllRounderPlayer(right) ? 8 : 0);
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
    battingAggression: "mid",
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

export function setBattingAggression(state, aggressionId) {
  if (state.phase !== "tournament" || !state.currentOpponent) {
    return state;
  }

  if (!BATTING_AGGRESSION_BY_ID.has(aggressionId)) {
    return state;
  }

  return {
    ...state,
    battingAggression: aggressionId,
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
    .slice(0, Math.min(11, roster.length));
  const topBowlers = [...roster]
    .sort((left, right) => right.bowling - left.bowling || right.batting - left.batting)
    .slice(0, Math.min(11, roster.length));

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
  const overall = batting * 0.54 + bowling * 0.46 + chemistry - balancePenalty;

  return {
    batting: round(batting),
    bowling: round(bowling),
    chemistry: round(chemistry),
    allRounders,
    overall: round(overall),
  };
}

function formatScore(runs, wickets) {
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
  const roster = getOpponentRoster(opponent);

  if (roster.length === 0) {
    return {
      batting: 0,
      bowling: 0,
    };
  }

  const { batting, bowling } = getTeamMetrics(roster);

  return {
    batting: round(batting),
    bowling: round(bowling),
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
  aggression = "mid",
}) {
  const aggressionProfile = BATTING_AGGRESSION_BY_ID.get(aggression) || BATTING_AGGRESSION_BY_ID.get("mid");
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

    for (let ballInOver = 0; ballInOver < 6; ballInOver += 1) {
      if (balls >= 300 || wickets >= 10 || (target && totalRuns >= target)) {
        break;
      }

      const ballsRemaining = 300 - balls;
      const runsNeeded = target ? Math.max(0, target - totalRuns) : 0;
      const skillEdge = (striker.batting - bowler.bowling) / 100;
      const chaseRate = target ? runsNeeded / Math.max(1, ballsRemaining) : 0;
      const pressureBoost = target ? clamp(chaseRate - 1, -0.18, 0.45) : 0;
      const deathOversBoost = balls >= 240 ? 0.03 : balls >= 180 ? 0.01 : 0;
      const wicketChance = clamp(
        0.034 -
          skillEdge * 0.012 +
          Math.max(0, pressureBoost) * 0.014 +
          deathOversBoost * 0.55 +
          aggressionProfile.wicketRisk,
        0.018,
        0.082,
      );
      const singleChance = clamp(
        0.31 + skillEdge * 0.05 - Math.max(0, pressureBoost) * 0.04 + aggressionProfile.singleDelta,
        0.2,
        0.41,
      );
      const doubleChance = clamp(
        0.11 + skillEdge * 0.025 + aggressionProfile.doubleDelta,
        0.05,
        0.18,
      );
      const boundaryChance = clamp(
        0.12 + skillEdge * 0.04 + deathOversBoost + aggressionProfile.boundaryDelta,
        0.05,
        0.24,
      );
      const sixChance = clamp(
        0.018 + skillEdge * 0.018 + deathOversBoost + aggressionProfile.sixDelta,
        0.004,
        0.095,
      );
      const tripleChance = 0.012;
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
  const team = getTeamMetrics(state.roster);
  const opponentRoster = getOpponentRoster(opponent);
  const opponentTeam = getTeamMetrics(opponentRoster);
  const difficulty = DIFFICULTY_BY_ID.get(state.difficulty) || DIFFICULTY_BY_ID.get("international");
  const aggression =
    BATTING_AGGRESSION_BY_ID.get(state.battingAggression) || BATTING_AGGRESSION_BY_ID.get("mid");
  const userBatsFirst = random() >= 0.5;
  const stageBoost = state.matchIndex * 2;
  const playerBatting = team.batting + difficulty.playerBatting;
  const playerBowling = team.bowling + difficulty.playerBowling;
  const opponentBatting = opponentTeam.batting + difficulty.opponentBatting + stageBoost;
  const opponentBowling = opponentTeam.bowling + difficulty.opponentBowling + stageBoost;
  const firstInningsRuns = userBatsFirst
    ? simulateInnings(playerBatting + aggression.scoreBias, opponentBowling, 0, random)
    : simulateInnings(opponentBatting, playerBowling, 0, random);
  const firstInningsWickets = userBatsFirst
    ? clamp(
        round(
          estimateWickets(firstInningsRuns, playerBatting, opponentBowling, random) +
            aggression.wicketBias,
        ),
        2,
        10,
      )
    : estimateWickets(firstInningsRuns, opponentBatting, playerBowling, random);

  const secondInningsPressure = 6;
  const secondInningsProjection = userBatsFirst
    ? simulateInnings(opponentBatting, playerBowling, secondInningsPressure, random)
    : simulateInnings(
        playerBatting + aggression.scoreBias,
        opponentBowling,
        secondInningsPressure,
        random,
      );
  const secondInningsBase = resolveChaseScore(
    secondInningsProjection,
    firstInningsRuns,
    userBatsFirst ? opponentBatting : playerBatting,
    userBatsFirst ? playerBowling : opponentBowling,
    random,
  );
  const secondInnings = userBatsFirst
    ? secondInningsBase
    : {
        ...secondInningsBase,
        wickets: clamp(round(secondInningsBase.wickets + aggression.wicketBias), 2, 10),
      };

  const playerRuns = userBatsFirst ? firstInningsRuns : secondInnings.runs;
  const playerWickets = userBatsFirst ? firstInningsWickets : secondInnings.wickets;
  const opponentRuns = userBatsFirst ? secondInnings.runs : firstInningsRuns;
  const opponentWickets = userBatsFirst ? secondInnings.wickets : firstInningsWickets;
  const chaseSucceeded = secondInnings.chaseSucceeded;
  const playerWon = userBatsFirst ? !chaseSucceeded : chaseSucceeded;
  const playerBalls = estimateInningsBalls(playerRuns, playerWickets, !userBatsFirst && playerWon);
  const opponentBalls = estimateInningsBalls(
    opponentRuns,
    opponentWickets,
    userBatsFirst ? opponentRuns >= playerRuns : false,
  );

  let marginType = "runs";
  let marginValue = Math.max(1, Math.abs(playerRuns - opponentRuns));

  if (chaseSucceeded) {
    marginType = "wickets";
    marginValue = userBatsFirst
      ? clamp(10 - opponentWickets, 1, 9)
      : clamp(10 - playerWickets, 1, 9);
  }

  const playerBattingCard = buildBattingCard(
    state.roster,
    playerRuns,
    playerBalls,
    playerWickets,
    random,
  );
  const playerBowlingCard = buildBowlingCard(
    state.roster,
    opponentRuns,
    opponentWickets,
    opponentBalls,
    random,
  );
  const opponentBattingCard = buildBattingCard(
    opponentRoster,
    opponentRuns,
    opponentBalls,
    opponentWickets,
    random,
  );
  const opponentBowlingCard = buildBowlingCard(
    opponentRoster,
    playerRuns,
    playerWickets,
    playerBalls,
    random,
  );
  const performer = playerWon
    ? marginType === "wickets"
      ? playerBattingCard[0]
      : playerBowlingCard[0]
    : playerBowlingCard[0] || chooseStandout(state.roster, "bowling", random);

  const result = {
    opponent,
    stage: opponent.stage,
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
    battingAggression: "mid",
    currentOpponent: TOURNAMENT_OPPONENTS[state.matchIndex],
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
