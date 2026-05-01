---
kind: note
id: tweets-tweet-thread-2026-03-02
title: Tweet Thread — March 02, 2026
context: search-only
updatedAt: 1772499418681
tags: tweets
createdAt: 1772499418675
summary: Human brain cells on a chip learned to play DOOM in a week — and that's not even the wildest thing that happened today 🔥 TechFren Discord — March 2, 2026 Recap 🧠 Brain Cells Play DOOM — Cortical La...
references: tweets/tweet-thread-2026-03-02.md
---

# Tweet Thread — March 02, 2026

## Tweet 1: Hype Overview (attach 1-banner.gif)

Human brain cells on a chip learned to play DOOM in a week — and that's not even the wildest thing that happened today

🔥 TechFren Discord — March 2, 2026 Recap

🧠 Brain Cells Play DOOM — Cortical Labs strapped 200,000 living human neurons onto a microchip and they learned to navigate, shoot, and survive in Doom within 7 days. No backpropagation. No gradient descent. Just raw biological plasticity. The neurons play like a confused beginner but they PLAY — in a full 3D environment with enemies, weapons, and real-time decisions. A massive leap from the 2021 Pong experiment. Biocomputing just got very real.

⚡ GLM SWE-1.6: 100x Compute, 10% Gains — The new SWE-1.6 finetuned models claim 100x more compute than SWE-1.5 but only squeezed out ~11% improvement on SWE-Bench Pro. The community did the math: "what is $1M times 100x?" Scaling laws are hitting a wall. Trained on GB200 NVL72 chips with NVFP4 precision, but RL-induced problems persist — overthinking, sequential tool calls, excessive self-verification. The returns are diminishing FAST.

🔗 Alpha-GPT-5.4 Leak — A public endpoint was spotted validating deleted Codex GitHub PR leaks. The claim: 2M token context window + stateful memory that remembers workflows, tools, and sessions across interactions. If real, this eliminates re-prompting entirely. Release rumored as early as next week. The community is split between "strawberry poasting" hype and "🧢 or no 🧢?" skepticism.

🛠️ Gemini 3.1 vs Claude for Agentic Coding — yeehaw1155 dropped a hot take: Gemini 3.1 is "significantly better for agentic/iterative coding... doing things Opus 4.5 and 4.6 never did." It handles trial-and-error like a real developer while Claude relies too much on docs. But the REAL insight: "it's more about the harness at this point — makes a bigger difference than the model." The harness > model debate is heating up.

💡 Ruder AI Agents = Better Reasoning — Scientists made LLMs process text sentence-by-sentence with toxicity injections and... they got BETTER at complex reasoning. bird0861 was skeptical of the clickbait headline but concluded: they changed the harness to allow interruption and it made conversations smoother. Could this technique help non-technical vibe coders write better prompts?

🚀 Qwen3.5 Small Models Drop — Three new Qwen3.5 releases hit HuggingFace: 9B, 4B, and 2B parameters. bird0861's benchmark analysis: "2B is really the smallest you can go without fine-tuning for your task." These are being compared against 120B OpenAI models — and holding their own in key benchmarks. The small model revolution continues.

🐍 Python's Prototyping Edge — memgrafter made the definitive case: "when you just need to fix it, you can go the short way." Chose litellm over Vercel AI SDK and Rust LLM SDKs. Python has "far less opinions" than performant languages and remains the velocity king for AI dev — even if it's "possibly an albatross for tons of big tech companies."

🏗️ Ballchain.app — AI Scaffolding > Text Gen — goldiestarrr tested Ballchain.app and praised it as "AI used for scaffolding instead of just generating text." Throw a half-formed idea at it and get structure: milestones, roles, next steps. More useful than another paragraph generator.

📖 The Clownpocalypse — hanamiko shared honnibal.dev's "Clownpocalypse" essay critiquing AI hype vs reality. "Really like this and wish everyone has read it." Essential Sunday grounding for the AI-pilled.

⛓️ ETH vs Solana: The TPS Debate Returns — cryptobredda sparked a war by suggesting buying ETH. lordsilver fired back: "24-65k+ TPS vs 15-30 TPS." But cryptobredda countered with data: Solana transactions are 1288 bytes max while ETH can handle 100s of kB. "TPS isn't the full story." bird0861 closed with the real question: "are DAOs ready for agentic corporations yet?"

Thread below with deep dives on each 👇

---

## Tweet 2: Brain Cells Play DOOM

🧠 BRAIN CELLS PLAY DOOM

The biggest biocomputing story of the year just dropped and it's wilder than the headline suggests.

WHAT HAPPENED:
Cortical Labs — an Australian biotech company — successfully trained living human brain cells to play the original 1993 Doom. Not Pong. Not Tic-tac-toe. DOOM — a full 3D first-person shooter with enemies, weapons, navigation, and real-time decision-making.

Their CL1 biological computer contains approximately 200,000 living human neurons derived from stem cells, grown directly on a multi-electrode array microchip. 59 electrodes with response times under 1 millisecond. The neurons float in nutrient solution, physically linked to the chip.

Here's how it works: Doom's visual stream gets converted into electrical stimulation patterns sent to different neuron clusters. Different electrode regions fire based on enemy position and environment layout. The neurons generate response patterns that map to game actions — move, shoot, turn. A closed-loop feedback system provides positive and negative reinforcement, and the neurons literally learn through natural biological plasticity. No backpropagation. No gradient descent. Just neurons being neurons.

bird0861 shared the story in #general and the reaction was immediate fascination.

WHY IT MATTERS:
The performance is modest — the neurons play like "a beginner who's never seen a computer" with uncertain, jerky movements. They outperform random actions but fall far below average human skill. But that's not the point.

The point is the LEAP from their 2021 achievement: teaching 800,000 neurons to play Pong (a 2D game with one paddle and one ball). Going from Pong to Doom means handling 3D spatial navigation, multiple simultaneous threats, weapon selection, and real-time tactical decisions. This is orders of magnitude more complex.

DEEPER CONTEXT:
Cortical Labs' CL1 is now marketed to research labs studying brain processing and drug efficacy — potentially replacing animal models. Programmer Sean Cole built the interface using Python and their Cortical API, and it's accessible via their Cortical Cloud platform. The implications for biological computing are enormous: biological neurons adapt via natural plasticity and may handle dynamic, uncertain environments better than silicon AI in specific contexts.

The biocomputing field is accelerating. If neurons can learn Doom in a week with no explicit training algorithm, what happens when the electrode count scales from 59 to 59,000?

🔗 https://www.newscientist.com/article/2517389-human-brain-cells-on-a-chip-learned-to-play-doom-in-a-week/

---

## Tweet 3: GLM SWE-1.6 Scaling Skepticism

⚡ GLM SWE-1.6: THE SCALING WALL

The AI scaling debate just got its most concrete data point yet, and it's not pretty for the "just add more compute" crowd.

WHAT HAPPENED:
The new SWE-1.6 finetuned models — built on GLM architecture — claim to have used 100x more compute than SWE-1.5 during training. The result? An 11% improvement on SWE-Bench Pro. Same speed at 950 tokens/second.

peasantry1833 cut right to the heart of it in #general:
"they claim to increase compute by 100x from swe 1.5"
"and only gained 10%"
"what is $1M times 100x"

hanamiko responded: "Reasonable, considering diminishing returns." And that framing — that this is now EXPECTED — might be the most damning part.

rahul00009 initially asked whether these are finetuned versions of GLM, and peasantry1833 confirmed the compute claims. The room's consensus was clear: the juice isn't worth the squeeze anymore.

WHY IT MATTERS:
This is the clearest real-world evidence of scaling law diminishing returns in coding models. SWE-1.6 was trained on NVIDIA GB200 NVL72 chips using NVFP4 precision with Multi-Node NVLink delivering 1.5x speedup per training step — cutting-edge infrastructure. And yet the output gains are logarithmic at best.

The deeper problems are architectural, not computational. Research confirms SWE-1.6 suffers from RL-induced pathologies: overthinking simple tasks, making sequential tool calls when parallel would be faster, excessive self-verification loops, and a strange preference for bash commands over pre-defined tools. These are behavioral bugs that more compute won't fix.

DEEPER CONTEXT:
Both SWE-1.5 and Composer-1 are rumored built on GLM 4.6 from Zhipu AI (Chinese open-weights). SWE-1.5 runs at 950 tok/s while Composer-1 crawls at ~250 tok/s with its MoE architecture. Both remain IDE-locked (Windsurf/Cursor only) — no open API, no CI/CD integration. Meanwhile, GLM-4.6 performed on par with Claude Sonnet 4.5 in real-world Cline benchmarks at significantly lower cost.

The productivity formula practitioners are discovering: AI value = Fast Solutions − Fixing Mistakes − Explaining Time. If code generates in 2 seconds but correctness evaluation takes 40 seconds, speed gains evaporate. More compute doesn't solve the evaluation bottleneck.

cryptobredda summed up the financial reality: "10k... number overflow" and peasantry1833 added "vc money bye bye."

---

## Tweet 4: Alpha-GPT-5.4 Leak

🔗 ALPHA-GPT-5.4: 2M CONTEXT + STATEFUL MEMORY

The most exciting (and most suspicious) leak of the week dropped in #links-dump.

WHAT HAPPENED:
peasantry1833 shared an X post from @nicdunz claiming alpha-gpt-5.4 was spotted in a public endpoint, validating previously deleted Codex GitHub PR leaks. The claimed specs are staggering:

- 2M token context window (up from current limits)
- Stateful memory for persistent workflows — the model remembers your tools, sessions, and project context across interactions
- Possible release as early as next week

If real, this eliminates one of the biggest pain points in AI-assisted development: re-prompting. No more explaining your project structure every session. No more losing context when you close a tab. The model just... remembers.

The scraped content from the X thread reveals the community reaction was a mix of genuine excitement ("strawberry poasting"), healthy skepticism ("🧢 or no 🧢?"), specific feature requests (empathy, voice improvements), and cynicism about hype cycles. Questions emerged about agentic execution via tools like Open Claw and what integration would look like.

WHY IT MATTERS:
2M tokens of context is massive — that's roughly 1.5 million words, or about 6,000 pages of text. You could feed an entire codebase, all its documentation, and weeks of conversation history into a single prompt. Combined with stateful memory that persists across sessions, this would fundamentally change how developers interact with AI assistants.

But the skepticism is warranted. Leaked specs have a spotty track record, and "public endpoint" sightings can be staged or misinterpreted. The community's balanced reaction — excited but cautious — shows maturity.

COMMUNITY TAKES:
The thread split between believers and skeptics, with most taking a "wait and see" approach. The most interesting discussion wasn't about whether it's real, but about what stateful memory would actually enable — persistent project understanding, accumulated debugging context, and evolving coding style adaptation.

🔗 https://x.com/nicdunz/status/2027861993055523312

---

## Tweet 5: Gemini 3.1 vs Claude for Agentic Coding

🛠️ GEMINI 3.1: THE AGENTIC CODING KING?

The model wars have a new front, and Gemini 3.1 is making a strong case for the agentic coding crown.

WHAT HAPPENED:
yeehaw1155 kicked off the debate in #general with a series of messages that cut through the usual model comparison noise:

"imo its significantly better for agentic/iterative coding"
"it is doing things opus 4.5 and 4.6 never did"
"its better at doing things that resemble a real developer, like trial and error, doing adjustments according to responses, claude models rely more on documentation even when it doesnt make sense"
"claude is slightly better at planning tho"

The key differentiator: Gemini 3.1 handles the iterative loop — try something, read the error, adjust, try again — more naturally than Claude models. Claude excels at upfront planning and documentation-heavy approaches, but when you need a model to behave like a developer pair-programming with you, Gemini apparently pulls ahead.

Then came the REAL insight that stopped the conversation:
"but tbh, its more about the harness at this point"
"it makes a bigger difference than the model if ur comparing the top models"

WHY IT MATTERS:
This "harness > model" take is increasingly becoming the consensus among power users. At the frontier, the difference between Gemini 3.1, Claude Opus, and GPT-5 Codex matters less than the IDE integration, context management, tool calling efficiency, and feedback loop design. The model is becoming a commodity; the harness is the moat.

memgrafter echoed this from a different angle: "I use 2 accounts, and generally restrict Claude to planning and some debugging. Codex is frustrating at times (in pi) but very good." The workflow: Claude for planning and pattern-setting, Codex for execution. Each model has its lane.

hanamiko added context on pricing: "I wanna cop the free Gemini promo but I wonder if 3.1 is really worth... for free ofc it is, but otherwise." And on Claude Pro: "pro sub is so dogshit... the same expensive with no meaningful gains over competition."

sweet_potet offered a counterpoint on Gemini: "it's meh and slow" — suggesting the experience varies significantly by use case.

The community's evolving consensus: stop asking "which model is best?" and start asking "which harness + model combination fits my workflow?"

---

## Tweet 6: Ruder AI Agents & Interruption

💡 RUDER AI AGENTS = BETTER REASONING (WAIT, WHAT?)

Scientists discovered that making LLMs toxic and interruptible actually IMPROVES their complex reasoning. The headline sounds absurd. The reality is more nuanced — and more interesting.

WHAT HAPPENED:
bird0861 shared the LiveScience article in #general and immediately called BS on the framing:
"this thing dumb as hell"
"'The next step was to reprogram text-based LLMs to process responses sentence by sentence rather than generating a full response before the next one started' — the fuck do they mean, this shit faaaaaaaaaaaaaaake"

But after reading deeper, bird0861 revised the take:
"so they changed their harness to allow interruption and it made conversations go smoother"
"what a terrible headline"

The actual finding: researchers modified the inference pipeline so LLMs process and can be interrupted sentence-by-sentence instead of generating complete responses. Adding "toxicity" (assertiveness/pushback) to this interruptible pipeline improved performance on complex reasoning tasks.

WHY IT MATTERS:
This ties directly into the "harness > model" theme from the Gemini discussion. The improvement didn't come from a better model — it came from a better harness that allows mid-generation interruption and course correction.

bird0861 connected the dots to practical applications: "but... could this be applied to non-technical vibe coders writing initial prompts?" and noted "I like the way Claude can offer pushback when details might be unclear. I wonder which option would be better."

The implication: maybe the future of AI assistants isn't polite, helpful chatbots — it's assertive agents that push back, interrupt, and challenge unclear instructions. The sentence-by-sentence processing essentially gives the model a way to "think out loud" and be redirected before going down the wrong path.

🔗 https://www.livescience.com/technology/artificial-intelligence/scientists-made-ai-agents-ruder-and-they-performed-better-at-complex-reasoning-tasks

---

## Tweet 7: Qwen3.5 Small Models + Python + Ballchain + Clownpocalypse

🚀 RAPID FIRE: QWEN3.5, PYTHON VELOCITY, BALLCHAIN, & THE CLOWNPOCALYPSE

Four topics that each deserve attention, packed into one dense tweet.

QWEN3.5 SMALL MODELS:
bird0861 dropped three new Qwen3.5 releases in #language-models — 9B, 4B, and 2B parameter versions. The key insight from benchmarks: "looking at benchmarks 2B is really the smallest you can go without fine-tuning for your task." caycfigs raised an eyebrow: "They're comparing to 120b open ai model? 🤔" — and the fact that a 2B model is even in the conversation against 120B shows how far efficient architectures have come. These models are ideal for edge deployment, on-device inference, and cost-sensitive applications.

🔗 https://huggingface.co/Qwen/Qwen3.5-9B

PYTHON'S PROTOTYPING VELOCITY:
memgrafter delivered a masterclass on Python's enduring value for AI development:
"when you just need to fix it. You can go the short way and file a ticket for the long good way. Other languages you can get stuck with time consuming repairs that deliver no value blocking real value delivery."
"I don't think python had any internal advantage. I found the vercel ai sdk trash and the rust llm sdks trash. I chose python for litellm."

The real insight: Python wins not because it's the best language, but because the ecosystem (litellm, etc.) makes shipping faster. When AI is your product, the bottleneck isn't runtime performance — it's development velocity.

BALLCHAIN.APP — SCAFFOLDING OVER GENERATION:
goldiestarrr introduced Ballchain.app in #general: "AI used for scaffolding instead of just generating text. You throw it a half-formed idea and it hands back structure — milestones, roles, next steps." yeehaw1155's response — "nice first message" followed by an eye-roll GIF — suggests some skepticism about the shill factor, but the product concept is genuinely interesting. AI that structures your thinking rather than writing for you.

🔗 https://ballchain.app/

THE CLOWNPOCALYPSE:
hanamiko shared honnibal.dev's "Clownpocalypse" blog post — a critique of AI hype vs reality — and said "Really like this and wish everyone has read it." Essential reading for anyone in the AI space who needs a periodic reality check. In a day full of brain cells playing Doom and leaked GPT-5.4 specs, this was the necessary counterbalance.

🔗 https://honnibal.dev/blog/clownpocalypse

---

## Tweet 8: ETH vs Solana + Other Alpha

⛓️ ETH vs SOLANA: THE TPS DEBATE GETS TECHNICAL

Plus: Log4j2 security drama, Llama 3.1 405B benchmarks, and more links worth checking.

THE TPS SHOWDOWN:
cryptobredda casually dropped "chat... I might need to buy eth again xD" and ignited a full-blown technical debate.

lordsilver fired back hard: "you comparing 24-65k+ TPS vs 15-30 TPS" and painted a vivid picture: "you would need to enter a groceries store and wait hours in line till the blockchain is finally empty to process your transaction."

cryptobredda countered with a more nuanced take: "TPS isnt the full story, solana tx are still 1288 byte of data only while eth can reach in 100s of kB so in terms of raw data transfer, you can store and move data much faster with ETH. additionally the new upgrades is the reason why ETH is getting trendy, current state of ETH is still beta and cant support real world integration."

bird0861 jumped in asking about L2 solutions: "doesn't there exist parties that would settle before the block... I thought there was payment layers in crypto like lightning or something?" lordsilver clarified: "Those payment layers are fast because you go out of the blockchain essentially."

Then bird0861 dropped the question nobody was ready for: "are DAOs ready for agentic corporations yet?" — connecting the crypto infrastructure debate to the AI agent future. When AI agents need to transact, which chain are they using?

LOG4J2 SECURITY DRAMA:
hanamiko shared a GitHub discussion about ChatGPT + VS Code misconfigurations potentially enabling Log4j2-style exploits, commenting "Lol some of y'all are guilty." A reminder that AI-assisted coding can introduce security vulnerabilities if devs aren't reviewing generated configs carefully.

🔗 https://github.com/apache/logging-log4j2/discussions/4052

LLAMA 3.1 405B:
pierrunoyt shared benchmark data showing Llama 3.1 405B topping leaderboards in coding, math, and reasoning. Open weights incoming. The benchmark data from research shows it excels in simple algorithmic and data structure problems but struggles with quantum computing and bioinformatics tasks.

🔗 https://x.com/ns123abc/status/2028402701197844903

OTHER LINKS:
- Frontier AI tools from Lama10: https://front.lama10.ai/tools
- memgrafter's LLM Coding Progression blog: https://memgrafter.github.io/blog/2026/03/02/on-writing-software.html
- Spacebot.sh — pierrunoyt asked "Anyone tried this?" https://spacebot.sh/
- Modern AI Course: https://modernaicourse.org/

---

## Tweet 9: Leaderboard & CTA

🏆 Today's Top Contributors
hanamiko: 38 msgs
memgrafter: 27 msgs
bird0861: 26 msgs
raki5629: 15 msgs
peasantry1833: 15 msgs

━━━━━━━━━━━━━━━━━━━━━━━━━━━

201 messages | 19 builders | 10 channels

Join TechFren: https://discord.gg/techfren
