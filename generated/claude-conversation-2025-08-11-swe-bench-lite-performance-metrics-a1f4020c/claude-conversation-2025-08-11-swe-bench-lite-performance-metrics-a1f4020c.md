---
kind: note
id: claude-conversation-2025-08-11-swe-bench-lite-performance-metrics-a1f4020c
updatedAt: 1754942514180
createdAt: 1754942506685
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: a1f4020c-56c2-493f-b116-1ab9aace57e9
created_at: 2025-08-11T20:01:46.685079Z
updated_at: 2025-08-11T20:01:54.180077Z
title: "SWE-bench Lite Performance Metrics"
---

# SWE-bench Lite Performance Metrics

## Metadata

- Claude conversation UUID: `a1f4020c-56c2-493f-b116-1ab9aace57e9`
- Created: `2025-08-11T20:01:46.685079Z`
- Updated: `2025-08-11T20:01:54.180077Z`
- Message count: 2
- Transcript chars extracted: 3823

## Quick excerpt

Based on the SWE-bench Lite evaluation results you provided, the **SWE-bench Lite score is 55.35%**. Here's how this is calculated: - **Resolved instances**: 150 out of 271 completed instances - **Score**: 150 ÷ 271 = 0.5535 = **55.35%** The evaluation shows: - 300 total test instances - 271 instances completed successfully - 29 instances had errors during execution - Of the 271 completed instances, 150 were resolved (passed) and 121 were unresolved (failed) This is a solid performance on SWE-be

## Transcript

## human\n\nwhat is the swebench lite score given this:

```
=== SWE-bench Evaluation Summary ===
Run ID: swe-lite-20250809-161802
Status: success
Timestamp: Mon Aug 11 19:53:32 UTC 2025
Final Results:
{
    "total_instances": 300,
    "submitted_instances": 300,
    "completed_instances": 271,
    "resolved_instances": 150,
    "unresolved_instances": 121,
    "empty_patch_instances": 0,
    "error_instances": 29,
    "completed_ids": [
        "astropy__astropy-12907",
        "astropy__astropy-14182",
        "astropy__astropy-14365",
        "astropy__astropy-14995",
        "astropy__astropy-6938",
        "astropy__astropy-7746",
        "django__django-10914",
        "django__django-10924",
        "django__django-11001",
        "django__django-11039",
        "django__django-11049",
        "django__django-11099",
        "django__django-11133",
        "django__django-11179",
        "django__django-11422",
        "django__django-11564",
        "django__django-11583",
        "django__django-11620",
        "django__django-11630",
        "django__django-11742",
        "sympy__sympy-13043",
        "sympy__sympy-13146",
        "sympy__sympy-13177",
        "sympy__sympy-13437",
        "sympy__sympy-13773",
        "sympy__sympy-13895",
        "sympy__sympy-13915",
        "sympy__sympy-13971",
        "sympy__sympy-14308",
        "sympy__sympy-14317",
        "sympy__sympy-15308",
        "sympy__sympy-16281",
        "sympy__sympy-16503",
        "sympy__sympy-16988",
        "sympy__sympy-17139",
        "sympy__sympy-17630",
        "sympy__sympy-18199",
        "sympy__sympy-18835",
        "sympy__sympy-19007",
        "sympy__sympy-19254",
        "sympy__sympy-19487",
        "sympy__sympy-20322",
        "sympy__sympy-20639",
        "sympy__sympy-21171",
        "sympy__sympy-21612",
        "sympy__sympy-21627",
        "sympy__sympy-22840",
        "sympy__sympy-23191",
        "sympy__sympy-24102",
        "sympy__sympy-24909"
    ],
    "error_ids": [
        "django__django-11019",
        "django__django-11283",
        "django__django-11910",
        "django__django-16408",
        "matplotlib__matplotlib-18869",
        "matplotlib__matplotlib-23562",
        "matplotlib__matplotlib-23563",
        "matplotlib__matplotlib-23987",
        "matplotlib__matplotlib-25079",
        "matplotlib__matplotlib-25442",
        "matplotlib__matplotlib-25498",
        "pytest-dev__pytest-5103",
        "pytest-dev__pytest-7168",
        "pytest-dev__pytest-7220",
        "pytest-dev__pytest-7373",
        "pytest-dev__pytest-7432",
        "pytest-dev__pytest-7490",
        "pytest-dev__pytest-8365",
        "pytest-dev__pytest-8906",
        "scikit-learn__scikit-learn-25638",
        "scikit-learn__scikit-learn-25747",
        "sphinx-doc__sphinx-8282",
        "sympy__sympy-11870",
        "sympy__sympy-13031",
        "sympy__sympy-14024",
        "sympy__sympy-15346",
        "sympy__sympy-16106",
        "sympy__sympy-18087",
        "sympy__sympy-18698"
    ],
    "schema_version": 2
}
Artifacts uploaded for download from the Actions tab.
```\n
## assistant\n\nBased on the SWE-bench Lite evaluation results you provided, the **SWE-bench Lite score is 55.35%**.

Here's how this is calculated:

- **Resolved instances**: 150 out of 271 completed instances
- **Score**: 150 ÷ 271 = 0.5535 = **55.35%**

The evaluation shows:
- 300 total test instances
- 271 instances completed successfully 
- 29 instances had errors during execution
- Of the 271 completed instances, 150 were resolved (passed) and 121 were unresolved (failed)

This is a solid performance on SWE-bench Lite, which is a challenging benchmark that tests an AI system's ability to resolve real-world software engineering issues from popular Python repositories like Django, SymPy, Matplotlib, and others.\n