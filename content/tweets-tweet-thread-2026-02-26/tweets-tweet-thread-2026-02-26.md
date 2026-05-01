---
kind: note
id: tweets-tweet-thread-2026-02-26
title: Tweet Thread — February 26, 2026
context: search-only
updatedAt: 1772165782111
tags: tweets
createdAt: 1772165782104
summary: Anthropic just dropped a statement on the Department of War and the entire Discord lost its mind 🔥 TechFren Discord — Feb 26, 2026 Recap 🧠 Perplexity Computer Goes Live — Perplexity launched "Compu...
references: tweets/tweet-thread-2026-02-26.md
---

# Tweet Thread — February 26, 2026

## TWEET 1 (Hype Overview + GIF)

Anthropic just dropped a statement on the Department of War and the entire Discord lost its mind

🔥 TechFren Discord — Feb 26, 2026 Recap

🧠 Perplexity Computer Goes Live — Perplexity launched "Computer," a multi-agent orchestration beast that runs 19 frontier AI models simultaneously with Claude Opus 4.6 as the brain. It delegates, searches, codes, and executes entire workflows for hours or months autonomously. Max subscribers get access at $200/mo. This is the most ambitious agent platform we've seen yet. https://www.perplexity.ai/products/computer

⚡ Flatagents Hits 10B Tokens — memgrafter unveiled flatagents, a YAML-declarative finite state machine engine for multi-agent orchestration. It's already processed 10 BILLION tokens on an M4 Mac mini powering arXiv paper digests. New tool-use branch dropped today — burned $0.67 on 15 successive Sonnet calls in testing. Deep technical exchange with elcapitan__ about FSM vs AG2 handoff patterns. https://github.com/memgrafter/flatagents

🔗 AG2's Secret Stream-Based OSS — elcapitan__ who works with the AG2 team teased an upcoming stream-based open source product that "took away 2 years of work." AG2 already has the best multi-agent conversational framework with event-driven handoffs and context variables. The new release operates in the A2A/AG-UI/MCP ecosystem. This could reshape agent orchestration. https://docs.ag2.ai/latest/docs/user-guide/advanced-concepts/orchestration/group-chat/introduction/

💣 Anthropic x Department of War — eyeseethru shared Anthropic's official statement on Department of War involvement. The Discord reaction was immediate and visceral: "we might all be using codex soon lol." Major implications for Claude's future and the AI ethics landscape. https://www.anthropic.com/news/statement-department-of-war

🛠️ Codex Sleep-Time Agents — peasantry1833 discovered OpenAI Codex has a brand new memory module running async background execution in two phases. Sleep-time agents are here. bird0861 connected it to the Letta team's sleep-time compute paper — speculative compute that runs while you're AFK. This is the future of agent persistence. https://github.com/openai/codex/tree/7326c097e3f66eb38c86b4ac470f7296ca8e277c/codex-rs/core/src/memories

🚀 Devstral 2 123B Drops — Mistral released Devstral-2-123B-Instruct, a massive 123B parameter coding model. The coding model wars just escalated another tier. bird0861 is already burning through Claude daily limits in 4 hours of hard cranking — the hunger for compute is real. https://huggingface.co/mistralai/Devstral-2-123B-Instruct-2512

💰 V100 Budget Build: £1,230 vs £2,800 5090 — glibglobler dropped a masterclass on linking 4 used V100 GPUs via NVLink for 2x the VRAM and comparable ML performance to a 5090 at less than half the price. Custom threadripper cooler adapters, diesel generator power plans, and serious "AI central heating" energy. LM Studio's new Link feature enables distributed inference across the rig. https://lmstudio.ai/link

🔒 Openfang WASM Sandbox — hanamiko surfaced Openfang, a WASM sandbox for secure agent tool execution. In a world where agents are running code autonomously, isolated execution environments are critical infrastructure. memgrafter immediately dove in. https://github.com/RightNow-AI/openfang

📚 ML Digests: 100K+ Papers Summarized — memgrafter's ml-digests.ftl.cc has summarized over 100K arXiv papers using a 7-9 agent network. Built entirely on flatagents running locally on an M4 Mac mini. The sleep-time compute paper discussion led right back to this — speculative compute powering knowledge infrastructure. https://ml-digests.ftl.cc

📝 SpeakMCP Rebrand & Vercel Chat SDK — techfren is exploring rebranding and design themes for SpeakMCP, with dark/light mode and AI-generated themes on the roadmap. Meanwhile, Vercel dropped their new Chat SDK for streamlined chat app development. https://vercel.com/changelog/chat-sdk

Thread below with deep dives on each 👇

---

## TWEET 2 (Perplexity Computer Deep Dive)

🧠 PERPLEXITY COMPUTER — THE 19-MODEL ORCHESTRATOR

Perplexity just launched the most ambitious agent platform yet. Computer isn't another chatbot wrapper — it's a full orchestration system that routes tasks across 19 frontier AI models with Claude Opus 4.6 as the central coordinator.

How it works: You describe an outcome. Computer breaks it into tasks and subtasks, spawning sub-agents for web research, document generation, data processing, and API calls. One agent drafts a document while another gathers the data it needs. The coordination is automatic and asynchronous.

Each task runs in an isolated compute environment with a real filesystem, real browser, and real tool integrations. Workflows can run for hours or even months. You can run dozens of Computers in parallel.

Available to Max subscribers at $200/month with per-token billing. This is the convergence of model-agnostic AI — not built on any single model, but orchestrating all of them.

rahul00009 shared the live demo: https://www.perplexity.ai/computer/live

The implication is massive: if Perplexity can successfully orchestrate 19 models, the "best model" debate becomes irrelevant. It's about the best system.

---

## TWEET 3 (Flatagents + AG2 Deep Dive)

⚡ FLATAGENTS VS AG2: THE AGENT FRAMEWORK WARS

Two major agent frameworks collided in today's discussion.

memgrafter's flatagents is a YAML-declarative finite state machine engine. Everything is config-driven — agents, transitions, states — declared in YAML. Under the hood, flatmachines orchestrate each other as FSMs. It's already processed 10B+ tokens powering ml-digests.ftl.cc, summarizing 100K+ arXiv papers on an M4 Mac mini with a 7-9 agent network.

Today's new tool-use branch burned $0.67 on 15 Sonnet calls in testing. The tradeoff: declarative simplicity vs runtime cost.

On the other side, elcapitan__ works with AG2 — arguably the OG multi-agent conversational framework. AG2's killer features: event-driven handoffs, context variables, and group chat orchestration that gives you fine-grained control over agent-to-agent transitions.

The bombshell: AG2 has a secret stream-based OSS product coming that elcapitan__ says "took away 2 years of work." It operates in the full A2A/AG-UI/MCP ecosystem.

memgrafter's take: "I don't think frameworks are even relevant in a world of bespoke software." The real insight — if you're a programmer, software is nearly free now. But frameworks still matter for the orchestration layer.

https://github.com/memgrafter/flatagents
https://docs.ag2.ai/latest/docs/user-guide/advanced-concepts/orchestration/group-chat/introduction/

---

## TWEET 4 (Anthropic DoW Deep Dive)

💣 ANTHROPIC x DEPARTMENT OF WAR

eyeseethru dropped the link that stopped the chat: Anthropic's official statement on Department of War involvement.

https://www.anthropic.com/news/statement-department-of-war

The immediate reaction in Discord was telling — "uh oh... we might all be using codex soon lol." The implication: if Anthropic is working with DoW, developers who chose Claude specifically for its safety-first positioning may need to reassess.

This comes at a critical time. Claude Code and Claude Max have become essential infrastructure for many builders in the community. bird0861 is burning through daily Claude limits in 4 hours. The dependency is real.

The broader AI ethics question: Can a company maintain its safety-first brand while engaging with military applications? The Discord consensus leaned skeptical.

---

## TWEET 5 (Codex Memory + Sleep-Time Compute Deep Dive)

🛠️ CODEX SLEEP-TIME AGENTS ARE HERE

peasantry1833 discovered something wild in the Codex codebase: a brand new memory module with async background execution.

https://github.com/openai/codex/tree/7326c097e3f66eb38c86b4ac470f7296ca8e277c/codex-rs/core/src/memories

The module "runs asynchronously in the background and executes two phases in order: Phase 1, then Phase 2." peasantry1833 immediately called it: "sleep time agents."

bird0861 connected the dots to the Letta team's sleep-time compute paper (arxiv 2504.13171) — the idea of doing useful compute while the user is away, beyond just test-time inference scaling.

memgrafter called it "mega relevant" for speculative compute — pre-computing likely next steps so the agent is ready when you return. This is the bridge between reactive chat and proactive agent behavior.

bird0861 is already planning to hook up a local model to Obsidian that "runs while I sleep — making notes about notes, researching my notes." The sleep-time compute future is being built right now in hobbyist setups.

https://arxiv.org/abs/2504.13171

---

## TWEET 6 (V100 Budget Build + Hardware Deep Dive)

💰 V100 BUDGET BUILD: £1,230 FOR 5090-CLASS ML

glibglobler dropped a full hardware masterclass on building a budget ML rig with used V100 GPUs.

The breakdown:
• V100 GPU: £72 each (reverse-engineered PCIe adapter from a Chinese engineer 4 years ago)
• PCIe adapter: £46
• Custom cooler: DIY threadripper cooler adapter to avoid £100+ server coolers
• 4-way SXM2 NVLink board: £400
• Total for 4 GPUs: ~£1,230

What you get: 4x V100s with 64GB total HBM2 (faster than GDDR), ~20K CUDA cores, and NVLink allowing them to function as one large GPU. Comparable ML performance to an RTX 5090 (£2,800) with 2x the VRAM.

The caveats: 300W per GPU (60% efficiency of modern cards), and "absolutely terrible" performance on quantized LLM models — HBM2 shines on full-precision ML workloads.

Power solution? glibglobler is considering a biogas plant running on duckweed and green waste. "AI central heating" in winter. memgrafter's response: "Diesel punk based AI future."

LM Studio's new Link feature was highlighted for distributed inference across these setups. https://lmstudio.ai/link

---

## TWEET 7 (Devstral + Coding Tools Deep Dive)

🚀 DEVSTRAL 2 123B + THE CODING MODEL ARMS RACE

Mistral dropped Devstral-2-123B-Instruct — a 123B parameter beast purpose-built for coding tasks.

https://huggingface.co/mistralai/Devstral-2-123B-Instruct-2512

This lands in an increasingly crowded field. The coding model wars are intensifying: Claude Code, Codex, Cursor, Droid, Kilo Code, and now Devstral 2 at 123B parameters.

bird0861 is the canary in the coal mine — burning through Claude Pro daily limits in 4 hours of hard cranking. "I'm realizing how much of a bottleneck I am. I only maintain that level of productivity when I already know what I'm doing."

The real insight from the ai-coding channel: the bottleneck has shifted from compute to human decision-making. UX design takes bird0861 3-4 days to 2 weeks to think through, while the AI builds in hours.

Other coding tools discussed:
• Factory AI's Droid with BYOK support: https://docs.factory.ai/cli/byok/overview
• Pilot agent ("more tokens, no control"): https://github.com/espennilsen/pilot
• GEPA Sudoku Solver — novel optimization: https://blog.mariusvach.com/posts/gepa-sudoku-solver

---

## TWEET 8 (WASM + Security Deep Dive)

🔒 OPENFANG: WASM SANDBOXES FOR THE AGENT ERA

As agents gain the ability to execute code autonomously, security becomes critical infrastructure. hanamiko surfaced Openfang — a WASM sandbox that bundles tools for secure agent execution.

https://github.com/RightNow-AI/openfang

Why this matters: every agent framework (flatagents, AG2, LangGraph, Codex) eventually needs to run untrusted code. WASM sandboxes provide isolation without the overhead of full VMs or containers.

memgrafter immediately dove in, tagging the channel: "anyone looked at wasm sandboxes? Pretty wild!"

This connects to the broader theme of today's discussions — the infrastructure layer for agents is being built in real-time. Orchestration (Perplexity Computer, flatagents, AG2), persistence (Codex sleep-time memory), and now security (Openfang WASM).

The agent stack is crystallizing: orchestration → memory → security → execution.

---

## TWEET 9 (Leaderboard & CTA)

🏆 Today's Top Contributors
memgrafter: 124 msgs
elcapitan__: 115 msgs
peasantry1833: 64 msgs
bird0861: 58 msgs
sai_revanth_12: 45 msgs

━━━━━━━━━━━━━━━━━━━━━━━━━━━

536 messages | 30 builders | 18 channels

Join TechFren: https://discord.gg/gAnSF8tA
