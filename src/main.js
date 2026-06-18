import {
  DIFFICULTY_LEVELS,
  TOURNAMENT_OPPONENTS,
  chooseBowler,
  chooseNextBatter,
  chooseTossDecision,
  confirmChaseOpeners,
  createInitialState,
  draftPlayer,
  formatOvers,
  getCurrentOpponent,
  getDifficultyAdjustedPlayer,
  getDisplayRoster,
  getLiveContext,
  getOpponentMetrics,
  getPlayerOfTheTournament,
  getPregameContext,
  getProgressLabel,
  getRecommendedBowler,
  getTeamMetrics,
  isAllRounderPlayer,
  playOver,
  rerollCandidates,
  revealNextOpponent,
  setDifficulty,
  simulateInnings,
  simulateMatch,
  startMatch,
  toggleOpener,
} from "./game.js";

const appElement = document.querySelector("#app");
let state = createInitialState();
let selectedBowlerId = null;

function currentDifficulty() {
  return DIFFICULTY_LEVELS.find((level) => level.id === state.difficulty) || DIFFICULTY_LEVELS[1];
}

function ratingsAreHidden() {
  return currentDifficulty().hideRatings;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function cleanPlayerName(name) {
  const flagTokens = new Set(["c", "captain", "vc", "vice captain", "vice-captain", "wk"]);

  return name
    .replace(/\(([^)]+)\)/g, (match, contents) => {
      const tokens = contents
        .toLowerCase()
        .replace(/\band\b/g, "&")
        .split(/[,/&]+/)
        .map((token) => token.trim().replace(/\s+/g, " "))
        .filter(Boolean);

      return tokens.length > 0 && tokens.every((token) => flagTokens.has(token)) ? "" : match;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function formatBattingHand(player) {
  if (player.battingHand === "Left") {
    return "LHB";
  }
  if (player.battingHand === "Right") {
    return "RHB";
  }
  return "";
}

function formatBowlingStyle(player) {
  if (player.role === "wicketkeeper") {
    return "None";
  }

  if (!player.bowlingStyle || player.bowlingStyle === "Unspecified") {
    return "None";
  }

  return player.bowlingHand ? `${player.bowlingHand} Arm ${player.bowlingStyle}` : player.bowlingStyle;
}

function getPlayerRoleLabel(player) {
  if (isAllRounderPlayer(player)) {
    if (player.batting - player.bowling >= 15) {
      return "Batting AR";
    }
    if (player.bowling - player.batting >= 15) {
      return "Bowling AR";
    }
    return "All-rounder";
  }
  if (player.role === "wicketkeeper") {
    return "WK";
  }
  return player.role === "batsman" ? "Batsman" : "Bowler";
}

function formatConditions(conditions) {
  return `${conditions.weather.label} · ${conditions.surface.label} · ${conditions.outfield.label}`;
}

function formatTossDecision(decision) {
  return decision === "bowl" ? "field first" : "bat first";
}

function userBatsFirstFromPregame(pregame) {
  return pregame.tossWinner === "user" ? pregame.userDecision === "bat" : pregame.userDecision === "bowl";
}

function getStatusMessage() {
  if (state.phase === "draft") {
    return "";
  }

  if (state.phase === "pregame") {
    const context = getPregameContext(state);
    if (!context?.pregame.userDecision) {
      return "The opponent and conditions are set. Lock the toss call in, then choose openers only if you are batting first.";
    }

    return userBatsFirstFromPregame(context.pregame)
      ? "The toss is settled. Pick your two openers, then start the innings."
      : "The toss is settled. Because you are bowling first, the match can begin straight away.";
  }

  if (state.phase === "live") {
    return "You are in the live match. Use manual over control or sim the rest when you want to move faster.";
  }

  if (state.phase === "finished" && state.finishedView === "summary") {
    return "The tournament is wrapped. Use the summary to review the leading batting and bowling performers before starting the next campaign.";
  }

  if (state.champion) {
    return "You went the distance and lifted the Cricket World Cup.";
  }

  if (state.eliminated) {
    return "The run is over, but the scorebook is still there for the postmortem.";
  }

  return "The XI is ready. Step into the next match when you’re set.";
}

function formatRatings(player) {
  return `Bat ${Math.round(player.batting)} · Bowl ${Math.round(player.bowling)}`;
}

function formatScore(runs, wickets) {
  return wickets >= 10 ? `${runs}` : `${runs}/${wickets}`;
}

function formatBattingEntry(entry) {
  return `${entry.runs} (${entry.balls})`;
}

function formatBatterName(entry) {
  return `${cleanPlayerName(entry.name)}${entry.notOut ? "*" : ""}`;
}

function formatBowlingEntry(entry) {
  return `${entry.wickets}/${entry.runsConceded} (${formatOvers(entry.balls)})`;
}

function formatSettled(level) {
  return `${Math.round(level || 0)}`;
}

function formatLiveState(level) {
  return `${Math.round(level || 0)}`;
}

function topThree(entries, key, secondaryKey) {
  return [...entries]
    .sort((left, right) => right[key] - left[key] || left[secondaryKey] - right[secondaryKey])
    .slice(0, 3);
}

function compareDraftCandidates(left, right) {
  const leftRank = getDraftRoleRank(left);
  const rightRank = getDraftRoleRank(right);
  if (leftRank !== rightRank) {
    return leftRank - rightRank;
  }

  if (leftRank === 3) {
    return right.bowling - left.bowling || right.batting - left.batting;
  }

  return right.batting - left.batting || right.bowling - left.bowling;
}

function getDraftRoleRank(player) {
  if (player.role === "batsman") {
    return 0;
  }
  if (player.role === "wicketkeeper") {
    return 1;
  }
  if (isAllRounderPlayer(player)) {
    return 2;
  }
  return 3;
}

function compareByBattingDesc(left, right) {
  return (
    right.batting - left.batting ||
    right.bowling - left.bowling ||
    cleanPlayerName(left.name).localeCompare(cleanPlayerName(right.name))
  );
}

function compareByBowlingDesc(left, right) {
  return (
    right.bowling - left.bowling ||
    right.batting - left.batting ||
    cleanPlayerName(left.name).localeCompare(cleanPlayerName(right.name))
  );
}

function buildDisplayRosterById(roster) {
  return new Map(getDisplayRoster(roster, state.difficulty).map((player) => [player.id, player]));
}

function getLiveBattingEntries(innings) {
  const activeIds = new Set([innings.strikerId, innings.nonStrikerId].filter(Boolean));

  return innings.teamRoster
    .map((playerId) => innings.battingCards[playerId])
    .filter((entry) => entry && (entry.balls > 0 || entry.out || activeIds.has(entry.id)));
}

function getLiveBowlingEntries(innings) {
  return innings.bowlingRoster
    .map((playerId) => innings.bowlingCards[playerId])
    .filter((entry) => entry && entry.balls > 0)
    .sort((left, right) => right.wickets - left.wickets || right.balls - left.balls || left.runsConceded - right.runsConceded);
}

function buildTournamentSummary(results) {
  const overallBatting = new Map();
  const overallBowling = new Map();
  const playerOfTheTournament = getPlayerOfTheTournament(results);

  function upsertBatting(store, entry) {
    const current = store.get(entry.name) || {
      name: entry.name,
      runs: 0,
      balls: 0,
      fours: 0,
      sixes: 0,
      innings: 0,
      notOuts: 0,
      best: 0,
    };
    current.runs += entry.runs;
    current.balls += entry.balls;
    current.fours += entry.fours || 0;
    current.sixes += entry.sixes || 0;
    current.innings += 1;
    current.notOuts += entry.notOut ? 1 : 0;
    current.best = Math.max(current.best, entry.runs);
    store.set(entry.name, current);
  }

  function upsertBowling(store, entry) {
    const current = store.get(entry.name) || {
      name: entry.name,
      wickets: 0,
      runsConceded: 0,
      balls: 0,
      innings: 0,
      bestWickets: 0,
      bestRuns: Infinity,
    };
    current.wickets += entry.wickets;
    current.runsConceded += entry.runsConceded;
    current.balls += entry.balls;
    current.innings += 1;
    if (
      entry.wickets > current.bestWickets ||
      (entry.wickets === current.bestWickets && entry.runsConceded < current.bestRuns)
    ) {
      current.bestWickets = entry.wickets;
      current.bestRuns = entry.runsConceded;
    }
    store.set(entry.name, current);
  }

  for (const result of results) {
    for (const innings of result.innings || []) {
      const battingEntries = Object.values(innings.battingCards || {}).filter((entry) => entry.balls > 0);
      const bowlingEntries = Object.values(innings.bowlingCards || {}).filter((entry) => entry.balls > 0);

      battingEntries.forEach((entry) => {
        upsertBatting(overallBatting, entry);
      });

      bowlingEntries.forEach((entry) => {
        upsertBowling(overallBowling, entry);
      });
    }
  }

  const sortBatting = (store) =>
    [...store.values()]
      .sort((left, right) => right.runs - left.runs || left.balls - right.balls)
      .slice(0, 5);
  const sortBowling = (store) =>
    [...store.values()]
      .sort((left, right) => right.wickets - left.wickets || left.runsConceded - right.runsConceded)
      .slice(0, 5);

  return {
    overallBatting: sortBatting(overallBatting),
    overallBowling: sortBowling(overallBowling),
    playerOfTheTournament,
  };
}

function battingLineMarkup(entry) {
  const strikeRate = entry.balls ? round((entry.runs * 100) / entry.balls) : 0;
  return `
    <article class="summary-card">
      <span class="summary-card__eyebrow">${escapeHtml(cleanPlayerName(entry.name))}</span>
      <strong class="summary-card__headline">${entry.runs}</strong>
      <div class="summary-card__substats">
        <span>Balls ${entry.balls || 0}</span>
        <span>6s ${entry.sixes || 0}</span>
        <span>4s ${entry.fours || 0}</span>
        <span>SR ${strikeRate}</span>
      </div>
    </article>
  `;
}

function bowlingLineMarkup(entry) {
  const economy = entry.balls ? round((entry.runsConceded * 6) / entry.balls) : 0;
  const strikeRate = entry.wickets ? round(entry.balls / entry.wickets) : "—";
  return `
    <article class="summary-card">
      <span class="summary-card__eyebrow">${escapeHtml(cleanPlayerName(entry.name))}</span>
      <strong class="summary-card__headline">${entry.wickets}</strong>
      <div class="summary-card__substats">
        <span>Overs ${formatOvers(entry.balls || 0)}</span>
        <span>Econ ${economy}</span>
        <span>SR ${strikeRate}</span>
      </div>
    </article>
  `;
}

function playerPreferenceRowsMarkup(player) {
  const battingPreferences = [formatBattingHand(player), player.battingStyle || player.aggressionLevel || "Balanced"]
    .filter(Boolean)
    .join(" · ");
  const bowlingPreferences = formatBowlingStyle(player);

  return `
    <div class="card-preferences">
      <p class="card-preference-row"><strong>Batting Preferences:</strong> ${escapeHtml(battingPreferences)}</p>
      <p class="card-preference-row"><strong>Bowling Preferences:</strong> ${escapeHtml(bowlingPreferences)}</p>
    </div>
  `;
}

function rosterMarkup() {
  if (!state.roster.length) {
    return `<p class="empty-copy">Draft an XI from World Cup history. You will set the openers and run the innings over by over.</p>`;
  }

  const displayRoster = getDisplayRoster(state.roster, state.difficulty);

  return displayRoster
    .map((player) => {
      const ratingsMarkup = ratingsAreHidden()
        ? ""
        : `
          <dl class="roster-stats">
            <div><dt>Bat</dt><dd>${Math.round(player.batting)}</dd></div>
            <div><dt>Bowl</dt><dd>${Math.round(player.bowling)}</dd></div>
          </dl>
        `;

      return `
        <article class="roster-card ${isAllRounderPlayer(player) ? "roster-card--allrounder" : ""}">
          <div class="roster-matrix">
            <h3>${escapeHtml(cleanPlayerName(player.name))}</h3>
            <p class="card-meta">${escapeHtml(player.team)} ${player.year}</p>
            ${playerPreferenceRowsMarkup(player)}
            ${ratingsMarkup}
          </div>
          <p class="card-role">${escapeHtml(getPlayerRoleLabel(player))}</p>
        </article>
      `;
    })
    .join("");
}

function difficultyMarkup() {
  if (state.phase !== "draft" || state.roster.length > 0 || state.currentSquad) {
    return "";
  }

  return `
    <section class="surface-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Mode</p>
          <h2>Pick your difficulty</h2>
          <p class="squad-note">The easiest mode gives you prime ratings and bowling recommendations. Legend hides ratings.</p>
        </div>
      </div>
      <div class="difficulty-grid">
        ${DIFFICULTY_LEVELS.map((level) => `
          <button
            class="difficulty-card ${state.difficulty === level.id ? "difficulty-card--active" : ""}"
            type="button"
            data-action="difficulty"
            data-difficulty="${level.id}"
          >
            <strong>${escapeHtml(level.label)}</strong>
            <span>${escapeHtml(level.description)}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function draftBoardMarkup() {
  if (!state.currentSquad) {
    return "";
  }

  const candidates = [...getDisplayRoster(state.currentCandidates, state.difficulty)].sort(compareDraftCandidates);

  return `
    <section class="surface-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Draft Board</p>
          <h2>${escapeHtml(state.currentSquad.label)}</h2>
          <p class="squad-note">${escapeHtml(state.currentSquad.note)}</p>
        </div>
      </div>
      <div class="candidate-list">
        ${candidates
          .map((player) => `
            <button
              class="candidate-card ${isAllRounderPlayer(player) ? "candidate-card--allrounder" : ""}"
              type="button"
              data-action="draft"
              data-player-id="${player.id}"
            >
              <div class="candidate-listing">
                <div class="candidate-card__copy">
                  <h3>${escapeHtml(cleanPlayerName(player.name))}</h3>
                  ${playerPreferenceRowsMarkup(player)}
                  ${ratingsAreHidden() ? "" : `<p class="candidate-team">${escapeHtml(formatRatings(player))}</p>`}
                </div>
                <div class="candidate-listing__meta">
                  <span class="candidate-role">${escapeHtml(getPlayerRoleLabel(player))}</span>
                </div>
              </div>
            </button>
          `)
          .join("")}
      </div>
    </section>
  `;
}

function squadSheetMarkup() {
  const displayRoster = getDisplayRoster(state.roster, state.difficulty);
  const metrics = state.roster.length === 11 ? getTeamMetrics(displayRoster) : null;

  return `
    <section class="surface-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Squad Sheet</p>
          <h2>${state.roster.length}/11 picked</h2>
        </div>
      </div>
      ${
        metrics
          ? `
            <div class="mini-metrics">
              <span>Batting <strong>${Math.round(metrics.batting)}</strong></span>
              <span>Bowling <strong>${Math.round(metrics.bowling)}</strong></span>
            </div>
          `
          : ""
      }
      <div class="roster-list ${metrics ? "roster-list--with-metrics" : ""}">
        ${rosterMarkup()}
      </div>
    </section>
  `;
}

function actionMarkup() {
  if (state.phase === "draft") {
    const draftStarted = state.roster.length > 0 || state.usedSquadIds.length > 0 || Boolean(state.currentSquad);
    const canRerollCurrent = Boolean(state.currentSquad) && state.rerollsRemaining > 0;
    return `
      <div class="action-row">
        ${state.currentSquad ? "" : `<button class="action-button" type="button" data-action="reroll">${draftStarted ? "Next Pick" : "Start Draft"}</button>`}
        ${canRerollCurrent ? `<button class="action-button action-button--ghost" type="button" data-action="reroll-current">Re-roll (${state.rerollsRemaining})</button>` : ""}
        <button class="action-button action-button--ghost" type="button" data-action="reset">New Run</button>
      </div>
    `;
  }

  if (state.phase === "ready") {
    const nextLabel = state.matchIndex === 0 ? "Start Tournament" : `Proceed to ${escapeHtml(TOURNAMENT_OPPONENTS[state.matchIndex].stage)}`;
    return `
      <div class="action-row">
        <button class="action-button" type="button" data-action="reveal-opponent">${nextLabel}</button>
        <button class="action-button action-button--ghost" type="button" data-action="reset">Redraft XI</button>
      </div>
    `;
  }

  if (state.phase === "pregame") {
    const context = getPregameContext(state);
    const userBatsFirst = context ? userBatsFirstFromPregame(context.pregame) : false;
    const ready = Boolean(context?.pregame.userDecision) && (!userBatsFirst || context?.pregame.openers.length === 2);
    return `
      <div class="action-row">
        <button class="action-button" type="button" data-action="start-match" ${ready ? "" : "disabled"}>Start Match</button>
        <button class="action-button action-button--ghost" type="button" data-action="reset">Redraft XI</button>
      </div>
    `;
  }

  if (state.phase === "live") {
    const live = getLiveContext(state);
    if (live?.match.awaiting?.type === "choose-openers") {
      return `
        <div class="action-row">
          <button class="action-button" type="button" data-action="confirm-openers" ${live.match.userBattingPlan.openers.length === 2 ? "" : "disabled"}>Start Chase</button>
          <button class="action-button action-button--ghost" type="button" data-action="sim-innings">Sim Innings</button>
          <button class="action-button action-button--ghost" type="button" data-action="sim-match">Sim Match</button>
        </div>
      `;
    }

    if (live?.match.awaiting?.type === "choose-bowler" || live?.match.awaiting?.type === "choose-next-batter") {
      return `
        <div class="action-row">
          <button class="action-button action-button--ghost" type="button" data-action="sim-innings">Sim Innings</button>
          <button class="action-button action-button--ghost" type="button" data-action="sim-match">Sim Match</button>
        </div>
      `;
    }

    return `
      <div class="action-row">
        <button class="action-button" type="button" data-action="play-over">Play Over</button>
        <button class="action-button action-button--ghost" type="button" data-action="sim-innings">Sim Innings</button>
        <button class="action-button action-button--ghost" type="button" data-action="sim-match">Sim Match</button>
      </div>
    `;
  }

  if (state.phase === "finished" && state.finishedView === "summary") {
    return `
      <div class="action-row">
        <button class="action-button" type="button" data-action="reset">Start Another Tournament</button>
      </div>
    `;
  }

  if (state.phase === "finished") {
    return `
      <div class="action-row">
        <button class="action-button" type="button" data-action="show-summary">Tournament Summary</button>
      </div>
    `;
  }

  return `
    <div class="action-row">
      <button class="action-button" type="button" data-action="reset">Start Another Tournament</button>
    </div>
  `;
}

function pregameSetupMarkup() {
  const context = getPregameContext(state);
  if (!context) {
    return "";
  }

  const difficultyRoster = [...getDisplayRoster(state.roster, state.difficulty)].sort(compareByBattingDesc);
  const opponentMetrics = getOpponentMetrics(state);
  const tossDecided = Boolean(context.pregame.userDecision);
  const userBatsFirst = tossDecided ? userBatsFirstFromPregame(context.pregame) : false;

  return `
    <section class="match-card">
      <p class="eyebrow">${escapeHtml(context.opponent.stage)}</p>
      <p class="scorecard-conditions">Conditions: ${escapeHtml(formatConditions(context.conditions))}</p>
      <h3>${escapeHtml(context.opponent.label)}</h3>
      <p>${escapeHtml(context.opponent.note)}</p>
      <div class="mini-metrics">
        <span>Batting <strong>${Math.round(opponentMetrics.batting)}</strong></span>
        <span>Bowling <strong>${Math.round(opponentMetrics.bowling)}</strong></span>
      </div>
      <div class="pregame-grid">
        <article class="surface-card surface-card--inner">
          <p class="eyebrow">Toss</p>
          <h3>${context.pregame.tossWinner === "user" ? "You won the toss" : `${context.opponent.shortName} won the toss`}</h3>
          <p>
            ${
              context.pregame.tossWinner === "user"
                ? context.pregame.userDecision
                  ? `You won the toss and decided to ${formatTossDecision(context.pregame.userDecision)}.`
                  : "Pick whether to bat or field first."
                : `${context.opponent.shortName} won the toss and decided to ${formatTossDecision(context.pregame.userDecision)}.`
            }
          </p>
          ${
            context.pregame.tossWinner === "user" && !context.pregame.userDecision
              ? `
                <div class="action-row">
                  <button class="action-button ${context.pregame.userDecision === "bat" ? "action-button--active" : ""}" type="button" data-action="toss" data-choice="bat">Bat first</button>
                  <button class="action-button ${context.pregame.userDecision === "bowl" ? "action-button--active" : ""}" type="button" data-action="toss" data-choice="bowl">Bowl first</button>
                </div>
              `
              : ""
          }
        </article>
        <article class="surface-card surface-card--inner">
          <p class="eyebrow">Openers</p>
          <h3>${!tossDecided ? "Choose the toss call first" : userBatsFirst ? "Select your pair" : "Await the chase"}</h3>
          ${
            !tossDecided
              ? `<p>Once the toss decision is locked in, this panel will switch to the correct innings setup.</p>`
              : userBatsFirst
              ? `
                <p>${context.pregame.openers.length}/2 locked in. These two will start your innings.</p>
                <div class="selection-grid">
                  ${difficultyRoster
                    .map((player) => `
                      <button
                        class="selection-pill ${context.pregame.openers.includes(player.id) ? "selection-pill--active" : ""}"
                        type="button"
                        data-action="toggle-opener"
                        data-player-id="${player.id}"
                      >
                        <span>
                          <strong>${escapeHtml(cleanPlayerName(player.name))}</strong>
                          <small>${escapeHtml(getPlayerRoleLabel(player))}${ratingsAreHidden() ? "" : ` · ${escapeHtml(formatRatings(player))}`}</small>
                        </span>
                        <strong>${escapeHtml(formatBattingHand(player) || "")} · ${escapeHtml(player.battingStyle || player.aggressionLevel || "Balanced")}</strong>
                      </button>
                    `)
                    .join("")}
                </div>
              `
              : `
                <p>Because you are bowling first, your openers will be chosen at the innings break before the chase begins.</p>
              `
          }
        </article>
      </div>
    </section>
  `;
}

function inningsCardMarkup(innings, label) {
  const batters = topThree(
    Object.values(innings.battingCards).filter((entry) => entry.balls > 0),
    "runs",
    "balls",
  );
  const bowlers = topThree(
    Object.values(innings.bowlingCards).filter((entry) => entry.balls > 0),
    "wickets",
    "runsConceded",
  );

  return `
    <article class="innings-card">
      <div class="innings-card__header">
        <div>
          <span class="schedule-stage">${escapeHtml(label)}</span>
          <strong>${escapeHtml(innings.battingLabel)}</strong>
        </div>
        <div class="innings-card__score">${escapeHtml(formatScore(innings.score, innings.wickets))} <span>(${formatOvers(innings.balls)} overs)</span></div>
      </div>
      <div class="innings-columns">
        <div class="innings-column">
          ${batters
            .map((entry) => `
              <div class="innings-row">
                <span>${escapeHtml(formatBatterName(entry))}</span>
                <strong>${escapeHtml(formatBattingEntry(entry))}</strong>
              </div>
            `)
            .join("")}
        </div>
        <div class="innings-column">
          ${bowlers
            .map((entry) => `
              <div class="innings-row">
                <span>${escapeHtml(cleanPlayerName(entry.name))}</span>
                <strong>${escapeHtml(formatBowlingEntry(entry))}</strong>
              </div>
            `)
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function currentInningsSnapshotMarkup(innings, label) {
  const activeIds = new Set([innings.strikerId, innings.nonStrikerId].filter(Boolean));
  const batters = [...Object.values(innings.battingCards).filter((entry) => activeIds.has(entry.id))]
    .filter((entry) => !entry.out)
    .sort((left, right) => right.runs - left.runs || left.balls - right.balls)
    .slice(0, 2);
  const bowlers = [...Object.values(innings.bowlingCards).filter((entry) => entry.balls > 0)]
    .sort((left, right) => right.wickets - left.wickets || left.runsConceded - right.runsConceded)
    .slice(0, 2);

  return `
    <article class="innings-card innings-card--snapshot">
      <div class="innings-card__header">
        <div>
          <span class="schedule-stage">${escapeHtml(label)}</span>
          <strong>${escapeHtml(innings.battingLabel)}</strong>
        </div>
        <div class="innings-card__score">${escapeHtml(formatScore(innings.score, innings.wickets))} <span>(${formatOvers(innings.balls)} overs)</span></div>
      </div>
      <div class="innings-columns">
        <div class="innings-column">
          ${batters.length
            ? batters
                .map((entry) => `
                  <div class="innings-row">
                    <span>${escapeHtml(formatBatterName(entry))}</span>
                    <strong>${escapeHtml(formatBattingEntry(entry))}</strong>
                  </div>
                `)
                .join("")
            : `<p class="empty-copy">No batting card yet.</p>`}
        </div>
        <div class="innings-column">
          ${bowlers.length
            ? bowlers
                .map((entry) => `
                  <div class="innings-row">
                    <span>${escapeHtml(cleanPlayerName(entry.name))}</span>
                    <strong>${escapeHtml(formatBowlingEntry(entry))}</strong>
                  </div>
                `)
                .join("")
            : `<p class="empty-copy">No bowling card yet.</p>`}
        </div>
      </div>
    </article>
  `;
}

function overFeedMarkup(live) {
  const innings = live.innings;
  if (!innings.overs.length) {
    return `<p class="empty-copy">No overs completed yet. Once the first over is done, the event feed will appear here.</p>`;
  }

  return [...innings.overs]
    .slice(-6)
    .reverse()
    .map((over) => {
      const bowler = innings.bowlingById.get(over.bowlerId);
      const striker = innings.teamById.get(over.strikerId);
      const nonStriker = innings.teamById.get(over.nonStrikerId);
      return `
        <article class="over-card">
          <div class="over-card__headline">
            <strong>Over ${over.overNumber}</strong>
            <span>${escapeHtml(cleanPlayerName(bowler?.name || ""))} · ${escapeHtml(over.bowlerIntent)}</span>
          </div>
          <p class="over-events">${escapeHtml(over.events.join(" "))}</p>
          <div class="over-card__meta">
            <span>${escapeHtml(cleanPlayerName(striker?.name || ""))} / ${escapeHtml(cleanPlayerName(nonStriker?.name || ""))}</span>
            <span>${escapeHtml(formatScore(over.score, over.wickets))}</span>
            ${over.requiredRate ? `<span>Req RR ${formatRate(over.requiredRate)}</span>` : `<span>RR ${formatRate((over.score * 6) / Math.max((Number(over.overNumber) * 6), 1))}</span>`}
          </div>
        </article>
      `;
    })
    .join("");
}

function round(value) {
  return Math.round(value);
}

function formatRate(value) {
  return Number.isFinite(value) ? value.toFixed(2) : "0.00";
}

function resultScorecardDetailsMarkup(result) {
  return `
    <details class="scorecard-details">
      <summary>View scorecard</summary>
      <div class="scorecard-details__body">
        <p><strong>Player of the Match:</strong> ${escapeHtml(cleanPlayerName(result.playerOfTheMatch || result.manOfTheMatch || ""))}</p>
        ${result.innings.map((innings, index) => fullInningsCardMarkup(innings, index === 0 ? "1st Inn" : "2nd Inn")).join("")}
      </div>
    </details>
  `;
}

function fullInningsCardMarkup(innings, label) {
  const battingEntries = getLiveBattingEntries(innings);
  const bowlingEntries = getLiveBowlingEntries(innings);

  return `
    <article class="innings-card innings-card--full">
      <div class="innings-card__header">
        <div class="innings-card__title">
          <span class="schedule-stage">${escapeHtml(label)}</span>
          <strong>${escapeHtml(innings.battingLabel)}</strong>
        </div>
        <div class="innings-card__score">${escapeHtml(formatScore(innings.score, innings.wickets))} <span>(${formatOvers(innings.balls)} overs)</span></div>
      </div>
      <div class="innings-columns">
        <div class="innings-column">
          ${battingEntries.length
            ? battingEntries
                .map((entry) => `
                  <div class="innings-entry">
                    <span>${escapeHtml(formatBatterName(entry))}</span>
                    <strong>${escapeHtml(formatBattingEntry(entry))}</strong>
                  </div>
                `)
                .join("")
            : `<p class="empty-copy">No batting card yet.</p>`}
        </div>
        <div class="innings-column">
          ${bowlingEntries.length
            ? bowlingEntries
                .map((entry) => `
                  <div class="innings-entry innings-entry--bowling">
                    <span>${escapeHtml(cleanPlayerName(entry.name))}</span>
                    <strong>${escapeHtml(formatBowlingEntry(entry))}</strong>
                  </div>
                `)
                .join("")
            : `<p class="empty-copy">No bowling card yet.</p>`}
        </div>
      </div>
    </article>
  `;
}

function bowlingChoiceMarkup(live) {
  if (live.match.awaiting?.type !== "choose-bowler") {
    return "";
  }

  const innings = live.innings;
  const eligibleIds = [...getDisplayRoster(live.match.userTeam, state.difficulty)]
    .sort(compareByBowlingDesc)
    .filter((player) => player.bowling >= 40)
    .filter((player) => (innings.bowlingCards[player.id]?.balls || 0) < 60)
    .filter((player) => player.id !== innings.lastBowlerId)
    .map((player) => player.id);
  const byId = new Map(live.match.userTeam.map((player) => [player.id, player]));
  const recommendation = getRecommendedBowler(state);

  return `
    <section class="surface-card surface-card--inner live-control-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Bowling Change</p>
          <h2>Pick the over</h2>
          <p class="squad-note">${recommendation ? `Recommended on County: ${cleanPlayerName(byId.get(recommendation)?.name || "")}.` : "Choose the bowler and the tone of the over."}</p>
        </div>
      </div>
      <div class="bowling-choice-grid">
        ${eligibleIds
          .map((bowlerId) => {
            const bowler = byId.get(bowlerId);
            const isSelected = selectedBowlerId === bowlerId;
            return `
              <article class="choice-card ${recommendation === bowlerId ? "choice-card--recommended" : ""} ${isSelected ? "choice-card--selected" : ""}">
                <div class="choice-card__copy">
                  <h3>${escapeHtml(cleanPlayerName(bowler.name))}</h3>
                  <p>${escapeHtml(formatBowlingStyle(bowler))} · Bowl ${Math.round(bowler.bowling)}</p>
                </div>
                <div class="choice-card__actions">
                  ${
                    isSelected
                      ? `
                        <button class="selection-pill" type="button" data-action="choose-bowler" data-player-id="${bowlerId}" data-intent="attacking">Attack</button>
                        <button class="selection-pill" type="button" data-action="choose-bowler" data-player-id="${bowlerId}" data-intent="balanced">Balance</button>
                        <button class="selection-pill" type="button" data-action="choose-bowler" data-player-id="${bowlerId}" data-intent="defensive">Defend</button>
                      `
                      : `<button class="selection-pill selection-pill--full" type="button" data-action="prime-bowler" data-player-id="${bowlerId}">Use this bowler</button>`
                  }
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function nextBatterChoiceMarkup(live) {
  if (live.match.awaiting?.type !== "choose-next-batter") {
    return "";
  }

  const displayById = buildDisplayRosterById(live.match.userTeam);
  const remainingPlayers = live.innings.remainingBatters
    .map((playerId) => displayById.get(playerId) || live.innings.teamById.get(playerId))
    .filter(Boolean)
    .sort(compareByBattingDesc);
  return `
    <section class="surface-card surface-card--inner live-control-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Wicket Break</p>
          <h2>Choose the next batter</h2>
          <p class="squad-note">This choice affects the rest of the over and the chase tempo straight away.</p>
        </div>
      </div>
      <div class="selection-grid">
        ${remainingPlayers
          .map((player) => {
            const playerId = player.id;
            return `
              <button class="selection-pill selection-pill--full" type="button" data-action="choose-batter" data-player-id="${playerId}">
                <span>
                  <strong>${escapeHtml(cleanPlayerName(player.name))}</strong>
                  <small>${ratingsAreHidden() ? "" : escapeHtml(formatRatings(player))}</small>
                </span>
                <strong>${escapeHtml(formatBattingHand(player) || "")} · ${escapeHtml(player.battingStyle || player.aggressionLevel || "Balanced")}</strong>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function inningsBreakOpenersMarkup(live) {
  if (live.match.awaiting?.type !== "choose-openers") {
    return "";
  }

  const openers = live.match.userBattingPlan.openers;
  const sortedRoster = [...getDisplayRoster(live.match.userTeam, state.difficulty)].sort(compareByBattingDesc);
  return `
    <section class="surface-card surface-card--inner live-control-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Innings Break</p>
          <h2>Choose your openers</h2>
          <p class="squad-note">${openers.length}/2 locked in for the chase.</p>
        </div>
      </div>
      <div class="selection-grid">
        ${sortedRoster
          .map((player) => `
            <button
              class="selection-pill ${openers.includes(player.id) ? "selection-pill--active" : ""}"
              type="button"
              data-action="toggle-opener"
              data-player-id="${player.id}"
            >
              <span>
                <strong>${escapeHtml(cleanPlayerName(player.name))}</strong>
                <small>${escapeHtml(getPlayerRoleLabel(player))}${ratingsAreHidden() ? "" : ` · ${escapeHtml(formatRatings(player))}`}</small>
              </span>
              <strong>${escapeHtml(formatBattingHand(player) || "")} · ${escapeHtml(player.battingStyle || player.aggressionLevel || "Balanced")}</strong>
            </button>
          `)
          .join("")}
      </div>
    </section>
  `;
}

function liveMatchMarkup() {
  const live = getLiveContext(state);
  if (!live) {
    return "";
  }

  const match = live.match;
  const innings = live.innings;
  const firstInnings = match.innings[0];
  const secondInnings = match.innings[1];
  const lastOverText = live.match.latestOver ? live.match.latestOver.events.join(" ") : "Opening over pending";
  const inningsLabel = `${match.currentInningsIndex + 1}${match.currentInningsIndex === 0 ? "st" : "nd"} Inn`;
  const lastWicket = innings.lastWicket;

  return `
    <section class="match-card">
      <p class="eyebrow">${escapeHtml(match.stage)}</p>
      <p class="scorecard-conditions">Conditions: ${escapeHtml(formatConditions(match.conditions))}</p>
      <h3>${escapeHtml(match.opponent.label)}</h3>
      <div class="live-hero">
        ${currentInningsSnapshotMarkup(innings, inningsLabel)}
        <div class="summary-grid live-summary-grid">
          <div>
            <span>Striker</span>
            <strong>${escapeHtml(cleanPlayerName(live.striker?.name || ""))}</strong>
            <small>Settled ${escapeHtml(formatSettled(live.settledStriker))} · Confidence ${escapeHtml(formatLiveState(live.confidenceStriker))}</small>
          </div>
          <div>
            <span>Non-striker</span>
            <strong>${escapeHtml(cleanPlayerName(live.nonStriker?.name || ""))}</strong>
            <small>Settled ${escapeHtml(formatSettled(live.settledNonStriker))} · Confidence ${escapeHtml(formatLiveState(live.confidenceNonStriker))}</small>
          </div>
          <div>
            <span>Last Bowler</span>
            <strong>${escapeHtml(cleanPlayerName(live.match.latestOver ? live.innings.bowlingById.get(live.match.latestOver.bowlerId)?.name || "" : "Opening over pending"))}</strong>
            ${live.lastBowlerRhythm !== null ? `<small>Rhythm ${escapeHtml(formatLiveState(live.lastBowlerRhythm))}</small>` : ""}
          </div>
          <div><span>Last Over</span><strong>${escapeHtml(lastOverText)}</strong></div>
          <div><span>Last Wicket</span><strong>${lastWicket ? `${escapeHtml(cleanPlayerName(lastWicket.name))} ${escapeHtml(formatBattingEntry(lastWicket))}` : "None"}</strong></div>
          <div><span>Powerplay</span><strong>${Math.floor(innings.balls / 6) < 10 ? "On" : "Off"}</strong></div>
          <div><span>Over</span><strong>${escapeHtml(formatOvers(innings.balls))}</strong></div>
          <div><span>Run Rate</span><strong>${formatRate(live.currentRate)}</strong></div>
          ${live.requiredRate ? `<div><span>Required Rate</span><strong>${formatRate(live.requiredRate)}</strong></div>` : ""}
          ${innings.target ? `<div><span>Target</span><strong>${escapeHtml(String(innings.target))}</strong></div>` : ""}
          <div><span>Partnership</span><strong>${escapeHtml(String(live.partnershipRuns))} (${escapeHtml(String(live.partnershipBalls))})</strong></div>
          <div class="confidence-meter">
            <span>Team Confidence</span>
            <strong>${escapeHtml(String(live.teamConfidence))}</strong>
            <div class="confidence-meter__track"><div class="confidence-meter__fill" style="width:${Math.max(0, Math.min(99, live.teamConfidence))}%"></div></div>
          </div>
        </div>
      </div>
      ${inningsBreakOpenersMarkup(live)}
      ${bowlingChoiceMarkup(live)}
      ${nextBatterChoiceMarkup(live)}
      <section class="surface-card surface-card--inner">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Over Feed</p>
            <h2>Latest overs</h2>
          </div>
        </div>
        <div class="over-feed">
          ${overFeedMarkup(live)}
        </div>
      </section>
    </section>
  `;
}

function latestResultMarkup() {
  if (!state.latestMatch) {
    return "";
  }

  return `
    <section class="match-card ${state.latestMatch.winner === "user" ? "match-card--win" : "match-card--loss"}">
      <p class="eyebrow">${escapeHtml(state.latestMatch.stage)}</p>
      <p class="scorecard-conditions">Conditions: ${escapeHtml(formatConditions(state.latestMatch.conditions))}</p>
      <h3>${escapeHtml(state.latestMatch.opponent)}</h3>
      <p>${escapeHtml(state.latestMatch.summary)}</p>
      <div class="live-scoreboard">
        ${state.latestMatch.inningsOrderLines
          .map((line) => `
            <div class="scoreline">
              <span>${escapeHtml(line.label)}</span>
              <strong>${escapeHtml(line.score)}</strong>
            </div>
          `)
          .join("")}
      </div>
      <p><strong>Player of the Match:</strong> ${escapeHtml(cleanPlayerName(state.latestMatch.playerOfTheMatch || state.latestMatch.manOfTheMatch || ""))}</p>
      <section class="scorecard-summary">
        <h4>Scorecard</h4>
        ${state.latestMatch.innings.map((innings, index) => fullInningsCardMarkup(innings, index === 0 ? "1st Inn" : "2nd Inn")).join("")}
      </section>
    </section>
  `;
}

function resultsHistoryMarkup(includeLatest = false) {
  const historicalResults = [...state.results].reverse();

  if (!historicalResults.length) {
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
      <div class="schedule-list">
        ${historicalResults
          .map(
            (result) => `
              <article class="schedule-card ${result.winner === "user" ? "schedule-card--win" : "schedule-card--loss"}">
                <div class="schedule-card__summary">
                  <p class="schedule-stage">${escapeHtml(result.stage)}</p>
                  <h3>${escapeHtml(result.opponent)}</h3>
                  <p>${escapeHtml(result.summary)}</p>
                </div>
                <div class="schedule-scorelines">
                  ${result.inningsOrderLines
                    .map((line) => `<span>${escapeHtml(line.label)} ${escapeHtml(line.score)}</span>`)
                    .join("")}
                </div>
                ${resultScorecardDetailsMarkup(result)}
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function tournamentSummaryMarkup() {
  if (state.phase !== "finished" || state.finishedView !== "summary") {
    return "";
  }

  const summary = buildTournamentSummary(state.results);

  return `
    <section class="surface-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Tournament Summary</p>
          <h2>${state.champion ? "Campaign Review" : "Postmortem"}</h2>
          <p class="squad-note">A full look at the tournament’s batting and bowling leaders.</p>
        </div>
      </div>
      <section class="surface-card surface-card--inner summary-award-card">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Award</p>
            <h2>Player of the Tournament</h2>
          </div>
        </div>
        <div class="summary-list">
          ${
            summary.playerOfTheTournament
              ? `<article class="summary-card">
                  <span class="summary-card__eyebrow">${escapeHtml(cleanPlayerName(summary.playerOfTheTournament.name))}</span>
                  <strong class="summary-card__headline">POTT</strong>
                  <div class="summary-card__substats">
                    <span>Score ${escapeHtml(String(round(summary.playerOfTheTournament.score)))}</span>
                    <span>Awards ${escapeHtml(String(summary.playerOfTheTournament.awards || 0))}</span>
                  </div>
                </article>`
              : `<p class="empty-copy">No completed matches yet.</p>`
          }
        </div>
      </section>
      <div class="two-column-layout">
        <section class="surface-card surface-card--inner">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Batting</p>
              <h2>Top Batsmen</h2>
            </div>
          </div>
          <div class="summary-list">
            ${summary.overallBatting.map(battingLineMarkup).join("") || `<p class="empty-copy">No batting data yet.</p>`}
          </div>
        </section>
        <section class="surface-card surface-card--inner">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Bowling</p>
              <h2>Top Bowlers</h2>
            </div>
          </div>
          <div class="summary-list">
            ${summary.overallBowling.map(bowlingLineMarkup).join("") || `<p class="empty-copy">No bowling data yet.</p>`}
          </div>
        </section>
      </div>
    </section>
  `;
}

function readyPanelMarkup() {
  const opponent = getCurrentOpponent(state);
  if (state.phase === "pregame" && opponent) {
    return pregameSetupMarkup();
  }
  if (state.phase === "live") {
    return liveMatchMarkup();
  }
  return "";
}

function heroMarkup() {
  const draftPhase = state.phase === "draft";
  return `
    <section class="hero">
      <div class="hero__copy">
        <h1>400 Not Out</h1>
        <p class="hero__lede">
          Draft an all-time XI, then step into a real ODI match engine with over-by-over control. Pick openers, react to wickets, manage bowlers, and ride the powerplays properly.
        </p>
      </div>
      <div class="career-board">
        <article class="stat-tile">
          <span>Stage</span>
          <strong>${escapeHtml(getProgressLabel(state))}</strong>
        </article>
        <article class="stat-tile">
          <span>Record</span>
          <strong>${state.wins}-${state.losses}</strong>
        </article>
        <article class="stat-tile">
          <span>Mode</span>
          <strong>${escapeHtml(currentDifficulty().label)}</strong>
        </article>
      </div>
      ${
        draftPhase
          ? `<div class="hero-actions">${actionMarkup()}</div>`
          : `
            <div class="status-panel">
              <p>${escapeHtml(getStatusMessage())}</p>
              ${actionMarkup()}
            </div>
          `
      }
    </section>
  `;
}

function render() {
  if (state.phase !== "live" || getLiveContext(state)?.match.awaiting?.type !== "choose-bowler") {
    selectedBowlerId = null;
  }

  appElement.innerHTML = `
    <div class="app">
      <div class="shell">
        ${heroMarkup()}
        ${difficultyMarkup()}
        <div class="layout-grid">
          <div class="layout-grid__main">
            ${state.phase === "draft" ? draftBoardMarkup() : ""}
            ${readyPanelMarkup()}
            ${
              state.phase === "finished" && state.finishedView === "summary"
                ? `${tournamentSummaryMarkup()}${resultsHistoryMarkup(true)}`
                : resultsHistoryMarkup()
            }
          </div>
          <aside class="layout-grid__side">
            ${squadSheetMarkup()}
          </aside>
        </div>
        <footer class="small-print">
          <p>Inspired by and with thanks to 82-0.com.</p>
          <p>400 Not Out is an independent, fan-made game. It is not affiliated with, endorsed by, sponsored by, or associated with the ICC, any cricket board, club, competition, league, governing body, organisation, or with any game, publisher, or ratings provider. All team names, player names, ratings, and tournament-era data are used for informational and descriptive purposes only, and all trademarks and other intellectual property remain the property of their respective owners.</p>
          <p>Ronel Khan, 2026.</p>
        </footer>
      </div>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) {
    return;
  }

  const action = target.dataset.action;

  if (action === "difficulty") {
    state = setDifficulty(state, target.dataset.difficulty);
    render();
    return;
  }

  if (action === "reset") {
    state = createInitialState();
    render();
    return;
  }

  if (action === "show-summary") {
    state = {
      ...state,
      finishedView: "summary",
    };
    render();
    return;
  }

  if (action === "reroll") {
    state = rerollCandidates(state);
    render();
    return;
  }

  if (action === "reroll-current") {
    state = rerollCandidates(state);
    render();
    return;
  }

  if (action === "draft") {
    state = draftPlayer(state, target.dataset.playerId);
    render();
    return;
  }

  if (action === "reveal-opponent") {
    state = revealNextOpponent(state);
    render();
    return;
  }

  if (action === "toss") {
    state = chooseTossDecision(state, target.dataset.choice);
    if (target.dataset.choice === "bowl") {
      state = startMatch(state);
    }
    render();
    return;
  }

  if (action === "toggle-opener") {
    state = toggleOpener(state, target.dataset.playerId);
    render();
    return;
  }

  if (action === "start-match") {
    state = startMatch(state);
    render();
    return;
  }

  if (action === "confirm-openers") {
    state = confirmChaseOpeners(state);
    render();
    return;
  }

  if (action === "prime-bowler") {
    selectedBowlerId = target.dataset.playerId;
    render();
    return;
  }

  if (action === "choose-bowler") {
    selectedBowlerId = null;
    state = chooseBowler(state, target.dataset.playerId, target.dataset.intent);
    render();
    return;
  }

  if (action === "choose-batter") {
    state = chooseNextBatter(state, target.dataset.playerId);
    render();
    return;
  }

  if (action === "play-over") {
    state = playOver(state);
    render();
    return;
  }

  if (action === "sim-innings") {
    state = simulateInnings(state);
    render();
    return;
  }

  if (action === "sim-match") {
    state = simulateMatch(state);
    render();
  }
});

render();
