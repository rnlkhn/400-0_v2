#!/usr/bin/env python3

from __future__ import annotations

import csv
import io
import math
import re
import time
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from datetime import date, datetime
from pathlib import Path
from typing import Iterable
from urllib.parse import urljoin

import pandas as pd
import requests
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
CACHE_DIR = DATA_DIR / "odi_source_cache"
MATCH_LIST_CACHE_DIR = CACHE_DIR / "howstat_match_lists"
SCORECARD_CACHE_DIR = CACHE_DIR / "howstat_scorecards"
PROFILE_CACHE_DIR = CACHE_DIR / "howstat_player_profiles"
EXTERNAL_META_CACHE = CACHE_DIR / "player_meta.csv"

RAW_OUTPUT = DATA_DIR / "odi_player_match_stats_1979_2023.csv"
SUMMARY_OUTPUT = DATA_DIR / "odi_player_wc_cycle_stats_1979_2023.csv"
PROFILE_OUTPUT = DATA_DIR / "odi_player_profiles_1979_2023.csv"

BASE_URL = "https://www.howstat.com/Cricket/Statistics/Matches/"
PLAYER_BASE_URL = "https://www.howstat.com/Cricket/Statistics/Players/"
EXTERNAL_META_URL = "https://raw.githubusercontent.com/mavaali/cricket-mcp/main/data/player_meta.csv"

YEARS = list(range(1979, 2024))
START_DATE = date(1979, 1, 1)
END_DATE = date(2023, 12, 31)
MAX_WORKERS = 6
REQUEST_DELAY_MS = 120
REQUEST_TIMEOUT = 45
HEADERS = {
    "user-agent": "Mozilla/5.0 (compatible; 400-0 data builder/1.0; +https://github.com/rnlkhn/400-0)",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "accept-language": "en-GB,en;q=0.8",
}

WC_CYCLES = [
    ("1979-1983", 1979, 1983),
    ("1984-1987", 1984, 1987),
    ("1988-1991", 1988, 1991),
    ("1992-1995", 1992, 1995),
    ("1996-1999", 1996, 1999),
    ("2000-2003", 2000, 2003),
    ("2004-2007", 2004, 2007),
    ("2008-2011", 2008, 2011),
    ("2012-2015", 2012, 2015),
    ("2016-2019", 2016, 2019),
    ("2020-2023", 2020, 2023),
]

PLAYER_LINK_RE = re.compile(r"PlayerOverview_ODI\.asp\?PlayerID=(\d+)", re.I)
SCORECARD_LINK_RE = re.compile(r"MatchScorecard_ODI\.asp\?MatchCode=(\d+)", re.I)
DATE_SUFFIX_RE = re.compile(r"(\d{1,2})(st|nd|rd|th)")


@dataclass
class MatchStub:
    match_code: str
    match_number: str
    match_date: date
    series: str
    match_label: str
    ground: str
    result: str
    scorecard_url: str


def sleep_delay() -> None:
    time.sleep(REQUEST_DELAY_MS / 1000)


def clean_text(value: str) -> str:
    return " ".join(value.replace("\xa0", " ").split()).strip()


def clean_name(value: str) -> str:
    cleaned = clean_text(value)
    cleaned = cleaned.replace("†", "").replace("*", "")
    cleaned = re.sub(r"\s+\(.*?\)$", "", cleaned)
    return clean_text(cleaned)


def extract_team_name(value: str) -> str:
    return clean_text(re.sub(r"\s*\(.*$", "", value or ""))


def normalize_name(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", clean_name(value).lower())


def fetch_text(url: str, cache_path: Path) -> str:
    cache_path.parent.mkdir(parents=True, exist_ok=True)
    if cache_path.exists():
        return cache_path.read_text(encoding="utf-8")

    sleep_delay()
    response = requests.get(url, headers=HEADERS, timeout=REQUEST_TIMEOUT)
    response.raise_for_status()
    cache_path.write_text(response.text, encoding="utf-8")
    return response.text


def parse_table_rows(html: str) -> list[dict]:
    soup = BeautifulSoup(html, "html.parser")
    rows = []
    for tr in soup.find_all("tr"):
        cells = [clean_text(td.get_text(" ", strip=True)) for td in tr.find_all(["td", "th"])]
        links = [
            {
                "text": clean_text(link.get_text(" ", strip=True)),
                "href": link.get("href", ""),
            }
            for link in tr.find_all("a", href=True)
        ]
        if cells or links:
            rows.append({"cells": cells, "links": links})
    return rows


def parse_year_match_list(year: int) -> list[MatchStub]:
    url = f"{BASE_URL}MatchList_ODI.asp?Group={year}0101{year}1231&Range={year}"
    html = fetch_text(url, MATCH_LIST_CACHE_DIR / f"{year}.html")
    rows = parse_table_rows(html)
    stubs: list[MatchStub] = []

    for row in rows:
        cells = row["cells"]
        if len(cells) != 7:
            continue
        if not re.fullmatch(r"\d+", cells[0] or ""):
            continue
        if not re.fullmatch(r"\d{2}/\d{2}/\d{4}", cells[1] or ""):
            continue

        match_date = datetime.strptime(cells[1], "%d/%m/%Y").date()
        if match_date < START_DATE or match_date > END_DATE:
            continue

        scorecard_link = next(
            (link["href"] for link in row["links"] if SCORECARD_LINK_RE.search(link["href"])),
            "",
        )
        if not scorecard_link:
            continue

        match_code_match = SCORECARD_LINK_RE.search(scorecard_link)
        if not match_code_match:
            continue

        stubs.append(
            MatchStub(
                match_code=match_code_match.group(1),
                match_number=cells[6],
                match_date=match_date,
                series=cells[2],
                match_label=cells[3],
                ground=cells[4],
                result=cells[5],
                scorecard_url=urljoin(BASE_URL, scorecard_link),
            )
        )

    return stubs


def parse_player_link(link: dict) -> tuple[str | None, str]:
    match = PLAYER_LINK_RE.search(link["href"])
    player_id = match.group(1) if match else None
    return player_id, clean_name(link["text"])


def infer_balls_per_over(bowling_rows: Iterable[dict]) -> int:
    candidates = [6, 8, 5, 4]
    scores: dict[int, float] = {candidate: 0.0 for candidate in candidates}
    evidence = 0

    for row in bowling_rows:
        overs = row.get("overs_raw")
        runs = row.get("runs_conceded")
        economy = row.get("economy")
        if not overs or runs is None or economy is None:
            continue
        if "." not in overs:
            continue

        whole_part, _, ball_part = overs.partition(".")
        balls = int(ball_part or "0")
        if balls == 0:
            continue
        evidence += 1

        for candidate in candidates:
            actual_overs = int(whole_part) + balls / candidate
            if actual_overs <= 0:
                continue
            scores[candidate] += abs((runs / actual_overs) - economy)

    if evidence == 0:
        return 6

    return min(scores, key=scores.get)


GENERIC_STANDALONE_ROWS = {
    "",
    "BATTING",
    "BOWLING",
    "Did Not Bat",
    "Fall of Wickets",
    "MATCH INFORMATION",
    "Scorecards Menu",
    "World Cup Menu",
}


def is_team_header_row(cells: list[str]) -> bool:
    if len(cells) != 1:
        return False
    value = clean_text(cells[0])
    if value in GENERIC_STANDALONE_ROWS:
        return False
    if "," in value:
        return False
    if value.startswith("ODI #"):
        return False
    if value.startswith("One Day International"):
        return False
    lowered = value.lower()
    if "won by" in lowered or lowered in {"no result", "match abandoned", "tied"}:
        return False
    if lowered.startswith("match abandoned") or lowered.startswith("abandoned"):
        return False
    if re.fullmatch(r"\d+-\d+.*", value):
        return False
    if "Match" in value and "-" in value:
        return False
    return True


def is_contextual_team_row(rows: list[dict], idx: int) -> bool:
    cells = rows[idx]["cells"]
    if not is_team_header_row(cells):
        return False

    next_rows = rows[idx + 1 : idx + 3]
    for row in next_rows:
        if row["cells"][:7] == ["BATTING", "R", "BF", "4s", "6s", "SR", "% Total"]:
            return True
        if row["links"] and all(PLAYER_LINK_RE.search(link["href"]) for link in row["links"]):
            return True
    return False


def overs_to_balls(overs_raw: str | None, balls_per_over: int) -> int | None:
    if not overs_raw:
        return None
    if "." in overs_raw:
        whole_part, _, ball_part = overs_raw.partition(".")
        return int(whole_part) * balls_per_over + int(ball_part or "0")
    return int(float(overs_raw)) * balls_per_over


def looks_like_float(value: str) -> bool:
    return bool(re.fullmatch(r"\d+(?:\.\d+)?", value or ""))


def find_boundary_index(rows: list[dict], start_idx: int, stop_labels: set[str]) -> int:
    for idx in range(start_idx, len(rows)):
        first = rows[idx]["cells"][0] if rows[idx]["cells"] else ""
        if first in stop_labels:
            return idx
    return len(rows)


def extract_did_not_bat_links(rows: list[dict], start_idx: int, end_idx: int) -> list[tuple[str | None, str]]:
    for idx in range(start_idx, end_idx):
        cells = rows[idx]["cells"]
        if cells and cells[0] == "Did Not Bat":
            return [parse_player_link(link) for link in rows[idx]["links"] if PLAYER_LINK_RE.search(link["href"])]
    return []


def parse_scorecard(match: MatchStub) -> tuple[list[dict], dict[str, str]]:
    html = fetch_text(match.scorecard_url, SCORECARD_CACHE_DIR / f"{match.match_code}.html")
    rows = parse_table_rows(html)

    batting_header_indices = [
        idx
        for idx, row in enumerate(rows)
        if row["cells"][:7] == ["BATTING", "R", "BF", "4s", "6s", "SR", "% Total"]
    ]

    team_headers: list[str] = []
    team_row_positions: list[tuple[int, str]] = []
    seen_teams: set[str] = set()
    for idx, row in enumerate(rows):
        cells = row["cells"]
        if not is_contextual_team_row(rows, idx):
            continue
        team_name = extract_team_name(cells[0])
        if team_name and team_name not in seen_teams:
            seen_teams.add(team_name)
            team_headers.append(team_name)
            team_row_positions.append((idx, team_name))

    if len(team_headers) < 2:
        raise ValueError(f"Could not resolve team names for match {match.match_code}")

    match_records: dict[tuple[str, str], dict] = {}
    profile_refs: dict[str, str] = {}

    for innings_index, header_idx in enumerate(batting_header_indices):
        batting_team = next(
            (team for row_idx, team in reversed(team_row_positions) if row_idx < header_idx),
            team_headers[min(innings_index, len(team_headers) - 1)],
        )
        bowling_team = next((team for team in team_headers if team != batting_team), "")
        next_header_idx = batting_header_indices[innings_index + 1] if innings_index + 1 < len(batting_header_indices) else len(rows)
        match_info_idx = find_boundary_index(rows, header_idx, {"MATCH INFORMATION"})
        innings_end_idx = min(next_header_idx, match_info_idx)

        batting_position = 1
        for idx in range(header_idx + 1, innings_end_idx):
            cells = rows[idx]["cells"]
            if not cells:
                continue
            first = cells[0]
            if first in {"Extras", "TOTAL", "Did Not Bat", "Fall of Wickets", "BOWLING"}:
                break
            link = next((link for link in rows[idx]["links"] if PLAYER_LINK_RE.search(link["href"])), None)
            if not link:
                continue
            player_id, player_name = parse_player_link(link)
            if not player_id:
                continue
            profile_refs[player_id] = player_name
            key = (batting_team, player_id)
            dismissal = cells[1] if len(cells) > 1 else ""
            record = match_records.setdefault(
                key,
                {
                    "match_code": match.match_code,
                    "match_number": match.match_number,
                    "match_date": match.match_date.isoformat(),
                    "series": match.series,
                    "match_label": match.match_label,
                    "ground": match.ground,
                    "result": match.result,
                    "interval": interval_for_year(match.match_date.year),
                    "team": batting_team,
                    "opponent": bowling_team,
                    "player_id": player_id,
                    "player_name": player_name,
                    "did_bat": False,
                    "batting_position": None,
                    "dismissal": "",
                    "not_out": False,
                    "runs": None,
                    "balls_faced": None,
                    "fours": None,
                    "sixes": None,
                    "batting_strike_rate": None,
                    "did_bowl": False,
                    "overs_raw": None,
                    "balls_per_over": None,
                    "balls_bowled": None,
                    "maidens": None,
                    "runs_conceded": None,
                    "wickets": None,
                    "bowling_economy": None,
                    "bowling_strike_rate": None,
                },
            )
            record.update(
                {
                    "did_bat": True,
                    "batting_position": batting_position,
                    "dismissal": dismissal,
                    "not_out": "not out" in dismissal.lower(),
                    "runs": int(cells[2]) if len(cells) > 2 and cells[2].isdigit() else None,
                    "balls_faced": int(cells[3]) if len(cells) > 3 and cells[3].isdigit() else None,
                    "fours": int(cells[4]) if len(cells) > 4 and cells[4].isdigit() else None,
                    "sixes": int(cells[5]) if len(cells) > 5 and cells[5].isdigit() else None,
                    "batting_strike_rate": float(cells[6]) if len(cells) > 6 and cells[6] else None,
                }
            )
            batting_position += 1

        for player_id, player_name in extract_did_not_bat_links(rows, header_idx, innings_end_idx):
            if not player_id:
                continue
            profile_refs[player_id] = player_name
            key = (batting_team, player_id)
            match_records.setdefault(
                key,
                {
                    "match_code": match.match_code,
                    "match_number": match.match_number,
                    "match_date": match.match_date.isoformat(),
                    "series": match.series,
                    "match_label": match.match_label,
                    "ground": match.ground,
                    "result": match.result,
                    "interval": interval_for_year(match.match_date.year),
                    "team": batting_team,
                    "opponent": bowling_team,
                    "player_id": player_id,
                    "player_name": player_name,
                    "did_bat": False,
                    "batting_position": None,
                    "dismissal": "",
                    "not_out": False,
                    "runs": None,
                    "balls_faced": None,
                    "fours": None,
                    "sixes": None,
                    "batting_strike_rate": None,
                    "did_bowl": False,
                    "overs_raw": None,
                    "balls_per_over": None,
                    "balls_bowled": None,
                    "maidens": None,
                    "runs_conceded": None,
                    "wickets": None,
                    "bowling_economy": None,
                    "bowling_strike_rate": None,
                },
            )

        bowling_header_idx = next(
            (
                idx
                for idx in range(header_idx, innings_end_idx)
                if rows[idx]["cells"][:7] == ["BOWLING", "O", "M", "R", "W", "ER", "% Wickets"]
            ),
            None,
        )
        if bowling_header_idx is None:
            continue

        parsed_bowling_rows = []
        for idx in range(bowling_header_idx + 1, innings_end_idx):
            cells = rows[idx]["cells"]
            if not cells:
                continue
            if cells[0] in {"MATCH INFORMATION", "BATTING", "Did Not Bat", "Fall of Wickets"}:
                break
            link = next((link for link in rows[idx]["links"] if PLAYER_LINK_RE.search(link["href"])), None)
            if not link:
                continue
            if len(cells) < 6:
                continue
            if not looks_like_float(cells[1]):
                continue
            if not cells[2].isdigit() or not cells[3].isdigit() or not cells[4].isdigit():
                continue
            if not looks_like_float(cells[5]):
                continue
            player_id, player_name = parse_player_link(link)
            if not player_id:
                continue
            profile_refs[player_id] = player_name
            parsed_bowling_rows.append(
                {
                    "player_id": player_id,
                    "player_name": player_name,
                    "overs_raw": cells[1],
                    "maidens": int(cells[2]) if len(cells) > 2 and cells[2].isdigit() else None,
                    "runs_conceded": int(cells[3]) if len(cells) > 3 and cells[3].isdigit() else None,
                    "wickets": int(cells[4]) if len(cells) > 4 and cells[4].isdigit() else None,
                    "economy": float(cells[5]) if len(cells) > 5 and cells[5] else None,
                }
            )

        balls_per_over = infer_balls_per_over(parsed_bowling_rows)
        for bowling_row in parsed_bowling_rows:
            key = (bowling_team, bowling_row["player_id"])
            record = match_records.setdefault(
                key,
                {
                    "match_code": match.match_code,
                    "match_number": match.match_number,
                    "match_date": match.match_date.isoformat(),
                    "series": match.series,
                    "match_label": match.match_label,
                    "ground": match.ground,
                    "result": match.result,
                    "interval": interval_for_year(match.match_date.year),
                    "team": bowling_team,
                    "opponent": batting_team,
                    "player_id": bowling_row["player_id"],
                    "player_name": bowling_row["player_name"],
                    "did_bat": False,
                    "batting_position": None,
                    "dismissal": "",
                    "not_out": False,
                    "runs": None,
                    "balls_faced": None,
                    "fours": None,
                    "sixes": None,
                    "batting_strike_rate": None,
                    "did_bowl": False,
                    "overs_raw": None,
                    "balls_per_over": None,
                    "balls_bowled": None,
                    "maidens": None,
                    "runs_conceded": None,
                    "wickets": None,
                    "bowling_economy": None,
                    "bowling_strike_rate": None,
                },
            )
            balls_bowled = overs_to_balls(bowling_row["overs_raw"], balls_per_over)
            wickets = bowling_row["wickets"]
            record.update(
                {
                    "did_bowl": True,
                    "overs_raw": bowling_row["overs_raw"],
                    "balls_per_over": balls_per_over,
                    "balls_bowled": balls_bowled,
                    "maidens": bowling_row["maidens"],
                    "runs_conceded": bowling_row["runs_conceded"],
                    "wickets": wickets,
                    "bowling_economy": bowling_row["economy"],
                    "bowling_strike_rate": round(balls_bowled / wickets, 2) if balls_bowled and wickets else None,
                }
            )

    for idx, row in enumerate(rows):
        cells = row["cells"]
        if not is_contextual_team_row(rows, idx):
            continue
        team_name = extract_team_name(cells[0])
        opponent = next((team for team in team_headers if team != team_name), "")
        next_row = rows[idx + 1] if idx + 1 < len(rows) else {"cells": [], "links": []}
        if not next_row["links"]:
            continue
        player_links = [parse_player_link(link) for link in next_row["links"] if PLAYER_LINK_RE.search(link["href"])]
        if not player_links:
            continue
        for player_id, player_name in player_links:
            if not player_id:
                continue
            profile_refs[player_id] = player_name
            key = (team_name, player_id)
            match_records.setdefault(
                key,
                {
                    "match_code": match.match_code,
                    "match_number": match.match_number,
                    "match_date": match.match_date.isoformat(),
                    "series": match.series,
                    "match_label": match.match_label,
                    "ground": match.ground,
                    "result": match.result,
                    "interval": interval_for_year(match.match_date.year),
                    "team": team_name,
                    "opponent": opponent,
                    "player_id": player_id,
                    "player_name": player_name,
                    "did_bat": False,
                    "batting_position": None,
                    "dismissal": "",
                    "not_out": False,
                    "runs": None,
                    "balls_faced": None,
                    "fours": None,
                    "sixes": None,
                    "batting_strike_rate": None,
                    "did_bowl": False,
                    "overs_raw": None,
                    "balls_per_over": None,
                    "balls_bowled": None,
                    "maidens": None,
                    "runs_conceded": None,
                    "wickets": None,
                    "bowling_economy": None,
                    "bowling_strike_rate": None,
                },
            )

    return list(match_records.values()), profile_refs


def parse_profile(player_id: str) -> dict:
    url = f"{PLAYER_BASE_URL}PlayerOverview_ODI.asp?PlayerID={player_id}"
    html = fetch_text(url, PROFILE_CACHE_DIR / f"{player_id}.html")
    rows = parse_table_rows(html)

    bats_raw = ""
    bowls_raw = ""
    full_name = ""
    country = ""

    for row in rows:
        cells = row["cells"]
        for idx, cell in enumerate(cells):
            if cell == "Full Name:" and idx + 1 < len(cells):
                full_name = cells[idx + 1]
            if cell == "Bats:" and idx + 1 < len(cells):
                bats_raw = cells[idx + 1]
            if cell == "Bowls:" and idx + 1 < len(cells):
                bowls_raw = cells[idx + 1]

        if not country and cells:
            joined = " ".join(cells)
            match = re.match(rf"{re.escape(full_name) if full_name else '.+?'}\s+(.+?)\s+Overview & Statistics Summary", joined)
            if match:
                country = clean_text(match.group(1))

    batting_hand = extract_hand(bats_raw)
    bowling_hand, bowling_style = extract_bowling_details(bowls_raw)

    return {
        "player_id": player_id,
        "full_name": full_name,
        "country": country,
        "batting_style_raw": bats_raw,
        "batting_hand": batting_hand,
        "bowling_style_raw": bowls_raw,
        "bowling_hand": bowling_hand,
        "bowling_style": bowling_style,
    }


def extract_hand(style: str) -> str:
    value = clean_text(style).lower()
    if value.startswith("right"):
        return "Right"
    if value.startswith("left"):
        return "Left"
    return ""


def normalize_bowling_style_part(style_part: str) -> str:
    value = clean_text(style_part)
    if not value:
        return ""

    lowered = value.lower().replace("-", " ")
    lowered = re.sub(r"\s+", " ", lowered).strip()

    hand_prefix = ""
    if lowered.startswith("right arm "):
        hand_prefix = "Right arm "
        lowered = lowered[10:]
    elif lowered.startswith("left arm "):
        hand_prefix = "Left arm "
        lowered = lowered[9:]
    elif lowered.startswith("slow left arm "):
        hand_prefix = "Slow Left arm "
        lowered = lowered[14:]

    lowered = lowered.strip()

    if lowered in {"bowler", "unknown", "unspecified"}:
        return (hand_prefix + "Unspecified").strip()
    if "chinaman" in lowered or "wrist spin" in lowered:
        if hand_prefix.startswith("Left"):
            return "Left arm Wrist Spin (Chinaman)"
        return (hand_prefix + "Wrist Spin").strip()
    if "orthodox" in lowered:
        return "Slow Left arm Orthodox" if hand_prefix.startswith("Left") or "left arm" in value.lower() else "Orthodox"
    if "legbreak googly" in lowered or ("legbreak" in lowered and "googly" in lowered) or ("leg break" in lowered and "googly" in lowered):
        return (hand_prefix + "Leg Break Googly").strip()
    if "legbreak" in lowered or "leg break" in lowered:
        return (hand_prefix + "Leg Break").strip()
    if "offbreak" in lowered or "off break" in lowered:
        return (hand_prefix + "Off Break").strip()
    if "slow medium" in lowered:
        return (hand_prefix + "Slow Medium").strip()
    if "fast medium" in lowered:
        return (hand_prefix + "Fast Medium").strip()
    if "medium fast" in lowered:
        return (hand_prefix + "Medium Fast").strip()
    if lowered == "fast":
        return (hand_prefix + "Fast").strip()
    if lowered == "medium":
        return (hand_prefix + "Medium").strip()
    if lowered == "slow":
        return (hand_prefix + "Slow").strip()

    return (hand_prefix + " ".join(word.capitalize() for word in lowered.split())).strip()


def normalize_bowling_style_raw(style: str) -> str:
    value = clean_text(style)
    if not value:
        return ""

    parts = [normalize_bowling_style_part(part) for part in value.split(",")]
    normalized_parts = []
    for part in parts:
        if part and part not in normalized_parts:
            normalized_parts.append(part)
    return ", ".join(normalized_parts)


def extract_bowling_details(style: str) -> tuple[str, str]:
    cleaned = normalize_bowling_style_raw(style)
    if not cleaned:
        return "", ""

    primary = cleaned.split(",")[0].strip()
    lowered = primary.lower()
    hand = ""
    style_core = primary

    if lowered.startswith("right arm "):
        hand = "Right"
        style_core = primary[10:]
    elif lowered.startswith("left arm "):
        hand = "Left"
        style_core = primary[9:]
    elif lowered.startswith("slow left arm "):
        hand = "Left"
        style_core = primary[14:]

    style_core = clean_text(style_core)
    normalized_core = {
        "Off Break": "Off Break",
        "Leg Break": "Leg Break",
        "Leg Break Googly": "Leg Break Googly",
        "Fast": "Fast",
        "Fast Medium": "Fast Medium",
        "Medium Fast": "Medium Fast",
        "Medium": "Medium",
        "Slow Medium": "Slow Medium",
        "Slow": "Slow",
        "Orthodox": "Orthodox",
        "Wrist Spin (Chinaman)": "Wrist Spin (Chinaman)",
        "Unspecified": "Unspecified",
    }.get(style_core, style_core)

    return hand, normalized_core


def normalize_country(value: str) -> str:
    cleaned = clean_text(value)
    aliases = {
        "UAE": "United Arab Emirates",
        "U.A.E.": "United Arab Emirates",
        "United Arab Emirates": "United Arab Emirates",
        "West Indies": "West Indies",
        "England": "England",
        "Scotland": "Scotland",
        "New Zealand": "New Zealand",
        "South Africa": "South Africa",
        "Sri Lanka": "Sri Lanka",
    }
    return aliases.get(cleaned, cleaned)


def interval_for_year(year: int) -> str:
    for label, start, end in WC_CYCLES:
        if start <= year <= end:
            return label
    raise ValueError(f"Year {year} is outside configured World Cup cycles")


def load_all_matches() -> list[MatchStub]:
    matches: list[MatchStub] = []
    for year in YEARS:
        matches.extend(parse_year_match_list(year))

    unique_by_code = {match.match_code: match for match in matches}
    ordered = sorted(unique_by_code.values(), key=lambda match: (match.match_date, int(match.match_code)))
    return ordered


def load_external_meta() -> pd.DataFrame:
    csv_text = fetch_text(EXTERNAL_META_URL, EXTERNAL_META_CACHE)
    df = pd.read_csv(io.StringIO(csv_text))
    for column in ["name", "full_name", "unique_name", "country", "batting_style", "bowling_style"]:
        if column not in df.columns:
            df[column] = ""
        df[column] = df[column].fillna("").map(clean_text)

    df["normalized_country"] = df["country"].map(normalize_country)
    return df


def build_external_profile_lookup(external_df: pd.DataFrame) -> tuple[dict[tuple[str, str], dict], dict[str, list[dict]]]:
    by_name_country: dict[tuple[str, str], dict] = {}
    by_name: dict[str, list[dict]] = defaultdict(list)
    for record in external_df.to_dict("records"):
        candidate_names = {
            normalize_name(record.get("name", "")),
            normalize_name(record.get("full_name", "")),
            normalize_name(record.get("unique_name", "")),
        }
        candidate_names.discard("")
        for normalized_name in candidate_names:
            key = (normalized_name, record["normalized_country"])
            by_name_country[key] = record
            by_name[normalized_name].append(record)
    return by_name_country, by_name


def build_profiles(unique_players: dict[str, str], player_teams: dict[str, set[str]]) -> pd.DataFrame:
    external_meta = load_external_meta()
    by_name_country, by_name = build_external_profile_lookup(external_meta)

    profiles: list[dict] = []
    missing_profile_ids: list[str] = []

    for player_id, player_name in unique_players.items():
        normalized_player = normalize_name(player_name)
        teams = [normalize_country(team) for team in sorted(player_teams.get(player_id, set()))]
        matched = None
        for team in teams:
            matched = by_name_country.get((normalized_player, team))
            if matched:
                break
        if not matched:
            candidates = by_name.get(normalized_player, [])
            if len(candidates) == 1:
                matched = candidates[0]

        if matched:
            batting_style_raw = matched.get("batting_style", "")
            bowling_style_raw = matched.get("bowling_style", "")
            bowling_hand, bowling_style = extract_bowling_details(bowling_style_raw)
            profiles.append(
                {
                    "player_id": player_id,
                    "full_name": matched.get("full_name") or player_name,
                    "country": normalize_country(matched.get("country", "")),
                    "batting_style_raw": batting_style_raw,
                    "batting_hand": extract_hand(batting_style_raw),
                    "bowling_style_raw": bowling_style_raw,
                    "bowling_hand": bowling_hand,
                    "bowling_style": bowling_style,
                }
            )
        else:
            missing_profile_ids.append(player_id)

    if missing_profile_ids:
        with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            futures = {executor.submit(parse_profile, player_id): player_id for player_id in missing_profile_ids}
            for future in as_completed(futures):
                player_id = futures[future]
                try:
                    profile = future.result()
                except Exception:
                    profile = {
                        "player_id": player_id,
                        "full_name": unique_players[player_id],
                        "country": "",
                        "batting_style_raw": "",
                        "batting_hand": "",
                        "bowling_style_raw": "",
                        "bowling_hand": "",
                        "bowling_style": "",
                    }
                if not profile.get("full_name"):
                    profile["full_name"] = unique_players[player_id]
                profiles.append(profile)

    profile_df = pd.DataFrame(profiles).sort_values(["full_name", "player_id"]).reset_index(drop=True)
    profile_df.to_csv(PROFILE_OUTPUT, index=False)
    return profile_df


def build_match_dataframe(matches: list[MatchStub]) -> tuple[pd.DataFrame, pd.DataFrame]:
    all_records: list[dict] = []
    unique_players: dict[str, str] = {}
    player_teams: dict[str, set[str]] = defaultdict(set)

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {executor.submit(parse_scorecard, match): match for match in matches}
        for future in as_completed(futures):
            match = futures[future]
            try:
                records, profile_refs = future.result()
            except Exception as error:
                raise RuntimeError(f"Failed to parse match {match.match_code} ({match.match_number})") from error
            all_records.extend(records)
            unique_players.update(profile_refs)
            for record in records:
                player_teams[record["player_id"]].add(record["team"])

    match_df = pd.DataFrame(all_records)
    profile_df = build_profiles(unique_players, player_teams)
    match_df = match_df.merge(profile_df, how="left", on="player_id")

    match_df["player_name"] = match_df["full_name"].fillna(match_df["player_name"])
    match_df["batting_hand"] = match_df["batting_hand"].fillna("")
    match_df["bowling_hand"] = match_df["bowling_hand"].fillna("")
    match_df["bowling_style"] = match_df["bowling_style"].fillna("")
    match_df["bowling_style_raw"] = match_df["bowling_style_raw"].fillna("")
    match_df["batting_style_raw"] = match_df["batting_style_raw"].fillna("")

    match_df = match_df.sort_values(["match_date", "match_code", "team", "batting_position", "player_name"], na_position="last").reset_index(drop=True)
    return match_df, profile_df


def safe_divide(numerator: float | int | None, denominator: float | int | None) -> float | None:
    if numerator is None or denominator in (None, 0):
        return None
    return numerator / denominator


def aggregate_intervals(match_df: pd.DataFrame) -> pd.DataFrame:
    summary_rows: list[dict] = []

    grouped = match_df.groupby(["player_id", "interval"], dropna=False)
    for (player_id, interval), frame in grouped:
        teams = sorted({team for team in frame["team"].dropna().tolist() if team})
        country_values = [value for value in frame.get("country", pd.Series(dtype=str)).dropna().tolist() if value]
        batting_hand_values = [value for value in frame["batting_hand"].dropna().tolist() if value]
        bowling_hand_values = [value for value in frame["bowling_hand"].dropna().tolist() if value]
        bowling_style_values = [value for value in frame["bowling_style"].dropna().tolist() if value]
        batting_style_values = [value for value in frame["batting_style_raw"].dropna().tolist() if value]
        bowling_style_raw_values = [value for value in frame["bowling_style_raw"].dropna().tolist() if value]

        matches_played = int(frame["match_code"].nunique())
        batting_frame = frame[frame["did_bat"] == True]
        bowling_frame = frame[frame["did_bowl"] == True]

        runs = int(batting_frame["runs"].fillna(0).sum())
        balls_faced = int(batting_frame["balls_faced"].fillna(0).sum())
        fours = int(batting_frame["fours"].fillna(0).sum())
        sixes = int(batting_frame["sixes"].fillna(0).sum())
        balls_bowled = int(bowling_frame["balls_bowled"].fillna(0).sum())
        runs_conceded = int(bowling_frame["runs_conceded"].fillna(0).sum())
        wickets = int(bowling_frame["wickets"].fillna(0).sum())
        maidens = int(bowling_frame["maidens"].fillna(0).sum())

        summary_rows.append(
            {
                "interval": interval,
                "player_id": player_id,
                "player_name": frame["player_name"].dropna().iloc[0],
                "teams": "; ".join(teams),
                "country": Counter(country_values).most_common(1)[0][0] if country_values else "",
                "matches_played": matches_played,
                "batting_innings": int(batting_frame["did_bat"].sum()),
                "runs": runs,
                "balls_faced": balls_faced,
                "fours": fours,
                "sixes": sixes,
                "avg_runs_per_game": round(runs / matches_played, 2) if matches_played else None,
                "batting_strike_rate": round((runs / balls_faced) * 100, 2) if balls_faced else None,
                "bowling_innings": int(bowling_frame["did_bowl"].sum()),
                "balls_bowled": balls_bowled,
                "overs_bowled_equivalent": round(balls_bowled / 6, 2) if balls_bowled else None,
                "maidens": maidens,
                "runs_conceded": runs_conceded,
                "wickets": wickets,
                "bowling_economy": round((runs_conceded * 6) / balls_bowled, 2) if balls_bowled else None,
                "bowling_strike_rate": round(balls_bowled / wickets, 2) if wickets else None,
                "batting_hand": Counter(batting_hand_values).most_common(1)[0][0] if batting_hand_values else "",
                "batting_style_raw": Counter(batting_style_values).most_common(1)[0][0] if batting_style_values else "",
                "bowling_hand": Counter(bowling_hand_values).most_common(1)[0][0] if bowling_hand_values else "",
                "bowling_style": Counter(bowling_style_values).most_common(1)[0][0] if bowling_style_values else "",
                "bowling_style_raw": Counter(bowling_style_raw_values).most_common(1)[0][0] if bowling_style_raw_values else "",
            }
        )

    summary_df = pd.DataFrame(summary_rows).sort_values(["interval", "player_name", "player_id"]).reset_index(drop=True)
    return summary_df


def ensure_directories() -> None:
    for directory in [DATA_DIR, MATCH_LIST_CACHE_DIR, SCORECARD_CACHE_DIR, PROFILE_CACHE_DIR]:
        directory.mkdir(parents=True, exist_ok=True)


def main() -> None:
    ensure_directories()
    matches = load_all_matches()
    match_df, _profile_df = build_match_dataframe(matches)

    match_columns = [
        "match_date",
        "interval",
        "match_code",
        "match_number",
        "series",
        "match_label",
        "ground",
        "result",
        "team",
        "opponent",
        "player_id",
        "player_name",
        "country",
        "batting_hand",
        "batting_style_raw",
        "bowling_hand",
        "bowling_style",
        "bowling_style_raw",
        "did_bat",
        "batting_position",
        "dismissal",
        "not_out",
        "runs",
        "balls_faced",
        "fours",
        "sixes",
        "batting_strike_rate",
        "did_bowl",
        "overs_raw",
        "balls_per_over",
        "balls_bowled",
        "maidens",
        "runs_conceded",
        "wickets",
        "bowling_economy",
        "bowling_strike_rate",
    ]
    match_df[match_columns].to_csv(RAW_OUTPUT, index=False)

    summary_df = aggregate_intervals(match_df)
    summary_df.to_csv(SUMMARY_OUTPUT, index=False)

    print(f"Matches parsed: {match_df['match_code'].nunique()}")
    print(f"Player-match rows: {len(match_df)}")
    print(f"Profiles parsed: {match_df['player_id'].nunique()}")
    print(f"Wrote raw CSV: {RAW_OUTPUT}")
    print(f"Wrote summary CSV: {SUMMARY_OUTPUT}")
    print(f"Wrote profiles CSV: {PROFILE_OUTPUT}")


if __name__ == "__main__":
    main()
