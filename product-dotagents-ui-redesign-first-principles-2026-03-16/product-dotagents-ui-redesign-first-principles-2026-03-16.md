---
kind: note
id: product-dotagents-ui-redesign-first-principles-2026-03-16
title: DotAgents UI redesign — first principles
context: search-only
updatedAt: 1773717942105
tags: product
createdAt: 1773717942101
summary: Core thesis: DotAgents should not be redesigned as a prettier chatbot. It should be redesigned as a trustworthy operating surface for directing, observing, interrupting, and reviewing autonomous work.
references: product/dotagents-ui-redesign-first-principles-2026-03-16.md
---

# DotAgents UI redesign — first principles

Core thesis: DotAgents should not be redesigned as a prettier chatbot. It should be redesigned as a trustworthy operating surface for directing, observing, interrupting, and reviewing autonomous work.

Five questions the UI must answer:

1. What is happening?
2. Why is it happening?
3. What can I do next?
4. What could go wrong?
5. Can I trust this result?

Core model:

- unit of work: task/run
- unit of progress: step/action
- unit of trust: reviewable execution history + approvals + verification
- unit of review: artifact/diff/result
- unit of memory: durable preference or operating context

Recommended shell:

- left rail: tasks / queue / automations
- center: task workspace
- right rail: live activity / approvals / controls

Docs created in `apps/desktop/docs/redesign/`.
