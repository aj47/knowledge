---
kind: note
id: product-vibe-olympics-challenge-1-regex-chess
title: Vibe Olympics — Challenge 1: Chess Engine
context: search-only
updatedAt: 1773370109554
tags: product
createdAt: 1773364242951
summary: **Status:** Draft v4 **Created:** 2026-03-12 **Updated:** 2026-03-12 **Event:** Pilot Heat (invite-only, 8-16 competitors) --- **Use any AI tools you want to build a chess move generator. When time...
references: product/vibe-olympics-challenge-1-regex-chess.md
---

# Vibe Olympics — Challenge 1: Chess Engine

**Status:** Draft v4  
**Created:** 2026-03-12  
**Updated:** 2026-03-12  
**Event:** Pilot Heat (invite-only, 8-16 competitors)

---

## 1. The One-Liner (Internal)

**Use any AI tools you want to build a chess move generator. When time's up, your AI goes away — your code has to work on its own.**

> ⚠️ Competitors are NOT told the challenge in advance. All they know is: live competitive software building, time-constrained, 90 minutes total hacking + submission time.

---

## 2. What Competitors Are Building

A program that takes a chess board state and a piece location, and outputs every legal move that piece can make.

No UI. No game loop. Just: given this board, given this piece, what can it do?

The program must run standalone — no API keys, no LLM calls at runtime, no internet required. Pure code.

---

## 3. Tournament Bracket Format

Each round adds more complexity. Pass the test suite, you advance. Don't, you're out.

| Round | What you must handle | Time limit |
|---|---|---|
| **Round 1** | Rook and Bishop moves | 30 min |
| **Round 2** | + Knight and Pawn (incl. double advance + captures) | 30 min |
| **Finals** | + Check, castling, en passant | 60 min |

For the **pilot**, everyone does Round 1 only. Goal is to calibrate difficulty and test the format.

---

## 4. Timing

**Total hacking time: 90 minutes** — this includes writing code, testing locally, and submitting.

There is no separate submission window. Submission is part of the 90 minutes. Last commit before the buzzer is what gets scored.

Competitors find out the challenge at the start gun. Clock starts immediately.

---

## 5. Input Format

Competitors receive a plain text file with three lines:

```
BOARD: rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR
PIECE: R
SQUARE: a1
```

**BOARD** is a 64-character string representing the board from a8 to h1 (top-left to bottom-right). Uppercase = White, lowercase = Black, `.` = empty square.

**PIECE** is the piece type (R = Rook, B = Bishop, N = Knight, P = Pawn, Q = Queen, K = King).

**SQUARE** is the piece's current location in algebraic notation (a1–h8).

---

## 6. Output Format

A sorted list of valid destination squares, one per line:

```
a2
a3
a4
a5
a6
a7
```

If no legal moves exist, output nothing (empty).

---

## 7. Scoring — Three Dimensions

Scoring has three layers. The head-to-head is the live spectacle — the earlier layers determine who gets there.

### Layer 1: Correctness (qualifies you)
- 20 hidden test cases
- 5 points per passing case = 100 points max
- Must pass at least 15/20 to be eligible for Layers 2 and 3

### Layer 2: Speed — two factors

**Submission speed:**
- +10 points if submitted within first 20 minutes
- +5 points if submitted within first 40 minutes
- Tiebreaker if Layer 1 scores are equal

**Execution speed:**
- Each test case is timed when the harness runs it
- Total runtime across all 20 cases is recorded
- Faster total runtime = tiebreaker after submission speed
- Penalty: any solution taking >2 seconds per case loses 1 point per case over the limit

This rewards writing efficient code, not just correct code. A clean lookup vs. a brute-force solution is distinguishable here.

### Layer 3: Head-to-Head (the live show)

After scoring, the **top submissions play each other in actual chess.**

How it works:
- The harness wraps each submission as a chess engine — given a full board state + whose turn it is, the engine picks a move (first move returned = chosen move)
- Two engines play a best-of-3 series, move by move, fully automated
- The game is visualised live on stream with a chess board UI
- Winner of the series wins the round

This gives the event two acts:
1. **The build** — 90 minutes of live coding on screen
2. **The battle** — submissions face off in real chess, audience watches the board

Submissions that only list moves (no move selection logic) default to picking the first legal move alphabetically — valid fallback, will play badly, which is entertaining.

**Head-to-head engine interface:**
```
BOARD: <64-char string>
TURN: w
```
Output: a single move in algebraic notation e.g. `e2e4`

---

## 8. Submission Requirements

A GitHub repo with:

```
/
├── README.md       # What you built and how
├── solution.py     # (or .js, .ts, .rb, .go — any language)
└── run.sh          # ./run.sh < input.txt  →  prints moves to stdout
```

**run.sh contract:**
- Reads from stdin (the input format above)
- Prints one square per line to stdout
- Exits cleanly
- No API keys, no network calls, no LLM at runtime

**README must include:**
- What AI tools you used during the build
- Any known edge cases your solution doesn't handle
- Anything interesting about your approach

**How to submit:**
- Post your GitHub repo URL in the competition Discord channel before the buzzer
- Last commit before the deadline is what gets scored
- Submission is part of the 90-minute window — no extensions

---

## 9. Rules

1. You may use any AI coding tool — Claude Code, Cursor, Copilot, Augment, ChatGPT, anything
2. Your submitted code must run without API keys or network access
3. You cannot submit code that calls an LLM at runtime to compute the answer
4. Any programming language is allowed as long as `run.sh` works
5. You work alone (pilot is solo — pairs format for later events)
6. No sharing solutions with other competitors during the challenge
7. **Competitors are not told the challenge topic before the event starts**

---

## 10. What Needs to Be Built (Infrastructure)

| Thing | Description | Status |
|---|---|---|
| **Test harness** | Runs `./run.sh` on 20 cases, records correctness + execution time per case | ❌ |
| **20 test cases** | Input files + expected output files for Round 1 (Rook + Bishop) | ❌ |
| **Head-to-head runner** | Wraps two submissions as engines, plays them against each other, outputs PGN | ❌ |
| **Chess board visualiser** | Takes PGN or move sequence, renders a live board on stream | ❌ |
| **Starter repo** | Public GitHub repo with input format docs + 3 sample cases — revealed at start gun | ❌ |
| **Submission intake** | Discord channel pinned with submission instructions | ❌ |
| **Leaderboard** | Live display showing scores + execution times updating in real time | ❌ |
| **Stream setup** | Capture competitor screens during the challenge (Discord Go Live / OBS) | ❌ |
| **Judging runbook** | Step-by-step doc for running harness + head-to-head post-submissions | ❌ |

---

## 11. Open Questions

1. **Move selection for head-to-head:** Should submissions just output legal moves and the harness picks the first alphabetically, or do we optionally ask competitors to support a `--play` mode that outputs a single best move?
2. **Head-to-head fallback:** If a submission crashes mid-game, forfeit that game or assign a random move?
3. **Pilot scoring:** Drop speed bonus for first pilot and just score on correctness to reduce complexity?
4. **Test case visibility:** Show competitors the 20 input files but hide expected outputs? Or fully hidden?
5. **Screen recording:** Require competitors to record their session for content / anti-cheat?
6. **Language support:** Any language fine as long as run.sh works, or cap to Python/JS to simplify judging?

---

## 12. Why This Works

- **Surprise factor** — competitors don't know what they're building until the clock starts. That's drama.
- **Simple to explain to an audience** — build a thing, it either works or it doesn't
- **Three scoring dimensions** — correctness, submission speed, execution speed reward different kinds of excellence
- **Head-to-head is the live moment** — watching two AI-generated chess engines play each other on a big board is genuinely spectacular content
- **Fully objective** — automated scoring, no subjective judging
- **Genuinely hard** — chess edge cases expose gaps in AI-generated code fast
- **Scalable** — difficulty ramps cleanly across rounds by adding piece types and rules
- **90 minutes is tight** — includes submission, so time management is part of the skill
