---
kind: note
id: claude-conversation-2025-12-30-mcps-vs-skills-when-to-use-each-65cb0818
updatedAt: 1767122420492
createdAt: 1767121459140
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 65cb0818-4091-41c5-a0b4-d2bd90f11672
created_at: 2025-12-30T19:04:19.140810Z
updated_at: 2025-12-30T19:20:20.492264Z
title: "MCPs vs Skills: when to use each"
---

# MCPs vs Skills: when to use each

## Metadata

- Claude conversation UUID: `65cb0818-4091-41c5-a0b4-d2bd90f11672`
- Created: `2025-12-30T19:04:19.140810Z`
- Updated: `2025-12-30T19:20:20.492264Z`
- Message count: 6
- Transcript chars extracted: 17606

## Claude summary

**Conversation Overview**

The user requested help refining a TikTok script about MCPs (Model Context Protocol) versus Skills in AI agent development, targeting a 45-60 second video format. The script aimed to explain when to use each approach, with the initial angle that Skills are replacing most MCP use cases but acknowledging nuanced scenarios where MCPs remain valuable. Claude helped incorporate research from Chroma's "Context Rot" study, which demonstrates that LLM performance degrades as context length increases, with accuracy dropping by 30% when using full conversation history versus focused prompts.

During the revision process, the user challenged two key assumptions in the original script. First, they argued that MCPs likely have a legitimate advantage for OAuth integrations with third-party services like Google Drive, Slack, and Notion, since MCP servers can handle redirect flows, token storage, and refresh cycles more easily than Skills. Second, they pushed back against a quote from the Goose team claiming "Skills without MCPs are just instructions," arguing that Skills with API access can functionally accomplish everything MCPs can do without the protocol overhead.

Based on these insights, Claude revised the script to reflect a more nuanced position: Skills are winning for most use cases due to reduced token bloat, but MCPs retain specific niches for OAuth-heavy third-party integrations and instant-on local tools that avoid cold start delays. The updated script maintains the user's direct, technical communication style while incorporating specific data points like the 7,000 vs 90 token comparison and the 30% accuracy degradation from context bloat. The final version positions the choice as "picking the right tool" rather than viewing MCPs and Skills as complementary layers.

## Quick excerpt

The user wants to add a short section explaining why context bloat is an issue, and they want to reference a ChromaDB blog chart showing intelligence reduction with context bloat. I should search for this ChromaDB blog to find the specific data/chart they're referring to, then help integrate it into the script. ``` This block is not supported on your current device yet. ``` The search didn't find the specific ChromaDB blog about LLM intelligence reduction with context bloat. Let me search more s

## Transcript

## human\n\nTikTok Script: MCPs vs Skills — What Actually Matters
Target Length: 45-60 seconds Angle: Skills ARE replacing most MCP use cases — but here's when to use each
HOOK (0-3 sec)
• Everyone's ditching MCPs for Skills... • I tested both to see what actually matters...
VALIDATE THE TREND (3-8 sec)
• And honestly? The MCP hate is valid... • 7,000 tokens just sitting in your context for Playwright... • A skill? 90 tokens... • If you're not doing browser work, that's just bloat...
THE NUANCE (8-25 sec)
But here's what I found testing them...
• Skills have a cold start... • MCP servers are running the moment your agent launches... • Skills? The agent has to start that server first... • I'm watching 5-10 seconds of overhead just to spin up...
When that matters:
• Small task like Wordle? Basically same performance... • But imagine a skill that indexes your codebase — that's minutes of startup every time...
THE MENTAL MODEL (25-40 sec)
• Here's how to think about it... • MCPs are becoming your data connections — the APIs for agents... • Skills teach the agent what to do with that data... • The Goose team said it best: Skills without MCPs are just instructions... • MCPs without Skills is raw power with no guidance... • They're layers, not competitors...
CLOSE (40-50 sec)
• Use Skills for tools you need sometimes... • Use MCPs for data sources you need instantly, no cold start... • And CLI? Works but too much friction to set up manually... • Link in bio for the full breakdown...
POWER WORDS REMINDER
just • actually • boom • dude • pretty cool • sick • there we go
DON'T START WITH
~~so~~ • ~~hey~~ • ~~what's up~~ • ~~alright so~~
SHORTER VERSION (30 sec)
HOOK
• Everyone's ditching MCPs for Skills — I tested both to see what actually matters...
VALIDATE + NUANCE
• The hate is valid — 7,000 tokens versus 90 for a skill... • But skills have a cold start MCPs don't... • Agent has to spin up that server — 5-10 seconds overhead...
MENTAL MODEL
• MCPs for instant data connections... • Skills for teaching the agent how to use them... • They're layers, not competitors...
VISUAL SUGGESTIONS
Screen recordings:
1. `/context` showing MCP token bloat
2. Skill loading with visible cold start delay
3. Both completing the same task
Text overlays:
* "MCP: 7,000 tokens" → "Skill: 90 tokens"
* "Cold start: 5-10 sec"
* "Layers, not competitors"
KEY QUOTES TO USE
"Skills without MCPs are just well-written instructions. MCPs without Skills is raw power with no guidance." — Goose team
"MCPs are becoming the APIs for agents. Skills teach what to do with them."
"If you're not doing browser work, you don't want 7K tokens just sitting there."



 I want to add a very short bit saying that why context bloat is an issue and to show the chart of the ChromaDB blog that just shows their intelligence drastically being reduced.\n
## assistant\n\nThe user wants to add a short section explaining why context bloat is an issue, and they want to reference a ChromaDB blog chart showing intelligence reduction with context bloat. I should search for this ChromaDB blog to find the specific data/chart they're referring to, then help integrate it into the script.
```
This block is not supported on your current device yet.
```

The search didn't find the specific ChromaDB blog about LLM intelligence reduction with context bloat. Let me search more specifically for this - it might be about "lost in the middle" or context window performance degradation.
```
This block is not supported on your current device yet.
```

I found the ChromaDB "Context Rot" research. This is exactly what the user is referring to. The key findings are:

1. LLM performance degrades as input context length increases
2. Performance drops of 20-50% from 10k to 100k+ tokens
3. Models don't process context uniformly - the 10,000th token isn't handled as reliably as the 100th
4. Adding full conversation history (~113k tokens) can drop accuracy by 30% compared to a focused 300-token version

Let me fetch the actual research page to see if there's a specific chart they want to reference.Let me get the actual Chroma Research page to see the specific chart:
```
This block is not supported on your current device yet.
```

I found the Chroma Research "Context Rot" study. The key findings that are relevant for the script:

1. The hero plot shows Claude Sonnet 4, GPT-4.1, Qwen3-32B, and Gemini 2.5 Flash performance degrading as context length increases on the Repeated Words Task
2. Key stat: Adding full conversation history (~113k tokens) can drop accuracy by 30% compared to a focused 300-token version (from LongMemEval)
3. Performance drops of 20-50% from 10k to 100k+ tokens in NIAH tasks
4. The main image shows the performance degradation curve

The user wants to add a short section explaining why context bloat matters, referencing this chart. Let me help them integrate this into the script.

Key chart to reference: The hero plot showing performance degradation as tokens increase, or the LongMemEval results showing the 30% accuracy drop.

Let me update the script with a very short section that fits their style.Found it — the Chroma "Context Rot" research paper. This is gold for your script. Here's the key data:

**Key findings to reference:**
- Performance degrades as input length increases, even on simple tasks
- Adding full conversation history (≈113k tokens) can drop accuracy by 30% compared to a focused 300-token version
- Performance drops of 20–50% from 10k to 100k+ tokens in NIAH tasks
- The model should handle the 10,000th token just as reliably as the 100th. However, in practice, this assumption does not hold.

The main chart you want is the **hero plot** on their page showing Claude Sonnet 4, GPT-4.1, Qwen3-32B, and Gemini 2.5 Flash all degrading on the Repeated Words Task as context grows.

---

**Here's the updated script with the context bloat section inserted:**

---

## UPDATED SCRIPT: MCPs vs Skills — What Actually Matters

**HOOK (0-3 sec)**
- Everyone's ditching MCPs for Skills...
- I tested both to see what actually matters...

**VALIDATE THE TREND (3-8 sec)**
- And honestly? The MCP hate is valid...
- 7,000 tokens just sitting in your context for Playwright...
- A skill? 90 tokens...
- If you're not doing browser work, that's just bloat...

**WHY BLOAT MATTERS (8-13 sec)** ← NEW SECTION
- And context bloat isn't just about cost...
- Chroma just dropped research on this — *"Context Rot"*...
- As your context grows, accuracy literally tanks...
- 30% accuracy drop going from focused prompts to full history...
- *(show chart)* Your model gets dumber the more you stuff in...

**THE NUANCE (13-28 sec)**
- But here's what I found testing them...
- Skills have a cold start...
- MCP servers are running the moment your agent launches...
- Skills? The agent has to start that server first...
- I'm watching 5-10 seconds of overhead just to spin up...

When that matters:
- Small task like Wordle? Basically same performance...
- But imagine a skill that indexes your codebase — that's minutes of startup every time...

**THE MENTAL MODEL (28-43 sec)**
- Here's how to think about it...
- MCPs are becoming your data connections — the APIs for agents...
- Skills teach the agent what to do with that data...
- The Goose team said it best: Skills without MCPs are just instructions...
- MCPs without Skills is raw power with no guidance...
- They're layers, not competitors...

**CLOSE (43-50 sec)**
- Use Skills for tools you need sometimes...
- Use MCPs for data sources you need instantly, no cold start...
- And CLI? Works but too much friction to set up manually...
- Link in bio for the full breakdown...

---

### SHORTER VERSION (35 sec)

**HOOK**
- Everyone's ditching MCPs for Skills — I tested both to see what actually matters...

**VALIDATE + WHY IT MATTERS**
- The hate is valid — 7,000 tokens versus 90 for a skill...
- And Chroma just proved context bloat makes your model dumber...
- 30% accuracy drop when you stuff in full history...

**NUANCE**
- But skills have a cold start MCPs don't...
- Agent has to spin up that server — 5-10 seconds overhead...

**MENTAL MODEL**
- MCPs for instant data connections...
- Skills for teaching the agent how to use them...
- They're layers, not competitors...

---

### VISUAL SUGGESTIONS

**For the context rot section:**
- Show the Chroma hero chart (performance degrading curve)
- URL: `https://research.trychroma.com/context-rot`
- Text overlay: "Context Rot → Your model gets dumber"
- Or: "30% accuracy drop with full context"

**Screen recordings:**
1. `/context` showing MCP token bloat
2. Chroma chart screenshot (the hero plot)
3. Skill loading with visible cold start delay
4. Both completing the same task

---

This adds about 5 seconds but gives you a killer data point that validates the whole premise. The phrase "your model gets dumber" is punchy and fits your voice.\n
## human\n\nOkay, so my opinion is that MCPs are going to be around and fill the niche for easy OAuth over a URL HTTP MCP to connect to third-party services. Like, I'm assuming it's harder to do the OAuth with a skill.  Is that true? Also, I question Goose saying skills without MCPs are just instructions. You can take literally every action an MCP can with a skill without the MCP as long as an API was available. Is that not correct?\n
## assistant\n\nThe user is pushing back on some of the claims in the script and wants me to validate/challenge them:

1. **OAuth question**: Is it true that MCPs make OAuth easier than Skills? This is a technical question about how authentication flows work with each approach.

2. **Goose claim pushback**: The user is questioning the Goose team's statement that "Skills without MCPs are just instructions." They're arguing that Skills can do everything MCPs can do as long as there's an API available.

Let me think through both:

**On OAuth:**
- MCPs can have built-in OAuth flows because they're server processes that can maintain state, handle redirects, store tokens, etc.
- A Skill is essentially instructions + code that the agent runs. For OAuth, you'd need to:
  - Handle the redirect flow
  - Store tokens somewhere persistent
  - Refresh tokens when needed
  - Manage the auth state

Actually, MCPs that connect to third-party services (like the official Google Drive MCP, Slack MCP, etc.) do handle OAuth for you - the server manages the auth flow and token storage. With a Skill, you'd need to implement all of that yourself or use some kind of credential store.

So yes, MCPs probably ARE better for OAuth-heavy integrations with third-party services. That's a legitimate niche.

**On the Goose claim:**
The user is correct to push back here. Let me think about this more carefully:

- A Skill can absolutely make API calls, run code, do everything an MCP can do functionally
- The difference is:
  - MCP: Pre-running server with tools exposed via the MCP protocol
  - Skill: Instructions + code that the agent reads and executes

If you have a Skill that says "here's how to call the GitHub API, here's the code to do it," and the agent has the ability to execute that code... it can do everything the GitHub MCP does.

The Goose team's statement might be more about:


1. Marketing their MCP ecosystem
2. Referring to a specific type of "skill" that's literally just markdown instructions without executable code
3. Or they're making a point about discoverability/standardization

The core argument is nuanced. While MCPs offer a standardized, pre-configured approach, Skills with executable code can functionally achieve the same outcomes. The key distinctions lie in implementation complexity, OAuth handling, and initial setup ease.

The real differentiators are cold start challenges and authentication complexity. MCPs provide a more streamlined, out-of-the-box solution for integrating third-party services, especially those requiring complex OAuth flows.You're raising two really good points. Let me break them down:

**On OAuth — you're probably right:**

MCPs that connect to third-party services (Google Drive, Slack, Notion, etc.) handle OAuth server-side. The MCP server manages:
- The redirect flow
- Token storage
- Token refresh
- Auth state persistence

With a Skill, you'd need to implement all of that yourself or have some credential store the agent can access. So yes — **HTTP MCPs for third-party OAuth integrations is a legitimate niche** that's harder to replicate with Skills.

**On the Goose claim — you're also right to push back:**

Functionally, if a Skill teaches the agent how to call an API and the agent can execute code... it can do everything an MCP does. There's no magic in MCPs — they're just pre-packaged, standardized tool servers.

The Goose quote might be:
1. Marketing their MCP ecosystem
2. Referring to "skills" that are literally just markdown instructions with no executable component
3. Making a point about discoverability/standardization

But you're correct — **Skills + API access = full MCP capability** without the protocol overhead.

---

**So the more accurate mental model might be:**

| Use Case | Best Choice |
|----------|-------------|
| Third-party OAuth services (Google, Slack, Notion) | HTTP MCP |
| Local tools you need instantly, no cold start | Local MCP |
| Everything else (especially token-heavy tools) | Skill |

Want me to revise the script to reflect this more nuanced take? The "layers not competitors" framing might be too generous to MCPs.\n
## human\n\nupdate my script after these new standpoints\n
## assistant\n\nThe user wants me to update the script with the new, more nuanced take:

1. MCPs have a legitimate niche for OAuth/third-party services (harder to do with Skills)
2. Push back on the Goose claim - Skills + API access can do everything MCPs can
3. The "layers not competitors" framing is too generous to MCPs

So the new framing should be:
- Skills are replacing MCPs for most use cases
- MCPs survive for: OAuth integrations (third-party services) and instant-on local tools
- The Goose quote needs to be challenged or reframed
- Context bloat is still the main argument against MCPs

Let me rewrite the script with this updated perspective.Here's the revised script with your actual take:

---

## UPDATED SCRIPT: MCPs vs Skills — What Actually Matters

**HOOK (0-3 sec)**
- Everyone's ditching MCPs for Skills...
- I tested both — here's when each one actually wins...

**VALIDATE THE TREND (3-8 sec)**
- The MCP hate? Mostly valid...
- 7,000 tokens just sitting in your context for Playwright...
- A skill? 90 tokens...
- If you're not doing browser work, that's just bloat...

**WHY BLOAT MATTERS (8-13 sec)**
- And context bloat isn't just about cost...
- Chroma just dropped research — "Context Rot"...
- As your context grows, accuracy tanks...
- 30% accuracy drop going from focused prompts to full history...
- Your model literally gets dumber the more you stuff in...

**PUSHING BACK ON THE HYPE (13-20 sec)**
- Now some people say Skills without MCPs are just instructions...
- That's not true...
- If a Skill can call an API and execute code — it does everything an MCP does...
- No protocol overhead, no token bloat...
- Skills are eating MCPs for most use cases...

**WHERE MCPs STILL WIN (20-32 sec)**
- But here's the thing — MCPs aren't dead...
- Two places they still make sense...
- One: OAuth integrations — Google Drive, Slack, Notion...
- The MCP server handles the redirect flow, token refresh, all of it...
- Way harder to build that into a Skill yourself...
- Two: Instant-on local tools you need with zero cold start...
- Skills have to spin up — 5-10 seconds overhead...
- MCPs are running the moment your agent launches...

**THE ACTUAL MENTAL MODEL (32-42 sec)**
- So here's how to actually think about it...
- Third-party OAuth stuff? HTTP MCP, easy choice...
- Local tool you need instantly every session? Local MCP...
- Everything else? Skill — way less context bloat, same capability...
- It's not layers, it's about picking the right tool...

**CLOSE (42-50 sec)**
- Skills are winning for a reason...
- But MCPs aren't going anywhere for OAuth integrations...
- Link in bio for the full breakdown...

---

### SHORTER VERSION (35 sec)

**HOOK**
- Everyone's ditching MCPs for Skills — here's when each one actually wins...

**VALIDATE + BLOAT**
- MCP hate is mostly valid — 7,000 tokens versus 90 for a skill...
- Chroma proved context bloat makes your model dumber — 30% accuracy drop...

**PUSHBACK**
- People say Skills without MCPs are just instructions — not true...
- If a Skill can call an API, it does everything an MCP does...

**WHERE MCPs WIN**
- But MCPs still win for OAuth integrations — Google Drive, Slack, Notion...
- And instant-on local tools with zero cold start...

**CLOSE**
- Third-party OAuth? MCP. Everything else? Probably a Skill...

---

### VISUAL SUGGESTIONS

**Text overlays:**
- "MCP: 7,000 tokens" → "Skill: 90 tokens"
- "Context Rot → 30% accuracy drop"
- "OAuth = MCP's niche"
- "Skills + API = full MCP capability"

**Screen recordings:**
1. `/context` showing MCP token bloat
2. Chroma chart (hero plot showing degradation)
3. OAuth flow example (Google Drive MCP)
4. Skill cold start vs MCP instant response

---

### KEY QUOTES TO USE

~~"Skills without MCPs are just well-written instructions."~~ ← Cut this

**New framing:**
- "If a Skill can call an API and execute code, it does everything an MCP does."
- "MCPs aren't dead — they're just becoming the OAuth layer."
- "It's not layers, it's about picking the right tool."

---

This version is more opinionated and matches your actual take. The "layers not competitors" framing is gone — now it's "Skills are winning, MCPs have a niche."\n