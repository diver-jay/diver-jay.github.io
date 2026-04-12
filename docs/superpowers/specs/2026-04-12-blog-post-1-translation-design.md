# Blog Post #1 Translation Design

**Date:** 2026-04-12
**Source:** `src/content/blog/ko/1.md`
**Target:** `src/content/blog/en/1.md`, `src/content/blog/de/1.md`

## Goal

Translate the first Korean blog post into English and German for the multilingual blog.

## Files

| File | URL |
|------|-----|
| `src/content/blog/en/1.md` | `/blog/1/` |
| `src/content/blog/de/1.md` | `/de/blog/1/` |

## Translation Approach

**Localization-first:** Each version reads as if written natively in that language. Sentence rhythm, idioms, and cultural references are adapted to the target audience — not translated literally from Korean.

## Title Handling

The Korean subtitle "그대들은 어떻게 살 것인가" references the Yoshino Genzaburo book / Miyazaki Hayao film. Each language uses its localized title:

- **English:** `Replaceable Developers, Irreplaceable Developers — How Do You Live?`
- **German:** `Ersetzbare Entwickler, unersetzbare Entwickler — Wie wollt ihr leben?`

## Frontmatter

| Field | Action |
|-------|--------|
| `title` | Translate (see above) |
| `description` | Localize (not literal translation) |
| `cardTitle` | Localize |
| `pubDate` | Keep as-is (`Apr 02 2026`) |
| `heroImage` | Keep as-is (same image path) |

## Content Decisions

- **Pull quotes** (`>` blockquote): All 3 preserved in same positions, localized
- **Technical terms**: `GLSL`, `WebGL`, `Verlet Integration`, `Middle-out`, `React`, `Bottom-up`, `Top-down` — kept as-is (universal)
- **Code/filenames**: `jellyfish.png` — kept as-is
- **GitHub link**: kept as-is
- **Video tag**: kept as-is
- **Section headers**: localized (`## 의도적 무지` → `## Deliberate Ignorance` / `## Bewusste Unwissenheit`)

## Pull Quotes (for reference)

1. `Trash in, Trash out. 내가 모호하면 AI도 모호해진다.`
2. `정확한 질문만이 정확한 결과를 만들어낸다.`
3. `대체되는 건 코드를 치는 손이지, 무엇을 만들지 판단하는 머리가 아니었다.`
