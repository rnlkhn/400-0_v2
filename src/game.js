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

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value) {
  return Math.round(value);
}

function randomSwing(random, size) {
  return (random() - 0.5) * 2 * size;
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
  const maskCounts = createMaskCounts();
  const players = [];

  for (const player of PLAYER_POOL) {
    if (draftedIds.has(player.id)) {
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
    roster: [],
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

export function draftPlayer(state, playerId, random = Math.random) {
  if (state.phase !== "draft") {
    return state;
  }

  const player = state.candidateSet.find((candidate) => candidate.id === playerId);
  if (!canDraftPlayer(state, player)) {
    return state;
  }

  const roster = [...state.roster, player];
  const nextState = { ...state, roster };

  if (isRosterComplete(roster)) {
    return {
      ...nextState,
      phase: "tournament",
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

  const battingWeights = {
    batsman: 1.18,
    wicketkeeper: 1.08,
    bowler: 0.24,
  };
  const bowlingWeights = {
    batsman: 0.18,
    wicketkeeper: 0,
    bowler: 1.14,
  };

  const battingWeightTotal = roster.reduce(
    (total, player) => total + battingWeights[player.role],
    0,
  );
  const bowlingWeightTotal = roster.reduce(
    (total, player) => total + bowlingWeights[player.role],
    0,
  );

  const batting =
    roster.reduce((total, player) => total + player.batting * battingWeights[player.role], 0) /
    battingWeightTotal;
  const bowling =
    roster.reduce((total, player) => total + player.bowling * bowlingWeights[player.role], 0) /
    bowlingWeightTotal;

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
    168 + battingRating * 1.34 - bowlingRating * 0.5 + pressure * 2.8 + randomSwing(random, 22);

  return clamp(round(rawScore), 145, 405);
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
  const result = distributeTotal(total, weights);
  let adjusted = false;
  let overflow = 0;

  for (let index = 0; index < result.length; index += 1) {
    if (result[index] > cap) {
      overflow += result[index] - cap;
      result[index] = cap;
      adjusted = true;
    }
  }

  if (!adjusted || overflow === 0) {
    return result;
  }

  const openIndexes = result
    .map((value, index) => ({ value, index }))
    .filter(({ value }) => value < cap)
    .map(({ index }) => index);

  if (openIndexes.length === 0) {
    return result;
  }

  const redistributed = distributeTotal(
    overflow,
    openIndexes.map((index) => weights[index]),
  );

  redistributed.forEach((value, position) => {
    result[openIndexes[position]] += value;
  });

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

function buildBattingCard(roster, totalRuns, totalBalls, random) {
  const weights = roster.map((player) => {
    const roleBoost =
      player.role === "batsman" ? 1.18 : player.role === "wicketkeeper" ? 1.06 : 0.86;
    return Math.max(1, player.batting * roleBoost + randomSwing(random, 6));
  });
  const runs = distributeTotal(totalRuns, weights);
  const rawBalls = roster.map((player, index) => {
    const strikeRate = clamp(66 + player.batting * 0.46 + randomSwing(random, 11), 58, 128);
    const playerRuns = runs[index];
    return playerRuns === 0
      ? clamp(round(4 + random() * 6), 1, 10)
      : clamp(round((playerRuns * 100) / strikeRate), 1, 140);
  });
  const balls = distributeTotal(totalBalls, rawBalls.map((value) => Math.max(1, value)));

  return roster
    .map((player, index) => {
      const playerRuns = runs[index];

      return {
        id: player.id,
        name: player.name,
        runs: playerRuns,
        balls: balls[index],
      };
    })
    .sort((left, right) => right.runs - left.runs || left.balls - right.balls);
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
  const userBatsFirst = random() >= 0.5;
  const playerPressure = Math.max(0, state.matchIndex - 2);

  const playerBaseRuns = simulateInnings(team.batting, opponent.bowling, playerPressure, random);
  const opponentBaseRuns = simulateInnings(
    opponent.batting,
    team.bowling,
    opponent.pressure,
    random,
  );

  const strengthEdge = team.overall - opponent.overall;
  const edgeBoost = strengthEdge * 2.3;

  const playerRuns = clamp(
    round(playerBaseRuns + edgeBoost + team.chemistry * 0.55 + randomSwing(random, 7)),
    150,
    420,
  );
  const opponentRuns = clamp(
    round(opponentBaseRuns - edgeBoost + randomSwing(random, 7)),
    145,
    410,
  );

  const playerWickets = estimateWickets(playerRuns, team.batting, opponent.bowling, random);
  const opponentWickets = estimateWickets(opponentRuns, opponent.batting, team.bowling, random);

  const playerWon = userBatsFirst ? playerRuns > opponentRuns : playerRuns >= opponentRuns;
  const chasingSide = userBatsFirst ? "opponent" : "player";

  let marginType = "runs";
  let marginValue = Math.abs(playerRuns - opponentRuns);

  if (playerWon && chasingSide === "player") {
    marginType = "wickets";
    marginValue = clamp(10 - playerWickets, 1, 9);
  } else if (!playerWon && chasingSide === "opponent") {
    marginType = "wickets";
    marginValue = clamp(10 - opponentWickets, 1, 9);
  } else {
    marginValue = Math.max(1, marginValue);
  }

  const performer = playerWon
    ? chooseStandout(state.roster, marginType === "wickets" ? "batting" : "bowling", random)
    : chooseStandout(state.roster, "bowling", random);

  const playerBalls = estimateInningsBalls(
    playerRuns,
    playerWickets,
    !userBatsFirst && playerWon,
  );
  const opponentBalls = estimateInningsBalls(
    opponentRuns,
    opponentWickets,
    userBatsFirst ? !playerWon : false,
  );

  const playerBattingCard = buildBattingCard(state.roster, playerRuns, playerBalls, random);
  const playerBowlingCard = buildBowlingCard(
    state.roster,
    opponentRuns,
    opponentWickets,
    opponentBalls,
    random,
  );
  const opponentBattingCard = buildBattingCard(opponentRoster, opponentRuns, opponentBalls, random);
  const opponentBowlingCard = buildBowlingCard(
    opponentRoster,
    playerRuns,
    playerWickets,
    playerBalls,
    random,
  );

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
