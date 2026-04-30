---
kind: note
id: product-dotagents-mono-issue-sync-2026-03-07
title: DotAgents Mono — Issue/Notes Sync
context: search-only
updatedAt: 1772917460542
tags: product
createdAt: 1772917460536
summary: **Date:** 2026-03-07 **Repo:** https://github.com/aj47/dotagents-mono Document current pending trust/safety and UX priorities in GitHub issues, and capture a local planning note for execution.
references: product/dotagents-mono-issue-sync-2026-03-07.md
---

# DotAgents Mono — Issue/Notes Sync
**Date:** 2026-03-07
**Repo:** https://github.com/aj47/dotagents-mono

## Objective
Document current pending trust/safety and UX priorities in GitHub issues, and capture a local planning note for execution.

## GitHub issue updates posted
- #58 Conversation History data integrity
  - https://github.com/aj47/dotagents-mono/issues/58#issuecomment-4017361769
  - Added acceptance criteria: raw event persistence, context/storage separation, UI affordances, migration marker for partial recoverability.

- #57 Bundle import safety
  - https://github.com/aj47/dotagents-mono/issues/57#issuecomment-4017361771
  - Added defaults: pre-import snapshot backups, conflict default=skip, cherry-pick import, restore workflow.

- #56 Hub inspector modal
  - https://github.com/aj47/dotagents-mono/issues/56#issuecomment-4017361775
  - Added v1 modal sections + safety badges (MCP commands, memories, large prompt content).

- #25 Bundle spec umbrella
  - https://github.com/aj47/dotagents-mono/issues/25#issuecomment-4017361768
  - Added cross-issue execution sequence and explicit trust goal.

## Recommended execution order
1. #57 Import safety (snapshot + conflict preview + cherry-pick)
2. #56 Inspect-before-install modal
3. Fold defaults/UX learnings into #25 spec docs
4. #58 Conversation history persistence and auditability

## Why this order
- User trust is the bottleneck for bundle adoption.
- Reversible import + transparent inspection reduces fear and support burden.
- Data-integrity guarantees prevent irreversible loss from summarization.

## Notes
All currently-open dotagents-mono issues are unassigned and have no milestone. Treat #57/#56/#25/#58 as the active trust track.
