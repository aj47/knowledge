---
kind: note
id: product-dotagents-mono-issue-57-implementation-plan-2026-03-07
title: DotAgents Mono — Issue #57 Implementation Plan
context: search-only
updatedAt: 1772923470212
tags: product
createdAt: 1772918150454
summary: **Date:** 2026-03-07 **Issue:** https://github.com/aj47/dotagents-mono/issues/57 **Issue comment:** https://github.com/aj47/dotagents-mono/issues/57#issuecomment-4017388517 **Trust order:** #57 -> ...
references: product/dotagents-mono-issue-57-implementation-plan-2026-03-07.md
---

# DotAgents Mono — Issue #57 Implementation Plan
**Date:** 2026-03-07
**Issue:** https://github.com/aj47/dotagents-mono/issues/57
**Issue comment:** https://github.com/aj47/dotagents-mono/issues/57#issuecomment-4017388517
**Trust order:** #57 -> #56 -> #25 -> #58

## Objective
Turn bundle import safety into an implementation-ready sequence using the existing desktop bundle flow rather than creating a parallel path.

## Current touchpoints
- `apps/desktop/src/main/bundle-service.ts`
- `apps/desktop/src/main/tipc.ts`
- `apps/desktop/src/renderer/src/components/bundle-import-dialog.tsx`
- `apps/desktop/src/renderer/src/pages/settings-agents.tsx`
- `apps/desktop/src/renderer/src/pages/settings-capabilities.tsx`
- `apps/desktop/src/main/hub-install.ts`

## Phased plan

### Phase 0 — pipeline contract
- Keep one flow: preview -> backup -> import apply -> runtime refresh.
- Treat `previewBundleWithConflicts` as the dry-run source of truth.
- Add a typed import-plan/result contract through TIPC carrying selected components, per-item decisions, and backup metadata.
- Require zero writes during preview/conflict analysis.

**Exit:** preview fully describes changes without touching disk.

### Phase 1 — snapshot + restore
- Add pre-import backup export to `~/.agents/backups/backup-{timestamp}.dotagents` before first write.
- Reuse bundle export code so backups are valid restorable `.dotagents` files.
- Rotate to last 10 backups.
- Return backup path in import result and surface it in UI.
- Add restore entrypoint under Settings -> Capabilities.

**Exit:** every import creates a restorable backup before mutation.

### Phase 2 — conflict model
- Expand preview payload to classify each item as add or conflict.
- For conflicts, support per-item `skip` / `overwrite` / `rename`, defaulting to `skip`.
- Use stable identity keys by component type: profile id, MCP server name, skill id, task id, memory id.
- Define deterministic rename rules and show the resolved target name in preview.

**Exit:** known-collision bundles produce stable per-item decisions with default skip.

### Phase 3 — selective apply
- Preserve component-level toggles already present in the import dialog.
- Extend final import plan to include per-item include/exclude and conflict overrides.
- Ensure deselected/skipped items never hit disk.
- Return imported/skipped counts plus backup metadata.

**Exit:** one run can mix overwrite, rename, and skip safely.

### Phase 4 — preview UX
- Upgrade `bundle-import-dialog.tsx` from summary to diff-style grouped preview.
- Show backup notice before confirm.
- Add per-conflict controls inline.
- Reuse same flow for Hub installs opened from `settings-agents.tsx`.
- Block confirm until preview is loaded and decisions are valid.

**Exit:** local and Hub bundle installs share the same inspect-before-write UX.

### Phase 5 — validation + follow-through
- Add unit tests for snapshot export, backup rotation, conflict detection, rename logic, and selective import.
- Add renderer coverage or smoke coverage for default skip behavior and component toggles.
- Run manual smoke path: safe import, conflicting import, restore from backup.
- Reuse the final preview metadata contract in #56 and fold settled semantics into #25.

**Exit:** trust-critical logic is covered and later trust-track issues reuse the same contract.

## Immediate execution focus
Start with the backend contract in `bundle-service.ts` + `tipc.ts` so snapshot/preview/apply metadata is stable before touching dialog UX. That creates the reusable foundation for #56 inspector work and for the spec cleanup in #25.


## Multi-bundle swapping addendum (2026-03-07)

### Current behavior (important)
- Bundle import is merge-based, not slot activation.
- Conflict handling is skip/overwrite/rename for collisions only.
- Non-conflicting prior items remain, so repeated imports can accumulate stale config.
- Backups are write-level safety nets; no first-class “switch bundle preset” UX yet.

### Product requirement
Support easy switching between multiple bundles with no destructive merge side effects.

### Proposed model
- Introduce `bundle slots` under `~/.agents/bundle-slots/{slotId}/`.
- Maintain `active-slot.json` pointer.
- Load active slot as a high-priority layer during runtime config merge.
- Switch = pointer flip + runtime refresh.
- Import target options: `current slot` or `new slot`.

### Why this solves trust
- Reversible by design (instant rollback to prior slot)
- Isolation between setups (no stale carry-over)
- Predictable mental model (activate preset vs merge into live config)
