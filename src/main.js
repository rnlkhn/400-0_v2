import {
  ROLE_LABELS,
  TOURNAMENT_OPPONENTS,
  createInitialState,
  draftPlayer,
  getCurrentOpponent,
  getTeamMetrics,
  isAllRounderPlayer,
  revealNextOpponent,
  rerollCandidates,
  simulateMatch,
} from "./game.js";

const appElement = document.querySelector("#app");
const STATS_KEY = "400-0-career";

let state = createInitialState();
let career = loadCareer();

function getPlayerRoleLabel(player) {
  return isAllRounderPlayer(player) ? "All-rounder" : ROLE_LABELS[player.role];
}

function formatBattingEntry(entry) {
  return `${entry.runs} (${entry.balls})`;
}

function formatBowlingEntry(entry) {
  return `${entry.wickets}/${entry.runsConceded} (${formatOvers(entry.ballsBowled)})`;
}

function topThree(entries, key) {
  return [...entries]
    .sort((left, right) => right[key] - left[key] || left.name.localeCompare(right.name))
    .slice(0, 3);
}

function formatOvers(balls) {
  const overs = Math.floor(balls / 6);
  const remainder = balls % 6;
  return remainder === 0 ? `${overs}` : `${overs}.${remainder}`;
}

function loadCareer() {
  const stored = window.localStorage.getItem(STATS_KEY);

  if (!stored) {
    return {
      titles: 0,
      bestFinish: "Draft Room",
      deepestMatch: 0,
    };
  }

  return JSON.parse(stored);
}

function saveCareer() {
  window.localStorage.setItem(STATS_KEY, JSON.stringify(career));
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function updateCareer(nextState) {
  if (nextState.phase !== "finished") {
    return;
  }

  if (nextState.champion) {
    career.titles += 1;
    career.bestFinish = "Champions";
    career.deepestMatch = TOURNAMENT_OPPONENTS.length;
    saveCareer();
    return;
  }

  const deepestMatch = nextState.results.length;
  if (deepestMatch > career.deepestMatch) {
    career.deepestMatch = deepestMatch;
    career.bestFinish = getProgressLabel(nextState);
    saveCareer();
  }
}

function resetRun() {
  state = createInitialState();
  render();
}

function revealDraftSquad() {
  if (state.phase !== "draft" || state.currentSquad) {
    return;
  }

  state = rerollCandidates(state);
  render();
}

function rosterMarkup() {
  if (state.roster.length === 0) {
    return `<p class="empty-copy">Your XI starts empty. Start the draft and build from World Cup history.</p>`;
  }

  return state.roster
    .map((player) => {
      const allRounder = isAllRounderPlayer(player);

      return `
        <article class="roster-card ${allRounder ? "roster-card--allrounder" : ""}">
          <div class="roster-matrix">
            <h3>${escapeHtml(player.name)}</h3>
            <p class="card-role">${escapeHtml(getPlayerRoleLabel(player))}</p>
            <p class="card-meta">${escapeHtml(player.team)} ${player.year}</p>
            <dl class="roster-stats">
              <div><dt>Bat</dt><dd>${player.batting}</dd></div>
              <div><dt>Bowl</dt><dd>${player.bowling}</dd></div>
            </dl>
          </div>
        </article>
      `;
    })
    .join("");
}

function tournamentTotals() {
  return state.results.reduce(
    (totals, match) => ({
      runsScored: totals.runsScored + match.playerRuns,
      wicketsLost: totals.wicketsLost + match.playerWickets,
      runsConceded: totals.runsConceded + match.opponentRuns,
      wicketsTaken: totals.wicketsTaken + match.opponentWickets,
    }),
    {
      runsScored: 0,
      wicketsLost: 0,
      runsConceded: 0,
      wicketsTaken: 0,
    },
  );
}

function tournamentLeaders() {
  const runMap = new Map();
  const wicketMap = new Map();

  for (const match of state.results) {
    for (const batter of match.playerBattingCard || []) {
      const current = runMap.get(batter.id) || { name: batter.name, runs: 0 };
      current.runs += batter.runs;
      runMap.set(batter.id, current);
    }

    for (const bowler of match.playerBowlingCard || []) {
      const current = wicketMap.get(bowler.id) || { name: bowler.name, wickets: 0 };
      current.wickets += bowler.wickets;
      wicketMap.set(bowler.id, current);
    }
  }

  const topRunScorer = [...runMap.values()].sort(
    (left, right) => right.runs - left.runs || left.name.localeCompare(right.name),
  )[0];
  const topWicketTaker = [...wicketMap.values()].sort(
    (left, right) => right.wickets - left.wickets || left.name.localeCompare(right.name),
  )[0];

  return { topRunScorer, topWicketTaker };
}

function inningsScorecardMarkup(match, battingSide, inningsLabel) {
  const isPlayerInnings = battingSide === "player";
  const battingTeam = isPlayerInnings ? "You" : match.opponent.shortName;
  const score = isPlayerInnings ? match.playerScore : match.opponentScore;
  const balls = isPlayerInnings ? match.playerBalls : match.opponentBalls;
  const batters = topThree(
    isPlayerInnings ? match.playerBattingCard || [] : match.opponentBattingCard || [],
    "runs",
  );
  const bowlers = topThree(
    isPlayerInnings ? match.opponentBowlingCard || [] : match.playerBowlingCard || [],
    "wickets",
  );

  const rows = Array.from({ length: Math.max(batters.length, bowlers.length) }, (_, index) => ({
    batter: batters[index],
    bowler: bowlers[index],
  }));

  return `
    <section class="innings-card">
      <div class="innings-card__header">
        <div>
          <p class="innings-team">${escapeHtml(battingTeam)}</p>
          <span class="innings-tag">${escapeHtml(inningsLabel)}</span>
        </div>
        <strong>${escapeHtml(`${score} (${formatOvers(balls)} Overs)`)}</strong>
      </div>
      <div class="innings-card__rows">
        ${rows
          .map(
            ({ batter, bowler }) => `
              <div class="innings-row">
                <div class="innings-entry">
                  ${
                    batter
                      ? `<span>${escapeHtml(batter.name)}</span><strong>${escapeHtml(formatBattingEntry(batter))}</strong>`
                      : '<span></span><strong></strong>'
                  }
                </div>
                <div class="innings-entry innings-entry--bowling">
                  ${
                    bowler
                      ? `<span>${escapeHtml(bowler.name)}</span><strong>${escapeHtml(formatBowlingEntry(bowler))}</strong>`
                      : '<span></span><strong></strong>'
                  }
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function scorecardSummaryMarkup(match) {
  const firstInningsSide = match.battingFirst;
  const secondInningsSide = match.battingFirst === "player" ? "opponent" : "player";

  return `
    <div class="scorecard-summary">
      <h4>Scorecard summary</h4>
      ${inningsScorecardMarkup(match, firstInningsSide, "1st Inn")}
      ${inningsScorecardMarkup(match, secondInningsSide, "2nd Inn")}
    </div>
  `;
}

function candidateMarkup() {
  if (state.phase !== "draft") {
    return `
      <div class="draft-locked">
        <p>Your XI is locked. Time to run the World Cup gauntlet.</p>
      </div>
    `;
  }

  if (!state.currentSquad) {
    return `
      <div class="draft-locked">
        <p>${state.roster.length === 0 ? "Press Start Draft to reveal your first country and year." : "Pick locked in. Press Next Draft to reveal the next country and year."}</p>
      </div>
    `;
  }

  return state.candidateSet
    .map((player) => {
      const allRounder = isAllRounderPlayer(player);

      return `
        <button class="candidate-card ${allRounder ? "candidate-card--allrounder" : ""}" type="button" data-action="draft" data-player-id="${player.id}">
          <div class="candidate-listing">
            <div>
              <h3>${escapeHtml(player.name)}</h3>
              <p class="candidate-ratings">Bat ${player.batting} · Bowl ${player.bowling}</p>
            </div>
            <div class="candidate-listing__meta">
              <span class="candidate-role">${getPlayerRoleLabel(player)}</span>
            </div>
          </div>
        </button>
      `;
    })
    .join("");
}

function scheduleMarkup() {
  return TOURNAMENT_OPPONENTS.map((opponent, index) => {
    const completed = index < state.results.length;
    const active =
      state.currentOpponent &&
      index === state.matchIndex &&
      state.phase !== "draft" &&
      !state.champion;
    const result = state.results[index];
    const label = result
      ? result.opponent.label
      : active
        ? state.currentOpponent.label
        : "Opponent TBD";
    const outcome = result ? (result.won ? "W" : "L") : active ? "Live" : opponent.stage;

    return `
      <li class="schedule-item ${completed ? "schedule-item--done" : ""} ${active ? "schedule-item--active" : ""}">
        <div>
          <p class="schedule-stage">${escapeHtml(opponent.stage)}</p>
          <strong>${escapeHtml(label)}</strong>
        </div>
        <span class="schedule-outcome">${escapeHtml(outcome)}</span>
      </li>
    `;
  }).join("");
}

function resultMarkup() {
  if (state.phase === "finished" && state.results.length > 0) {
    const totals = tournamentTotals();
    const leaders = tournamentLeaders();

    return `
      <article class="match-card match-card--summary">
        <p class="eyebrow">Tournament Summary</p>
        <h3>${state.champion ? "Champions" : "Campaign Over"}</h3>
        <div class="summary-grid">
          <div><span>Runs Scored</span><strong>${totals.runsScored}</strong></div>
          <div><span>Wickets Lost</span><strong>${totals.wicketsLost}</strong></div>
          <div><span>Runs Conceded</span><strong>${totals.runsConceded}</strong></div>
          <div><span>Wickets Taken</span><strong>${totals.wicketsTaken}</strong></div>
        </div>
        <div class="summary-leaders">
          <div>
            <span>Top Run Scorer</span>
            <strong>${leaders.topRunScorer ? `${escapeHtml(leaders.topRunScorer.name)} · ${leaders.topRunScorer.runs}` : "--"}</strong>
          </div>
          <div>
            <span>Top Wicket Taker</span>
            <strong>${leaders.topWicketTaker ? `${escapeHtml(leaders.topWicketTaker.name)} · ${leaders.topWicketTaker.wickets}` : "--"}</strong>
          </div>
        </div>
        <p class="headline">${
          state.champion
            ? "The full run is complete. Your XI held up through every stage."
            : "The tournament ended, but the full scorecard is below for the postmortem."
        }</p>
      </article>
    `;
  }

  if (!state.latestMatch) {
    return `
      <div class="match-card match-card--placeholder">
        <p class="eyebrow">Tournament Desk</p>
        <h3>World Cup run waiting</h3>
        <p>Draft your XI, then sim each match with batting-vs-bowling strength only. Tougher opposition arrives every round.</p>
      </div>
    `;
  }

  return `
    <article class="match-card ${state.latestMatch.won ? "match-card--win" : "match-card--loss"}">
      <p class="eyebrow">${escapeHtml(state.latestMatch.stage)}</p>
      <h3>${escapeHtml(state.latestMatch.opponent.label)}</h3>
      <div class="scoreline">
        <div>
          <span>You</span>
          <strong>${escapeHtml(state.latestMatch.playerScore)}</strong>
        </div>
        <div>
          <span>${escapeHtml(state.latestMatch.opponent.shortName)}</span>
          <strong>${escapeHtml(state.latestMatch.opponentScore)}</strong>
        </div>
      </div>
      <p class="headline">${escapeHtml(state.latestMatch.headline)}</p>
      <p class="performer">Standout: ${escapeHtml(state.latestMatch.performer.name)}</p>
      ${scorecardSummaryMarkup(state.latestMatch)}
    </article>
  `;
}

function resultsHistoryMarkup() {
  if (state.results.length === 0) {
    return "";
  }

  return `
    <section class="surface-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Scorebook</p>
          <h2>Results</h2>
        </div>
      </div>
      <div class="results-list">
        ${state.results
          .map(
            (match) => `
              <article class="result-row">
                <div>
                  <p class="schedule-stage">${escapeHtml(match.stage)}</p>
                  <strong>${escapeHtml(match.opponent.label)}</strong>
                  <p class="candidate-team">${escapeHtml(match.headline)}</p>
                </div>
                <div class="result-scores">
                  <span>You ${escapeHtml(match.playerScore)}</span>
                  <span>${escapeHtml(match.opponent.shortName)} ${escapeHtml(match.opponentScore)}</span>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function actionMarkup() {
  if (state.phase === "draft") {
    const draftLabel = state.roster.length === 0 ? "Start Draft" : "Next Draft";

    return `
      <div class="action-row">
        <button class="action-button" type="button" data-action="reroll">${draftLabel}</button>
        <button class="action-button action-button--ghost" type="button" data-action="reset">New Run</button>
      </div>
    `;
  }

  if (state.phase === "tournament") {
    const opponent = getCurrentOpponent(state);
    if (!opponent) {
      const buttonLabel =
        state.results.length === 0 && state.matchIndex === 0
          ? "Start Tournament"
          : "Proceed to next match";

      return `
        <div class="action-row">
          <button class="action-button" type="button" data-action="reveal-opponent">${escapeHtml(buttonLabel)}</button>
          <button class="action-button action-button--ghost" type="button" data-action="reset">Redraft XI</button>
        </div>
      `;
    }

    return `
      <div class="action-row">
        <button class="action-button" type="button" data-action="simulate">Play match</button>
        <button class="action-button action-button--ghost" type="button" data-action="reset">Redraft XI</button>
      </div>
    `;
  }

  return `
    <div class="action-row">
      <button class="action-button" type="button" data-action="reset">Start Another Run</button>
    </div>
  `;
}

function statusCopy() {
  if (state.phase === "draft") {
    if (!state.currentSquad) {
      const slotsLeft = 11 - state.roster.length;
      if (state.roster.length === 0) {
        return "Press Start Draft to reveal your first country and year.";
      }

      return `Pick made. ${slotsLeft} players left. Press Next Draft to reveal another country and year.`;
    }

    return `${state.currentSquad.label} is live. Pick one player to add to your XI.`;
  }

  if (state.phase === "tournament") {
    const opponent = getCurrentOpponent(state);
    if (!opponent) {
      if (state.results.length === 0 && state.matchIndex === 0) {
        return "Your XI is set. Press Start Tournament to reveal your opening opponent.";
      }
      return state.matchIndex < TOURNAMENT_OPPONENTS.length
        ? "You are through. Press Proceed to next match to reveal your next opponent."
        : "Tournament complete.";
    }
    return `${opponent.stage} is next: ${opponent.label}. ${opponent.note}`;
  }

  if (state.champion) {
    return "You went the distance and lifted the 400-0 World Cup.";
  }

  return "The run is over. Rework the squad balance and go again.";
}

function render() {
  const metrics = getTeamMetrics(state.roster);
  const showTournamentPanels = state.phase !== "draft" || state.results.length > 0;

  appElement.innerHTML = `
    <section class="shell">
      <header class="hero">
        <div class="hero__copy">
          <p class="eyebrow eyebrow--live">ODI World Cup Draft Game</p>
          <h1>400<span>-</span>0</h1>
          <p class="hero__lede">Draw from iconic World Cup squads, draft an all-time XI, and survive a knockout climb that gets harsher every round.</p>
        </div>
        <div class="career-board">
          <div class="stat-tile">
            <span>Titles</span>
            <strong>${career.titles}</strong>
          </div>
          <div class="stat-tile">
            <span>Best Finish</span>
            <strong>${escapeHtml(career.bestFinish)}</strong>
          </div>
          <div class="stat-tile">
            <span>Team Rating</span>
            <strong>${metrics.overall || "--"}</strong>
          </div>
        </div>
      </header>

      <section class="status-panel">
        <p>${escapeHtml(statusCopy())}</p>
        ${actionMarkup()}
      </section>

      <section class="dashboard">
        <div class="dashboard__main">
          <section class="surface-card surface-card--pitch">
            <div class="section-heading">
              <div>
                <p class="eyebrow">Squad Wheel</p>
                <h2>${state.currentSquad ? escapeHtml(state.currentSquad.label) : "Build your XI"}</h2>
                ${
                  state.currentSquad
                    ? `<p class="squad-note">${escapeHtml(state.currentSquad.note)}</p>`
                    : ""
                }
              </div>
            </div>
            <div class="candidate-grid">${candidateMarkup()}</div>
          </section>

          ${showTournamentPanels ? resultMarkup() : ""}
          ${showTournamentPanels ? resultsHistoryMarkup() : ""}
        </div>

        <aside class="dashboard__side">
          <section class="surface-card surface-card--sheet">
            <div class="section-heading">
              <div>
                <p class="eyebrow">Squad Sheet</p>
                <h2>${state.roster.length}/11 picked</h2>
              </div>
              <div class="mini-metrics">
                <span>Bat ${metrics.batting || "--"}</span>
                <span>Bowl ${metrics.bowling || "--"}</span>
              </div>
            </div>
            <div class="roster-list">${rosterMarkup()}</div>
          </section>
        </aside>
      </section>
    </section>
  `;
}

appElement.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) {
    return;
  }

  const action = target.dataset.action;

  if (action === "draft") {
    state = draftPlayer(state, target.dataset.playerId);
    render();
    return;
  }

  if (action === "reroll") {
    revealDraftSquad();
    return;
  }

  if (action === "reveal-opponent") {
    state = revealNextOpponent(state);
    render();
    return;
  }

  if (action === "simulate") {
    state = simulateMatch(state);
    updateCareer(state);
    render();
    return;
  }

  if (action === "reset") {
    resetRun();
  }
});

render();
