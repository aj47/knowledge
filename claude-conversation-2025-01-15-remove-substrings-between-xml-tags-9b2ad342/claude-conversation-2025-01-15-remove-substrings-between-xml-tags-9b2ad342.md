---
kind: note
id: claude-conversation-2025-01-15-remove-substrings-between-xml-tags-9b2ad342
updatedAt: 1736904760850
createdAt: 1736904752663
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 9b2ad342-847a-484e-85d5-35acfaf6c196
created_at: 2025-01-15T01:32:32.663259Z
updated_at: 2025-01-15T01:32:40.850829Z
title: "Remove Substrings Between XML Tags"
---

# Remove Substrings Between XML Tags

## Metadata

- Claude conversation UUID: `9b2ad342-847a-484e-85d5-35acfaf6c196`
- Created: `2025-01-15T01:32:32.663259Z`
- Updated: `2025-01-15T01:32:40.850829Z`
- Message count: 2
- Transcript chars extracted: 1041

## Quick excerpt

I'll help you write a Python function to remove substrings between `<source>` and `</source>` tags, including the tags themselves. Here's a solution using regular expressions: ```python import re def remove_source_tags(text): # Pattern matches <source> to </source> including newlines pattern = r'<source>.*?</source>' # re.DOTALL makes . match newlines as well cleaned_text = re.sub(pattern, '', text, flags=re.DOTALL) return cleaned_text # Example usage text = """Some text here <source>This should

## Transcript

## human\n\nwrite python to remove the substring starting from 
`<source>` to `</source>`\n
## assistant\n\nI'll help you write a Python function to remove substrings between `<source>` and `</source>` tags, including the tags themselves. Here's a solution using regular expressions:

```python
import re

def remove_source_tags(text):
    # Pattern matches <source> to </source> including newlines
    pattern = r'<source>.*?</source>'
    # re.DOTALL makes . match newlines as well
    cleaned_text = re.sub(pattern, '', text, flags=re.DOTALL)
    return cleaned_text

# Example usage
text = """Some text here
<source>This should be removed
even across multiple lines</source>
More text here
<source>Another source to remove</source>
Final text"""

result = remove_source_tags(text)
print(result)
```

This function:
1. Uses `re.sub()` to find and replace all occurrences
2. Uses `.*?` for non-greedy matching (won't consume text between multiple source tags)
3. Uses `re.DOTALL` flag to match across newlines

Would you like to see how it works with different examples?\n