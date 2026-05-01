---
kind: note
id: branding-dotagents-brand-direction
title: DotAgents — Brand & Design Direction
context: search-only
updatedAt: 1772142039822
tags: branding
createdAt: 1772142039809
summary: **Date:** 2026-02-26 **Author:** AJ (via agent brainstorm) --- DotAgents sits at an intersection of **three things**: 1. **A desktop app** — voice-first AI agent interface (the product people downl...
references: branding/dotagents-brand-direction.md
---

# DotAgents — Brand & Design Direction
**Date:** 2026-02-26
**Author:** AJ (via agent brainstorm)

---

## THE IDENTITY PROBLEM RIGHT NOW

DotAgents sits at an intersection of **three things**:
1. **A desktop app** — voice-first AI agent interface (the product people download)
2. **An open standard** — the `.agents/` protocol for skills, memories, commands across tools
3. **A CLI tool** — `dot-agents` for unified agent config management

The brand needs to unify all three under one roof while being distinct from:
- **dotagent.org** — the `.agent` TLD registry (different project, confusing name overlap)
- **dot-agents.com** — the CLI config tool by someone else (DIRECT name collision)
- **dotdo.ai / agents.do** — similar naming pattern in the agent space
- **Sentry's @sentry/dotagents** — package manager for `.agents` directories

**This is a real problem.** The namespace is getting crowded. The brand needs to carve out unmistakable territory.

---

## BRAND POSITIONING

### The One-Liner
**"Your AI team. One voice away."**

### The Elevator Pitch
DotAgents is the desktop app that gives you a team of AI specialists — each with memory, skills, and tools — controlled by your voice. It's built on the `.agents` open standard, so your skills work across Claude Code, Cursor, Codex, and every tool adopting the protocol.

### Brand Archetype: **The Orchestrator**
Not a single chatbot. Not a coding assistant. An **orchestrator** of AI agents that work for you. Think less "tool" and more "command center." Less Copilot, more Jarvis.

### Competitive Position
| Competitor | Their Vibe | DotAgents Counter |
|---|---|---|
| Cursor | Sleek IDE, developer-first | We're agent-first, not editor-first |
| OpenClaw | DIY hacker playground | We're the finished product |
| Raycast | Productivity launcher | We're AI-native, voice-native |
| Linear | Opinionated, minimal, fast | Inspiration for our design language |

---

## DESIGN DIRECTION: THREE OPTIONS

### Option A: "PROTOCOL NATIVE" — The Linear/Raycast Path
**Vibe:** Clean, monochrome, developer-credible, premium
**Colors:** 
- Primary: Pure white (#FFFFFF) + Near-black (#0A0A0A)
- Accent: Electric violet (#7C3AED) — stands out in a sea of blue AI tools
- Secondary: Soft gray (#F4F4F5) for surfaces
**Typography:** 
- Headlines: Inter or Geist (geometric, modern, what Linear/Vercel use)
- Mono: JetBrains Mono or Geist Mono for code/terminal contexts
**Logo concept:** 
- The dot (`.`) is the star — literal period/dot as the icon
- `.agents` rendered in monospace as the wordmark
- The dot could animate (pulse when listening, orbit when thinking)
- Keeps connection to the `.agents/` directory standard
**Tone:** Technical, confident, understated. "We don't need to shout."
**Best for:** Developer credibility, protocol adoption, open-source community
**Risk:** Could feel cold/generic. May not stand out in crowded AI space.

---

### Option B: "VOICE COMMAND CENTER" — The Superhuman/Arc Path
**Vibe:** Dark, atmospheric, premium-feeling, slightly futuristic
**Colors:**
- Primary: Deep navy/black (#0B1120) background
- Accent: Warm amber/gold (#F59E0B) — feels like mission control
- Secondary: Cool slate (#334155) for cards/surfaces
- Glow effects: Subtle amber radial gradients behind active elements
**Typography:**
- Headlines: Space Grotesk or Plus Jakarta Sans (distinctive, modern)
- Body: Inter (readability)
**Logo concept:**
- Sound wave / voice waveform integrated into a dot grid
- The "dot" in DotAgents visualized as a central node with radiating connections
- Animation: waveform pulses when voice is active
**Tone:** Commanding, premium, "your AI ops center"
**Best for:** Standing out visually, conveying the voice-first UX, feeling premium
**Risk:** Could feel over-designed. Dark themes can feel less approachable.

---

### Option C: "FRIENDLY AGENTS" — The Notion/Vercel Path
**Vibe:** Warm, approachable, modern but human, open-source energy
**Colors:**
- Primary: Off-white (#FAFAF9) + warm charcoal (#292524)
- Accent: Coral/salmon (#F97316) — warm, energetic, human
- Secondary: Warm stone (#E7E5E4)
- Illustrations: Hand-drawn or geometric agent characters
**Typography:**
- Headlines: Satoshi or General Sans (friendly geometric)
- Body: Inter
**Logo concept:**
- Friendly dot character — a circle with subtle personality (tiny eyes? antenna?)
- Each agent type gets a variation (different color, different accessory)
- The "." becomes a character, not just a symbol
**Tone:** Approachable, community-first, "AI agents for everyone"
**Best for:** Broader audience, community building, the "frens" vibe from your earlier branding
**Risk:** Could undercut technical credibility. "Cute" can feel unserious.

---

## MY RECOMMENDATION: OPTION A WITH HINTS OF B

### "Protocol Native with a Pulse"

Take the clean, developer-credible foundation of Option A but inject the **energy and atmosphere** of Option B:

**Color System:**
- Background: Near-black (#09090B) for dark mode (primary), white for light mode
- Text: #FAFAFA on dark, #09090B on light
- **Accent: Electric violet (#7C3AED)** — ownable, distinct from:
  - Cursor (blue)
  - Linear (blue/purple but more muted)
  - Raycast (red/coral)
  - OpenAI (green/black)
  - Anthropic (tan/orange)
- Glow: Violet radial glow behind key elements (subtle, not garish)
- Surface: #18181B for cards on dark

**Logo:**
- **The Animated Dot** — a single dot (`.`) that is alive
  - Resting: solid violet circle
  - Listening: pulsing/breathing animation
  - Thinking: orbiting particles or rotating ring
  - Speaking (TTS): waveform emanating from the dot
  - Working: dot splits into multiple smaller dots (agents delegating)
- Wordmark: `dotagents` in lowercase monospace, violet dot, rest in white/black
- Favicon/app icon: The violet dot on dark background

**Typography:**
- Headlines: **Geist** (Vercel's font — free, modern, perfect for dev tools)
- Body: **Geist** (same family, great readability)
- Code/mono: **Geist Mono**
- This gives instant "modern dev tool" recognition

**Voice/Tone:**
- Headlines: Short, punchy, imperative. ("Hold. Speak. Done." / "Your agents. Your voice.")
- Body: Clear, technical but accessible. No jargon for jargon's sake.
- Personality: Confident but not arrogant. The tool speaks for itself.

---

## NAMING & URL STRATEGY

### The Namespace Problem
- `dot-agents.com` — taken (the CLI config tool)
- `dotagent.org` — taken (the TLD registry)
- `dotagents.com` — check availability?
- `dotagentsprotocol.com` — you may already own this?

### Recommendations
1. **Own `dotagents.ai`** if available — the `.ai` TLD is standard for AI products now
2. **Use "DotAgents" (one word, capital D and A)** — distinct from "dot-agents" (hyphenated CLI tool)
3. **The protocol site** should be separate: `dotagentsprotocol.com` or `agents-protocol.dev`
4. **GitHub:** Rename repo from `aj47/speakmcp` → `aj47/dotagents` or create `dotagents` org

### Brand Hierarchy
```
DotAgents (parent brand)
├── DotAgents Desktop    — the app (dotagents.ai or dotagents.com)
├── .agents Protocol     — the open standard (dotagentsprotocol.com)  
└── dot-agents CLI       — wait, this is someone else's project
```

**Critical decision:** Do you differentiate from the `dot-agents` CLI or absorb/collaborate with it? They're solving an adjacent problem (config unification) that you also solve. Could be a competitor or a partner.

---

## IMMEDIATE BRAND ACTIONS

### Week 1: Foundation
- [ ] Decide on Option A/B/C direction (I recommend A+B hybrid)
- [ ] Secure `dotagents.ai` domain (or best alternative)
- [ ] Design the animated dot logo (can use Figma + Lottie for animation)
- [ ] Pick the color palette and set up design tokens
- [ ] Set up Geist font across the app and website

### Week 2: Assets
- [ ] Create logo variations (dark/light, icon-only, full wordmark)
- [ ] Design new tray icon based on the violet dot
- [ ] Update GitHub repo with new README header/banner
- [ ] Create OG image template for social sharing
- [ ] Design app icon for macOS (the violet dot)

### Week 3: Apply
- [ ] Update desktop app UI with new color system
- [ ] Redesign landing page (dotagents.ai) with new brand
- [ ] Create Twitter/X header and avatar for @techfren_ai
- [ ] Record new demo video with updated branding
- [ ] Update Discord server branding

### Week 4: Launch
- [ ] "Introducing DotAgents" blog post / tweet thread
- [ ] Show the animated dot logo in action
- [ ] Compare old SpeakMCP → new DotAgents side by side
- [ ] Push to Hacker News, r/programming, AI communities

---

## TAGLINE OPTIONS

1. **"Your AI team. One voice away."** — clear, benefit-driven
2. **"Hold. Speak. Done."** — action-oriented, shows the UX
3. **"The agent protocol for humans."** — positions the standard
4. **"Voice in. Results out."** — minimal, punchy
5. **"One dot. Every agent."** — connects to the `.` brand element
6. **"The operating layer for AI agents."** — ambitious, platform-level
7. **"Skills. Memory. Voice. Agents."** — lists the pillars

**Top pick:** **"One dot. Every agent."** — it's ownable, memorable, ties directly to the `.agents` standard, and works as both a product tagline and protocol tagline. The dot IS the brand.

---

## BRAND PRINCIPLES

1. **The Dot is Alive** — Our logo isn't static. It breathes, pulses, splits, orbits. It reflects what the agents are doing. The dot is the most fundamental symbol in computing (`.files`, `.agents`, `.env`) and we own it.

2. **Protocol First, Product Second** — We lead with the open standard. The app is the best implementation of the standard, but the standard is bigger than any one app. This is how you build a moat AND a community.

3. **Voice is the Interface** — Every design decision should reinforce that this is voice-first. The waveform, the pulsing dot, the "hold to speak" paradigm. We don't look like a chat app.

4. **Developer Credibility, Human Warmth** — We use monospace fonts and terminal aesthetics to earn developer trust, but the colors (violet) and animations (breathing dot) add warmth. We're not cold. We're alive.

5. **Show, Don't Spec** — The best brand marketing for DotAgents is 15-second screen recordings of voice → action → result. Not feature lists. Not architecture diagrams. Magic moments.
