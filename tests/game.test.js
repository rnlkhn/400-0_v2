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

function pregameNeedsUserOpeners(pregame) {
  if (!pregame) {
    return false;
  }

  return pregame.pregame.tossWinner === "user"
    ? pregame.pregame.userDecision === "bat"
    : pregame.pregame.userDecision === "bowl";
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

test("county recommendation avoids defaulting to spin too early on hard seam-friendly decks", () => {
  let state = buildCompletedXI("county");
  state = revealNextOpponent(state, constantRandom(0.2));
  state = chooseTossDecision(state, "bowl");
  state = startMatch(state, constantRandom(0.35));

  state.currentMatch.userTeam = [
    { id: "pace-1", name: "New Ball Seamer", batting: 18, bowling: 86, bowlingStyle: "Fast Medium", bowlingHand: "Right" },
    { id: "pace-2", name: "Support Seamer", batting: 17, bowling: 81, bowlingStyle: "Medium Fast", bowlingHand: "Right" },
    { id: "spin-1", name: "Lead Spinner", batting: 20, bowling: 89, bowlingStyle: "Off Break", bowlingHand: "Right" },
  ];

  const innings = state.currentMatch.innings[0];
  innings.balls = 11 * 6;
  innings.conditions = {
    weather: { id: "clear", label: "Clear", batting: 2, seam: -1, swing: -1, spin: 0, chase: 1 },
    surface: { id: "hard", label: "Hard", batting: 1, seam: 1, spin: -1, pace: 4 },
    outfield: { id: "fast", label: "Fast outfield", batting: 3, boundary: 0.03, double: -0.008 },
  };
  innings.bowlingCards = {
    "pace-1": { id: "pace-1", name: "New Ball Seamer", balls: 24, runsConceded: 18, wickets: 1 },
    "pace-2": { id: "pace-2", name: "Support Seamer", balls: 18, runsConceded: 16, wickets: 1 },
    "spin-1": { id: "spin-1", name: "Lead Spinner", balls: 0, runsConceded: 0, wickets: 0 },
  };
  innings.lastBowlerId = "pace-2";
  innings.bowlingRoster = ["pace-1", "pace-2", "spin-1"];
  state.currentMatch.awaiting = { type: "choose-bowler", overNumber: 12 };

  assert.equal(getRecommendedBowler(state), "pace-1");
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

test("first-innings batting confidence opens at the default baseline", () => {
  const state = prepareLiveMatch({ tossRandom: 0.2, userChoice: "bat" });
  const live = getLiveContext(state);

  assert.equal(live.teamConfidence, 40);
});

test("chasing after a 350-plus first innings starts from the lower confidence baseline", () => {
  let state = prepareLiveMatch({ tossRandom: 0.2, userChoice: "bat" });
  const firstInnings = state.currentMatch.innings[0];
  firstInnings.score = 360;
  firstInnings.balls = 300;
  firstInnings.wickets = 3;

  state = simulateInnings(state, constantRandom(0.45));
  const live = getLiveContext(state);

  assert.ok(live);
  assert.equal(live.match.currentInningsIndex, 1);
  assert.equal(live.teamConfidence, 20);
});

test("choosing a bowler advances a defending over and preserves ODI caps", () => {
  let state = buildCompletedXI();
  state = revealNextOpponent(state, constantRandom(0.2));
  state = chooseTossDecision(state, "bowl");
  state = startMatch(state, constantRandom(0.35));
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
  assert.ok(state.latestMatch.manOfTheMatch);
});

test("simulateMatch does not recurse forever when pregame is unresolved", () => {
  let state = buildCompletedXI();
  state = revealNextOpponent(state, constantRandom(0.8));

  const simulated = simulateMatch(state, constantRandom(0.35));

  assert.equal(simulated.phase, "pregame");
  assert.ok(getPregameContext(simulated));
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

test("difficulty reroll allowances follow the mode rules", () => {
  const county = setDifficulty(createInitialState(constantRandom(0.25)), "county");
  const international = setDifficulty(createInitialState(constantRandom(0.25)), "international");
  const legend = setDifficulty(createInitialState(constantRandom(0.25)), "legend");

  assert.equal(county.rerollsRemaining, 3);
  assert.equal(international.rerollsRemaining, 1);
  assert.equal(legend.rerollsRemaining, 0);
});

test("completed matches remain in results as the tournament advances", () => {
  const random = constantRandom(0.41);
  let state = buildCompletedXI();

  state = revealNextOpponent(state, random);
  let pregame = getPregameContext(state);
  if (pregame?.pregame.tossWinner === "user") {
    state = chooseTossDecision(state, "bat");
  }
  pregame = getPregameContext(state);
  if (pregameNeedsUserOpeners(pregame)) {
    state = toggleOpener(state, state.roster[0].id);
    state = toggleOpener(state, state.roster[1].id);
  }
  state = startMatch(state, random);
  state = simulateMatch(state, random);

  assert.equal(state.results.length, 1);
  assert.equal(state.results[0].stage, "Group Stage Match 1");

  state = revealNextOpponent(state, random);
  pregame = getPregameContext(state);
  if (pregame?.pregame.tossWinner === "user") {
    state = chooseTossDecision(state, "bat");
  }
  pregame = getPregameContext(state);
  if (pregameNeedsUserOpeners(pregame)) {
    state = toggleOpener(state, state.roster[0].id);
    state = toggleOpener(state, state.roster[1].id);
  }
  state = startMatch(state, random);
  state = simulateMatch(state, random);

  assert.equal(state.results.length, 2);
  assert.equal(state.results[0].stage, "Group Stage Match 1");
  assert.equal(state.results[1].stage, "Group Stage Match 2");
});

test("opponents do not repeat within a single run", () => {
  const random = constantRandom(0.33);
  let state = buildCompletedXI();
  const seenOpponentIds = new Set();

  for (let index = 0; index < 3; index += 1) {
    state = revealNextOpponent(state, random);
    assert.ok(state.currentOpponent);
    assert.equal(seenOpponentIds.has(state.currentOpponent.id), false);
    seenOpponentIds.add(state.currentOpponent.id);

    let pregame = getPregameContext(state);
    if (pregame?.pregame.tossWinner === "user") {
      state = chooseTossDecision(state, "bat");
    }
    pregame = getPregameContext(state);
    if (pregameNeedsUserOpeners(pregame)) {
      state = toggleOpener(state, state.roster[0].id);
      state = toggleOpener(state, state.roster[1].id);
    }
    state = startMatch(state, random);
    state = simulateMatch(state, random);
  }

  assert.equal(seenOpponentIds.size, 3);
});
