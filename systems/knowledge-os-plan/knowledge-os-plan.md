---
kind: note
id: knowledge-os-plan
title: Personal OS Plan
context: search-only
createdAt: 1775785200000
updatedAt: 1777591679329
tags: strategy, operations, knowledge
summary: Canonical plan for AJ's personal operating system using only DotAgents config, knowledge, tasks, and external file/webapp layers.
references:
  - ~/.agents/knowledge/knowledge-os/knowledge-os.md
  - ~/.agents/knowledge/agent-autonomy/agent-autonomy.md
---

# Personal OS Plan

## Constraint
Do not modify DotAgents source code. Build this system through:
- `~/.agents/tasks`
- `~/.agents/knowledge`
- optional `~/.agents/skills`
- external folders, scripts, and webapps layered on top of file-based state

## Core principle
Start with one tight feedback loop, not many tasks.

The first loop should:
1. inspect the current state of the knowledge / planning system
2. choose one highest-leverage small improvement
3. apply or draft that improvement in files
4. log what happened
5. define the next likely improvement

## Initial operating priority
1. stabilize the wiki / knowledge pipeline
2. tighten the logging + feedback loop
3. only then expand into ideas, CRM, outbound, and proactive messaging

## System shape
### Primary durable notes
- `~/.agents/knowledge/knowledge-os/knowledge-os.md`
- `~/.agents/knowledge/knowledge-os-plan/knowledge-os-plan.md`
- `~/.agents/knowledge/agent-autonomy/agent-autonomy.md`
- `~/.agents/knowledge/crm/crm.md`
- `~/.agents/knowledge/idea-backlog/idea-backlog.md`
- `~/.agents/knowledge/brand-deals-strategy/brand-deals-strategy.md`
- `~/.agents/knowledge/vibe-code-cup-growth/vibe-code-cup-growth.md`

### First active task
- `~/.agents/tasks/personal-os-loop/task.md`

Everything else stays disabled or becomes future backlog until this loop proves useful.

## Success criteria for the first loop
- produces one useful improvement or one clear proposal per run
- writes to a durable log every run
- avoids noisy thrash
- helps converge on a stable knowledge system
- surfaces repeated failure modes so the task prompt can be improved

## Next-stage expansion
After the first loop is working reliably, split into specialized loops only if the logs show stable repeated work categories.


## Risk mitigation for the first day
- Avoid consecutive edits to `personal-os-loop/task.md` unless a real blocking defect was observed.
- Judge the loop by durable artifacts created, not by how many prompt refinements it makes.
- Expect the first day to produce contracts, checklists, and logs, not a finished system.
- Only split into specialized tasks after the autonomy log shows repeated stable categories.
- Prefer one canonical file per subsystem so future loops do not create duplicate sources of truth.

## Knowledge vault cleanup baseline — 2026-04-30
Recent knowledge cleanup established this baseline for future agents:
- `~/.agents/knowledge` is a lightweight markdown-first git repo, pushed to `https://github.com/aj47/knowledge` on `main`.
- Binary/media assets were intentionally removed from the knowledge vault and `.gitignore` now prevents common media types from being tracked.
- Current organization work should proceed in small, reviewable batches from an audit/proposed-move-map first, not by bulk moving or merging.
- Reusable tooling now exists in the vault under `tools/`: `audit_knowledge.py`, `normalize_frontmatter.py`, `propose_taxonomy.py`, and `analyze_duplicates.py`.
- Current reports live under `reports/`: `knowledge-audit.md`, `proposed-taxonomy.md`, `duplicate-title-review.md`, and `cleanup-next-steps.md`.
- Next safest cleanup unit: rename ambiguous duplicate-title notes, especially X feed summaries, before deleting/merging or doing taxonomy moves.
