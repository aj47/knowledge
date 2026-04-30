---
kind: note
id: claude-conversation-2025-12-04-speakmcp-announcement-expansion-711ac787
updatedAt: 1764883432843
createdAt: 1764880862377
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 711ac787-c735-4fbe-8aa1-fe5edb7c97ec
created_at: 2025-12-04T20:41:02.377225Z
updated_at: 2025-12-04T21:23:52.843088Z
title: "Speakmcp announcement expansion"
---

# Speakmcp announcement expansion

## Metadata

- Claude conversation UUID: `711ac787-c735-4fbe-8aa1-fe5edb7c97ec`
- Created: `2025-12-04T20:41:02.377225Z`
- Updated: `2025-12-04T21:23:52.843088Z`
- Message count: 16
- Transcript chars extracted: 26764

## Claude summary

**Conversation Overview**

The user is working on launching a major update to SpeakMCP, their voice-controlled AI agent orchestration tool, scheduled for December 6th. They've made significant technical improvements including forking iterm-mcp for better terminal window management, merging their mobile app into a monorepo, implementing multi-agent parallel execution, and integrating Cerebras for 1000+ tokens per second processing speed. The user wanted to create a comprehensive launch campaign that would make this announcement "big" across multiple platforms.

Initially, the user described wanting to showcase orchestrating parallel coding agents from their phone while outside, but the conversation evolved into a much more compelling narrative concept. The final approach centers around a day-in-the-life story showing how ideas accumulate throughout the day via voice notes, culminating in the powerful command "Work on everything" that triggers multiple AI agents to work on different projects simultaneously. The user emphasized key moments including the follow-up "How's everything going?" check-in and the optimistic message "This is the best time ever to be a builder." They specifically wanted projects to remain unnamed to keep the content universal and relatable rather than specific to their work.

The user requested a multi-format campaign including a longform YouTube video (4-6 minutes), multiple shortform clips for TikTok/Reels/Shorts, X posts building anticipation, and a Product Hunt launch. Claude created a comprehensive campaign document structured as a mini-documentary format with detailed scene breakdowns, script notes in the user's preferred glance-while-recording style, teaser post copy, Product Hunt launch materials, and complete recording shot lists. The user specifically requested the final deliverable as a PDF rather than the initial Word document format.

**Tool Knowledge**

Claude used the docx creation tool to generate a comprehensive launch campaign document. The document structure required specific styling with custom paragraph styles including "sceneHeader" with white text on dark backgrounds for video scene breaks, "bigQuote" for centered, large green text for key phrases, and "visual" styling for italicized direction notes. The tool successfully handled complex table layouts for timeline information with custom cell borders and shading, particularly using the "0D1F0D" green color scheme that matches the user's brand aesthetic. When converting to PDF format, the soffice command with --headless --convert-to pdf parameters worked effectively for the final deliverable format the user requested.

## Quick excerpt

The user wants to continue work on a SpeakMCP announcement. Let me search past conversations to find context about what we've discussed regarding SpeakMCP before. ``` This block is not supported on your current device yet. ``` I found good context. The user has been working on SpeakMCP and previously we discussed: - SpeakMCP Mobile app - Multi-agent execution - New session UI - Cerebras speed with GLM 4.6 at 1000+ tps Now they're telling me: 1. They made their own fork of iterm-mcp so SpeakMCP c

## Transcript

## human\n\nlets continue work on the speakmcp announcement. i want to make it big! i have made my own fork of iterm mcp so speakmcp can now manage terminal windows better. ive merged in the mobile app so now its one monorepo.\n
## assistant\n\nThe user wants to continue work on a SpeakMCP announcement. Let me search past conversations to find context about what we've discussed regarding SpeakMCP before.
```
This block is not supported on your current device yet.
```

I found good context. The user has been working on SpeakMCP and previously we discussed:
- SpeakMCP Mobile app
- Multi-agent execution
- New session UI
- Cerebras speed with GLM 4.6 at 1000+ tps

Now they're telling me:
1. They made their own fork of iterm-mcp so SpeakMCP can manage terminal windows better
2. They've merged the mobile app into one monorepo

This is a significant update - they want to make this announcement big. Let me search for more recent context and also check what iterm-mcp is.
```
This block is not supported on your current device yet.
```

Great context. iterm-mcp is an MCP server that provides terminal control - reading output, writing commands, sending control characters. Arash has forked this to give SpeakMCP better terminal window management capabilities.

So the new announcement would be about:
1. **iTerm MCP fork** - SpeakMCP can now manage terminal windows better
2. **Monorepo** - Mobile app merged in, one unified codebase
3. Plus the existing features: multi-agent execution, new session UI, Cerebras speed at 1000+ tps

This is a substantial update. Let me help them make this announcement big. I should:
1. Understand the full scope of what's new
2. Think about what makes this announcement exciting
3. Create compelling content around it

Let me ask some clarifying questions or help them structure this announcement based on their voice and templates.This is getting serious. Let me make sure I understand the full picture:

**New Updates:**
1. **Your own iTerm MCP fork** — SpeakMCP can now manage terminal windows directly (spawn, read, write, control characters)
2. **Monorepo** — Mobile app merged in, unified codebase

**Plus the previous features:**
- Multi-agent execution
- New session UI (tiling dashboard)
- Cerebras speed (1000+ tps with GLM 4.6)

A few quick questions to nail the angle:

**On the iTerm fork:**
- What's the killer capability this unlocks? For example: "Say 'run my tests in a new terminal' and it just does it"?
- Is this cross-platform now or still macOS-only?

**On the monorepo:**
- What's the benefit to users? Easier contribution? Unified releases? Mobile + desktop working together seamlessly?

**For the announcement — what's the format?**
- X thread + video?
- Just a banger video?
- Product Hunt launch?
- All of the above?

**What's the boldest claim you can make?**
Your best-performing hooks lead with bold claims. What's the "20K stars instantly clone any voice" equivalent here? Some options:

- "SpeakMCP now controls your terminal with your voice"
- "Voice-controlled multi-agent execution is here"
- "One voice command → multiple agents → multiple terminals"
- "From mobile, tell your computer what to do"

What angle feels biggest to you?\n
## human\n\n1 longform youtube video, 2+ shortform clips, x posts hyping up the video coming with teasers. product hunt launch would be great too! think of other CTAs\n
## assistant\n\nThis is a big launch campaign for SpeakMCP. Let me think through the full strategy:

**What we have:**
1. iTerm MCP fork — voice controls terminal windows
2. Monorepo — mobile + desktop unified
3. Multi-agent execution
4. New session UI (tiling dashboard)
5. Cerebras speed (1000+ tps)

**Campaign components needed:**
1. Longform YouTube video (main piece)
2. 2+ shortform clips (TikTok/Reels/Shorts)
3. X posts with teasers building up to launch
4. Product Hunt launch
5. Other CTAs to think about

Let me think about what other CTAs could work:
- GitHub stars ask
- Discord community join
- Newsletter signup
- Try it yourself CTA
- Contribute to open source
- Share/retweet for reach

**The hook/angle:**
What's the boldest claim? The combo of:
- Voice → controls multiple agents
- Multiple agents → each in their own terminal
- All from your phone OR desktop
- At 1000 tokens/second speed

The killer demo would be something like:
"Hey, run my tests in one terminal, start the dev server in another, and watch the logs for errors"
→ Voice command
→ Multiple terminals spawn
→ Agents working in parallel
→ All visible in the tiling dashboard

Let me help them create a comprehensive launch plan with:
1. Content calendar/timeline for X teasers
2. Script notes for the longform video
3. Clip breakdown for shortform
4. Product Hunt launch copy
5. Other CTAs

I should ask a few more clarifying questions but also start building out the framework so we can iterate.Love the ambition. Let's build out the full launch campaign.

**The Core Hook**

Based on your voice data, bold claims crush. Here's the angle I'd lead with:

> "Voice-controlled multi-agent terminal automation. One command, multiple agents, multiple terminals, all from your phone."

That hits: **voice** (unique), **multi-agent** (cutting edge), **terminal control** (power users love this), **mobile** (wow factor).

---

**Quick clarifications before I build the full plan:**

1. **Timeline** — When do you want to launch? This affects the teaser cadence
2. **Demo moment** — What's the single most impressive thing you can show? (e.g., "Hey SpeakMCP, run my tests, start the server, and watch for errors" → 3 terminals spawn, agents work in parallel)
3. **The fork** — Did you add capabilities beyond the original iterm-mcp, or is it integration that's the win?

---

**Additional CTAs to consider:**

| CTA | Where | Purpose |
|-----|-------|---------|
| **GitHub star** | Video end, X posts | Social proof, discoverability |
| **Discord join** | Video description, PH | Community building |
| **Try it yourself** | Every piece | Conversion |
| **Contribute** | GitHub, PH | Open source credibility |
| **Share/RT** | X teasers | Reach amplification |
| **Newsletter** | If you have one | Owned audience |
| **Sponsor/support** | GitHub sponsors? | If applicable |

---

**Proposed Campaign Structure:**

```
WEEK -1: Teaser Phase (X posts)
├── Day 1: Cryptic teaser (blurred screenshot + "something big coming")
├── Day 3: Feature reveal #1 (terminal control clip)
├── Day 5: Feature reveal #2 (mobile demo clip)  
├── Day 7: "Dropping tomorrow" + full preview thumbnail

LAUNCH DAY:
├── YouTube longform drops
├── Product Hunt live
├── X announcement thread
├── Shortform clips to TikTok/Reels/Shorts

WEEK +1: Momentum
├── Behind-the-scenes post
├── User reactions/testimonials
├── Technical deep-dive thread
```

Want me to start drafting the actual content pieces? I can create:
1. **X teaser post copy** (the hype sequence)
2. **Script notes for the longform video** (your template format)
3. **Shortform clip breakdowns** (which moments to cut)
4. **Product Hunt launch copy** (tagline, description, maker comment)

Which should I start with?\n
## human\n\nlaunching this weekend 6th december\n
## assistant\n\nThe user wants to launch SpeakMCP this weekend (December 6th). Today is December 4th, so that's in 2 days. This is a tight timeline.

Let me map out what needs to happen:

**Timeline:**
- Today: Thursday Dec 4
- Tomorrow: Friday Dec 5
- Launch: Saturday Dec 6

Given the tight timeline, we need to be strategic. Let me think about what's realistic:

**Teaser Phase (Today + Tomorrow):**
- Today (Dec 4): First teaser
- Tomorrow (Dec 5): Second teaser / "dropping tomorrow"
- Saturday (Dec 6): Launch day

**Content needed:**
1. X teaser posts (2-3 posts leading up)
2. Longform YouTube script notes
3. Shortform clip plan (what to cut from longform)
4. Product Hunt copy

Let me ask a few more questions or just start building? Given the tight timeline, I should probably just start building and ask clarifying questions as needed.

Actually, I should start creating content now. Let me prioritize:

1. First - the teaser posts for X (needs to go out TODAY)
2. Second - script notes for the longform video
3. Third - Product Hunt copy
4. Fourth - shortform clip breakdown

Let me start drafting the teaser sequence and script notes. I should reference the project files for voice/style guidance.That's Saturday — 2 days out. Tight but doable. Here's the compressed timeline:

```
TODAY (Thu Dec 4):     Teaser #1 — cryptic/exciting
TOMORROW (Fri Dec 5):  Teaser #2 — feature reveal + "dropping tomorrow"
SATURDAY (Dec 6):      Launch day — everything drops
```

Let me start building the content. I'll create:

1. **X teaser sequence** (2 posts for today/tomorrow)
2. **Longform script notes** (your glance-while-recording format)
3. **Product Hunt copy** (tagline, description, first comment)
4. **Shortform clip breakdown** (which moments to cut)

Before I draft — one thing I need:

**What's the single best demo moment?**

Give me the "holy shit" sequence. Something like:
- "From my phone, I say 'run tests, start server, watch logs' — three terminals spawn, three agents work simultaneously, I'm watching from across the room"

What's the most impressive thing you can actually show on camera? This becomes the centerpiece of everything.

Also — do you have any screen recordings or clips already, or are you recording fresh this week?\n
## human\n\nfrom my phone outside i orchestrate parralel coding agent\n
## assistant\n\nThat's the money shot. "From my phone outside, orchestrating parallel coding agents" — that's incredibly visual and impressive. Let me build out the full campaign around this.

Let me start creating the content pieces. I should read the script notes template and voice guide to make sure I nail the format.That's the shot. You outside, phone in hand, terminal windows spawning on your desktop inside. Parallel agents coding. That's the thumbnail, the hook, everything.

Let me build this out.
```
This block is not supported on your current device yet.
```

Now let me read the docx-js.md file since I'll be creating a new document.
```
This block is not supported on your current device yet.
```

Now I have the docx-js guide. Let me create a comprehensive launch campaign document with all the pieces needed for the SpeakMCP launch. I'll create:

1. X teaser posts
2. Longform script notes
3. Product Hunt copy
4. Shortform clip breakdown

Let me write this as a comprehensive launch plan document.
```
This block is not supported on your current device yet.
```

Now I need to run this script to generate the docx file.
```
This block is not supported on your current device yet.
```

The document was created successfully. Let me provide a summary for the user and a link to the document.Done. Here's your full launch campaign:

[View your SpeakMCP Launch Campaign](computer:///mnt/user-data/outputs/speakmcp-launch-campaign.docx)

**What's in there:**

| Section | Contents |
|---------|----------|
| **Timeline** | Thu teaser → Fri teaser → Sat launch |
| **X Teasers** | 2 posts with copy options + attachments |
| **Launch Post** | Full thread with all links |
| **Longform Script Notes** | Your glance-while-recording format |
| **Shortform Clips** | 3 clip breakdowns (hero, speed, mobile) |
| **Product Hunt** | Tagline, description, maker comment |
| **All CTAs** | Primary/secondary + where to use each |
| **Thumbnail Concept** | Split frame outside/desktop |
| **Recording Checklist** | Pre-shoot + shots to capture |

---

**Immediate next steps:**

1. **Today (Thu):** Post teaser #1 — pick option A or B from the doc
2. **Tonight/Tomorrow:** Record the "money shot" sequence (you outside → phone command → terminals spawn)
3. **Friday:** Post teaser #2 with a 10-15 sec clip from the money shot
4. **Friday night:** Schedule the Product Hunt launch for Saturday 12:01am PST
5. **Saturday:** Launch everything

---

**One question:** Do you have a Discord for SpeakMCP, or should we skip that CTA? Also — do you want me to draft the YouTube description with all the links formatted?\n
## human\n\ni want the hook to be the prompt i am giving to orchestrate 6 parralel agents to work on all my projects and inspire optimism that this year has been huge for ai coding and you can now work on many projects at once\n
## assistant\n\nThis is a much stronger hook. Let me understand what he wants:

1. The hook is him giving a voice command to orchestrate 6 parallel agents
2. Each agent works on one of his different projects
3. The meta-narrative: this year has been huge for AI coding, you can now work on many projects at once
4. Inspire optimism

This is way better than just "control agents from your phone" - it's a story about what's now possible. The visual of 6 terminals, each working on a different project (Clickolas Cage, Chaos Coder, SpeakMCP, CreatorToolHub, etc.) is powerful.

Let me think about what the actual voice prompt would be. Something like:
"Work on Clickolas Cage in terminal one, Chaos Coder in terminal two, CreatorToolHub in terminal three, SpeakMCP mobile in terminal four, Agent Battler in terminal five, and Timestamp Genius in terminal six"

Or maybe more natural:
"I need you to work on all my projects - Clickolas Cage needs the new API integration, Chaos Coder needs the bug fix, CreatorToolHub needs..."

Actually the power is in the simplicity and the ambition. Something like:
"Work on all six of my open source projects simultaneously"

And then showing 6 terminals spawn, each one working on a different project.

The narrative arc:
- Hook: "2024 has been insane for AI coding. I'm about to give one voice command to work on 6 projects at once."
- Show the command
- 6 terminals spawn
- Each one working on a different project
- "A year ago this was impossible. Now I'm doing it from my phone, outside."

This ties into his strategic positioning as the "technology optimism" creator. The message: "Look what's possible now. You can do this too."

Let me update the campaign doc with this new hook angle.That's a much stronger hook. The meta-narrative is powerful:

> "2024 has been insane for AI coding. I'm about to give one voice command to work on 6 projects at once."

Let me rewrite the campaign with this angle.

**Quick question first:** What are the 6 projects you'll show? I'm thinking:

1. Clickolas Cage
2. Chaos Coder
3. SpeakMCP
4. CreatorToolHub
5. Agent Battler
6. Timestamp Genius (or another?)

And for each — what's the task you'll give? Something like:
- "Fix the auth bug in Clickolas Cage"
- "Add the new feature to Chaos Coder"
- etc.

Or do you want one unified prompt like: *"Work on all six of my open source projects — update dependencies, run tests, fix any issues"*

**The narrative structure I'm thinking:**

```
HOOK (0-10 sec)
"This year has been insane for AI coding. 
I'm outside right now, and I'm about to give one voice command 
to work on 6 projects simultaneously."

THE PROMPT (10-20 sec)
[You speak the actual prompt into your phone]
[6 terminals spawn on desktop]

THE REVEAL (20-40 sec)
[Show each terminal, name each project]
"Clickolas Cage... Chaos Coder... CreatorToolHub..."
"All running in parallel. All from my phone."

THE MESSAGE (40-60 sec)
"A year ago this was impossible.
Now anyone can orchestrate multiple AI coding agents with their voice.
This is what's possible now. And it's only getting crazier."
```

What's the exact prompt you want to give, and which 6 projects?\n
## human\n\nbrainstorm ideas from the whole spectrum\n
## assistant\n\nThe user wants me to brainstorm a wide range of ideas for the hook/prompt/narrative. Let me think through the whole spectrum - from simple to complex, from practical to cinematic, from humble to bold.

Let me think about different angles:

1. **The projects angle** - which 6 projects to showcase
2. **The prompt itself** - what command to give
3. **The narrative framing** - what story are we telling
4. **The emotional tone** - optimism, awe, accessibility, power
5. **The visual setup** - where, how, what we see

Let me brainstorm across all these dimensions.Let me brainstorm across the whole spectrum:

---

## THE PROMPT IDEAS

**Practical / Relatable**
- "Update dependencies and run tests on all my projects"
- "Check for security vulnerabilities across all repos"
- "Add dark mode to all my apps"
- "Fix the open issues on each project"

**Ambitious / Impressive**
- "Ship a new feature to each project"
- "Refactor the auth system in all six apps"
- "Add AI integration to every project that doesn't have it"
- "Prepare all projects for a major release"

**Cinematic / One-liner**
- "Work on everything"
- "Make all my projects better"
- "Ship ship ship"
- "Let's build"

**Meta / Self-referential**
- "Use SpeakMCP to improve SpeakMCP, while also improving 5 other projects"
- "Record yourself working, then work on the projects"

**Chaotic / Fun**
- "Surprise me — pick something to improve in each one"
- "Race to see which agent finishes first"
- "Compete against each other to ship the best feature"

---

## THE 6 PROJECTS — OPTIONS

**Option A: Your Hits (recognition)**
1. Clickolas Cage (your most known)
2. Chaos Coder (viral moment)
3. SpeakMCP (the star of the show)
4. CreatorToolHub
5. Timestamp Genius
6. Transcribe Anything

**Option B: Active Repos (authenticity)**
- Whatever you're actually working on right now
- Shows real workflow, not staged

**Option C: Mix of Shipped + WIP (narrative)**
- 3 shipped projects getting maintenance
- 3 work-in-progress projects getting built
- Shows the full lifecycle

**Option D: All Open Source (message)**
- Emphasize "6 free, open source tools"
- Community angle

**Option E: Different Categories (range)**
- Chrome extension (Clickolas)
- Web app (Chaos Coder)
- CLI tool (SpeakMCP)
- Mobile app (SpeakMCP Mobile)
- Creator tool (CreatorToolHub)
- AI tool (Timestamp Genius)

---

## NARRATIVE FRAMING OPTIONS

**The Year in Review**
> "2024 changed everything for AI coding. I'm about to show you what's possible now."

**The Impossible → Possible**
> "A year ago I couldn't do this. Six months ago I couldn't do this. Today, one voice command."

**The Solo Developer Superpower**
> "I'm one person. These are 6 active projects. This is how I manage them all."

**The Future is Here**
> "This is what software development looks like now. And we're just getting started."

**The Builder's Dream**
> "Every builder has more ideas than time. What if you could work on all of them at once?"

**The Accessibility Angle**
> "You don't need a team. You don't need funding. You need a voice and an idea."

**The Open Source Manifesto**
> "6 open source projects. 6 parallel agents. All free. All yours."

**The Speed Run**
> "How much can 6 AI agents ship in 10 minutes? Let's find out."

**The Lazy Genius**
> "I'm literally outside doing nothing while my computer works on 6 projects."

---

## EMOTIONAL TONES

| Tone | Hook Example |
|------|--------------|
| **Awe** | "I still can't believe this works" |
| **Optimism** | "This is the best time ever to be a builder" |
| **Empowerment** | "You can do this too" |
| **Playful** | "Watch this" |
| **Confident** | "This is what I've been building toward" |
| **Humble** | "Honestly didn't know if this would work" |
| **Urgent** | "If you're not using AI agents yet, you're behind" |
| **Reflective** | "A year ago I was coding everything by hand" |

---

## VISUAL SETUP OPTIONS

**The Classic (Outside → Desktop)**
- You outside, phone in hand
- Desktop visible through window
- Terminals spawn as you speak

**The Cafe Remote Worker**
- Coffee shop, laptop closed
- Phone only
- Cut to home desktop going crazy

**The Walk and Talk**
- Walking down the street
- Give command mid-stride
- Never break pace

**The Balcony Overlooking SF**
- Cinematic city backdrop
- Tech optimism + location flex
- "This is where the future is being built"

**The Couch Potato**
- You on couch, feet up
- Phone in hand, lazy energy
- "I'm not even at my desk"

**The Night Owl**
- Late night, city lights
- Dramatic lighting
- "While everyone sleeps, my agents work"

**The Timelapse**
- Start command at sunrise
- Timelapse of agents working
- End at sunset with results

**The Split Screen**
- 6 terminals visible simultaneously
- Your face in corner reacting
- Real-time parallel execution

---

## FULL HOOK COMBINATIONS

**#1 — The Year in Review (Optimistic)**
> "2024 has been the craziest year for AI coding. I'm about to give one voice command to 6 parallel agents working on 6 different projects. From my phone. Outside. This is what's possible now."

**#2 — The Impossible Dream (Reflective)**
> "A year ago I had 6 projects I wanted to work on but no time. Today I speak one sentence and all 6 get worked on simultaneously. The gap between what we could do and what we can do now is insane."

**#3 — The Solo Superpower (Empowering)**
> "I'm one developer. These are 6 active open source projects. Watch what happens when I give one voice command."

**#4 — The Lazy Builder (Playful)**
> "I'm standing outside. My computer is inside. I'm about to work on 6 projects without touching my keyboard."

**#5 — The Future Arrived (Bold)**
> "This is software development in 2024. One voice. Six projects. Zero excuses."

**#6 — The Speed Challenge (Engaging)**
> "6 AI agents. 6 projects. 10 minutes. Let's see how much we can ship."

**#7 — The Optimism Manifesto (Inspirational)**
> "Everyone's worried about AI taking jobs. I'm watching one person do the work of a team — and shipping more open source tools than ever. This is the golden age of building."

---

## MY TOP 3 RECOMMENDATIONS

**For maximum impact:** #1 (Year in Review) — ties to the zeitgeist, feels timely, optimistic

**For virality:** #4 (Lazy Builder) — relatable, funny, shareable

**For your brand:** #7 (Optimism Manifesto) — aligns with your "technology inspiration and optimism" positioning from the roadmap

---

Which direction resonates? Or want me to combine elements from multiple?\n
## human\n\ni love "Work on everything" also a "hows everything going" is powerful later
the projects themselves need not be disclosed
"Every builder has more ideas than time. What if you could work on all of them at once?"
Optimism"This is the best time ever to be a builder"
visually its a story following me throughout my day, as i come up with ideas i note them down in my phone with speakmcp mobile, then it leads up to the hook from the start to start working on everything, by the time i get home i have all these prs to look over\n
## assistant\n\nThis is a much richer narrative now. Let me break down what he's describing:

**The Story Arc:**
1. Throughout his day, he's out and about
2. As ideas come to him, he notes them down via SpeakMCP mobile (voice notes → tasks)
3. This builds up throughout the day
4. The climax: "Work on everything"
5. By the time he gets home, PRs are ready to review

**Key Elements:**
- "Work on everything" - the powerful simple prompt
- "How's everything going" - the follow-up check-in
- Projects don't need to be named - more universal/relatable
- "Every builder has more ideas than time" - the pain point
- "This is the best time ever to be a builder" - the optimism
- Day-in-the-life visual storytelling

**The Narrative Structure:**
- Morning: Ideas start flowing
- Throughout day: Capture ideas via voice
- The trigger: "Work on everything"
- Evening: Come home to PRs ready

This is essentially a mini-documentary / day-in-the-life format. Much more compelling than a straight demo.

Let me rewrite the campaign document with this new direction.This is so much better. A day-in-the-life narrative with a killer payoff.

**The Story:**

```
MORNING — Ideas start
You're getting coffee, idea hits → voice note to SpeakMCP

MIDDAY — More ideas
Walking, commuting, lunch → more voice notes pile up

THE TRIGGER
"Work on everything"
Agents spin up in parallel

EVENING — The Payoff
You walk in the door
"How's everything going?"
Screen full of PRs ready for review
```

**The Hook (which is actually the climax we flash forward to):**

> "Every builder has more ideas than time. What if you could work on all of them at once?"
> 
> [Cut to you saying "Work on everything"]
> 
> [Terminals spawn]

**The Close:**

> "This is the best time ever to be a builder."

---

Let me rewrite the full campaign with this narrative structure. A few quick details:

1. **How many voice notes / ideas throughout the day?** 3-5 feels natural, 6+ might feel staged
2. **Locations you can film?** Coffee shop, walking, transit, park, etc.
3. **The "How's everything going" moment** — do the agents respond with status updates? Or do you just see the PRs?

I'll start building the new version now with what I have. This is going to be a mini-documentary, not just a demo.
```
This block is not supported on your current device yet.
```

Let me run this to generate the document.
```
This block is not supported on your current device yet.
```

The document was created successfully. Let me provide the user with a summary of what's in there and the key next steps.[View your SpeakMCP Launch Campaign v2](computer:///mnt/user-data/outputs/speakmcp-launch-campaign-v2.docx)

**The new narrative:**

| Scene | What Happens |
|-------|--------------|
| **Cold Open** | Hook: "Every builder has more ideas than time..." + flash forward to terminals |
| **Morning** | Coffee, first idea → voice note |
| **Midday** | Ideas pile up throughout day (2-3 more voice notes) |
| **The Trigger** | "Work on everything" → terminals spawn |
| **Parallel Execution** | Show agents working, explain the tech |
| **Check-in** | "How's everything going?" → status response |
| **The Payoff** | Walk in door → PRs ready to review |
| **The Message** | "This is the best time ever to be a builder" |
| **Close** | CTA — open source, Product Hunt |

---

**The key moments:**

> **"Work on everything"** — the trigger
> 
> **"How's everything going?"** — the check-in
> 
> **"This is the best time ever to be a builder"** — the close

---

**Today's action:** Post teaser #1

> every builder has more ideas than time
> 
> what if you could work on all of them at once?
> 
> something dropping saturday

---

**Tomorrow's action:** Film the day-in-the-life shots + post teaser #2 with the "work on everything" clip

---

One question: For the "ideas throughout the day" moments — do you want to use **real tasks** you'll actually have the agents work on, or keep them vague/implied so it stays universal? Real tasks feel more authentic, vague feels more relatable to everyone.\n
## human\n\ngive me the pdf\n
## assistant\n\nThe user wants the document as a PDF instead of a docx. I need to convert the docx to PDF using LibreOffice.
```
This block is not supported on your current device yet.
```

The PDF was created successfully. Let me provide the link to the user.[View your SpeakMCP Launch Campaign PDF](computer:///mnt/user-data/outputs/speakmcp-launch-campaign-v2.pdf)\n