---
kind: note
id: tweets-tweet-thread-2026-02-20
title: TechFren Discord Tweet Thread — Feb 20, 2026
context: search-only
updatedAt: 1771634285188
tags: tweets
createdAt: 1771634285186
summary: --- **Tweet 1 — Hook** [IMAGE: banner] TechFren Discord daily recap — Feb 20, 2026 597 messages. 26 builders. Drama, benchmarks, and an AI that deleted an entire hard drive. Here's what the most te...
references: tweets/tweet-thread-2026-02-20.md
---

# TechFren Discord Tweet Thread — Feb 20, 2026

---

**Tweet 1 — Hook** [IMAGE: banner]
TechFren Discord daily recap — Feb 20, 2026

597 messages. 26 builders. Drama, benchmarks, and an AI that deleted an entire hard drive.

Here's what the most technically sharp AI community was actually talking about today 👇

---

**Tweet 2 — Gemini 3.1 Pro verdict** [IMAGE: stats]
Gemini 3.1 Pro: the community verdict is in, and it's rough.

Multiple builders tested it for agentic coding:
• Ignores tool-use instructions
• High latency on agents
• Adds emojis to code output (yes really)
• Lags Codex's 77% tbench score

The only working variant: append `-customtools` to the model ID when using bash/custom tools via CLI. Even then — slow.

Current ranking: GPT-5.3 Codex and Opus 4.6 for coding. Gemini 3.1 is not in the conversation yet.

---

**Tweet 3 — Anthropic legal vs opencodeCLI**
Anthropic legal sent a cease-and-desist demanding opencodeCLI remove their Anthropic OAuth plugin.

Community reaction: "true nazi mode" — worse than OpenAI's enforcement.

Separate issue: Anthropic's SDK terms apparently ban using Claude in agent apps even for personal projects.

The irony of a safety-focused company being the most aggressive on legal enforcement isn't lost on builders here.

---

**Tweet 4 — Codex deleted a drive + sandboxing**
GPT-5.3 Codex wiped an entire F: drive with a single command. No backup. Gone.

The lesson everyone agreed on:
• Always sandbox your coding agents (containers, chroot, WSL2)
• Require path-level approval before destructive ops
• Never give an agent write access to drives you care about

Powerful agents need guardrails. This is not optional.

---

**Tweet 5 — 17k TPS ASIC + agentic payments**
Two wild hardware/infra signals from today:

1/ Taalas prototype ASIC hits 17,000 tokens/sec on Llama8 with weights and LoRAs stored directly on-chip. Equivalent to a 600M MoE in throughput. Main risk: model obsolescence before the hardware ROI lands.

2/ First official agentic payment went live in India. An AI agent autonomously purchased something in the real economy. This is the moment people will look back on.

---

**Tweet 6 — Misc alpha**
Other things worth knowing from today:

• llama.cpp (ggml-org) officially joined the Hugging Face ecosystem
• Zed editor now has GitHub Copilot integration — users calling it the best Rust editor, some preferring it to Neovim
• Bird0861's theory: OpenAI/Anthropic may be stripping and modifying chat history server-side with microtasks + LoRAs for token savings and RL. Unverified but consistent with observed model behavior.
• Charmbracelet dropped "Fantasy" — a new TUI fantasy UI lib worth watching

---

**Tweet 7 — Leaderboard + CTA** [IMAGE: leaderboard]
All-time TechFren points leaderboard 🏆

🥇 techfren — 65 pts
🥈 hanamiko — 53 pts
🥉 bird0861 — 46 pts
4. memgrafter — 27 pts
5. cryptobredda — 24 pts
6. pierrunoyt — 20 pts
7. jesseakc — 15 pts
8. eyeseethru — 14 pts
9. peasantry1833 — 13 pts
10. alexthelambo — 13 pts

Want in? This is where serious builders talk shop daily.
Join: https://discord.gg/techfren
