---
kind: note
id: product-dotagents-current-framing
title: DotAgents Current Product Framing
context: search-only
createdAt: 1776826669
updatedAt: 1777350441328
tags: product, strategy, dotagents
summary: Current durable DotAgents framing: capability-first trading system, search → click → use UX, cloud/background agents as infrastructure, and onboarding optimized for first successful trade.
references: product-dotagents-current-framing.md
---

# DotAgents Current Product Framing

## Current framing
- The sharper DotAgents differentiator is a capability-first trading system: users should search → click → use capabilities, not think about setup.
- Treat cloud/background agents as infrastructure that executes trades reliably, not the headline pitch.
- Optimize onboarding around the first successful trade.

## Implications
- Capability discovery and install UX should feel more important than config complexity.
- Starter packs and discovery flows should support the first-success path, not become the main story.
- Cloud/background execution matters, but as reliability plumbing behind the product wedge.


## Runtime delegation capability
- As of 2026-04-27 testing, DotAgents internal subagent delegation works for simple nested chains through at least depth 3 (`level 1 -> level 2 -> level 3`) with no file changes required for trivial echo/ping tasks.
- A concurrent sub-session ceiling of 5 can be hit during broad/parallel delegation tests; treat that as an expected configured limit, not automatically a product failure.

## Continuous-task emergency stop expectation
- Conversation-sourced product expectation (2026-04-22): if AJ emergency-stops a continuously running task, that stop should fully prevent the task from automatically picking back up/restarting.
- This was filed as GitHub issue `aj47/dotagents-mono#379` (“Emergency stop should fully stop continuously running tasks”).
- Treat this as a durable product bug/behavior expectation for DotAgents continuous-task execution, not a one-off support request.

Confidence: **0.93** from an explicit user-reported product behavior and completed issue creation.

