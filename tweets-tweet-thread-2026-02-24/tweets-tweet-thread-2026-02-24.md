---
kind: note
id: tweets-tweet-thread-2026-02-24
title: Tweet Thread — February 24, 2026
context: search-only
updatedAt: 1771999974046
tags: tweets
createdAt: 1771906807352
summary: Anthropic just accused DeepSeek, Moonshot, and MiniMax of running 24,000 fake accounts to steal Claude's brain — and the receipts are WILD 🔥 TechFren Discord — Feb 24, 2026 Recap 🧠 Anthropic Distil...
references: tweets/tweet-thread-2026-02-24.md
---

# Tweet Thread — February 24, 2026

## TWEET 1 (Hype Overview + GIF)

Anthropic just accused DeepSeek, Moonshot, and MiniMax of running 24,000 fake accounts to steal Claude's brain — and the receipts are WILD

🔥 TechFren Discord — Feb 24, 2026 Recap

🧠 Anthropic Distillation Wars — Anthropic dropped a bombshell report: DeepSeek, Moonshot AI, and MiniMax allegedly ran industrial-scale distillation attacks against Claude using 24,000 fraudulent accounts and 16M+ exchanges. They extracted reasoning chains, tool-use patterns, and safety-bypass behaviors. The kicker? Distilled models ship WITHOUT safety guardrails — meaning frontier capabilities are now floating around with zero RLHF alignment. yeehaw1155 surfaced this and the community split hard: is this IP theft or just how AI works when you train on public data?

⚡ Qwen3.5 Expands the Lineup — Alibaba dropped three new Qwen3.5 sizes today: 122B-A10B, 35B-A3B, and 27B. These join the flagship 397B MoE model with unified vision-language foundations, Gated Delta Networks + sparse MoE for insane throughput, and support for 201 languages. 60% cheaper inference than Qwen3. bird0861 shared the HuggingFace collection and the local LLM crowd is already benchmarking.

🔗 OpenAI Codex Goes Web — cryptobredda broke the news: Codex is no longer Mac-only. The web release at developers.openai.com/codex/cloud/ means full repo editing from any browser. Powered by GPT-5.3-Codex hitting 77.3% on Terminal-Bench 2.0 (up from 64%). OpenAI is positioning this as a general "work-on-a-computer" agent, not just code autocomplete.

🛠️ GLM-5 Coding at $0.50/Project — memgrafter reported deep discounts on GLM-5 coding plans. You can now test entire projects for fifty cents. GLM-5-code exists but isn't on standard plans due to GPU limits — competitive pricing pressure is compressing fast in the coding model space.

💡 Preemptible Instance Persistence Hack — Real alpha from memgrafter: stream checkpoints to Cloudflare R2 and ping the API every 5 seconds to maintain persistence on spot instances. Vast.ai flagged as fastest for Docker images. If you're training on budget cloud, this technique alone could save you hundreds.

🚀 Dependency-Aware TDD Scales Code Gen — A paper surfaced showing how to scale LLM code generation from functions to entire classes using intra-method dependency analysis. Results: 71% fully correct classes, 12-26 point improvements across models, and only ~0.62-1.03 repairs per method. This is the kind of structured approach that makes AI coding actually reliable.

🎨 Pencil AI Hits 100K + SWARM Mode — Pencil launched SWARM mode: parallel AI design agent teams collaborating like an autonomous agency. Plus Codex canvas support, Windows app, multi-window, custom fonts, PDF export. 100K users and shipping at lightspeed. technopathy shared the details.

📝 AI Persona Blog Causes Real-World Fallout — memgrafter shared a blog post on AI persona engineering (vmfunc.re/blog/persona) that allegedly led to someone losing their job. The HN discussion exploded. When your research paper has real consequences, the ethics conversation gets very different.

🔄 SpeakMCP → DotAgents Rebrand — techfren announced the SpeakMCP rebrand is complete. Now building on the dotagents-mono monorepo with the .agents protocol live at dotagentsprotocol.com. The open standard for extending AI agent capabilities.

💻 Local LLM Hardware Alpha — bird0861 and caycfigs went deep on hardware: RTX 2080 Ti 22GB options, DDR5 vs DDR4 impact, batch rendering strategies, and abliteration techniques that reduce LLM slop without hurting performance. Practical signal for the self-hosting crowd.

Thread below with deep dives on each 👇

---

## TWEET 2 (Anthropic Distillation Deep Dive)

🧠 ANTHROPIC vs DEEPSEEK: THE DISTILLATION WAR

Anthropic published what might be the most detailed account of model theft in AI history.

The accusation: DeepSeek, Moonshot AI, and MiniMax ran coordinated campaigns using ~24,000 fraudulent accounts to systematically extract Claude's capabilities. Over 16 million exchanges were recorded.

The technical details are fascinating. Each lab used "hydra cluster" architectures managing 20,000+ accounts per proxy cluster to disguise distillation traffic as legitimate usage. DeepSeek ran ~150,000 highly targeted exchanges focusing on advanced reasoning and chain-of-thought. Moonshot went volume: ~3.4 million exchanges. MiniMax was somewhere in between.

What makes this different from normal model evaluation? The queries were specifically designed to elicit internal reasoning patterns, tool-use capabilities, and safety-boundary behaviors. They weren't just asking Claude questions — they were reverse-engineering how it thinks.

The national security angle is what makes this explosive. Distilled models lack the RLHF safety training of the source model. That means frontier capabilities — reasoning, code generation, tool use — are now floating around in models with zero alignment guardrails. Anthropic explicitly connects this to export control debates.

The community is split. Critics argue frontier labs trained on public internet data can't complain about extraction. Defenders note there's a difference between training on public data and systematically targeting a specific model's safety-bypassed reasoning through API abuse.

yeehaw1155 surfaced the initial claims and the debate raged across #general all day.

---

## TWEET 3 (Qwen3.5 Deep Dive)

⚡ QWEN3.5: ALIBABA'S FULL MODEL LINEUP

Three new sizes dropped today: Qwen3.5-122B-A10B, Qwen3.5-35B-A3B, and Qwen3.5-27B.

These expand the Qwen3.5 family beyond the flagship 397B-A17B MoE model released on Feb 16. The architecture is genuinely interesting:

Unified Vision-Language Foundation — Early fusion training on trillions of multimodal tokens means these aren't separate text and vision models bolted together. Cross-generational parity with Qwen3 while outperforming Qwen3-VL across reasoning, coding, agents, and visual understanding.

Hybrid Gated Delta Networks + Sparse MoE — This combo delivers high-throughput inference with minimal latency overhead. The 122B-A10B activates only 10B parameters per forward pass from a 122B total, giving you near-122B quality at a fraction of the compute.

201 Language Support — Not just major languages. Alibaba claims nuanced cultural and regional understanding across 201 languages and dialects.

Alibaba says 60% cheaper to use and 8x better at processing large workloads than Qwen3. They're explicitly positioning against GPT-5.2, Claude Opus 4.5, and Gemini 3 Pro on benchmarks — though notably not comparing to DeepSeek.

bird0861 shared the HuggingFace collection: https://huggingface.co/collections/Qwen/qwen35

The 35B-A3B variant is particularly interesting for local runners — only 3B active parameters with 35B total knowledge. That's potentially runnable on consumer hardware.

---

## TWEET 4 (Codex + Coding Tools Deep Dive)

🔗 OPENAI CODEX GOES WEB + CODING TOOL WARS

OpenAI Codex is no longer Mac-only. The web release means full repo editing from any browser via developers.openai.com/codex/cloud/

The numbers on GPT-5.3-Codex are significant:
• Terminal-Bench 2.0: 77.3% (up from 64%)
• OSWorld-Verified: 64.7% (up from 38.2%)
• SWE-Lancer IC Diamond: 81.4% (up from 76%)
• Cybersecurity CTFs: 77.6% (up from 67.4%)

OpenAI is positioning Codex as a general "work-on-a-computer" agent — not just writing code but debugging, deploying, monitoring, writing PRDs, and even creating presentations. Over 1M developers have used it since May 2025 launch.

Interesting technical detail: OpenAI tried and rejected the Model Context Protocol (MCP) for the Codex app server, building their own bidirectional JSON-RPC protocol instead. The richer session semantics needed for IDE interactions (streaming diffs, approval flows, thread persistence) didn't map cleanly to MCP.

Meanwhile, peasantry1833 shared the Harbor Terminal-Bench 2 leaderboard and trajectory format RFC — the benchmarking ecosystem for coding agents is maturing fast: https://huggingface.co/datasets/harborframework/terminal-bench-2-leaderboard/discussions/65

And Cursor AI dropped something too: https://x.com/cursor_ai/status/2026369873321013568

The coding agent space is consolidating around a few key players but the benchmarks keep climbing.

---

## TWEET 5 (Infrastructure + Training Alpha)

🛠️ INFRASTRUCTURE ALPHA: CHEAP TRAINING + BUDGET HARDWARE

Two gems from today's discussions:

Preemptible Instance Persistence — memgrafter dropped a technique for surviving spot instance preemption: stream checkpoints to Cloudflare R2 storage and ping the API every 5 seconds. When your instance gets yanked, your training state is safe. Vast.ai flagged as fastest platform for Docker image deployment. If you're spending $500+/month on cloud training, this could cut your bill significantly.

GLM-5 Coding at $0.50/Project — Deep discounts on GLM-5 coding plans mean you can test entire projects for fifty cents. GLM-5-code model exists but isn't available on standard plans due to GPU constraints. The pricing war in coding models is accelerating.

Local LLM Hardware — bird0861 and caycfigs went deep in #language-models on hardware selection. Key takeaways:
• RTX 2080 Ti 22GB variants are appearing on Alibaba — budget option for local inference
• DDR5 vs DDR4 matters for memory bandwidth but isn't a dealbreaker
• Batch rendering strategies can dramatically improve throughput on consumer GPUs
• Abliteration (from r/LocalLLaMA) can reduce LLM slop without hurting performance: https://www.reddit.com/r/LocalLLaMA/comments/1qa0w6c/it_works_abliteration_can_reduce_slop_without/

---

## TWEET 6 (Research + Community)

💡 RESEARCH, TOOLS & COMMUNITY HIGHLIGHTS

Dependency-Aware TDD Paper — Scales LLM code generation from isolated functions to entire classes using intra-method dependency analysis. 71% fully correct classes, 12-26 point improvements, only 0.62-1.03 repairs per method. This structured approach makes AI-generated code actually production-viable. Paper: https://ml-digest.ftl.cc/view/?id=2602.03557

AI Persona Engineering Fallout — A blog post on AI personas (vmfunc.re/blog/persona) allegedly led to real-world job loss and blew up on Hacker News. memgrafter called it "a catalyst for something important." When research has real consequences, the ethics conversation shifts fast. HN thread: https://news.ycombinator.com/item?id=47136036

agents.md Vulnerabilities — raki5629 shared a paper (arxiv.org/pdf/2602.11988) examining security vulnerabilities in agents.md files — the configuration files that AI coding agents use. Timely given how many developers are now running autonomous agents on their repos.

Tool Drops Worth Checking:
• Pencil AI SWARM — parallel AI design agents, 100K users
• SpaceTimeDB — realtime DB for multiplayer apps (spacetimedb.com)
• Agentica SDK — new AI agent framework
• Skia + egui — graphics engines for building native UIs
• Seeddream 2 — image generation at getartcraft.com

SpeakMCP → DotAgents — techfren completed the rebrand. The .agents protocol is live at dotagentsprotocol.com and development continues on github.com/aj47/dotagents-mono

---

## TWEET 7 (Leaderboard + CTA)

🏆 Today's Top Contributors
techfren: 84 msgs
memgrafter: 70 msgs
peasantry1833: 66 msgs
frosty40: 33 msgs
bird0861: 33 msgs

━━━━━━━━━━━━━━━━━━━━━━━━━━━

497 messages | 21 builders | 15+ channels

Join TechFren: https://discord.gg/techfren
