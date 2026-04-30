---
kind: note
id: claude-conversation-2026-02-15-swe-benchmark-scores-over-time-87a3cb00
updatedAt: 1771197496099
createdAt: 1771197380410
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 87a3cb00-5846-4b38-acd7-07094d68a916
created_at: 2026-02-15T23:16:20.410330Z
updated_at: 2026-02-15T23:18:16.099008Z
title: "SWE benchmark scores over time"
---

# SWE benchmark scores over time

## Metadata

- Claude conversation UUID: `87a3cb00-5846-4b38-acd7-07094d68a916`
- Created: `2026-02-15T23:16:20.410330Z`
- Updated: `2026-02-15T23:18:16.099008Z`
- Message count: 2
- Transcript chars extracted: 2015

## Claude summary

**Conversation Overview**

The user requested a chart showing SWE-bench benchmark scores over time across four variants (Full, Lite, Verified, and Pro) spanning the past 4 years, with different lines for each benchmark displaying the best scores achieved and the models/agents that achieved them. Claude used web search tools to gather current leaderboard data from swebench.com and other sources, compiling historical progression data from October 2023 through February 2026. The user mentioned their team's work appearing in the results with "Auggie CLI + Opus 4.5" achieving 51.8% on SWE-bench Pro, and noted this would be good content for a tier list video they're creating.

Claude created an interactive React chart artifact displaying the SOTA progression across all four SWE-bench variants. The chart includes hover interactions to isolate individual benchmark lines, detailed tooltips showing exact scores and model names, and a comprehensive data table with key milestones. The visualization shows dramatic improvements, particularly on SWE-bench Verified climbing from ~33% to ~79% in just 15 months, while SWE-bench Pro launched with top models at ~23% before climbing to 51.8%. The chart uses a dark theme with distinct colors for each benchmark variant and includes legend cards with descriptions of each benchmark's scope and launch timeframe.

**Tool Knowledge**

Web search queries for "SWE-bench verified leaderboard 2025 top scores" and "SWE-bench verified best scores history 2023 2024 timeline" successfully retrieved current leaderboard data. The swebench.com homepage provided comprehensive historical data when fetched directly. Searching for specific benchmark variants like "SWE-bench lite top scores history 2024 2025 progression" and "SWE-bench Pro leaderboard top scores 2025" yielded targeted results for each benchmark type. When compiling historical data, searching for early results with "SWE-bench full original best score 2023 first results RAG Claude GPT" helped establish the baseline progression from the original benchmark launch. The React artifact creation required recharts library components including LineChart, XAxis, YAxis, CartesianGrid, Tooltip, and ResponsiveContainer for the interactive visualization, with custom tooltip and dot components to display model names and scores on hover.

## Quick excerpt

Let me search for the latest SWE-bench scores to make sure I have current data. ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` ``` This block is not supported on y

## Transcript

## human\n\nCan you make a chart in The quickest way maybe in a artifact. Or a PDF, whatever is quicker. The chart should show the scores for SWE bench, verified, light, and pro Over time, over the past 4 years, a different line for each benchmark from I think it's 0 to a 100%, and pretty much I want, like, the best score over time, like, what was it And also if you can have the model name that got it or the agent that got it. So yeah. Thanks.\n
## assistant\n\nLet me search for the latest SWE-bench scores to make sure I have current data.
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


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Now I have enough data to compile a comprehensive chart. Let me build a React artifact with this data.
```
This block is not supported on your current device yet.
```

Now let me create the React artifact:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Here's your interactive chart showing the SOTA progression across all four SWE-bench variants. You can hover over the legend cards at the top to isolate individual benchmark lines, and hover on any data point to see the exact score and which model/agent achieved it.

A few things worth noting for your content: the trajectory on Verified went from ~33% to ~79% in just 15 months, which is wild. And SWE-bench Pro launching with top models at ~23% (then climbing to 51.8% with Auggie — your team's work showing up there!) really highlights how much headroom there still is when benchmarks get harder. Great fodder for a tier list video.\n