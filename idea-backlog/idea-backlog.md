---
kind: note
id: idea-backlog
title: Idea Backlog
context: search-only
createdAt: 1775785000000
updatedAt: 1775785000000
tags: ideas, research, backlog
summary: Ranked backlog for theories, project ideas, research directions, and experiments, scored by impact, feasibility, and alignment.
---

# Idea Backlog

## Ranking dimensions
- impact
- feasibility
- alignment with current goals
- speed to first proof
- compounding potential

## Statuses
- inbox
- researching
- ready
- active
- shipped
- parked

## Scoring contract
- Score `Impact`, `Feasibility`, `Alignment`, `Speed`, and `Compounding` on a `1-5` scale.
- Use whole numbers only to keep ranking simple and grep-friendly.
- `Priority score` should equal the sum of the five dimension scores.
- `First next step` should be one concrete verb-led action.
- `Source notes` should point to the smallest durable input file that justifies the idea.
- If an idea is too vague to score, keep it in `inbox` until clarified.

## Entry template
### Idea: <title>
- Status:
- Type: theory / project / research direction / activity / content / outbound
- Why it matters:
- Inputs / source notes:
- Impact: 1-5
- Feasibility: 1-5
- Alignment: 1-5
- Speed: 1-5
- Compounding: 1-5
- Priority score:
- First next step:
- Owner:

### Idea: DotAgents completion context routing
- Status: inbox
- Type: project
- Why it matters: The routing patch suggests a useful separation between transcript and MCP completion contexts plus better generation metadata and failure logging.
- Inputs / source notes: ~/.agents/knowledge/knowledge-inbox/knowledge-inbox.md; ~/Downloads/dotagents_title_routing_fix.patch
- Impact: 3
- Feasibility: 4
- Alignment: 4
- Speed: 4
- Compounding: 3
- Priority score: 18
- First next step: Review whether this pattern should be mirrored in adjacent completion paths.
- Owner: AJ
