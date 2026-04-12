# Pull Quote Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Style Markdown blockquotes as centered Pull Quotes and apply them to 4 punchline sentences in `1.md`.

**Architecture:** Two-file change only. Replace the existing `blockquote` CSS rule in `global.css` with a Pull Quote style (centered, italic, thin horizontal rules). Then apply `>` syntax to 4 locations in `1.md`.

**Tech Stack:** Astro, plain CSS, Markdown

---

### Task 1: Replace blockquote CSS in global.css

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Verify current blockquote rule**

Open `src/styles/global.css` and confirm the existing rule (lines ~120–125):
```css
blockquote {
    border-left: 4px solid var(--accent);
    padding: 0 0 0 20px;
    margin: 0;
    font-size: 1.333em;
}
```

- [ ] **Step 2: Replace the blockquote rule**

Replace the entire `blockquote` rule with:
```css
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

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "style: replace blockquote with pull quote style"
```

---

### Task 2: Apply blockquote syntax to 4 locations in 1.md

**Files:**
- Modify: `src/content/blog/1.md`

- [ ] **Step 1: Apply `>` to quote 2 in the 도입부**

Find (lines ~14–15):
```md
"이거 프롬프트 하나로 나왔대."  
숟가락이 멈췄다.
```

Change to:
```md
> "이거 프롬프트 하나로 나왔대."

숟가락이 멈췄다.
```

- [ ] **Step 2: Apply `>` to punchline A in Trash in, Trash out 섹션**

Find (lines ~72–73):
```md
Trash in, Trash out.  
내가 모호하면 AI도 모호해진다.
```

Change to:
```md
> Trash in, Trash out. 내가 모호하면 AI도 모호해진다.
```

- [ ] **Step 3: Apply `>` to punchline B in Middle-out 섹션**

Find (line ~97):
```md
정확한 질문만이 정확한 결과를 만들어낸다.
```

Change to:
```md
> 정확한 질문만이 정확한 결과를 만들어낸다.
```

- [ ] **Step 4: Apply `>` to punchline C in the final paragraph**

Find (line ~114):
```md
대체되는 건 코드를 치는 손이지, 무엇을 만들지 판단하는 머리가 아니었다.
```

Change to:
```md
> 대체되는 건 코드를 치는 손이지, 무엇을 만들지 판단하는 머리가 아니었다.
```

- [ ] **Step 5: Verify in dev server**

```bash
npm run dev
```

Open `http://localhost:4321/blog/1` and confirm:
- 4 blockquotes appear centered, italic, with thin top/bottom lines
- No left blue border remains
- Normal body text paragraphs are unaffected

- [ ] **Step 6: Commit**

```bash
git add src/content/blog/1.md
git commit -m "content: apply pull quote blockquotes to blog post 1"
```
