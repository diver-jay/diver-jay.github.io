# Blog Post Refinement Design

First blog post (`1.mdx`) 구조 개선 — Google Markdown Style Guide 기준 적용.

## Scope

- Markdown 구조/포맷 개선 (최우선)
- 산문 다듬기: 이번 스코프에서 제외

## Approach

**MDX-Aware Style Compliance (접근법 B)**

Google Style Guide의 정신(가독성, 간결함, Markdown 우선)을 따르되,
Markdown에 대응물이 없는 요소(video)는 HTML 유지.
MDX → MD 전환 가능하므로 순수 Markdown 파일로 변환.

## 변경 사항

### 1. Heading 구조

현재 `---` 수평선으로만 섹션 구분. `##` heading 없음.

**변경 후:**

```
[frontmatter - title이 H1]

(도입부: heading 없음 — intro 역할)
"개발자 진짜 다 짤리는 거 아니야?" ~ "그래서 직접 해보기로 했다."

## 의도적 무지

"예전부터 관심은 있었지만..." ~ jellyfish image ~ AI 실패 경험

## Trash in, Trash out

피드백의 한계 ~ 버그 ~ "내가 모호하면 AI도 모호해진다."

## Middle-out

세 가지 접근법 비교 ~ 선택 ~ "정확한 질문만이 정확한 결과를 만들어낸다."

## 5주, 47커밋

결과 영상, GitHub 링크, 최종 메시지
```

**근거:**
- Google Style Guide: heading으로 의미적 구분, unique/complete names
- 각 heading이 서사의 전환점 반영: 동기 → 도전 → 교훈 → 방법론 → 결과

### 2. 파일 전환: MDX → MD

`src/content/blog/1.mdx` → `src/content/blog/1.md`

- `import` 문 제거 (MDX 전용 기능)
- JSX 표현식 (`{wantedImg.src}`, `{videoSrc}`) → 순수 경로로 교체
- MDX가 필요한 이유였던 JSX inline style을 CSS class로 분리하면서 MDX 의존성 해소

### 3. Image: JSX → Markdown

**Before:**
```jsx
<figure style={{ margin: "2em 0", textAlign: "center" }}>
  <img
    src={wantedImg.src}
    alt="jellyfish.png — Google에서 저장한 해파리 레퍼런스 사진"
    style={{ borderRadius: "8px", maxWidth: "100%" }}
  />
  <figcaption style={{ marginTop: "0.5em", fontSize: "0.9em", color: "#666" }}>
    jellyfish.png
  </figcaption>
</figure>
```

**After:**
```markdown
![jellyfish.png — Google에서 저장한 해파리 레퍼런스 사진](../../assets/blog/wanted.png)

*jellyfish.png*
```

- inline style 전부 제거 — `global.css`에 이미 `img { max-width: 100%; border-radius: 8px; }` 존재
- `<figcaption>` → 이탤릭 텍스트로 대체
- Astro가 `src/assets/` 이미지 상대 경로를 자동 최적화

### 4. Video: inline style → CSS class

**Before:**
```jsx
<video
  src={videoSrc}
  autoPlay
  loop
  muted
  playsInline
  style={{ width: "100%", borderRadius: "8px", margin: "2em 0" }}
></video>
```

**After:**
```html
<video src="/blog/water-caustics-final.mp4" autoplay loop muted playsinline class="blog-video"></video>
```

- `src/assets/` → `public/blog/`로 이동 완료
- inline style → `.blog-video` CSS class
- HTML 속성은 lowercase (`autoPlay` → `autoplay`, `playsInline` → `playsinline`)

### 5. global.css 추가

```css
.blog-video {
  width: 100%;
  border-radius: 8px;
  margin: 2em 0;
}
```

## 파일 변경 목록

| 파일 | 작업 |
|------|------|
| `src/content/blog/1.mdx` | 삭제 |
| `src/content/blog/1.md` | 신규 생성 (.mdx 내용을 변환) |
| `src/styles/global.css` | `.blog-video` class 추가 |
| `src/assets/blog/water-caustics-final.mp4` | `public/blog/`로 이동 (완료) |

## 변경하지 않는 것

- 산문 (문장, 어휘, 문체) — 이번 스코프 제외
- frontmatter 내용
- heroImage 경로 (thumbnail은 Astro 이미지 최적화 대상이므로 assets에 유지)
