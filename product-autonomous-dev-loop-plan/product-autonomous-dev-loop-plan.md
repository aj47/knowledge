---
kind: note
id: product-autonomous-dev-loop-plan
title: Autonomous Dev Loop — Plan
context: search-only
updatedAt: 1772511508658
tags: product
createdAt: 1772511508652
summary: **Date:** 2026-03-03 **Status:** PLANNING (needs AJ approval before execution) --- A closed-loop system where coding agents autonomously: 1. Pick up GitHub issues → write code → create PRs
references: product/autonomous-dev-loop-plan.md
---

# Autonomous Dev Loop — Plan
**Date:** 2026-03-03
**Status:** PLANNING (needs AJ approval before execution)

---

## Vision
A closed-loop system where coding agents autonomously:
1. Pick up GitHub issues → write code → create PRs
2. Test PRs locally end-to-end (typecheck + vitest + build)
3. Run PR review loop (another agent reviews the code)
4. Only then surface to AJ for final merge approval

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    TRIGGER LAYER                             │
│  (Repeat task OR manual "work on issue #X")                 │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              PHASE 1: ISSUE → CODE (Claude Code)            │
│                                                              │
│  1. Pick highest-priority issue labeled `agent-ok`           │
│  2. Create branch: `agent/<issue-slug>`                      │
│  3. Claude Code CLI writes the code:                         │
│     claude --print -p "Implement issue #N..." \              │
│       --allowedTools "Edit,Write,Bash,Read" \                │
│       --max-turns 30                                         │
│  4. Commit + push branch                                     │
│  5. Create draft PR                                          │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              PHASE 2: LOCAL E2E TESTING                      │
│                                                              │
│  Run in the dotagents-mono repo on the agent branch:         │
│                                                              │
│  Step 1: pnpm install (if deps changed)                      │
│  Step 2: pnpm -w run build:shared                            │
│  Step 3: pnpm --filter @dotagents/desktop typecheck          │
│  Step 4: pnpm --filter @dotagents/desktop test:run           │
│  Step 5: pnpm --filter @dotagents/desktop build              │
│          (includes typecheck + tests + electron-vite build)  │
│                                                              │
│  If ANY step fails → agent attempts auto-fix (max 2 retries) │
│  If still failing → comment on PR with error, label `needs-  │
│  human`, stop.                                               │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              PHASE 3: PR REVIEW LOOP                         │
│                                                              │
│  A DIFFERENT agent (Augustus/Augment) reviews the PR:        │
│                                                              │
│  1. Read PR diff via GitHub API                              │
│  2. Check for:                                               │
│     - Type safety issues                                     │
│     - Missing error handling                                 │
│     - Breaking changes to existing APIs                      │
│     - Test coverage (new code should have tests)             │
│     - Code style / naming consistency                        │
│  3. If issues found → REQUEST_CHANGES + comment              │
│     → Back to Phase 1 agent to fix                           │
│     → Max 3 review cycles                                    │
│  4. If clean → APPROVE + remove draft status                 │
│  5. Notify AJ: "PR #X ready for final review"               │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              PHASE 4: AJ FINAL REVIEW                        │
│                                                              │
│  AJ reviews + merges (or requests more changes)              │
│  This is the human-in-the-loop safety gate.                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Prerequisite: Get Claude Code Working as ACP Agent

### Current State
- `claude` CLI v2.1.63 is installed ✅
- ACP service in DotAgents supports stdio agents ✅
- Augustus (Augment) is already configured as an ACP agent ✅
- Claude Code has NOT been successfully set up as ACP agent ❌

### What We Need To Do
1. **Test Claude Code CLI directly first:**
   ```bash
   cd ~/Development/dotagents-mono
   echo "What files are in the current directory?" | claude --print
   ```
   Verify it can read the repo, access tools, etc.

2. **Test Claude Code in headless/non-interactive mode:**
   ```bash
   claude --print -p "List all open issues for this project" \
     --allowedTools "Bash(git:*),Read,Write"
   ```

3. **Configure Claude Code as ACP agent in DotAgents:**
   - Add agent profile with connection type `acp`
   - Command: `claude` (or full path)
   - Args: appropriate flags for ACP/stdio mode
   - Working directory: `~/Development/dotagents-mono`

4. **Test delegation from DotAgents → Claude Code:**
   - `delegate_to_agent(agentName: "claude-code", task: "Read README.md and summarize")`

### Blocker Investigation Needed
- What failed previously when trying to set this up?
- Is it a spawn issue, JSON-RPC protocol mismatch, or auth issue?
- Check: `claude mcp --help` and `claude --help` for ACP/stdio flags

---

## Phase 1 Implementation: Issue → Code

### New Skill: `dev-loop-coder`
Triggers: "work on issue", "implement issue #X", "pick up next issue"

**Workflow:**
1. Query GitHub for open issues labeled `agent-ok` in `aj47/dotagents-mono`
2. Pick the highest priority one (by label: `priority-high` > `priority-medium`)
3. Read the issue body thoroughly
4. `git checkout main && git pull`
5. `git checkout -b agent/<issue-number>-<slug>`
6. Invoke Claude Code to implement:
   ```bash
   claude --print -p "You are implementing GitHub issue #N for the DotAgents project.
   
   Issue title: <title>
   Issue body: <body>
   
   Project: Electron + React + TypeScript monorepo.
   Key dirs: apps/desktop/src/main/ (Electron main), apps/desktop/src/renderer/ (React UI)
   Tests: vitest, colocated .test.ts files
   
   Requirements:
   - Write clean TypeScript
   - Add/update tests for any new functionality
   - Don't break existing functionality
   - Follow existing code patterns
   
   Implement this now." \
     --allowedTools "Edit,Write,Bash(pnpm:*,git:*,node:*,npx:*),Read" \
     --max-turns 30
   ```
7. Run Phase 2 (testing) inline
8. If tests pass: `git add . && git commit && git push`
9. Create draft PR via GitHub API

### Labels System
- `agent-ok` — Agent is allowed to work on this issue
- `agent-wip` — Agent is currently working on this
- `agent-review` — PR created, in review phase
- `needs-human` — Agent got stuck, needs AJ

---

## Phase 2 Implementation: Local E2E Testing

### New Skill: `dev-loop-tester`
Triggers: "test PR", "run e2e on branch", "verify build"

**Test Pipeline:**
```bash
# In ~/Development/dotagents-mono on the PR branch
pnpm install                                    # Deps
pnpm -w run build:shared                        # Shared package
pnpm --filter @dotagents/desktop typecheck      # Types
pnpm --filter @dotagents/desktop test:run       # Unit tests (vitest)
# Optional: pnpm --filter @dotagents/desktop build  # Full electron build
```

**On failure:**
1. Parse error output
2. Send error back to coding agent with context
3. Coding agent attempts fix (max 2 retries)
4. If still failing: comment on PR, label `needs-human`

---

## Phase 3 Implementation: PR Review Loop

### New Skill: `dev-loop-reviewer`
Triggers: "review PR #X", "run review loop"

**Review Checklist:**
1. Get PR diff via `get_pull_request_files()`
2. Read each changed file fully (not just the diff)
3. Check against criteria:
   - [ ] TypeScript types are correct (no `any` escape hatches)
   - [ ] Error handling present (try/catch, null checks)
   - [ ] No breaking changes to exported APIs
   - [ ] New code has corresponding tests
   - [ ] Follows existing patterns (import style, naming, file structure)
   - [ ] No security issues (no hardcoded secrets, proper input validation)
   - [ ] PR description matches the implementation
4. Submit review via `create_pull_request_review()`
5. If REQUEST_CHANGES: coding agent fixes → re-test → re-review (max 3 cycles)
6. If APPROVE: mark PR ready for review, notify AJ

---

## Repeat Task Configuration

### Option A: Scheduled (runs every N hours)
```
Name: "Autonomous Dev Loop"
Interval: 360 min (every 6 hours)
Prompt: "Check for open issues labeled `agent-ok` in aj47/dotagents-mono.
         If any exist, pick the highest priority one and run the full
         dev loop: implement → test → review → surface for merge."
```

### Option B: On-Demand Only (safer for initial setup)
AJ triggers manually: "work on issue #25" or "pick up next issue"

**Recommendation: Start with Option B** until we've proven the loop works
reliably, then graduate to Option A.

---

## Open Questions for AJ

1. **Claude Code as ACP — what went wrong before?**
   Do you remember the specific error? Was it during spawn, during
   communication, or did it never connect at all? This is the #1 blocker.

2. **Which agent should CODE vs REVIEW?**
   - Option A: Claude Code writes code, Augustus (Augment) reviews
   - Option B: Claude Code does both (different sessions)
   - Option C: Augustus writes code, Claude Code reviews
   - Recommendation: Option A (different models catch different things)

3. **Which issue should we pilot on?**
   - #23 (Agent Selection UI) — medium complexity, UI work
   - #25 (Import/Export Bundles) — high complexity, backend + UI
   - #26 (Mobile respond_to_user) — low-medium, mobile only
   - Or: Create a small test issue specifically to prove the loop?

4. **Build step — full Electron build or just typecheck + tests?**
   Full build (`pnpm build`) takes longer but catches more. Typecheck +
   vitest is faster. For the loop, which do you prefer?

5. **PR auto-merge — ever?**
   Current plan: agent creates PR, reviews it, but AJ always merges.
   Do you ever want agents to auto-merge if CI passes + review approved?
   (I'd say no for now.)

---

## Implementation Order

1. ⬜ **Get Claude Code ACP working** (BLOCKER — nothing works without this)
2. ⬜ **Create `dev-loop-tester` skill** (test pipeline script)
3. ⬜ **Create `dev-loop-reviewer` skill** (PR review checklist)
4. ⬜ **Create `dev-loop-coder` skill** (issue → code → PR)
5. ⬜ **Create `dev-loop-orchestrator` skill** (ties 1-3 together)
6. ⬜ **Pilot on a small issue** (prove the loop end-to-end)
7. ⬜ **Add `agent-ok` labels to real issues**
8. ⬜ **Set up repeat task** (graduate from manual to scheduled)

---

## Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| Agent writes bad code | Phase 2 catches build/test failures; Phase 3 catches logic issues |
| Agent gets stuck in loop | Max retries at every phase (2 fix attempts, 3 review cycles) |
| Agent breaks main branch | Never pushes to main — always branches + draft PRs |
| Claude Code ACP doesn't work | Fallback: shell out to `claude` CLI directly via execute_command |
| Runaway costs | Max turns on Claude Code (30); max retries (2); scheduled not continuous |
| Agent works on wrong thing | `agent-ok` label gate — only tagged issues get picked up |
