---
kind: note
id: knowledge-os
title: Knowledge OS Master Note
context: search-only
createdAt: 1775785000000
updatedAt: 1775785000000
tags: operations, knowledge, strategy
summary: Canonical operating note for AJ's personal knowledge system, including system map, source-of-truth folders, file contracts, rollout phases, and current priorities.
---

# Knowledge OS Master Note

## Purpose
This note is the canonical operating brief for the personal operating system for thinking, research, and execution.

## Core pillars
1. Knowledge graph / wiki
2. Research engine
3. Idea engine
4. Outbound / relationships / deals
5. Proactive notifications

## Constraints
- No DotAgents source-code changes
- Prefer `~/.agents` for durable config and memory
- Use external folders and separate webapps for human-facing interfaces
- Keep file contracts stable before building automation on top

## Source-of-truth locations
- Wiki content: `~/Documents/personal-wiki/wiki`
- Wiki build script: `~/Documents/personal-wiki/meta/build_site.py`
- Wiki site output: `~/Documents/personal-wiki/site`
- Durable agent memory: `~/.agents/knowledge`
- Repeat tasks: `~/.agents/tasks`
- Agent/task config: `~/.agents/agents`, `~/.agents/agents.md`
- External planning doc: `~/.agents/knowledge/knowledge-os-plan/knowledge-os-plan.md`

## Active priorities
1. Audit and stabilize wiki pipeline
2. Stand up idea backlog and research loop
3. Stand up CRM and brand-deals system
4. Add narrow Discord push notifications
5. Build lightweight dashboard only after file outputs stabilize

## File contracts to establish
- Every coordinator task writes to exactly one durable note/log
- Every system has one canonical summary note plus optional append-only logs
- Human-facing dashboards read from files rather than becoming the source of truth
- Any generated UI should be a shell over the wiki, notes, CRM, and backlog files


## Canonical file map
- Personal OS coordinator loop: `~/.agents/tasks/personal-os-loop/task.md` logs to `~/.agents/knowledge/agent-autonomy/agent-autonomy.md`
- Knowledge OS strategy and system decisions: `~/.agents/knowledge/knowledge-os/knowledge-os.md`
- Personal OS rollout plan and expansion rules: `~/.agents/knowledge/knowledge-os-plan/knowledge-os-plan.md`
- Wiki refiner runs: `~/.agents/knowledge/systems/wiki-refiner-run-log/wiki-refiner-run-log.md`
- Wiki pipeline status snapshot: `~/.agents/knowledge/systems/wiki-pipeline-status/wiki-pipeline-status.md`
- Idea pipeline schema and backlog entries: `~/.agents/knowledge/idea-backlog/idea-backlog.md`
- CRM schema and opportunity records: `~/.agents/knowledge/crm/crm.md`

## Coordination rule
If a task or subsystem needs a durable run log, point it to one canonical file instead of duplicating logging instructions across multiple notes.

## Current decisions
- Keep `wiki-refiner` focused on wiki maintenance, not whole-system orchestration
- Keep `personal-os-loop` as the only active system-improvement coordinator until the autonomy log proves a stable need for a split
- Only create a second active operating task when it clearly drives a direct leverage outcome beyond what the coordinator can do inline
- Keep Discord push disabled until signal quality is verified

## Related notes
- `brand-deals-strategy`
- `crm`
- `idea-backlog`
- `product-vibe-code-cup-master`
- `agent-autonomy`


## Ranked frontier
Use this as the default priority order for `personal-os-loop` until evidence suggests a better sequence.

1. Wiki pipeline reliability and canonical logging
2. Knowledge schema and canonical source-of-truth files
3. Local source ingestion into durable notes
4. Idea backlog and ranking system
5. Outbound / CRM scaffolding
6. Proactive notifications and async triggers

### Frontier rule
Each run should normally work on the highest unresolved item above.
If a lower item is chosen, the run log should say why.

## Intake note — 2026-04-09 22:11:45
- No structural change; intake-only update based on new external market signal.

## Intake note — 2026-04-10 00:05:00
- No structural change; intake-only update based on a local wiki classification boundary between cadence, continuity mechanics, and single-file evidence.

## Intake note — 2026-04-10 01:56:38
- No structural change; intake-only update based on a new local wiki routing contract between Personal_Systems, Research_Index, and Source_Archive.

## Intake note — 2026-04-10 11:45:00
- No structural change; intake-only update based on the newly captured completion-context routing patch in Downloads.
