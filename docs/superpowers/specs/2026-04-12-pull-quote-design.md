# Pull Quote Design Spec

**Date:** 2026-04-12  
**Scope:** `src/styles/global.css`, `src/content/blog/1.md`

## Goal

Improve the visual rhythm of blog post `1.md` by styling Markdown blockquotes as Pull Quotes — centered, italic, separated by thin horizontal rules — and applying them to key punchline sentences.

## Constraints

- Keep `.md` format (no MDX conversion)
- No new components, no plugins
- Font size stays at existing `1.333em` (larger than body, smaller than `##`)

## Changes

### 1. `src/styles/global.css`

Replace the existing `blockquote` rule:

```css
/* Before */
blockquote {
    border-left: 4px solid var(--accent);
    padding: 0 0 0 20px;
    margin: 0;
    font-size: 1.333em;
}

/* After */
blockquote {
    border-top: 1px solid rgb(var(--gray-light));
    border-bottom: 1px solid rgb(var(--gray-light));
    padding: 1.2em 0;
    margin: 2em 0;
    font-size: 1.333em;
    font-style: italic;
    text-align: center;
}
```

### 2. `src/content/blog/1.md`

Apply `>` blockquote syntax to 4 locations:

| Location | Text |
|----------|------|
| 도입부 | `"이거 프롬프트 하나로 나왔대."` |
| Trash in, Trash out 섹션 | `Trash in, Trash out. 내가 모호하면 AI도 모호해진다.` |
| Middle-out 섹션 | `정확한 질문만이 정확한 결과를 만들어낸다.` |
| 마지막 단락 | `대체되는 건 코드를 치는 손이지, 무엇을 만들지 판단하는 머리가 아니었다.` |

The opening line `"개발자 진짜 다 짤리는 거 아니야?"` moves to the frontmatter `title` field (separate manual edit, not part of this spec).

## Out of Scope

- Speech bubble components
- Callout components
- MDX conversion
- `remark-directive` plugin
- Any other blog posts
