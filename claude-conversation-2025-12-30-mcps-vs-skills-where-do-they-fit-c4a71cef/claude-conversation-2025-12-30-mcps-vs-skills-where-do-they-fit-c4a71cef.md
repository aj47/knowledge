---
kind: note
id: claude-conversation-2025-12-30-mcps-vs-skills-where-do-they-fit-c4a71cef
updatedAt: 1767127020700
createdAt: 1767126547698
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: c4a71cef-8d0c-4546-bb4d-878b5b841a7c
created_at: 2025-12-30T20:29:07.698401Z
updated_at: 2025-12-30T20:37:00.700752Z
title: "MCPs vs skills: where do they fit"
---

# MCPs vs skills: where do they fit

## Metadata

- Claude conversation UUID: `c4a71cef-8d0c-4546-bb4d-878b5b841a7c`
- Created: `2025-12-30T20:29:07.698401Z`
- Updated: `2025-12-30T20:37:00.700752Z`
- Message count: 4
- Transcript chars extracted: 12062

## Claude summary

**Conversation Overview**

The user requested social media posts across multiple platforms (X, Instagram, TikTok, LinkedIn, YouTube Short) based on their video content analyzing MCPs (Model Context Protocol) versus skills in AI agent development. Their analysis concluded that while MCP criticism is largely valid due to context bloat issues—MCPs consume around 14k tokens (7% of context window) leading to accuracy degradation and higher costs—MCPs aren't completely obsolete. They identified two specific use cases where MCPs still provide value: third-party OAuth integration where users can simply paste URLs to connect services like Gmail, Notion, and Linear without managing token refresh logic, and cold start advantages where MCPs initialize immediately while skills require discovery time, which matters for compute-intensive operations like codebase indexing that can take 30+ seconds.

The user then wanted to compare their perspective with Mario Zechner's article on the same topic. After reviewing Zechner's analysis, it became clear their takes were complementary rather than contradictory. Both agreed on the core problem of context bloat (citing similar token consumption figures) and that skills/bash-based approaches work better for most use cases. However, the user's analysis added nuanced exceptions that Zechner didn't address: the convenience advantage of OAuth-enabled MCPs over DIY token management, and the cold start performance consideration for heavy computational tasks. The user's final assessment that "80% of things should be skills, 20% MCPs" aligned with but extended Zechner's more absolute position against MCPs. Claude created platform-specific posts following the user's established voice guidelines, emphasizing bold claims, discovery energy, and avoiding weak openers while incorporating power words and maintaining appropriate tone for each platform's audience.

## Quick excerpt

The user wants me to create social media posts for multiple platforms based on this video transcript about MCPs vs Skills. Let me analyze the content first and then create posts following the techfren voice and guidelines. Key points from the transcript: 1. Everyone is ditching MCPs for skills 2. Claude Chrome is implemented as MCP server, similar to Playwright MCP 3. MCPs take up 14k context (7%) - context rot issue 4. ChromaDB blog shows LLM accuracy drops as context builds 5. Two places where

## Transcript

## human\n\nmake x post, instagram, tiktok, linkedin, youtube short for this;


So it seems everyone is ditching MCPs for skills. I had to look into it myself to see where everything fits in. We got skills, MCPs, plug-ins, hooks, custom commands, and more. Firstly, the MCP hate is mostly valid. Here, this is another new thing by Claude, Claude Chrome. Claude-Chrome. It's actually implemented as an MCP server too, and it's very similar to the Playwright MCP. There's all these tools, and it takes up 14k context. That's 7%. That's pretty important for context rot. Check out this blog by ChromaDB. And you'll see results like this showing that LLM accuracy drops dramatically as context builds up. And on top of that, things get more expensive and you hit rate limits quicker. Now, a lot of the stakeholders like Anthropic and Goose say that MCPs still have a place. I think this is a quote from Goose saying that skills without MCP are just well-written instructions. I kind of have to push back on that because I think with skills you can actually execute pretty much every single MCP action if there's an API or some way to do it in code. But I think MCPs aren't dead for a couple particular reasons. There's two places where they make sense in my mind. Firstly, third-party OAuth integration over a HTTP URL hosted by the third party. This is a super easy way to get context into your agent from all these platforms like Gmail, Notion, Linear, GitHub, etc. Though it's theoretically possible to manage tokens in a skill, I think it is much harder to get started than just copy-pasting a URL. The MCP can handle redirect flow, token refresh, all of it. And two, this is one big difference I didn't really see many other people talk about. There's this cold start issue. Skills by themselves don't execute any scripts until they are discovered by the agent and the agent chooses to run those scripts. Whereas an MCP server generally starts as soon as you start the agent. In most cases, this doesn't really matter, but there's probably a few where it does. For instance, if you have a codebase indexing skill or MCP, the indexing of a codebase could take 30 seconds or more, even minutes. That's time that could be saved from having to do a cold start of the server and the indexing if you use a skill. Ultimately, I have to agree, it's looking like 80% of things will probably be better as skills, but I don't think MCPs are completely dead. I just think they're probably ending up as the minority of use cases, or just easy third-party context connector. I think there'll be a lot of work done on the harness/slash agent side to manage the context bloat issue with these MCPs. I mean, there probably already is. Anyway, that's my conclusion. It was still pretty hard to like fully understand and predict things. And there's so many smart people who see my videos and comment great suggestions. So thank you everyone who's been doing that. And if you have any suggestions and comments on this video, I would love to hear your opinion.\n
## assistant\n\nThe user wants me to create social media posts for multiple platforms based on this video transcript about MCPs vs Skills. Let me analyze the content first and then create posts following the techfren voice and guidelines.

Key points from the transcript:
1. Everyone is ditching MCPs for skills
2. Claude Chrome is implemented as MCP server, similar to Playwright MCP
3. MCPs take up 14k context (7%) - context rot issue
4. ChromaDB blog shows LLM accuracy drops as context builds
5. Two places where MCPs still make sense:
   - Third-party OAuth integration over HTTP URL
   - Cold start issue - MCPs start immediately, skills need to be discovered first
6. 80% of things will be better as skills, but MCPs aren't completely dead
7. MCPs will be minority use cases or easy third-party context connectors

Now let me create posts following the techfren voice guidelines:
- Bold claims work best (80% success rate)
- Never start with "so," "hey," "what's up"
- Use power words: "just", "free", "actually", "boom", "dude", "sick"
- Action-oriented CTAs
- Short punchy sentences
- Discovery energy

Let me create these posts:Looking at the project files and your voice guidelines to craft these properly.
```
This block is not supported on your current device yet.
```

The content I need to create is social media posts for multiple platforms. I don't need the full docx creation workflow - I can create a simple document with the posts. Let me craft these posts following the techfren voice guidelines.

Key points from the voice guide:
- Bold claims work best (80% success rate)
- Never start with "so," "hey," "what's up"
- Use power words: "just", "free", "actually", "boom", "dude", "sick"
- Action-oriented CTAs
- Short punchy sentences
- Discovery energy
- Questions have only 29% success rate - avoid them

Let me create posts for each platform:

**X/Twitter Post:**
- Keep it punchy
- Bold claim opener
- Discovery energy

**Instagram:**
- Similar to X but can be slightly longer
- Visual-friendly format

**TikTok:**
- Short, punchy
- Casual tone

**LinkedIn:**
- More professional
- Still discovery energy but slightly more refined

**YouTube Short:**
- Script notes format (sentence starters)
- HOOK/VALUE STACK/DEMO/CLOSE structure

Let me write these now.Now let me craft these posts using your voice guidelines - bold claims, discovery energy, no slow starts.
```
This block is not supported on your current device yet.
```

Good, I created the file. Now let me copy it to outputs and present it to the user.
```
This block is not supported on your current device yet.
```

Let me present the file to the user now.
```
This block is not supported on your current device yet.
```

Great, the file is presented. Let me give a quick summary of what I created.Done. All five platforms covered:

**X** — Punchy breakdown with the 80/20 takeaway. Lists the two MCP use cases cleanly.

**Instagram** — Same core message, slightly expanded with arrow formatting for the scroll-stop factor.

**TikTok** — Fastest version. Direct claims, no fluff. Ends with the "just niche" hook.

**LinkedIn** — More professional tone but kept the discovery energy. Ends with engagement question (appropriate for LinkedIn, not the other platforms).

**YouTube Short script notes** — Your sentence-starter format. HOOK/VALUE STACK/DEMO/CLOSE structure. Glanceable while recording.

All posts lead with bold claims (not questions), avoid "so/hey/what's up" openers, and use your power words. The cold start insight you mentioned is the differentiator most people aren't talking about—highlighted that across all versions.\n
## human\n\ni want to reference https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/?t=0 how does my take relate or contradict\n
## assistant\n\nThe user wants me to fetch the article at that URL and compare their take on MCPs vs Skills to the author's take. Let me fetch that article.
```
This block is not supported on your current device yet.
```

This is a great article by Mario Zechner. Let me analyze how techfren's take relates to or contradicts this article.

**Mario's main arguments:**
1. MCP servers are inefficient - Playwright MCP uses 13.7k tokens (6.8% of context), Chrome DevTools MCP uses 18k tokens (9%)
2. MCPs aren't composable - results have to go through agent context
3. Hard to extend existing MCP servers
4. Simple bash/CLI tools + code are better for most use cases
5. You can just write simple Node.js scripts that agents call via bash
6. This is similar to Anthropic's skills system but more ad-hoc and works with any agent
7. His browser tools README is only 225 tokens vs 13-18k for MCP servers

**Techfren's take:**
1. MCP hate is "mostly valid" - agrees with context bloat issue (14k context, 7%)
2. Context rot is real - accuracy drops as context builds
3. BUT MCPs aren't completely dead - two use cases:
   - Third-party OAuth integration over HTTP URL hosted by third party
   - Cold start advantage - MCPs spin up immediately, skills wait to be discovered

**Where they ALIGN:**
- Both agree MCPs are inefficient due to context bloat
- Both cite similar numbers (14k-18k tokens)
- Both think skills/bash/code-based approaches are better for most cases
- Both reference the composability issue
- Both acknowledge Anthropic's skills system as a similar/related concept

**Where techfren ADDS or DIFFERS:**
1. **OAuth integration point** - Mario doesn't really address this. Techfren says MCPs still win for third-party OAuth where you just paste a URL and get Gmail/Notion/Linear context. Mario's approach requires you to manage your own profile/cookies manually (his --profile flag copies Chrome profile).

2. **Cold start issue** - This is techfren's unique contribution that Mario doesn't discuss. 

I see MCPs have an immediate startup advantage for compute-intensive tasks like codebase indexing. Skills require discovery time, while MCPs are ready from the start, which can be crucial for performance-sensitive operations.

The DIY nature of Mario's approach demands technical expertise. In contrast, techfren highlights MCPs' accessibility, especially for non-technical users seeking straightforward third-party integrations. OAuth is a prime example where MCPs offer a more user-friendly solution compared to manual configuration.

Mario's browser automation work provides a concrete implementation of skill-based alternatives. However, his approach doesn't fully address the nuanced scenarios techfren identifies, particularly around OAuth and cold start challenges. Their perspectives actually complement each other - Mario demonstrates technical implementation, while techfren explores broader systemic considerations.Great article by Mario Zechner. Here's how your takes relate:

## Where You Align

**Context bloat** — You both call out the same problem with nearly identical numbers. Mario cites Playwright MCP at 13.7k tokens (6.8%) and Chrome DevTools MCP at 18k tokens (9%). You cite 14k (7%). Same conclusion: MCPs eat context before doing anything useful.

**Composability problem** — Mario explicitly mentions MCP outputs have to "go through the agent's context to be persisted to disk or combined with other results." You don't say this directly but it's implicit in the skills advantage.

**Skills/bash > MCPs for most cases** — Mario builds simple Node.js scripts (225 tokens vs 13-18k for MCPs) and calls them via bash. This is essentially what Anthropic's skills do. You both land at "80% of things are better without MCPs."

**Anthropic skills connection** — Mario directly references that his approach predates but mirrors Anthropic's skills system. You're making the same observation from the opposite direction.

---

## Where You Add Nuance Mario Doesn't

**1. Third-party OAuth** — Mario's browser tools solution requires you to rsync your Chrome profile to use cookies. That's DIY and technical. Your point about OAuth MCPs (Gmail, Notion, Linear) being "just paste a URL" is a real convenience advantage Mario doesn't address. His approach requires managing tokens yourself.

**2. Cold start** — This is your unique contribution. Mario doesn't discuss it. His bash scripts run on-demand, but for heavy compute tasks (codebase indexing), having the MCP pre-spin avoids that 30+ second wait. Mario's approach would incur that cold start every time.

---

## How to Reference It

You could strengthen your take by citing Mario's article as evidence:

> "Mario Zechner did a breakdown showing Playwright MCP eats 13.7k tokens, Chrome DevTools MCP eats 18k. That's before you do anything. His solution? Simple bash scripts. 225 tokens total. Skills win for most things—but I'd add two exceptions he didn't cover..."

Then hit your OAuth and cold start points as the nuance on top of his analysis.

---

**Bottom line:** You're not contradicting Mario—you're extending him. He makes the "MCPs are mostly unnecessary" case in detail. You agree but add "here's the 20% where they still make sense." Complementary takes.

Want me to revise the social posts to reference his article?\n