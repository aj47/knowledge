---
kind: note
id: video-projects-frontend-model-comparison-intent-greenfield-prompt
title: Intent greenfield frontend benchmark prompt
context: search-only
updatedAt: 1773775567358
tags: video_projects, frontend_model_comparison
createdAt: 1773774016544
summary: Build a polished, visually distinctive frontend for a fictional product called **Intent**. Intent is an agent orchestration app for software teams. It helps users manage multiple AI agents across m...
references: video-projects/frontend-model-comparison/intent-greenfield-prompt.md
---

# Intent greenfield frontend benchmark prompt

Build a polished, visually distinctive frontend for a fictional product called **Intent**.

Intent is an agent orchestration app for software teams. It helps users manage multiple AI agents across multiple workspaces, each connected to its own git worktree. The product is built around spec-driven development: users define a spec, assign work to agents, track progress across parallel workstreams, review artifacts, and merge completed work back together.

Design both:
1. a marketing landing page for Intent
2. an authenticated product dashboard for Intent

The design should feel premium, ambitious, and memorable — not like a generic AI SaaS template. It should look like a real startup with strong product thinking and a clear visual identity.

The landing page should include:
- a strong hero section
- clear messaging around agent orchestration, parallel workspaces, worktrees, and spec-driven execution
- sections explaining how the product works
- reasons this is better than using a single chat window
- social proof or credibility elements
- a final CTA

The dashboard should show a believable interface for managing multiple active agents and workspaces. It should communicate:
- multiple agents working in parallel
- multiple workspaces or worktrees
- spec status and execution progress
- active tasks, approvals, artifacts, and blocked states
- enough detail to feel like a real product, but not cluttered

Design requirements:
- prioritize strong visual hierarchy, spacing, typography, and tasteful color usage
- make it feel modern and high-end
- the landing page and dashboard should feel like the same product system
- use realistic copy, labels, and UI structure
- avoid placeholder text where possible
- avoid generic AI aesthetics, overused gradients, and bland dashboard clichés
- try at least one visual idea or interaction pattern that feels unique and specific to this product

Technical requirements:
- implement in React with Tailwind CSS
- output production-quality frontend code
- make it responsive
- use realistic mocked data throughout the dashboard so the interface can actually be explored and interacted with
- make the dashboard feel explorable as a small prototype, not just a static mock
- include believable active, blocked, completed, and waiting states in the mocked data
- do not just create a wireframe; make it feel designed

The goal is to test whether you can create frontend work that has real product taste, not just functional layout.
