---
kind: note
id: product-vibe-olympics-hard-challenge-candidates
title: Vibe Olympics — Hard Pilot Challenge Candidates
context: search-only
updatedAt: 1773270360644
tags: product
createdAt: 1773270360644
summary: Saved: 2026-03-11 Context: AJ wants a preliminary Vibe Olympics pilot with challenge problems that are genuinely hard for current frontier AI agents, while still being assessable. For a pilot, use ...
references: product/vibe-olympics-hard-challenge-candidates.md
---

# Vibe Olympics — Hard Pilot Challenge Candidates

Saved: 2026-03-11

Context: AJ wants a preliminary Vibe Olympics pilot with challenge problems that are genuinely hard for current frontier AI agents, while still being assessable.

## Recommendation Summary

For a pilot, use benchmark-backed tasks rather than hand-designing a starter repo from scratch.

Why:
- already calibrated to be hard
- easier to evaluate objectively
- avoids spending time inventing a “just-hard-enough” initial state

Two main sources:
- **Terminal-Bench** for contained, objectively verifiable, frontier-hard tasks
- **SWE-Bench Pro** for realistic long-horizon software engineering issues in real repos

## Strongest Hard Candidates

### Terminal-Bench candidates

#### 1. `gpt2-codegolf`
Write a dependency-free C program under 5KB that loads GPT-2 checkpoint weights and BPE vocab, then performs correct argmax generation.

Why it’s strong:
- clearly hard for frontier agents
- very crisp evaluation
- compact, self-contained challenge
- technically impressive and legible

#### 2. `path-tracing`
Reconstruct a C program that generates an image matching a hidden target at ~0.99 similarity, without reading the original image, under a compressed source-size cap.

Why it’s strong:
- combines reverse engineering + algorithmic reconstruction + code size constraints
- objectively scorable
- highly watchable

#### 3. `make-mips-interpreter`
Implement a MIPS interpreter so a provided Doom MIPS binary boots and renders frames correctly.

Why it’s strong:
- unquestionably hard
- very entertaining / demo-friendly
- objective verification via boot + frame rendering

#### 4. `make-doom-for-mips`
Build Doom for a MIPS VM setup so it runs correctly under the provided runtime.

Why it’s strong:
- systems-heavy
- concrete verification
- compelling spectator value

#### 5. `circuit-fibsqrt`
Create a logic-gate program within strict limits so a simulator computes `fib(isqrt(N)) mod 2^32`.

Why it’s strong:
- very hard
- fully objective
- more puzzle-like / less product-like

#### 6. `feal-differential-cryptanalysis`
Implement a chosen-plaintext attack recovering a target round key.

#### 7. `feal-linear-cryptanalysis`
Implement a known-plaintext attack recovering round keys and decrypt a provided ciphertext set.

Why FEAL tasks are strong:
- real cryptanalytic work
- clearly hard
- probably too specialized for a broad pilot

### SWE-Bench Pro candidates

#### 1. `qutebrowser/qutebrowser` — KeySequence refactor
Major refactor from raw integer key representations to a structured, type-safe representation handling Qt5/Qt6 compatibility, parsing, conversion, mappings, and consistent behavior.

Why it’s strong:
- very large reasoning surface
- realistic advanced software engineering
- clearly nontrivial for current agents

#### 2. `gravitational/teleport` — expression parser / AST rewrite
Replace brittle parsing logic with a proper AST, evaluation semantics, validation, matcher behavior, namespace constraints, and broad test coverage.

Why it’s strong:
- probably one of the hardest realistic engineering tasks surfaced
- architecture-heavy, parser-heavy, high depth
- likely too hard for a first pilot unless near-zero finish rate is acceptable

#### 3. `qutebrowser/qutebrowser` — default font size architecture change
Introduce a default font size abstraction that flows through config parsing and UI font resolution.

Why it’s strong:
- nontrivial architecture change
- realistic repo work
- easier than KeySequence but still hard

#### 4. `NodeBB/NodeBB` — cache and slug handling issue
Large multi-part issue with broad test surface and architectural implications.

Why it’s strong:
- hard realistic repo task
- less contained than ideal for a first pilot

## Recommended Shortlist

If optimizing for **clean judging + hard challenge**:
1. `gpt2-codegolf`
2. `path-tracing`
3. `make-mips-interpreter`

If optimizing for **realistic software engineering**:
1. `qutebrowser` KeySequence refactor
2. `teleport` parser / AST rewrite
3. `NodeBB` cache/slug issue

## Suggested First Pilot Picks

Top 3 overall:
1. **`gpt2-codegolf`** — hardest clean-contained challenge
2. **`path-tracing`** — hardest watchable challenge
3. **`qutebrowser` KeySequence refactor** — hardest realistic software-engineering challenge

## Practical Guidance

- Do **not** use a small/easy bugfix-style repo for the pilot
- Use a verifier-first format
- Prefer tasks with deterministic outputs or hidden tests
- For first pilot, a Terminal-Bench-style task is safer operationally
- Save SWE-Bench Pro-style repo tasks for a pro division or later invitational if needed
