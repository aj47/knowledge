---
kind: note
id: claude-conversation-2026-02-18-acp-usage-with-claude-code-and-subscription-terms-3b053d2a
updatedAt: 1771451530458
createdAt: 1771451385197
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 3b053d2a-dc28-48c4-bca0-cde5a4140f9a
created_at: 2026-02-18T21:49:45.197155Z
updated_at: 2026-02-18T21:52:10.458590Z
title: "ACP usage with Claude Code and subscription terms"
---

# ACP usage with Claude Code and subscription terms

## Metadata

- Claude conversation UUID: `3b053d2a-dc28-48c4-bca0-cde5a4140f9a`
- Created: `2026-02-18T21:49:45.197155Z`
- Updated: `2026-02-18T21:52:10.458590Z`
- Message count: 10
- Transcript chars extracted: 7320

## Claude summary

**Conversation Overview**

The user inquired about the terms of service implications of using ACP (Agent Communication Protocol) to connect to Claude Code with a Max subscription. This technical question centered on whether third-party IDE integrations that use ACP to communicate with Claude Code violate Anthropic's terms of service. Claude explained the key distinction: using ACP with Claude Code through the official SDK is permitted, as demonstrated by the Zed editor integration that wraps Claude Code's SDK via the `claude-agent-acp` package. However, using OAuth tokens from Pro/Max subscriptions directly with third-party tools that bypass Claude Code constitutes a ToS violation.

The user then requested links to official Anthropic promotion of the Zed integration. Despite thorough searching, Claude found that Anthropic has not officially promoted or endorsed the Zed ACP integration on their own channels. The integration was entirely driven by Zed's development team, who built a bridge to wrap Claude Code via ACP. While Anthropic maintains the Agent SDK that enables this integration and hasn't blocked or banned users for it, their official documentation only mentions VS Code, VS Code forks like Cursor and Windsurf, and JetBrains as supported IDEs.

The user pressed for any official Anthropic statement blessing ACP usage in other IDEs with Pro/Max plans, but Claude confirmed no such explicit endorsement exists. Anthropic's official position states that OAuth authentication for Free, Pro, and Max plans is intended exclusively for Claude Code and claude.ai, leaving the Zed integration in a gray area that Anthropic hasn't publicly addressed.

## Quick excerpt

Let me search for the latest information on this. ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` This is a great question and it's nuanced. Here's the key distinction: **Using ACP with Claude Code + Max subscription: Allowed ✅** Claude Code's legal docs state that usage limits for Pro and Max plans assume "ordinary, individual usage of Claude Code and the Agent SDK." The official Zed integration uses ACP to talk to 

## Transcript

## human\n\nis using ACP to talk to claude code with max subscription against ToS\n
## assistant\n\nLet me search for the latest information on this.
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

This is a great question and it's nuanced. Here's the key distinction:

**Using ACP with Claude Code + Max subscription: Allowed ✅**

Claude Code's legal docs state that usage limits for Pro and Max plans assume "ordinary, individual usage of Claude Code and the Agent SDK." The official Zed integration uses ACP to talk to Claude Code, and this is explicitly supported by Anthropic (they maintain the `claude-agent-acp` package via Zed).

**The line you can't cross:**

OAuth authentication used with Free, Pro, and Max plans is intended exclusively for Claude Code and claude.ai. Using OAuth tokens obtained through these accounts in any other product, tool, or service — including the Agent SDK — is not permitted and constitutes a violation of the Consumer Terms of Service.

So the critical factor is **how** the ACP bridge connects to Claude:

- **ACP → Claude Code SDK → Anthropic** (wrapping Claude Code itself): This is fine. You're using Claude Code as intended, just through a different editor via ACP. The Zed integration works exactly this way.
- **ACP → directly using OAuth tokens to hit Anthropic's API** (bypassing Claude Code): This would be a ToS violation.

The bans that have been happening are from third-party tools like OpenCode, Roo Code, and Cline that route requests through Max/Pro subscription credentials rather than going through Claude Code's SDK. The key difference is those tools aren't wrapping Claude Code — they're using the subscription auth to make their own API calls.

**TL;DR:** If you're using ACP to interface with Claude Code (like the official Zed adapter does), you're fine on Max. Just make sure the ACP bridge is actually wrapping Claude Code, not extracting your OAuth token for use in a separate tool.\n
## human\n\ngive me the link of anthropic promoting zed\n
## assistant\n\n```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

So here's the thing — I couldn't find an Anthropic blog post or page specifically promoting the Zed + ACP integration. The promotion has been almost entirely from Zed's side:

- **Zed's blog post**: https://zed.dev/blog/claude-code-via-acp
- **Zed's setup page**: https://zed.dev/acp/agent/claude-code
- **Zed's docs**: https://zed.dev/docs/ai/external-agents

Zed stepped in and built the bridge to wrap Claude Code so it could communicate over ACP, even though Anthropic hasn't officially adopted the standard.

Anthropic's Claude Code page only mentions native extensions for "VS Code, VS Code forks like Cursor and Windsurf, and JetBrains" — no mention of Zed or ACP.

That said, Anthropic does implicitly support it through:
1. An earlier collaboration where Anthropic engineers discovered Zed and it evolved into the "Zed AI" partnership powered by Claude 3.5 Sonnet.
2. The `@zed-industries/claude-agent-acp` adapter uses Anthropic's official Claude Agent SDK, which Anthropic publishes and maintains.
3. The Claude Code legal docs mention "ordinary, individual usage of Claude Code and the Agent SDK" as permitted — and the Zed adapter goes through the SDK.

So there's no single "Anthropic promotes Zed" link. It's more that Anthropic provides the SDK, Zed wraps it, and Anthropic hasn't objected (or banned anyone for using it). The closest to an official endorsement is the early Zed AI collaboration and the fact that the Agent SDK docs don't prohibit this use pattern.\n
## human\n\nsurely theres some official anthropic mention of it\n
## assistant\n\n```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

You're right to push on this. Let me check Anthropic's actual Claude Code docs directly.
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Yeah, I have to be straight with you — after thorough searching, there doesn't appear to be an official Anthropic page or blog post promoting the Zed + ACP integration. 

Here's what I found across Anthropic's own properties:

- **anthropic.com/claude-code**: Only mentions VS Code, VS Code forks (Cursor, Windsurf), and JetBrains
- **code.claude.com docs**: Only mentions Zed in the context of terminal setup (`/terminal-setup` for Shift+Enter keybinding) — not as an IDE integration
- **Anthropic blog posts** (Claude 4 launch, Claude Code autonomy post, Sonnet 4.5 launch): No mention of Zed or ACP

The Zed + Claude Code ACP integration was entirely driven by Zed's side. Zed stepped in and built its own bridge to wrap Claude Code via ACP, even though Anthropic hasn't officially adopted the standard. The early Zed AI collaboration from 2024 was more about Anthropic engineers using Zed internally and powering Zed's built-in assistant with Claude — not the ACP/Claude Code integration specifically.

So there isn't a link to give you. Anthropic has tacitly allowed it (they haven't blocked it, the SDK is public, and people aren't getting banned for it), but they haven't officially promoted or endorsed it on any of their own channels.\n
## human\n\nanything on them saying ACP is ok in other IDEs\n
## assistant\n\n```
This block is not supported on your current device yet.
```\n
## human\n\nanything on them saying ACP is ok in other IDEs with a max/pro plan\n
## assistant\n\n```
This block is not supported on your current device yet.
```

No luck finding Anthropic explicitly saying "ACP in other IDEs with your Max/Pro plan is fine." 

What the docs actually say is pretty restrictive. OAuth authentication used with Free, Pro, and Max plans is intended exclusively for Claude Code and Claude.ai. Using OAuth tokens obtained through these accounts in any other product, tool, or service — including the Agent SDK — is not permitted.

That's the official line. The nuance is whether the Zed ACP adapter counts as "Claude Code" (since it wraps the Claude Code SDK/CLI) or as "another product." Anthropic hasn't clarified this publicly.

The closest thing to an official endorsement of Claude Code in third-party IDEs is:
- Cat Wu, Product Manager for Claude Code at Anthropic, was quoted in the JetBrains announcement saying the Claude Agent SDK "represents our commitment to making it easy to build sophisticated agents on Claude" and praised JetBrains' use of the SDK.

But that JetBrains integration uses API key auth, not Pro/Max subscription auth — which is the key difference.

**Bottom line:** Anthropic has no public statement explicitly blessing ACP + Pro/Max in third-party editors. The legal docs technically say OAuth is "exclusively for Claude Code and Claude.ai." Whether the Zed adapter (which wraps Claude Code itself) falls under that umbrella is an unresolved gray area that Anthropic hasn't addressed.\n