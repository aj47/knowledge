---
kind: note
id: tweets-tweet-thread-2026-02-23
title: Tweet Thread 2026 02 23
context: search-only
updatedAt: 1771910384928
tags: tweets
createdAt: 1771899499183
summary: 🔥 TechFren Discord — Feb 23, 2026 Recap 444 messages | 27 builders | 15+ channels ━━━━━━━━━━━━━━━━━━━━━━━━━━━ 🤖 ANTHROPIC COMPUTER USE UPDATE DROPS Anthropic pushed a new Computer Use update today ...
references: tweets/tweet-thread-2026-02-23.md
---

🔥 TechFren Discord — Feb 23, 2026 Recap
444 messages | 27 builders | 15+ channels

━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 ANTHROPIC COMPUTER USE UPDATE DROPS

Anthropic pushed a new Computer Use update today and the server went wild. lordsilver was first in with "LESS GOOOOO" and pierrunoyt flagged it simultaneously. For anyone building agentic systems that interact with desktop UIs, this is a must-check — Anthropic keeps iterating fast on computer-use capabilities and every update meaningfully changes what's possible.

Announcement: https://x.com/anthropicai/status/2025997928242811253

━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 DELETING AGENTS.MD ACTUALLY BOOSTS LLM AGENT PERFORMANCE

This one broke people's brains. hamzam. dropped an arxiv paper showing that removing the AGENTS.md scaffolding file from your repo improves LLM agent performance. The counterintuitive finding sparked debate: if you're providing explicit instructions for the agent on how to operate, why does removing those instructions help?

The hypothesis: AGENTS.md files often introduce noise, over-constrain the model's reasoning, or create contradictions with in-context instructions. Less scaffolding overhead = more room for the model to reason. This has real implications for anyone designing agentic systems — the "more instructions = better" assumption is getting challenged.

Paper: https://arxiv.org/pdf/2602.11988

━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 OPENCLAW GOES ANDROID — AND LEAKS META AI SAFETY HEAD'S EMAILS

openal successfully ported OpenClaw to Android and dropped APK v2 on GitHub. Native Android implementation, available now.

Repo: https://github.com/friuns2/openclaw-android-assistant

But then it got spicy. lordsilver shared that OpenClaw was being used to scrape and publicly expose personal data — including email addresses belonging to the Head of AI Safety at Meta. The community had a field day. This is the dual-use problem in its rawest form: a powerful open tool that enables both legit power-user workflows and serious privacy violations. The irony of the Head of AI Safety having their data exposed via an AI tool was not lost on anyone.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ AMP HIDDEN CONFIG: UNLOCK CLAUDE SONNET 4.6 WITHOUT API KEYS

mx42 found the unlock: set `"amp.internal.model.smart": "anthropic:claude-sonnet-4-6"` in your Amp settings.json and you get direct access to Sonnet 4.6. No API key required if you're on a subscription.

Pair this with CLIProxyAPI (https://github.com/router-for-me/CLIProxyAPI) which acts as a proxy letting you use your Claude/Codex subscription in Amp or Codex directly — bypassing API key requirements entirely. mx42 also linked the core OpenAI→OpenAI translation logic: https://git.sr.ht/~maan2003/claus/tree/main/item/crates/vamp/src/api/openai.rs#L32

For devs already paying for subscriptions, this is free capability unlocked. pierrunoyt confirmed the CLIProxyAPI approach works and flagged an active issue thread on it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 SPEAKMCP MAJOR REFACTOR + iOS WEB APP LIVE

Two big SpeakMCP announcements from techfren today:

1. Modular .agents/ architecture PR is open. The refactor moves away from OpenCode's JSON format toward a Markdown + frontmatter system for skills and memories. Each skill is a .md file with structured frontmatter — more human-readable, easier to edit, easier to version control. PR: https://github.com/aj47/SpeakMCP/pull/1107

2. SpeakMCP remote is now live on iOS at https://app.speakmcp.com/ — web app form factor, works on mobile. techfren is also weighing a full rebrand to "techfriendbot" or a 2.0 release alongside this architectural shift.

frosty40 asked whether to switch now — answer: not yet, it's not in main. But it's coming.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ FDM1: FIRST FULLY GENERAL COMPUTER ACTION MODEL

eyeseethru and raki5629 dropped the link to SI's FDM1 — a model specifically built for fully general computer actions. Not a chatbot. Not a code assistant. A model trained to operate computers end-to-end without domain-specific fine-tuning.

Post: https://si.inc/posts/fdm1/
X thread: https://x.com/si_pbc/status/2025978959947784290

This is a different paradigm from current computer-use approaches. FDM1 is positioned as a foundation model for computer interaction — the kind of thing that, if it works, makes every desktop app and workflow automatable by default. Worth reading the full post.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 VIBEPROXY: USE CLAUDE CODE + CHATGPT SUBS WITHOUT API KEYS (macOS)

sai_revanth_12 shared Vibeproxy — a native macOS menu bar app that lets you tap into your existing Claude Code and ChatGPT subscriptions with AI coding tools, no API keys required.

Repo: https://github.com/automazeio/vibeproxy

MIT license, clean UX, lives in your menu bar. If you're already paying for Claude or ChatGPT subs and hate managing API keys + billing separately, this is a clean solution. The no-API-key angle is becoming a real theme — between this, CLIProxyAPI, and Amp's hidden config, the community is clearly tired of paying twice.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 GPS GEOLOCATION AI: 83% ACCURACY WITHIN 25KM FROM REDDIT IMAGES

huzzies shared a wild benchmark: an AI that scrapes Reddit images achieved 83% accuracy placing US county images within 25km, and 7.4% accuracy within 100 meters. No GPS metadata — pure visual inference from photos.

This is the state of geolocation AI right now. The privacy implications are significant: photos you post publicly can increasingly be used to pinpoint your location with high accuracy. The tech is getting good enough that even casually shared images carry meaningful location signal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 CHANGESET GIT EXTENSION: PREVENTING LLM AGENTS FROM STOMPING EACH OTHER

memgrafter introduced a Changeset git extension concept that addresses a real problem in multi-agent coding setups: agents overwriting each other's changes. The approach uses per-changeset git indexes, pi-locked files, and deliberately weak model commit messages to create a coordination layer that stops LLMs from colliding on shared codebases.

As agentic coding scales — multiple agents running in parallel on the same repo — this kind of coordination infrastructure becomes critical. Memgrafter's framing: it's not about making the LLM smarter, it's about making the environment safe for concurrent LLM operation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 PARALLEL.AI CLAIMS TO BEAT EXA FOR AI SEARCH

techfren flagged https://parallel.ai/benchmarks where Parallel.ai is claiming superior performance over Exa for AI-powered search and retrieval. If you're building RAG pipelines or search-augmented agents, Exa has been the go-to — but this benchmark is worth a look. Community reaction was curious but cautious (self-reported benchmarks, etc.).

━━━━━━━━━━━━━━━━━━━━━━━━━━━

🕸️ SPIDER.CLOUD + HARBOR TRAJECTORY FORMAT RFC

alexthelambo dropped Spider.cloud (https://spider.cloud/) — a new cloud platform for web automation and scraping, with a benchmark post comparing it directly against Firecrawl and Crawl4ai: https://spider.cloud/blog/firecrawl-vs-crawl4ai-vs-spider-honest-benchmark

On the agentic infra side, peasantry1833 shared Harbor's RFC for a standardized trajectory format for AI agent runs (https://github.com/laude-institute/harbor/blob/main/docs/rfcs/0001-trajectory-format.md) — a proposal to standardize how agent execution traces are recorded. Interoperability for agent logs is a problem the community has been circling for a while; this RFC is a serious attempt to solve it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏆 Top Contributors — Feb 23
techfren: 81 msgs
hamzam.: 65 msgs
pierrunoyt: 48 msgs
memgrafter: 43 msgs
lordsilver: 42 msgs

━━━━━━━━━━━━━━━━━━━━━━━━━━━

All-Time Points Leaderboard
techfren: 66 pts
hanamiko: 54 pts
bird0861: 48 pts
memgrafter: 32 pts
cryptobredda: 27 pts

━━━━━━━━━━━━━━━━━━━━━━━━━━━

Join TechFren: https://discord.gg/techfren
