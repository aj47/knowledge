---
kind: note
id: claude-conversation-2025-12-07-speakmcp-demo-and-audience-strategy-8a285a15
updatedAt: 1765138478392
createdAt: 1765133308144
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 8a285a15-cdbd-44c2-999c-be85080cce79
created_at: 2025-12-07T18:48:28.144182Z
updated_at: 2025-12-07T20:14:38.392453Z
title: "SpeakMCP demo and audience strategy"
---

# SpeakMCP demo and audience strategy

## Metadata

- Claude conversation UUID: `8a285a15-cdbd-44c2-999c-be85080cce79`
- Created: `2025-12-07T18:48:28.144182Z`
- Updated: `2025-12-07T20:14:38.392453Z`
- Message count: 20
- Transcript chars extracted: 30988

## Claude summary

**Conversation Overview**

The user sought strategic advice for launching SpeakMCP, their voice-powered agent delegation tool that enables voice control for AI agent interactions. SpeakMCP is forked from whispo and features iTerm MCP integration, multi-agent execution with a tiling dashboard UI, mobile app capabilities through React Native, and terminal control functionality. The user wanted to brainstorm better demo approaches and identify target audiences for their announcement.

Claude helped identify high-fit target audiences including MCP ecosystem builders, multi-agent enthusiasts using frameworks like AutoGen/CrewAI/LangGraph, terminal-heavy power user developers, accessibility-motivated developers, and solo developers/indie hackers. They developed a comprehensive distribution strategy mapping specific platforms, communities, and messaging hooks for each audience segment. When the user revealed they wanted to launch within three hours, Claude pivoted to a focused three-hour launch plan prioritizing high-leverage actions: posting on X with a demo video, sharing in MCP Discord, and potentially submitting to Hacker News.

The conversation culminated in developing a demo script showcasing SpeakMCP's most impressive capability - one voice command that spawns four AI agents working in parallel, each autonomously grabbing unassigned GitHub issues from the SpeakMCP repository and working until creating pull requests. They refined the voice command from various options like "get to work" to the final choice of "start 4 agents working in parallel," balancing technical clarity with shareability. The demo structure was designed as a 45-second video emphasizing the contrast between a simple voice command and the complex autonomous development work that results, positioning it as "4 PRs from one sentence" to highlight the productivity multiplication aspect.

## Quick excerpt

The user wants to brainstorm better ways to demo and announce SpeakMCP. Let me first understand what SpeakMCP is from the documents provided. From the creator profile document: "SpeakMCP - Voice-powered agent delegation tool (forked from whispo). Enables voice control for AI agent interactions." So SpeakMCP is a voice control tool for AI agents. The user wants to: 1. Brainstorm better demo/announcement approaches 2. Identify target audiences Let me also search for any recent news or context abou

## Transcript

## human\n\ni need to brainstorm better ways to demo and announce speakmcp, i want to know who the target audience could be\n
## assistant\n\nThe user wants to brainstorm better ways to demo and announce SpeakMCP. Let me first understand what SpeakMCP is from the documents provided.

From the creator profile document:
"SpeakMCP - Voice-powered agent delegation tool (forked from whispo). Enables voice control for AI agent interactions."

So SpeakMCP is a voice control tool for AI agents. The user wants to:
1. Brainstorm better demo/announcement approaches
2. Identify target audiences

Let me also search for any recent news or context about MCP (Model Context Protocol) since this seems relevant to understanding the tool better. Actually, I should first check if there's more context in past conversations about this project.

Let me search for past conversations about SpeakMCP to get more context on what the user has already done or discussed.Let me search for any past context on SpeakMCP first, then we can brainstorm effectively.
```
This block is not supported on your current device yet.
```

Great, I have a lot of context now on SpeakMCP. Let me also check for any more recent discussions and understand the current state better. Let me search for more.Good context. Let me also check for the most recent work on this:
```
This block is not supported on your current device yet.
```

Now I have excellent context on SpeakMCP:

**What SpeakMCP is:**
- Voice-powered agent delegation tool
- Forked from whispo, with iTerm MCP integration
- Multi-agent execution with new session UI (tiling dashboard)
- Mobile app (React Native) + desktop in monorepo
- Terminal control (spawn, read, write, control characters)
- Works with Cerebras for speed (1000+ tps)
- Open source

**Previous demo/announcement work:**
- Day-in-the-life narrative approach was planned
- "Work on everything" as the trigger moment
- Focus on parallel multi-agent execution
- "Voice as the orchestration layer for agents"

The user is now asking to brainstorm BETTER ways to demo and announce it, and also wants to understand potential target audiences.

Let me think about target audiences and demo approaches.

**Target Audiences:**

1. **Deep Tech / AI Engineers**
- People following MCP ecosystem
- Multi-agent framework enthusiasts
- Those building with LangChain, AutoGen, CrewAI
- Interested in the technical architecture

2. **Power User Developers**
- Want to stay in flow state
- Hate context switching
- Multi-tasking on multiple projects
- Terminal-heavy workflows

3. **Accessibility-focused developers**
- RSI sufferers
- People who want hands-free coding options
- Treadmill desk users

4. **Mobile-first / Remote workers**
- Digital nomads
- People who want to kick off work while away from desk
- "Control my computer from my phone" appeal

5. **AI Tool Enthusiasts**
- TikTok/short-form AI content audience
- Want to see cool AI demos
- Less technical but excited about possibilities

6. **Indie Hackers / Solo Devs**
- "Be your own team" angle
- Multiply output with agents
- Ship faster

7. **Content Creators / Streamers**


- Using voice while showing something else on screen
- Hands-free automation

I see several innovative demo strategies that could showcase SpeakMCP's unique capabilities. The speed comparison demo could dramatically illustrate productivity gains by timing manual versus voice-controlled tasks. A live build using only voice commands would powerfully demonstrate the tool's practical application. The multi-task chaos demo could highlight how SpeakMCP manages complex workflows seamlessly. The problem-solution format could emotionally connect with developers by first highlighting their current pain points before revealing SpeakMCP as the transformative solution.

Each approach targets different audience segments, from technical deep-divers wanting architectural insights to content creators seeking hands-free workflow automation. The key is crafting a narrative that makes the technology feel both impressive and immediately useful.Got good context from our past work. Let me lay out the target audiences and some fresh demo angles.

---

## Target Audiences for SpeakMCP

**Tier 1: High Fit (Most likely to convert)**

| Audience | Why They Care | Hook That Lands |
|----------|---------------|-----------------|
| **MCP ecosystem builders** | They're already in this world, want voice as an interface layer | "Voice becomes the orchestration layer for MCP" |
| **Multi-agent enthusiasts** | Using AutoGen/CrewAI/LangGraph, want better orchestration | "Spawn and manage multiple agents with one sentence" |
| **Power user devs (terminal-heavy)** | Flow state obsessed, hate context switching | "Never leave your IDE to run commands again" |
| **RSI/accessibility-motivated devs** | Physical pain from typing, need alternatives | "Full coding session, no keyboard" |
| **Solo devs / indie hackers** | Want to multiply output, "be your own team" | "Work on 5 ideas at once" |

**Tier 2: Medium Fit (Interested but need the "why")**

| Audience | Why They Care | Hook That Lands |
|----------|---------------|-----------------|
| **AI tool enthusiasts (your TikTok audience)** | Love cool demos, may not use it but will share | "Control your computer with your voice from your phone" |
| **Remote/mobile workers** | Away from desk, want to kick off tasks | "Start builds from the gym" |
| **Treadmill desk / walking workers** | Hands occupied, voice is only input | "Ship code while walking" |
| **Content creators/streamers** | Need hands-free control while on camera | "Voice control for your dev setup" |

**Tier 3: Aspirational (Future users, good for reach)**

| Audience | Why They Care |
|----------|---------------|
| **CS students** | Curious about cutting-edge workflows |
| **Tech career changers** | Want to see what's possible |
| **Non-technical AI curious** | "Iron Man computer" fantasy |

---

## Fresh Demo Angles to Consider

**Beyond the day-in-the-life narrative you've already planned:**

### 1. The "Impossible Before" Demo
Show something that literally couldn't be done before voice + MCP + multi-agent:
- "I'm going to refactor this codebase, run tests, AND monitor logs — simultaneously — with one sentence"
- Emphasize: **"This workflow didn't exist 6 months ago"**

### 2. The Speed Race
Split screen: You doing a task manually vs. SpeakMCP doing it
- Manual: switch apps, type commands, wait, switch back...
- Voice: one sentence, done
- Visual proof of the time save

### 3. The Remote Control Demo (High wow factor)
Film yourself OUTSIDE (park, coffee shop, walking) controlling your home setup:
- Phone in hand
- "Start the dev server, run the linter, open the PR"
- Cut to: desktop at home with terminals spawning
- This hits the "Tony Stark" energy hard

### 4. The Chaos Manager
Start with intentional chaos: 5 different things you need to do
- Show the overwhelm
- One voice command delegates all 5 to agents
- Watch them work in parallel
- End with: "I just multiplied myself"

### 5. The Accessibility Angle (Underserved, high authenticity)
- Full coding session, zero keyboard
- Not as a gimmick — as a genuine alternative workflow
- "If your hands hurt, this is for you"
- This audience is passionate and underserved

### 6. The Integration Flex
Voice command that chains across multiple tools:
- "Create an issue from my last commit message, assign it to me, and start a branch"
- GitHub + Linear + Terminal in one sentence
- Shows MCP's real power: tool orchestration

### 7. The "Check In" Loop
This was in your planned video but could be its own clip:
- Voice: "How's everything going?"
- SpeakMCP: status update on all running agents
- Shows it's not just fire-and-forget — it's conversational control

---

## Which Audiences to Prioritize?

For **YouTube long-form**: Lead with the deep tech angle (MCP, multi-agent, terminal control). Your credibility is highest here.

For **short-form clips**: Lead with the "Tony Stark" remote control and visual wow. "Control your computer from your phone" is the scroll-stopper.

For **Product Hunt**: Emphasize the developer productivity angle. "Multi-agent voice orchestration for developers."

For **X teasers**: Bold claims, specific metrics. "One sentence → 3 terminals → 3 agents working in parallel."

---

**What would help me help you more:**
1. What's the current state of SpeakMCP? Is it ready to demo all these capabilities?
2. Which audience feels most exciting to you to serve?
3. Have you shipped since our last conversation — any new features or changes?\n
## human\n\nhigh fit sounds perfect for a v1 launch. how can we target them with our announcement\n
## assistant\n\nThe user wants to focus on the Tier 1 "High Fit" audiences for the SpeakMCP v1 launch. Let me think about how to actually reach and target these specific audiences:

1. MCP ecosystem builders
2. Multi-agent enthusiasts (AutoGen/CrewAI/LangGraph users)
3. Power user devs (terminal-heavy)
4. RSI/accessibility-motivated devs
5. Solo devs / indie hackers

I should think about:
- Where these people hang out (platforms, communities, subreddits)
- What content formats resonate with them
- What hooks/messaging will land
- Distribution strategy for the announcement
- Timing considerations

Let me be practical and actionable here.Great call. Let's get tactical on reaching each high-fit segment.

---

## Distribution Strategy by Audience

### 1. MCP Ecosystem Builders

**Where they are:**
- Anthropic's MCP Discord server
- GitHub discussions on MCP repos
- X accounts following @anthropabortsci, MCP-related devs
- r/ClaudeAI, r/LocalLLaMA (MCP threads)

**How to reach them:**
- Post in MCP Discord with a demo video (not just a link — show the terminal control)
- Open a GitHub discussion or issue on your fork explaining what you built
- Tag relevant MCP devs when you post on X (not spammy — genuine "built on top of your work")
- Reply to MCP-related threads with your demo as a use case

**Hook that lands:** *"Voice interface for MCP. One sentence spawns multiple agents across multiple terminals."*

---

### 2. Multi-Agent Enthusiasts (AutoGen/CrewAI/LangGraph users)

**Where they are:**
- AutoGen Discord
- LangChain Discord
- r/LocalLLaMA (agent threads)
- X accounts posting about agent frameworks
- YouTube comments on agent tutorial videos

**How to reach them:**
- Post in agent-focused Discords showing voice as an orchestration layer
- Create a short clip specifically showing multi-agent spawning ("3 agents, 3 terminals, one sentence")
- Reply to popular agent posts/videos with your demo
- Consider a tutorial angle: "How I use SpeakMCP to orchestrate AutoGen agents by voice"

**Hook that lands:** *"Multi-agent orchestration without touching the keyboard. Voice as the control plane."*

---

### 3. Power User Devs (Terminal-Heavy)

**Where they are:**
- Hacker News
- r/programming, r/commandline, r/vim, r/neovim
- Dev Twitter/X (dotfiles crowd, CLI tool lovers)
- Lobste.rs

**How to reach them:**
- HN "Show HN" post (timing matters — weekday morning US time)
- Reddit posts showing terminal spawning/control specifically
- X post with screen recording of voice → terminal action
- Frame it as a workflow tool, not an AI gimmick

**Hook that lands:** *"Voice-controlled terminal automation. Spawn windows, run commands, read output — no hands."*

---

### 4. RSI/Accessibility-Motivated Devs

**Where they are:**
- r/RSI, r/disability (tech workers with chronic pain)
- Accessibility-focused dev communities
- Talon Voice / Cursorless communities (voice coding tools)
- X threads about developer health/ergonomics

**How to reach them:**
- Genuine post about voice coding as an alternative to typing
- Don't make it a gimmick — frame it as a real solution
- Reach out to accessibility-focused devs/advocates for feedback or RT
- Consider a dedicated clip: "Full dev workflow, zero keyboard"

**Hook that lands:** *"If your hands hurt, this is for you. Full coding workflow by voice."*

---

### 5. Solo Devs / Indie Hackers

**Where they are:**
- Indie Hackers forum
- r/SideProject, r/startups
- WIP.co
- X indie hacker community (#buildinpublic)
- Product Hunt (launch day)

**How to reach them:**
- Product Hunt launch (they live here)
- Indie Hackers post about how you built it + how it multiplies output
- #buildinpublic thread showing your own usage
- Frame it as "be your own engineering team"

**Hook that lands:** *"Work on 5 ideas at once. Voice delegates to agents, you review the results."*

---

## Launch Week Playbook

| Day | Action | Target Audience |
|-----|--------|-----------------|
| **Day -3** | Teaser #1 on X: "every builder has more ideas than time..." | Broad / indie hackers |
| **Day -2** | Teaser #2: 10-sec clip of terminals spawning | Power users / multi-agent |
| **Day -1** | Teaser #3: "tomorrow" + mobile → desktop shot | Broad reach |
| **Launch Day** | YouTube video drops + Product Hunt live + X thread | All segments |
| **Launch Day** | Post in MCP Discord, AutoGen Discord, LangChain Discord | MCP + agent builders |
| **Launch Day** | Show HN post | Power users |
| **Day +1** | Reddit posts (r/LocalLLaMA, r/programming, r/commandline) | Power users / agent enthusiasts |
| **Day +1** | Accessibility-focused post (r/RSI or X) | Accessibility audience |
| **Day +2** | Indie Hackers writeup | Solo devs |

---

## Content Variants to Create

You'll want slightly different cuts/angles for different audiences:

| Clip | Length | Audience | Focus |
|------|--------|----------|-------|
| **Main YouTube video** | 5-7 min | All | Full story + demo |
| **"Terminals spawning" clip** | 15-30 sec | Power users | Voice → 3 terminals instantly |
| **"Mobile control" clip** | 30-45 sec | Broad / wow factor | Phone outside → desktop responds |
| **"Multi-agent" clip** | 30-45 sec | Agent enthusiasts | Agents working in parallel, tiled UI |
| **"No keyboard" clip** | 60 sec | Accessibility | Full workflow by voice |
| **X thread** | 5-7 posts | Indie hackers / X | Build story + demo GIFs |

---

## Messaging Matrix

| Audience | Pain Point | Your Solution | CTA |
|----------|------------|---------------|-----|
| MCP builders | "I want voice for my MCP setup" | "SpeakMCP is voice for MCP" | "Fork it, extend it" |
| Multi-agent users | "Orchestrating agents is clunky" | "Voice as the orchestration layer" | "Try it with your agents" |
| Terminal power users | "Context switching kills flow" | "Never leave your editor" | "Download and try" |
| RSI/accessibility | "Typing hurts" | "Full workflow, no keyboard" | "This is for you" |
| Solo devs | "Too many ideas, not enough time" | "Multiply yourself" | "Ship faster" |

---

**Quick gut check:** Which of these segments do you have the most natural reach into already? That's where I'd concentrate the most energy on launch day. The others can build over the following week.\n
## human\n\nthese look great though for timelines i want to launch in the next 3 hours. what should i do. high leverage and impact targetted to people who will care\n
## assistant\n\nThe user wants to launch in 3 hours. That's a tight timeline. I need to focus on high-leverage, high-impact actions that can be done quickly and reach the right people (the high-fit audiences we identified).

Let me think about what's actually doable in 3 hours:

1. Can't do: elaborate teaser campaigns, multi-day buildup, extensive video editing
2. Can do: post on X, post in Discords, maybe a quick Show HN, reply to relevant threads

The highest leverage actions for reaching people who will care:

1. **X post** - immediate, your existing audience sees it
2. **MCP Discord** - these are exactly the right people, they're already in the ecosystem
3. **Show HN** - if timed right, can get significant reach to power users

Let me prioritize ruthlessly for a 3-hour window.3 hours. Let's strip this down to what actually moves the needle.

---

## The 3-Hour Launch Plan

### Hour 1: Prep the Assets

**Must-have:**
- 1 screen recording showing the killer demo (voice → terminals spawn → agents work)
- Keep it under 60 seconds for X, can be scrappy
- GIF version of the best 10-second moment

**The demo to record:**
One voice command → multiple terminals spawn → agents working in parallel. That's the money shot. Don't overthink it.

---

### Hour 2: Post in Order of Leverage

**Post #1: X (your audience)**
```
just shipped speakmcp

voice-controlled multi-agent terminal automation

one sentence → multiple terminals spawn → agents work in parallel

open source, link in replies

[attach video]
```

Keep it tight. Bold claim. Video does the work.

**Post #2: MCP Discord** (10 min after X post)

Post in the appropriate channel (probably #showcase or #projects). These people GET IT immediately.

```
Built a voice interface for MCP

- speak a command → agents spawn across terminals
- multi-agent execution with tiled session UI  
- forked iterm-mcp for terminal control
- mobile app included (React Native)

Demo: [video or gif]
GitHub: [link]

Would love feedback from anyone building with MCP
```

**Post #3: Show HN** (if you have bandwidth)

Title: `Show HN: SpeakMCP – Voice-controlled multi-agent terminal automation`

Keep the post short. Link to GitHub. Let the demo speak.

---

### Hour 3: Engage + Amplify

- Reply to every comment immediately (algorithm loves early engagement)
- Drop the link in 2-3 relevant X threads about MCP, agents, or voice coding
- DM 3-5 people in the MCP/agent space who might RT (people you've interacted with before)

---

## Priority Stack (If Time Gets Tight)

| Priority | Action | Why |
|----------|--------|-----|
| **1** | X post with video | Your existing reach, immediate |
| **2** | MCP Discord post | Highest-fit audience, they'll get it |
| **3** | Reply to your own X post with GitHub link + context | Keeps engagement on the thread |
| **4** | Show HN | Broader reach but less guaranteed |
| **5** | DMs to relevant people | Amplification |

---

## The Hook to Use Everywhere

> **"One voice command → multiple terminals → multiple agents working in parallel"**

That's specific, visual, and differentiated. Use it verbatim.

---

**What do you have ready right now?** Is the demo recordable, or do you need to set something up first? That's the bottleneck.\n
## human\n\nwhat about product hun\n
## assistant\n\nThe user is asking about Product Hunt as part of their 3-hour launch. Let me think about this realistically.

Product Hunt considerations:
1. It takes time to set up a proper PH page (description, images, maker comment, etc.)
2. PH launches work best when you have people ready to upvote at launch
3. Timing matters - best to launch at midnight PT when the day resets
4. You need to rally your audience to upvote

Given they have 3 hours and want high leverage, I need to be honest about whether PH is the right move RIGHT NOW or if it should be a separate launch moment.

The reality:
- PH without preparation often flops
- A rushed PH launch wastes the "first launch" energy
- They could do PH as a separate launch in a few days with proper buildup

But if they want to do it today, here's what they'd need...Honest take: Product Hunt in 3 hours is risky.

**Why PH might not be the move right now:**
- Best launches hit at 12:01 AM PT (that's when the new day starts, max visibility window)
- You need the page set up properly: tagline, description, images, first comment ready
- Without people lined up to upvote early, you sink fast
- A weak PH launch "wastes" the product — you only get one first launch

---

**My recommendation: Split the launch**

| Today (next 3 hours) | This week (2-3 days out) |
|---------------------|--------------------------|
| X post + MCP Discord + HN | Product Hunt launch |
| Build momentum, get feedback | Use today's engagement as social proof |
| "Just shipped" energy | "Officially launching" energy |

---

**If you MUST do PH today:**

You'd need to speedrun this in ~45 min:

1. **Tagline:** "Voice-controlled multi-agent terminal automation"
2. **Description:** 3-4 sentences max. What it does, who it's for, that it's open source.
3. **Images:** Screenshots of the terminal UI + mobile app (or just use your demo video)
4. **First comment:** Your maker story — why you built it, what's next
5. **Launch timing:** If it's daytime in the US right now, you're already behind the midnight PT crowd

Then immediately post on X: "We're live on Product Hunt" with the link.

---

**The play I'd run:**

Today → X, MCP Discord, maybe HN. Gauge response.

48-72 hours → Product Hunt with proper setup + tease to your audience the day before so they show up to upvote.

---

What's your gut? Rush PH today or do it right in a few days?\n
## human\n\nok lets start brainstorming the demo script\n
## assistant\n\nThe user wants to brainstorm the demo script for SpeakMCP. Given the 3-hour timeline, this needs to be tight and efficient. Let me pull from what I know:

1. From the past conversations, we've discussed:
- Voice-controlled multi-agent terminal automation
- One command spawns multiple terminals with agents working in parallel
- iTerm MCP fork for terminal control
- Mobile app (React Native)
- Multi-agent execution with tiled session UI
- Cerebras speed

2. From the voice/scripting guide:
- Bold claims in first 10 words
- Don't start with "so," "hey," "what's up"
- Stack value props early (free, open source, local)
- Use "let's see," "let's try" 
- Keep it punchy
- End with action CTAs (download, try it, check it out)

3. For a 60-second X clip, the structure should be:
- HOOK (0-3 sec): Bold claim
- VALUE STACK (3-10 sec): What it is, why it matters
- DEMO (10-50 sec): Show it working
- CLOSE (50-60 sec): CTA

Let me help brainstorm a tight script that hits hard. I should use the script notes template format from the project files - sentence starters, not full scripts.Let's build this. Quick questions to nail the demo:

**1. What's the single command you'll say on camera?**

Options:
- "Run tests in one terminal, start the server in another, and watch logs for errors"
- "Spin up three agents — one for linting, one for tests, one for the build"
- "Work on all my tasks" (vaguer but punchy)
- Something else you've been using?

**2. What will we SEE happen?**

- Terminals spawning?
- The tiled session UI with agents working?
- Output appearing in real time?
- All of the above?

**3. Where are you filming from?**

- At your desk (simple, fast)
- Phone in hand, showing mobile → desktop (higher wow factor but more setup)

**4. How long?**

- 30-45 sec (X-optimized, punchy)
- 60 sec (more room to breathe)

---

## Draft Script Notes (Adjust Based on Answers)

**HOOK**
- One voice command, multiple agents, multiple terminals...
- This is SpeakMCP...

**VALUE STACK**
- Voice-controlled multi-agent execution...
- Open source, runs locally...

**DEMO**
- Let's try it...
- [SPEAK THE COMMAND]
- [React naturally as terminals spawn]
- Each agent working on its own task...

**CLOSE**
- Link in the replies...
- Go try it...

---

What's the command and setup you're working with? I'll tighten the script around exactly what you're showing.\n
## human\n\nill use one voice command to start 4 agents working in parralel\n
## assistant\n\nThe user wants to demo one voice command that starts 4 agents working in parallel. I need to help them nail down:
1. What exactly the command will be
2. What the 4 agents will each do
3. The script around it

Let me ask the right questions to make this demo punchy.Perfect. 4 agents is a great visual — shows real parallelism.

**What will the 4 agents each do?**

Give me the breakdown. For example:
- Agent 1: Run tests
- Agent 2: Start dev server
- Agent 3: Lint the codebase
- Agent 4: Watch logs

Or are they working on 4 different projects/ideas?

**What's the voice command you'll actually say?**

The more specific and natural it sounds, the better. Something like:
- "Run tests, start the server, lint the code, and watch for errors"
- "Work on all four tasks"
- "Spin up agents for each of these"

---

Once I know what the 4 agents do and the command, here's the structure:

**HOOK (3 sec)**
• One voice command, four agents, zero waiting...

**DEMO (20-30 sec)**
• This is SpeakMCP...
• [SAY THE COMMAND]
• [Show terminals/agents spawning]
• [React: "Boom" / "There we go" / natural]
• Each one working on its own task...

**CLOSE (5 sec)**
• Open source, link below...
• Go try it...

What are the 4 agents doing?\n
## human\n\nthe agents will work on speakmcp using a custom command pre configured
they grab the latest unassigned open issue and work on it til pr\n
## assistant\n\nOh this is way more impressive than I initially thought. The agents aren't doing separate predefined tasks — they're each autonomously grabbing an unassigned GitHub issue from the SpeakMCP repo itself and working on it until they create a PR.

That's "agents working on their own codebase" — very meta, very impressive. This is the demo.

Let me craft script notes around this.That's way more impressive than predefined tasks. The agents are working on their own codebase autonomously. That's the hook.

---

## Script Notes

**HOOK (3 sec)**
• Four AI agents working on my repo at the same time...
• One voice command...

**CONTEXT (5 sec)**
• This is SpeakMCP...
• I have a custom command that grabs unassigned issues and works til PR...

**DEMO (20 sec)**
• Let's spin up four agents...
• [SAY THE COMMAND]
• [Show the tiled UI / terminals spawning]
• [React naturally as they appear]
• Each one grabbed a different issue...
• Working in parallel...

**THE PAYOFF (5 sec)**
• Four PRs from one sentence...
• [Or: "Now I just review"]

**CLOSE (5 sec)**
• Open source, link below...
• Go try it...

---

**The bold claim for the X post:**

> "One voice command → 4 agents → each grabs an open issue → works til PR"

That's specific and insane. Shows real autonomy, not just "run a script."

---

**Quick Qs:**
1. What's the actual voice command you'll say? ("Spin up four agents" / "Work on speakmcp" / something else?)
2. Will we see the issues getting grabbed in the UI, or just the agents working?
3. How long til something visible happens after you speak? (Want to know if we need to cut or if it's instant)\n
## human\n\nwhat would be a cool command to say that people would be amazed or want to share\n
## assistant\n\nThe user wants a memorable, shareable voice command for the demo. Let me think about what makes a command "cool" and shareable:

1. It should be casual/natural sounding - not robotic
2. It should undersell what's about to happen (contrast is funny/impressive)
3. It should be short and punchy
4. It could be slightly irreverent or have personality
5. The gap between "simple command" and "insane result" is the wow factor

Some directions:

**Ultra casual (contrast with the result):**
- "Get to work"
- "Do your thing"
- "Handle it"
- "Go build something"

**Slightly playful:**
- "Alright team, let's ship"
- "Everybody work"
- "Wake up and ship"

**Direct but punchy:**
- "Work on everything"
- "Ship some PRs"
- "Fix my issues"

**The Tony Stark energy:**
- "Jarvis, deploy the team"
- But probably too on-the-nose/cringe

**The most shareable is probably the biggest contrast:**
- Super casual command → insane result
- "Get to work" → 4 agents spawn, grab issues, start coding

Let me give the user some options across different vibes.The magic is in the contrast — casual command, insane result.

---

**Ultra Casual (biggest contrast = most shareable)**

- "Get to work"
- "Ship something"
- "Go build"
- "Handle it"

These hit because 4 agents spawning from "get to work" is absurd. The undersell makes it cooler.

---

**Slightly More Specific (still punchy)**

- "Work on SpeakMCP"
- "Fix some issues"
- "Ship some PRs"

---

**The "Team" Frame (implies you have a squad)**

- "Team, get to work"
- "Alright everyone, ship"
- "Let's go team"

This frames the agents as your dev team. "I just told my team to ship" — relatable, but your team is 4 AI agents.

---

**My pick:**

> **"Get to work"**

Three words. 4 agents spawn. Each grabs an issue. Works til PR.

That's the clip people share. The command is almost dismissive — like you're bored — and then chaos unfolds.

---

**Runner up:**

> **"Ship some PRs"**

More specific about the outcome. Still casual.

---

What feels right in your voice?\n
## human\n\nwhat about 'spin up 4 agents to work on speakmcp'\n
## assistant\n\nThe user is asking about using "spin up 4 agents to work on speakmcp" as the voice command. Let me give honest feedback on this.

Pros:
- It's literal and clear about what's happening
- Shows the capability directly
- Technical audience will understand exactly what's happening

Cons:
- It's more instructional/descriptive than punchy
- Less contrast between casual command and impressive result
- Sounds more like a demo script than something you'd naturally say

I should give honest feedback but also be supportive of what they want to do. Maybe there's a middle ground or I can help them see the tradeoffs.That works — it's clear and literal. Technical audience will get exactly what's happening.

**Tradeoff:**

| Command | Vibe | Shareability |
|---------|------|--------------|
| "Get to work" | Casual flex, big contrast | Higher — the undersell is the joke |
| "Spin up 4 agents to work on speakmcp" | Technical, descriptive | Medium — clear but less memeable |

---

**The case for yours:**

- First-time viewers instantly understand what's happening
- No ambiguity — "spin up 4 agents" is the feature
- Sounds like a real power user command

**The case against:**

- It describes the demo rather than letting the demo surprise
- Less "wait, did that just happen?" energy

---

**A middle ground?**

> "Spin up 4 agents, let's ship some PRs"

or

> "4 agents on speakmcp, go"

Keeps the specificity, adds a bit of casual energy at the end.

---

**Honestly:** if you're launching in 3 hours, go with what feels natural when you say it out loud. Authentic > optimized. Your reaction to the agents spawning matters more than the exact words.

What sounds like *you* when you say it?\n
## human\n\nstart 4 agents working in parralel\n
## assistant\n\nThe user wants to use "start 4 agents working in parallel" as the command. Let me give quick feedback and then finalize the script notes so they can record.Clean. Gets the job done.

One tweak — drop "in parallel" since they'll *see* the parallel part:

> **"Start 4 agents"**

Shorter, punchier. The visual does the rest.

But if "start 4 agents working in parallel" is what the system actually needs to hear, keep it. Don't break the demo for the hook.

---

## Final Script Notes

**HOOK**
• 4 AI agents working on my repo from one voice command...

**CONTEXT**
• This is SpeakMCP...
• Each agent grabs an unassigned issue and works til PR...

**DEMO**
• Let's try it...
• [SAY:] "Start 4 agents working in parallel"
• [Show agents/terminals spawning]
• [React naturally — "boom" / "there we go" / "dude"]
• Each one picked up a different issue...

**CLOSE**
• 4 PRs from one sentence...
• Open source, link below...

---

**Total time:** ~45 sec

**Power words reminder:** "just" • "boom" • "let's see" • "there we go" • "dude" • "pretty cool"

---

Ready to record?\n