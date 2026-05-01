---
kind: note
id: product-vibe-code-cup-master
title: Vibe Code Cup — Master Doc
context: search-only
updatedAt: 1774726500000
tags: product
createdAt: 1774726500000
summary: Canonical master note for Vibe Code Cup. Consolidates latest event status, product decisions, live website/backend state, open questions, and source references. Update this doc first for all future Vibe Code Cup changes.
references:
  - /Users/ajjoobandi/Documents/agent-notes/product/vibe-code-cup-master-plan-2026-03-26.md
  - /Users/ajjoobandi/Documents/agent-notes/product/vibe-code-cup-manager-update-package-2026-03-26.md
  - /Users/ajjoobandi/Documents/agent-notes/product/vibe-code-cup-public-rules-2026-03-24.md
  - /Users/ajjoobandi/Development/vibe-code-cup/public/index.html
  - /Users/ajjoobandi/Development/vibe-code-cup/public/apply-competitor.html
  - /Users/ajjoobandi/Development/vibe-code-cup/public/apply-sponsor.html
  - /Users/ajjoobandi/Development/vibe-code-cup/functions/api/apply.js
  - /Users/ajjoobandi/Development/vibe-code-cup/functions/api/subscribe.js
  - /Users/ajjoobandi/Development/vibe-code-cup/d1/schema.sql
---

# Vibe Code Cup — Master Doc

This is the canonical, always-update-first knowledge note for Vibe Code Cup.

If future work changes strategy, event details, website copy, sponsorship structure, forms, backend behavior, or ops status, update this file first and treat it as the single source of truth.

## Current status

Vibe Code Cup is the active public name and positioning for the event formerly explored as Vibe Olympics / Vibe Coding Olympics.

The project currently has:
- a defined public event concept
- a live landing-site implementation under `~/Development/vibe-code-cup`
- application and subscriber backend endpoints backed by Cloudflare Pages Functions + D1
- product planning notes from March 24–26 that are more current than the older March 12–14 Vibe Olympics notes

## Locked context

These are the latest stable decisions recovered from the product notes and current site:

- Public name: **Vibe Code Cup**
- Tone: **elite competition**
- Core format: **all tools allowed** during the build window
- Build window: **90 minutes**
- Challenge reveal: **at live kickoff**
- Confirmed target date in planning notes: **Saturday, April 11**
- Participation target in outreach notes: **~100 online participants**
- Preferred geography for optional in-person component: **San Francisco**
- In-person footprint target: **50–100 people** if space is available
- Venue needs: desks, power, reliable internet, presenter area
- Venue preference: donated space preferred, but paid venue still possible
- Prize direction: **$2,000 first prize** plus **3 runner-up prizes at $500 each in gift cards**
- Additional upside discussed: sponsor gifts and possible featured-builder appearance fees
- Partner structure is intentionally flexible: title sponsor, presenting/challenge sponsors, prize partners, venue partners, media/community partners
- Featured participants can join remotely if they participate publicly

## Core positioning

The current framing is not just “a hackathon.” It is a creator-friendly, watchable, competitive coding event designed to surface top builders, strong workflows, and the tools they use.

Best shorthand:
- elite builders
- timed challenge
- hard prompt revealed live
- all tools allowed
- entertaining to watch

Working entertainment layer from planning notes:
- livestreamed event
- athlete-style competitor interviews
- post-match analysis
- live results / public score visibility

## Website state in repo

Repo: `~/Development/vibe-code-cup`

### Landing page metadata currently live in `public/index.html`

- Title: `Vibe Code Cup`
- Meta description: `Vibe Code Cup. All tools allowed. 90-minute hack sprint. Hard challenge disclosed at kickoff.`
- OG/Twitter description: `Elite builders • Timed challenge • Hard reveal at kickoff. All tools allowed.`
- Current public URL in metadata: `https://vibe-code-cup.pages.dev/`

### Public messaging currently visible from site files

The site is already aligned with the strongest concise positioning:
- Vibe Code Cup
- all tools allowed
- 90-minute sprint / hack sprint
- hard challenge revealed at kickoff
- elite-builder framing

There are dedicated apply pages for:
- competitors
- sponsors

## Backend state in repo

### Application API

File: `functions/api/apply.js`

`POST /api/apply` expects JSON with:
- `name` (required)
- `email` (required)
- `type` (required)
- `githubUrl` (optional)
- `socialUrl` (optional)
- `description` (optional)

Behavior:
- rejects missing `name`, `email`, or `type` with 400
- inserts into D1 `applications` table
- returns JSON success message on success

### Subscriber API

File: `functions/api/subscribe.js`

`POST /api/subscribe` expects JSON with:
- `email` (required)

Behavior:
- rejects missing email with 400
- inserts into D1 `subscribers` using `INSERT OR IGNORE`
- duplicate subscriptions are ignored gracefully

### Database schema

Files:
- `d1/schema.sql`
- `d1/0001_add_subscribers.sql`

Current tables:

#### `applications`
- `id`
- `type` (`competitor` or `sponsor`)
- `name`
- `email`
- `github_url`
- `social_url`
- `description`
- `created_at`

#### `subscribers`
- `id`
- `email` unique
- `created_at`

## Product/ops interpretation

What is already true:
- the event brand has clearly moved from “Vibe Olympics” to **Vibe Code Cup**
- the best public hook is concise and performance-oriented, not explanatory
- sponsor and competitor intake flows exist
- the website and backend are real enough to support early demand capture
- the latest planning notes indicate the project is in an execution / partner-closing / launch-prep phase rather than pure concepting

## Likely operating model

Based on the notes and site state, the intended event model appears to be:
- open application funnel
- featured or sponsored builders on top of the open pool
- online-first participation
- optional in-person SF venue for production energy and spectatorship
- live reveal of a difficult challenge
- short, intense timed build window
- public judging/results content layer

## Important unresolved items

These should be treated as open until explicitly locked here:

- final venue confirmed or not
- final sponsor roster
- exact judging rubric and weights
- final challenge selection
- final host/run-of-show
- official application close date
- exact prize funding source(s)
- production staffing and livestream tooling
- whether public rules page fully matches internal ops plan

## Recommended next-work priorities

If resuming work, the highest-leverage questions are:

1. Is April 11 still the target date, or has the date moved?
2. Which sponsors/partners are actually committed vs. aspirational?
3. Is the SF venue secured?
4. Does the public site copy still match the current plan?
5. Are application submissions already flowing into D1 in production?
6. What still needs to be locked for rules, judging, and challenge reveal mechanics?

## Canonical guidance for future updates

For any future Vibe Code Cup work:
- update this document first
- treat older Vibe Olympics notes as historical context only
- when details conflict, prefer the newest dated source unless superseded here
- if site/backend reality differs from planning notes, record both and state which one is authoritative

## Source hierarchy

Use this priority order when reconciling future updates:

1. This master doc
2. The current code/site implementation in `~/Development/vibe-code-cup`
3. The newest dated planning notes in `~/Documents/agent-notes/product/`
4. Older Vibe Olympics / Vibe Code Cup notes in `~/.agents/knowledge/`

## Related historical notes

Older context exists in these knowledge notes and should be considered background, not the canonical source:
- `product-vibe-olympics-pilot-proposal`
- `product-vibe-code-cup-notes-2026-03-14`
- `product-vibe-coding-olympics-format-notes-2026-03-13`
- `product-vibe-olympics-public-format`
- `product-vibe-olympics-outreach-status`
- `product-vibe-olympics-hard-challenge-candidates`
- `product-vibe-olympics-site-reviews-vibe-code-cup-current`
- `product-vibe-olympics-site-reviews-vibe-code-cup-refined`

## Last consolidation

Consolidated on 2026-03-28 from:
- current website repo files
- Cloudflare Pages function files
- D1 schema files
- March 24–26 product notes
- earlier `.agents` Vibe Olympics / Vibe Code Cup knowledge notes
