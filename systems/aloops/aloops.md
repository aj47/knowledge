---
kind: note
id: aloops
title: aloops
context: search-only
updatedAt: 1773019427172
tags: 
createdAt: 1773019427165
summary: **Location**: `~/Development/aloops` | **GitHub**: `aj47/aloops` (private) **Purpose**: Reusable autonomous agent loops that continuously work on `../dotagents-mono` - [ ] **Orchestrate the loops**...
references: aloops.md
---

# aloops

**Location**: `~/Development/aloops` | **GitHub**: `aj47/aloops` (private)
**Purpose**: Reusable autonomous agent loops that continuously work on `../dotagents-mono`

## Goals
- [ ] **Orchestrate the loops** — decide which loops to run, when, and in what order
- [ ] **Fix damage caused by loops** — audit commits made by loops, revert or fix bad changes

## Key tool: loopctl.sh
- `./loopctl.sh menu` — interactive picker
- `./loopctl.sh dashboard interactive` — live TUI for all loops
- `./loopctl.sh status` — worktree state, running state, dirty state
- `./loopctl.sh start <loop>` — launch in background
- `./loopctl.sh stop <loop>` — graceful stop after current iteration
- `./loopctl.sh cleanup all` — stop all lingering workers
- `./loopctl.sh stream <loop>` — single-loop live TUI

## Available Loops
| Loop | Script | Focus |
|------|--------|-------|
| bug-fix | `bug-fix-loop.sh` | Find & fix one real bug, repeat |
| improve-app | `improve-app-loop.sh` | High-value product improvements |
| ui-audit | `ui-audit-loop.sh` | UI/design/layout audits |
| compact-ui | `compact-ui-loop.sh` | UI density, decluttering, overlay-occlusion |
| visible-ui | `visible-ui-loop.sh` | Screenshot-driven visual improvements |
| tiling-ux | `tiling-ux-loop.sh` | Tiling/resizing UX |
| issue-work | `issue-work-loop.sh` | GitHub issue work with verification |
| streaming-lag | `streaming-lag-loop.sh` | Chrome/Electron perf profiling for streaming lag |
| langfuse-bug-fix | `langfuse-bug-fix-loop.sh` | Langfuse trace-driven bug fixes |
| mobile-app-improvement | `mobile-app-improvement-loop.sh` | Mobile improvements via Expo Web |
| sub-agents-mobile-view | `sub-agents-mobile-view-loop.sh` | Sub-agent/delegation UX on mobile |

## Current Status (as of Mar 8 2025)
- **compact-ui-loop**: RUNNING (last log update 16:13)
- All others: STOPPED (.stop files created at 09:16)

## Worktree Layout
- Base repo: `../dotagents-mono`
- Worktrees: `../dotagents-mono-worktrees/<loop-name>/`
- Branches: `aloops/<loop-name>`

## Damage Assessment (TODO)
- Need to audit what commits the loops have made to dotagents-mono
- Check each loop branch for unreviewed/bad changes
- Commands to use:
  - `git log --oneline aloops/<loop-name>` in dotagents-mono
  - `./loopctl.sh status` to see dirty worktrees

## Orchestration Notes
- Use `LOOP_MAX_ITERATIONS=1` for one-shot smoke tests
- Use `ALOOPS_COMMIT_QA_ENABLED=0` to disable post-commit QA temporarily
- Named instances allow parallel workers: `./loopctl.sh ensure issue-work triage-1`
- Priority order TBD — suggest: damage audit first, then selective restart
