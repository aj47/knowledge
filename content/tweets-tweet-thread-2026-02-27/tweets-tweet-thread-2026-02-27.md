---
kind: note
id: tweets-tweet-thread-2026-02-27
title: Tweet Thread — February 27, 2026
context: search-only
updatedAt: 1772265492629
tags: tweets
createdAt: 1772265492621
summary: Anthropic just told the Pentagon "no" — refusing autonomous weapons and mass surveillance while OpenAI and xAI folded. Meanwhile, OpenAI's Codex Windows app launched and NOTHING works 💀
references: tweets/tweet-thread-2026-02-27.md
---

# Tweet Thread — February 27, 2026

## Tweet 1: Hype Overview (attach 1-banner.gif)

Anthropic just told the Pentagon "no" — refusing autonomous weapons and mass surveillance while OpenAI and xAI folded. Meanwhile, OpenAI's Codex Windows app launched and NOTHING works 💀

🔥 TechFren Discord — Feb 27 Recap

🧠 Anthropic vs. The Pentagon — Dario Amodei published a historic statement refusing the Department of Defense's demands for unrestricted AI access. Two hard red lines: no mass domestic surveillance of Americans, and no fully autonomous weapons (no humans in the loop = no deal). This came less than 24 hours before Defense Secretary Pete Hegseth's ultimatum deadline. The Verge confirmed OpenAI and xAI had already agreed to the new terms. Anthropic is the first frontier AI lab to publicly refuse — forgoing hundreds of millions in potential revenue. The Discord exploded when hanamiko dropped the link. This is the most significant AI policy moment of 2026 so far.

💀 OpenAI Codex Windows Launch Disaster — OpenAI shipped Codex for Windows and it was immediately DOA. lordsilver reported nothing works, Reddit threads flooded with bug reports. bird0861 went on a legendary rant about how badly Windows sucks, noting the entire Disaster Recovery industry has abandoned it and PowerShell is "routinely the shittest shell to make any software for." Community consensus: they should hire real SWEs instead of vibecoders. memgrafter dropped the perfect take: "Windows has been offshore vibe coding since the 00s."

⚡ GPT-5.3-Codex Getting Dumber — Multiple users reported severe performance degradation in Codex. yeehaw1155 said it "feels dumber" and keeps forgetting CI/CD configs. memgrafter confirmed and built a real-time checker extension using Pi to detect model downgrades to GPT-5.2. GitHub issue #12446 on openai/codex has users describing the regression as a "frontal lobotomy." The previous routing bug (forced 5.2 downgrade) was supposedly fixed, but 5.3 itself now seems intentionally throttled.

🛠️ GitHub Copilot CLI Goes GA — sweet_potet called it "underrated" and the community agreed. GitHub Copilot CLI just hit general availability with full agentic coding: background delegation (prefix & to offload tasks), autopilot mode, plan mode, and built-in specialized agents (Code Review, Explore, Task, Plan). Supports GPT-5.3-Codex at xhigh reasoning — the VS Code extension defaults to medium. pierrunoyt tried it on the spot and immediately felt the difference. Less bloated, cleaner context, and it edits files directly.
https://github.com/features/copilot/cli

🔗 Perplexity pplx-embed-v1 — New SOTA embedding models just dropped. Built on Qwen3 with bidirectional attention and diffusion-based pretraining — a novel approach that makes embeddings resilient to noisy web text. The 4B INT8 model tops MTEB benchmarks while storing 4x more pages per GB than FP32 alternatives. Two variants: pplx-embed-v1 for search queries and pplx-embed-context-v1 for RAG document chunks. MIT licensed.
https://huggingface.co/perplexity-ai/pplx-embed-v1-4b

🏗️ Budget AI Inference Cluster — bird0861 and memgrafter went deep on building home inference clusters from Lenovo ThinkCentre M920Q tiny PCs ($85-100 on eBay). 4 units connected via 10GbE = 512GB combined memory running llama.cpp RPC mode for distributed inference. memgrafter already runs a k3s cluster with Pi agents managing hosts via Ansible playbooks. bird0861 priced out Core Ultra Series 2 builds with 256GB DDR5 as the high-end option. The local AI infrastructure rabbit hole is DEEP.

🔧 Pi Auto-Merger Git Workflow — memgrafter shared a killer git workflow where each Pi coding session gets a unique change ID and its own git index against the total dirty state. A CLI tool handles reconciliation — no merge conflicts ever. If worktrees get corrupted, you just commit the dirty state and sort it out later. Community agreed this beats traditional worktree approaches for multi-agent coding setups.

⚔️ Codex vs Claude Code vs Copilot CLI — yeehaw1155 asked "what's the verdict?" and it turned into a full showdown. pierrunoyt noted Codex reads files via shell commands instead of direct read (slower than Cursor). sweet_potet championed Copilot CLI + GPT-5.3-Codex xhigh as the sweet spot. sai_revanth_12 confirmed the file reading inefficiency persists across all harnesses. The consensus: Codex has the strongest model but the worst tooling, Copilot CLI is the dark horse.

🎨 Pencil.dev AI Design Tool — hamzam. shared Pencil.dev with Figma import and Claude MCP integration. Workflow: design in HTML → paste to Figma → import into Pencil for AI-powered iteration. sai_revanth_12 mentioned Open Pencil as an open-source alternative.
https://www.pencil.dev

📱 Tauri Mobile + On-Device AI — pierrunoyt's Locale translation app sparked a deep discussion about mobile AI. hanamiko explained you need Mac toolchain for iOS builds and suggested quantized sub-1B models via Apple CoreML or Google MediaPipe. The smallest viable translation model is 0.6B Gemma. The dream: fully offline translation on mobile with no cloud dependency.

Thread below with deep dives on each 👇

## Tweet 2: Anthropic vs Pentagon Deep Dive

🧠 ANTHROPIC TELLS THE PENTAGON "NO"

This is arguably the most significant AI policy moment of 2026.

Dario Amodei published a statement on Feb 26 — less than 24 hours before Defense Secretary Pete Hegseth's ultimatum deadline — refusing to agree to the Pentagon's new contract terms demanding unrestricted access to Anthropic's AI.

Two hard red lines that Anthropic will not cross:

1. No mass domestic surveillance — Amodei argued that AI-powered surveillance "presents serious, novel risks to our fundamental liberties" and that current law hasn't caught up with AI capabilities. The government can already purchase Americans' movement data, browsing history, and associations without a warrant. AI makes it possible to assemble this scattered data into comprehensive profiles — automatically and at massive scale.

2. No fully autonomous weapons — Partially autonomous weapons (like those in Ukraine) are fine. But weapons that take humans entirely out of the loop? Hard no. Amodei's position: the technology isn't reliable enough, and removing human judgment from lethal force decisions crosses a fundamental ethical line.

The context makes this even more dramatic: OpenAI and xAI reportedly already agreed to the new terms. Anthropic is alone in refusing. Amodei was summoned to the White House for a meeting with Hegseth himself, who issued the ultimatum directly.

Anthropic has already forfeited hundreds of millions cutting off Chinese military-linked companies from Claude access. This isn't performative — they're backing it with real revenue losses.

The Discord reaction was electric. hanamiko dropped the link and lordsilver noted he "couldn't make any sense of" the recap mention until realizing it was separate breaking news.

https://www.anthropic.com/news/statement-department-of-war

## Tweet 3: Codex Windows Disaster Deep Dive

💀 OPENAI CODEX WINDOWS LAUNCH = DOA

OpenAI shipped the Codex desktop app for Windows today and it was immediately broken. lordsilver's review: "nothing works lmao." Reddit's r/codex was flooded with bug reports.

The community reaction was merciless:

lordsilver: "maybe they should hire some real SWE instead of vibecoders"
bird0861: went on a legendary rant about Windows, calling PowerShell "routinely the shittest shell to make any software for" and noting the entire Disaster Recovery industry has abandoned Windows
memgrafter: "Windows has been offshore vibe coding since the 00s"

bird0861 made a great point about attribution: "how much of that is windows fault vs the vibers at OAI, I do not think it would be easy to settle." Fair — but when your flagship developer tool can't run on the world's most popular desktop OS, that's a shipping problem.

This compounds the GPT-5.3-Codex degradation issue. GitHub issue #12446 on openai/codex documents "severe performance degradation" with users describing the model as having undergone a "frontal lobotomy." The previous routing bug (forced downgrade to 5.2) was supposedly fixed, but 5.3 itself now appears throttled.

memgrafter built a real-time checker extension using Pi to detect if you're being silently downgraded to 5.2. yeehaw1155 confirmed Codex "feels dumber" and keeps forgetting CI/CD configurations between sessions.

Not a great week for OpenAI's developer tools.

## Tweet 4: Copilot CLI Deep Dive

🛠️ GITHUB COPILOT CLI — THE DARK HORSE

GitHub Copilot CLI just hit general availability (Feb 25, 2026) and sweet_potet called it the most underrated coding tool right now. pierrunoyt tried it live in the Discord and immediately felt the difference.

Why CLI over the VS Code extension:
- Less bloated, cleaner UX
- VS Code extension defaults GPT-5.3-Codex to medium reasoning — CLI lets you run xhigh
- Extension uses open tabs/terminals as context (noisy) — CLI keeps context clean
- Extension only reads lines 1-100 of files — CLI doesn't have this limitation
- Direct file editing without the extension overhead

But the GA release is much bigger than "better than the extension." It's a full agentic development environment:

- Background delegation: prefix any prompt with & to offload work to the cloud
- Autopilot mode: fully autonomous execution without approval stops
- Plan mode (Shift+Tab): builds structured implementation plans before coding
- Built-in specialized agents: Code Review, Explore, Task, Plan — running in parallel
- MCP server support for custom tool integration
- Model choice: Claude Opus 4.6, Sonnet 4.6, GPT-5.3-Codex, Gemini 3 Pro

Install: npm install -g @github/copilot (or brew install copilot-cli)

https://github.com/features/copilot/cli

## Tweet 5: Perplexity Embeddings Deep Dive

🔗 PERPLEXITY DROPS SOTA EMBEDDING MODELS

pplx-embed-v1 just dropped and it's genuinely novel. Built on Qwen3 architecture with two key innovations:

1. Bidirectional attention — Most LLMs use causal (forward-only) attention. For embeddings, you need full context awareness. pplx-embed flips the architecture to process all tokens simultaneously, producing richer hidden state representations.

2. Diffusion-based pretraining — Usually seen in image generation, Perplexity applied diffusion to text embeddings. The model learns to reconstruct clean semantic signals from noisy/fragmented input — critical for messy web-scale data.

The results are impressive:
- 4B INT8 model tops MTEB retrieval benchmarks
- Stores 4x more pages per GB than FP32 alternatives
- Binary variant stores 32x more with only 1.5-point performance drop
- pplx-embed-context-v1-4B hits 81.96 on ConTEB (contextual retrieval benchmark), beating voyage-context-3 at 79.45

Two specialized variants:
- pplx-embed-v1: for search queries and independent text
- pplx-embed-context-v1: for RAG document chunks (handles query-document asymmetry)

Available in 0.6B and 4B sizes, MIT licensed, 32K context window.

Paper: "Diffusion-Pretrained Dense and Contextual Embeddings" (arxiv:2602.11151)

https://huggingface.co/perplexity-ai/pplx-embed-v1-4b

## Tweet 6: Home Inference Cluster Deep Dive

🏗️ BUILDING A $400 AI INFERENCE CLUSTER

bird0861 and memgrafter went deep on budget home inference setups and the numbers are surprisingly viable.

The star of the show: Lenovo ThinkCentre M920Q tiny PCs. $85-100 on eBay with Intel i5-8500T, 16GB RAM, 256GB SSD. memgrafter already has 5 of them running a k3s cluster.

The math: 4 units connected via 10GbE = 512GB combined memory using llama.cpp RPC mode for distributed inference. That's twice the memory of a single high-end workstation build, at a fraction of the cost.

memgrafter's setup is next level — Pi agents manage the hosts via Ansible playbooks. One unit runs Pi itself, orchestrating the others. When a node goes down, Pi diagnoses and fixes it.

bird0861 also priced out the premium route: Core Ultra Series 2 (supports 256GB DDR5 max RAM), RTX Pro 5000 at $4,700. But the 4500 got snapped up by system integrators and scalpers. Microcenter has them but limit 1 per household.

The GPU decision tree: keep the 4090 for gaming TV (HDMI 2.1), add a single 4500 for inference (Pro cards only have DisplayPort). Or go all-in on the ThinkCentre cluster approach.

memgrafter also forecasted 12th gen Intel processors hitting optimal price points in 2026-2027, making the M80Q an even better target.

caycfigs asked about Pi extensions — memgrafter's advice: "ignore the noise." Vanilla Pi + bash is what models are trained on. He wrote one custom tool: auto-commit changes.

https://www.servethehome.com/lenovo-thinkcentre-m920-and-m920q-tiny-guide-and-review/

## Tweet 7: Pi Workflow + Coding Tools Deep Dive

🔧 PI AUTO-MERGER & THE CODING TOOLS WARS

memgrafter's Pi auto-merger workflow is genuinely clever:

Each Pi coding session lazily gets a unique change ID and its own git index against the total dirty state of the repo. Sessions reconcile manually or via CLI tool. No conflicts ever — the latest state is always in dirty or merged.

His take: "Probably you have to have an IQ above 70 to use changeset which is why worktree is the default." Spicy but fair — the changeset approach requires understanding git internals.

Meanwhile, the Codex vs Claude Code vs Copilot CLI debate raged all day:

pierrunoyt tested Codex and noted it runs shell commands to read files instead of using direct file access tools — significantly slower than Cursor. sai_revanth_12 confirmed this happens across all harnesses, even OpenCode.

sweet_potet's verdict: GitHub Copilot CLI + GPT-5.3-Codex xhigh is the sweet spot. The model gets the highest reasoning setting only in CLI mode.

bird0861 went down a rabbit hole combining simonw's 'llm' CLI tool with Pi agents. The idea: use llm's sqlite DB as shared storage, Pi agents write to it, llm provides the shell interface. "One thing that annoys me about current shell assistants except for simon's llm is that they're hardly really assistive in the shell."

caycfigs shared Pi's programmatic/RPC mode for multi-language integration — making it easy to embed Pi into other applications.

peasantry1833 also noted that both Pi and Codex fail at WebSocket transport — Pi falls back to HTTP without trying WSS, and Codex attempts WSS but can't connect. SSE remains the convention for streaming.

## Tweet 8: Leaderboard & CTA

🏆 Today's Top Contributors
bird0861: 106 msgs
memgrafter: 83 msgs
sai_revanth_12: 60 msgs
pierrunoyt: 58 msgs
hanamiko: 55 msgs

━━━━━━━━━━━━━━━━━━━━━━━━━━━

647 messages | 35 builders | 17 channels

Join TechFren: https://discord.gg/techfren
