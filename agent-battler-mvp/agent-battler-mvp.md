---
title: Agent Battler MVP
context: search-only
updated: 2026-04-24
---

# Agent Battler MVP

## Core pitch
Objectively judged hard coding competitions for AI agents.

Hook: You think your AI coding setup is elite? Prove it.

Updated durable framing from the pitch sprint: Agent Battler is an arena where **pre-made agent harnesses / AI coding setups compete on the same prompt(s)** under the same rules. The product tests agent setups — prompts, routing logic, tool choices, wrappers, and execution strategy — rather than only raw models or agents built from scratch.

Core line: **Same prompt. Same constraints. Different agents. Best setup wins.**

Audience: AI-native builders, vibe coders, and agent hackers who want to compete with their best agent harnesses — model, prompts, tools, and workflow included.

Tight positioning: **Daily coding battles for AI-native builders. Submit your agent. Beat the field. Win the pot.**

Theme tie-in: Most developers will use AI. A few will master it. Agent Battler makes that visible.

## Hackathon scope
Ship only:
1. JS file submission
2. Task runner
3. Scoring
4. Leaderboard

Cut for now:
- agent-vs-agent direct battling
- benchmarking suite
- real-money/staking economy
- complex task generation

## Strong constraint
- single file
- JavaScript
- max 50KB

This is the product.

## Best MVP shape
Use one visually strong arena screen with 4 panels:
1. Submit Agent
2. Task Queue
3. Live Match / Run Log
4. Leaderboard

## Demo architecture
### Submission
- upload `.js`
- reject > 50KB
- submission represents a compact agent harness / setup, not necessarily a from-scratch agent
- extract filename, size, submission time
- locally assign handle/name

### Runner
Run each submitted agent against the same fixed task set:
- code completion
- bug fix
- small algorithm task

Each task provides:
- prompt/input
- expected output or tests
- max runtime

Execution model:
- browser Worker or sandboxed eval wrapper
- timeout per task
- capture stdout/errors

Expected agent shape:
```js
export async function solve(task) {
  return { output: "...", patch: "..." }
}
```
Fallback for hackathon:
```js
module.exports = async function solve(task) { ... }
```

### Scoring
Per task:
- correctness: 0-1
- completeness: 0-1
- speed bonus: optional small multiplier

Recommended simple formula:
`score = correctness * 0.8 + completeness * 0.2`

If timeout/error:
- score = 0
- mark failed

### Leaderboard
Use simple rating first:
- aggregate normalized task score
- optional fake/soft ELO update for demo polish

Recommended hackathon compromise:
- store `arenaScore`
- derive displayed `ELO = 1000 + round(arenaScore * 400)`

This looks like ELO without needing true pairwise infra.

## Demo task pack
Keep tasks tiny and deterministic.

### Task 1: Bug fix
Input: broken function
Expected: corrected return behavior

### Task 2: Completion
Input: partially implemented helper
Expected: valid completed function

### Task 3: Algorithm
Input: array / string challenge
Expected: exact output

Need only 3 tasks for demo.

## Visual direction
Make it feel like a sport / trading terminal / esports dashboard.

Visuals to emphasize:
- large leaderboard ranks
- submission cards with weight/size badge
- live run indicators
- pass/fail streaks
- constraint badge: `50KB MAX`

Words to use in UI:
- Arena
- Submission
- Match Queue
- Rank
- Score
- Constraint
- Verified
- Failed

## Best user story for demo
1. Upload agent file
2. System validates `single-file JS <= 50KB`
3. Click `Run Arena`
4. Show tasks executing live
5. Show scored results
6. Leaderboard updates

That is enough.

## Pitch video script
### Beat 1 — Hook
Everyone thinks their AI coding setup is elite. Agent Battler is where you prove it.

### Beat 2 — Problem
AI coding agents are everywhere: Cursor setups, Claude Code workflows, Codex wrappers, custom prompts, tool configs, and agent harnesses. But people still compare them through screenshots, demos, and vibes.

### Beat 3 — Solution
Agent Battler gives each submitted harness the same prompt/task, the same rules, and the same constraints. Same prompt. Same constraints. Different agents. Best setup wins.

### Beat 4 — Constraint
One JavaScript file. 50KB max. Fit the strategy, prompts, routing logic, and execution behavior into the constraint.

### Beat 5 — Flex
Show run log, task scores, leaderboard movement, and setups rising or falling based on performance rather than hype.

### Beat 6 — CTA
Submit your harness. Prove your setup. Climb the leaderboard.

## On-screen copy
- Prove your stack.
- Same tasks. Same constraints. No excuses.
- 50KB changes everything.
- Rank is earned.
- Escape the permanent underclass.

## If building inside existing desktop app
Safest low-effort integration:
- add `/arena` route
- add sidebar nav item `Arena`
- implement fully client-side page
- no backend dependency
- use seeded demo tasks + local state + localStorage

## Secondary: MyCode improvements
Only if arena is done.

Add:
- quality score
- delta vs previous run
- artifact diversity
- milestone progress
- penalty for markdown-only outputs

Best visualization:
- iteration timeline
- score trend sparkline
- milestone chips

## Priority order
1. Arena route/page
2. Upload + runner + scoring + leaderboard
3. Seed fake agents for visual fullness
4. Record pitch video
5. Optional MyCode metrics panel

## Current implemented state (2026-04-22)
High-confidence implementation update from the desktop-app MVP sprint:
- `/arena` route exists in the desktop app.
- Sidebar includes an `Arena` nav item.
- `arena.tsx` implements the MVP shell fully client-side.
- Submission flow validates single-file JavaScript with a 50KB max.
- The page includes seeded demo tasks, a Worker-based task runner, the recommended `0.8 correctness + 0.2 completeness` scoring, a leaderboard with display ELO, a run log/task-results view, and localStorage persistence.

## Implementation notes
- Validation used targeted syntax/transpile checks on touched files because the repo-wide TypeScript check was already failing from unrelated existing errors.
- At handoff time, `src/renderer/src/pages/arena.tsx` was new/untracked and `src/renderer/src/components/app-layout.tsx` plus `src/renderer/src/router.tsx` were modified.
- Highest-leverage next polish for demos: stronger seeded fake agents, tighter copy, and more dramatic leaderboard motion.

