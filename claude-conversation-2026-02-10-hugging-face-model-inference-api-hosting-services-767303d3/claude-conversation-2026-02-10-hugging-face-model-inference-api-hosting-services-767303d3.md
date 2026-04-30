---
kind: note
id: claude-conversation-2026-02-10-hugging-face-model-inference-api-hosting-services-767303d3
updatedAt: 1770733415429
createdAt: 1770733316301
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 767303d3-e4e3-46ab-b622-2e07b0d0d1af
created_at: 2026-02-10T14:21:56.301691Z
updated_at: 2026-02-10T14:23:35.429257Z
title: "Hugging Face model inference API hosting services"
---

# Hugging Face model inference API hosting services

## Metadata

- Claude conversation UUID: `767303d3-e4e3-46ab-b622-2e07b0d0d1af`
- Created: `2026-02-10T14:21:56.301691Z`
- Updated: `2026-02-10T14:23:35.429257Z`
- Message count: 4
- Transcript chars extracted: 8421

## Claude summary

**Conversation Overview**

The user requested information about services that host Hugging Face models as APIs for inference. Claude provided a comprehensive overview of available options, including Hugging Face's own services (Inference Providers and Inference Endpoints), third-party providers integrated through HF's unified gateway, and standalone services like Replicate, Together AI, Modal, and BentoML. The user then specifically asked for step-by-step instructions for using Hugging Face Inference Providers, which Claude delivered as a detailed implementation guide.

Claude researched and provided complete setup instructions covering account creation, API token generation, client library installation, and code examples in Python, JavaScript, and cURL. The guide included advanced features like provider selection strategies (auto, fastest, cheapest, or specific provider), multiple task types beyond chat completions (text-to-image, embeddings, speech-to-text), and OpenAI-compatible endpoint usage for existing codebases. Claude also provided a reference table showing which providers support different tasks and mentioned pricing tiers including the free tier and HF Pro subscription options.

The conversation demonstrated the user's interest in practical AI model deployment solutions, with a focus on getting actionable implementation details rather than just conceptual information. Claude's approach involved both high-level service comparisons and granular technical instructions with working code examples.

## Quick excerpt

``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` Here's a comprehensive breakdown of services that host Hugging Face models as inference APIs: --- ## Hugging Face's Own Services **1. Inference Providers (Serverless)** — HF's unified gateway that routes requests to partner infrastructure providers through a single API and HF token. Free tier included, pay-as-you-go beyond that. **2. Inference Endpoints (Dedicated)** — 

## Transcript

## human\n\nFind services that host models from hugging face as an api for you to do inference\n
## assistant\n\n```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Here's a comprehensive breakdown of services that host Hugging Face models as inference APIs:

---

## Hugging Face's Own Services

**1. Inference Providers (Serverless)** — HF's unified gateway that routes requests to partner infrastructure providers through a single API and HF token. Free tier included, pay-as-you-go beyond that.

**2. Inference Endpoints (Dedicated)** — Deploy any model on dedicated, fully managed CPUs, GPUs, TPUs, and AWS Inferentia 2 with autoscaling and scale-to-zero. You pick the cloud region and hardware.

---

## Third-Party Providers (Integrated via HF Inference Providers)

The supported providers include: **Black Forest Labs**, **Cerebras**, **Clarifai**, **Cohere**, **Fal.ai**, **Featherless AI**, **Fireworks AI**, **Groq**, **Hyperbolic**, **Nebius**, **Novita**, **Nscale**, **OpenAI**, **OVHcloud**, **PublicAI**, **Replicate**, **SambaNova**, **Scaleway**, **Together AI**, **WaveSpeed**, and **Zai-org**.

You can access all of these through the unified `InferenceClient` with just your HF token, or use their APIs directly.

---

## Standalone Services (Use Directly)

**Replicate** — An API-first, serverless inference hosting platform designed for niche and generative AI models, ideal for quick deployment without infrastructure configuration.

**Together AI** — Hosted APIs for open-source LLMs like LLaMA and Mixtral with simple setup and usage-based pricing.

**Modal** — A serverless platform for running Python functions or GPU jobs in the cloud, fitting well for inference or fine-tuning through scheduled tasks.

**BentoML** — Ideal for turning Hugging Face models into self-hosted REST APIs using Python. Lightweight and open-source.

**RunPod** — Lets you deploy containerized models on GPUs using pre-built templates.

**Lambda Labs** — Direct GPU access where you manage the environment and orchestration yourself.

---

## Cloud Provider Integrations

**Azure ML** — Hugging Face on Azure lets you deploy tens of thousands of pretrained models through Azure Machine Learning using managed or serverless services.

**AWS SageMaker** and **Google Cloud Vertex AI** also have HF model integrations (deploy HF models directly from their marketplaces).

---

## Quick Comparison

| Service | Best For | Pricing Model |
|---|---|---|
| HF Inference Providers | Unified access, auto-routing | Pay-per-token via HF |
| HF Inference Endpoints | Dedicated production workloads | Pay for compute time |
| Replicate | Quick prototyping, image/audio models | Per-second GPU billing |
| Together AI | LLM inference (LLaMA, Mistral, etc.) | Per-token |
| Modal | Custom Python GPU jobs | Per-second |
| Fireworks AI | Fast LLM inference | Per-token |
| Groq | Ultra-low latency LLM inference | Per-token |
| SambaNova | High-throughput inference | Per-token |
| BentoML | Self-hosted REST APIs | Self-hosted (free OSS) |

The easiest starting point is probably **HF Inference Providers** since it gives you one API to access models across all those backends, with automatic routing to the fastest or cheapest provider. Want me to dig deeper into any of these?\n
## human\n\nGive step by step instructions for huggingface inference providers\n
## assistant\n\n```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Here's a step-by-step guide to getting started with Hugging Face Inference Providers:

---

## Step 1: Create a Hugging Face Account

Go to [huggingface.co/join](https://huggingface.co/join) and sign up if you don't have an account.

## Step 2: Generate an API Token

Go to your [token settings](https://huggingface.co/settings/tokens/new?ownUserPermissions=inference.serverless.write&tokenType=fineGrained) and create a **fine-grained** token with the **"Make calls to Inference Providers"** permission. Save this token somewhere safe.

## Step 3: (Optional) Set Your Provider Preferences

Visit [hf.co/settings/inference-providers](https://hf.co/settings/inference-providers) to configure your preferred provider order and optionally add third-party API keys (e.g., Together AI, Replicate). This controls which provider is selected when you use automatic routing.

## Step 4: (Optional) Try the Playground First

Before writing code, test models interactively at the [Inference Playground](https://huggingface.co/playground). You can compare different models and providers side by side.

## Step 5: Install the Client Library

**Python:**
```bash
pip install huggingface_hub
huggingface-cli login   # paste your token when prompted
```

**JavaScript:**
```bash
npm install @huggingface/inference
```

## Step 6: Make Your First API Call

### Python (huggingface_hub)
```python
from huggingface_hub import InferenceClient

client = InferenceClient()

completion = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-R1",
    messages=[
        {"role": "user", "content": "What is the capital of France?"}
    ],
)

print(completion.choices[0].message)
```

### JavaScript
```javascript
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

const chatCompletion = await client.chatCompletion({
  model: "deepseek-ai/DeepSeek-R1",
  messages: [
    { role: "user", content: "What is the capital of France?" },
  ],
});

console.log(chatCompletion.choices[0].message);
```

### cURL
```bash
curl https://router.huggingface.co/v1/chat/completions \
    -H "Authorization: Bearer $HF_TOKEN" \
    -H 'Content-Type: application/json' \
    -d '{
        "messages": [{"role": "user", "content": "Hello!"}],
        "model": "deepseek-ai/DeepSeek-R1",
        "stream": false
    }'
```

## Step 7: Control Provider Selection

You have three ways to choose which provider runs your model:

**Auto (default):** Routes to the first available provider based on your preference order.
```python
client.chat.completions.create(model="deepseek-ai/DeepSeek-R1", ...)
```

**Fastest throughput:** Append `:fastest` to the model ID.
```python
client.chat.completions.create(model="deepseek-ai/DeepSeek-R1:fastest", ...)
```

**Cheapest:** Append `:cheapest` to the model ID.
```python
client.chat.completions.create(model="deepseek-ai/DeepSeek-R1:cheapest", ...)
```

**Specific provider:** Append the provider name.
```python
client.chat.completions.create(model="deepseek-ai/DeepSeek-R1:sambanova", ...)
```

## Step 8: Use Other Tasks Beyond Chat

**Text-to-Image:**
```python
image = client.text_to_image(
    prompt="A sunset over mountains, photorealistic",
    model="black-forest-labs/FLUX.1-dev"
)
image.save("output.png")
```

**Embeddings / Feature Extraction:**
```python
vectors = client.feature_extraction(
    text="Hello world",
    model="BAAI/bge-large-en-v1.5"
)
```

**Speech-to-Text:**
```python
result = client.automatic_speech_recognition("audio.flac")
print(result.text)
```

## Step 9: (Optional) Use OpenAI-Compatible Endpoint

If you have existing code using the OpenAI SDK, you can just swap the base URL:

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key="hf_YOUR_TOKEN",
)

completion = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-R1:fastest",
    messages=[{"role": "user", "content": "Hello!"}],
)
```

This is a drop-in replacement — only chat completions are supported through this endpoint though.

---

## Quick Reference: Supported Providers by Task

| Task | Providers |
|---|---|
| Chat (LLM) | Cerebras, Cohere, Featherless, Fireworks, Groq, HF Inference, Hyperbolic, Novita, Nscale, OVHcloud, PublicAI, SambaNova, Scaleway, Together, Z.ai |
| Chat (Vision) | Cohere, Featherless, Fireworks, Groq, HF Inference, Hyperbolic, Novita, Nscale, OVHcloud, Together, Z.ai |
| Text-to-Image | Fal AI, HF Inference, Nscale, Replicate, Together, WaveSpeed |
| Text-to-Video | Fal AI, Novita, Replicate, WaveSpeed |
| Embeddings | HF Inference, SambaNova, Scaleway |
| Speech-to-Text | Fal AI, HF Inference, Replicate |

The free tier gives you a small credit quota to start. If you need more, [HF Pro](https://hf.co/subscribe/pro) gives you 20× the included credits. Let me know if you want to dive deeper into any specific part!\n