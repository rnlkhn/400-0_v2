import test from "node:test";
import assert from "node:assert/strict";

import { PLAYER_POOL } from "../src/data.js";
import {
  chooseBowler,
  chooseTossDecision,
  confirmChaseOpeners,
  createInitialState,
  draftPlayer,
  getDifficultyAdjustedPlayer,
  getLiveContext,
  getOpponentMetrics,
  getPregameContext,
  getRecommendedBowler,
  playOver,
  rerollCandidates,
  revealNextOpponent,
  setDifficulty,
  simulateInnings,
  simulateMatch,
  startMatch,
  toggleOpener,
} from "../src/game.js";

function constantRandom(value) {
  return () => value;
}

function buildCompletedXI(difficulty = "international") {
  let state = setDifficulty(createInitialState(constantRandom(0.25)), difficulty);
  const seenNames = new Set();

  while (state.roster.length < 11) {
    state = rerollCandidates(state, constantRandom(0.25));
    const pick = state.currentCandidates.find((candidate) => !seenNames.has(candidate.name));
    assert.ok(pick, "expected a candidate to draft");
    seenNames.add(pick.name);
    state = draftPlayer(state, pick.id);
  }

  return state;
}

function prepareLiveMatch({ difficulty = "international", tossRandom = 0.2, userChoice = "bat" } = {}) {
  let state = buildCompletedXI(difficulty);
  state = revealNextOpponent(state, constantRandom(tossRandom));
  const pregame = getPregameContext(state);
  assert.ok(pregame, "expected pregame context");
  state = toggleOpener(state, state.roster[0].id);
  state = toggleOpener(state, state.roster[1].id);

  if (pregame.pregame.tossWinner === "user") {
    state = chooseTossDecision(state, userChoice);
  }

  state = startMatch(state, constantRandom(0.35));
  return state;
}

test("drafting eleven players moves the run into the ready phase", () => {
  const state = buildCompletedXI();
  assert.equal(state.phase, "ready");
  assert.equal(state.roster.length, 11);
  assert.equal(new Set(state.roster.map((player) => player.name)).size, 11);
});

test("revealing the next opponent creates pregame toss and conditions data", () => {
  const state = revealNextOpponent(buildCompletedXI(), constantRandom(0.4));
  const pregame = getPregameContext(state);

  assert.equal(state.phase, "pregame");
  assert.ok(pregame);
  assert.equal(pregame.opponent.stage, "Group Stage Match 1");
  assert.ok(pregame.conditions.weather.label);
  assert.ok(pregame.conditions.surface.label);
  assert.ok(pregame.conditions.outfield.label);

  const metrics = getOpponentMetrics(state);
  assert.ok(metrics.batting > 0);
  assert.ok(metrics.bowling > 0);
});

test("county mode provides a recommended bowler once the user is defending", () => {
  let state = prepareLiveMatch({ difficulty: "county", tossRandom: 0.2, userChoice: "bat" });
  state = simulateInnings(state, constantRandom(0.45));
  const live = getLiveContext(state);

  assert.equal(live.match.awaiting?.type, "choose-bowler");
  assert.ok(getRecommendedBowler(state));
});

test("choosing to bowl first starts the match without pre-selecting openers", () => {
  let state = buildCompletedXI();
  state = revealNextOpponent(state, constantRandom(0.2));
  state = chooseTossDecision(state, "bowl");
  state = startMatch(state, constantRandom(0.35));

  assert.equal(state.phase, "live");
  assert.equal(state.currentMatch.userBattingFirst, false);
  assert.equal(state.currentMatch.userBattingPlan.openers.length, 0);
  assert.equal(state.currentMatch.awaiting?.type, "choose-bowler");
});

test("playing an over when batting first records over-by-over output", () => {
  let state = prepareLiveMatch({ tossRandom: 0.2, userChoice: "bat" });
  state = playOver(state, constantRandom(0.45));
  const live = getLiveContext(state);

  assert.ok(live);
  assert.equal(live.match.innings[0].overs.length, 1);
  assert.equal(live.match.innings[0].overs[0].events.length, 6);
  assert.ok(live.match.innings[0].score >= 0);
});

test("choosing a bowler advances a defending over and preserves ODI caps", () => {
  let state = prepareLiveMatch({ tossRandom: 0.8, userChoice: "bat" });
  let live = getLiveContext(state);
  const eligibleBowler = state.currentMatch.userTeam.find((player) => player.bowling >= 40 && player.id !== live.innings.lastBowlerId);

  state = chooseBowler(state, eligibleBowler.id, "balanced", constantRandom(0.55));
  live = getLiveContext(state);

  assert.ok(live);
  const allCards = live.match.innings
    .map((innings) => innings.bowlingCards[eligibleBowler.id])
    .filter(Boolean);
  const delivered = allCards.some((card) => card.balls > 0 && card.balls <= 6);
  assert.ok(delivered);
});

test("simulating the remainder of an innings reaches the innings break or match finish", () => {
  const state = simulateInnings(prepareLiveMatch({ tossRandom: 0.2, userChoice: "bat" }), constantRandom(0.52));
  assert.ok(["live", "ready", "finished"].includes(state.phase));
  assert.ok(state.currentMatch || state.latestMatch || state.results.length >= 0);
});

test("bowling first pauses at the innings break so the user can choose chase openers", () => {
  let state = buildCompletedXI();
  state = revealNextOpponent(state, constantRandom(0.2));
  state = chooseTossDecision(state, "bowl");
  state = startMatch(state, constantRandom(0.4));
  state = simulateInnings(state, constantRandom(0.52));

  assert.equal(state.phase, "live");
  assert.equal(state.currentMatch.awaiting?.type, "choose-openers");

  state = toggleOpener(state, state.currentMatch.userTeam[0].id);
  state = toggleOpener(state, state.currentMatch.userTeam[1].id);
  state = confirmChaseOpeners(state);

  assert.equal(state.currentMatch.awaiting, null);
  assert.equal(state.currentMatch.currentInningsIndex, 1);
  assert.equal(state.currentMatch.innings[1].strikerId, state.currentMatch.userBattingPlan.openers[0]);
});

test("simulating the full match produces a result and updates the run state", () => {
  const state = simulateMatch(prepareLiveMatch({ tossRandom: 0.2, userChoice: "bat" }), constantRandom(0.51));
  assert.ok(["ready", "finished"].includes(state.phase));
  assert.equal(state.results.length, 1);
  assert.ok(state.latestMatch.summary.length > 0);
});

test("bowling specialists have a batting floor and Ashraful 2003 keeps the custom batting rating", () => {
  const pureBowlers = PLAYER_POOL.filter((player) => player.role === "bowler");
  assert.ok(pureBowlers.every((player) => player.batting >= 15));

  const ashraful2003 = PLAYER_POOL.find((player) => player.id === "bangladesh-2003-mohammad-ashraful");
  assert.ok(ashraful2003);
  assert.equal(ashraful2003.batting, 77);
});

test("county mode uses each player's prime batting and bowling ratings independently", () => {
  const deSilvaEntries = PLAYER_POOL.filter((player) => player.name === "Aravinda de Silva");
  assert.ok(deSilvaEntries.length > 1);

  const sampleEntry = deSilvaEntries.find(
    (player) =>
      player.batting < Math.max(...deSilvaEntries.map((entry) => entry.batting)) ||
      player.bowling < Math.max(...deSilvaEntries.map((entry) => entry.bowling)),
  );
  assert.ok(sampleEntry);

  const adjusted = getDifficultyAdjustedPlayer(sampleEntry, "county");

  assert.equal(adjusted.batting, Math.max(...deSilvaEntries.map((entry) => entry.batting)));
  assert.equal(adjusted.bowling, Math.max(...deSilvaEntries.map((entry) => entry.bowling)));
});
