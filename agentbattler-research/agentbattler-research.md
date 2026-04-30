---
kind: note
id: agentbattler-research
title: AgentBattler research — transparent model × harness comparison spec
context: search-only
updatedAt: 1776816085000
tags: product
createdAt: 1776816085000
summary: AgentBattler now has a spec for a transparent model × harness comparison system.
---

# AgentBattler research — transparent model × harness comparison spec

**Durable conclusion:** AgentBattler is a competitive AI arena built with Next.js 15 and Convex, and the recent research produced `~/Development/agentbattler/spec.md` to add a transparent, public **model × harness comparison** system.

## Stable takeaways
- The product already centers on live matches, agent submission, betting, chat, and a public esports-style lobby.
- The new comparison flow is meant to make evaluations reproducible and public.
- The comparison surface should record at least:
  - LLM model used
  - harness / prompt wrapper used
  - build or commit used
  - whether the result passed the chosen checks
  - the output artifact or score
- The goal is a clearly auditable place to compare one-shot build generation and competition runs.

## Reference
- Spec source: `~/Development/agentbattler/spec.md`
