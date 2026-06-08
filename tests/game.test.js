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

test("team metrics reward a balanced all-star XI with strong batting and bowling", () => {
  const team = getTeamMetrics(createLegendXI());

  assert.ok(team.batting >= 86);
  assert.ok(team.bowling >= 89);
  assert.ok(team.allRounders >= 2);
  assert.ok(team.overall >= 94);
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
  const weakRoster = [
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

  const baseState = {
    phase: "tournament",
    roster: weakRoster,
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
    batting: 69,
    bowling: 55,
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
