---
kind: note
id: claude-conversation-2025-12-21-finding-simple-web-games-for-llm-benchmarking-26731fcb
updatedAt: 1766342499439
createdAt: 1766341817309
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 26731fcb-d27a-4fb0-b790-a4f62cf189b0
created_at: 2025-12-21T18:30:17.309621Z
updated_at: 2025-12-21T18:41:39.439853Z
title: "Finding simple web games for LLM benchmarking"
---

# Finding simple web games for LLM benchmarking

## Metadata

- Claude conversation UUID: `26731fcb-d27a-4fb0-b790-a4f62cf189b0`
- Created: `2025-12-21T18:30:17.309621Z`
- Updated: `2025-12-21T18:41:39.439853Z`
- Message count: 4
- Transcript chars extracted: 17233

## Claude summary

**Conversation Overview**

The user is conducting benchmarking tests of large language models using a harness that employs Playwright MCP to interact with web-based games. They successfully tested Wordle but need additional games of similar difficulty that meet specific technical constraints: simple HTML structure without canvas elements that would be invisible to bots, and consistent initial states to ensure fair comparison across different LLMs. The user specifically noted that chess implementations often use canvas rendering that prevents proper bot interaction.

Claude researched and recommended several web-based games including Tower of Hanoi, Mastermind/Bulls and Cows, 15-puzzle sliding tiles, and Tic-Tac-Toe, evaluating each for HTML simplicity, deterministic starting states, and appropriate difficulty levels. The conversation then shifted when the user expressed interest in creating their own custom game to test three specific capabilities: speed of problem-solving, ability to pivot and change strategies when initial approaches fail, and logical reasoning skills.

Claude analyzed the requirements and recommended three custom game concepts, with "Codebreaker" (a simplified Mastermind variant) emerging as the top choice. This game involves guessing a 3-digit code with feedback indicating correct digits in correct positions versus correct digits in wrong positions. Claude explained that this design optimally tests all three target capabilities: speed through measurable guess efficiency, pivoting through the need to update mental models based on feedback, and reasoning through pure deductive logic requiring synthesis of multiple clues. The recommendation included specific implementation details for simple HTML structure compatible with Playwright MCP automation.

**Tool Knowledge**

Claude used web search extensively to research suitable games for LLM benchmarking. The search strategy involved multiple targeted queries focusing on specific game characteristics: "simple HTML text-based web games puzzles no canvas" to find games without rendering issues, followed by searches for specific game types like "mastermind bulls cows code breaker web game HTML buttons" and "tower of hanoi online game HTML simple interface." The approach of searching for game-specific terms combined with technical requirements like "HTML buttons" and "no canvas" proved effective for identifying suitable candidates. When researching deterministic games, searches including terms like "fixed seed" and "deterministic" helped identify implementations that could provide consistent starting states for fair benchmarking comparisons.

## Quick excerpt

The user is looking for web-based games or workflows that: 1. Are simple enough for LLMs to solve (similar difficulty to Wordle) 2. Have simple HTML that Playwright MCP can interact with (no canvas-based rendering) 3. Have consistent initial states for fair benchmarking across different LLMs Let me search for some options that fit these criteria.I'll help you find some web-based games and workflows that would work well for LLM benchmarking with Playwright MCP. Let me search for options that have

## Transcript

## human\n\nI've been running some benchmarks with different large language models in this harness that uses the Playwright MCP to interact with the web. I did Wordle. That was really great. It's a basic game for these LLMs to solve. It's solvable. So I need something around the same difficulty, like really easy. One big constraint is it needs a website with very simple HTML, no like things that the bot won't be able to see. So chess and stuff doesn't really work. A lot of the chess games are like in a canvas that the bot cannot see the elements. So I need you to brainstorm and research and find, you know, five to 10 other potential options for games or workflows that we can solve. One other thing to note is Wordle is a different word every time. So it's not a fair comparison. If we can get the same initial state for the agents to work in, that would be great.\n
## assistant\n\nThe user is looking for web-based games or workflows that:
1. Are simple enough for LLMs to solve (similar difficulty to Wordle)
2. Have simple HTML that Playwright MCP can interact with (no canvas-based rendering)
3. Have consistent initial states for fair benchmarking across different LLMs

Let me search for some options that fit these criteria.I'll help you find some web-based games and workflows that would work well for LLM benchmarking with Playwright MCP. Let me search for options that have simple HTML and consistent starting states.
```
This block is not supported on your current device yet.
```

Let me search for more specific games that would work well - looking for simple logic puzzles with consistent starting states.
```
This block is not supported on your current device yet.
```

Good, I found some options. Let me search for more games that have consistent initial states and simple HTML.
```
This block is not supported on your current device yet.
```

Good - Tower of Hanoi is a great option. Let me search for more simple games with consistent states.
```
This block is not supported on your current device yet.
```

Good findings. Let me search for more simple games with deterministic states like sliding puzzles, tic-tac-toe, etc.
```
This block is not supported on your current device yet.
```

Let me search for a few more types of games that would be good for LLM benchmarking.
```
This block is not supported on your current device yet.
```

Let me search for a few more game ideas that might work well.
```
This block is not supported on your current device yet.
```

I have gathered quite a lot of information about different web games. Let me now search for one more type - connect 4 or similar games that might work.
```
This block is not supported on your current device yet.
```

I've now gathered a comprehensive list of web-based games that could work for LLM benchmarking with Playwright MCP. Let me now compile my findings into a helpful document for the user.

Key criteria the user mentioned:
1. Simple HTML (no canvas that bots can't see)
2. Similar difficulty to Wordle (basic, solvable)
3. Consistent initial state for fair comparison

Let me organize the options I found:

1. **Mastermind/Bulls and Cows** - Code-breaking game with deterministic feedback
2. **Tower of Hanoi** - Deterministic puzzle with fixed starting state
3. **Tic-Tac-Toe** - Simple game, but outcomes can be deterministic with minimax AI
4. **15-Puzzle/Sliding Tiles** - Can have fixed starting configurations
5. **Minesweeper** - Has randomness, but could have seeded boards
6. **Hangman** - Word guessing, but has random word selection issue like Wordle
7. **Connect Four** - Two-player game with deterministic rules

For consistent initial states, the best options are:
- Tower of Hanoi (always same starting position)
- Tic-Tac-Toe (empty board)
- 15-Puzzle (can set specific scrambled position)
- Mastermind (can use fixed secret code)

Let me create a helpful summary for the user.Based on my research, I've found several great options for LLM benchmarking that meet your criteria: simple HTML (no canvas), Wordle-level difficulty, and can have consistent initial states. Let me break these down:

## Top Recommendations (Best Fit for Your Criteria)

### 1. **Tower of Hanoi** ⭐ Best Pick
- **Why it works:** Always starts with the same state (all disks on left peg), deterministic solution, simple HTML buttons/clicks
- **Difficulty:** Easy to medium - optimal solution requires 2^n-1 moves
- **URLs:** 
  - https://cdn.htmlgames.com/TowerOfHanoi/
  - https://www.mathsisfun.com/games/towerofhanoi.html
- **Consistent state:** Yes - always starts identically
- **HTML structure:** Simple divs/buttons for pegs and disks

### 2. **Mastermind / Bulls and Cows** ⭐
- **Why it works:** Logic-based code-breaking with deterministic feedback, simple button interface
- **Difficulty:** Medium - uses deductive reasoning similar to Wordle
- **URLs:**
  - http://codebreaker.creativitygames.net/
  - https://www.bulls-and-cows.de/
- **Consistent state:** You can set a fixed "secret code" via URL params or by forking
- **HTML structure:** Clickable color/number buttons with feedback display

### 3. **15-Puzzle (Sliding Tiles)**
- **Why it works:** Classic puzzle, simple button clicks to slide tiles
- **Difficulty:** Medium - solvable with algorithms
- **URLs:**
  - https://icherya.github.io/Fifteen-Puzzle/
  - https://slidingtiles.com/en
- **Consistent state:** Can set a specific scrambled configuration
- **HTML structure:** Grid of numbered button tiles

### 4. **Tic-Tac-Toe (vs Minimax AI)**
- **Why it works:** Empty board start, deterministic AI opponent, very simple HTML
- **Difficulty:** Easy - always results in tie with optimal play
- **URLs:** Many CodePen implementations with simple table cells
- **Consistent state:** Yes - always empty 3x3 grid
- **HTML structure:** Simple 9-cell table with click handlers

### 5. **8-Puzzle (Smaller Sliding Puzzle)**
- **Why it works:** Simpler version of 15-puzzle, faster to solve
- **Difficulty:** Easy-medium
- **Consistent state:** Yes - can set fixed scrambled position

---

## Secondary Options (With Caveats)

### 6. **Hangman** (with fixed word list)
- Similar to Wordle's randomness problem, but you could fork and use a single fixed word
- Simple letter buttons in HTML

### 7. **Connect Four (vs AI)**
- Two-player nature makes it slightly more complex
- Deterministic if AI uses minimax
- HTML grid of clickable columns

### 8. **Minesweeper (with seeded board)**
- Some implementations support fixed seeds
- More complex logic than Wordle
- **Note:** https://github.com/NicholaChen/minesweeper has a "no guess" mode

---

## Comparison Table

| Game | Initial State | Difficulty | HTML Simplicity | Deterministic |
|------|---------------|------------|-----------------|---------------|
| **Tower of Hanoi** | ✅ Fixed | Easy-Med | ✅ Very simple | ✅ Yes |
| **Mastermind** | Can fix code | Medium | ✅ Buttons | ✅ Yes |
| **15-Puzzle** | Can fix state | Medium | ✅ Grid buttons | ✅ Yes |
| **Tic-Tac-Toe** | ✅ Empty board | Easy | ✅ 9 cells | ✅ Yes (vs AI) |
| **Connect Four** | ✅ Empty board | Medium | ✅ Grid | ✅ Yes (vs AI) |
| **Hangman** | Random word | Easy | ✅ Letter buttons | ❌ No |
| **Minesweeper** | Random mines | Medium | ✅ Grid | ❌ Usually |

---

## My Recommendation

For **fair LLM comparison**, I'd suggest:

1. **Tower of Hanoi (3-4 disks)** - Perfect for benchmarking. Same start every time, algorithmic solution, simple HTML.

2. **Mastermind** - Very similar to Wordle in gameplay (guess → feedback → refine), but you can set a fixed secret code.

3. **Tic-Tac-Toe vs Perfect AI** - Tests strategic reasoning with guaranteed consistent starting state.

Would you like me to dig deeper into any of these, find specific implementations with URL parameter support for fixed states, or help you set up a simple fork with hardcoded initial conditions?\n
## human\n\nIf I was to make my own simple game, what would be the best? I want to test speed, the ability for the agent to pivot, change strategies, and also, I guess, reasoning.\n
## assistant\n\nThe user wants to create their own custom game for LLM benchmarking. They want to test:
1. Speed - how quickly the agent can solve it
2. Ability to pivot/change strategies - adaptability
3. Reasoning - logical thinking

Let me think about what would make a great custom game for these criteria:

For speed: The game should be solvable in a reasonable number of steps but have clear efficiency differences between good and bad strategies.

For pivoting/changing strategies: The game should have situations where the initial approach might not work, forcing the agent to backtrack or try something different. Or there should be multiple valid approaches with different tradeoffs.

For reasoning: The game needs logical deduction, not just pattern matching or random guessing.

Some ideas:

1. **Number Guessing with Hints** - Like a simplified Mastermind but with numbers. Agent guesses, gets "higher/lower" feedback. Tests binary search reasoning.

2. **Logic Grid Puzzle** - Simple constraint satisfaction where you have to deduce answers from clues. Tests reasoning but might be complex to implement as interactive HTML.

3. **Safe Cracking / Code Breaking** - Similar to Mastermind but could be simplified. Guess a sequence, get feedback on correct positions and correct digits in wrong positions.

4. **Maze Navigation** - Agent has to navigate from start to end. Can test if they can backtrack when hitting dead ends. Simple HTML buttons for directions.

5. **Word Chain / Word Ladder** - Start word to end word, changing one letter at a time. But this has variable difficulty based on words chosen.

6. **Simple Trading/Resource Game** - Start with resources, need to trade to reach a goal state. Tests planning and strategy changes.

7. **Light Switch Puzzle** - Grid of lights, each switch toggles certain lights. Goal is to turn all on/off. Tests logical reasoning about dependencies.

8. **Balance Scale Puzzle** - Find the fake coin among several using a balance scale in minimum weighings. Classic logic puzzle.


9. **River Crossing Puzzle** - Classic puzzle (fox, chicken, grain). Tests constraint reasoning and planning.

I'm focusing on puzzles that demand strategic thinking and logical problem-solving. The River Crossing Puzzle stands out as an excellent candidate. It requires careful planning, understanding complex constraints, and the ability to backtrack when an initial strategy fails. The agent must manage multiple entities with specific rules, forcing it to think several steps ahead and adjust its approach dynamically. This puzzle perfectly encapsulates the key testing criteria: speed (finding the most efficient solution), strategy pivoting (recognizing and correcting ineffective moves), and reasoning (understanding interdependent constraints).

The top picks for testing an agent's cognitive capabilities reveal fascinating problem-solving challenges. The Number/Code Guessing game emerges as particularly compelling. By providing nuanced feedback about digit placement and correctness, it demands sophisticated deductive reasoning. An agent must rapidly synthesize information, systematically eliminate possibilities, and construct increasingly precise hypotheses.

The Grid-based "Hot/Cold" Search introduces spatial reasoning challenges. Here, the agent must use distance feedback to triangulate a hidden target, requiring strategic movement and adaptive thinking. Each guess becomes a calculated probe, testing the agent's ability to optimize search patterns and quickly converge on a solution.

The Light Switch / Toggling Puzzle adds another layer of complexity. Understanding intricate dependencies between switches and lights tests the agent's capacity to model complex systems, trace cause-and-effect relationships, and develop efficient solving strategies.

These puzzles aren't just games - they're sophisticated cognitive assessments that reveal an agent's fundamental reasoning capabilities. I'm exploring game design that tests an agent's adaptability. A number guessing challenge with hidden constraints could reveal strategic flexibility. Imagine a game where standard approaches break down, forcing creative problem-solving.

The core concept involves embedding unexpected rules that invalidate initial strategies. A number game with a "forbidden zone" or secret prime number requirement would compel the agent to dynamically adjust its approach. This design tests not just computational skills, but cognitive adaptability.

I'm particularly intrigued by scenarios that present an obvious first strategy, then deliberately create conditions where that initial method fails. The challenge becomes recognizing when current tactics are ineffective and rapidly developing alternative solutions.

My recommended benchmark games focus on revealing an AI's capacity to pivot. Mastermind-lite, grid search with distance feedback, and resource trading scenarios each probe different dimensions of strategic reasoning - testing an agent's ability to learn, optimize, and recalibrate in real-time.Great question. Let me think through what would optimally test those three dimensions:

## The Ideal Custom Game Criteria

| Dimension | What Tests It Well |
|-----------|-------------------|
| **Speed** | Clear optimal vs suboptimal paths; measurable in moves/guesses |
| **Pivoting** | Feedback that invalidates initial assumptions; dead ends that require backtracking |
| **Reasoning** | Deductive logic; information must be synthesized across multiple steps |

---

## My Top 3 Recommendations

### 1. **"Codebreaker" (Simplified Mastermind)** ⭐ Best Overall

**How it works:**
- Secret 3-digit code (digits 1-6, no repeats)
- Agent guesses, gets feedback:
  - 🟢 = correct digit, correct position
  - 🟡 = correct digit, wrong position
- Solve in minimum guesses

**Why it's perfect:**
- **Speed:** Optimal is ~4 guesses; bad strategy takes 10+
- **Pivoting:** Each guess eliminates possibilities; must update mental model
- **Reasoning:** Pure deductive logic; must synthesize all prior feedback

**Simple HTML:**
```html
<button>1</button> <button>2</button> ... <button>6</button>
<button id="submit">Submit Guess</button>
<div id="feedback">🟢🟡⚫</div>
<div id="history">Previous guesses...</div>
```

**Consistent state:** Same secret code every run

---

### 2. **"Grid Hunt" (2D Binary Search with Obstacles)** 

**How it works:**
- Hidden target on a 10x10 grid
- Agent clicks cells, gets distance feedback: "3 squares away"
- **Twist:** Some cells are "blocked" (return "invalid")
- Find target in minimum clicks

**Why it's great:**
- **Speed:** Optimal triangulation vs random clicking
- **Pivoting:** Blocked cells force strategy changes; can't just binary search
- **Reasoning:** Spatial reasoning + constraint handling

**Simple HTML:**
```html
<div class="grid">
  <button data-x="0" data-y="0"></button>
  <!-- 100 cells -->
</div>
<div id="feedback">Distance: 5</div>
```

**Consistent state:** Fixed target position + fixed blocked cells

---

### 3. **"Balance Scale" (Fake Coin Puzzle)**

**How it works:**
- 8 coins, one is fake (lighter or heavier)
- Agent chooses coins for left/right side of scale
- Scale tips left, right, or balances
- Identify fake coin AND whether it's heavy/light in ≤3 weighings

**Why it's excellent:**
- **Speed:** Information-theoretic optimal is 3 weighings; suboptimal takes more
- **Pivoting:** Must change coin selection based on each weighing result
- **Reasoning:** Classic logic puzzle; requires careful case analysis

**Simple HTML:**
```html
<div class="coins">
  <button class="coin" data-id="1">Coin 1</button>
  <!-- 8 coins, clickable to assign to left/right -->
</div>
<button id="left-pan">Add to Left</button>
<button id="right-pan">Add to Right</button>
<button id="weigh">Weigh!</button>
<div id="result">Left side heavier</div>
<button id="guess-light-1">Coin 1 is Light</button>
<!-- final guess buttons -->
```

---

## Quick Comparison

| Game | Speed Test | Pivot Test | Reasoning | Implementation |
|------|-----------|-----------|-----------|----------------|
| **Codebreaker** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Easy |
| **Grid Hunt** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | Easy |
| **Balance Scale** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Medium |

---

## My Recommendation: **Codebreaker**

Here's why it edges out the others:

1. **Dead simple to implement** - Just 6 number buttons + submit + feedback display
2. **Mathematically well-studied** - Optimal strategy is known (Knuth's algorithm: max 5 guesses for 4-digit, 6-color)
3. **Perfect difficulty match for Wordle** - Same "guess and refine" loop
4. **Easy to score** - Number of guesses is your metric
5. **Forces explicit reasoning** - Can't brute force; must eliminate possibilities
6. **Deterministic** - Same secret = perfectly fair comparison

**Scoring ideas:**
- Guesses to solve (lower = better)
- Did it solve at all? (binary)
- Quality of first 2 guesses (tests initial strategy)
- Time to solve (if you want speed pressure)

---

Want me to sketch out a complete HTML/JS implementation of Codebreaker that's Playwright-MCP friendly? I could make it with:
- Fixed secret code (configurable)
- Simple button interface
- Clear DOM elements for the agent to read/interact with
- Move counter and win state detection\n