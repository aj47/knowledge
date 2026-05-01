#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path(__file__).resolve().parents[1]
SKIP = {'.git', 'tools', 'reports'}

DATE_PATTERNS = [
    re.compile(r'(20\d{2})-(\d{2})-(\d{2})[t_-]?(\d{2})[-_]?([0-5]\d)?\s*(utc)?', re.I),
    re.compile(r'(\d{2})(\d{2})(\d{2})[_-](\d{2})([0-5]\d)'),
]


def split_frontmatter(text):
    if not text.startswith('---\n'):
        return None
    end = text.find('\n---\n', 4)
    if end == -1:
        return None
    return text[:4], text[4:end], text[end + 1:]


def field(body, name):
    prefix = name + ':'
    for line in body.splitlines():
        if line.startswith(prefix):
            return line.split(':', 1)[1].strip().strip('"')
    return None


def set_field(body, name, value):
    out = []
    prefix = name + ':'
    done = False
    for line in body.splitlines():
        if line.startswith(prefix):
            out.append(f'{name}: {value}')
            done = True
        else:
            out.append(line)
    if not done:
        out.append(f'{name}: {value}')
    return '\n'.join(out) + '\n'


def parse_stamp(s):
    s = s.lower()
    m = DATE_PATTERNS[0].search(s)
    if m:
        y, mo, d, hh, mm, utc = m.groups()
        mm = mm or '00'
        suffix = ' UTC' if utc else ''
        return f'{y}-{mo}-{d} {hh}:{mm}{suffix}'
    m = DATE_PATTERNS[1].search(s)
    if m:
        yy, mo, d, hh, mm = m.groups()
        return f'20{yy}-{mo}-{d} {hh}:{mm}'
    # Folder-only day like x-feed-summaries-2026-04-21
    m = re.search(r'(20\d{2})-(\d{2})-(\d{2})(?:/|$)', s)
    if m:
        y, mo, d = m.groups()
        return f'{y}-{mo}-{d}'
    return None


def tab_label(old_title, summary):
    hay = f'{old_title} {summary}'.lower()
    if 'following tab' in hay or 'following' in old_title.lower():
        return 'Following Tab'
    if 'for you tab' in hay:
        return 'For You Tab'
    return None


def md_files():
    for p in ROOT.rglob('*.md'):
        rel = p.relative_to(ROOT)
        if any(part in SKIP for part in rel.parts):
            continue
        yield p


def get_title(p):
    text = p.read_text(encoding='utf-8', errors='ignore')
    parts = split_frontmatter(text)
    if not parts:
        return None
    _, body, _ = parts
    return field(body, 'title')


def main():
    groups = defaultdict(list)
    for p in md_files():
        title = get_title(p)
        if title and (title.startswith('X/Twitter Feed Summary') or title.startswith('X Feed Summary')):
            groups[title].append(p)

    changed = []
    for title, paths in groups.items():
        if len(paths) < 2:
            continue
        for p in paths:
            text = p.read_text(encoding='utf-8', errors='ignore')
            pre, body, rest = split_frontmatter(text)
            summary = field(body, 'summary') or ''
            rel = p.relative_to(ROOT).as_posix()
            stamp = parse_stamp(rel) or parse_stamp(summary)
            if not stamp:
                continue
            tab = tab_label(title, summary)
            base = 'X/Twitter Feed Summary' if title.startswith('X/Twitter') else 'X Feed Summary'
            new_title = f'{base} — {stamp}' + (f' — {tab}' if tab else '')
            if new_title == title:
                continue
            new_body = set_field(body, 'title', new_title)
            p.write_text(pre + new_body + rest, encoding='utf-8')
            changed.append((rel, title, new_title))

    print(f'Changed {len(changed)} titles')
    for rel, old, new in changed:
        print(f'- {rel}: {old} -> {new}')

if __name__ == '__main__':
    main()
