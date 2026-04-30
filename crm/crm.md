---
kind: note
id: crm
title: Opportunity CRM
context: search-only
createdAt: 1775785000000
updatedAt: 1775785000000
tags: crm, outbound, deals
summary: Lightweight file-based CRM for relationships, brand targets, partnership opportunities, and follow-up tracking.
---

# Opportunity CRM

## Stages
- target
- researching
- warm
- outreach drafted
- outreach sent
- in conversation
- negotiating
- won
- lost
- parked

## Priority scale
- P0: active now
- P1: important this cycle
- P2: useful but not urgent
- P3: low urgency / watchlist

## Entry template
### Account: <name>
- Type:
- Stage:
- Priority: P0 / P1 / P2 / P3
- Why it fits:
- Audience value:
- Opportunity type:
- Confidence: low / medium / high
- Conflict / risk notes:
- Last touch:
- Next action:
- Next action due:
- Owner: AJ / agent
- References:

## Field contract
- `Priority` must use `P0` to `P3` only.
- `Stage` must match the canonical stages list above.
- `Next action` should be one concrete verb-led step.
- `Next action due` should be `YYYY-MM-DD`, `TBD`, or blank.
- `Last touch` should be `YYYY-MM-DD`, `none`, or blank.
- `Confidence` should be `low`, `medium`, or `high`.

## Initial focus buckets
- brand deals
- collaborations
- partnerships
- events
- strategic intros
