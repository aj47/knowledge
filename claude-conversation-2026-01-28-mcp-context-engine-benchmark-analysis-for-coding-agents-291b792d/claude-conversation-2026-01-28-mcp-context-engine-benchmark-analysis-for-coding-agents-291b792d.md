---
kind: note
id: claude-conversation-2026-01-28-mcp-context-engine-benchmark-analysis-for-coding-agents-291b792d
updatedAt: 1769631916709
createdAt: 1769631885354
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 291b792d-d7e4-413a-92ff-86f78b16d0e2
created_at: 2026-01-28T20:24:45.354670Z
updated_at: 2026-01-28T20:25:16.709442Z
title: "MCP context engine benchmark analysis for coding agents"
---

# MCP context engine benchmark analysis for coding agents

## Metadata

- Claude conversation UUID: `291b792d-d7e4-413a-92ff-86f78b16d0e2`
- Created: `2026-01-28T20:24:45.354670Z`
- Updated: `2026-01-28T20:25:16.709442Z`
- Message count: 2
- Transcript chars extracted: 4480

## Claude summary

**Conversation Overview**

The user is working on writing a blog post about benchmark results that demonstrate how their new Context Engine MCP (Model Context Protocol) improves the performance of coding agents. They shared benchmark data from testing various agent and model combinations on an Elasticsearch codebase consisting of 300 pull requests with 3 different prompts each. The data shows clear performance improvements when MCP is enabled, with some agents seeing 70-80% improvement in overall scores.

Claude analyzed the benchmark results and identified key improvement patterns, noting that Cursor with opus4.5 showed a 71% improvement (from 0.07 to 0.12 overall score) and Claude Code with opus4.5 demonstrated an 80% improvement (from 0.05 to 0.09) when using MCP versus without it. The analysis also revealed that Auggie entries consistently showed a wrench icon, suggesting MCP is natively integrated, while other agents used checkmarks and X marks to indicate MCP usage.

Claude asked detailed clarifying questions across four main areas: benchmark methodology (including what QA MCP specifically does and what the scoring baseline represents), scoring calculations (how metrics like best_practices, code_reuse, completeness, and correctness are measured), story angle (whether to focus on universal MCP improvements or Auggie's competitive advantage), and scope (plans for public release and testing on additional codebases beyond Elasticsearch). The questions aimed to help structure an effective blog post by understanding the technical details, significance of the results, and intended messaging strategy.

## Quick excerpt

The user wants to write a blog post about their Context Engine MCP benchmarks. They've shared two documents: 1. An Educational AI Coding Course Planning document (which seems to be their course outline) 2. An agent-eval benchmark results document showing comparisons of different agents/models with and without "QA MCP" (which I assume is their Context Engine MCP) Let me analyze what I can see from the benchmark data: Looking at the second document (agent-eval), I can see a table with: - Different

## Transcript

## human\n\nwe have ran benchmarks to test how our new context engine mcp improves all coding agents. i need to write a blog around this. do analysis, research and ask clarifying questions\n
## assistant\n\nThe user wants to write a blog post about their Context Engine MCP benchmarks. They've shared two documents:

1. An Educational AI Coding Course Planning document (which seems to be their course outline)
2. An agent-eval benchmark results document showing comparisons of different agents/models with and without "QA MCP" (which I assume is their Context Engine MCP)

Let me analyze what I can see from the benchmark data:

Looking at the second document (agent-eval), I can see a table with:
- Different agents: auggie, cursor, claude code, codex, kiro, gemini
- Different models: gemini-3-flash, haiku4.5, sonnet4.5, opus4.5, gpt5.1-codex, gpt5.2-codex, composer-1, etc.
- QA MCP column with 🔧 (wrench icon), ❌ (no), ✅ (yes) indicators
- Metrics: overall_score, best_practices, code_reuse, completeness, correctness

The benchmark is on "elasticsearch-300-full" - 300 Elasticsearch PRs with 3 different prompts per PR.

Key observations from the data:
- Auggie entries all have 🔧 which might mean "using MCP" or a different indicator
- Cursor with opus4.5 (high): Without MCP (❌) = 0.07 overall, With MCP (✅) = 0.12 overall - that's a 71% improvement
- Cursor with composer-1: Without MCP (❌) = -0.10 overall, With MCP (✅) = -0.07 overall - improved but still negative
- Claude code with opus4.5: Without MCP (❌) = 0.05 overall, With MCP (✅) = 0.09 overall - 80% improvement
- Codex gpt5.2-codex without MCP = 0.10


- The scores seem quite low and some are negative, which is unusual. I need to understand what negative scores represent and what the baseline comparison is. The 🔧 icon for auggie entries also needs clarification. Since the user is from Techfren and focuses on Augment Code content, they're trying to demonstrate how their Context Engine MCP enhances coding agent performance. I should ask about the scoring methodology, what the negative values indicate, and how these results compare to their expectations before helping them structure the blog post.Looking at this benchmark data - this is interesting material for a blog post. Let me break down what I'm seeing and then ask some clarifying questions.

## Initial Analysis

**What the data shows:**

The benchmark tests various agent/model combinations on the Elasticsearch codebase (300 PRs, 3 prompts each) with and without your QA MCP (Context Engine).

**Clear MCP improvement patterns:**

| Agent | Model | Without MCP | With MCP | Improvement |
|-------|-------|-------------|----------|-------------|
| Cursor | opus4.5 (high) | 0.07 | 0.12 | +71% |
| Claude Code | opus4.5 | 0.05 | 0.09 | +80% |
| Cursor | composer-1 | -0.10 | -0.07 | +30% (less negative) |

**Auggie entries** all show the 🔧 icon - I'm assuming this means MCP is always enabled for Auggie since it's native to the platform?

**Kiro without MCP** shows -0.26 overall - notably lower than other agents.

---

## Clarifying Questions

**On the benchmark methodology:**

1. What exactly does the "QA MCP" do in this context? Is it the Context Engine providing semantic search across the Elasticsearch codebase, or something more specific?

2. What's the baseline these scores are measured against - the actual human PR that was merged? The negative scores suggest the agent output was worse than some baseline.

3. What does the 🔧 icon mean for Auggie rows vs the ✅/❌ for other agents?

**On the scoring:**

4. How are the individual metrics (best_practices, code_reuse, completeness, correctness) calculated? LLM-as-judge? Diff comparison to the ground truth PR?

5. Why are the absolute scores relatively low across the board (max ~0.27)? Is this expected for a complex codebase like Elasticsearch?

**On the story angle:**

6. What's the headline you want to drive? "MCP improves all agents" or "Auggie + MCP is the winning combination" or something else?

7. Do you have qualitative examples - specific PRs where MCP-enabled runs found the right files/patterns vs non-MCP runs that floundered?

8. Any data on *why* MCP helps - is it finding relevant code faster, reducing hallucinated APIs, better understanding of existing patterns?

**On scope:**

9. Are you planning to release the benchmark publicly? That could be a significant credibility boost.

10. Do you have results from other codebases beyond Elasticsearch to show this isn't dataset-specific?\n