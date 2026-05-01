---
kind: note
id: claude-conversation-2026-02-06-custom-claude-api-configuration-with-baseurl-and-model-57fd1cc8
updatedAt: 1770402162310
createdAt: 1770402137141
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 57fd1cc8-9ff8-4adf-a458-2ff6b4c3a7f5
created_at: 2026-02-06T18:22:17.141305Z
updated_at: 2026-02-06T18:22:42.310839Z
title: "Custom Claude API configuration with baseurl and model"
---

# Custom Claude API configuration with baseurl and model

## Metadata

- Claude conversation UUID: `57fd1cc8-9ff8-4adf-a458-2ff6b4c3a7f5`
- Created: `2026-02-06T18:22:17.141305Z`
- Updated: `2026-02-06T18:22:42.310839Z`
- Message count: 2
- Transcript chars extracted: 2214

## Claude summary

**Conversation Overview**

The user requested documentation on configuring Claude Code with custom settings for base URL, model selection, and API key authentication. Claude provided comprehensive configuration guidance from the official Claude Code documentation, covering multiple methods for customization. The primary approach involves setting three key environment variables: ANTHROPIC_API_KEY or ANTHROPIC_AUTH_TOKEN for authentication, ANTHROPIC_BASE_URL for custom endpoints, and ANTHROPIC_MODEL for model selection. Claude also documented an alternative persistent configuration method using a settings file at ~/.claude/settings.json, which allows users to store these configurations permanently. Additional configuration options were covered, including model-specific environment variables for overriding default "opus" and "haiku" model aliases, dynamic API key management through apiKeyHelper scripts for rotating keys, and runtime model switching using command-line flags or mid-session commands. Claude emphasized that custom gateways must expose the Anthropic Messages API format at the /v1/messages endpoint and properly forward anthropic-beta and anthropic-version headers for full compatibility. The response included specific code examples and direct links to the official documentation sections for LLM gateway configuration and model configuration.

## Quick excerpt

Let me search the Claude Code documentation for you. ``` This block is not supported on your current device yet. ``` Let me grab the official docs directly: ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` Here's a summary from the official Claude Code docs: ## Custom Base URL, Model & API Key in Claude Code There are three key environment variables you n

## Transcript

## human\n\ncan you find claude docs on how i can provide a custom baseurl and model and api key to use with claude code\n
## assistant\n\nLet me search the Claude Code documentation for you.
```
This block is not supported on your current device yet.
```

Let me grab the official docs directly:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Here's a summary from the official Claude Code docs:

## Custom Base URL, Model & API Key in Claude Code

There are three key environment variables you need:

### 1. **API Key** — `ANTHROPIC_API_KEY` or `ANTHROPIC_AUTH_TOKEN`
```bash
export ANTHROPIC_API_KEY="your-api-key-here"
# or
export ANTHROPIC_AUTH_TOKEN="your-auth-token"
```

### 2. **Base URL** — `ANTHROPIC_BASE_URL`
```bash
export ANTHROPIC_BASE_URL="https://your-custom-endpoint.com"
```

### 3. **Model** — `ANTHROPIC_MODEL`
```bash
export ANTHROPIC_MODEL="your-model-name"
```

### Alternative: Settings file (`~/.claude/settings.json`)

You can also configure these persistently via the settings file:

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-api-key",
    "ANTHROPIC_BASE_URL": "https://your-custom-endpoint.com"
  },
  "model": "your-model-name"
}
```

### Additional model env vars

You can also control specific model aliases:
- `ANTHROPIC_DEFAULT_OPUS_MODEL` — override what "opus" resolves to
- `ANTHROPIC_DEFAULT_HAIKU_MODEL` — override what "haiku" resolves to

### At startup or mid-session
- **Startup**: `claude --model <model-name>`
- **Mid-session**: `/model <model-name>`

### Dynamic API key (for rotating keys)
You can use `apiKeyHelper` in settings to point to a script that returns a key:
```json
{
  "apiKeyHelper": "~/bin/get-my-key.sh"
}
```

### Official docs links:
- **LLM Gateway config**: [code.claude.com/docs/en/llm-gateway](https://code.claude.com/docs/en/llm-gateway)
- **Model configuration**: [code.claude.com/docs/en/model-config](https://code.claude.com/docs/en/model-config)

The gateway must expose the Anthropic Messages API format (`/v1/messages`) and forward `anthropic-beta` and `anthropic-version` headers for full compatibility.\n