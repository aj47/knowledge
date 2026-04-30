---
kind: note
id: video-projects-augment-intent-multi-agent-coordination-script-notes-2026-03-13
title: Intent / Multi-Agent Coordination — Script Notes
context: search-only
updatedAt: 1773432070332
tags: video_projects, augment_intent
createdAt: 1773432070332
summary: Sources: - `Visualizing multi-agent coordination pain points` - `Multi-agent coordination without the chaos` Date distilled: 2026-03-13 The strongest phrasing from the exchange was not generic “ter...
references: video-projects/augment-intent/multi-agent-coordination-script-notes-2026-03-13.md
---

# Intent / Multi-Agent Coordination — Script Notes

Sources:
- `Visualizing multi-agent coordination pain points`
- `Multi-agent coordination without the chaos`
Date distilled: 2026-03-13

## Real pain language that felt authentic
The strongest phrasing from the exchange was not generic “terminal chaos.”
It was:
- making worktrees
- coordinating subagents manually
- managing drift
- watching each agent interpret the task differently

## Best distillation
> The bottleneck is not code. It is orchestration.

That is the message anchor.

## Script shape
- Hook
- Pain
- Pivot
- Solution
- CTA

## Strong pain section
A realistic pain section should talk about:
- spinning up worktrees
- manually coordinating subagents
- spec drift across agents
- merge/conflict overhead from parallel work

Avoid fake pain like excessive copy-pasting between terminals if it does not match real operator behavior.

## Product positioning
Intent is positioned as:
- the layer above isolated coding agents
- a unified workspace for multi-agent execution
- a place where the spec stays live and coordination stays aligned

## Good line to preserve
“Beyond the IDE” / “the evolution past the IDE” works if tied to the coordination problem, not used as abstract hype.

## Operational side note captured
Useful cleanup commands from the same conversation:
```bash
git worktree remove ../feature-memory-management
git branch -D agent/feature-memory-management
```
