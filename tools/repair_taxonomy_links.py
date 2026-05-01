#!/usr/bin/env python3
from pathlib import Path
import os
import re

ROOT = Path(__file__).resolve().parents[1]
BUCKETS = ['archive','business','content','curated','generated','inbox','personal','systems']
ABS_PREFIX = '/Users/ajjoobandi/.agents/knowledge/'
ABS_RE = re.compile(re.escape(ABS_PREFIX) + r'([^\s)`,]+)')
MD_LINK_RE = re.compile(r'\]\((\.\./([^/]+)/[^)]+)\)')

def rel_from(src: Path, dest: Path) -> str:
    return os.path.relpath(dest, start=src.parent).replace(os.sep, '/')

def build_map():
    mapping = {}
    for bucket in BUCKETS:
        bucket_dir = ROOT / bucket
        if not bucket_dir.exists():
            continue
        for child in bucket_dir.iterdir():
            if child.is_dir():
                mapping[child.name] = bucket
    return mapping

DIR_TO_BUCKET = build_map()
changed = []
abs_rewrites = 0
rel_rewrites = 0
missing_targets = []

for path in sorted(p for p in ROOT.rglob('*.md') if '.git' not in p.parts):
    original = path.read_text(encoding='utf-8', errors='ignore')

    def replace_abs(match):
        global abs_rewrites
        raw = match.group(1)
        target_rel = raw.rstrip('.,;:')
        suffix = raw[len(target_rel):]
        top = target_rel.split('/', 1)[0]
        if top not in DIR_TO_BUCKET:
            return match.group(0)
        moved_rel = f"{DIR_TO_BUCKET[top]}/{target_rel}"
        dest = ROOT / moved_rel
        abs_rewrites += 1
        if not dest.exists():
            missing_targets.append((path.relative_to(ROOT).as_posix(), moved_rel))
        return rel_from(path, dest) + suffix

    text = ABS_RE.sub(replace_abs, original)

    def replace_md_link(match):
        global rel_rewrites
        full_rel = match.group(1)
        top = match.group(2)
        if top not in DIR_TO_BUCKET:
            return match.group(0)
        target_inside_top = full_rel[len('../'):]
        moved_rel = f"{DIR_TO_BUCKET[top]}/{target_inside_top}"
        dest = ROOT / moved_rel
        rel_rewrites += 1
        if not dest.exists():
            missing_targets.append((path.relative_to(ROOT).as_posix(), moved_rel))
        return f"]({rel_from(path, dest)})"

    text = MD_LINK_RE.sub(replace_md_link, text)
    if text != original:
        # Only trim trailing whitespace in files whose links changed, avoiding vault-wide whitespace churn.
        text = '\n'.join(line.rstrip() for line in text.splitlines()) + ('\n' if text.endswith('\n') else '')
        path.write_text(text, encoding='utf-8')
        changed.append(path.relative_to(ROOT).as_posix())

print(f'changed files: {len(changed)}')
print(f'absolute rewrites: {abs_rewrites}')
print(f'relative rewrites: {rel_rewrites}')
print(f'missing targets after rewrite: {len(missing_targets)}')
for item in changed[:120]:
    print(f'- {item}')
if missing_targets:
    print('\nMissing target samples:')
    for src, target in missing_targets[:80]:
        print(f'- {src} -> {target}')
