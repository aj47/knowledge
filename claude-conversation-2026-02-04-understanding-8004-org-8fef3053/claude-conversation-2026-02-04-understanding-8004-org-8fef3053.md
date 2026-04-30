---
kind: note
id: claude-conversation-2026-02-04-understanding-8004-org-8fef3053
updatedAt: 1770165771489
createdAt: 1770165453544
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 8fef3053-a60f-4bb5-a9fc-52b8457ca001
created_at: 2026-02-04T00:37:33.544949Z
updated_at: 2026-02-04T00:42:51.489099Z
title: "Understanding 8004.org"
---

# Understanding 8004.org

## Metadata

- Claude conversation UUID: `8fef3053-a60f-4bb5-a9fc-52b8457ca001`
- Created: `2026-02-04T00:37:33.544949Z`
- Updated: `2026-02-04T00:42:51.489099Z`
- Message count: 8
- Transcript chars extracted: 9634

## Claude summary

**Conversation Overview**

The user asked Claude to analyze 8004.org, which is the official site for ERC-8004, an Ethereum standard for enabling trustless autonomous AI agents to interact across organizational boundaries. Claude explained that ERC-8004 addresses the gap in existing agent protocols like Google's A2A and MCP by using blockchain to enable agent discovery and interaction without pre-existing trust. The standard introduces three on-chain registries: Identity Registry (ERC-721 based handles), Reputation Registry (feedback signals), and Validation Registry (cryptographic verification of agent work). The user then asked about implications for "linkclaws" and directed Claude to look up "aj47/linkclaws" on GitHub.

Claude discovered that LinkClaws is the user's own project - a LinkedIn-style platform where AI agents discover partners, post offerings, negotiate deals, and build trusted business relationships. The user expressed interest in how ERC-8004 could integrate with LinkClaws but emphasized wanting LinkClaws to work without requiring blockchain. Claude proposed a hybrid architecture where agents could register with just an API key by default, with optional ERC-8004 identity linking for enhanced portability and trust. The solution included tiered trust levels from basic API key verification to full on-chain validation, allowing agents to self-select based on their needs while keeping the platform accessible to users who prefer to avoid crypto complexity.

**Tool Knowledge**

When searching for GitHub repositories using the format "username/repository", web_search effectively located the LinkClaws project by searching "aj47 linkclaws github" rather than attempting direct URL construction. The search successfully identified that aj47 corresponds to the user's GitHub handle "techfren" and provided the repository description. For fetching GitHub repository content, the direct URL approach to https://github.com/username/repository worked reliably after initial search confirmation. When the initial web_fetch of 8004.org returned minimal content due to JavaScript rendering, supplementing with web_search using specific technical terms like "8004 trustless autonomous agents open protocols" provided comprehensive context that the direct fetch missed.

## Quick excerpt

The user wants me to understand a website. I should use web_fetch to retrieve the contents of this URL and then explain what I find. ``` This block is not supported on your current device yet. ``` The fetch only returned minimal content from the page. This might be a JavaScript-heavy page that doesn't render well. Let me search for more information about "8004" and "trustless autonomous agents" to understand what this project is about.The page content is minimal (likely JavaScript-rendered). Let

## Transcript

## human\n\nhelp me understand https://www.8004.org/\n
## assistant\n\nThe user wants me to understand a website. I should use web_fetch to retrieve the contents of this URL and then explain what I find.
```
This block is not supported on your current device yet.
```

The fetch only returned minimal content from the page. This might be a JavaScript-heavy page that doesn't render well. Let me search for more information about "8004" and "trustless autonomous agents" to understand what this project is about.The page content is minimal (likely JavaScript-rendered). Let me search for more context on what 8004 is:
```
This block is not supported on your current device yet.
```

Now I have a comprehensive understanding of what 8004.org is about. Let me summarize this for the user.**8004.org** is the official site for **ERC-8004**, an Ethereum standard for enabling trustless autonomous AI agents to interact across organizational boundaries without pre-existing trust.

## The Core Problem It Solves

Existing agent protocols like Google's A2A (Agent-to-Agent) and MCP work great *within* trusted environments, but they don't address how agents can safely interact with *unknown* agents from other organizations. ERC-8004 proposes using blockchains to discover, choose, and interact with agents across organizational boundaries without pre-existing trust, enabling open-ended agent economies.

## The Three Registries

ERC-8004 introduces three lightweight on-chain registries:

1. **Identity Registry** — A minimal on-chain handle based on ERC-721 that resolves to an agent's registration file, providing every agent with a portable, censorship-resistant identifier.

2. **Reputation Registry** — A standard interface for posting and fetching feedback signals. Scoring and aggregation occur both on-chain (for composability) and off-chain (for sophisticated algorithms).

3. **Validation Registry** — Supports cryptographic verification of agent work through multiple trust models: reputation systems, stake-secured re-execution, zkML proofs, or TEE (Trusted Execution Environment) attestations.

## Why It Matters for You

Given your work on SpeakMCP and multi-agent AI platforms, this is directly relevant:

- The registration file can include MCP endpoints alongside A2A endpoints, making agents discoverable across both protocols
- It's designed to integrate with your sub-agent architecture work — agents can now verify each other's capabilities and reputation before delegating tasks
- Co-authored by teams from MetaMask, Ethereum Foundation, Google, and Coinbase, so it has serious backing

## Current Status

First proposed August 13, 2025, it progressed to Draft stage with version 1 released in October 2025. The Ethereum Foundation's new dAI team announced support for the initiative, and 80+ builder groups have expressed interest in implementing pilots.

This could be interesting for the security layer you've been exploring for AI systems — on-chain identity and reputation gives you verifiable trust signals for agent-to-agent interactions.\n
## human\n\nwhat about for linkclaws\n
## assistant\n\nThe user is asking about "linkclaws" - I'm not immediately sure what this refers to. Let me search my past conversations with this user to see if we've discussed linkclaws before, as it sounds like it could be a project or tool they're working on or have mentioned.
```
This block is not supported on your current device yet.
```

The search didn't return specific results about "linkclaws" - it seems to have matched on "clawdbot" related conversations. Let me search more specifically for linkclaws to see if this is something we discussed before, or if I should ask the user what it is.I didn't find anything about "linkclaws" in our past conversations. What is it — a project you're working on, or something you came across? Happy to look into how ERC-8004 might be relevant once I know what it is.\n
## human\n\naj47/linkclaws look it up\n
## assistant\n\nThe user wants me to look up aj47/linkclaws - this is likely a GitHub repository. Let me search for it.
```
This block is not supported on your current device yet.
```

I need to search for it first before I can fetch.
```
This block is not supported on your current device yet.
```

Found it! LinkClaws is a project by aj47 (techfren - that's the user!). It's described as "a LinkedIn-style platform where AI agents discover partners, post offerings, negotiate deals, and build trusted business relationships."

Let me fetch more details from the GitHub repo and the live site.
```
This block is not supported on your current device yet.
```

So LinkClaws is techfren's project - a "LinkedIn for AI agents" platform. The user is asking how ERC-8004 relates to LinkClaws.

This is a perfect match actually. LinkClaws is trying to solve agent discovery, reputation, and collaboration - and ERC-8004 is an Ethereum standard that provides on-chain infrastructure for exactly those things (identity, reputation, validation registries).

Let me lay out the connection clearly.Oh nice, LinkClaws is directly in ERC-8004's wheelhouse. Both are solving the same core problem: **how do AI agents discover, trust, and do business with each other?**

## The Overlap

LinkClaws currently handles:
- Agent profiles & registration
- Feed for posting offerings/requests
- Direct messages between agents
- Connections (following)
- Endorsements for reputation
- Notifications

ERC-8004 provides on-chain primitives for:
- **Identity Registry** — portable agent IDs as NFTs
- **Reputation Registry** — standardized feedback signals
- **Validation Registry** — cryptographic/economic proof of work quality

## Integration Potential

You could layer ERC-8004 under LinkClaws to give it:

1. **Portable agent identity** — Agents registered on LinkClaws could mint an ERC-721 identity that works across *any* platform implementing 8004, not just yours. Their LinkClaws profile becomes one endpoint in their registration file.

2. **On-chain reputation** — Right now endorsements live in Convex. With 8004's Reputation Registry, those signals become composable and verifiable across the ecosystem. An agent's LinkClaws karma could feed into a broader reputation score.

3. **Trust for high-stakes deals** — For agents negotiating bigger collaborations, they could request validation proofs (stake-secured re-execution, TEE attestations) that get recorded on-chain before funds move.

4. **Interoperability** — Other agent marketplaces or orchestrators could discover LinkClaws agents through 8004's registry, driving more traffic to your platform.

## The Trade-off

ERC-8004 adds blockchain complexity (gas costs, wallet management). For casual agent networking, your current Convex setup is probably fine. But if you want LinkClaws to be *the* professional network where real value flows between agents, 8004 gives you the trust rails that make that credible.

Worth reaching out to the 8004 builder program? They're actively looking for implementers.\n
## human\n\ni want linkclaws to also work without blockchain\n
## assistant\n\nThe user wants LinkClaws to work both with and without blockchain. This is a practical concern - not everyone wants to deal with wallets, gas fees, crypto complexity. They want the benefits of ERC-8004's trust primitives but also a path that doesn't require blockchain.

Let me think about how to architect this:

1. LinkClaws could have its own identity/reputation system (which it already does via Convex)
2. Optionally, agents could "upgrade" to on-chain identity via ERC-8004
3. The reputation system could aggregate both on-chain and off-chain signals

This is actually how ERC-8004 is designed - it's meant to be a trust layer that sits on top of existing protocols, not replace them. The on-chain registries are lightweight and optional.

I should suggest a hybrid architecture that:
- Works standalone with Convex (current setup)
- Allows optional ERC-8004 registration for agents who want portable/verifiable identity
- Aggregates reputation from both sources
- Lets agents choose their trust level based on transaction valueThat's the right call. Here's how to architect it:

## Hybrid Identity Model

```
┌─────────────────────────────────────────────────┐
│              LinkClaws Agent                    │
├─────────────────────────────────────────────────┤
│  linkclaws_id: "agent_abc123"      (required)   │
│  erc8004_id:   "0x742d35..."       (optional)   │
│  a2a_endpoint: "https://..."       (optional)   │
│  mcp_endpoint: "https://..."       (optional)   │
└─────────────────────────────────────────────────┘
```

**Default path:** Agents register with just an API key, everything lives in Convex. No wallet needed.

**Optional upgrade:** Agents can link an ERC-8004 identity later. Their LinkClaws profile becomes one of the `endpoints` in their on-chain registration file.

## Tiered Trust Levels

| Level | Verification | Use Case |
|-------|-------------|----------|
| **Basic** | API key only | Browsing, posting, low-stakes DMs |
| **Verified** | Email/domain verification | Serious collaboration requests |
| **On-chain** | ERC-8004 identity linked | High-value deals, cross-platform portability |
| **Validated** | Stake/TEE attestation | Mission-critical agent work |

Agents self-select based on what they need. Most stay at Basic/Verified.

## Reputation Aggregation

Your endorsement system stays primary. For agents with 8004 identity, you can optionally:
- Pull external reputation signals from the on-chain registry
- Push LinkClaws endorsements to 8004 (if agent opts in)

This makes LinkClaws a first-class citizen in the 8004 ecosystem without forcing anyone into crypto rails.

Want me to sketch out the schema changes for Convex?\n