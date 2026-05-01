---
kind: note
id: claude-conversation-2025-12-01-comparing-new-data-with-existing-scripting-guide-619beb7b
updatedAt: 1764549054305
createdAt: 1764548169362
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 619beb7b-1b8b-4315-9291-623b7beabc0e
created_at: 2025-12-01T00:16:09.362890Z
updated_at: 2025-12-01T00:30:54.305866Z
title: "Comparing new data with existing scripting guide"
---

# Comparing new data with existing scripting guide

## Metadata

- Claude conversation UUID: `619beb7b-1b8b-4315-9291-623b7beabc0e`
- Created: `2025-12-01T00:16:09.362890Z`
- Updated: `2025-12-01T00:30:54.305866Z`
- Message count: 4
- Transcript chars extracted: 10022

## Claude summary

**Conversation Overview**

The user requested an analysis comparing new scripting performance data with their existing techfren voice scripting guide to determine if updates were needed. Claude analyzed two documents: the original voice scripting guide based on 463 transcripts and a new performance analysis of 157 YouTube videos. The comparison revealed significant conflicts in hook performance rankings, with the new data showing bold claims achieving 80% success rates versus tool introductions at only 50%, contradicting the original guide's emphasis on tool introductions as the top performer. Additional conflicts emerged around the use of "so" as an opener versus transition word, and the data revealed that slow starts with phrases like "so," "hey," or "what's up" appeared in 10% of bottom performers versus only 2% of top performers.

After identifying these discrepancies, the user requested Claude create an updated version of the scripting guide. Claude developed a comprehensive revision that reordered hook templates to prioritize bold claims, added a new "First 10 Words Rule" section emphasizing the critical nature of opening moments, included explicit warnings against slow starts, and clarified the strategic use of transitional language. The updated guide preserved valuable elements from the original including signature vocabulary analysis, reaction patterns, and sentence pacing rules while incorporating the new performance insights. The final document maintained the techfren voice identity of discovery energy and authentic reactions while providing data-driven template hierarchies and scripting rules based on actual view performance correlation.

**Tool Knowledge**

Claude used the docx creation tool to generate a professionally formatted 20+ page scripting guide. The document structure utilized custom paragraph styles with specific heading hierarchies (Title, Heading1, Heading2, Heading3, Subtitle) and consistent spacing parameters. Table formatting employed border styling with cellBorders configuration and shading for visual hierarchy, particularly effective for performance comparison tables showing hook success rates and CTA effectiveness. The numbering system implementation used multiple reference types (bullet-main, bullet-sub, num-rules, num-donts, num-dos, num-checklist) to create distinct formatting for different content sections. Color coding proved essential for organizing information, with green shading (D4EDDA) for recommended approaches, red shading (F8D7DA) for patterns to avoid, and light green backgrounds (F0F9F0) for template examples. The footer implementation included page numbering and document versioning, while text formatting used bold and italic emphasis strategically to highlight key performance metrics and critical warnings throughout the guide.

## Quick excerpt

The user is asking me to compare the newly uploaded "techfren-scripting-analysis.docx" with the existing "techfren-voice-scripting-guide (1).docx" that's in the project files. They want to know if there are any conflicts or if the guide needs updating based on the new data. Let me analyze both documents: **Existing Voice Scripting Guide (Document 6) - Key Points:** 1. Hook Performance Ranking shows: - Tool Introduction: 114,645 avg views (highest) - Excitement Reaction: 41,473 - Direct Demo: 25,

## Transcript

## human\n\nhow does this new data compare with our existing scripting guide. does our guide need updating\n
## assistant\n\nThe user is asking me to compare the newly uploaded "techfren-scripting-analysis.docx" with the existing "techfren-voice-scripting-guide (1).docx" that's in the project files. They want to know if there are any conflicts or if the guide needs updating based on the new data.

Let me analyze both documents:

**Existing Voice Scripting Guide (Document 6) - Key Points:**
1. Hook Performance Ranking shows:
   - Tool Introduction: 114,645 avg views (highest)
   - Excitement Reaction: 41,473
   - Direct Demo: 25,188
   - Announcement: 15,422
   - Personal Statement: 13,575
   - Question Hook: 2,329 (lowest)

2. Says "Tool Introduction hooks outperform everything else by a massive margin. 'There's this thing called...' is your highest-converting opening pattern."

3. High-performance language patterns suggest using more: "so", "just", "actually", "here", "cool", "look"

4. Says to use LESS: "like", "I think" (hedging)

5. Template 1 is "Tool Discovery" - "There's this thing called [TOOL NAME]..."

**New Scripting Analysis (Document 9) - Key Points:**
1. The Three Patterns That Matter Most:
   - Bold Claims in First 30 Seconds (25% top vs 8% bottom - 3x difference)
   - Avoid Slow Starts (2% top vs 10% bottom start with "so", "hey", etc.)
   - Name the Tool Early (40% top vs 25% bottom)

2. Hook Pattern Success Rates:
   - Bold claim (best, fastest, trending): 80% success
   - Excitement reaction: 57%
   - Action start (let's see, let's try): 54%
   - Tool introduction: 50% - NEUTRAL
   - Question hook: 29% (avoid)

3. Top hooks examples: "openvoice has been trending 20,000 stars..."

4. Says "Never start with 'so,' 'hey,' or 'what's up'"

**KEY CONFLICTS:**

I notice a critical divergence in hook strategy between the two documents. The original guide heavily emphasized tool introduction as the top-performing approach, claiming it as the highest-converting opening. However, the new analysis challenges this, positioning bold claims as the most successful hook method with an 80% success rate, while downgrading tool introduction to a neutral 50% performance.

The new data suggests a significant shift in scripting strategy, recommending bold, trending claims over traditional tool introduction techniques. This conflicts directly with the previous guide's core recommendation, indicating a need for substantial revision in scripting approach.

Regarding language usage, the analysis reveals nuanced guidance about conversational openers. While the old guide suggested "so" as a positive connector, the new research warns against using it as an opening word, potentially killing viewer retention. This implies a more strategic placement of conversational transitions - acceptable mid-video but problematic as an initial hook.

The research base differs markedly: 157 YouTube-specific transcripts versus the original 463 transcripts spanning multiple platforms. This methodological difference could explain the strategic divergences, suggesting the need for a carefully considered update to the existing guide.

Potential reconciliation involves reordering template priorities, emphasizing bold claims over traditional tool discovery approaches, and refining conversational language strategies to maximize audience engagement.Looking at both documents, there are some interesting tensions and a few areas where the guide could be refined. Let me break down the key comparisons:

## Major Conflicts to Reconcile

### 1. Hook Performance Rankings Don't Match

**Existing Guide** says:
- Tool Introduction ("There's this thing called...") = **114,645 avg views** (best)
- Question Hook = 2,329 (worst)

**New Analysis** says:
- Bold Claim (best, fastest, trending) = **80% success rate** (best)
- Tool Introduction = **50% success rate** (neutral)
- Question Hook = 29% (worst - both agree here)

This is the biggest conflict. The old guide positions "Tool Introduction" as your killer hook, but the new data suggests **bold claims** dramatically outperform it.

### 2. The "So" Contradiction

**Existing Guide:** Use MORE "so" (+1.25 correlation with high performers)

**New Analysis:** "Never start with 'so,' 'hey,' or 'what's up'" — these slow starts appear in 10% of bottom performers vs only 2% of top.

**Resolution:** These likely aren't contradicting — "so" is probably fine *mid-video* as a transition, but deadly as an *opener*. The guide should clarify this.

### 3. Template Priority Order

The existing guide leads with "Tool Discovery" as Template 1. The new data suggests "Trending Claim" or "Bold Claim" should be the primary template.

---

## What Aligns Well

| Element | Both Documents Agree |
|---------|---------------------|
| Question hooks | Avoid them — worst performers |
| Hedging words | Cut "I think," "maybe" — top videos use 18% less |
| Filler words | Reduce "like," "basically" — top videos use 14% less |
| "Free" / "Open source" | Magic words — 2.5x more top performers use them |
| Specificity | Name the tool early — 40% top vs 25% bottom |
| Duration | Shorter wins — 57% of top performers under 60 sec |

---

## Recommended Updates to the Guide

### 1. Revise Hook Hierarchy

Current ranking should be updated to:

| Rank | Hook Type | New Data Support |
|------|-----------|------------------|
| **1** | **Bold Claim** | 80% success rate, 3x more common in top videos |
| 2 | Tool Introduction + Claim combo | Combine both patterns |
| 3 | Excitement Reaction | 57% success |
| 4 | Direct Demo/Action | 54% success |
| 5 | Question Hook | 29% — avoid |

### 2. Add "Slow Start" Warning Section

Add explicitly to the DON'T list:
> **Don't start with "so," "hey," "what's up," or "alright so."** These appear in 10% of bottom performers vs only 2% of top. Jump directly into value.

### 3. Clarify "So" Usage

Change the guidance from "use more 'so'" to:
> **"So" works as a transition mid-video, but never as your first word.** Top openers jump straight to the claim or tool.

### 4. Update Template Order

Reorder templates with **Trending/Bold Claim** first:

**Template 1: Bold Claim (NEW PRIMARY)**
> *"[Tool] has been trending—[specific metric]. [What it does]..."*
> 
> Example: "openvoice has been trending 20,000 stars—instantly clone any voice..."

**Template 2: Social Proof Claim**
> *"Someone said this is [the best/beating X], so let's try it out..."*

**Template 3: Tool Discovery** (demote from #1)
> *"There's this thing called [TOOL] by [CREATOR]—[bold claim about it]..."*

### 5. Add "First 10 Words" Rule

The new analysis emphasizes this strongly:
> **The first 10 words are everything.** Your worst videos start with generic context. Your best start with claims, discoveries, or direct action. Script those first 10 words carefully.

---

## Summary: Does the Guide Need Updating?

**Yes, but it's refinement, not overhaul.** The core voice guidance (reaction words, signature vocabulary, sentence pacing) remains solid. The updates needed are:

1. **Elevate bold claims** above tool introductions in hook hierarchy
2. **Add slow-start warning** (no "so/hey/what's up" as openers)
3. **Clarify "so" usage** — transitions yes, openers no
4. **Reorder templates** — bold claim first, tool discovery second
5. **Add "first 10 words" emphasis**

Want me to create an updated version of the scripting guide that incorporates these findings?\n
## human\n\nmake an updated guide\n
## assistant\n\nThe user wants me to create an updated version of the techfren voice scripting guide that incorporates the new findings from the scripting analysis. I should read the skill for creating docx files first, then create a comprehensive updated guide.

Let me read the docx skill first.
```
This block is not supported on your current device yet.
```

Now I need to read the docx-js.md file since I'm creating a new document from scratch.
```
This block is not supported on your current device yet.
```

Now I have all the information I need to create the updated scripting guide. Let me create a comprehensive updated version that incorporates the new findings from the scripting analysis while preserving the valuable content from the original guide.

Key updates to make:
1. Revise hook hierarchy - put Bold Claims first
2. Add "Slow Start" warning section
3. Clarify "so" usage (transitions yes, openers no)
4. Reorder templates
5. Add "First 10 Words" emphasis
6. Keep all the good content about voice, vocabulary, reactions, etc.

I'll create a well-formatted docx document.Now I'll create the updated scripting guide that incorporates the new findings:
```
This block is not supported on your current device yet.
```

Now I need to run this script to generate the docx file.
```
This block is not supported on your current device yet.
```

The document was created successfully. Let me verify it exists and then provide the link to the user.
```
This block is not supported on your current device yet.
```

The document was created successfully. Let me provide the download link to the user with a brief summary of what was updated.Done! Here's your updated guide:

[View your updated scripting guide](computer:///mnt/user-data/outputs/techfren-voice-scripting-guide-v2.docx)

**Key updates in v2.0:**

| Change | What's New |
|--------|-----------|
| **Hook Hierarchy** | Bold Claims now #1 (80% success) — Tool Intros demoted to #4 (50% success) |
| **First 10 Words Rule** | New section emphasizing this is where videos win or lose |
| **Slow Start Warning** | Explicit warning against "so/hey/what's up" openers (5x more common in failures) |
| **"So" Clarification** | Now specifies: great as transition, deadly as opener |
| **Template Reorder** | Bold Claim template now leads; Tool Discovery moved to #4 |
| **7 Scripting Rules** | New consolidated rules section from the analysis |
| **Updated Don'ts** | Added "Don't start with questions" (29% success rate) |

The core voice guidance (vocabulary, reactions, sentence pacing) remains intact since those findings held up well.\n