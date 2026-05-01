---
kind: note
id: product-rfc-vibe-olympics
title: RFC: Vibe Olympics — Community AI Coding Competition
context: search-only
updatedAt: 1773513802658
tags: product
createdAt: 1772730698410
summary: Update 2026-03-14: the working public brand has changed to **Vibe Code Cup**. The website/hero/style decisions in `vibe-code-cup-notes-2026-03-14.md` supersede earlier branding discussion in this R...
references: product/RFC-vibe-olympics.md
---

# RFC: Vibe Olympics — Community AI Coding Competition

> Update 2026-03-14: the working public brand has changed to **Vibe Code Cup**. The website/hero/style decisions in `vibe-code-cup-notes-2026-03-14.md` supersede earlier branding discussion in this RFC. Keep this RFC mainly as strategy/history unless it is fully rewritten.

**Author:** Arash Joobandi (techfren)  
**Status:** Draft  
**Created:** 2026-03-04  
**Last Updated:** 2026-03-04  

---

## 1. Summary

Vibe Olympics is a recurring, live-streamed AI-first coding competition hosted by techfren, designed to bring together builders of all skill levels to compete using AI coding tools. Inspired by the Olympic spirit of friendly global competition, Vibe Olympics differentiates itself by being **tool-agnostic, content-native, and community-driven** — turning every event into high-engagement content while growing the techfren brand and Augment Code ecosystem.

---

## 2. Motivation & Problem Statement

### The Opportunity
- **"Vibe coding" is mainstream.** The term has exploded — market reports, hackathons (Vibeathon, Vibe Coding Games, vibeolympics.com), and mainstream coverage (Business Insider) all validate the category.
- **No dominant recurring competition brand exists yet.** Existing events are mostly one-offs:
  - **Vibe Coding Games** (thevibecodinggames.com) — Olympics-themed, targets non-technical professionals, Winter 2026, sponsor-backed (Netlify, Softr). Teams of ≤2.
  - **Vibe Olympics** (vibeolympics.com) — Bay Area in-person event (Oct 11, 2025), Frontier Tower SF, $10K+ prize, elimination format, run by AI Tinkerers SF. Confirmed single event.
  - **Vibe Olympics** (vibeolympics.org) — NYC event (Feb 26, 2026), run by PromptLayer. Head-to-head format with live audience and commentators. A second brand using the same name.
  - **Vibeathon** (BridgeMind) — Open source tool-building hackathon, $5K prizes, Feb 2026. Async/global.
  - **Vibe Coder Hackathon** (Devpost) — Standard hackathon format, Jan 2026.
  - **Vibe Coding Game Jam** (Pieter Levels) — Game-focused, March-April 2025.
- **Content creators aren't running these.** Current events are run by companies or communities — none are creator-led with a built-in audience of 130K+ followers.

### The Gap
There is no **recurring, live-streamed, tool-agnostic AI coding competition** that:
1. Creates compelling spectator content (like competitive gaming/esports)
2. Serves as a growth engine for a creator brand
3. Builds a community flywheel (competitors → viewers → competitors)
4. Showcases multiple AI coding tools in head-to-head scenarios

### Why Now
- techfren has 130K+ cross-platform audience already engaged in AI coding content
- Bold claim hooks achieve 80% success rate — competition content is inherently hook-rich
- Q2 2026 OKR already includes "Vibe Olympics" as a strategic initiative
- July 2026 visa constraint lift aligns with scaling this into a standalone venture

---

## 3. Proposal

### 3.1 Format

**Core Format: "Iron Chef meets Hackathon"**

| Element | Detail |
|---|---|
| **Duration** | 2-4 hours per event (qualifier rounds) + finals |
| **Cadence** | Monthly qualifiers → Quarterly finals → Annual championship |
| **Team Size** | Solo or pairs (max 2) |
| **Skill Levels** | Open (anyone) + Pro (experienced devs) tracks |
| **AI Tools** | Tool-agnostic — competitors choose their own stack (Claude Code, Cursor, Auggie, Copilot, etc.) |
| **Challenge Types** | Rotating categories (see 3.2) |
| **Live Stream** | Multi-POV live stream on YouTube/Twitch/Kick with commentary |
| **Judging** | Panel judges + community vote (People's Choice) |

### 3.2 Competition Categories (Rotating)

1. **Speed Build** — Build a functional app from a prompt in 60 minutes
2. **Bug Blitz** — Debug a broken codebase fastest using AI tools
3. **Vibe Roulette** — Random tech stack + random problem = chaos content
4. **Ship It** — Deploy a production-ready MVP in 2 hours (must be live on a URL)
5. **Remix Royale** — Take an existing open-source project, fork it, improve it
6. **Non-Technical Track** — For vibe coders with zero coding background (à la Vibe Coding Games)

### 3.3 Content Pipeline

Every event generates multiple content assets:

```
Live Stream (2-4 hrs)
  ├── Full VOD (YouTube)
  ├── Highlight Reel (10-15 min recap)
  ├── Individual competitor clips (60-90s each)
  ├── "Tool Comparison" cuts (how different AI tools handled same challenge)
  ├── Tweet threads + social clips
  └── Blog post / results writeup
```

**Content flywheel:**
- Competition footage → educational content ("Watch how this dev used Claude Code to...")
- Competitor profiles → interview/collab content
- Results/rankings → engagement bait + community discussion
- Tool comparisons → high-SEO, evergreen content

### 3.4 Platform & Infrastructure

| Component | Solution |
|---|---|
| **Registration** | Custom landing page or Luma/Devpost |
| **Live Streaming** | OBS Multi-source → YouTube/Twitch/Kick simultaneous |
| **Screen Capture** | Competitors share screen via Discord/Zoom stage |
| **Judging** | Custom scoring app or Google Forms + live tally |
| **Leaderboard** | Public leaderboard on website (persistent across events) |
| **Community** | Discord server with competitor channels |
| **Submissions** | GitHub repos with standardized README template |

### 3.5 Branding

- **Name:** Vibe Olympics (note: vibeolympics.com is taken — consider alternatives)
  - Alt names: **Vibe Games**, **The Vibe Cup**, **Vibe Coding League**, **VibeFest**
  - Or: acquire/partner with existing vibeolympics.com
- **Visual Identity:** Matrix aesthetic (neon green #00FF41 on black, Space Grotesk) — consistent with techfren brand
- **Tagline candidates:**
  - "Ship or Get Shipped"
  - "Where AI Builders Compete"
  - "The Arena for AI-First Builders"

---

## 4. Revenue & Monetization

### Phase 1: Brand Building (Months 1-3)
- No entry fees
- Sponsor logos on stream/assets
- Target: 2-3 small sponsors ($500-$2K each per event)
- Prize pool: $500-$1,000 (sponsor-funded)

### Phase 2: Growth (Months 4-8)
- Free entry, premium spectator perks (early access to VODs, behind-the-scenes)
- Increased sponsorship tiers ($2K-$10K per event)
- AI tool companies as category sponsors (e.g., "The Cursor Speed Build Challenge")
- Prize pool: $2,500-$5,000

### Phase 3: Scale (Month 9+)
- Pro track entry fee ($25-$50)
- Season passes for viewers
- Merch (competition tees, stickers)
- Tool affiliate revenue from competitor tool usage
- Prize pool: $10,000+
- Potential: annual in-person championship event

### Sponsor Value Prop
- Live product placement during competition (competitors actively using tools)
- Authentic tool comparisons (not paid reviews — real competitive usage)
- Access to engaged developer/builder audience
- Logo placement on all derivative content (10+ assets per event)

---

## 5. Success Metrics

| Metric | Month 1 Target | Month 6 Target | Month 12 Target |
|---|---|---|---|
| Competitors per event | 16-32 | 64-128 | 256+ |
| Live viewers (peak) | 100-300 | 1,000-3,000 | 5,000+ |
| VOD views (7 day) | 2,000-5,000 | 15,000-30,000 | 50,000+ |
| Discord members | 200 | 1,000 | 5,000+ |
| Sponsors per event | 1-2 | 3-5 | 5-10 |
| Revenue per event | $500-$1K | $5K-$10K | $20K+ |

---

## 6. Competitive Differentiation

| Feature | Vibe Olympics (ours) | Vibe Coding Games | vibeolympics.com | Vibeathon |
|---|---|---|---|---|
| **Recurring** | ✅ Monthly | ❌ One-off (Winter 2026) | ❌ Single event | ❌ One-off |
| **Live-streamed** | ✅ Multi-POV | ❓ Unknown | ✅ Yes | ❌ Async |
| **Tool-agnostic** | ✅ Any AI tool | ❓ Unknown | ✅ Yes | ✅ Yes |
| **Content-native** | ✅ Built for content | ❌ Competition-first | ❌ Event-first | ❌ Submission-first |
| **Creator-led** | ✅ 130K audience | ❌ Org-led | ❌ Community-led | ❌ Company-led |
| **Skill tracks** | ✅ Open + Pro | ✅ Non-technical | ❌ Pro only | ❌ Dev only |
| **Persistent ranking** | ✅ Season leaderboard | ❌ N/A | ❌ N/A | ❌ N/A |

---

## 7. Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| **Name conflict** (vibeolympics.com exists) | High | Use alternative name or pursue partnership/acquisition |
| **IOC trademark** ("Olympics") | Medium | Legal review; "Games" or "League" as safer alternatives |
| **Low initial turnout** | Medium | Leverage existing 130K audience; invite known creators as competitors |
| **Stream technical issues** | Medium | Dry runs; backup recording; pre-recorded segments as buffer |
| **Sponsor fatigue** | Low | Rotate sponsor categories; prove ROI with content metrics |
| **Competitor cheating** | Medium | Screen recording required; code review post-event; time-stamped commits |
| **Tool company conflicts** (working at Augment) | Medium | Strict tool-agnosticism; transparent judging; no Augment favoritism |

---

## 8. Rollout Plan

### Phase 0: Foundation (Weeks 1-2)
- [ ] Finalize branding (name, logo, visual identity)
- [ ] Set up Discord server with competitor/viewer channels
- [ ] Build simple landing page with registration
- [ ] Create competition rules document
- [ ] Design scoring rubric

### Phase 1: Pilot Event (Weeks 3-4)
- [ ] Host invite-only pilot with 8-16 competitors (friends, community members)
- [ ] Test streaming setup (OBS, multi-POV, screen sharing)
- [ ] Test judging flow
- [ ] Record and produce content from pilot
- [ ] Gather feedback, iterate format

### Phase 2: Public Launch (Weeks 5-8)
- [ ] Announce on all platforms (YouTube, TikTok, X, Discord)
- [ ] Open registration for first public event
- [ ] Secure 1-2 launch sponsors
- [ ] Host first public monthly qualifier
- [ ] Publish full content pipeline from event

### Phase 3: Establish Cadence (Months 3-6)
- [ ] Monthly qualifiers running consistently
- [ ] First quarterly finals event
- [ ] Grow sponsor relationships
- [ ] Build persistent leaderboard
- [ ] Explore partnerships with AI tool companies

---

## 9. Open Questions

1. **Naming:** Stick with "Vibe Olympics" (risk trademark issues) or rebrand? Top candidates: Vibe Games, Vibe League, The Vibe Cup
2. **Relationship with Augment Code:** Personal project or company-affiliated? (Q2 OKR mentions it under Augment context)
3. **In-person vs. online:** Start fully remote or hybrid? (SF-based events could leverage local AI community)
4. **Augment Code integration:** Should Augment Code be the platform/tooling behind the competition infrastructure?
5. **Partnerships:** Reach out to Vibe Coding Games / vibeolympics.com organizers for collaboration vs. competition?

---

## 10. References

- **Vibe Coding Games:** https://thevibecodinggames.com/ — Global, non-technical, Olympics-themed, 1000+ signups
- **Vibe Olympics (vibeolympics.com):** https://vibeolympics.com/ — Bay Area, Frontier Tower SF, $10K+ prize, Oct 11 2025, run by AI Tinkerers SF
- **Vibe Olympics (vibeolympics.org):** https://vibeolympics.org/ — NYC, Feb 26 2026, run by PromptLayer. Head-to-head live format with commentators
- **Vibeathon (BridgeMind):** https://www.bridgemind.ai/vibeathon — Open source tools, $5K, Feb 2026
- **Vibe Coding Game Jam:** https://www.g-prompter.com/retrogame/index.html — Game-focused, March 2025
- **Vibe Coder Hackathon (Devpost):** https://vibe-coder-hackathon.devpost.com/ — Standard hackathon, Jan 2026
- **Research:** "Vibe Coding vs. Graduate CS Students" — LLMs failed at strategic planning that students solved

---

*This RFC is a living document. Comments and feedback welcome.*

---

## 11. Draft Outreach Message

Hey — I’m putting together the first heat of **Vibe Olympics**, a live AI coding competition I’m starting.

The format for this first one is simple: a small group of strong builders gets one genuinely hard problem and about an hour to solve it using **any AI tools or agents** they want. It’ll be live on Discord/YouTube, and the goal is to make it competitive, fun to watch, and a legit test of how people actually build with these tools.

Longer term, I want this to become a recurring series — regular heats leading into a bigger annual championship with much larger prizes and eventually in-person events too. This first round is about getting the right people involved early and proving out the format.

For this first heat, everyone selected to compete gets a **$100 gift card** just for participating, and the preliminary winner gets a **$1,000 prize**.

I’m reaching out because I think you’d be a great fit for the first group.

If you’re interested, fill out this form — mainly just who you are, what your skills are, and your background: [FORM LINK]
