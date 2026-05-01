---
kind: note
id: claude-conversation-2026-02-16-cognitive-debt-in-software-development-1938e311
updatedAt: 1771272431146
createdAt: 1771272390225
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 1938e311-8aa9-475e-bc5a-d1226119c88f
created_at: 2026-02-16T20:06:30.225665Z
updated_at: 2026-02-16T20:07:11.146948Z
title: "Cognitive debt in software development"
---

# Cognitive debt in software development

## Metadata

- Claude conversation UUID: `1938e311-8aa9-475e-bc5a-d1226119c88f`
- Created: `2026-02-16T20:06:30.225665Z`
- Updated: `2026-02-16T20:07:11.146948Z`
- Message count: 2
- Transcript chars extracted: 3727

## Claude summary

**Conversation Overview**

The user Arash initiated a discussion about Simon Willison's blog post on "cognitive debt," which referenced Margaret-Anne Storey's original framework. Claude fetched both articles to provide comprehensive analysis. The conversation centered on cognitive debt as a concept distinct from technical debt - while technical debt exists in code, cognitive debt represents the erosion of shared understanding in developers' minds about how systems work and why design decisions were made.

Arash works at Augment Code and is known for evangelizing "vibe coding" to his audience, frequently demonstrating rapid AI-assisted development. Claude positioned this topic as particularly relevant to Arash's work, noting that cognitive debt represents the "shadow side" of rapid AI development - what happens after the initial demo when developers lose understanding of their own AI-generated code. The discussion highlighted Margaret-Anne Storey's example of a student team hitting a wall at week 8, unable to make simple changes without breaking unexpected parts of their system, and Simon Willison's admission of getting lost in his own AI-generated projects.

Claude suggested this could be valuable content for Arash's audience, positioning him uniquely to address cognitive debt because he has lived experience with scaling AI-generated projects like SpeakMCP (which grew from 24 to 1,399 commits), works at a company that builds tools to help developers maintain codebase understanding, and could deliver this message authentically as a builder rather than an academic. The conversation framed this as an "optimistic realist" content opportunity that acknowledges both the power and pitfalls of AI-assisted development.

**Tool Knowledge**

Claude used web_fetch to retrieve both Simon Willison's blog post and Margaret-Anne Storey's original article on cognitive debt. When the second fetch encountered issues, Claude supplemented with web_search using the query "Margaret-Anne Storey cognitive debt generative agentic AI 2026" to gather additional context. This multi-tool approach allowed Claude to provide comprehensive analysis by accessing both the popularized discussion and the original academic framework, enabling a more nuanced conversation about the implications for Arash's specific work context.

## Quick excerpt

Let me fetch that article. ``` This block is not supported on your current device yet. ``` This is a really relevant piece for you, Arash. Let me also grab the original article by Margaret-Anne Storey that Simon is linking to — it has the deeper framework. ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` This is a fantastic topic, and it hits really close to home for what you do — both as a builder using AI coding too

## Transcript

## human\n\nlets discuss https://simonwillison.net/2026/Feb/15/cognitive-debt/\n
## assistant\n\nLet me fetch that article.
```
This block is not supported on your current device yet.
```

This is a really relevant piece for you, Arash. Let me also grab the original article by Margaret-Anne Storey that Simon is linking to — it has the deeper framework.
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

This is a fantastic topic, and it hits really close to home for what you do — both as a builder using AI coding tools daily at Augment and as someone who literally evangelizes "vibe coding" to your audience.

Here's what's going on: Margaret-Anne Storey, a CS professor, is arguing that cognitive debt — the erosion of shared understanding in developers' minds — is likely a much bigger threat than technical debt as AI and agents get adopted. The core distinction is sharp: technical debt lives in the code, but cognitive debt lives in developers' minds.

She draws on Peter Naur's classic idea that a program is more than its source code — it's a "theory" that lives in the minds of developers, capturing what the program does, how intentions are implemented, and how it can be changed over time.

The student team anecdote is the killer example. By weeks 7 or 8, they hit a wall where they couldn't make even simple changes without breaking something unexpected. They initially blamed technical debt, but the real problem was that no one could explain why certain design decisions had been made or how parts of the system were supposed to work together.

Simon Willison's personal admission is really telling — he says he's been experimenting with prompting entire new features into existence without reviewing implementations, and while it works surprisingly well, he's found himself getting lost in his own projects, losing the firm mental model of what they can do and how they work.

And Storey's proposed mitigations are practical: require that at least one human on the team fully understands each AI-generated change before it ships, document not just what changed but why, and create regular checkpoints where the team rebuilds shared understanding.

**Why this matters for you specifically:**

This is essentially the shadow side of everything you promote. You show people building apps in minutes with AI — and that's real and exciting — but cognitive debt is what happens *after* the demo ends. It's the week-8 wall.

You're in a uniquely credible position to talk about this because:

1. **You've lived it.** SpeakMCP went from a 24-commit fork to 1,399 commits. At some point in that journey, you've almost certainly felt the "wait, why does this work this way?" moment.

2. **You work at Augment Code.** Your company literally builds tools to help developers maintain understanding of codebases (the Context Engine, code review). Cognitive debt is the *problem your employer solves*.

3. **Your audience needs to hear it from a builder, not an academic.** When Simon Willison or Margaret-Anne Storey say this, developers nod. When the guy who streams himself vibe coding says "here's the wall I hit" — that lands differently.

**Content angle:** This could be a killer video or X post in the "hot take / insider info" template. Something like: *"Everyone's shipping apps in minutes with AI. Nobody's talking about what happens at week 8."* — then walk through the cognitive debt concept with your own real experience. It's the kind of "optimistic realist" content that separates you from hype creators. You're not saying AI coding is bad — you're saying here's how to do it sustainably.

What's your take? Have you felt this on SpeakMCP or other projects?\n