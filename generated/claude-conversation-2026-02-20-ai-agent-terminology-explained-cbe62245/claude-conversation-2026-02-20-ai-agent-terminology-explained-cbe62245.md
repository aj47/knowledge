---
kind: note
id: claude-conversation-2026-02-20-ai-agent-terminology-explained-cbe62245
updatedAt: 1771612569465
createdAt: 1771604377124
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: cbe62245-e0b3-4638-9e51-e45954ae45e9
created_at: 2026-02-20T16:19:37.124205Z
updated_at: 2026-02-20T18:36:09.465118Z
title: "AI agent terminology explained"
---

# AI agent terminology explained

## Metadata

- Claude conversation UUID: `cbe62245-e0b3-4638-9e51-e45954ae45e9`
- Created: `2026-02-20T16:19:37.124205Z`
- Updated: `2026-02-20T18:36:09.465118Z`
- Message count: 4
- Transcript chars extracted: 19449

## Claude summary

**Conversation Overview**

The user requested help creating YouTube content optimization materials for a technical video about AI coding agent terminology. They provided a detailed transcript of a 9-minute educational video that explains various AI development concepts including rules, custom commands, sub-agents, hooks, MCP (Model Context Protocol), permissions, task lists, skills, and context engines, specifically focusing on tools like Augment Code and Claude Code.

The user had specific requirements for the deliverables: a concise SEO-optimized description with relevant keywords and hashtags, timestamps in MM:SS format (until 1 hour) with topic descriptions limited to 6 words, and 10 thumbnail ideas following best practices for maximum click-through rates. Claude successfully delivered all requested materials, creating a comprehensive YouTube description with proper timestamps covering each major topic transition, relevant hashtags for discoverability, and 10 diverse thumbnail concepts with accompanying titles.

The user then requested an expanded set of 50 title variations across different styles and approaches. Claude provided a comprehensive list organized into categories including curiosity-driven titles, direct educational approaches, clickbait-style options, short punchy versions, challenge-based claims, question formats, listicle structures, tool-specific SEO-heavy titles, relatable casual approaches, and opinionated/spicy variations. This demonstrates the user's focus on content optimization and understanding different audience engagement strategies for technical educational content in the AI development space.

## Quick excerpt

Here's the YouTube description, timestamps, and thumbnail ideas: --- **DESCRIPTION:** Every AI coding agent term explained in under 10 minutes. Rules, custom commands, sub-agents, hooks, MCP, permissions, task lists, skills, and context engine — there's a ton of new terminology in AI-powered development tools like Augment Code and Claude Code. In this video, I break down what each concept actually does, when to use it, and where it lives in your project so you can configure your AI coding agent 

## Transcript

## human\n\nYour task is to generate Youtube description and thumbnail ideas for this video given the transcript.
The description should have lots of key words for SEO but also be concise and make sense. 
Any keywords hard to add to the description can be added as hashtags below.
The description should also contain timestamps in format HH:MM:SS - <topic>, start with MM:SS until 1hr in. timestamps should be no more than 6 words in length and be of the topic that is talked about at the time. 
Finally, generate 10 thumbnail ideas with accompanying titles that follow best practices and will generate the most clickthrough

1
00:00:00,240 --> 00:00:09,120
Rules, commands, agents MD, sub-agent, hooks, MCP, permissions, task lists, skills.
2
00:00:09,120 --> 00:00:10,880
There's a lot of new terminology.
3
00:00:10,880 --> 00:00:14,319
There's so many new concepts and terminology that has been introduced.
4
00:00:14,320 --> 00:00:18,240
And in this video, I'm going to show what each one actually does and when to use it.
5
00:00:18,240 --> 00:00:22,400
First, let's start with an overview and a one-sentence summary of each of these terms.
6
00:00:22,400 --> 00:00:23,599
Firstly, rules.
7
00:00:23,599 --> 00:00:26,800
These are the instructions given to the agent about how to work.
8
00:00:26,800 --> 00:00:29,520
These are common gotchas, patterns, and conventions.
9
00:00:29,520 --> 00:00:30,880
Custom commands.
10
00:00:30,880 --> 00:00:42,560
These are packaged prompts you can run on demand for repeatable workflows like slash PR, slash security review, or any other repeatable workflow to save you from typing out prompts every time.
11
00:00:42,560 --> 00:00:43,600
Sub-agents.
12
00:00:43,600 --> 00:00:49,599
These are custom agents with their own context, models, and tools, like specialists you delegate to.
13
00:00:49,600 --> 00:00:50,160
Hooks.
14
00:00:50,160 --> 00:00:53,440
These are custom scripts that run on specific lifecycle events.
15
00:00:53,440 --> 00:00:56,720
They can intercept, block, or modify tool execution.
16
00:00:56,720 --> 00:00:59,519
MCP or model context protocol.
17
00:00:59,519 --> 00:01:07,119
A protocol to provide capabilities for connections to external services like GitHub, Linear, Slack, or even browser automation.
18
00:01:07,120 --> 00:01:07,919
Permissions.
19
00:01:07,920 --> 00:01:09,600
These control what the agent can do.
20
00:01:09,600 --> 00:01:12,880
Allow, deny, or ask before running certain commands.
21
00:01:12,880 --> 00:01:13,760
Task list.
22
00:01:13,760 --> 00:01:20,799
This is a structured task planning interface for breaking down complex tasks into steps the agent can execute.
23
00:01:20,800 --> 00:01:21,759
Context Engine.
24
00:01:21,760 --> 00:01:25,199
This is augmented industry-leading understanding of your code base.
25
00:01:25,199 --> 00:01:27,920
You don't have to configure it, but you greatly benefit from it.
26
00:01:27,920 --> 00:01:28,720
Skills.
27
00:01:28,720 --> 00:01:37,600
These are like bundled recipes which combines instructions as well as supplementary scripts and assets into a single capability your agent can invoke.
28
00:01:37,600 --> 00:01:38,800
Okay, that was the overview.
29
00:01:38,800 --> 00:01:40,559
Now let's go deeper into each one.
30
00:01:40,559 --> 00:01:41,519
Firstly, rules.
31
00:01:41,520 --> 00:01:44,800
Here's where you should define stuff that the agent might normally miss.
32
00:01:44,800 --> 00:01:48,080
Things like common gotchas, coding patterns, and style guides.
33
00:01:48,080 --> 00:01:52,320
Another rules you want your agent to follow so you don't have to type them out every time.
34
00:01:52,320 --> 00:01:54,160
Rules can live in different places.
35
00:01:54,160 --> 00:02:00,280
You have your personal user rules, which live at the root of your computer at dot augment/slash rules.
36
00:01:59,840 --> 00:02:03,479
These are personal preferences that follow you across projects.
37
00:02:03,800 --> 00:02:11,080
Then you have workspace-specific rules, which live at the root of your workspace or repository at.augment slash rules.
38
00:02:11,080 --> 00:02:16,040
These are shareable via Git and can work across your team for each specific project.
39
00:02:16,040 --> 00:02:20,200
These project-specific rules are trending towards the agents.md standard.
40
00:02:20,200 --> 00:02:30,440
These can not only be at your workspace root, but each sub-directory can have its own agents MD that will only get loaded into the agent when the agent is doing work in that sub-directory.
41
00:02:30,440 --> 00:02:35,960
This is a great practice preventing context rot from loading too many irrelevant rules at all times.
42
00:02:35,960 --> 00:02:41,239
Augment rules can be configured with a front matter to specify when the rule should be loaded.
43
00:02:41,240 --> 00:02:45,080
You have three options: always, manual, and auto.
44
00:02:45,079 --> 00:02:48,040
Always has the rule loaded into the agent context.
45
00:02:48,040 --> 00:02:48,600
Always.
46
00:02:48,600 --> 00:02:53,720
Manual will only be loaded if you reference the rule manually in your prompt.
47
00:02:53,720 --> 00:02:58,519
And auto has the agent decide whether to load the rule based on the description field.
48
00:02:58,520 --> 00:03:06,760
Extra note here that in the IDE for augment code, we also have memories which get automatically populated by the agent.
49
00:03:06,760 --> 00:03:17,880
From my experience, the agent can create way too many memories, so it's useful to check these every now and then and clean them up and even graduate some into the rules file if you find they're important.
50
00:03:17,880 --> 00:03:30,040
Generally, you should keep all these rules and agents.md as minimal as possible and only add rules when you find the agent repeatedly making these mistakes or you finding yourself repeatedly needing to remind the agent of things.
51
00:03:30,040 --> 00:03:31,720
Okay, next up, custom commands.
52
00:03:31,720 --> 00:03:34,920
These are packaged prompts that you find yourself running repeatedly.
53
00:03:34,920 --> 00:03:47,440
Just like rules, you can have user commands that live on your device's root at .augment slash commands, as well as workspace rules that can be checked into Git and shared across the team at your workspace root.augment slash commands.
54
00:03:44,920 --> 00:03:53,280
And augment also has cross-compatibility with clawed code commands found at .claude slash commands.
55
00:03:53,280 --> 00:03:59,840
All these commands are markdown files with front matter, which can have a description, an argument hit, as well as the model to run it with.
56
00:03:59,840 --> 00:04:03,359
You can pass dynamic values and arguments into these custom commands.
57
00:04:03,360 --> 00:04:13,840
For instance, if I had a deploy command, I could have an argument to specify which branch to deploy it in, and I would run it with slash deploy space the branch name, like staging.
58
00:04:13,840 --> 00:04:16,000
This goes into more detail in our docs.
59
00:04:16,000 --> 00:04:17,440
Next up, sub-agents.
60
00:04:17,440 --> 00:04:23,280
These are custom specialist agents with their own context window, specified model, and tools.
61
00:04:23,280 --> 00:04:33,200
Again, you can have your own user sub-agents defined in your device root, as well as your workspace sub-agent defined in the workspace root in the .augment slash agents folder.
62
00:04:33,200 --> 00:04:40,719
The CLI also has an internal slash agents command, which will launch an interactive wizard for you to create agents inside the CLI.
63
00:04:40,720 --> 00:04:45,760
Again, you can find more detail in our documentation about the full capabilities of sub-agents.
64
00:04:45,760 --> 00:04:46,720
Next, hooks.
65
00:04:46,720 --> 00:04:53,599
Hooks are custom scripts that can intercept tool execution or trigger in specific lifecycle events.
66
00:04:53,600 --> 00:05:00,640
They are deterministic injection points, which counterbalances some of the undeterminism of the underlying large language models.
67
00:05:00,640 --> 00:05:07,040
Unlike rules, which sometimes may not trigger, you can guarantee a hook will trigger at the specified event.
68
00:05:07,040 --> 00:05:09,360
There are five different events you can trigger from.
69
00:05:09,360 --> 00:05:10,880
Firstly, pre-tool use.
70
00:05:10,880 --> 00:05:13,440
This happens right before a tool executes.
71
00:05:13,440 --> 00:05:20,080
So you can run a script to either block, allow, or ask the user for input before a particular tool executes.
72
00:05:20,080 --> 00:05:24,720
Similarly, there's post-tool use, which happens right after a tool executes.
73
00:05:24,720 --> 00:05:27,760
There's obvious use cases for security for pre-tool use.
74
00:05:27,760 --> 00:05:33,560
Run a script to make sure things comply in a deterministic way before a tool executes.
75
00:05:33,800 --> 00:05:39,640
Post-tool use can be useful to log events, inject further context, or provide feedback.
76
00:05:39,640 --> 00:05:41,560
Next event is the stop event.
77
00:05:41,560 --> 00:05:43,800
This is when the agent finishes executing.
78
00:05:43,800 --> 00:05:54,040
This can be useful to make sure changes get committed every time the agent finishes, or maybe you want to block the stop and re-trigger the agent if certain tests don't pass.
79
00:05:54,040 --> 00:05:55,960
Next, the session start trigger.
80
00:05:55,960 --> 00:05:57,480
This is when the session begins.
81
00:05:57,480 --> 00:06:02,040
You can run some scripts to set up things exactly how you want it at the start of each session.
82
00:06:02,040 --> 00:06:03,800
And similarly, session end.
83
00:06:03,800 --> 00:06:08,520
When you end your session, you can do things like cleaning up, logging, or saving state here.
84
00:06:08,520 --> 00:06:11,400
Hooks live in.augment/slash settings.json.
85
00:06:11,400 --> 00:06:13,800
The documentation goes into further detail.
86
00:06:13,800 --> 00:06:18,680
You can do things like matching specific tools to trigger specific hooks and more.
87
00:06:18,680 --> 00:06:22,200
Next, MCP or Model Context Protocol integration.
88
00:06:22,200 --> 00:06:27,000
These connect the agent to external systems both for context and capability sake.
89
00:06:27,000 --> 00:06:31,960
Augment has some pre-built integrations in the IDE for GitHub, Linear, and more.
90
00:06:31,960 --> 00:06:40,440
So the agent can do common things like listing issues, listing and creating pull requests, pulling tickets, pulling review comments, and more.
91
00:06:40,440 --> 00:06:42,760
There's also more custom MCP servers.
92
00:06:42,760 --> 00:06:54,440
Personally, I like the browser use tools like Playwright, which can give your agent the ability to manually inspect web pages and websites so it can debug things like user interfaces on your web app.
93
00:06:54,440 --> 00:06:59,960
These also should live in.augment slash settings.json, but can vary from platform to platform.
94
00:06:59,960 --> 00:07:02,040
More detailed information in our docs.
95
00:07:02,040 --> 00:07:02,920
Next, skills.
96
00:07:02,920 --> 00:07:04,760
These are packaged agent behaviors.
97
00:07:04,760 --> 00:07:12,600
With smart, progressive discoverability, the agent only sees a small descriptor of what the skill is capable of, preventing context rot.
98
00:07:12,600 --> 00:07:18,480
After that, it can load further docs and execute bundled scripts with assets, providing tons more capability.
99
00:07:18,480 --> 00:07:19,520
Next, permissions.
100
00:07:19,520 --> 00:07:24,560
These can control what the agent can use, and they also live in.augment slash settings.json.
101
00:07:24,560 --> 00:07:34,800
You can block certain tools or set certain tools to always ask the user to be executed to provide more security and confidence that your agent won't go haywire and delete everything.
102
00:07:34,800 --> 00:07:36,160
Next, task list.
103
00:07:36,160 --> 00:07:41,600
This is a structured interface for breaking down complex problems into step-by-step tasks.
104
00:07:41,600 --> 00:07:46,719
Your agent will automatically create a task list when it thinks a task is complex enough.
105
00:07:46,720 --> 00:07:50,880
You can also manually create a task list before getting the agent to start working on it.
106
00:07:50,880 --> 00:07:53,920
And at any point, you can modify and edit the task list.
107
00:07:53,920 --> 00:08:01,360
Finally, the context engine, the underlying industry-leading engine that powers all the context management for the augment agents.
108
00:08:01,360 --> 00:08:07,840
This significantly speeds up retrieval and management of context in large code bases where other agents struggle.
109
00:08:07,840 --> 00:08:19,280
Out of the box, it'll index your current workspace, but you can also use the same context engine to index external repositories through the settings in the IDE or using the augment code MCP within the CLI.
110
00:08:19,280 --> 00:08:26,720
So this was an overview that goes into a little bit more detail to help you understand all the terminology for software development with AI agents.
111
00:08:26,720 --> 00:08:36,799
I recommend you read the documentation to get the full scope in great detail or engage with us through the comments or in our Reddit community to get feedback from someone in the internal team.
112
00:08:36,799 --> 00:08:37,360
Thank you.\n
## assistant\n\nHere's the YouTube description, timestamps, and thumbnail ideas:

---

**DESCRIPTION:**

Every AI coding agent term explained in under 10 minutes. Rules, custom commands, sub-agents, hooks, MCP, permissions, task lists, skills, and context engine — there's a ton of new terminology in AI-powered development tools like Augment Code and Claude Code. In this video, I break down what each concept actually does, when to use it, and where it lives in your project so you can configure your AI coding agent like a pro.

Whether you're setting up agents.md, writing your first custom slash command, creating sub-agents for specialist tasks, or wiring up MCP integrations with GitHub, Linear, and Playwright — this guide covers it all with practical examples.

📖 Augment Code Docs: https://docs.augmentcode.com

00:00 - Overview of all terms
01:41 - Rules and agents.md explained
03:31 - Custom commands walkthrough
04:17 - Sub-agents deep dive
04:46 - Hooks and lifecycle events
06:22 - MCP integrations
07:02 - Skills as packaged behaviors
07:19 - Permissions configuration
07:36 - Task list planning interface
08:01 - Context engine explained

#AIcoding #AugmentCode #ClaudeCode #CodingAgent #MCP #ModelContextProtocol #AgentsMD #DevTools #AIagent #SoftwareDevelopment #SubAgents #Hooks #CodingWorkflow #VibeCoding #AITerminology

---

**10 THUMBNAIL IDEAS:**

1. **Title:** "AI Agents Explained in 9 Min"
**Thumbnail:** Split grid showing icons/text for each term (Rules, Hooks, MCP, etc.) with a confused face emoji in the center, bold "EVERY TERM" text overlay

2. **Title:** "Stop Confusing These AI Agent Terms"
**Thumbnail:** Close-up of you pointing at a whiteboard/screen with "Rules ≠ Commands ≠ Hooks" crossed out and corrected, red X marks

3. **Title:** "The ONLY AI Agent Guide You Need"
**Thumbnail:** A cheat sheet visual with all terms listed, magnifying glass over it, bold "CHEAT SHEET" text

4. **Title:** "AI Coding Agents: Every Concept Explained"
**Thumbnail:** You looking overwhelmed next to a wall of floating terminology words, with one highlighted in green ("START HERE" arrow)

5. **Title:** "Rules, Hooks, MCP, Sub-Agents... WTF?"
**Thumbnail:** Your face with a mind-blown expression, scattered terminology flying around your head, bold "WTF?" text

6. **Title:** "I Learned Every AI Agent Term So You Don't Have To"
**Thumbnail:** Before/after split — left side: confused face + jumbled terms, right side: organized flowchart + thumbs up

7. **Title:** "Master AI Coding Agents in 9 Minutes"
**Thumbnail:** Clean dark terminal-style background with green text listing all terms, a checkmark appearing next to each, "MASTER CLASS" badge

8. **Title:** "You're Using AI Agents Wrong"
**Thumbnail:** Red "WRONG" stamp over a messy config file on the left, green "RIGHT" over a clean setup on the right, your face reacting between them

9. **Title:** "The Complete AI Agent Terminology Guide"
**Thumbnail:** Book/guide visual with "AI AGENTS" on the cover, terms radiating outward like a mind map, "COMPLETE GUIDE" text

10. **Title:** "Every AI Agent Feature Ranked & Explained"
**Thumbnail:** Tier list layout with S/A/B tiers, term labels placed in each tier, your face in the corner pointing at S-tier\n
## human\n\ngive 50 title ideas across spectrum\n
## assistant\n\nHere are 50 title ideas across different styles:

---

**Curiosity / Mystery**
1. What Every AI Agent Term Actually Means
2. The AI Coding Terms Nobody Explains Properly
3. So THAT'S What Hooks, MCP, and Sub-Agents Do...
4. Why 90% of Devs Get These AI Agent Terms Wrong
5. The Hidden Features Most AI Coders Never Use

**Direct / Educational**
6. Every AI Coding Agent Concept Explained in 9 Minutes
7. AI Agent Terminology: The Complete Beginner's Guide
8. Rules, Commands, Hooks, MCP — All Explained Simply
9. A Developer's Guide to AI Agent Terminology
10. AI Coding Agents: 10 Concepts You Need to Know

**Clickbait-y / High CTR**
11. You're Using AI Agents Wrong (Here's Every Feature)
12. Stop Coding With AI Until You Watch This
13. I Wish I Knew This Before Using AI Agents
14. This Changes How You Use AI Coding Agents
15. The Video Every AI Coder Needs to Watch First

**Short / Punchy**
16. AI Agents Explained in 9 Min
17. Every AI Agent Term. Explained.
18. AI Agent Glossary Speedrun
19. The AI Agent Cheat Sheet
20. Know Your AI Agent — Every Term Explained

**Challenge / Bold Claims**
21. Master AI Coding Agents in Under 10 Minutes
22. I Learned Every AI Agent Concept So You Don't Have To
23. The ONLY AI Agent Guide You'll Ever Need
24. Become an AI Agent Expert in 9 Minutes
25. From Confused to Confident: AI Agent Terms Explained

**Question-Based**
26. What Are Rules, Hooks, Sub-Agents, and MCP?
27. Do You Actually Know What These AI Terms Mean?
28. WTF is MCP, Hooks, and agents.md?
29. What's the Difference Between Rules, Commands, and Skills?
30. How Do AI Coding Agents Actually Work?

**Listicle / Structured**
31. 10 AI Agent Concepts Every Developer Should Know
32. Every AI Agent Feature Explained (Rules to Context Engine)
33. AI Agent Terms Ranked and Explained
34. The 10 Building Blocks of AI Coding Agents
35. Breaking Down All 10 AI Agent Concepts

**Tool-Specific / SEO Heavy**
36. Augment Code Explained: Rules, Hooks, MCP & More
37. Claude Code & Augment Code — Every Feature Explained
38. agents.md, MCP, Hooks, Sub-Agents — Full Breakdown
39. How to Configure AI Coding Agents (Complete Walkthrough)
40. Augment Code Setup Guide: Every Concept You Need

**Relatable / Casual**
41. All the AI Agent Terms That Confused Me (Explained Simply)
42. AI Agents Have Too Many Features — Let Me Explain Them All
43. I Finally Understand What All These AI Terms Mean
44. The AI Agent Jargon Is Out of Control (Let Me Help)
45. New to AI Agents? Start Here.

**Spicy / Opinionated**
46. The AI Agent Terms That Actually Matter (And The Ones That Don't)
47. Most AI Coders Don't Understand Half These Features
48. Stop Ignoring These AI Agent Features
49. Your AI Agent Setup Is Missing These Key Concepts
50. The Brutal Truth About AI Agent Terminology\n