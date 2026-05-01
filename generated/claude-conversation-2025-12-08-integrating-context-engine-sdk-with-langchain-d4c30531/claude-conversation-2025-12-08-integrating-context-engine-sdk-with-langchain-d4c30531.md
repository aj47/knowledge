---
kind: note
id: claude-conversation-2025-12-08-integrating-context-engine-sdk-with-langchain-d4c30531
updatedAt: 1765220075716
createdAt: 1765212737670
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: d4c30531-9faa-4d76-9237-9f0dd058bcfa
created_at: 2025-12-08T16:52:17.670401Z
updated_at: 2025-12-08T18:54:35.716591Z
title: "Integrating context engine SDK with LangChain"
---

# Integrating context engine SDK with LangChain

## Metadata

- Claude conversation UUID: `d4c30531-9faa-4d76-9237-9f0dd058bcfa`
- Created: `2025-12-08T16:52:17.670401Z`
- Updated: `2025-12-08T18:54:35.716591Z`
- Message count: 18
- Transcript chars extracted: 54716

## Claude summary

**Conversation Overview**

The user is working on launching a context engine SDK for their company and wanted to create a video demonstrating its integration with LangChain. Through the conversation, they developed a specific concept for building an AGENTS.md Generator Wizard that combines their Augment Context Engine SDK with LangChain and Exa AI search. The user refined the idea from a simple integration demo to a comprehensive wizard that analyzes codebases and generates lean, project-specific AGENTS.md files following proven best practices.

The conversation evolved through several key phases. Initially focused on basic LangChain integration patterns, it shifted toward building an agent that generates AGENTS.md documentation after discovering research from HumanLayer about effective agent instruction files. The user emphasized two critical insights: AGENTS.md files must be specific to individual projects rather than generic templates, and the wizard should use Exa to fetch current, real examples from GitHub and official documentation rather than relying on potentially outdated LLM training data.

Claude created two comprehensive deliverables: a detailed technical specification document covering architecture, core principles, implementation details, and API design; and a professional video script PDF with precise timestamps, visual directions, and talking points. The technical spec follows the WHAT/WHY/HOW framework and incorporates six core principles derived from analyzing 2,500+ repositories, emphasizing lean files under 100 lines with progressive disclosure patterns. The video script structures a 12-13 minute demo showing the three-phase wizard workflow: discovery using Augment's semantic code analysis, enrichment with Exa's current example fetching, and interactive confirmation before generation. Both documents emphasize the importance of project specificity and current examples as key differentiators from existing auto-generation tools that produce bloated, generic files.

## Quick excerpt

The user is asking about how to create a video demonstrating the integration of their company's "context engine SDK" with LangChain. They want to understand how this integration would work conceptually. Let me think about what a "context engine SDK" might be - it's likely a tool for managing context, memory, or retrieval in AI applications. LangChain is a popular framework for building applications with LLMs. I should explain: 1. What the integration might look like architecturally 2. Common int

## Transcript

## human\n\nmy company is launching a context engine SDK and want me to make a video incorporating it with langchain, how would this work\n
## assistant\n\nThe user is asking about how to create a video demonstrating the integration of their company's "context engine SDK" with LangChain. They want to understand how this integration would work conceptually.

Let me think about what a "context engine SDK" might be - it's likely a tool for managing context, memory, or retrieval in AI applications. LangChain is a popular framework for building applications with LLMs.

I should explain:
1. What the integration might look like architecturally
2. Common integration patterns with LangChain
3. Ideas for what the video could demonstrate

I don't need to search for this since it's a general technical/conceptual question about how SDKs integrate with LangChain, which is well within my knowledge. However, I don't know the specifics of their context engine SDK, so I'll need to be somewhat general or ask clarifying questions.Great project! To give you the most relevant guidance, it helps to understand what your context engine SDK does. But I can outline the typical integration patterns with LangChain:

## Common Integration Points

**1. As a Retriever**
If your SDK handles document/context retrieval, you'd wrap it as a LangChain `BaseRetriever`:

```python
from langchain.schema import BaseRetriever, Document

class ContextEngineRetriever(BaseRetriever):
    def __init__(self, context_engine_client):
        self.client = context_engine_client
    
    def _get_relevant_documents(self, query: str) -> list[Document]:
        results = self.client.search(query)
        return [Document(page_content=r.text, metadata=r.metadata) for r in results]
```

**2. As a Memory Backend**
If it manages conversation history or state:

```python
from langchain.memory import BaseMemory

class ContextEngineMemory(BaseMemory):
    def load_memory_variables(self, inputs):
        return {"context": self.client.get_context(inputs)}
    
    def save_context(self, inputs, outputs):
        self.client.store(inputs, outputs)
```

**3. As a Tool in an Agent**
If it's something the LLM should decide when to call:

```python
from langchain.tools import Tool

context_tool = Tool(
    name="context_engine",
    description="Retrieves relevant context for a query",
    func=context_engine_client.search
)
```

## Video Structure Ideas

1. **Problem intro** – why context management matters
2. **Quick SDK overview** – what it does, key features
3. **Live coding** – build a simple RAG chain or agent using your SDK + LangChain
4. **Demo** – show it working end-to-end
5. **Wrap-up** – next steps, docs link

What does your context engine SDK specifically handle—retrieval, memory, both? That'll help me give you more targeted advice for the demo.\n
## human\n\nit does both retrieval and generation https://augment-mtje7p526w-context-services-docs.mintlify.app/context-services/sdk/examples\n
## assistant\n\nThe user wants me to look at their SDK documentation to understand how it works and help them create a video integrating it with LangChain. Let me fetch that URL to see the examples and understand the SDK better.
```
This block is not supported on your current device yet.
```

This is really helpful! The Augment Context Engine SDK provides:

1. **Direct Context** - API-based indexing and search with semantic search + AI-powered Q&A
2. **FileSystem Context** - Local directory search via MCP protocol
3. **File Search Server** - REST API for semantic code search
4. **Prompt Enhancer Server** - Context-aware prompt enhancement

For a LangChain integration video, there are several great angles:

1. Using the SDK as a retriever in a RAG chain
2. Using the prompt enhancer as a preprocessing step
3. Building an agent that uses the file search as a tool

Let me give them concrete advice on how to structure the video and code.This is a really solid SDK! Now I can give you specific integration ideas. The Augment Context Engine has several great touchpoints with LangChain:

## Integration Approaches for Your Video

### 1. **As a LangChain Retriever (Best for RAG demo)**

Wrap the Direct Context or FileSystem Context as a retriever:

```python
from langchain.schema import BaseRetriever, Document
from typing import List
import subprocess
import json

class AugmentContextRetriever(BaseRetriever):
    """LangChain retriever using Augment's semantic search."""
    
    def __init__(self, workspace_path: str):
        self.workspace_path = workspace_path
    
    def _get_relevant_documents(self, query: str) -> List[Document]:
        # Call the file-search-server or use the SDK directly
        result = requests.get(
            "http://localhost:3000/search",
            params={"q": query}
        ).json()
        
        return [
            Document(page_content=r["content"], metadata={"file": r["path"]})
            for r in result["results"]
        ]
```

### 2. **Prompt Enhancer as a Chain Step**

Use the `/enhance` endpoint as a preprocessing step in your chain:

```python
from langchain.schema.runnable import RunnableLambda

def enhance_prompt(query: str) -> str:
    response = requests.post(
        "http://localhost:3001/enhance",
        json={"prompt": query}
    )
    return response.json()["enhanced_prompt"]

# Use in a chain
chain = (
    RunnableLambda(enhance_prompt)
    | llm
    | output_parser
)
```

### 3. **As an Agent Tool**

```python
from langchain.tools import Tool

augment_search = Tool(
    name="codebase_search",
    description="Search the codebase semantically. Use for finding relevant code, functions, or files.",
    func=lambda q: requests.get(f"http://localhost:3000/search?q={q}").json()
)

agent = create_react_agent(llm, [augment_search], prompt)
```

---

## Video Structure Suggestion

| Section | Time | Content |
|---------|------|---------|
| **Hook** | 0:30 | "What if your LLM actually understood your codebase?" |
| **Problem** | 1:00 | Show a naive RAG failing on code questions |
| **Intro SDK** | 2:00 | Quick overview of Augment Context Engine |
| **Setup** | 2:00 | `npm install`, `auggie login`, start servers |
| **Build Integration** | 5:00 | Live code the LangChain retriever + chain |
| **Demo** | 3:00 | Ask questions, show semantic results |
| **Wrap-up** | 1:00 | Links, next steps |

---

## Killer Demo Idea

Index a real open-source repo, then ask questions like:
- "How does authentication work in this project?"
- "Find where rate limiting is implemented"
- "What's the relationship between UserService and AuthController?"

Show how the Augment retriever surfaces relevant files, then LangChain chains it with an LLM for a complete answer.

Want me to draft a complete working script you could use as a starting point for the demo?\n
## human\n\nit does both retrieval and generation https://augment-mtje7p526w-context-services-docs.mintlify.app/context-services/sdk/overview\n
## assistant\n\nThe user wants me to look at their SDK documentation to understand what it does. Let me fetch the URL they provided.
```
This block is not supported on your current device yet.
```

Now I understand the Augment Context Engine SDK. It provides:

1. **DirectContext** - Explicitly index files from any source with full control
2. **FileSystemContext** - Automatically index and search a local directory

Key methods:
- `addToIndex()` - Index files
- `search()` - Returns formatted string ready for LLM use
- `searchAndAsk()` - One-step Q&A (retrieval + generation)

Let me check if there's more API reference info to give better advice.Let me grab more details from the API reference to give you a complete picture:
```
This block is not supported on your current device yet.
```

I got a permissions error. Let me search for examples instead.
```
This block is not supported on your current device yet.
```

I can't fetch those URLs directly. But I have enough from the overview page. Let me give the user advice based on what I've learned.

The Augment Context Engine SDK has:
1. **DirectContext** - For programmatically indexing content from any source
2. **FileSystemContext** - For indexing local directories

Key methods:
- `search(query)` - Returns formatted string ready for LLM use
- `searchAndAsk(query)` - Combined retrieval + generation (asks a question and gets an answer)
- `addToIndex(files)` - Index files

This is perfect for a LangChain integration video. The user could:
1. Use the SDK's `search()` as a custom retriever
2. Or use `searchAndAsk()` directly for RAG without LangChain's chain
3. Build a hybrid approach

Let me give them a concrete plan.This is a nice SDK. Based on the docs, Augment's Context Engine gives you:

- **`DirectContext`** – programmatically index content from any source
- **`FileSystemContext`** – auto-index a local directory  
- **`search()`** – retrieval (returns formatted context for LLM use)
- **`searchAndAsk()`** – retrieval + generation in one step

## LangChain Integration Approaches

**Option 1: Use as a Custom Retriever (most LangChain-native)**

```typescript
import { BaseRetriever } from "@langchain/core/retrievers";
import { Document } from "@langchain/core/documents";
import { FileSystemContext } from "@augmentcode/auggie-sdk";

class AugmentRetriever extends BaseRetriever {
  lc_namespace = ["augment"];
  private context: FileSystemContext;

  constructor(context: FileSystemContext) {
    super();
    this.context = context;
  }

  async _getRelevantDocuments(query: string): Promise<Document[]> {
    const results = await this.context.search(query);
    // Parse the formatted string into Documents
    return [new Document({ pageContent: results })];
  }
}

// Usage in a RAG chain
const context = await FileSystemContext.create({ directory: "./my-codebase" });
const retriever = new AugmentRetriever(context);

const chain = RunnableSequence.from([
  { context: retriever, question: new RunnablePassthrough() },
  promptTemplate,
  llm,
  new StringOutputParser(),
]);
```

**Option 2: Use `searchAndAsk` as a LangChain Tool (for agents)**

```typescript
import { tool } from "@langchain/core/tools";
import { DirectContext } from "@augmentcode/auggie-sdk";

const context = await DirectContext.create();

const codebaseQA = tool(
  async (input: { question: string }) => {
    return await context.searchAndAsk(input.question);
  },
  {
    name: "codebase_qa",
    description: "Answer questions about the indexed codebase",
    schema: z.object({ question: z.string() }),
  }
);

// Use in an agent
const agent = createReactAgent({ llm, tools: [codebaseQA] });
```

## Video Structure I'd Recommend

| Section | Content | Time |
|---------|---------|------|
| **Hook** | "What if your LLM could actually understand your entire codebase?" | 30s |
| **Problem** | Show generic RAG struggling with code context | 1 min |
| **Intro SDK** | Quick overview of Augment Context Engine | 1 min |
| **Demo 1** | Index a real repo with `FileSystemContext` | 2 min |
| **Demo 2** | Wire it into LangChain as a retriever | 3 min |
| **Demo 3** | Build an agent that uses `searchAndAsk` | 3 min |
| **Compare** | Show quality difference vs vanilla embeddings | 1 min |
| **CTA** | Link to docs, invite to try it | 30s |

## Key Talking Points

1. **Why this matters**: Generic vector DBs chunk code blindly; Augment understands code structure
2. **The `searchAndAsk` hook**: One-liner to go from question → answer with context
3. **State persistence**: `exportToFile()` means you don't re-index every time

Want me to draft a complete working script you could use as your demo code?\n
## human\n\noption 2 seems the best. can we find existing langchian projects around codebases that this would work nicely in\n
## assistant\n\nThe user wants me to find existing LangChain projects focused on codebases where the Augment Context Engine SDK would integrate well. Let me search for popular LangChain codebase/code analysis projects.
```
This block is not supported on your current device yet.
```

Good results. Let me look at a few specific projects that are focused on codebase analysis:
1. priya-dwivedi/chat-with-code - Streamlit app for chatting with GitHub repos
2. LangChain's official code understanding docs
3. The awesome-langchain list mentions "GPT Migrate" for migrating codebases

Let me search for more specific codebase-focused projects and also look at some of these in more detail.
```
This block is not supported on your current device yet.
```

This is a good example project. Let me search for more codebase-related projects, particularly ones that are more active or have more features.
```
This block is not supported on your current device yet.
```

I found some great projects. Let me search for a few more specific ones that would be perfect fits for integrating Augment's Context Engine SDK.
```
This block is not supported on your current device yet.
```

I've found some excellent projects. Now let me look at a few specific ones that would be perfect for integrating the Augment Context Engine SDK. Let me check out Tabby and maybe one more specific project.Excellent finds! Here are the **best existing projects** where Augment's Context Engine SDK would integrate beautifully:

---

## 🎯 Top Picks for Your Video

### 1. **priya-dwivedi/chat-with-code** (Perfect starter)
A simple Streamlit app that clones a GitHub repo and lets you chat with it. Currently uses basic chunking + embeddings.

**Why it's ideal for your video:**
- Simple codebase (~3 files)
- Clear "before/after" comparison opportunity
- Replace their manual chunking with `FileSystemContext`

```typescript
// BEFORE: Manual chunking + Chroma
// AFTER: 
const context = await FileSystemContext.create({ directory: repoPath });
const answer = await context.searchAndAsk(userQuestion);
```

---

### 2. **LangGraph Code Assistant** (Official LangChain example)
LangChain's own tutorial for building code assistants with RAG + self-correction.

**Why it's ideal:**
- Official LangChain content = credibility
- Shows iterative code generation workflow
- You can swap their `RecursiveUrlLoader` approach with Augment's SDK

---

### 3. **TabbyML/tabby** (Production-grade)
Self-hosted Copilot alternative with 23k+ stars. Has existing context/retrieval infrastructure.

**Why it's ideal:**
- Shows enterprise use case
- You could demo replacing their retrieval layer
- "What if Tabby used Augment for context?" angle

---

### 4. **Sourcegraph Cody** (mentioned in search)
Known for "deep codebase understanding" - direct competitor angle.

---

## 📹 Recommended Video Approach

**Fork `chat-with-code`** and show the transformation:

| Before (Original) | After (With Augment SDK) |
|-------------------|--------------------------|
| Manual `LanguageParser` chunking | `FileSystemContext.create()` |
| Basic embedding similarity | Augment's semantic code search |
| Separate retrieval + LLM calls | Single `searchAndAsk()` |
| ~50 lines of setup code | ~5 lines |

### Demo Script Outline

```typescript
import { tool } from "@langchain/core/tools";
import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { DirectContext } from "@augmentcode/auggie-sdk";
import { z } from "zod";

// 1. Initialize Augment Context Engine
const context = await DirectContext.create();

// 2. Index a GitHub repo (or use FileSystemContext for local)
await context.addToIndex(repoFiles); // your indexed codebase

// 3. Create LangChain tools powered by Augment
const codeSearch = tool(
  async ({ query }) => await context.search(query),
  {
    name: "code_search",
    description: "Search the codebase for relevant code snippets",
    schema: z.object({ query: z.string() }),
  }
);

const codeQA = tool(
  async ({ question }) => await context.searchAndAsk(question),
  {
    name: "code_qa", 
    description: "Answer questions about the codebase with full context",
    schema: z.object({ question: z.string() }),
  }
);

// 4. Build the agent
const agent = createReactAgent({
  llm: new ChatOpenAI({ model: "gpt-4o" }),
  tools: [codeSearch, codeQA],
});

// 5. Run it
const result = await agent.invoke({
  messages: [{ role: "user", content: "How does authentication work in this repo?" }]
});
```

---

## 🎬 Video Hook Ideas

1. **"I replaced 200 lines of RAG code with 5 lines"** – show the diff
2. **"What if your code assistant actually understood your codebase?"** – demo quality difference  
3. **"Building a Cursor/Copilot clone in 10 minutes"** – speed run with Augment + LangChain

Want me to help you build out the full demo repo or draft a script for the video?\n
## human\n\nok new idea;

i want to make an agents.md generation agent/wizard using langchain and augment code context engine sdk\n
## assistant\n\nThe user wants to create an agent that generates `agents.md` files. This is referring to the agents.md convention - a file that describes AI agents in a codebase, similar to how README.md describes a project. This is a brilliant idea because:

1. It combines Augment's codebase understanding with LangChain agent capabilities
2. It's a meta/recursive concept - an agent that generates documentation for agents
3. It's practical and useful - teams adopting AI agents need documentation standards

Let me think about what agents.md typically contains and how this would work:

1. The agent would use Augment's Context Engine to understand the codebase
2. It would identify agent-related code (LangGraph graphs, LangChain agents, tool definitions, etc.)
3. It would generate a structured agents.md file documenting:
   - What agents exist
   - What tools they have access to
   - What their capabilities are
   - How they're configured
   - Entry points
   - etc.

This is a great video concept because:
- It's novel and useful
- It showcases both Augment SDK and LangChain
- It's self-referential in an interesting way
- It solves a real problem (documenting AI agents)

Let me search for what agents.md convention looks like to give accurate guidance.That's a brilliant idea! An agent that analyzes a codebase and generates `agents.md` documentation. Very meta. Let me look up the agents.md spec to make sure we nail the format:
```
This block is not supported on your current device yet.
```

This is fantastic research. Now I have a complete picture of what AGENTS.md is:

1. It's a standard Markdown file for guiding AI coding agents
2. Supported by OpenAI Codex, Cursor, Jules (Google), Factory, Aider, etc.
3. Key sections include:
   - Build/Test commands
   - Project structure
   - Code style/conventions
   - Git workflows
   - Boundaries (do/don't)
   - Architecture overview
   - Security considerations

The user wants to build an agent that GENERATES these files by analyzing a codebase. This is a perfect use case for:
1. Augment Context Engine SDK - to understand the codebase
2. LangChain/LangGraph - to orchestrate the agent workflow

Let me design this properly.This is a killer idea. An agent that analyzes any codebase and generates a high-quality `AGENTS.md` file automatically. Here's the full concept:

---

## 🧙 AGENTS.md Generator Agent

### The Problem
- AGENTS.md is used by over 20k open-source projects
- Agents read AGENTS.md before planning any change, giving them the same tribal knowledge senior engineers already carry in their heads
- But writing a good one is tedious—you need to document build commands, conventions, architecture, boundaries...

### The Solution
An agent powered by **Augment Context Engine + LangChain** that:
1. Indexes your codebase
2. Analyzes structure, patterns, and conventions
3. Generates a production-ready `AGENTS.md`

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    AGENTS.md Generator                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │   Augment    │───▶│  Analysis    │───▶│  Generator   │  │
│  │   Context    │    │   Agent      │    │    Agent     │  │
│  │   Engine     │    │  (LangGraph) │    │  (LangGraph) │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│         │                   │                    │          │
│         ▼                   ▼                    ▼          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    Tools                              │  │
│  │  • search_code      • find_tests                     │  │
│  │  • find_configs     • detect_patterns                │  │
│  │  • ask_codebase     • extract_commands               │  │
│  └──────────────────────────────────────────────────────┘  │
│                            │                                │
│                            ▼                                │
│                    ┌──────────────┐                        │
│                    │  AGENTS.md   │                        │
│                    └──────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

---

## Core Implementation

```typescript
import { StateGraph, START, END } from "@langchain/langgraph";
import { ChatAnthropic } from "@langchain/anthropic";
import { tool } from "@langchain/core/tools";
import { FileSystemContext } from "@augmentcode/auggie-sdk";
import { z } from "zod";

// 1. Initialize Augment Context Engine
const context = await FileSystemContext.create({
  directory: process.argv[2] || ".",
});

// 2. Define tools powered by Augment
const searchCode = tool(
  async ({ query }) => await context.search(query),
  {
    name: "search_code",
    description: "Search the codebase for specific patterns, files, or concepts",
    schema: z.object({ query: z.string() }),
  }
);

const askCodebase = tool(
  async ({ question }) => await context.searchAndAsk(question),
  {
    name: "ask_codebase",
    description: "Ask a question about the codebase and get a synthesized answer",
    schema: z.object({ question: z.string() }),
  }
);

// 3. Define the state
interface AgentState {
  // Discovered information
  projectName: string;
  packageManager: string;
  framework: string;
  buildCommands: string[];
  testCommands: string[];
  lintCommands: string[];
  projectStructure: string;
  codeConventions: string[];
  securityNotes: string[];
  boundaries: { do: string[]; dont: string[] };
  
  // Generation
  generatedAgentsMd: string;
  
  // Control
  currentPhase: string;
  messages: any[];
}

// 4. Define analysis nodes
async function analyzeProjectSetup(state: AgentState) {
  const results = await askCodebase.invoke({
    question: "What package manager is used? What are the main build, test, and lint commands in package.json or similar config files?"
  });
  
  // Parse and extract...
  return {
    packageManager: /* extracted */,
    buildCommands: /* extracted */,
    testCommands: /* extracted */,
  };
}

async function analyzeStructure(state: AgentState) {
  const results = await askCodebase.invoke({
    question: "What is the project structure? What are the main directories and their purposes?"
  });
  
  return { projectStructure: results };
}

async function analyzeConventions(state: AgentState) {
  const results = await askCodebase.invoke({
    question: "What coding conventions are used? Look at ESLint configs, Prettier configs, TypeScript settings, and actual code patterns."
  });
  
  return { codeConventions: /* extracted */ };
}

async function detectBoundaries(state: AgentState) {
  const results = await askCodebase.invoke({
    question: "What files or directories should never be modified by agents? Look for .gitignore patterns, environment files, secrets, vendor directories, generated code."
  });
  
  return { 
    boundaries: {
      do: /* extracted safe operations */,
      dont: /* extracted forbidden operations */
    }
  };
}

async function generateAgentsMd(state: AgentState) {
  const llm = new ChatAnthropic({ model: "claude-sonnet-4-20250514" });
  
  const prompt = `Generate an AGENTS.md file based on this analysis:

Project: ${state.projectName}
Package Manager: ${state.packageManager}
Framework: ${state.framework}

## Commands
Build: ${state.buildCommands.join(", ")}
Test: ${state.testCommands.join(", ")}
Lint: ${state.lintCommands.join(", ")}

## Structure
${state.projectStructure}

## Conventions
${state.codeConventions.join("\n")}

## Boundaries
Do: ${state.boundaries.do.join(", ")}
Don't: ${state.boundaries.dont.join(", ")}

Generate a concise (<150 lines) AGENTS.md following best practices:
- Executable commands in backticks
- Clear do/don't sections
- Project structure overview
- Testing instructions
- PR guidelines`;

  const result = await llm.invoke(prompt);
  return { generatedAgentsMd: result.content };
}

// 5. Build the graph
const workflow = new StateGraph<AgentState>({
  channels: {
    projectName: { default: () => "" },
    packageManager: { default: () => "" },
    // ... other channels
  }
})
  .addNode("analyze_setup", analyzeProjectSetup)
  .addNode("analyze_structure", analyzeStructure)
  .addNode("analyze_conventions", analyzeConventions)
  .addNode("detect_boundaries", detectBoundaries)
  .addNode("generate", generateAgentsMd)
  .addEdge(START, "analyze_setup")
  .addEdge("analyze_setup", "analyze_structure")
  .addEdge("analyze_structure", "analyze_conventions")
  .addEdge("analyze_conventions", "detect_boundaries")
  .addEdge("detect_boundaries", "generate")
  .addEdge("generate", END);

const app = workflow.compile();

// 6. Run it
const result = await app.invoke({});
console.log(result.generatedAgentsMd);
```

---

## Key Sections to Analyze & Generate

Based on the GitHub blog analysis of 2,500+ repos, cover six core areas: commands, testing, project structure, code style, git workflow, and boundaries:

| Section | What to Detect | Augment Query |
|---------|---------------|---------------|
| **Commands** | package.json scripts, Makefile, CI configs | `"What are the build, test, lint commands?"` |
| **Testing** | Test framework, coverage requirements | `"How are tests structured? What testing framework?"` |
| **Structure** | Directory layout, module organization | `"Explain the project directory structure"` |
| **Code Style** | ESLint, Prettier, naming conventions | `"What linting and formatting rules are configured?"` |
| **Git Workflow** | Branch naming, commit conventions | `"What git workflow or commit conventions are used?"` |
| **Boundaries** | Protected files, security concerns | `"What files should never be modified automatically?"` |

---

## Interactive Wizard Mode

Make it conversational for the video:

```typescript
// Add a "wizard" mode that asks clarifying questions
async function wizardMode(state: AgentState) {
  const llm = new ChatAnthropic({ model: "claude-sonnet-4-20250514" });
  
  // After initial analysis, ask user for confirmation/additions
  const questions = [
    `I detected you're using ${state.packageManager}. Is that correct?`,
    `I found these test commands: ${state.testCommands}. Any others?`,
    `Any specific files/folders agents should NEVER touch?`,
    `Any coding conventions I might have missed?`,
  ];
  
  // Interactive loop...
}
```

---

## Video Demo Flow

1. **Hook** (30s): "Every AI coding agent needs an AGENTS.md, but nobody wants to write one"
2. **Problem** (1m): Show a repo without AGENTS.md, agent makes mistakes
3. **Solution intro** (1m): Introduce the generator agent concept
4. **Live demo** (5m):
   - Point at a real open-source repo
   - Run the agent
   - Watch it analyze structure, commands, conventions
   - Generate AGENTS.md
5. **Before/After** (2m): Show same task with and without the generated AGENTS.md
6. **Code walkthrough** (3m): Show Augment + LangChain integration
7. **CTA** (30s): Links to Augment SDK, code repo

---

Want me to build out the full working implementation, or focus on a specific part first?\n
## human\n\nwhat can we learn from https://www.humanlayer.dev/blog/writing-a-good-claude-md to design our wizard\n
## assistant\n\nThe user wants me to fetch this URL about writing a good CLAUDE.md file to learn best practices that could inform the design of our AGENTS.md generator wizard.
```
This block is not supported on your current device yet.
```

This is excellent content! It has a lot of principles about writing good CLAUDE.md/AGENTS.md files that we should incorporate into our wizard design. Let me extract the key learnings and apply them to our AGENTS.md generator.This is gold! Here are the key learnings to apply to our wizard:

---

## 🎯 Key Principles from HumanLayer

### 1. **Less Is More**
Frontier thinking LLMs can follow ~150-200 instructions with reasonable consistency. As instruction count increases, instruction-following quality decreases uniformly.

**Implication for our wizard:** Don't generate a 500-line AGENTS.md. Target **< 60-100 lines** of high-signal content.

---

### 2. **The WHAT / WHY / HOW Framework**
At a high level, this should cover: **WHAT**: tell Claude about the tech, your stack, the project structure. **WHY**: tell Claude the *purpose* of the project. **HOW**: tell Claude how it should work on the project.

**Implication:** Structure our wizard around these three pillars, not arbitrary sections.

---

### 3. **Universal Applicability**
Since `CLAUDE.md` goes into *every single session*, you should ensure that its contents are as universally applicable as possible. Avoid including instructions about (for example) how to structure a new database schema - this won't matter when you're working on something else!

**Implication:** Our wizard should filter OUT context-specific instructions and only keep universally relevant ones.

---

### 4. **Progressive Disclosure Pattern**
Instead of including all your different instructions in your `CLAUDE.md` file, keep task-specific instructions in *separate markdown files* with self-descriptive names. Then include a list of these files with a brief description, and instruct Claude to decide which are relevant.

```
agent_docs/
  |- building_the_project.md
  |- running_tests.md 
  |- code_conventions.md
  |- service_architecture.md
```

**Implication:** Our wizard should generate BOTH:
- A lean root `AGENTS.md`
- Separate detailed docs it points to

---

### 5. **Don't Be a Linter**
Never send an LLM to do a linter's job. LLMs are comparably expensive and *incredibly* slow. Code style guidelines will inevitably add a bunch of instructions and mostly-irrelevant code snippets into your context window.

**Implication:** Don't dump ESLint rules into AGENTS.md. Instead, just say "run `npm run lint`".

---

### 6. **Don't Auto-Generate Blindly**
`CLAUDE.md` is the highest leverage point of the harness, so avoid auto-generating it. You should carefully craft its contents for best results.

**Implication:** Our wizard should be **interactive**, not fully automatic. Generate a draft, then let the user refine it.

---

## 🧙 Revised Wizard Design

Based on these principles, here's an improved architecture:

```typescript
import { StateGraph, START, END, Annotation } from "@langchain/langgraph";
import { ChatAnthropic } from "@langchain/anthropic";
import { FileSystemContext } from "@augmentcode/auggie-sdk";
import { HumanMessage } from "@langchain/core/messages";
import * as readline from "readline";

// State definition
const WizardState = Annotation.Root({
  // Discovery phase
  projectPath: Annotation<string>,
  
  // WHAT - The tech/stack/structure
  techStack: Annotation<{
    language: string;
    framework: string;
    packageManager: string;
    keyDependencies: string[];
  }>,
  projectStructure: Annotation<string>,
  
  // WHY - Purpose
  projectPurpose: Annotation<string>,
  
  // HOW - Working with it
  commands: Annotation<{
    build: string[];
    test: string[];
    lint: string[];
    dev: string[];
  }>,
  
  // Boundaries (universally applicable only)
  boundaries: Annotation<{
    neverTouch: string[];
    alwaysDo: string[];
  }>,
  
  // Progressive disclosure - separate docs to generate
  detailedDocs: Annotation<{
    name: string;
    description: string;
    content: string;
  }[]>,
  
  // Output
  generatedAgentsMd: Annotation<string>,
  
  // Wizard control
  userConfirmations: Annotation<Record<string, boolean>>,
  currentStep: Annotation<string>,
});

// Initialize Augment
const context = await FileSystemContext.create({
  directory: process.argv[2] || ".",
});

// Helper for user interaction
async function askUser(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// ============================================
// PHASE 1: Discovery (automated via Augment)
// ============================================

async function discoverWhat(state: typeof WizardState.State) {
  console.log("\n🔍 Analyzing your codebase...\n");
  
  // Use Augment to understand the tech stack
  const stackAnalysis = await context.searchAndAsk(
    "What programming language, framework, and package manager does this project use? List the key dependencies."
  );
  
  const structureAnalysis = await context.searchAndAsk(
    "Describe the high-level directory structure. What are the main folders and what do they contain?"
  );
  
  // Parse results (simplified - would use structured output in production)
  return {
    techStack: {
      language: /* extracted */,
      framework: /* extracted */,
      packageManager: /* extracted */,
      keyDependencies: /* extracted */,
    },
    projectStructure: structureAnalysis,
  };
}

async function discoverHow(state: typeof WizardState.State) {
  // Find commands from package.json, Makefile, etc.
  const commandsAnalysis = await context.searchAndAsk(
    "What are the exact commands to: 1) build the project, 2) run tests, 3) run linting, 4) start dev server? Give me the exact CLI commands."
  );
  
  return {
    commands: /* parsed from analysis */,
  };
}

async function discoverBoundaries(state: typeof WizardState.State) {
  const boundaryAnalysis = await context.searchAndAsk(
    "What files or directories should NEVER be modified by automated tools? Look for: .env files, secrets, generated code, vendor directories, lock files."
  );
  
  return {
    boundaries: {
      neverTouch: /* extracted */,
      alwaysDo: ["Run tests before committing", "Run linter after changes"],
    },
  };
}

// ============================================
// PHASE 2: Interactive Confirmation
// ============================================

async function confirmWithUser(state: typeof WizardState.State) {
  console.log("\n📋 Here's what I discovered:\n");
  
  console.log(`**Tech Stack**: ${state.techStack.language} / ${state.techStack.framework}`);
  console.log(`**Package Manager**: ${state.techStack.packageManager}`);
  console.log(`**Build Command**: ${state.commands.build.join(" && ")}`);
  console.log(`**Test Command**: ${state.commands.test.join(" && ")}`);
  
  // Ask for purpose (can't be auto-detected well)
  const purpose = await askUser(
    "\n❓ What is the PURPOSE of this project? (1-2 sentences)\n> "
  );
  
  // Ask for any corrections
  const corrections = await askUser(
    "\n❓ Any corrections or additions? (press Enter to skip)\n> "
  );
  
  // Ask about detailed docs
  const wantDetailedDocs = await askUser(
    "\n❓ Generate separate detailed docs (agent_docs/)? [y/N]\n> "
  );
  
  return {
    projectPurpose: purpose,
    userConfirmations: {
      generateDetailedDocs: wantDetailedDocs.toLowerCase() === "y",
      corrections: corrections,
    },
  };
}

// ============================================
// PHASE 3: Generation
// ============================================

async function generateLeanAgentsMd(state: typeof WizardState.State) {
  const llm = new ChatAnthropic({ model: "claude-sonnet-4-20250514" });
  
  const prompt = `Generate a LEAN AGENTS.md file (<80 lines) following these principles:
  
1. LESS IS MORE - only universally applicable instructions
2. No code style rules (that's what linters are for)
3. Use the WHAT/WHY/HOW structure
4. Pointers over copies - reference files, don't duplicate content
5. Commands must be exact and copy-pasteable

## Project Info
- Purpose: ${state.projectPurpose}
- Stack: ${state.techStack.language} / ${state.techStack.framework}
- Package Manager: ${state.techStack.packageManager}

## Structure
${state.projectStructure}

## Commands
- Build: ${state.commands.build.join(" && ")}
- Test: ${state.commands.test.join(" && ")}  
- Lint: ${state.commands.lint.join(" && ")}
- Dev: ${state.commands.dev.join(" && ")}

## Boundaries
Never touch: ${state.boundaries.neverTouch.join(", ")}
Always do: ${state.boundaries.alwaysDo.join(", ")}

${state.userConfirmations.generateDetailedDocs ? `
## Progressive Disclosure
Point to these docs in agent_docs/:
- building_the_project.md - detailed build instructions
- running_tests.md - test patterns and coverage requirements
- architecture.md - system design and module responsibilities
` : ""}

Generate the AGENTS.md now. Remember: CONCISE and UNIVERSALLY APPLICABLE only.`;

  const result = await llm.invoke([new HumanMessage(prompt)]);
  return { generatedAgentsMd: result.content as string };
}

async function generateDetailedDocs(state: typeof WizardState.State) {
  if (!state.userConfirmations.generateDetailedDocs) {
    return { detailedDocs: [] };
  }
  
  const llm = new ChatAnthropic({ model: "claude-sonnet-4-20250514" });
  
  // Generate separate detailed docs
  const docs = [];
  
  // Architecture doc
  const archContent = await context.searchAndAsk(
    "Explain the architecture of this project. What are the main modules, how do they communicate, what are the key abstractions?"
  );
  docs.push({
    name: "architecture.md",
    description: "System architecture and module responsibilities",
    content: archContent,
  });
  
  // Testing doc
  const testContent = await context.searchAndAsk(
    "How are tests organized in this project? What testing frameworks are used? What are the testing conventions?"
  );
  docs.push({
    name: "running_tests.md", 
    description: "Test patterns and how to run them",
    content: testContent,
  });
  
  return { detailedDocs: docs };
}

// ============================================
// Build the Graph
// ============================================

const wizard = new StateGraph(WizardState)
  // Discovery phase (parallel where possible)
  .addNode("discover_what", discoverWhat)
  .addNode("discover_how", discoverHow)
  .addNode("discover_boundaries", discoverBoundaries)
  
  // Interactive phase
  .addNode("confirm_with_user", confirmWithUser)
  
  // Generation phase
  .addNode("generate_agents_md", generateLeanAgentsMd)
  .addNode("generate_detailed_docs", generateDetailedDocs)
  
  // Edges
  .addEdge(START, "discover_what")
  .addEdge("discover_what", "discover_how")
  .addEdge("discover_how", "discover_boundaries")
  .addEdge("discover_boundaries", "confirm_with_user")
  .addEdge("confirm_with_user", "generate_agents_md")
  .addEdge("generate_agents_md", "generate_detailed_docs")
  .addEdge("generate_detailed_docs", END);

const app = wizard.compile();
```

---

## 📊 Wizard Flow Visualization

```
┌─────────────────────────────────────────────────────────────────┐
│                    AGENTS.md Wizard                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  PHASE 1: DISCOVERY (Automated via Augment)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │ Discover    │  │ Discover    │  │ Discover    │             │
│  │ WHAT        │  │ HOW         │  │ BOUNDARIES  │             │
│  │ (stack,     │  │ (commands,  │  │ (never      │             │
│  │  structure) │  │  scripts)   │  │  touch)     │             │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘             │
│         └────────────────┼────────────────┘                     │
│                          ▼                                       │
│  PHASE 2: CONFIRMATION (Interactive)                            │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  "Here's what I found..."                                 │  │
│  │  ❓ What is the PURPOSE? (user input)                     │  │
│  │  ❓ Any corrections? (user input)                         │  │
│  │  ❓ Generate detailed docs? [y/N]                         │  │
│  └──────────────────────────┬───────────────────────────────┘  │
│                              ▼                                   │
│  PHASE 3: GENERATION                                            │
│  ┌─────────────────┐    ┌─────────────────┐                    │
│  │ Generate LEAN   │    │ Generate        │                    │
│  │ AGENTS.md       │───▶│ agent_docs/*    │                    │
│  │ (<80 lines)     │    │ (if requested)  │                    │
│  └─────────────────┘    └─────────────────┘                    │
│                              │                                   │
│                              ▼                                   │
│                    ┌─────────────────┐                          │
│                    │   Output Files  │                          │
│                    │  • AGENTS.md    │                          │
│                    │  • agent_docs/  │                          │
│                    └─────────────────┘                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Example Output: Lean AGENTS.md

Based on the HumanLayer principles, here's what a generated file might look like:

```markdown
# AGENTS.md

## Why
Task management API for small teams. Focuses on simplicity over features.

## What
- **Stack**: TypeScript, Node.js, Express, PostgreSQL
- **Structure**: `src/` (app code), `tests/` (jest tests), `migrations/` (db)
- **Key files**: `src/index.ts` (entry), `src/routes/` (API endpoints)

## How

### Commands
```bash
pnpm install          # Install deps
pnpm dev              # Start dev server  
pnpm test             # Run all tests
pnpm lint             # Lint & format
pnpm build            # Production build
```

### Verification
Always run before committing:
```bash
pnpm lint && pnpm test
```

## Boundaries

### Never touch
- `.env*` files (secrets)
- `pnpm-lock.yaml` (auto-generated)
- `dist/` (build output)
- `migrations/` without explicit ask

### Always do
- Run tests after code changes
- Run linter before committing

## More Context
See `agent_docs/` for detailed guides:
- `architecture.md` - system design
- `running_tests.md` - test patterns
- `database.md` - schema and migrations
```

**~50 lines. Universally applicable. Actionable.**

---

## Video Demo Angle

This gives you a great story arc:

1. **"Auto-generated AGENTS.md files suck"** - show a bloated 300-line file
2. **"Here's why"** - reference the HumanLayer research on instruction limits
3. **"Our wizard follows the principles"** - WHAT/WHY/HOW, progressive disclosure
4. **Live demo** - run the wizard on a real repo
5. **Before/After** - show Claude Code ignoring the bloated file vs following the lean one

Want me to flesh out the full implementation with proper TypeScript types and error handling?\n
## human\n\nwrite a markdown spec\n
## assistant\n\nThe user wants me to create a comprehensive markdown specification document for the AGENTS.md Generator Wizard. This should be a detailed spec that covers:

1. Overview/Introduction
2. Goals and Non-Goals
3. Architecture
4. Core Concepts/Principles (based on what we learned)
5. Implementation Details
6. API/Interface Design
7. Output Format
8. Examples
9. Future considerations

Let me create a thorough spec document.
```
This block is not supported on your current device yet.
```

I've created a comprehensive spec. Let me move it to the outputs directory so the user can access it.
```
This block is not supported on your current device yet.
```

Great, now I can share this with the user.[View your spec](computer:///mnt/user-data/outputs/agents-md-wizard-spec.md)

Created a comprehensive spec covering:

| Section | Highlights |
|---------|------------|
| **Core Principles** | 6 principles distilled from HumanLayer + GitHub research (less is more, WHAT/WHY/HOW, progressive disclosure, etc.) |
| **Architecture** | Augment Context Engine → LangGraph workflow → lean output |
| **Wizard Flow** | 3 phases: Discovery (automated), Confirmation (interactive), Generation |
| **Output Spec** | Template for <100 line AGENTS.md + optional `agent_docs/` |
| **CLI Interface** | `agents-wizard init`, `update`, `validate` commands with example session |
| **Examples** | Minimal Node.js project (42 lines) + Monorepo (78 lines) |
| **Appendices** | Augment SDK integration code, LangGraph state schema |

Key design decisions based on what we learned:

1. **Interactive, not automatic** — The spec requires user confirmation of purpose (can't be auto-detected) and corrections before generation

2. **Strict line budget** — Target <100 lines, validation fails if exceeded

3. **Progressive disclosure built-in** — Optional `agent_docs/` directory for detailed context that doesn't bloat the main file

4. **No style guidelines** — Explicitly excluded; that's what linters are for

5. **State persistence** — `.agents-wizard.json` enables regeneration when codebase changes

Want me to start implementing this, or refine any section of the spec first?\n
## human\n\nnow also create a pdf of the video script\n
## assistant\n\nThe user wants me to create a PDF of a video script for the AGENTS.md Generator Wizard. I should create a compelling video script that covers the problem, solution, and demo of the tool, then generate it as a PDF.

Let me first read the PDF skill to understand how to create PDFs properly.
```
This block is not supported on your current device yet.
```

Now I need to create a video script PDF using reportlab. Let me create a compelling video script for the AGENTS.md Generator Wizard demo video.
```
This block is not supported on your current device yet.
```

Now I need to run this script to generate the PDF. First, let me make sure reportlab is installed.
```
This block is not supported on your current device yet.
```

The 'Code' style already exists in the default stylesheet. Let me rename it to avoid the conflict.
```
This block is not supported on your current device yet.
```

Now I need to also update the reference to the 'Code' style in the create_scene function where it's used.
```
This block is not supported on your current device yet.
```

Now let me run the script again.
```
This block is not supported on your current device yet.
```

Now let me copy the PDF to the outputs folder so the user can download it.
```
This block is not supported on your current device yet.
```

Both files are now in the outputs directory. Let me provide the user with both links.Done! Here are both deliverables:

**[View the Video Script PDF](computer:///mnt/user-data/outputs/agents-md-wizard-video-script.pdf)**

**[View the Technical Spec](computer:///mnt/user-data/outputs/agents-md-wizard-spec.md)**

---

The video script PDF includes:

| Section | Timestamp | Content |
|---------|-----------|---------|
| **Hook** | 0:00-0:30 | Split screen showing bloated vs lean AGENTS.md |
| **Why It Matters** | 0:30-2:00 | HumanLayer research, instruction limits, opportunity framing |
| **The Solution** | 2:00-3:30 | Architecture intro, 6 core principles |
| **Live Demo** | 3:30-7:30 | Full wizard walkthrough (discovery → confirmation → generation) |
| **Under the Hood** | 7:30-9:30 | Augment SDK code, LangGraph workflow |
| **The Proof** | 9:30-10:30 | Before/after agent behavior comparison |
| **CTA** | 10:30-11:30 | Try Augment, star repo, subscribe |
| **Appendix** | — | B-roll list, key talking points |

Each scene includes:
- ⏱️ Timestamp
- 🎬 Visual direction
- 📝 Script (what to say)
- 💡 Key points to emphasize
- 💻 Code snippets where relevant

Ready to start building the actual implementation?\n
## human\n\nin hook and video mention how agents.md must be specific to you and your project so just grabbing one offline doesnt always make sense. also include how we will use exa in the wizard to gather real code examples relevant to the most current docs and github\n
## assistant\n\nThe user wants me to:
1. Update the video script PDF to include two new points:
   - AGENTS.md must be specific to your project - you can't just grab a generic one
   - We'll use Exa (the AI search API) to gather real code examples from current docs and GitHub

Let me update the script to incorporate these points. I should:
1. Add the "specificity" point to the hook section
2. Add Exa as part of the solution/architecture
3. Show how Exa fetches real examples during the demo

Let me update the Python script and regenerate the PDF.
```
This block is not supported on your current device yet.
```

Now I have good info on Exa. Key points:
- Exa has a `get_code_context_exa` tool specifically for searching code examples, docs, and GitHub repos
- Can search with domain filters (include_domains=["github.com", specific docs sites])
- Can search with date filters to get recent content
- Has neural/semantic search capabilities

Now let me update the video script to include:
1. The "specificity" angle in the hook - AGENTS.md must be specific to YOUR project
2. Exa integration for fetching real, current code examples

Let me rewrite the PDF generation script with these additions.Now let me update the video script to include these important points:
```
This block is not supported on your current device yet.
```

Now I need to add Exa to the solution section and update the architecture description. Let me also add an Exa-specific scene in the demo section.
```
This block is not supported on your current device yet.
```

Now I need to add an Exa scene in the demo section to show it fetching real examples. Let me update the Phase 1: Discovery section.
```
This block is not supported on your current device yet.
```

Now let me update the code walkthrough section to include Exa integration code, and update the timestamps since we've added content.
```
This block is not supported on your current device yet.
```

I need to continue updating timestamps for subsequent sections. Let me update the Phase 3 and onwards.
```
This block is not supported on your current device yet.
```

Now let me update the Output Review and subsequent sections.
```
This block is not supported on your current device yet.
```

Now update the code walkthrough section to add Exa integration code.
```
This block is not supported on your current device yet.
```

Now let me update the before/after section and wrap up with updated timestamps.
```
This block is not supported on your current device yet.
```

Now I need to update the metadata table and key talking points to include Exa and the specificity angle. Let me also update the B-roll assets list.
```
This block is not supported on your current device yet.
```

Now update the overview and assets sections.
```
This block is not supported on your current device yet.
```

Now update the B-roll assets list to include Exa-related assets and update the key talking points.
```
This block is not supported on your current device yet.
```

Finally, update the key talking points.
```
This block is not supported on your current device yet.
```

Now let me regenerate the PDF.
```
This block is not supported on your current device yet.
```

The PDF was generated successfully (the warning is just about the escape sequence in the string, but it doesn't affect the output). Now let me also update the spec markdown file to include Exa in the architecture.Now let me also update the spec to include Exa:
```
This block is not supported on your current device yet.
```

Let me also update the architecture section and add Exa to the components table.
```
This block is not supported on your current device yet.
```

Let me add an Exa appendix to the spec and update the wizard flow to include Exa enrichment step.
```
This block is not supported on your current device yet.
```

Now let me update the state schema to include Exa-related fields.
```
This block is not supported on your current device yet.
```

Now let me update the references section to include Exa.
```
This block is not supported on your current device yet.
```

Now let me copy the updated spec to outputs.
```
This block is not supported on your current device yet.
```

Both files are updated and in the outputs folder. Let me provide a summary to the user.Both files updated with the specificity angle and Exa integration:

**[View Updated Video Script PDF](computer:///mnt/user-data/outputs/agents-md-wizard-video-script.pdf)**

**[View Updated Technical Spec](computer:///mnt/user-data/outputs/agents-md-wizard-spec.md)**

---

## Key Updates Made

### Hook (0:00 - 1:00)
Added a new scene specifically about the **specificity problem**:
> *"You can't just grab an AGENTS.md template from GitHub and drop it in your project. These files MUST be specific to YOUR codebase — your stack, your commands, your conventions. A React AGENTS.md won't help a Python project."*

### Solution Section (2:00 - 3:45)
Now introduces **three tools** instead of two:
1. **Augment** — understands YOUR specific codebase
2. **Exa** — fetches CURRENT examples from real docs and GitHub
3. **LangGraph** — orchestrates the workflow

New scene explaining why Exa matters:
> *"When we detect you're using Prisma — we don't just document that fact. We use Exa to search GitHub and the Prisma docs for the CURRENT best practices. This means your AGENTS.md includes examples accurate as of TODAY."*

### Demo Section (5:00 - 5:45)
New **Phase 1b: Enrichment with Exa** scene showing:
- Terminal fetching real examples from official docs
- Domain filtering to authoritative sources only
- Date filtering for recent content (last 90 days)

### Code Walkthrough (8:45 - 9:30)
New dedicated scene for **Exa Integration** with code:
```typescript
const examples = await exa.searchAndContents(
  `${framework} testing best practices`,
  {
    includeDomains: [officialDocs, "github.com"],
    startPublishedDate: "2024-06-01",
    numResults: 5
  }
);
```

### Updated Key Talking Points
- "Project-specific is non-negotiable"
- "Current examples matter — Exa fetches today's best practices, not last year's training data"
- "Three tools, one workflow: Augment (your code) + Exa (current docs) + LangGraph (orchestration)"

Ready to start implementing?\n