---
kind: note
id: claude-conversation-2025-06-06-custom-whisper-prompt-improvements-a01d40c1
updatedAt: 1749234628407
createdAt: 1749234619781
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: a01d40c1-e667-4ed3-a49d-c06fe5ae8620
created_at: 2025-06-06T18:30:19.781059Z
updated_at: 2025-06-06T18:30:28.407047Z
title: "Custom Whisper Prompt Improvements"
---

# Custom Whisper Prompt Improvements

## Metadata

- Claude conversation UUID: `a01d40c1-e667-4ed3-a49d-c06fe5ae8620`
- Created: `2025-06-06T18:30:19.781059Z`
- Updated: `2025-06-06T18:30:28.407047Z`
- Message count: 2
- Transcript chars extracted: 3687

## Quick excerpt

``` Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile. ```

## Transcript

## human\n\ncombine these pr notes into one:

```
## 🎯 Overview

This PR implements custom prompt functionality to improve Whisper transcription accuracy for domain-specific vocabulary, names, and technical terms. This addresses the need for better recognition of specialized content by allowing users to provide context to the Whisper model.

## ✨ New Features

### CLI Arguments
- `--initial_prompt`: Direct prompt specification
- `--prompt_file`: Load prompt from text file

### Python API
- Added `initial_prompt` parameter to `transcribe()` function
- Maintains full backward compatibility

### Backend Support
- Works with all Whisper backends (cpu, cuda, insane, mps)
- Updated `whisper_mac.py` to support `other_args` parameter
- Prompts are passed as `--initial_prompt` to underlying Whisper engines

## 📖 Usage Examples

**CLI:**
```bash
# Direct prompt
transcribe-anything video.mp4 --initial_prompt "The speaker discusses AI, machine learning, and neural networks."

# Load from file
transcribe-anything video.mp4 --prompt_file my_custom_prompt.txt

# Combined with other options
transcribe-anything video.mp4 --device insane --model large-v3 --initial_prompt "Technical discussion about PyTorch and TensorFlow."
```

**Python API:**
```python
from transcribe_anything import transcribe

# Direct prompt
result = transcribe(
    url_or_file="video.mp4",
    initial_prompt="The speaker discusses artificial intelligence and machine learning."
)

# Load prompt from file
with open("my_custom_prompt.txt", "r") as f:
    prompt = f.read()

result = transcribe(
    url_or_file="video.mp4",
    initial_prompt=prompt,
    model="large-v3",
    device="insane"
)
```

## 🧪 Testing

- Added unit tests for prompt functionality
- Verified CLI argument parsing works correctly
- Tested API parameter integration
- Confirmed backward compatibility

## 🎯 Benefits

✅ **Better recognition of technical terms** - AI, programming, scientific terminology
✅ **Improved accuracy for proper names** - People, companies, products
✅ **Domain-specific vocabulary support** - Medical, legal, business terms
✅ **Reduced transcription errors** - Fewer misrecognized specialized words
✅ **Universal backend support** - Works with cpu, cuda, insane, and mps devices

## 🔧 Implementation Details

### Changes Made
1. **CLI Parser** (`_cmd.py`): Added `--initial_prompt` and `--prompt_file` arguments
2. **API Function** (`api.py`): Added `initial_prompt` parameter with proper integration
3. **Mac Backend** (`whisper_mac.py`): Updated to support `other_args` parameter
4. **Documentation** (`README.md`): Added usage examples and explanations
5. **Tests**: Added unit tests to ensure functionality works correctly

### Backward Compatibility
- All existing functionality remains unchanged
- New parameters are optional with sensible defaults
- No breaking changes to existing API or CLI usage

## 🔍 Research Background

This implementation is based on Whisper's built-in `initial_prompt` parameter, which is documented in the OpenAI Whisper repository. The feature allows providing context to improve transcription accuracy for:

- Custom vocabulary and terminology
- Proper names and brand names
- Domain-specific jargon
- Technical terms that Whisper might misrecognize

## 🚀 Ready for Review

This PR is ready for review and testing. The implementation:
- ✅ Follows existing code patterns and conventions
- ✅ Includes comprehensive documentation
- ✅ Maintains backward compatibility
- ✅ Has been tested with multiple scenarios
- ✅ Addresses a real user need for improved transcription accuracy
```

```\n
## assistant\n\n```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```\n