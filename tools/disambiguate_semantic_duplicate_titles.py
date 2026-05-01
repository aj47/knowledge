#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path(__file__).resolve().parents[1]
SKIP = {'.git', 'tools', 'reports'}


def split_frontmatter(text):
    if not text.startswith('---\n'):
        return None
    end = text.find('\n---\n', 4)
    if end == -1:
        return None
    return text[:4], text[4:end], text[end + 1:]


def parse_fm(body):
    data = {}
    for line in body.splitlines():
        if ':' in line and not line.startswith((' ', '\t')):
            k, v = line.split(':', 1)
            data[k.strip()] = v.strip().strip('"')
    return data


def set_field(body, name, value):
    out = []
    replaced = False
    for line in body.splitlines():
        if line.startswith(name + ':'):
            out.append(f'{name}: {value}')
            replaced = True
        else:
            out.append(line)
    if not replaced:
        out.append(f'{name}: {value}')
    return '\n'.join(out) + '\n'


def md_files():
    for p in ROOT.rglob('*.md'):
        rel = p.relative_to(ROOT)
        if any(part in SKIP for part in rel.parts):
            continue
        yield p


def conversation_date_and_hash(rel):
    s = rel.as_posix()
    m = re.search(r'claude-conversation-(\d{4}-\d{2}-\d{2})-.*-([0-9a-f]{8})/', s)
    if m:
        return m.group(1), m.group(2)
    return None, None


def disambiguated_title(rel, title):
    parts = rel.parts
    if parts[0] == 'claude-canonical-core':
        return f'Claude Canonical — {title}'
    if parts[0] == 'claude-evergreen-distilled':
        return f'Claude Evergreen Distilled — {title}'
    if parts[0].startswith('claude-conversation-'):
        date, short = conversation_date_and_hash(rel)
        if date and short:
            return f'Claude Conversation — {date} — {title} — {short}'
        return f'Claude Conversation — {title} — {parts[0]}'
    return f'{title} — {parts[0]}'


def main():
    entries = []
    by_title = defaultdict(list)
    for p in md_files():
        text = p.read_text(encoding='utf-8', errors='ignore')
        split = split_frontmatter(text)
        if not split:
            continue
        pre, body, rest = split
        fm = parse_fm(body)
        title = fm.get('title')
        if not title:
            continue
        rel = p.relative_to(ROOT)
        item = (p, rel, pre, body, rest, fm)
        entries.append(item)
        by_title[title].append(item)

    changed = []
    for title, items in sorted(by_title.items()):
        if len(items) < 2:
            continue
        for p, rel, pre, body, rest, fm in items:
            new_title = disambiguated_title(rel, title)
            if new_title == title:
                continue
            new_body = set_field(body, 'title', new_title)
            p.write_text(pre + new_body + rest, encoding='utf-8')
            changed.append((rel.as_posix(), title, new_title))

    print(f'Changed {len(changed)} titles')
    for rel, old, new in changed:
        print(f'- {rel}: {old} -> {new}')


if __name__ == '__main__':
    main()
