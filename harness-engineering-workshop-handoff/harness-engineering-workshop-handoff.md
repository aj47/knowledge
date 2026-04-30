---
title: Harness Engineering Workshop Handoff
context: search-only
created: 2026-04-26
updatedAt: 1777578160336
kind: note
id: harness-engineering-workshop-handoff
createdAt: 1777578160336
tags: uncategorized
---

# Harness Engineering Workshop Handoff

Plain-text handoff doc combining recovered context for AJ's AlphaSignal workshop on harness engineering.

## Situation

AJ is doing a workshop tomorrow with AlphaSignal, a newsletter/community with 300,000+ technically strong engineers.

AlphaSignal approached AJ because they wanted someone technical to run one of their first workshops. They suggested an initial topic AJ was not very interested in. AJ suggested something more like auto-research with LLMs, inspired by Andrej Karpathy. AlphaSignal titled/framed the workshop as "Harness Engineering" because the phrase is trending and audience-relevant.

The desired interaction style for prep was concise back-and-forth: one sentence, question, or statement at a time.

## Audience

The audience is smart engineers: ML engineers, infra engineers, XML/engineering-theater-aware engineers, and people who can handle technical depth.

Assume they are skeptical of vague agent hype and will respond best to concrete systems design: files, constraints, metrics, evals, feedback loops, reproducibility, and failure modes.

## Core promise

By the end, attendees should understand what harness engineering is and how to do it well.

Strong framing sentence:

"By the end, you'll know how to turn an LLM prompt into a measurable, repeatable research machine."

Another strong framing sentence:

"Harness engineering is designing the system around the model so LLM work becomes reproducible, measurable, and trustworthy."

## Core definition

Harness engineering means designing the agent's working environment so it can iterate reliably without constant human steering.

It is the non-model system around an LLM: context, tools, writable surface, memory/logging, evals, workflows, feedback loops, runtime budgets, and acceptance gates.

It is not mainly about finding a magic prompt. It is about building the environment where repeated attempts can be measured, compared, retained, reverted, and improved.

Best one-liner:

"You are not programming the model. You are programming the research environment."

## Main thesis

The breakthrough is not smarter prompting. It is narrowing the environment until iteration becomes trustworthy.

Good agents do better with a lane than with freedom.

Autonomy without memory turns into repetition.

## Four repeatable ingredients

1. Clear instructions
2. Tight writable surface / constraints
3. Objective feedback / evals
4. Memory of prior attempts

These are the recurring primitives across Karpathy autoresearch, Anthropic long-running agent guidance, and OpenAI/Codex environment design patterns.

## Four core pillars to teach

Confidence: 0.94, updated from Apr 29–30 workshop materials alignment conversations.

Use four core pillars instead of the older “three primitives” / “scalar metric” framing:

1. Editable asset — what the agent is allowed to change.
2. Evaluation signal — how the harness judges whether an attempt worked.
3. Instruction file — the human interface / contract for the harness.
4. Stop / keep / revert rule — how the loop decides what survives and when to stop.

Treat coding agents as coding-agent workflows, not complete harnesses by themselves. Harness engineering is what gets added around that workflow so it becomes constrained, evaluated, logged, and repeatable.

Simple teaching line:

> A harness is the environment around the agent that turns “try something” into a constrained, evaluated, repeatable loop.


## SnackBot demo repo operating notes

Confidence: 0.92, from Apr 30 SnackBot notebook/debugging conversation.

Local demo repo path: `/Users/ajjoobandi/Development/snackbot-harness-demo`.

Preferred manual run path when `jupyter-lab` is missing:

```bash
cd /Users/ajjoobandi/Development/snackbot-harness-demo
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt jupyterlab
python -m jupyter lab SnackBot_Attendee_Run.ipynb
```

Manual non-notebook checks:

```bash
python3 eval.py --json
python3 run_attempt.py --once --note "manual baseline/check"
```

For workshop resilience, keep SnackBot materials runnable both as a notebook and by direct CLI commands so AJ can recover quickly if Jupyter UI setup fails.

## Best concrete example: Karpathy autoresearch

Use Karpathy's `autoresearch` as the central case study.

Key details:

- Human edits `program.md`
- Agent edits `train.py`
- `prepare.py` is fixed
- Each run has a fixed 5-minute wall-clock budget
- Main metric is `val_bpb` validation bits per byte; lower is better
- Design target: about 12 experiments per hour
- Roughly 100 experiments overnight
- Repo is intentionally minimal: one GPU, one file, one metric

This example is powerful because it makes autonomy concrete and bounded.

The agent is not given an open-ended mandate like "improve the model." It is placed in a narrow experimental lane:

- One editable file
- One metric
- One runtime budget
- One baseline comparison
- One repeatable loop

The workshop should use this as the canonical example of a good harness.

## Teaching line for autoresearch

"The breakthrough is not smarter prompting. It's narrowing the environment until iteration becomes trustworthy."

## How to explain `program.md`

`program.md` is the human-authored contract for the agent.

A good `program.md` should specify:

- Objective
- Metric
- Editable surface
- Forbidden changes
- Runtime / experiment budget
- Baseline comparison
- Logging / result format
- When to keep, revert, or stop

This is one of the best practical takeaways for attendees: teach them how to write a `program.md` for their own agent/research loop.

## Good `program.md` template ideas

Objective:
What are we trying to improve, specifically?

Metric:
What number decides whether the change helped?

Editable surface:
Which files, configs, prompts, or scripts may the agent change?

Forbidden changes:
What must not be changed, even if it improves the metric?

Budget:
How long can each attempt run? How many attempts are allowed?

Baseline:
What is the current score and how is it reproduced?

Logging format:
Where should each attempt, hypothesis, diff, score, and conclusion be recorded?

Acceptance rule:
When does the agent keep the change, revert it, or stop?

## Anthropic long-running agent guidance

Long-running agents need a progress file or changelog.

They should record failed approaches and why they failed.

They should rely on tests/evals to judge progress.

Without failure memory, agents tend to retry dead ends.

Teaching line:

"Autonomy without memory turns into repetition."

Practical implication:

A harness should include a `progress.md`, `attempts.md`, `changelog.md`, or equivalent memory file that records:

- What was tried
- Why it was tried
- What changed
- What happened
- Why it was kept or reverted
- What should not be retried

## OpenAI / Codex environment patterns

The environment matters more than "be careful" instructions.

Important patterns:

- Sandbox mode
- Approval policy
- Explicit writable roots
- Deliberate network access
- Mechanical guardrails
- Small editable surfaces
- Clear permission boundaries

Good line:

"Mechanical guardrails scale better than 'be careful' language."

Another line:

"The safest autonomy comes from limiting where the agent can act."

## Live critique rubric

When reviewing attendee drafts or harness designs, ask:

1. Is the objective specific enough to test?
2. Is the metric meaningful, not just convenient?
3. Is the writable surface small enough?
4. Are the constraints explicit?
5. Does the agent know how to compare against baseline?
6. Will failed attempts be recorded so they are not repeated?

This rubric can be used for live exercises.

## Common failure modes

- Vague objective: "improve performance"
- Wrong metric: easy to optimize, meaningless in reality
- Too many editable files
- No hard runtime budget
- No baseline comparison
- No memory of failed ideas
- Confusing agent activity with actual progress
- Letting the model choose its own evaluation criteria
- Allowing broad filesystem or network access by default
- No explicit stop condition
- No revert rule

## Strong one-liners

"You are not programming the model. You are programming the research environment."

"The breakthrough is not smarter prompting. It's narrowing the environment until iteration becomes trustworthy."

"Autonomy without memory turns into repetition."

"Agents do better with a lane than with freedom."

"Mechanical guardrails scale better than 'be careful' language."

"Don't ask whether the agent is busy; ask whether the metric moved."

"A prompt becomes a harness when it has constraints, feedback, and memory."

"The model is the engine; the harness is the track, dashboard, pit wall, and rules of the race."

## Possible workshop structure

Likely 90-minute engineer-facing session.

Recommended structure:

1. Opening: why harness engineering matters
2. Definition: environment design around LLMs, not prompt magic
3. Case study: Karpathy autoresearch
4. Anatomy of a harness: instructions, constraints, feedback, memory
5. Exercise: write a `program.md` for a real task
6. Live critique: apply rubric to attendee examples
7. Failure modes: what breaks in bad harnesses
8. Wrap: checklist attendees can reuse tomorrow

## Opening framing

Start by saying something like:

"Most people try to get better LLM results by changing the sentence they type into the box. Harness engineering starts from a different premise: if the model is going to do real work repeatedly, the environment around it matters more than the prompt."

Then define the workshop promise:

"Today we'll learn how to design that environment: what the model can edit, how it gets feedback, how it remembers failures, and how we know whether it actually improved anything."

## Suggested flow in more detail

Section 1: The problem

LLMs can produce impressive one-off outputs, but autonomy fails when the task requires iteration.

The common failure is not that the model is dumb. The common failure is that the loop is underspecified:

- No objective metric
- No constrained action space
- No stable baseline
- No memory of attempts
- No stop rule

Section 2: Definition

Harness engineering is the practice of designing the repeatable loop around an LLM.

A harness defines:

- What the model is trying to improve
- What it can change
- How it gets feedback
- What counts as progress
- What it records
- When it stops

Section 3: Karpathy autoresearch

Explain the minimal loop:

- Human writes `program.md`
- Agent edits `train.py`
- Fixed data prep
- Fixed runtime
- One metric: `val_bpb`
- Lower is better
- Run many experiments
- Keep what improves the metric

Emphasize that the system is powerful because it is narrow.

Section 4: Build the eval before the loop

The key lesson: before you ask the model to improve something, define the feedback signal.

If there is no eval, the agent is not doing research; it is doing theater.

Section 5: Exercise

Ask attendees to choose a task and write the harness contract:

- Objective
- Metric
- Editable files
- Forbidden files
- Budget
- Baseline
- Logging format
- Keep/revert/stop rule

Section 6: Critique

Use the live critique rubric above.

## Possible attendee exercise prompt

Pick one task you would normally ask an LLM to do repeatedly.

Turn it into a harness by writing:

1. Objective
2. Metric
3. Editable surface
4. Forbidden changes
5. Runtime or attempt budget
6. Baseline
7. Result log format
8. Stop rule

Then pair up and critique each other's harness using the rubric.

## Example harness skeleton

Task: improve a retrieval prompt for a customer support agent.

Objective:
Improve answer accuracy on a fixed support QA eval set.

Metric:
Pass rate on 100 labeled examples, plus no regression on safety checks.

Editable surface:
Only `prompt.md` and `retrieval_config.json`.

Forbidden changes:
Do not edit the eval set, labels, scoring script, or production database.

Budget:
10 attempts, each under 3 minutes.

Baseline:
Current prompt scores 72/100.

Logging:
Append every attempt to `progress.md` with hypothesis, diff summary, score, and conclusion.

Keep rule:
Keep changes only if pass rate improves by at least 3 points and safety score does not regress.

Stop rule:
Stop after 10 attempts or after 3 consecutive non-improving attempts.

## Likely source anchors

Recovered ChatGPT context referenced these likely anchors:

- Workshop docs about `program.md`
- Karpathy `autoresearch`
- Anthropic long-running Claude guidance
- OpenAI/Codex environment docs

## AlphaSignal contact/context

The likely AlphaSignal contact found in prior context was Alex Medick in Slack DM.

Do not rely on this as the only source of truth unless verified, but it was surfaced as the likely contact.

## Notion / prior draft context

There was mention of looking for a Notion/workshop draft context, but the recovered content available here is mainly the ChatGPT research cheat sheet plus prior prep notes.

The strongest available draft direction is to anchor the workshop on:

"Build the eval before the loop."

## Current scheduling / promotion commitments

Confidence: 0.96, from Apr 26 workshop-prep conversation.

For AlphaSignal coordination, AJ's current stance is: May 7 is the earliest he would be ready to run the workshop. He should acknowledge that he likes their draft at a high level, say he is starting the outline now, note that he has suggestions/changes to send shortly, and give them a concise promotional attendee takeaway.

Promotional takeaway line:

"Attendees will leave understanding how to design the harness around an LLM — context, tools, evals, feedback loops, and memory — so agents can do reliable work instead of just relying on better prompts."


## AlphaSignal supplied draft: comment anchors

Confidence: 0.94, from Apr 27 workshop-prep conversation where AJ pasted AlphaSignal's draft and asked which specific lines to comment on.

When reviewing AlphaSignal's draft, anchor comments to these lines/claims rather than rewriting the whole piece:

- Keep the strong opening around a prose instruction file, but soften or substantiate the `10x results` claim if it remains in public copy.
- Preserve the frame that harness engineering is both the instruction file and the environment around it; this matches AJ's preferred definition.
- Support the positioning that this is not a setup tutorial: the durable workshop value is the career skill of designing repeatable agent loops, not installing a framework.
- Comment on the AutoResearch/`program.md` line by clarifying that the instruction file is the human-authored contract for objective, metric, editable surface, forbidden changes, budget, baseline, logging, keep/revert rules, and stop criteria.
- In the 90-minute structure, use Block 2 to teach the four core pillars: editable asset, evaluation signal, instruction file, and stop / keep / revert rule.
- In Block 3, endorse the live annotation/write-along format for instructions, constraints, and stopping criteria; it aligns with AJ's desired practical outcome.
- In Block 4, use LLM-Wiki as the proof that the same harness logic applies to persistent knowledge loops, not only experiment loops.
- In the audience takeaways, keep the completed `program.md` draft, evaluation-signal stress-test checklist, exposure to two Karpathy repos, and reusable framework beyond AutoResearch.
- Treat the post-workshop Harness Engineering pattern library as a strong strategic extension: annotated instruction files by loop type can become a lead magnet, recurring newsletter feature, and eventually a paid resource.

## Final recommended north star

The workshop should not be a generic talk about agents.

It should teach a concrete engineering pattern:

1. Pick a task
2. Define the metric
3. Freeze the baseline
4. Shrink the editable surface
5. Give the model a budget
6. Log attempts and failures
7. Keep/revert based on objective feedback
8. Repeat

That is harness engineering.
