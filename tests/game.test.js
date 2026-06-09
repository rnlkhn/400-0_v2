import test from "node:test";
import assert from "node:assert/strict";

import {
  DIFFICULTY_LEVELS,
  DRAFT_SQUADS,
  PLAYER_POOL,
  TOURNAMENT_OPPONENTS,
  createInitialState,
  draftPlayer,
  getBattingOrderPlayers,
  getBowlingOrderPlayers,
  getEligiblePlayers,
  getOpponentMetrics,
  getRemainingSlots,
  getTeamMetrics,
  isAllRounderPlayer,
  moveBattingOrder,
  moveBowlingOrder,
  revealNextOpponent,
  rerollCandidates,
  setDifficulty,
  simulateMatch,
} from "../src/game.js";

function constantRandom(value) {
  return () => value;
}

function createLegendXI() {
  return [
    "sachin-tendulkar",
    "ricky-ponting",
    "brian-lara",
    "jacques-kallis",
    "shakib-al-hasan",
    "adam-gilchrist",
    "wasim-akram",
    "shane-warne",
    "glenn-mcgrath",
    "jasprit-bumrah",
    "muttiah-muralitharan",
  ].map((id) => PLAYER_POOL.find((player) => player.id === id));
}

function createWeakXI() {
  return [
    "syed-kirmani",
    "kris-srikkanth",
    "sunil-gavaskar",
    "asaranka-gurusinha",
    "saud-shakeel",
    "mohinder-amarnath",
    "mohammad-saifuddin",
    "damien-fleming",
    "haris-rauf",
    "ian-bishop",
    "mujeeb-ur-rahman",
  ].map((id) => PLAYER_POOL.find((player) => player.id === id));
}

test("initial state waits for the first draft spin", () => {
  const state = createInitialState(constantRandom(0));

  assert.equal(state.currentSquad, null);
  assert.deepEqual(state.candidateSet, []);
  assert.equal(state.difficulty, "international");
});

test("difficulty can be chosen before the draft starts", () => {
  const state = setDifficulty(createInitialState(), "legend");

  assert.equal(state.difficulty, "legend");
  assert.equal(DIFFICULTY_LEVELS.some((level) => level.id === state.difficulty), true);
});

test("drafting a player updates the roster and waits for a manual re-spin", () => {
  let state = rerollCandidates(createInitialState(constantRandom(0)), constantRandom(0));
  const player = state.candidateSet[0];

  state = draftPlayer(state, player.id, constantRandom(0.6));

  assert.equal(state.roster.length, 1);
  assert.equal(state.roster[0].id, player.id);
  assert.equal(state.currentSquad, null);
  assert.deepEqual(state.candidateSet, []);
});

test("drafting a player blocks the same cricketer across other world cup years", () => {
  const gilchrist2003 = PLAYER_POOL.find((player) => player.id === "australia-2003-adam-gilchrist");
  const gilchrist2007 = PLAYER_POOL.find((player) => player.id === "australia-2007-adam-gilchrist");

  const draftedState = draftPlayer(
    {
      ...createInitialState(),
      currentSquad: DRAFT_SQUADS.find((squad) => squad.id === "australia-2003"),
      candidateSet: [gilchrist2003],
    },
    gilchrist2003.id,
  );

  assert.equal(draftedState.roster.length, 1);
  assert.equal(draftedState.roster[0].name, "Adam Gilchrist");
  assert.equal(
    getEligiblePlayers(draftedState).some((player) => player.id === gilchrist2007.id),
    false,
  );
});

test("rerollCandidates changes the active squad when alternatives exist", () => {
  const state = rerollCandidates(createInitialState(constantRandom(0)), constantRandom(0));
  const rerolled = rerollCandidates(state, constantRandom(0.95));

  assert.notEqual(rerolled.currentSquad.id, state.currentSquad.id);
  assert.ok(rerolled.candidateSet.every((player) => player.squadId === rerolled.currentSquad.id));
});

test("every draft squad offers at least eleven player choices", () => {
  for (const squad of DRAFT_SQUADS) {
    const count = PLAYER_POOL.filter((player) => player.squadId === squad.id).length;
    assert.ok(count >= 11, `${squad.id} only has ${count} players`);
  }
});

test("draft database covers every ODI World Cup participant from 1983 onward", () => {
  assert.equal(DRAFT_SQUADS.length, 127);
});

test("Bangladesh is represented in every World Cup they qualified for", () => {
  const bangladeshYears = DRAFT_SQUADS.filter((squad) => squad.country === "Bangladesh")
    .map((squad) => squad.year)
    .sort((left, right) => left - right);

  assert.deepEqual(bangladeshYears, [1999, 2003, 2007, 2011, 2015, 2019, 2023]);
});

test("all-rounder status applies to players with both batting and bowling above 50", () => {
  const shakib = PLAYER_POOL.find((player) => player.id === "shakib-al-hasan");
  const ponting = PLAYER_POOL.find((player) => player.id === "ricky-ponting");
  const amarnath = PLAYER_POOL.find((player) => player.id === "mohinder-amarnath");

  assert.equal(isAllRounderPlayer(shakib), true);
  assert.equal(isAllRounderPlayer(ponting), false);
  assert.equal(isAllRounderPlayer(amarnath), true);
});

test("wicketkeeper overrides survive stripped captain and vice-captain markers", () => {
  const quinton = PLAYER_POOL.find((player) => player.id === "south-africa-2019-quinton-de-kock");
  const sarfaraz = PLAYER_POOL.find((player) => player.id === "pakistan-2019-sarfaraz-ahmed");

  assert.equal(quinton.name, "Quinton de Kock");
  assert.equal(quinton.role, "wicketkeeper");
  assert.equal(sarfaraz.name, "Sarfaraz Ahmed");
  assert.equal(sarfaraz.role, "wicketkeeper");
});

test("england generator anomalies are corrected in the player pool", () => {
  const pietersen = PLAYER_POOL.find((player) => player.id === "england-2007-kevin-pietersen");
  const anderson = PLAYER_POOL.find((player) => player.id === "england-2007-james-anderson");
  const strauss = PLAYER_POOL.find((player) => player.id === "england-2007-andrew-strauss");
  const thorpe = PLAYER_POOL.find((player) => player.id === "england-1999-graham-thorpe");

  assert.equal(pietersen.role, "batsman");
  assert.ok(pietersen.batting > pietersen.bowling);
  assert.equal(anderson.role, "bowler");
  assert.ok(anderson.bowling > anderson.batting);
  assert.equal(strauss.role, "batsman");
  assert.equal(thorpe.role, "batsman");
});

test("year-specific benchmark players use different world cup era ratings", () => {
  const tamim2007 = PLAYER_POOL.find((player) => player.id === "bangladesh-2007-tamim-iqbal");
  const tamim2019 = PLAYER_POOL.find((player) => player.id === "tamim-iqbal");
  const shakib2007 = PLAYER_POOL.find((player) => player.id === "bangladesh-2007-shakib-al-hasan");
  const shakib2019 = PLAYER_POOL.find((player) => player.id === "shakib-al-hasan");
  const mushfiqur2007 = PLAYER_POOL.find((player) => player.id === "bangladesh-2007-mushfiqur-rahim");
  const mushfiqur2019 = PLAYER_POOL.find((player) => player.id === "mushfiqur-rahim");
  const kohli2011 = PLAYER_POOL.find((player) => player.id === "virat-kohli");
  const kohli2023 = PLAYER_POOL.find((player) => player.id === "virat-kohli-2023");

  assert.deepEqual(
    [tamim2007.batting, tamim2019.batting, shakib2007.batting, shakib2019.batting],
    [78, 88, 80, 93],
  );
  assert.deepEqual(
    [shakib2007.bowling, shakib2019.bowling, mushfiqur2007.batting, mushfiqur2019.batting],
    [82, 89, 72, 88],
  );
  assert.deepEqual([kohli2011.batting, kohli2023.batting], [87, 96]);
});

test("team metrics reward a balanced all-star XI with strong batting and bowling", () => {
  const team = getTeamMetrics(createLegendXI());

  assert.ok(team.batting >= 84);
  assert.ok(team.bowling >= 87);
  assert.ok(team.allRounders >= 2);
  assert.ok(team.overall >= 93);
});

test("simulateMatch advances a strong XI after a win", () => {
  const baseState = {
    phase: "tournament",
    roster: createLegendXI(),
    currentSquad: null,
    candidateSet: [],
    matchIndex: 0,
    currentOpponent: TOURNAMENT_OPPONENTS[0],
    results: [],
    latestMatch: null,
    champion: false,
    eliminated: false,
  };

  const nextState = simulateMatch(baseState, constantRandom(0.8));

  assert.equal(nextState.results.length, 1);
  assert.equal(nextState.results[0].won, true);
  assert.equal(nextState.results[0].playerBattingCard.length, 11);
  assert.ok(nextState.results[0].playerBowlingCard.length >= 3);
  assert.ok(nextState.results[0].playerBowlingCard.every((entry) => entry.ballsBowled <= 60));
  assert.ok(nextState.results[0].opponentBattingCard.length >= 11);
  assert.ok(nextState.results[0].opponentBowlingCard.length >= 3);
  assert.ok(nextState.results[0].opponentBowlingCard.every((entry) => entry.ballsBowled <= 60));
  assert.equal(nextState.matchIndex, 1);
  assert.equal(nextState.phase, "tournament");
});

test("simulateMatch ends the run when a weak XI loses", () => {
  const baseState = {
    phase: "tournament",
    roster: createWeakXI(),
    currentSquad: null,
    candidateSet: [],
    matchIndex: TOURNAMENT_OPPONENTS.length - 1,
    currentOpponent: TOURNAMENT_OPPONENTS[TOURNAMENT_OPPONENTS.length - 1],
    results: [],
    latestMatch: null,
    champion: false,
    eliminated: false,
  };

  const nextState = simulateMatch(baseState, constantRandom(0.1));

  assert.equal(nextState.phase, "finished");
  assert.equal(nextState.eliminated, true);
  assert.equal(nextState.champion, false);
});

test("match results use runs for defended totals and wickets for successful chases", () => {
  const baseState = {
    phase: "tournament",
    roster: createLegendXI(),
    currentSquad: null,
    candidateSet: [],
    matchIndex: 0,
    currentOpponent: TOURNAMENT_OPPONENTS[0],
    results: [],
    latestMatch: null,
    champion: false,
    eliminated: false,
    difficulty: "international",
  };

  const battingFirstWin = simulateMatch(baseState, constantRandom(0.8)).results[0];
  const chasingWin = simulateMatch(baseState, constantRandom(0.2)).results[0];

  assert.equal(battingFirstWin.battingFirst, "player");
  assert.equal(battingFirstWin.won, true);
  assert.equal(battingFirstWin.marginType, "runs");
  assert.match(battingFirstWin.headline, /by \d+ runs\./);

  assert.equal(chasingWin.battingFirst, "opponent");
  assert.equal(chasingWin.won, true);
  assert.equal(chasingWin.marginType, "wickets");
  assert.match(chasingWin.headline, /by \d+ wickets\./);
});

test("failed chases lose by runs and successful chases against you lose by wickets", () => {
  const baseState = {
    phase: "tournament",
    roster: createWeakXI(),
    currentSquad: null,
    candidateSet: [],
    matchIndex: TOURNAMENT_OPPONENTS.length - 1,
    currentOpponent: TOURNAMENT_OPPONENTS[TOURNAMENT_OPPONENTS.length - 1],
    results: [],
    latestMatch: null,
    champion: false,
    eliminated: false,
    difficulty: "international",
  };

  const failedChase = simulateMatch(baseState, constantRandom(0.2)).results[0];
  const chasedDown = simulateMatch(baseState, constantRandom(0.8)).results[0];

  assert.equal(failedChase.battingFirst, "opponent");
  assert.equal(failedChase.won, false);
  assert.equal(failedChase.marginType, "runs");
  assert.match(failedChase.headline, /by \d+ runs/);

  assert.equal(chasedDown.battingFirst, "player");
  assert.equal(chasedDown.won, false);
  assert.equal(chasedDown.marginType, "wickets");
  assert.match(chasedDown.headline, /with \d+ wickets in hand\./);
});

test("remaining slots reflect the hidden 1-1-1 coverage floor", () => {
  const roster = [
    PLAYER_POOL.find((player) => player.id === "sachin-tendulkar"),
    PLAYER_POOL.find((player) => player.id === "adam-gilchrist"),
    PLAYER_POOL.find((player) => player.id === "wasim-akram"),
  ];

  const remaining = getRemainingSlots(roster);
  assert.deepEqual(remaining, {
    batsman: 0,
    wicketkeeper: 0,
    bowler: 0,
  });
});

test("revealNextOpponent waits until asked and reveals the next stage opponent", () => {
  const tournamentState = {
    phase: "tournament",
    roster: createLegendXI(),
    currentSquad: null,
    candidateSet: [],
    matchIndex: 2,
    currentOpponent: null,
    results: [],
    latestMatch: null,
    champion: false,
    eliminated: false,
  };

  const nextState = revealNextOpponent(tournamentState);

  assert.equal(nextState.currentOpponent.id, TOURNAMENT_OPPONENTS[2].id);
});

test("opponent metrics return rounded batting and bowling averages", () => {
  const metrics = getOpponentMetrics(TOURNAMENT_OPPONENTS[0]);

  assert.deepEqual(metrics, {
    batting: 66,
    bowling: 48,
  });
});

test("completing the draft seeds batting and bowling order state", () => {
  const roster = createLegendXI();
  const state = {
    phase: "tournament",
    roster,
    battingOrder: roster.map((player) => player.id),
    bowlingOrder: roster.filter((player) => player.role !== "wicketkeeper").map((player) => player.id),
    currentSquad: null,
    candidateSet: [],
    matchIndex: 0,
    currentOpponent: null,
    results: [],
    latestMatch: null,
    champion: false,
    eliminated: false,
  };

  assert.equal(getBattingOrderPlayers(state).length, 11);
  assert.ok(getBowlingOrderPlayers(state).length >= 5);
});

test("batting and bowling order can be moved before a match starts", () => {
  const roster = createLegendXI();
  let state = {
    phase: "tournament",
    roster,
    battingOrder: roster.map((player) => player.id),
    bowlingOrder: roster.filter((player) => player.role !== "wicketkeeper").map((player) => player.id),
    currentSquad: null,
    candidateSet: [],
    matchIndex: 0,
    currentOpponent: null,
    results: [],
    latestMatch: null,
    champion: false,
    eliminated: false,
  };

  state = moveBattingOrder(state, roster[1].id, -1);
  state = moveBowlingOrder(state, state.bowlingOrder[1], -1);

  assert.equal(state.battingOrder[0], roster[1].id);
  assert.notEqual(state.bowlingOrder[0], roster.filter((player) => player.role !== "wicketkeeper")[0].id);
});
