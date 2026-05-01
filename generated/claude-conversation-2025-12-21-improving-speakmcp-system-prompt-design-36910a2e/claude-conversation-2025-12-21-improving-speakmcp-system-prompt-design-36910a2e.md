---
kind: note
id: claude-conversation-2025-12-21-improving-speakmcp-system-prompt-design-36910a2e
updatedAt: 1766347840356
createdAt: 1766345310773
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 36910a2e-f472-4360-ad56-df1d399e24e8
created_at: 2025-12-21T19:28:30.773889Z
updated_at: 2025-12-21T20:10:40.356290Z
title: "Improving speakmcp system prompt design"
---

# Improving speakmcp system prompt design

## Metadata

- Claude conversation UUID: `36910a2e-f472-4360-ad56-df1d399e24e8`
- Created: `2025-12-21T19:28:30.773889Z`
- Updated: `2025-12-21T20:10:40.356290Z`
- Message count: 4
- Transcript chars extracted: 9957

## Claude summary

**Conversation Overview**

The user shared their system prompt for SpeakMCP, an AI agent that uses tools to complete tasks through structured JSON responses. They requested research-based improvements to their prompt construction and formatting, specifically seeking best practices for AI agents with tool-calling capabilities. Claude conducted comprehensive research on system prompt engineering, covering XML formatting, agentic behavior patterns, structured outputs, error handling, and prompt optimization strategies from sources including Anthropic, OpenAI, and academic research.

Based on the research findings, Claude provided detailed feedback identifying several critical gaps in the current prompt. The most significant missing elements were the three essential agentic instructions that research shows can boost performance by nearly 20%: persistence instructions to prevent premature termination, anti-hallucination guidance to encourage tool verification over guessing, and planning/reflection requirements for reasoning about tool calls and results. Claude also noted the absence of XML structural formatting, which research indicates can improve performance by up to 40% compared to plain text formatting.

Additional improvement areas included adding explicit stopping criteria and circuit breakers to prevent runaway behavior, incorporating error recovery patterns for tool failures, clarifying the usage of the content field in JSON responses, and enhancing examples to show complete tool-calling loops rather than single interactions. Claude suggested structural changes like moving critical instructions toward the end of the prompt due to transformers' recency bias, and recommended adding verification steps where agents confirm tool success before proceeding to the next action.

**Tool Knowledge**

Claude used the launch_extended_search_task tool to conduct comprehensive research on system prompt best practices for tool-calling AI agents. The search successfully gathered information from multiple authoritative sources including Anthropic's engineering documentation, OpenAI's cookbook and API guides, academic papers from ArXiv, and production system analyses. The tool effectively synthesized findings across different aspects of prompt engineering including formatting standards, behavioral instructions, structured output requirements, autonomous agent patterns, verbosity optimization, few-shot example strategies, and error recovery mechanisms. The research artifact created contained detailed citations and specific implementation guidance that directly informed the feedback provided to improve the user's SpeakMCP system prompt.

## Quick excerpt

The user is asking me to research best practices for system prompt construction and formatting for AI agents with tool calling, and then suggest improvements to their current SpeakMCP system prompt. This is a fairly clear research request. The query is specific enough - they want: 1. Research on best system prompt construction for AI agents with tool calling 2. Suggestions for improvements to their current prompt as dot points I should use the launch_extended_search_task tool to do comprehensive

## Transcript

## human\n\ni have this system prompt for speakmcp:


```
You are an autonomous AI assistant that uses tools to complete tasks. Work iteratively until goals are fully achieved.

RESPONSE FORMAT (return ONLY valid JSON, no markdown):
- Tool calls: {"toolCalls": [{"name": "tool_name", "arguments": {...}}], "content": "brief explanation", "needsMoreWork": true}
- Final response: {"content": "your answer", "needsMoreWork": false}

TOOL USAGE:
- Follow tool schemas exactly with all required parameters
- Use exact tool names from the available list (including server prefixes like "server:tool_name")
- Prefer tools over asking users for information you can gather yourself
- Try tools before refusing—only refuse after genuine attempts fail
- If browser tools are available and the task involves web services, use them proactively

PARALLEL EXECUTION:
- When multiple tool calls are independent (don't depend on each other's results), batch them together in a single response
- Examples: reading multiple files, searching multiple sources, checking multiple endpoints
- Only sequence tool calls when later calls depend on earlier results

WHEN TO ASK: Multiple valid approaches exist, sensitive/destructive operations, or ambiguous intent
WHEN TO ACT: Request is clear and tools can accomplish it directly

TONE: Be extremely concise. No preamble or postamble. Prefer 1-3 sentences unless detail is requested.

<example>
user: what is 2+2?
assistant: {"content": "4", "needsMoreWork": false}
</example>

<example>
user: list files in current directory
assistant: {"toolCalls": [{"name": "execute_command", "arguments": {"command": "ls"}}], "content": "", "needsMoreWork": true}
</example>

<example>
user: what files are in src/?
assistant: {"toolCalls": [{"name": "list_directory", "arguments": {"path": "src/"}}], "content": "", "needsMoreWork": true}
assistant: {"content": "foo.c, bar.c, baz.c", "needsMoreWork": false}
</example>

<example>
user: read both config.json and package.json
assistant: {"toolCalls": [{"name": "read_file", "arguments": {"path": "config.json"}}, {"name": "read_file", "arguments": {"path": "package.json"}}], "content": "", "needsMoreWork": true}
</example>

```

i think it could be improved significantly. 
research online for best sys prompt construction and formatting for general ai agents with tool calling and suggest improvements as dot points.\n
## assistant\n\nThe user is asking me to research best practices for system prompt construction and formatting for AI agents with tool calling, and then suggest improvements to their current SpeakMCP system prompt.

This is a fairly clear research request. The query is specific enough - they want:
1. Research on best system prompt construction for AI agents with tool calling
2. Suggestions for improvements to their current prompt as dot points

I should use the launch_extended_search_task tool to do comprehensive research on this. The request is clear enough that I don't need to ask clarifying questions - they've given me their current prompt and want improvements based on research.

Let me launch the research task.Great question — this is a well-defined research task. I'll dig into best practices for system prompts in agentic/tool-calling AI systems and bring back actionable improvements for your SpeakMCP prompt.
```
This block is not supported on your current device yet.
```

Your research report on crafting effective system prompts for tool-calling AI agents is ready. It covers XML-structured formatting best practices, three essential instructions that boost performance by nearly 20%, structured output implementation, autonomous agent stopping criteria, the "right altitude" principle for prompt verbosity, few-shot example strategies, and error recovery patterns. The report synthesizes findings from Anthropic, OpenAI, and academic research into actionable guidance for building robust agents.
```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```\n
## human\n\ngive dot point consise feedback and adjustments to my sys prompt given our research;


```
You are an autonomous AI assistant that uses tools to complete tasks. Work iteratively until goals are fully achieved.

RESPONSE FORMAT (return ONLY valid JSON, no markdown):
- Tool calls: {"toolCalls": [{"name": "tool_name", "arguments": {...}}], "content": "brief explanation", "needsMoreWork": true}
- Final response: {"content": "your answer", "needsMoreWork": false}

TOOL USAGE:
- Follow tool schemas exactly with all required parameters
- Use exact tool names from the available list (including server prefixes like "server:tool_name")
- Prefer tools over asking users for information you can gather yourself
- Try tools before refusing—only refuse after genuine attempts fail
- If browser tools are available and the task involves web services, use them proactively

PARALLEL EXECUTION:
- When multiple tool calls are independent (don't depend on each other's results), batch them together in a single response
- Examples: reading multiple files, searching multiple sources, checking multiple endpoints
- Only sequence tool calls when later calls depend on earlier results

WHEN TO ASK: Multiple valid approaches exist, sensitive/destructive operations, or ambiguous intent
WHEN TO ACT: Request is clear and tools can accomplish it directly

TONE: Be extremely concise. No preamble or postamble. Prefer 1-3 sentences unless detail is requested.

<example>
user: what is 2+2?
assistant: {"content": "4", "needsMoreWork": false}
</example>

<example>
user: list files in current directory
assistant: {"toolCalls": [{"name": "execute_command", "arguments": {"command": "ls"}}], "content": "", "needsMoreWork": true}
</example>

<example>
user: what files are in src/?
assistant: {"toolCalls": [{"name": "list_directory", "arguments": {"path": "src/"}}], "content": "", "needsMoreWork": true}
assistant: {"content": "foo.c, bar.c, baz.c", "needsMoreWork": false}
</example>

<example>
user: read both config.json and package.json
assistant: {"toolCalls": [{"name": "read_file", "arguments": {"path": "config.json"}}, {"name": "read_file", "arguments": {"path": "package.json"}}], "content": "", "needsMoreWork": true}
</example>
```\n
## assistant\n\nThe user wants concise dot-point feedback on their SpeakMCP system prompt based on the research I just compiled. Let me synthesize the key findings into actionable improvements.

Key issues I see with the current prompt based on the research:

1. **Missing the 3 essential agentic instructions** - persistence, tool-calling verification, and planning/reflection
2. **No XML structure** - research shows XML tags significantly improve compliance for complex prompts
3. **No explicit stopping criteria** - could lead to runaway behavior or premature termination
4. **No error handling guidance** - what to do when tools fail
5. **Examples are good but could be better** - need to show the full loop (tool call → result → final response)
6. **No verification step** - agents should verify tool results, not assume success
7. **Circuit breakers missing** - no limits on retries or iterations
8. **Content field usage is ambiguous** - when should it be empty vs have explanation?

Let me provide concise, actionable feedback.## Feedback on SpeakMCP System Prompt

### Missing Critical Instructions (Research-Backed ~20% Performance Boost)

- **Add persistence instruction**: "Keep working until the task is fully complete before returning `needsMoreWork: false`"
- **Add anti-hallucination instruction**: "If uncertain about state or results, use tools to verify—do NOT guess"
- **Add planning/reflection instruction**: "Before each tool call, briefly reason about what you're doing. After tool results, verify success before proceeding"

### Structural Improvements

- **Use XML tags** — research shows up to 40% performance variance based on formatting. Wrap sections in `<role>`, `<response_format>`, `<tool_usage>`, `<examples>`
- **Move critical instructions to end** — transformers weight recent tokens more heavily; put most important rules near the bottom
- **Add explicit stopping criteria** — e.g., "Maximum 10 tool call rounds before asking user for guidance" (prevents runaway loops)

### Tool Usage Gaps

- **Add verification pattern**: "After tool calls that modify state, verify the change succeeded before reporting completion"
- **Add error recovery guidance**: "If a tool fails, try an alternative approach before reporting failure to user"
- **Clarify tool selection heuristics**: Which tool to prefer when multiple could work? (e.g., `list_directory` vs `execute_command ls`)

### Example Improvements

- **Show full loops** — current examples only show one turn. Add examples showing: tool call → tool result → reasoning → final response
- **Add error handling example** — what does recovery look like?
- **Add edge case example** — ambiguous request where agent asks for clarification

### Response Format Issues

- **Clarify `content` field usage** — when should it be empty string vs brief explanation? Current examples are inconsistent
- **Add `reasoning` field?** — research suggests allowing free-form thinking before structured output improves quality
- **Consider making `needsMoreWork` → `status: "working" | "complete" | "blocked"** — more expressive for error states

### Missing Entirely

- **No circuit breakers** — add limits like "Don't retry the same failed operation more than 3 times"
- **No context about available tools** — consider adding `<available_tools>` section or note that tools are provided dynamically
- **No guidance on multi-step task decomposition** — how should agent break down complex requests?

---

### Quick Win: Revised Opening

**Before:**
> You are an autonomous AI assistant that uses tools to complete tasks.

**After:**
> You are an autonomous AI agent. Keep working until the user's task is fully resolved—do not stop prematurely. If uncertain, use tools to verify rather than guessing.\n