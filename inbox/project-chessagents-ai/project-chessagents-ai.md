---
kind: note
id: project-chessagents-ai
title: chessagents.ai
context: search-only
updatedAt: 1777349941930
tags: project, research, chess, vibe-code-cup, ai-agents
createdAt: 1776118020000
summary: Research note for chessagents.ai. Captures verified live-site details, likely origin context from Vibe Code Cup #1, product mechanics, and remaining gaps.
references:
  - https://chessagents.ai
  - https://devpost.com/software/agentic-chessmaster
  - https://hack-the-vibe.devpost.com/
  - https://www.youtube.com/watch?v=lIBZB8rX9E0
---

# chessagents.ai

## Status

`chessagents.ai` is now verified as a live project site.

Directly verified from the live site:
- site title: **Chess Agents | AI Arena & Leaderboard**
- author shown in crawl metadata: **Chess Agents Team**
- status: **V.03 / Open Competition**
- reward: **$150.00 Monthly Prize Pool**
- positioning: **“Make an engine with AI. Enter it. See how it ranks.”**
- format: submit simple **Python** or **JavaScript** chess agents that play **24/7** in an automated arena
- principle: **“Proof of work is determined by result, not theory.”**

## What it is

Chess Agents is a live competitive arena for lightweight AI chess engines.

Participants submit UCI-compatible chess agents in Python or JavaScript. The platform validates them, schedules automated matches every 30 seconds, and maintains an Elo-style leaderboard.

This is not just a chess-playing app for end users. It is a competitive infrastructure product for:
- prompting/building chess agents with LLMs
- validating them quickly
- running them in a persistent automated ladder
- ranking them by actual game outcomes

## Verified live-site details

### Core flow

The site describes a 3-step workflow:

1. **Generate**
   - Ask Claude or GPT-4o to write a **UCI-compatible** chess engine in Python or JS
   - Explicit message: **no manual coding required if you prompt well**

2. **Validate**
   - The platform probes each engine against a **FEN string**
   - Goal: ensure the submission is playable before admission

3. **Survive**
   - Automated arena matches are scheduled every **30 seconds**
   - Agents climb based on actual win/loss performance

### Ladder protocol

Verified rules/mechanics shown on the site:
- **Elo-aware pairing** using proximity-based matchmaking
- **Persistent runtimes** stay loaded in workers for full **10-game match cycles**
- **Placement phase** for the first **30 games** of a new submission
- **4h rematch cooldown** between the same pair of engines
- **5 seconds per move total time budget**
- **2 games per match** with alternating colors
- **Unlimited engines per account**
- **No sockpuppets or flooding**
- **Standard library only**; allowed examples shown: `math`, `random`, `sys`
- **No external packages**
- validation takes **less than 10 seconds**

### Live standings observed during crawl

Top visible ladder entries at time of research:
1. `@vajradhar` — **1730**
2. `@vibe-code-cup` — **1602**
3. `@newjordan` — **1539**
4. `@newjordan` — **1537**
5. `@pomterre` — **1532**

Important signal:
- a visible entrant handle is **`@vibe-code-cup`**, which strongly supports a relationship between the project and Vibe Code Cup branding/community

## Relation to Vibe Code Cup #1

User-provided context says `chessagents.ai` came from **Vibe Code Cup #1**.

Research now gives partial supporting evidence:
- the site is live and real
- the public leaderboard includes **`@vibe-code-cup`** as a visible account/entrant
- a YouTube result for **“Vibe Code Cup #1 — Elite AI Coding Competition”** confirms Vibe Code Cup #1 existed as a live event on **2026-04-11**
- AJ already has internal knowledge notes for Vibe Code Cup as an active project/event line

What is still not independently verified from first-party text:
- no direct line on the live site saying “this was built at Vibe Code Cup #1”
- no recovered first-party announcement explicitly stating origin/creator history

Best current assessment:
- **High confidence** that `chessagents.ai` is related to the Vibe Code Cup ecosystem
- **Moderate confidence** that it originated from **Vibe Code Cup #1**, based on user context plus the `@vibe-code-cup` leaderboard signal

## Product shape

Current product shape is clearer than earlier research suggested.

This is primarily:
- an **AI chess engine arena**
- an **automated leaderboard / ladder**
- a **prompt-to-agent competition loop**
- a lightweight submission system for **single-file Python/JS engines**

It is **not** currently best described as a consumer chess app with explanation/voice features.

## Earlier likely match: Agentic-ChessMaster

Earlier search results surfaced **Agentic-ChessMaster** on Devpost as the strongest chess-related public match.

That project included:
- human-vs-human and human-vs-AI modes
- **Claude 3.5** FEN-based strategy analysis
- **VAPI** voice agent
- **Stockfish** integration
- move logging / replay
- stack including **React**, **TypeScript**, **react-chessboard**

Current assessment after verifying `chessagents.ai`:
- `Agentic-ChessMaster` is still useful as adjacent context
- but the live `chessagents.ai` site points to a different or evolved direction: **competitive submitted agents in an arena** rather than a voice/analysis chess app
- connection between the two remains **unverified**

## Important facts worth remembering

- Project name: **chessagents.ai**
- Verified product title: **Chess Agents | AI Arena & Leaderboard**
- Verified team label in crawl metadata: **Chess Agents Team**
- Current version/status: **V.03 / Open Competition**
- Prize pool: **$150/month**
- Submission languages: **Python** and **JavaScript**
- Submission format: **UCI-compatible engine**
- Match cadence: **every 30 seconds**
- Time control: **5 seconds per move total**
- Placement period: **first 30 games**
- Pair cooldown: **4 hours**
- Match format: **2 games**, alternating colors
- Worker behavior: **persistent runtimes**, **10-game match cycles**
- Important branding signal: visible entrant **`@vibe-code-cup`**

## Local engine artifact: Stockfish 11 single-file Python wrapper

Conversation-sourced update (2026-04-27): AJ asked for a chess engine that could beat `tomiv2.js` while staying under 1 MB and deployable as a single JS/Python file. A Stockfish 11 classical/POPCNT native binary was embedded into a single Python UCI wrapper and copied into:

```text
/Users/ajjoobandi/Development/aj-demos/agentchess/agents/stockfish11_single.py
```

Verified in that conversation:
- file size: **204,176 bytes (~199 KB)**
- executable and responds to UCI
- no external NNUE file required because Stockfish 11 is pre-NNUE
- local benchmark against `/Users/ajjoobandi/Development/aj-demos/agentchess/agents/tomiv2.js` using the existing harness: **4W 0D 0L** at 300ms/move; all wins by checkmate
- a 1000ms/move run started and Stockfish won game 1 before the command timed out

Caveat: this wrapper embeds a macOS native binary, so treat it as portable only for compatible macOS/CPU targets unless rebuilt.

Confidence: **0.94** as local project state from a completed assistant run; not a public `chessagents.ai` fact.

## Confidence / gaps

High confidence:
- `https://chessagents.ai` is live
- it is an AI chess arena + leaderboard product
- it runs an open competition with monthly prize pool
- it supports Python/JS UCI engines under strict sandbox constraints
- it is meaningfully related to Vibe Code Cup branding/community

Medium confidence:
- the project came directly from **Vibe Code Cup #1**
- `Chess Agents Team` is the operative public team identity

Low confidence until verified:
- exact founders / individual creators
- backend implementation details
- whether there is a public repo
- whether Agentic-ChessMaster is a precursor, separate project, or unrelated

## Next verification targets

1. fetch more first-party pages/subpages from `chessagents.ai`
2. look for X/LinkedIn/GitHub announcements naming creators
3. find a public repo or submission docs
4. find explicit first-party wording tying the project to **Vibe Code Cup #1**

## User-provided ownership / attribution updates

From direct user statement in conversation:
- the user **owns the `chessagents.ai` domain**
- the user also **bought `codingcup.ai`**
- **Jaymart** built the product quickly and has continued improving it

Confidence classification:
- high confidence as **conversation-sourced context**
- not yet independently verified from a public first-party page unless separately confirmed

Implications:
- `codingcup.ai` may be strategically related branding, event, or distribution infrastructure connected to the same ecosystem
- creator/ownership attribution should distinguish between **domain ownership**, **product implementation**, and **public team branding**

## AgentChess autoresearch harness plan

Conversation-sourced update (2026-04-27): AJ is working in:

```text
/Users/ajjoobandi/Development/agentchess-ar
```

Goal: adapt Karpathy-style `autoresearch` to build the best chess agent under the Chess Agents runtime constraints: stdin FEN input, stdout UCI move output, legal move, 5 seconds per move, 256 MB memory, 1 CPU core, standard-library-only style constraints, no `fs` / `child_process` / network, and preferably persistent process reuse.

Durable harness design decisions from the planning pass:
- `agentchess-ar` currently uses Node/CommonJS, `chess.js`, and existing harness pieces including `harness/arena.js`, `harness/adapters.js`, `harness/match.js`, `harness/match_parallel.js`, `harness/ship_check.js`, and `harness/tune_lozza.js`.
- Initial plan identified `agents/candidate.js` as a Tomitank-derived editable target, but AJ clarified the stronger baseline: **`agents/stockfish11_single.py` is the current best agent** and should be forked as the incumbent/baseline path.
- The autoresearch harness should allow the one editable file to be either **`agents/candidate.py` or `agents/candidate.js`**. Prefer `candidate.py` initialized from the Stockfish 11 wrapper when the competition/runtime rules allow the embedded-native-binary pattern; otherwise fall back to a pure Python/JS engine candidate.
- Harness adapters should be language-flexible: spawn `.py` with `python3`, `.js` with `node`, and support separate `stdio:` candidate agents plus `uci:` script agents for evaluation-only UCI engines such as `stockfish11_single.py`.
- Incumbent comparison should prioritize `candidate.py` vs `incumbent.py` / `stockfish11_single.py`, while retaining Tomitank/Lozza/Stockfish-limited opponents as regression or pool opponents rather than treating the JS Tomitank candidate as the best baseline.
- The directory was not a git repo during the planning pass; `git init` or moving into a repo is a prerequisite because the autoresearch loop depends on commit/reset semantics.
- Add one stable parseable evaluation command, e.g. `node harness/evaluate_candidate.js`, that emits score rate, Elo diff, games, W/D/L, illegal moves, time forfeits, peak RSS, and status.
- Use a staged evaluation ladder: 16–24 paired-game fast gate, 80–120 paired-game main gate across a fixed opponent pool, and 200–400 game promotion gate for promising candidates.
- Maintain an incumbent separately from the editable candidate, with names matching language choice such as `agents/incumbent.py` / `agents/candidate.py` or `.js`; compare every experiment to incumbent plus fixed opponents before promoting.
- Append every experiment to `results.tsv` with commit, timestamp, status, stage, score metrics, failures, runtime/memory, description, and hypothesis.
- Run protocol and banned-API/security checks before scoring, including rejection of `fs`, `child_process`, network APIs, and final-candidate `eval`/dynamic imports where applicable.
- Use fixed paired opening seeds and deterministic evaluation by default; save per-game JSON and aggregate score rate, Elo estimate, illegal/timeouts, average/p95 move time, peak RSS, loss reasons, per-opening score, and color split.
- Acceptance thresholds should account for chess variance: discard fast-gate runs only when clearly worse or invalid; keep main-gate runs only when they beat incumbent by roughly 2–3 points or tie with simpler/faster/lower-memory code; require larger promotion-gate evidence before replacing incumbent.

Recommended first implementation tasks:
1. initialize git in `agentchess-ar`
2. add chess-specific `program.md`
3. add `results.tsv` header
4. build `harness/evaluate_candidate.js`
5. build `harness/security_check.js`
6. fork `agents/stockfish11_single.py` into the incumbent/candidate path when allowed, otherwise copy the best pure Python/JS candidate into `agents/incumbent.*`
7. run a baseline evaluation and record it

Confidence: **0.95** for AJ's explicit correction that `stockfish11_single.py` is the current best baseline and the editable candidate may be Python or JavaScript; implementation state and final sandbox compatibility should be rechecked before acting.

## AgentChess autoresearch implementation state

Verified local state from the 2026-04-27 AgentChess Autoresearch Harness conversation and follow-up filesystem check:
- `agents/incumbent.py` exists and was forked from the Stockfish 11 single-file baseline.
- `agents/candidate.py` exists as the editable Python candidate path.
- `harness/security_check.js` exists and syntax-checks; it performs a conservative candidate-file scan, treating Python network imports and dynamic execution as hard failures while leaving the embedded Stockfish wrapper's local process/file behavior as a policy caveat until final sandbox rules are confirmed.
- `harness/evaluate_candidate.js` exists and syntax-checks; it is the parseable evaluation entrypoint intended to emit status, score rate, Elo diff, W/D/L, illegal moves, time forfeits, crashes, seconds, and peak RSS placeholder.
- Initial follow-up state: `program.md`, `results.tsv`, and git initialization were missing, so agents should not rely on the first setup commit alone as a complete handoff.
- Later verified state from the same 2026-04-27 harness thread: git is initialized; commit `1769b12` set up the autoresearch chess harness; commit `95860ae` clarified the autoresearch handoff contract; `program.md` exists with the loop contract; and `results.tsv` exists with the expected header.
- `program.md` is intended to be sufficient onboarding for a new autoresearch agent when combined with the repository state. It now tells agents to check git status/current commit, read recent `results.tsv` and logs, write one small hypothesis before editing, edit only `agents/candidate.py` by default, commit before evaluation, parse metrics, append every experiment to `results.tsv`, and end each loop cleanly committed or reset-to-known-good.
- `results.tsv` currently only has the header; no baseline score has been recorded yet. Future agents should run and append the first baseline/evaluation result before treating performance claims as durable.
- Follow-up repeat-trainer loop committed `738698e` (`Tune default hash to 64MB`), changing `agents/candidate.py` default Stockfish `Hash` from `128` MB to `64` MB. This is implementation state only: it has not yet been evaluated or logged in `results.tsv`, so do not treat it as a proven strength improvement.
- AJ clarified the intended autoresearch behavior: the candidate should always compete against and optimize relative to the most recent best, not only against the original frozen Stockfish baseline. Current verified behavior was described as `agents/candidate.py` hill-climbing from latest kept code while `agents/incumbent.py` remains frozen; recommended durable design is a moving `agents/champion.py` copied from each promoted best, with `incumbent.py` retained as the original external baseline and regression reference.

Confidence: **0.95** for the verified local handoff state and commit IDs; **0.94** for commit `738698e` as verified local repo state; **0.94** for AJ's moving-best/champion expectation as a durable harness requirement; baseline scores and final sandbox compatibility still need a real evaluation run before promotion.

