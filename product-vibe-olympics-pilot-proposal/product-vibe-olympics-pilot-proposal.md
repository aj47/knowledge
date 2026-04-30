---
kind: note
id: product-vibe-olympics-pilot-proposal
title: Vibe Code Cup — Pilot Proposal, Format, and Launch Copy
context: search-only
updatedAt: 1773513802657
tags: product
createdAt: 1773373661525
summary: Update 2026-03-14: Name changed from **Vibe Olympics** to **Vibe Code Cup**. Keep legacy references only where discussing prior naming or competitor research. **Author:** Arash Joobandi (techfren)
references: product/vibe-olympics-pilot-proposal.md
---

# Vibe Code Cup — Pilot Proposal, Format, and Launch Copy

> Update 2026-03-14: Name changed from **Vibe Olympics** to **Vibe Code Cup**. Keep legacy references only where discussing prior naming or competitor research.

**Author:** Arash Joobandi (techfren)  
**Status:** Draft v2  
**Created:** 2026-03-12  
**Updated:** 2026-03-12  
**Goal:** Run the first public pilot heat within 7 days

---

## 1. Core Decision

This should be an **open event**, not invite-only.

Anyone can apply or join, but we will also:
- proactively invite strong builders/creators
- sponsor selected participants
- feature a few known names to raise the level and make the event more watchable

So the positioning is:

**Open competition. Curated energy. Sponsored featured competitors.**

---

## 2. Public Format

What the public is told:
- this is a live competitive software-building event
- competitors can use any AI tools they want during the build
- submissions must run standalone with no runtime API keys or LLM calls
- there are multiple rounds / layers of scoring
- there is a strict time limit
- top submissions advance to a live head-to-head finale

What the public is **not** told in advance:
- the exact challenge prompt
- the exact test cases
- the exact hidden evaluation details

The actual challenge lives in a **separate internal document** and is revealed only when the round starts.

---

## 3. Public Explanation of the Competition

### The one-liner

**Vibe Olympics is a live AI-first software competition where builders race to create working software under pressure.**

### How it works

Competitors show up knowing the format, but not the exact challenge.

At the start of the round:
- the challenge is revealed live
- the clock starts immediately
- competitors have **90 minutes total** to build, test, and submit

They can use any AI tools they want during the round.

When time runs out, the AI tools are gone and the submissions are judged as pure software artifacts.

### What gets judged

Submissions are judged on three dimensions:
- **correctness** — does the software actually work?
- **speed to submit** — how fast did you finish?
- **execution speed** — how fast does your code run?

Then the top entries go into a **live head-to-head battle**.

---

## 4. Pilot Structure

### Recommended structure for pilot 1
- **Open registration**
- target: 16–32 participants
- featured invited competitors: 4–8
- sponsored competitors: optional travel stipend / participation prize / fixed appearance fee
- live final showdown on stream from the top performers

### Round structure

For the pilot, keep it simple:
- **One main build round**: 90 minutes
- **Post-round scoring**: automated
- **Finale**: top submissions face off live

Longer term, this can become:
- qualifiers
- semifinals
- finals
- seasonal leaderboard

---

## 5. Internal Challenge Handling

We should separate the documents:

### Public-facing doc
Contains:
- competition format
- time limit
- rules
- allowed tools
- submission requirements
- judging dimensions
- prizes
- schedule
- FAQs

### Internal-only challenge doc
Contains:
- actual challenge prompt
- sample inputs/outputs
- hidden tests
- scoring harness details
- judging runbook
- reveal script

This preserves suspense and makes promotion much easier.

---

## 6. One-Week Execution Plan

### Day 1 — lock format + launch registration
- [ ] finalize public format doc
- [ ] finalize internal challenge doc
- [ ] create registration form / landing page
- [ ] decide date/time
- [ ] define prize pool
- [ ] define featured invite list

### Day 2 — outreach + promotion
- [ ] invite featured competitors directly
- [ ] post public announcement
- [ ] open registration publicly
- [ ] begin collecting signups
- [ ] set up Discord / event hub

### Day 3 — build judging infrastructure
- [ ] finish starter repo
- [ ] finish test harness
- [ ] finish hidden test set
- [ ] test standalone submission contract

### Day 4 — build finale / stream infrastructure
- [ ] finish leaderboard
- [ ] finish head-to-head runner
- [ ] finish board visualizer / live battle UI
- [ ] finalize OBS layout

### Day 5 — dry run
- [ ] full internal rehearsal
- [ ] run sample submissions through the harness
- [ ] test stream flow end-to-end
- [ ] finalize MC script and reveal language

### Day 6 — final marketing push
- [ ] reminder posts
- [ ] confirm featured competitors
- [ ] confirm moderators / helpers
- [ ] publish final event logistics

### Day 7 — event day
- [ ] tech check
- [ ] go live
- [ ] reveal challenge
- [ ] run 90-minute build round
- [ ] score entries
- [ ] run head-to-head finale
- [ ] announce winner

---

## 7. What Needs To Be Defined

### Competition rules
- who can enter
- solo vs teams
- what tools are allowed
- what is disallowed
- submission format
- tie breakers
- deadline policy
- failure / crash policy

### Judging
- correctness threshold
- speed scoring
- execution benchmarking method
- finale qualification rules
- how head-to-head winner is determined

### Operations
- registration flow
- Discord/server flow
- submission intake
- leaderboard updates
- stream roles
- moderation
- payout flow

### Marketing
- landing page copy
- announcement tweet/thread
- DM outreach copy
- featured competitor invite copy
- sponsor pitch copy
- reminder post copy
- post-event recap copy

---

## 8. Draft Messaging

### A. Public event description

**Vibe Code Cup is a live AI-first software competition.**

Builders get one surprise challenge, 90 minutes, and whatever AI tools they want.

When the timer ends, the AI stops mattering and the software has to stand on its own.

Entries are scored on whether they work, how fast they were submitted, and how fast they run. Then the top entries go head-to-head live.

This is not a hackathon. It's competitive software building.

### B. Short announcement post

I’m hosting the first **Vibe Code Cup** pilot next week.

It’s a live AI-first software competition:
- secret challenge
- 90 minutes
- any AI tools allowed
- standalone submissions only
- top entries battle live at the end

Open to builders. More details soon.

### C. Slightly longer announcement post

Next week I’m running the first pilot of **Vibe Code Cup**.

It’s a live competitive software-building event.

You show up not knowing the exact challenge. At the start, we reveal it live and the clock starts. You get 90 minutes to build, test, and submit using any AI tools you want.

Then we score the submissions on correctness, submission speed, and execution speed — and the top entries go into a live head-to-head finale.

Open event. We’ll also be inviting a few featured builders.

### D. Featured competitor invite DM

Hey — I’m putting together the first pilot of **Vibe Code Cup**, a live AI-first software competition.

Format is simple: competitors get a surprise software challenge, 90 minutes, and can use any AI tools they want. Final submissions have to run standalone — no runtime LLM/API dependencies.

Top entries go into a live head-to-head finale on stream.

It’s open to the public, but I’m also inviting a small number of featured builders I think would make the event stronger. Would love to have you in that group.

If you’re interested, I’ll send over details.

### E. Sponsored competitor invite DM

Hey — I’m hosting the first pilot of **Vibe Code Cup**, a live competitive software-building event.

It’s an open event, but I’m sponsoring a few strong builders to participate as featured competitors.

The format: one surprise challenge, 90 minutes, any AI tools you want, final code has to run standalone, and the top entries face off live at the end.

I think you’d be a great fit and I’d love to support your participation. If you’re interested I can send full details.

### F. Sponsor pitch blurb

Vibe Olympics is a live AI-first software competition built for the streaming era.

Competitors use real AI coding tools under time pressure to build working software on stream. The event creates native product exposure, authentic tool usage, and high-leverage content clips before, during, and after the competition.

The first pilot is open to the public, with featured invited builders and a live head-to-head finale.

### G. Registration page copy

**One challenge. 90 minutes. Live.**

Vibe Olympics is a live AI-first software competition where builders race to create working software under pressure.

You’ll get the challenge only when the round starts.
You can use any AI tools you want.
Your submission must run on its own.

Top entries advance to a live finale.

### H. Reminder post

Reminder: registration for the first **Vibe Code Cup** pilot is open.

Secret challenge. 90 minutes. Any AI tools. Standalone submissions. Live finale.

If you want to compete, sign up now.

### I. Post-event recap opener

We just ran the first **Vibe Code Cup** pilot.

Builders had 90 minutes to solve a surprise software challenge using any AI tools they wanted. Then we scored the submissions and sent the top entries into a live head-to-head finale.

Here’s what happened.

---

## 9. Recommended Next Docs

We should have four separate docs:

1. **Pilot proposal / execution plan**
2. **Public rules + format**
3. **Internal secret challenge doc**
4. **Launch / marketing copy bank**

---

## 10. Recommendation

For this week:
- make the event open
- invite a few featured competitors directly
- keep the challenge secret
- publish only the format and expectations
- keep the pilot to one 90-minute round plus a live finale

That is much easier to market, easier to explain, and preserves the surprise factor that makes the event feel special.
