---
kind: note
id: claude-conversation-2026-01-15-medusa-demo-with-external-code-context-966be61f
updatedAt: 1768442253831
createdAt: 1768441385155
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 966be61f-71fb-4752-8ece-091763c9201a
created_at: 2026-01-15T01:43:05.155968Z
updated_at: 2026-01-15T01:57:33.831039Z
title: "Medusa demo with external code context"
---

# Medusa demo with external code context

## Metadata

- Claude conversation UUID: `966be61f-71fb-4752-8ece-091763c9201a`
- Created: `2026-01-15T01:43:05.155968Z`
- Updated: `2026-01-15T01:57:33.831039Z`
- Message count: 6
- Transcript chars extracted: 9627

## Claude summary

**Conversation Overview**

The user continued planning a demo for Medusa (an open-source e-commerce platform) to showcase Augment Code's Context Engine MCP capabilities. They specifically wanted to demonstrate how using external repositories as context provides more specific and actionable guidance than relying on documentation alone. The user requested repository URLs for cloning, documentation links for comparison, and example prompts that highlight the superiority of direct code context over generic documentation.

Claude created comprehensive demo materials including a detailed planning document with clone URLs for the main Medusa monorepo, Next.js storefront starter, and B2B starter repositories. The materials included official documentation links for comparison and ten categorized example prompts covering cart implementation, checkout flow, authentication, API integration, and customization scenarios. Each prompt was designed to demonstrate how code context reveals actual implementation patterns, error handling, Server Actions, and production-ready code versus the conceptual examples typically found in documentation.

The user then requested the specific MCP configuration JSON and a complete demo script. Claude provided the MCP server configuration for Claude Desktop using the auggie-context-mcp package, along with setup instructions for obtaining authentication tokens. The final deliverable was a comprehensive 14-minute video script structured around the core narrative that "docs show the API, code shows the implementation." The script included detailed timing, talking points, specific prompts to demonstrate live, and a clear progression from showing documentation limitations to revealing the power of contextual code queries for practical development tasks like adding features, debugging, and following established patterns in the Medusa storefront codebase.

## Quick excerpt

The user wants to continue planning a demo for Medusa (an open-source e-commerce platform) that showcases Augment Code's Context Engine MCP capabilities. They want to demonstrate how using external repos as context can be better than relying on documentation alone. They need: 1. URLs to clone the Medusa repositories (backend and storefront frontend) 2. Links to the official documentation 3. Example prompts that demonstrate asking questions about the code directly vs documentation 4. Focus on sho

## Transcript

## human\n\nContinue to help me plan the demo for Medusa showing the context engine, MCP. I want to show external repos as context. I need the URLs to clone and to show that they can be better than the docs, more specific when we ask questions about the code directly rather than relying on documentation. So we can provide links to the documentation, all the repositories, and give example prompts to ask about the code bases, the external code base in particular, to work on the front end for these repositories. Prepare all that information for me.

medusa backend and storefront frontend\n
## assistant\n\nThe user wants to continue planning a demo for Medusa (an open-source e-commerce platform) that showcases Augment Code's Context Engine MCP capabilities. They want to demonstrate how using external repos as context can be better than relying on documentation alone.

They need:
1. URLs to clone the Medusa repositories (backend and storefront frontend)
2. Links to the official documentation
3. Example prompts that demonstrate asking questions about the code directly vs documentation
4. Focus on showing that direct code context is more specific/useful than docs

Let me search for the current Medusa repository information and documentation to provide accurate, up-to-date URLs.I'll search for the current Medusa repository information and documentation to get you accurate URLs and context for your demo.
```
This block is not supported on your current device yet.
```

Good, I found the main Medusa repository. Now let me search for the official Next.js storefront starter and documentation links.
```
This block is not supported on your current device yet.
```

Now let me search for the specific storefront repository and any additional documentation about the Next.js starter.
```
This block is not supported on your current device yet.
```

I have enough information now. Let me also search for information about the storefront documentation to understand the API structure better, as that will help create better example prompts.
```
This block is not supported on your current device yet.
```

Now I have comprehensive information about:
1. Main Medusa monorepo
2. Next.js Starter Storefront
3. Documentation links
4. API/SDK information

Let me compile this into a comprehensive demo planning document. I should include:
- Repository URLs to clone
- Documentation links
- Example prompts showing "docs vs code" scenarios
- Focus on frontend/storefront development scenariosNow let me create a comprehensive demo planning document with all the repository information, documentation links, and example prompts.
```
This block is not supported on your current device yet.
```

Good, I've created the comprehensive demo planning document. Now let me also check what's in the project files to see if there's more context I should incorporate.
```
This block is not supported on your current device yet.
```

The file is now in the outputs folder. Let me present it to the user.
```
This block is not supported on your current device yet.
```

Done. I've created a comprehensive demo planning document for the Medusa Context Engine MCP demo. The document includes:

1. Repository URLs to clone (main Medusa monorepo, Next.js storefront starter, B2B starter)
2. All official documentation links
3. 10 example prompts organized by category that demonstrate "docs vs code" advantages
4. Demo flow script
5. Key talking points
6. Repository structure references
7. Quick reference commands

This should give Techfren everything needed to plan and execute the demo showcasing how Augment Code's Context Engine MCP with external repos provides better, more specific answers than documentation alone.Here's your complete demo planning document for the Medusa Context Engine MCP demo.

**Key Repositories to Clone:**

| Purpose | Clone Command |
|---------|--------------|
| **Medusa Core** | `git clone https://github.com/medusajs/medusa.git` |
| **Next.js Storefront** | `git clone https://github.com/medusajs/nextjs-starter-medusa.git` |
| **B2B Starter** (backend + storefront) | `git clone https://github.com/medusajs/b2b-starter-medusa.git` |

**Documentation Links to Compare Against:**
- Main Docs: https://docs.medusajs.com/
- Storefront Guides: https://docs.medusajs.com/resources/storefront-development
- JS SDK: https://docs.medusajs.com/resources/js-sdk
- Store API: https://docs.medusajs.com/api/store

**The "Docs vs Code" Narrative:**

The doc includes 10 example prompts across categories like cart implementation, checkout flow, authentication, and debugging that demonstrate why querying actual code beats docs. For instance, asking about cart functionality:

- **Docs say**: "Use `sdk.store.cart.create()` and `sdk.store.cart.addLineItem()`"
- **Code shows**: The actual Server Action in `src/modules/cart/actions.ts` with cookie persistence, optimistic updates, error handling, and revalidation patterns

This directly supports the Auggie positioning around Context Engine MCP providing real-time, specific, actionable context versus generic documentation.\n
## human\n\ngive me the .json for the mcp config as well as the prompts i should try and the relevant page in docs\n
## assistant\n\nThe user wants:
1. A JSON config for the MCP setup to add Medusa repos as context
2. The specific prompts to try during the demo
3. The relevant documentation pages to compare against

Let me create a practical JSON config file and a quick reference sheet with prompts paired with their corresponding doc pages.
```
This block is not supported on your current device yet.
```

Now I have good information about how to configure MCP servers for Augment Code. Let me create a comprehensive file with:
1. The MCP JSON config for the Context Engine 
2. The prompts to try paired with their corresponding doc pages
3. A quick reference format for the demo

Based on the search results, the auggie-context-mcp uses:
- npx command with auggie-context-mcp@latest
- Requires Auggie CLI installed and authenticated
- Can set workspace_root to point to external repos

Let me create a practical demo reference file.
```
This block is not supported on your current device yet.
```

Now let me also create the actual JSON config files as separate files that can be easily copied/pasted.
```
This block is not supported on your current device yet.
```

Now let me copy both files to the outputs directory and present them together.
```
This block is not supported on your current device yet.
```

Done. Let me present both files to the user.
```
This block is not supported on your current device yet.
```

Done. I've given the user the MCP config JSON and the comprehensive prompts reference with doc pages.Here's everything you need for the demo:

**MCP Config JSON** (for Claude Desktop):
```json
{
  "mcpServers": {
    "auggie-context": {
      "command": "npx",
      "args": ["-y", "auggie-context-mcp@latest"]
    }
  }
}
```

**Top 5 Demo Prompts with Doc Comparisons:**

| # | Prompt | Doc Page |
|---|--------|----------|
| 1 | "How is the cart implemented? Show me add-to-cart and state persistence." | https://docs.medusajs.com/resources/storefront-development/cart |
| 2 | "Walk me through the checkout flow - shipping, payment, order completion." | https://docs.medusajs.com/resources/storefront-development/checkout |
| 3 | "How is customer authentication implemented? Show me login and sessions." | https://docs.medusajs.com/resources/storefront-development/customers/login |
| 4 | "How is the Medusa SDK configured? Where's the client initialized?" | https://docs.medusajs.com/resources/js-sdk |
| 5 | "How are prices formatted? Show me currency handling and variant pricing." | https://docs.medusajs.com/resources/storefront-development/products/price |

**The Money Shot:** For prompt #1 (cart), docs show `sdk.store.cart.create()` while the code reveals `src/modules/cart/actions.ts` with the actual Server Action containing cookie persistence, optimistic updates, error handling, and `revalidateTag("cart")`.\n
## human\n\nwrite me the script\n
## assistant\n\nThe user wants a full script for the demo. This should be a video/presentation script that walks through the Medusa Context Engine MCP demo, showing how code context beats documentation. I'll create a detailed script with timing, visuals, talking points, and the actual prompts to use.
```
This block is not supported on your current device yet.
```

Good, I created the script. Let me copy it to outputs and present it.
```
This block is not supported on your current device yet.
```

Now let me present the file to the user.
```
This block is not supported on your current device yet.
```

Done. Let me summarize what's in the script for the user.Here's your full demo script — about 14 minutes of content.

**Structure:**

| Section | Time | Core Beat |
|---------|------|-----------|
| Intro | 0:00-0:45 | "Docs show the API, code shows the implementation" |
| The Problem | 0:45-2:00 | Show Medusa cart docs, point out what's missing |
| Demo 1: Cart | 3:00-5:30 | Ask about cart, reveal actual Server Action file |
| Demo 2: Checkout | 5:30-8:00 | Multi-step flow, Stripe integration |
| Demo 3: Customization | 8:00-10:00 | "Add Save for Later" — contextual guidance |
| Comparison | 10:00-11:30 | Side-by-side: generic docs vs specific code |
| Outro | 13:30+ | When to use each, CTA |

**The Money Prompts:**

1. *"How is the cart implemented? Show me add-to-cart and how cart state persists."*
2. *"Walk me through the checkout flow—shipping, payment, order completion."*
3. *"I need to add a Save for Later feature. Where would I add this?"*

**Key Narrative:** One is a concept, the other is copy-paste-ready implementation.\n