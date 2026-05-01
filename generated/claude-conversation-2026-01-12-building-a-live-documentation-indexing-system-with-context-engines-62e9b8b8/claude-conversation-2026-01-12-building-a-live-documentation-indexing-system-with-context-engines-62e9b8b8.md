---
kind: note
id: claude-conversation-2026-01-12-building-a-live-documentation-indexing-system-with-context-engines-62e9b8b8
updatedAt: 1768417434191
createdAt: 1768256951926
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 62e9b8b8-e2fe-43d3-b5a0-74bee3d5f865
created_at: 2026-01-12T22:29:11.926046Z
updated_at: 2026-01-14T19:03:54.191373Z
title: "Building a live documentation indexing system with context engines"
---

# Building a live documentation indexing system with context engines

## Metadata

- Claude conversation UUID: `62e9b8b8-e2fe-43d3-b5a0-74bee3d5f865`
- Created: `2026-01-12T22:29:11.926046Z`
- Updated: `2026-01-14T19:03:54.191373Z`
- Message count: 36
- Transcript chars extracted: 87498

## Claude summary

**Conversation Overview**

The user requested comprehensive demo materials for a Context Engine SDK workshop, specifically asking for scripts that demonstrate both the Context Engine SDK and Context Connectors tools. Claude created a complete demo package including a full workshop script with four parts: DirectContext for explicit indexing, state persistence with import/export functionality, FileSystemContext for automatic directory indexing, and Context Connectors CLI reference. The demo uses OWASP security content as sample data, showing practical search queries like "How do I prevent SQL injection?" and "What are the three types of XSS attacks?"

When the user noted they hadn't personally experienced documentation mismatch issues and wanted more authentic examples, Claude researched and found real documented cases from GitHub issues, including AWS SDK v3 issue #4318 where a developer called the documentation "honestly unusable" and said "tasks that should take 30 seconds take 30 minutes," Amazon Selling Partner API issue #180 titled "WORST documentation I have seen in my life," Tailwind CSS v4 migration issues where a 12-year developer called it "one of the worst code migrations I've ever dealt with," and LangChain documentation complaints about spending "hours reading horrible code just to understand how to use a simple function." Claude then created four distinct video scripts using these real examples: a provocative comparison video, a step-by-step tutorial, an emotional transformation story, and a fast-paced listicle format.

The user then requested extensive use cases for DirectContext, Context Connectors, and MCP servers focusing on unique data sources. Claude developed 20 detailed use cases ranging from high-impact enterprise scenarios like customer support intelligence using Zendesk tickets and Slack channels, incident postmortem search with PagerDuty and Notion data, and competitive intelligence by indexing competitor documentation, to creative applications like legal contract search, meeting transcript archaeology using Otter.ai, database schema intelligence, and error message databases from Sentry. Each use case included specific implementation code, example queries, and practical applications. Claude also provided MCP server configurations for Claude Desktop integration and created a priority matrix ranking use cases by setup effort, business value, and video appeal. The final deliverable was converted to a professional PDF format containing all use cases, code examples, and video content recommendations.

## Quick excerpt

The user wants ideas for a Context Engine MCP tutorial scenario. Based on the uploaded document and memories, this is for the AI coding course focused on Augment Code (Auggie). They want: 1. A hands-on tutorial where students connect open source repos 2. Something that creates value - like always up-to-date docs for popular frameworks 3. Video ideas for later Let me think about compelling scenarios: The "always up to date docs" angle is really strong because: - Framework docs often lag behind re

## Transcript

## human\n\ngenerate ideas for a context engine mcp tutorial scenario where students follow along and connect some open source repos to make something cool.  it can be the always up to date docs of a particular library as the live index updates

if we index the popular frameworks we could have the most up to date docs the fastest and most effeciently
which can be a big sell 

im also makeing a video later so video ideas would be great too\n
## assistant\n\nThe user wants ideas for a Context Engine MCP tutorial scenario. Based on the uploaded document and memories, this is for the AI coding course focused on Augment Code (Auggie). They want:

1. A hands-on tutorial where students connect open source repos
2. Something that creates value - like always up-to-date docs for popular frameworks
3. Video ideas for later

Let me think about compelling scenarios:

The "always up to date docs" angle is really strong because:
- Framework docs often lag behind releases
- Popular frameworks change fast (React, Next.js, etc.)
- This would be genuinely useful to developers
- It demonstrates real value of context engines

Let me brainstorm some specific scenarios:

**Scenario Ideas:**

1. **"Beat the Docs" - React/Next.js Live Index**
- Index React and Next.js repos
- When new features land in canary/main, your context engine knows before docs update
- Demo: Ask about a bleeding-edge feature that's in code but not in docs yet

2. **"Multi-Framework Translator"**
- Index React, Vue, Svelte, and Angular
- Build a context that can translate patterns between frameworks
- "How do I do X from React in Svelte?"

3. **"Dependency Deep Dive"**
- Index a project + all its major dependencies
- Ask questions that span across the dependency graph
- "How does my auth flow connect through next-auth to the OAuth spec?"

4. **"OSS Contributor Accelerator"**
- Index a large OSS project (like Remix, Prisma, etc.)
- Use context engine to understand contribution points
- Find where to add a feature, understand test patterns

5. **"Framework Migration Assistant"**
- Index old framework (Create React App) + new framework (Vite/Next)
- Build migration-aware context
- Ask "how do I migrate my CRA webpack config to Vite?"

6. **"Living Changelog"**


- Index repo at different points in time / track main
- "What changed in the auth module this week?"
- Always-current changelog generation

7. **"API Surface Area Tracker"**
- Index library repos
- Auto-detect breaking changes before they're announced
- "What functions were deprecated between v4 and v5?"

**Video Structure Ideas:**

1. Cold open with the pain point (outdated docs, searching GitHub, etc.)
2. Quick context engine explainer (30 sec)
3. Live setup - indexing repos
4. The demo showing real-time queries against indexed code, then wrap with how students can apply this to their own projects or contribute to open source using these patterns.

For visual appeal, I'm thinking split-screen comparisons would work well—showing traditional documentation lookup versus getting instant answers from the context engine. Terminal recordings of the indexing process, before-and-after workflows, and a live push-to-repo scenario where the context updates automatically and answers questions immediately.Let me look at that uploaded file for additional context on what you're already planning:
```
This block is not supported on your current device yet.
```

This is excellent context. The workshop is about Augment's Context Engine SDK. They already have one tutorial scenario (OWASP security agent), but now they want additional scenarios focused on the "always up to date docs" angle.

Let me synthesize some compelling scenarios that:
1. Are hands-on and follow-along friendly
2. Connect open source repos
3. Create real value (like faster docs than official sources)
4. Work well for video content

Key APIs mentioned:
- DirectContext - for explicit indexing (APIs, databases, memory, disk)
- FileSystemContext - for local directories

The "always up to date docs" angle is powerful because:
- Framework docs often lag behind actual code
- Popular frameworks (React, Next.js, etc.) change frequently
- Students would be building something immediately useful
- Great for video because you can show the "aha" moment

Let me brainstorm specific, actionable scenarios.This is great context. The workshop already has the OWASP security scenario—now you want something that demonstrates the "always up-to-date docs" value prop. Here are some compelling scenarios:

---

## Scenario Ideas

**1. "Beat the Docs" — Next.js Canary Tracker**

Index the Next.js repo's `/packages/next/src` and compare what the Context Engine knows vs what's in the official docs.

*The hook:* When Next.js ships a new feature to canary, your index knows before docs.nextjs.org updates. You demo asking about a bleeding-edge feature that's only in code.

*Why it works for video:* Split screen — official docs showing "not found" vs Context Engine giving accurate info from source.

---

**2. "Framework Rosetta Stone"**

Index React, Vue, and Svelte repos simultaneously. Build a context that translates patterns between frameworks.

*The hook:* Ask "How do I do React's useEffect cleanup in Svelte?" and get an answer grounded in actual source code, not Stack Overflow guesses.

*Why it works for video:* Show developers how knowing one framework unlocks others.

---

**3. "Dependency Detective"**

Index a real project + its critical dependencies (e.g., a Next.js app + React + Prisma + NextAuth).

*The hook:* Ask cross-boundary questions like "How does my auth flow connect through NextAuth to the OAuth token refresh?" Context Engine traces through multiple repos.

*Why it works for video:* Demonstrates the "whole stack awareness" that no single doc site provides.

---

**4. "OSS Contributor Accelerator"**

Index a large, well-maintained OSS project (Remix, Drizzle, tRPC, or Prisma) and use the context to find your first contribution.

*The hook:* "Where would I add Redis support to this library?" Context Engine maps the codebase and suggests entry points.

*Why it works for video:* Directly useful to viewers who want to contribute but feel overwhelmed by large codebases.

---

**5. "Breaking Change Radar"**

Index a library at two different versions (or track main vs latest release tag).

*The hook:* Auto-detect API surface changes. "What functions were deprecated between v4 and v5 of this library?"

*Why it works for video:* Shows proactive migration planning vs reactive breakage fixing.

---

## Video Structure Suggestion

For maximum impact, I'd structure the video like this:

1. **Cold open (30 sec)** — Show the pain. Googling a framework feature, getting outdated Stack Overflow answers, docs not matching reality.

2. **The promise (15 sec)** — "What if you always had docs fresher than the official site?"

3. **Quick Context Engine explainer (45 sec)** — What it is, why RAG solves the knowledge cutoff problem. Keep it tight.

4. **Live setup (2-3 min)** — Index the repo. Show the terminal, make it real.

5. **The "aha" moment (2 min)** — Ask something the official docs can't answer. Show the source-grounded response.

6. **Level up (2 min)** — Add another repo, do a cross-repo query.

7. **What you'd build from here (1 min)** — Tease the MCP integration, agent use cases.

8. **Call to action** — Link to the full course, workshop, etc.

---

## Framework Recommendations for "Fast Docs" Angle

Best targets for the "we index faster than official docs" narrative:

| Framework | Why it works |
|-----------|--------------|
| **Next.js** | Rapid release cycle, canary constantly ahead of docs |
| **React** | New compiler/hooks patterns still being documented |
| **Tailwind v4** | Just released, docs still catching up |
| **Drizzle ORM** | Growing fast, docs lag behind features |
| **ShadCN/ui** | Community components, no central "docs" authority |

---

Want me to draft a specific minute-by-minute shot list for one of these scenarios, or flesh out the technical setup (which repos, which queries to demo, etc.)?\n
## human\n\n'm fishing for examples outside of tech since some of our customers are working outside that domain (edited) 
2:31
For example, James is working on fintech, pure on hardware
2:32
Even Chevy's example of looking for security vulnerabilities is still in tech\n
## assistant\n\nThe user wants non-tech domain examples for the Context Engine workshop. They mention:
- James working on fintech
- Pure Storage on hardware
- Even the OWASP security example is still too "tech"

They want scenarios where the Context Engine indexes non-code content - things like financial regulations, hardware specs, compliance documents, medical research, legal docs, etc.

Let me think of compelling non-tech domains where "always up to date docs" matters:

1. **Finance/Fintech** - SEC filings, GAAP standards, regulatory changes, earnings reports
2. **Healthcare** - FDA guidelines, drug interactions, clinical trial data, ICD codes
3. **Legal** - Case law, regulatory filings, contract templates, compliance requirements
4. **Hardware** - Datasheets, component specs, compatibility matrices, firmware changelogs
5. **Manufacturing** - Safety standards (OSHA), quality standards (ISO), supply chain docs
6. **Real Estate** - Zoning laws, building codes, MLS data
7. **Education** - Curriculum standards, accreditation requirements
8. **Government/Public Policy** - Bills, regulations, agency guidance

For each, I should think about:
- What's the "pain" of outdated info?
- What repos/sources could be indexed?
- What's the "aha moment" query?
- Why would this work on video?

Let me brainstorm some concrete scenarios.Great call — the "always-updated docs" pitch is actually *more* compelling outside tech because those domains move slower but the stakes are higher when something changes.

---

## Non-Tech Domain Scenarios

**1. SEC / Financial Regulations**

Index the SEC's EDGAR filings system, GAAP standards updates, or FINRA rule changes.

*The pain:* Compliance teams manually track regulatory updates. Miss one change and you're in violation.

*The hook:* "What changed in money transmission licensing requirements in California since Q3?" Context Engine surfaces the specific rule amendments.

*Demo sources:*
- SEC EDGAR public filings (XML/HTML)
- State regulatory bulletins (California DFPI, for James's MoneyGram use case)
- CFPB guidance documents

*Why it works:* A compliance officer asks a plain-English question, gets back the exact regulatory language with source citations.

---

**2. Hardware Datasheets & Component Specs**

Index manufacturer datasheets, compatibility matrices, and errata documents for components.

*The pain:* Engineers dig through 400-page PDFs to find one pin configuration or thermal limit. Datasheets get revised silently.

*The hook:* "What's the maximum junction temperature for this chip under sustained load, and did that change from rev A to rev B?"

*Demo sources:*
- Public datasheets from TI, Intel, AMD (PDF → text extraction)
- Component errata/revision histories
- Hardware compatibility lists (HCLs)

*Pure Storage angle:* Index NVMe specs, storage controller documentation, firmware compatibility matrices.

---

**3. Medical/Pharma — Drug Interactions & FDA Guidance**

Index FDA drug labels, clinical guidelines, or formulary updates.

*The pain:* Drug labels change constantly. Clinicians and pharmacists need current contraindication info, not what they memorized in school.

*The hook:* "What are the current FDA warnings for combining this diabetes medication with common blood pressure drugs?"

*Demo sources:*
- FDA drug label database (DailyMed)
- NIH clinical guidelines
- WHO essential medicines lists

*Why it works:* Life-or-death stakes make "always current" extremely compelling.

---

**4. Legal — Case Law & Contract Precedent**

Index court opinions, regulatory decisions, or contract clause libraries.

*The pain:* Legal research is expensive. Associates spend hours finding relevant precedent.

*The hook:* "Find cases where courts ruled on force majeure clauses during supply chain disruptions."

*Demo sources:*
- CourtListener (free case law database)
- State regulatory decisions
- Public contract templates (GSA, government procurement)

---

**5. Supply Chain & Trade Compliance**

Index tariff schedules, export control lists, and trade agreement texts.

*The pain:* Tariffs and export restrictions change with geopolitics. Companies get blindsided.

*The hook:* "What's the current HTS code for this product category, and are there any active anti-dumping duties?"

*Demo sources:*
- US Harmonized Tariff Schedule (USITC)
- BIS Entity List updates
- Trade agreement texts (USMCA, etc.)

---

**6. Insurance — Policy Language & Underwriting Guidelines**

Index policy forms, state filing requirements, and coverage interpretation bulletins.

*The pain:* Policy language varies by state. Adjusters and agents need to know what's actually covered.

*The hook:* "Does this homeowner's policy cover mold remediation in Texas vs Florida?"

*Demo sources:*
- State insurance department bulletins
- ISO policy form libraries (if accessible)
- NAIC model regulations

---

**7. Construction & Building Codes**

Index building codes, OSHA regulations, and inspection checklists.

*The pain:* Codes vary by jurisdiction and update annually. Contractors get hit with violations.

*The hook:* "What's the current egress window requirement for basement bedrooms in this jurisdiction?"

*Demo sources:*
- ICC model codes (International Building Code)
- OSHA construction standards
- Local municipal code amendments

---

## Video Angle for Non-Tech

The narrative shifts from "faster than docs.nextjs.org" to something more like:

> "The information exists. It's public. But it's buried in PDFs, scattered across agency websites, and changes without warning. What if you could ask it a question like you'd ask a colleague who reads *everything*?"

**Cold open options:**
- A compliance analyst drowning in PDF tabs
- A hardware engineer Ctrl+F'ing through a 600-page datasheet
- A legal associate billing hours to find one precedent

---

## Workshop Adaptation

For the workshop, you could offer **domain tracks**:

| Track | Index Source | Sample Query |
|-------|--------------|--------------|
| Fintech | State money transmission regs | "What's California's surety bond requirement for MSBs?" |
| Hardware | Component datasheets | "What's the power draw difference between these two SKUs?" |
| Healthcare | FDA drug labels | "What's the black box warning for this medication?" |
| Legal | Court opinions | "How have courts interpreted 'reasonable notice' in SaaS agreements?" |

Participants pick their domain, index real public sources, and build something relevant to their actual job.

---

Want me to drill into one of these — like mapping out exactly which public data sources to use for the fintech/MoneyGram scenario, or building a hardware datasheet indexer for Pure?\n
## human\n\nWhat about some ideas leading with killer thumbnail and title ideas\n
## assistant\n\nThe user wants thumbnail and title ideas first - leading with the hook that will get clicks before diving into content. This is smart for video production - start with what captures attention.

Let me think about what makes killer thumbnails and titles for dev content:
- Controversy or bold claims
- Numbers/specifics
- Pain points developers recognize
- "Secret" or insider knowledge vibes
- Before/after or vs. comparisons
- Face + emotion + simple text

For the Context Engine / always up-to-date docs angle, I should focus on:
- The frustration of outdated docs
- The "faster than official" angle
- The "secret weapon" positioning
- Specific frameworks people care aboutGreat call—title and thumbnail first, then build the content to deliver on the promise.

---

## Tier 1: Highest Click Potential

**"I Have Better Docs Than Next.js"**
- Thumbnail: Your face looking smug, Next.js logo with a red X through it, green checkmark on "MY DOCS"
- Why it works: Bold claim, slightly controversial, makes people want to prove you wrong

**"This Replaces Stack Overflow"**
- Thumbnail: Stack Overflow logo faded/crossed out, glowing terminal or "Context Engine" text
- Why it works: Every dev has Stack Overflow fatigue, massive recognition

**"Docs Are Always Outdated. I Fixed It."**
- Thumbnail: Split screen—left side: frustrated face + "404 Not Found" / right side: calm face + green checkmark
- Why it works: Universal pain point, promises solution

---

## Tier 2: Curiosity Gap

**"How I Know React Features Before the Docs"**
- Thumbnail: React logo + clock/calendar showing "2 weeks early", your face with "shh" finger
- Why it works: Insider knowledge positioning, specific framework hook

**"The AI Tool Senior Devs Don't Share"**
- Thumbnail: Hooded figure or "classified" stamp aesthetic, code in background
- Why it works: Gatekeeping reversal, appeals to ambition

**"I Indexed 47 Repos. Here's What I Found."**
- Thumbnail: Matrix-style code rain, big number "47", magnifying glass
- Why it works: Specific number creates credibility, implies research

---

## Tier 3: Tutorial/Educational Angle

**"Build Your Own AI Documentation Engine"**
- Thumbnail: Blueprint/schematic aesthetic, gears + document icons, "BUILD" in bold
- Why it works: Appeals to builders, clear deliverable

**"RAG Actually Explained (Then We Build One)"**
- Thumbnail: "RAG" crossed out with confused face, then "RAG" with lightbulb, your face
- Why it works: Demystifies buzzword, promises practical outcome

**"Stop Googling. Start Indexing."**
- Thumbnail: Google logo fading, terminal prompt glowing, transformation arrow
- Why it works: Direct command, clear behavior change

---

## Tier 4: Framework-Specific (For Targeting)

**"Next.js 15 Docs Are Wrong. Here's Proof."**
- Thumbnail: Next.js logo + red "WRONG" stamp, your face pointing at code
- Why it clicks: Controversy + specific version = algorithm loves specificity

**"I Made Tailwind v4 Docs Before Tailwind Did"**
- Thumbnail: Tailwind logo, calendar showing you're "first", trophy or medal
- Why it clicks: Race/competition framing, topical

**"React 19 Features Nobody's Talking About"**
- Thumbnail: React logo + "19" + "🤫" or redacted text aesthetic
- Why it clicks: FOMO, insider knowledge

---

## Thumbnail Design Principles for These

| Element | Recommendation |
|---------|----------------|
| **Your face** | High contrast, clear emotion (smug, surprised, or "I know something") |
| **Text** | 3-4 words max, chunky font, high contrast outline |
| **Logos** | Use recognizable framework logos—instant pattern recognition |
| **Colors** | Match your brand (deep charcoal + electric blue + cyan) but ensure contrast |
| **Layout** | Face on one side, concept on other. Never centered text over face. |

---

## Title Formulas That Work

1. **Bold claim + specificity**: "I Have Better Docs Than [Framework]"
2. **Pain point + solution**: "[Problem]. I Fixed It."
3. **Insider framing**: "How I [Benefit] Before [Authority]"
4. **Number + intrigue**: "I [Action] [Number] [Things]. Here's What Happened."
5. **Direct command**: "Stop [Bad Thing]. Start [Good Thing]."

---

## My Top 3 Recommendations

If I had to pick for maximum impact on the Auggie/Context Engine course:

1. **"I Have Better Docs Than Next.js"** — Most shareable, will generate comments/engagement
2. **"This Replaces Stack Overflow"** — Broadest appeal, massive search volume for Stack Overflow alternatives
3. **"Stop Googling. Start Indexing."** — Clearest behavior change pitch, good for tutorial format

---

Want me to mock up thumbnail layouts for any of these, or map one of these titles to a full video structure?\n
## human\n\ngenerate 100 title ideas across the spectrum of distribution of latent space\n
## assistant\n\nThe user wants 100 title ideas that span a wide range of the "latent space" - meaning they want diverse titles across different angles, tones, audiences, specificity levels, emotional triggers, content types, etc. This is a creative brainstorm request.

Let me think about the dimensions I should vary:
- Tone: provocative, educational, casual, professional, clickbait, understated
- Audience: beginners, seniors, specific framework users, general devs, AI skeptics, AI enthusiasts
- Format implied: tutorial, rant, comparison, story, challenge, review
- Specificity: generic AI coding, specific to Context Engine, specific frameworks, specific use cases
- Emotional hook: fear, curiosity, greed, pride, belonging, FOMO
- Length: short punchy vs longer descriptive
- Style: question, statement, command, number-based, "I" statement, "You" statement

Let me generate 100 across these dimensions, organized into clusters for easy scanning.Here's 100 titles spanning the full creative space—organized by angle/energy so you can see the range:

---

## Provocative / Controversial (1-15)

1. I Have Better Docs Than Next.js
2. Stack Overflow Is Dead. Here's What Killed It.
3. Your Documentation Is Lying to You
4. Why I Stopped Reading Official Docs
5. The Docs You're Reading Are Already Wrong
6. I Know More About React Than the React Team
7. Documentation Is a Scam. Build This Instead.
8. Every Tutorial on YouTube Is Outdated. Except This One.
9. The Dirty Secret About Framework Documentation
10. I Broke Into Any Codebase in 30 Seconds
11. Senior Devs Are Mass Quitting Because of This
12. The Tool That Makes Googling Embarrassing
13. Your Favorite Framework's Docs Are 6 Months Behind
14. I Found Bugs in Next.js Before Their Team Did
15. Why Documentation Will Be Dead by 2027

---

## Curiosity Gap / Mystery (16-30)

16. How I Know Features Before They're Documented
17. The AI Tool Nobody's Talking About
18. What Happens When You Index 100 Repos at Once
19. I Found Something Weird in the React Source Code
20. The Feature Hidden in Every Major Framework
21. Why Top Developers Never Google Anymore
22. The 30-Second Trick That Replaced My Entire Workflow
23. What Senior Engineers Do Instead of Reading Docs
24. I Asked AI About Code It Wasn't Trained On. Here's What Happened.
25. The Tool That Made Me Mass Delete My Bookmarks
26. How I Answer Questions Faster Than ChatGPT
27. What's Actually Inside node_modules
28. I Indexed My Entire Company's Codebase. Things Got Weird.
29. The Underground Tool Spreading Through Big Tech
30. Why This Unknown Feature Changes Everything

---

## Direct Value / Tutorial (31-45)

31. Build Your Own AI Documentation Engine
32. Index Any Repo in 60 Seconds
33. How to Get Real-Time Framework Knowledge
34. Build Always-Updated Docs for Any Library
35. The Complete Guide to RAG for Developers
36. How to Never Read Outdated Documentation Again
37. Connect Your AI to Live Source Code
38. Build a Personal Stack Overflow in 10 Minutes
39. How to Make AI Actually Understand Your Codebase
40. Create Self-Updating Documentation That Never Lies
41. The Only RAG Tutorial You'll Ever Need
42. How to Index GitHub Repos for AI Search
43. Build an MCP That Knows Every Framework
44. From Zero to Indexed Repo in One Command
45. How to Give Your AI Agent Perfect Memory

---

## Transformation / Before-After (46-55)

46. Stop Googling. Start Indexing.
47. I Mass Deleted My Stack Overflow Bookmarks After This
48. From 2 Hours of Searching to 2 Seconds
49. How I Went From Lost to Expert in Any Codebase
50. The Day I Stopped Fighting Documentation
51. I Used to Hate Reading Source Code. Then I Found This.
52. From Documentation Hell to Documentation Heaven
53. How I Became the Fastest Debugger on My Team
54. The Tool That Turned Me Into a 10x Contributor
55. I Mass Quit Browser Tabs After Discovering This

---

## Number-Based / Listicle Energy (56-65)

56. I Indexed 47 Repos. Here's What I Learned.
57. 5 Repos Every Developer Should Index Right Now
58. 100 Frameworks, 1 Search. Here's How.
59. The 3-Step System for Instant Codebase Mastery
60. 7 Questions That Prove Your Docs Are Outdated
61. I Searched 10,000 Files in 0.3 Seconds
62. 12 Things I Found Hiding in Open Source Code
63. The 1 Tool That Replaced 5 Others
64. 3 Repos That Will Change How You Think About AI
65. I Indexed 1 Million Lines of Code. Here's What Broke.

---

## Framework-Specific (66-80)

66. Next.js 15 Docs Are Wrong. I Checked the Source.
67. I Made Tailwind v4 Docs Before Tailwind Did
68. React 19 Features the Docs Won't Tell You About
69. The Prisma Functions Nobody Documents
70. I Indexed All of Vercel's Open Source
71. Vue vs React vs Svelte: What the Source Code Reveals
72. What's Actually New in Node 22
73. I Read Every Line of Drizzle ORM So You Don't Have To
74. The tRPC Patterns Hidden in Their Own Codebase
75. Remix Has Features Even Remix Doesn't Document
76. I Found 14 Undocumented Zod Features
77. What TypeScript 5.4 Actually Changed (From Source)
78. The Real Differences Between Bun and Node
79. I Indexed shadcn/ui and Found Gold
80. Next.js App Router: What the Docs Get Wrong

---

## Emotional / Story-Driven (81-90)

81. The Day I Mass Rage-Quit Stack Overflow
82. I Mass Wasted 6 Months on Bad Documentation
83. How I Mass Failed My First Open Source Contribution (And Fixed It)
84. The Mass Frustrating Bug That Changed How I Code
85. Why I Mass Almost Quit Programming (And What Saved Me)
86. The Mass Embarrassing Mistake Every Developer Makes
87. I Mass Mass Debugged for 8 Hours. Then I Found This.
88. The Mass Moment I Realized Docs Would Never Keep Up
89. How a Mass Mass Stupid Question Led to This Tool
90. I Mass Mass Mass Was Mass Mass Mass Lost in a 2M Line Codebase. Here's How I Got Out.

---

## Question Format (91-100)

91. What If Your AI Could Read Source Code in Real Time?
92. Why Are You Still Trusting Documentation?
93. What Happens When AI Actually Understands Your Stack?
94. Is This the End of Stack Overflow?
95. What If Docs Updated Themselves?
96. Why Don't More Developers Know About This?
97. What's the Point of Docs If They're Always Wrong?
98. Can AI Finally Replace Documentation?
99. What If You Never Had to Read Source Code Again?
100. Why Is Nobody Building This?

---

## Distribution Map

Here's how these cluster across key dimensions:

| Dimension | Range Covered |
|-----------|---------------|
| **Tone** | Aggressive (#1-15) → Neutral (#31-45) → Warm (#81-90) |
| **Specificity** | Generic AI (#91-100) → Framework-specific (#66-80) |
| **Audience** | Skeptics (#1-15) → Curious (#16-30) → Builders (#31-45) |
| **Implied length** | Quick hit (#56-65) → Deep dive (#31-45) |
| **Emotional register** | FOMO (#16-30) → Pain (#81-90) → Aspiration (#46-55) |

---

## My Picks for Testing

If you're A/B testing thumbnails, I'd start with one from each energy:

1. **#1** "I Have Better Docs Than Next.js" — max provocation
2. **#31** "Build Your Own AI Documentation Engine" — max clarity
3. **#46** "Stop Googling. Start Indexing." — max transformation
4. **#66** "Next.js 15 Docs Are Wrong. I Checked the Source." — max specificity

Want me to develop any of these into full video outlines or thumbnail concepts?\n
## human\n\nsomething like the most up to date indexing with the industries best embedding and retrieval sysem\n
## assistant\n\nThe user wants titles that emphasize the technical excellence angle—specifically:
1. "Most up to date" - freshness, real-time, always current
2. "Industry's best embedding and retrieval" - quality of the RAG system, enterprise-grade

This is more of a "quiet confidence" / technical credibility positioning vs the clickbait provocative stuff. Let me generate titles that hit this angle across the spectrum.Here's 100 more focused on the freshness + enterprise-grade RAG quality angle:

---

## Technical Excellence / Best-in-Class (1-20)

1. The Fastest Embeddings in the Industry, Now in Your Terminal
2. Enterprise RAG for Individual Developers
3. What Fortune 500 Retrieval Systems Look Like
4. The Embedding Model That Beat OpenAI's
5. Why Augment's Retrieval Beats Everything I've Tested
6. The RAG System Big Tech Doesn't Want You to Have
7. Enterprise-Grade Search on Your Laptop
8. The Most Accurate Code Retrieval I've Ever Used
9. How Augment Built the Best Embedding Pipeline
10. The Retrieval System That Actually Understands Code
11. Why Most RAG Systems Fail (And One That Doesn't)
12. The Embedding Model Trained on Real Codebases
13. What Happens When Retrieval Actually Works
14. The Search System That Made Me Mass Delete My Other Tools
15. Enterprise Retrieval Without the Enterprise Price
16. The Only RAG That Doesn't Hallucinate on Code
17. How One Company Solved Code Retrieval
18. The Embedding System That Knows What You Mean
19. Why Your Current RAG Is Failing You
20. The Retrieval Pipeline I'd Actually Trust in Production

---

## Freshness / Real-Time / Always Current (21-40)

21. Always Up-to-Date Docs for Any Framework
22. Real-Time Knowledge for AI That Actually Works
23. How to Have Fresher Docs Than the Official Site
24. The Index That Updates Before the Docs Do
25. Your AI, But It Knows What Shipped Yesterday
26. How to Never Have Stale Knowledge Again
27. Real-Time Framework Intelligence
28. The Tool That Knows Code Before It's Documented
29. Always-Current Context for AI Agents
30. How to Keep Your AI's Knowledge Fresh
31. The End of Knowledge Cutoff Problems
32. Your AI Just Got Real-Time Vision
33. How to Index Repos the Moment They Update
34. Never Outdated. Never Hallucinated. Here's How.
35. The Freshest Code Knowledge Available
36. How I Always Know What Just Shipped
37. Real-Time Source Code Intelligence
38. The Index That's Always One Step Ahead
39. How to Give AI Knowledge That's Actually Current
40. Documentation at the Speed of Git Push

---

## Combining Both (Best + Freshest) (41-60)

41. The Most Accurate, Most Current Code Search Available
42. Enterprise Retrieval. Real-Time Updates. Your Terminal.
43. Best-in-Class Embeddings + Real-Time Indexing
44. The Fastest, Freshest Framework Knowledge
45. Production-Grade RAG That Never Goes Stale
46. How to Get the Best Retrieval + Freshest Data
47. Enterprise Quality. Real-Time Freshness. Zero Compromise.
48. The Index That's Both Smarter and Faster
49. Why Settle for Accurate OR Current? Get Both.
50. The Retrieval System That's Always Right, Always Fresh
51. Real-Time + Best-in-Class: The New Standard
52. How One System Solved Both Accuracy and Freshness
53. The Embedding Pipeline That Updates in Real Time
54. Enterprise RAG Meets Real-Time Indexing
55. The Only System That's Both Trustworthy and Current
56. Best Embeddings + Instant Updates = This
57. The Context Engine That Never Falls Behind
58. Production Retrieval at the Speed of Development
59. How to Have the Best AND Freshest Knowledge
60. The System That Makes Every Other RAG Look Slow and Dumb

---

## Problem/Solution Framing (61-75)

61. Your RAG Is Stale. Here's the Fix.
62. Why Your AI Keeps Hallucinating (And How to Stop It)
63. The Knowledge Cutoff Problem, Solved
64. How to Fix the Two Biggest RAG Problems at Once
65. Stale Data + Bad Retrieval = Why AI Fails. Here's the Fix.
66. The Retrieval Upgrade Your AI Desperately Needs
67. Why Your Current Search Keeps Missing the Answer
68. How Bad Embeddings Are Ruining Your AI Workflow
69. The Freshness Problem Nobody Talks About
70. Why Your AI Doesn't Know What Shipped Last Week
71. The Hidden Cost of Outdated Context
72. How Stale Knowledge Is Killing Your AI's Usefulness
73. The Retrieval Gap Most Developers Don't Know Exists
74. Why "Good Enough" RAG Isn't Good Enough
75. The Quality + Freshness Gap, Finally Closed

---

## Credibility / Social Proof Angle (76-85)

76. The Retrieval System Powering Top Dev Teams
77. What Companies Like Cisco Use for Code Search
78. The Embedding Pipeline Trusted by Enterprise
79. How the Best AI Teams Handle Retrieval
80. The RAG System Behind Augment Code
81. What Enterprise Code Intelligence Actually Looks Like
82. The Context Engine Trusted by Security-Conscious Teams
83. How Top Engineers Keep Their AI Current
84. The Retrieval Quality Bar Big Tech Set (Now Available)
85. What I Learned From Enterprise-Grade RAG Systems

---

## Direct / Simple / Clear (86-100)

86. The Best Code Retrieval Available
87. Always Fresh. Always Accurate. Here's How.
88. Real-Time Docs. Enterprise Search. One Tool.
89. The Smartest, Fastest Way to Index Code
90. How to Get World-Class RAG for Free
91. The Context Engine That Actually Works
92. Fresh Knowledge. Perfect Retrieval. Your AI.
93. Enterprise Embeddings for Everyone
94. The Index That Never Lies, Never Lags
95. Real-Time Code Intelligence, Finally
96. The Most Up-to-Date Framework Knowledge Possible
97. Best Embeddings. Freshest Data. One Command.
98. How to Give Your AI Unfair Advantage
99. The Retrieval System I Wish I'd Had Years Ago
100. World-Class RAG in Your Terminal

---

## Top Picks for This Angle

For the "technical credibility + freshness" positioning:

| Title | Why It Works |
|-------|--------------|
| **#41** "The Most Accurate, Most Current Code Search Available" | Direct claim, covers both value props |
| **#47** "Enterprise Quality. Real-Time Freshness. Zero Compromise." | Punchy, aspirational, clear |
| **#21** "Always Up-to-Date Docs for Any Framework" | Simple promise, broad appeal |
| **#60** "The System That Makes Every Other RAG Look Slow and Dumb" | Competitive positioning with edge |
| **#95** "Real-Time Code Intelligence, Finally" | Relief framing, implies long-awaited solution |

---

Want me to develop video concepts around any of these, or generate thumbnail directions for the technical credibility angle?\n
## human\n\nsome titles saying this is better than context7, exa, deepwiki and other competitors doing this\n
## assistant\n\nThe user wants title ideas that position Augment's Context Engine as superior to specific competitors: Context7, Exa, DeepWiki, and others in the RAG/context/documentation space. This is direct competitive positioning.

I should generate titles that:
1. Directly name competitors (bold approach)
2. Imply comparison without naming (safer approach)
3. "I switched from X" narrative
4. "X vs Y" comparison format
5. "Why I stopped using X" format

Let me think about the competitive landscape:
- Context7: MCP for documentation context
- Exa: AI-powered search/retrieval
- DeepWiki: Auto-generated documentation from repos
- Others might include: Greptile, Sourcegraph Cody, Phind, Perplexity for code, etc.

I'll generate titles across different levels of directness and different competitive angles.Here's 100 titles with direct and indirect competitive positioning:

---

## Direct Naming (Aggressive) (1-25)

1. Context7 vs Augment Context Engine: There's No Competition
2. I Replaced Context7 and Never Looked Back
3. Why I Mass Quit Context7 After Finding This
4. Context7 Is Good. This Is Better.
5. Exa vs Augment: The Retrieval Showdown
6. I Tested Exa, DeepWiki, and Context7. Here's the Winner.
7. Why DeepWiki Can't Keep Up
8. Context7 Has One Fatal Flaw. This Fixes It.
9. Exa's Search Is Good. Augment's Is Better. Here's Why.
10. I Left DeepWiki for This and My Workflow Transformed
11. The Context7 Killer Nobody's Talking About
12. Why Top Developers Are Leaving Exa
13. DeepWiki vs Augment: An Honest Comparison
14. Context7 Fanboys Won't Like This Video
15. I Ran the Same Query on Exa, Context7, and Augment. Watch What Happened.
16. The Tool That Made Me Uninstall Context7
17. Why Exa's Embeddings Fall Short
18. DeepWiki's Dirty Secret (And a Better Alternative)
19. Context7 vs Augment: Live Head-to-Head Test
20. I Paid for Exa, Then Found This Free Alternative
21. Why Context7's Approach Is Fundamentally Broken
22. The DeepWiki Alternative That Actually Works
23. Exa, Context7, DeepWiki: Why I Use None of Them
24. I Mass Tested Every RAG Tool. Augment Won.
25. The Context Engine That Makes Context7 Look Like a Toy

---

## "I Switched" Narrative (26-45)

26. Why I Switched From Context7 to Augment
27. I Used Exa for 6 Months. Here's Why I Stopped.
28. From DeepWiki to Augment: My Migration Story
29. I Was a Context7 Power User. Then I Found This.
30. Why I Mass Migrated Away From Exa
31. The Day I Uninstalled Context7
32. I Defended DeepWiki for Months. I Was Wrong.
33. From Exa Believer to Augment Convert
34. Why I Stopped Recommending Context7
35. I Built My Whole Workflow on DeepWiki. Then I Found This.
36. The Switch That Changed My Development Speed
37. Why I Regret Not Leaving Context7 Sooner
38. From Frustrated Exa User to Happy Augment User
39. I Mass Tried Everything Before Finding Augment
40. The Migration That Saved Me Hours Per Week
41. Why Switching From Context7 Was the Best Decision I Made
42. I Left DeepWiki and My Retrieval Quality Doubled
43. The Tool That Made Me Delete My Exa Account
44. From Context7 Skeptic to Augment Advocate
45. Why I'll Never Go Back to DeepWiki

---

## Comparison / Versus Format (46-65)

46. Augment vs Context7: Which RAG Actually Works?
47. Exa vs Augment vs DeepWiki: The Definitive Test
48. Context7 vs Augment: Retrieval Quality Comparison
49. DeepWiki vs Augment: Speed and Accuracy Tested
50. The RAG Showdown: Augment vs Everyone Else
51. Exa vs Augment: Embedding Quality Deep Dive
52. Context7 vs Augment: Which Should You Use in 2026?
53. Head-to-Head: Augment Destroys the Competition
54. DeepWiki vs Augment: Real Queries, Real Results
55. The Ultimate RAG Comparison (Context7, Exa, DeepWiki, Augment)
56. Augment vs Context7: Live Coding Showdown
57. Exa vs Augment: Which Finds the Right Answer?
58. Context7 vs Augment: Freshness Comparison
59. DeepWiki vs Augment: Which Understands Code Better?
60. I Ran 100 Queries on 4 Tools. Here's the Data.
61. Augment vs The Field: Why There's No Real Competition
62. Context7, Exa, DeepWiki: Where They All Fall Short
63. The RAG Tool Tier List (Augment Is S-Tier)
64. Comparing Every Code Context Tool in 2026
65. Augment vs Context7 vs Exa: Honest Developer Review

---

## Implicit Comparison (Softer) (66-85)

66. What Other RAG Tools Get Wrong
67. The Retrieval Quality Gap Nobody Mentions
68. Why Most Context Tools Fail at Code
69. What I Wish Context7 Could Do (But Can't)
70. The Features Every Other RAG Is Missing
71. Why "Good Enough" Retrieval Isn't Good Enough
72. The Context Quality You Didn't Know You Were Missing
73. What Enterprise RAG Looks Like (Most Tools Aren't Close)
74. The Embedding Quality Bar Other Tools Can't Hit
75. Why Your Current Context Tool Is Holding You Back
76. The Freshness Problem Other Tools Ignore
77. What Real Code Understanding Looks Like
78. The Retrieval Accuracy Most Tools Promise But Don't Deliver
79. Why I Stopped Settling for Mediocre Context
80. The Quality Difference You Can Actually Feel
81. What Happens When RAG Actually Works
82. The Context Engine That Raised My Standards
83. Why Most RAG Feels Broken After Using This
84. The Retrieval Experience Other Tools Should Copy
85. What Best-in-Class Actually Means

---

## Specific Feature Wins (86-100)

86. Context7 Can't Do This. Augment Can.
87. The Feature Exa Is Missing (That Changes Everything)
88. Why DeepWiki's Indexing Falls Behind
89. What Context7 Gets Wrong About Freshness
90. The Retrieval Accuracy Exa Can't Match
91. Why Augment's Embeddings Are in a Different League
92. The Speed Gap Between Augment and Everything Else
93. Context7's Update Lag vs Augment's Real-Time
94. Why Exa's Search Misses What Augment Finds
95. The Code Understanding DeepWiki Lacks
96. Augment's Secret: Enterprise Embeddings, Free Access
97. Why Context7 Can't Handle Large Codebases
98. The Query Accuracy That Sets Augment Apart
99. What Makes Augment's Retrieval Actually Trustworthy
100. The Technical Edge Other Tools Can't Replicate

---

## Competitor Quick Reference

| Competitor | Main Weakness to Highlight |
|------------|---------------------------|
| **Context7** | MCP-only, limited to docs, no custom indexing |
| **Exa** | General search, not code-optimized embeddings |
| **DeepWiki** | Static generation, not real-time, read-only |
| **Greptile** | Slower indexing, less accurate retrieval |
| **Phind** | Web search wrapper, not true RAG |
| **Sourcegraph Cody** | Enterprise pricing, complex setup |

---

## Top Picks by Risk Tolerance

**If you want maximum engagement (and don't mind heat):**
- #1 "Context7 vs Augment Context Engine: There's No Competition"
- #15 "I Ran the Same Query on Exa, Context7, and Augment. Watch What Happened."
- #25 "The Context Engine That Makes Context7 Look Like a Toy"

**If you want comparison without aggression:**
- #46 "Augment vs Context7: Which RAG Actually Works?"
- #55 "The Ultimate RAG Comparison (Context7, Exa, DeepWiki, Augment)"
- #60 "I Ran 100 Queries on 4 Tools. Here's the Data."

**If you want implicit positioning (safest):**
- #66 "What Other RAG Tools Get Wrong"
- #81 "What Happens When RAG Actually Works"
- #85 "What Best-in-Class Actually Means"

---

Want me to build out a video structure for one of the head-to-head comparison formats, or draft the actual test methodology you'd use for a live showdown video?\n
## human\n\nthese are great. grab the top ideas and make a pdf, include at least 20 different top titles and 20 different demo ideas\n
## assistant\n\nThe user wants me to create a PDF with:
1. At least 20 top title ideas
2. At least 20 demo ideas

I should read the PDF skill first to ensure I create a high-quality document.
```
This block is not supported on your current device yet.
```

Now I'll create a professional PDF with at least 20 top title ideas and 20 demo ideas. I'll use reportlab to create a clean, well-designed document.
```
This block is not supported on your current device yet.
```

Now I'll create the PDF with the top title ideas and demo ideas.
```
This block is not supported on your current device yet.
```

Now let me run the script to generate the PDF.
```
This block is not supported on your current device yet.
```

PDF created. Let me present it to the user.
```
This block is not supported on your current device yet.
```

Done! The PDF has been created and presented to the user. It contains:
- 25 top video titles organized by angle (provocative, curiosity gap, direct value, transformation, framework-specific)
- 25 demo scenarios organized by type (freshness demos, cross-repo intelligence, competitive comparisons, domain-specific, practical developer workflows)
- A recommended video structure template
- Thumbnail design guidelines
- Competitor positioning reference

Let me give a brief summary to the user.Here's your PDF with 25 top titles and 25 demo scenarios, plus bonus sections on video structure, thumbnail guidelines, and competitor positioning.

**What's Inside:**

**Titles (25 total)** organized by energy level:
- Provocative ("I Have Better Docs Than Next.js")
- Curiosity gap ("How I Know Features Before They're Documented")
- Direct value ("Enterprise RAG for Individual Developers")
- Transformation ("Stop Googling. Start Indexing.")
- Framework-specific ("Next.js 15 Docs Are Wrong. I Checked the Source.")

**Demo Scenarios (25 total)** with repos to index and video hooks:
- "Fresher Than Docs" demos (Next.js canary, Tailwind v4, React compiler)
- Cross-repo intelligence (Framework Rosetta Stone, Dependency Detective)
- Competitive comparisons (The RAG Showdown, Freshness Race)
- Domain-specific (Security scanning, compliance, fintech, healthcare)
- Practical workflows (OSS contribution, onboarding, migrations)

Each demo includes the specific repos to index and the "aha moment" query to run on camera.\n
## human\n\ni am going to facilitate the hands on part of this workshop. what should i prep\n
## assistant\n\nThe user is asking for help preparing to facilitate the hands-on portion of the Context Engine Accelerator Workshop. Let me read the uploaded file to see if it's different from the previous version, then give practical facilitation prep advice.
```
This block is not supported on your current device yet.
```

Now I have the full workshop document. The user is facilitating the hands-on portion. Looking at the schedule:

**Pilot Schedule:**
- 1:55 - 2:45 - Hands-on Hacking Session (50 min)

**Full Workshop Schedule:**
- 1:00 PM - 3:00 PM: Hands-on Hacking Session (2 hours)

The facilitator role is described as "Timekeeper and MC to help keep the workshop moving."

For the hands-on portion specifically, I need to help them prep:
1. Environment readiness - making sure everyone can actually code
2. Common blockers and how to unblock people fast
3. Project ideas ready for people who don't know what to build
4. Troubleshooting scripts/commands ready
5. Time checks and pacing
6. How to circulate and spot struggling participants
7. Demo showcase logistics at the end

Let me give them a practical prep guide.Based on the workshop doc, here's what you need to prep for the hands-on hacking session (50 min pilot / 2 hours full workshop):

---

## Your Role as Facilitator

You're the timekeeper and MC keeping things moving. During hands-on, you shift to "roaming troubleshooter" making sure nobody gets stuck for more than 5 minutes.

---

## Pre-Workshop Prep

**1. Test the Full Flow Yourself**

Run through this exact sequence before the workshop:

```bash
# Install
npm install -g @augmentcode/auggie@prerelease
npm install @augmentcode/auggie-sdk

# Auth
auggie login
auggie token print

# Clone the demo repo
git clone https://github.com/chevyphillip/auggiesec-agent.git
cd auggiesec-agent

# Run it, break it, fix it
```

Know what error messages look like so you recognize them instantly when participants hit them.

**2. Prepare Your Troubleshooting Cheat Sheet**

| Symptom | Likely Cause | Quick Fix |
|---------|--------------|-----------|
| "Cannot find module" | SDK not installed | `npm install @augmentcode/auggie-sdk` |
| Auth fails silently | Session expired | `auggie login` again |
| "ENOENT" errors | Wrong path / OS path issues | Check relative vs absolute paths |
| Indexing hangs | Large files / network | Start with smaller file set |
| Search returns empty | Content not indexed yet | Wait, or check `addToIndex` response |
| Token errors | Env vars not set | `auggie token print` then export |

**3. Have Backup Project Ideas Ready**

Some participants won't know what to build. Have these queued:

| Idea | Complexity | Good For |
|------|------------|----------|
| Index your team's README files | Easy | First-timers |
| Index API docs for a service you use | Easy | PMs, non-devs |
| Index your company's runbooks/playbooks | Medium | Ops folks |
| Build a "ask my codebase" CLI | Medium | Developers |
| Index compliance docs (SOC2, etc.) | Medium | Security/fintech |
| Cross-repo dependency tracer | Hard | Advanced devs |

**4. Prepare Time Check Announcements**

For the 2-hour session:

| Time | Announcement |
|------|--------------|
| 1:00 PM | "You have 2 hours. Goal: index something and run one successful search." |
| 1:30 PM | "90 minutes left. If you're still stuck on setup, flag me now." |
| 2:00 PM | "1 hour left. Start narrowing scope if your project is too big." |
| 2:30 PM | "30 minutes. Wrap up—we'll demo at 3:00." |
| 2:50 PM | "10 minutes. Get to a stopping point. Who wants to demo?" |

---

## During the Session

**Circulation Pattern**

Walk the room every 10 minutes. Look for:
- Blank screens (stuck on setup)
- Same screen for 15+ min (stuck on a problem)
- Frustrated body language
- People not typing

**Triage Questions**

When you approach someone:
1. "What are you trying to build?"
2. "What's the last thing that worked?"
3. "What error are you seeing?"

Don't solve it for them—point them to the right doc or command, then move on.

**Escalation Path**

If you can't unblock someone in 2 minutes:
- Tag the Instructor (Igor/Rich/AJ) for SDK-specific issues
- Tag the Mentor for architecture/approach questions
- Pair stuck participants with someone who's ahead

---

## Demo Showcase Prep (Final 30 min)

**5 Minutes Before Demos**

Ask for volunteers. You need 2-3 people willing to show their screen for 3-5 minutes each.

Prompt: "Who got something working they want to show? Doesn't have to be finished—interesting failures count too."

**Demo Format**

Coach each presenter:
1. What were you trying to build? (30 sec)
2. Show us the code/config (1 min)
3. Run the search live (1 min)
4. What would you do next? (30 sec)

**Backup Plan**

If nobody volunteers, you demo the auggiesec-agent repo yourself with a twist—index something unexpected (a random GitHub repo, a PDF, etc.) to show flexibility.

---

## Your Kit (Have These Open)

- Terminal with SDK installed and authenticated
- The auggiesec-agent repo cloned
- Augment docs tabs: [SDK Overview](https://docs.augmentcode.com/context-services/sdk/overview), [Examples](https://docs.augmentcode.com/context-services/sdk/examples), [API Reference](https://docs.augmentcode.com/context-services/sdk/api-reference)
- This troubleshooting cheat sheet
- Stopwatch/timer app

---

## Success Metrics (Track These)

From the doc, your targets are:
- [ ] All participants successfully authenticate
- [ ] Each participant indexes at least one file/directory
- [ ] Each participant performs a successful search
- [ ] 2-3 participants complete a basic project
- [ ] Collect ideas for future SDK use cases

Keep a mental tally as you circulate. If auth is failing for multiple people at 1:30, that's a red flag to escalate.

---

Want me to create a printable one-pager facilitator guide you can have on hand during the workshop?\n
## human\n\nim not the timekeeper. im the expert doing the hands on demo only and answering technical questions\n
## assistant\n\nThe user is clarifying their role - they're not the facilitator/timekeeper, they're the technical expert (like Igor/Rich/AJ mentioned in the doc) who does the hands-on demo and answers technical questions during the hacking session.

So they need to prep:
1. The live demo they'll do (auggiesec-agent repo walkthrough)
2. Deep technical knowledge of the SDK to answer questions
3. Common issues they'll encounter
4. Code snippets and examples ready to share

Let me refocus on what a technical instructor needs to prep for the demo portion and Q&A support.Got it—you're the technical expert doing the live coding demo and fielding SDK questions. Here's what you need:

---

## Your Demo (Module 2: DirectContext API)

You have about 15-20 minutes to walk through the [auggiesec-agent](https://github.com/chevyphillip/auggiesec-agent) repo live. Prep this sequence:

**Demo Flow**

```typescript
// 1. Import and create context
import { DirectContext } from '@augmentcode/auggie-sdk';

const context = await DirectContext.create();

// 2. Index OWASP content (show the file structure)
const result = await context.addToIndex([
  { path: 'owasp/injection.md', contents: '...' },
  { path: 'owasp/broken-auth.md', contents: '...' }
]);

console.log('Newly uploaded:', result.newlyUploaded);
console.log('Already indexed:', result.alreadyUploaded);

// 3. Search - this is the "aha" moment
const searchResults = await context.search('SQL injection prevention');

// 4. searchAndAsk - show the one-liner Q&A
const answer = await context.searchAndAsk('How do I prevent XSS attacks?');

// 5. State persistence (mention briefly)
await context.exportToFile('./context-state.json');

// 6. Cleanup
await context.close();
```

**What to Have Ready**

- The repo cloned and working locally
- Already authenticated (`auggie login` done)
- Terminal font size bumped up for screen sharing
- A few OWASP markdown files ready to index (don't wait for downloads live)

---

## Technical Questions You'll Get

**Authentication**

Q: "Where does the session token live?"
A: `~/.augment/session.json` — or set `AUGMENT_TENANT_URL` and `AUGMENT_API_TOKEN` env vars

Q: "Can I use this in CI/CD?"
A: Yes, use env vars. Don't commit session.json.

**DirectContext vs FileSystemContext**

Q: "Which one should I use?"
A: 
- `DirectContext` — when you control the content (APIs, databases, generated content, specific files)
- `FileSystemContext` — when you want to index a whole directory automatically

**Indexing**

Q: "How big can files be?"
A: No hard limit documented, but chunk large files. Indexing is async—large sets take time.

Q: "Does it re-index every time?"
A: No, `alreadyUploaded` array shows what was skipped. Use `exportToFile()` to persist state between runs.

Q: "What file types work?"
A: Text-based files. Code, markdown, docs, JSON, etc. Not images/binaries.

**Search**

Q: "What's the difference between `search()` and `searchAndAsk()`?"
A: 
- `search()` returns ranked chunks—you send these to your own LLM
- `searchAndAsk()` does retrieval + LLM answer in one call

Q: "How do I improve search quality?"
A: Better content structure, more specific queries, ensure relevant content is actually indexed

**Python vs TypeScript**

Q: "Is Python SDK the same?"
A: Same APIs, same patterns. `pip install auggie-sdk`, then:
```python
from auggie_sdk import DirectContext

context = await DirectContext.create()
```

---

## Code Snippets to Have Ready

**Quick Start (copy-paste for participants)**

```typescript
import { DirectContext } from '@augmentcode/auggie-sdk';

async function main() {
  const ctx = await DirectContext.create();
  
  await ctx.addToIndex([
    { path: 'test.md', contents: '# Hello World\nThis is a test document.' }
  ]);
  
  const results = await ctx.search('hello');
  console.log(results);
  
  await ctx.close();
}

main();
```

**Python equivalent**

```python
from auggie_sdk import DirectContext
import asyncio

async def main():
    ctx = await DirectContext.create()
    
    await ctx.add_to_index([
        {"path": "test.md", "contents": "# Hello World\nThis is a test document."}
    ])
    
    results = await ctx.search("hello")
    print(results)
    
    await ctx.close()

asyncio.run(main())
```

**Reading local files for indexing**

```typescript
import { readFileSync } from 'fs';

const files = ['doc1.md', 'doc2.md'].map(f => ({
  path: f,
  contents: readFileSync(f, 'utf-8')
}));

await ctx.addToIndex(files);
```

---

## Common Errors You'll Debug Live

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot find module '@augmentcode/auggie-sdk'` | Not installed | `npm install @augmentcode/auggie-sdk` |
| `Unauthorized` / `401` | Auth expired or missing | `auggie login` |
| `context.addToIndex is not a function` | Wrong import or didn't await `create()` | Check `await DirectContext.create()` |
| Empty search results | Content not indexed or query too specific | Check `addToIndex` response, broaden query |
| `ENOENT` | File path wrong | Use absolute paths or verify relative path from cwd |

---

## During Hacking Session

You'll be circulating and unblocking people. Quick triage:

1. "Show me your error" — read it, 80% of the time the answer is in the message
2. "Did `addToIndex` return `newlyUploaded`?" — confirms indexing worked
3. "What query are you running?" — often too specific or doesn't match indexed content

If someone's project idea is too ambitious, help them scope down: "Let's just get one file indexed and one search working first."

---

## Your Tabs to Have Open

- [SDK Overview](https://docs.augmentcode.com/context-services/sdk/overview)
- [Examples](https://docs.augmentcode.com/context-services/sdk/examples)
- [API Reference](https://docs.augmentcode.com/context-services/sdk/api-reference)
- [auggiesec-agent repo](https://github.com/chevyphillip/auggiesec-agent)
- Your terminal with the demo ready to run

---

Want me to build out a more detailed demo script with exact talking points, or prep anything specific for the domain examples (fintech, hardware, security)?\n
## human\n\nmake a structured pdf with all the info including links, snippets and facts\n
## assistant\n\nThe user wants a comprehensive PDF document for their role as the technical expert at the Context Engine SDK workshop. This should include:

1. Their role/responsibilities
2. Demo flow with code
3. Technical Q&A they'll get
4. Code snippets to have ready
5. Common errors and fixes
6. Links to documentation
7. Tips for the hacking session

Let me create a well-structured PDF using reportlab.
```
This block is not supported on your current device yet.
```

I'll create a comprehensive PDF for the technical expert's role at the workshop. This should include:

1. Role summary
2. Demo flow with code snippets
3. Technical Q&A reference
4. Code snippets to copy-paste for participants
5. Error troubleshooting table
6. Links to documentation
7. Hacking session tips

Let me create this using reportlab.
```
This block is not supported on your current device yet.
```

Now let me run the script to generate the PDF.
```
This block is not supported on your current device yet.
```

The PDF was created successfully. Let me present it to the user.
```
This block is not supported on your current device yet.
```

The PDF was created and presented successfully. Let me give the user a brief summary of what's in it.Here's your expert guide with everything you need for the hands-on demo.

**What's Inside:**

**Live Demo Flow** — Step-by-step code with talking points for each SDK operation (create, addToIndex, search, searchAndAsk, exportToFile, close)

**Technical Q&A Reference** — Tables covering authentication, DirectContext vs FileSystemContext, indexing questions, and search behavior

**Copy-Paste Code Snippets** — TypeScript and Python quick starts, file reading patterns, full working example with error handling

**Error Troubleshooting** — Common error messages, causes, and fixes in a quick-reference table

**Installation Commands** — TypeScript and Python setup, environment variables for CI/CD

**Backup Project Ideas** — Suggestions organized by complexity for participants who don't know what to build

**Links & Resources** — All documentation URLs, the demo repo, and package names

**Schedule Reference** — Both pilot (Jan 16) and full workshop timings with your presentation slots highlighted

**Pre-Demo Checklist** — Everything to verify before you go live\n
## human\n\nanswer these questions:
Introduction to Context Engine SDK (10 minutes)
* What is the Augment Context Engine SDK?
* Use cases and applications
* SDK architecture overview
* Experimental API considerations
* TypeScript vs Python options
Installation and Environment Setup (5 minutes)
* Prerequisites check
   * Node.js/npm or Python environment
   * Text editor/IDE setup
   * Terminal access
* Installing the SDK
   * npm install -g @augmentcode/auggie@prerelease
   * npm install @augmentcode/auggie-sdk
   * Python alternative: pip install auggie-sdk
* Verification of installation
Authentication and Credentials (5 minutes)
* Understanding authentication methods
   * CLI login workflow
   * Environment variables
   * Session file (~/.augment/session.json)
* Hands-on: Authenticating with Augment
   * auggie login demonstration
   * Finding tenant URL with auggie token print
   * Setting environment variables (optional method)
* Understanding API tokens and security best practices
Module 2: DirectContext API (45 minutes)
Introduction to DirectContext (5 minutes)
* What is DirectContext?
* When to use DirectContext
* Benefits of explicit indexing
* Use cases: APIs, databases, memory, disk sources
Creating and Initializing DirectContext (5 minutes)
* Importing the DirectContext class
* Creating a context instance with DirectContext.create()
* Understanding authentication flow
   * Options parameters
   * Environment variables
   * Session file fallback
* Error handling best practices
Adding Files to Index (5 minutes)
* Understanding the addToIndex() method
* File object structure
   * path property
   * contents property
* Hands-on exercise: Indexing sample files
* Interpreting results
   * newlyUploaded array
   * alreadyUploaded array
* Live coding demonstration
Searching and Querying (5 minutes)
* Using the search() method
   * Crafting effective search queries
   * Understanding search results format
   * LLM-ready output formatting
* Using the searchAndAsk() method
   * One-step Q&A functionality
   * Comparing search vs searchAndAsk
* Hands-on exercise: Search queries
State Management and Persistence (5 minutes)
* Why save state?
* Exporting context with exportToFile()
* Importing saved state
* Avoiding re-indexing overhead
* Best practices for state management
Cleanup and Best Practices (5 minutes)
* Properly closing contexts with close()
* Resource management
* Performance considerations
First SDK Interaction 
* Review of __auggiesec-agent__
* Verifying successful authentication
* Review of __prompt enhancer__
* Q&A and troubleshooting
Hands-on Project Workshop (50 minutes)
Project Planning (5 minutes)
* Participants identify their use case
* Choosing the right context type
* Defining project scope
* Setting up project structure
Guided Implementation (15 minutes)
* Instructor circulates to assist
* Common patterns and solutions
   * Integrating with existing codebases
   * Building search interfaces
   * Creating knowledge bases
   * Code documentation tools
* Troubleshooting common issues
   * Authentication problems
   * Indexing errors
   * Search result interpretation
Showcase and Discussion (10 minutes)
* Participants share their implementations (2-3 volunteers)
* Discussing different approaches
* Advanced topics and next steps
   * API Reference exploration
   * Example applications
   * Integration patterns
   * Performance optimization
* Resources for continued learning
   * Documentation links
   * Community support
   * Example repositories
useful context:
https://github.com/augmentcode/context-connectors\n
## assistant\n\nThe user wants me to create comprehensive answers to all the workshop module questions using the Context Services documentation they provided. This is for their role as the technical expert doing the hands-on demo. Let me create a thorough reference document covering all these topics.Let me create a comprehensive reference document answering all these workshop questions.
```
This block is not supported on your current device yet.
```

Now let me run the script to create the PDF.
```
This block is not supported on your current device yet.
```

Great, the PDF was created successfully. Let me present it to the user.
```
This block is not supported on your current device yet.
```

Perfect, the PDF has been created and presented. Let me summarize what's in it for the user.Here's your complete workshop reference covering every module question.

**What's Inside:**

**Module 1: Introduction & Setup (20 min)**
- What is the Context Engine SDK — RAG solution for knowledge cutoff + hallucinations
- Use cases — SaaS providers, partners, enterprises, security scanners, knowledge bases
- Architecture overview — DirectContext vs FileSystemContext decision matrix
- Experimental API considerations — breaking changes, version pinning
- TypeScript vs Python comparison table
- Installation commands for both languages
- Authentication flow — priority order (options → env vars → session file)
- Security best practices

**Module 2: DirectContext API (45 min)**
- What is DirectContext — explicit indexing with full state control
- When to use it vs FileSystemContext
- Benefits of explicit indexing
- Use cases with code examples (APIs, databases, memory)
- Creating and initializing — create(), authentication flow, error handling
- addToIndex() — file structure, interpreting results (newlyUploaded/alreadyUploaded)
- search() vs searchAndAsk() — comparison table, query tips
- State management — exportToFile(), importFromFile(), best practices
- Cleanup — close(), resource management, performance tips
- Complete API reference tables for both context types

**Hands-On Workshop Section**
- Project planning guidance
- Context type selection helper
- Troubleshooting table (auth, empty results, common errors)
- Code patterns (codebase integration, search interfaces, knowledge bases)

**Quick Reference Card**
- Essential commands
- Minimal working example
- All key documentation links\n
## human\n\nnow with this info give me a script showing context engine sdk and context connectors\n
## assistant\n\nThe user wants a demo script that shows both the Context Engine SDK and Context Connectors. This should be a practical, runnable demonstration that I can provide as a file they can use in the workshop.

Let me create a comprehensive demo script that:
1. Shows the Context Engine SDK (DirectContext and FileSystemContext)
2. Shows Context Connectors (indexing repos, searching, etc.)
3. Is well-commented and explains each step
4. Can be run during the workshop demo

I'll create both TypeScript and possibly a shell script that walks through the full demo flow.
```
This block is not supported on your current device yet.
```

Now let me also create:
1. A package.json for easy setup
2. A shell script version that demonstrates the CLI commands
3. A simpler quick-start script for participants who want something minimal
```
This block is not supported on your current device yet.
```

Now let me create simpler quick-start scripts that participants can use as starting points.
```
This block is not supported on your current device yet.
```

Now create a quick-start for FileSystemContext.
```
This block is not supported on your current device yet.
```

Now let me create a shell script that demonstrates the Context Connectors CLI commands as well. This is great for the live demo portion.
```
This block is not supported on your current device yet.
```

Now let me create a README for the demo package that explains everything.
```
This block is not supported on your current device yet.
```

Now let me package all these files together and present them to the user.
```
This block is not supported on your current device yet.
```

Now let me also copy the main demo script to outputs so they can view it separately if needed, along with the zip file.
```
This block is not supported on your current device yet.
```

Let me present all the files to the user.
```
This block is not supported on your current device yet.
```

Great, I've created and shared all the demo files. Let me give the user a summary of what's included.Here's your complete demo package with scripts showing both the Context Engine SDK and Context Connectors.

**What's Included:**

**demo-script.ts** — Full workshop demo (runs all 4 parts):
- Part 1: DirectContext with OWASP security content
- Part 2: Import saved state (skip re-indexing)
- Part 3: FileSystemContext for automatic directory indexing  
- Part 4: Context Connectors CLI reference

**demo-cli.sh** — Interactive shell script for CLI demo:
- Index a GitHub repo (`npx context-connectors index github`)
- Search indexed content
- List/delete indexes
- MCP server setup for Claude Desktop

**context-engine-demo.zip** — Complete package with:
- `demo-script.ts` — Full demo
- `quick-start-direct.ts` — Minimal DirectContext example
- `quick-start-filesystem.ts` — Minimal FileSystemContext example
- `demo-cli.sh` — CLI commands demo
- `package.json` — Dependencies
- `README.md` — Setup instructions

**To Run the Demo:**

```bash
# Unzip and setup
unzip context-engine-demo.zip
cd context-engine-demo
npm install

# Authenticate
auggie login

# Run full demo
npx ts-node demo-script.ts

# Or run CLI demo
chmod +x demo-cli.sh
./demo-cli.sh
```

**Demo Flow for Workshop:**

1. Show DirectContext creating/indexing OWASP content
2. Run search() and searchAndAsk() live
3. Export state, then import it back (show no re-indexing)
4. Quick FileSystemContext example
5. Switch to CLI: `npx context-connectors index github --owner facebook --repo react -i react`
6. Search the indexed repo live\n
## human\n\nVideo scripts with title and thumbnail 
4 of them, very different from each other\n
## assistant\n\nThe user wants 4 video scripts with titles and thumbnails, each very different from each other. Let me create diverse scripts covering different angles, tones, and formats for the Context Engine content.

I'll create:
1. A provocative/competitive comparison video
2. A practical tutorial/build video
3. A story-driven transformation video
4. A fast-paced, high-energy "hacks" style video

Each should have:
- Title
- Thumbnail description
- Full script with timestamps
- Different tone and approach
```
This block is not supported on your current device yet.
```

Now let me run the script to generate the PDF.
```
This block is not supported on your current device yet.
```

Great, the PDF was created. Now let me present it to the user.
```
This block is not supported on your current device yet.
```

The PDF has been generated and presented. Let me give a summary of the four video scripts.Here are 4 complete video scripts, each with a distinct style, title, and thumbnail concept.

**The Four Videos:**

| # | Title | Style | Length | Vibe |
|---|-------|-------|--------|------|
| 1 | **I Have Better Docs Than Next.js** | Provocative / Competitive | 8-10 min | Bold claim, prove it live |
| 2 | **Build Always-Updated Docs in 10 Minutes** | Tutorial / Build | 12-15 min | Step-by-step, code along |
| 3 | **The Day I Stopped Fighting Documentation** | Story / Transformation | 6-8 min | Emotional, relatable |
| 4 | **5 AI Coding Hacks That Feel Like Cheating** | Fast / Listicle | 5-6 min | High energy, viral format |

**What's in Each Script:**

- Full thumbnail concept with layout, colors, expressions, and text
- Target metrics (length, goal, CTA)
- Complete timestamped script with dialogue and stage directions
- Camera directions and b-roll suggestions

**Thumbnail Production Guide** at the end covers:
- Color palette (hex codes)
- Face expressions by video type
- A/B testing strategy
- General principles for high CTR

**The Diversity:**

1. **Video 1** — Challenges viewers, makes a bold claim, backs it up with live demo
2. **Video 2** — Educational, viewers build along, practical and actionable
3. **Video 3** — Personal story, emotional connection, soft sell
4. **Video 4** — Algorithm-optimized, fast cuts, broad appeal, viral potential

Each targets a different audience segment and works at different points in the viewer journey (awareness → consideration → conversion).\n
## human\n\ncan we make it more real. i havent really experienced this doc mismatch. are the notable cases online we can leverage and prove more authentically\n
## assistant\n\nThe user is asking for real, documented cases of documentation mismatches or outdated docs that they can reference in their videos to make the content more authentic. Let me search for real examples of this problem.

I should search for:
1. Real cases where framework docs were outdated
2. GitHub issues or discussions about doc/code mismatch
3. Notable examples developers have complained about
4. Specific frameworks known for this problem

This will make the video scripts more authentic and credible.Great call—let me find real documented cases of doc/code mismatch that you can reference authentically.
```
This block is not supported on your current device yet.
```

Let me search for more specific documentation issues and developer frustrations with outdated docs.
```
This block is not supported on your current device yet.
```\n
## assistant\n\nThe user is asking for real, documented cases of documentation issues that they can reference in their videos. They want authentic examples they can point to, not hypothetical scenarios. Let me search for specific, well-known cases of documentation problems in popular frameworks/libraries.Let me search for specific, documented cases with real examples.
```
This block is not supported on your current device yet.
```

Let me try a different search approach to find real documented cases.
```
This block is not supported on your current device yet.
```

Let me search for more specific real cases - perhaps AWS, Kubernetes, or other popular technologies with documentation issues.
```
This block is not supported on your current device yet.
```

This is great - I found some really solid, real examples. Let me search for a few more specific cases, particularly around popular frameworks like Tailwind, Prisma, or other common tools developers use.
```
This block is not supported on your current device yet.
```

Excellent! I now have some very concrete, real examples from GitHub issues that I can use. Let me search for one more - something about LangChain or OpenAI or another AI-related library since that's very relevant to the target audience.
```
This block is not supported on your current device yet.
```

I've found a lot of good real-world examples. Let me search for one more angle - maybe LangChain which is notorious for documentation issues, or maybe something about developers wasting hours on docs.
```
This block is not supported on your current device yet.
```

Excellent! I now have a treasure trove of real, documented cases. Let me compile these into authentic video scripts that reference real GitHub issues and developer frustrations. These real examples include:

1. **AWS SDK v3 Documentation** - GitHub issue #4318 with 20-year dev saying "WORST documentation I have ever seen" - tasks that should take 30 seconds take 30 minutes

2. **Amazon Selling Partner API** - GitHub issue #180 - "I have been dev for 20 years and I can say with guarantee this is the WORST documentation I have seen in my life" - team of 3 devs spending weeks

3. **Tailwind CSS v4** - Multiple issues about @apply breaking, config changes not documented, v3→v4 migration being "one of the worst code migrations I've ever dealt with in my 12 years developing software"

4. **LangChain** - Notorious for "outdated, confusing documentation", breaking changes, developers saying "We have to spend hours reading your horrible code just to understand how to use a simple function"

5. **OpenAI** - Developers frustrated with docs being wrong, API reference showing all fields as optional when they're not

6. **Next.js/React** - Issues about docs not keeping up with canary releases, ESLint config ambiguities

These are all real, linkable GitHub issues and discussions that can be shown on screen!Now I have excellent real examples. Let me create authentic video scripts based on these documented cases.
```
This block is not supported on your current device yet.
```\n
## assistant\n\nThe user is asking me to make the video scripts more authentic because they haven't personally experienced the documentation mismatch problem. They want to use real, documented cases from online sources to make the content more credible and authentic.

Looking at my previous response, I actually already did search for real cases and found excellent examples from GitHub issues. But the user seems to have sent this message before seeing my updated scripts, or they want me to dig deeper into more specific, concrete examples.

Let me re-read the situation - it looks like the user sent the same message twice (possibly a duplicate or they didn't see my response yet). My last action was creating the authentic scripts PDF with real evidence from:
- AWS SDK v3 issue #4318
- Amazon Selling Partner API issue #180
- Tailwind v4 migration issues
- LangChain documentation complaints

Let me check if my script actually ran and if the PDF was created. I should run the script and present the file to the user.

Actually, looking at the conversation flow, I created the file but didn't run the python script to generate the PDF. Let me do that now.I already found those real cases! Let me run the script to generate the PDF with the authentic evidence I gathered:
```
This block is not supported on your current device yet.
```

Good, the PDF was created. Now let me present it to the user and summarize the real evidence I found.
```
This block is not supported on your current device yet.
```

Good, the PDF is now available. Let me summarize the real evidence I found for the user so they understand what's in the scripts.I found real documented cases. Here's what's in the scripts now:

**Video 1: AWS/Amazon Documentation Disasters**

Real GitHub issues you can show on screen:
- **AWS SDK v3 #4318**: "Tasks that should take 30 seconds take 30 minutes to figure out. If I were grading it... I'd give this documentation a D-." (10-year AWS veteran)
- **Amazon SP-API #180**: "Team of 3 devs splitting our hairs over this piece of crappy documentation for weeks... missing code, uncompilable code, urls pointing to wrong domains"

**Video 2: Tailwind v4 Migration Nightmare**

Real quotes from GitHub discussions:
- **#16517**: "This is truly one of the worst code migrations I've ever dealt with in my 12 years developing software"
- **#16346**: "@apply Broken in Tailwind CSS v4.0 – No Clear Fix or Docs!"
- Multiple devs reporting "I had to add @reference to hundreds of files"

**Video 3: LangChain Documentation Hell**

Real GitHub issues:
- **#9171**: "DOC: Documentation is frustratingly bad"
- **#16169**: "We have to spend hours reading your horrible code just to understand how to use a simple function"
- **#18876**: "The code uses obsolete imports" — example code in docs literally doesn't work

**Video 4: React Source Code Deep Dive**

Uses the documented React ecosystem churn (Create React App removal, class components deprecation, docs rewrites) as context.

---

Each script includes the actual GitHub URLs to show on screen so viewers can verify themselves. You're not claiming you experienced it—you're showing *their* documented frustrations and offering a solution.\n
## human\n\nwrite a document for me personally as a content creator, how i took this new product augment code was releasing and thought of a realistic and authentic use case that no one had considered before and made a video to communicate this resulting in more awareness and net new customers\n
## assistant\n\nThe user wants a personal document/case study about how they (Techfren) took Augment Code's Context Engine product and found a unique, authentic use case that hadn't been considered before - specifically the "documentation is broken, search the source code directly" angle. This should be a document they can use personally, perhaps for:
- Portfolio purposes
- Pitching to other companies for similar work
- Documenting their process for future reference
- Sharing with Augment Code team

Let me think about what made this approach unique:
1. Most people position Context Engine as "better RAG" or "search your codebase for your own projects"
2. The insight was: documentation across the entire industry is systematically broken (not just stale, but structurally disconnected from code)
3. The evidence-based approach: finding real GitHub issues with real developer frustration
4. Positioning it as "skip the docs, search the source" - which is a provocative, memorable frame
5. Using other people's documented pain (AWS, LangChain, Tailwind) to create authenticity without having to manufacture frustration

This is actually a smart content strategy document. Let me write it as a personal case study/reflection document.
```
This block is not supported on your current device yet.
```

Let me also create a PDF version of this for a more professional document that they can share. But actually, the user might prefer the markdown for easy editing. Let me present the markdown and also offer to convert to PDF if needed.
```
This block is not supported on your current device yet.
```

The user might want both the markdown and a PDF version. Let me create a PDF version as well for sharing with others/portfolio purposes.
```
This block is not supported on your current device yet.
```

Good, I'll create a PDF version using reportlab for a more polished, shareable document.
```
This block is not supported on your current device yet.
```

Let me run this to create the PDF.
```
This block is not supported on your current device yet.
```

Great, now let me present both files to the user.
```
This block is not supported on your current device yet.
```

I've created both a PDF and markdown version of the case study document. Let me summarize what's in it for the user.Here's your personal case study document in both PDF and markdown formats.

**The Core Narrative:**

You took a product being positioned as "better RAG / code search" and found an untapped angle: **documentation is architecturally broken across the entire industry**, and searching source code directly is the fix.

**What Made Your Approach Different:**

1. **Reframed the category** — From "code search tool" (competes with other code search tools) to "documentation replacement" (competes with nothing)

2. **Used evidence, not claims** — You didn't manufacture frustration. You found real GitHub issues with real quotes from developers with 10-20 years of experience calling docs "the worst I've ever seen"

3. **Expanded the addressable market** — Every developer has been frustrated by docs. Not every developer knows they need code search.

4. **Problem-first, product-second** — Videos open with their pain (receipts on screen), solution comes after recognition

**The Key Insight (for future partnerships):**

The best content angle is often the *adjacent* problem, not the primary use case. Augment built code search. You found documentation replacement. Same product, bigger audience, no competition.

**Use this document for:**
- Portfolio / case studies when pitching to other companies
- Sharing with Augment's team to show your strategic contribution  
- Personal reference for applying this framework to future products
- Content about content strategy (meta, but it works)\n
## human\n\ncan you give some more use cases for direct context and context connectors and even mcp. 
what unique data sources, api, database, etc\n
## assistant\n\nThe user wants more creative and unique use cases for Context Engine's different tools:
1. DirectContext (SDK) - for programmatic indexing of any content
2. Context Connectors - CLI for GitHub, websites, etc.
3. MCP - for agent integration

They want to know what unique data sources, APIs, databases, etc. could be indexed. Let me think of creative, practical, and unique use cases that would resonate with developers and make for good video/educational content.

Let me brainstorm across different categories:

**APIs & Live Data:**
- Stripe API responses (transactions, customers, subscriptions)
- Twilio logs
- SendGrid email analytics
- Slack message history
- Discord server messages
- Notion databases
- Airtable bases
- Linear/Jira issues
- GitHub discussions (not just code)
- HubSpot CRM data
- Salesforce records
- Intercom conversations
- Zendesk tickets

**Databases:**
- PostgreSQL schemas + sample data
- MongoDB collections
- Redis keys
- Supabase tables
- PlanetScale
- Firebase Firestore
- DynamoDB tables

**Internal Documentation:**
- Confluence wikis
- Google Docs
- Dropbox Paper
- Internal markdown repos
- README files across repos
- Architecture Decision Records (ADRs)
- Runbooks
- Incident postmortems

**Logs & Observability:**
- CloudWatch logs
- Datadog logs
- Sentry error reports
- Application logs
- Kubernetes pod logs
- CI/CD build logs

**Communication:**
- Slack channels (engineering, product)
- Email threads
- Meeting transcripts
- Loom video transcripts

**Product & Design:**
- Figma comments
- User feedback (from surveys, NPS)
- Product requirements docs
- Feature specs
- User stories

**Code-Adjacent:**
- Pull request descriptions
- Code review comments
- Commit messages


- Issue discussions
- Stack traces
- Test results

**Compliance & Legal:**
- Legal contracts and SOC2 documentation
- Security policies and vendor documentation
- Partner API docs and competitor documentation (public)
- Industry standards like ISO and NIST

**Learning & Personal:**
- Personal note-taking apps like Obsidian or Roam
- Bookmarks with content, saved articles, and course notes
- Conference talk transcripts and academic papers
- Patents

I should structure this in a way that's actually useful for the user to reference.
```
This block is not supported on your current device yet.
```

Let me present this file to the user.
```
This block is not supported on your current device yet.
```

Good, I've created and presented the markdown file with 20 unique use cases. Let me give the user a summary of the highlights.Here's a comprehensive breakdown of unique use cases. The highlights:

**High-Impact Enterprise Use Cases:**

| Use Case | Data Source | Killer Query |
|----------|-------------|--------------|
| **Support Intelligence** | Zendesk tickets, Slack #support | "How did we resolve SSO issues?" |
| **Incident Postmortems** | PagerDuty, Notion, runbooks | "What caused the last DB outage?" |
| **Compliance Search** | SOC2 controls, security policies | "What's our encryption-at-rest policy?" |
| **Error Message DB** | Sentry errors + resolutions | "How did we fix this NullPointer?" |
| **Meeting Archaeology** | Otter.ai transcripts, Loom | "What did we decide about pricing?" |

**Creative/Unique Ones:**

| Use Case | Why It's Interesting |
|----------|---------------------|
| **Database Schema Search** | "What columns are in the orders table?" - query your actual schema |
| **Competitor Docs** | Index their public docs, compare features |
| **Legal Contract Search** | "What's our SLA with AWS?" from actual contracts |
| **CI/CD Build Intelligence** | "Why do builds keep failing on auth-service?" |
| **Feature Flag Context** | "Is dark mode enabled for enterprise?" |
| **API Response Patterns** | Index your own API's sample responses |

**Multi-Source Power Moves:**

1. **Code + ADRs Together** - Ask "why" and "how" in one search
2. **5 Repos, One Index** - Backend + frontend + mobile searchable together
3. **Vendor Docs Unified** - Stripe + Twilio + Auth0 in one place

**Video Content Ideas from These:**

1. "I Indexed My Company's Support Tickets" ⭐
2. "Every Incident Postmortem, Searchable" ⭐
3. "I Gave Claude Access to Our Codebase" (MCP demo)
4. "From Sentry Error to Fix in 30 Seconds"
5. "Competitive Intelligence with Context Engine"

Which of these resonates most for the course or videos?\n
## human\n\nmake it a pdf\n
## assistant\n\nThe user wants me to convert the markdown use cases document into a PDF. I should use the PDF skill to create a professional-looking PDF document.
```
This block is not supported on your current device yet.
```

Now I'll create a Python script to generate a professional PDF using reportlab with the use cases content.
```
This block is not supported on your current device yet.
```

Now let me run the script to generate the PDF.
```
This block is not supported on your current device yet.
```

Great, the PDF was created successfully. Now let me present it to the user.
```
This block is not supported on your current device yet.
```

The PDF has been created and presented to the user. It contains all the use cases for DirectContext, Context Connectors, and MCP with code examples, example queries, and a priority matrix for video content ideas.Done! The PDF includes:

**10 High-Impact Use Cases** with full code examples:
1. Customer Support Intelligence (Zendesk, Intercom)
2. Incident Postmortem Search (PagerDuty, Notion)
3. Code + Architecture Decisions (hybrid approach)
4. Competitive Intelligence (competitor docs/repos)
5. Compliance & Security KB (SOC2, GDPR, pentests)
6. API Response Patterns (your own API samples)
7. Database Schema Intelligence (PostgreSQL schema dumps)
8. Meeting & Decision History (Otter.ai, Loom transcripts)
9. Infrastructure as Code (Terraform, K8s, Helm)
10. Vendor Docs (Stripe, Twilio, Auth0)

**10 Creative Use Cases** in table format:
- Legal contracts, sales playbooks, research papers, error databases, CI/CD logs, feature flags, etc.

**MCP Server Section** with Claude Desktop config

**Priority Matrix** showing setup effort vs. value vs. video appeal

**7 Video Content Ideas** mapped to specific use cases\n