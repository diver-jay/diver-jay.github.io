# 블로그 1편: 하네스 프로그래밍 3D 도전기 — 진행 상태

## 스펙 문서
`docs/superpowers/specs/2026-04-06-harness-programming-blog-design.md`

## 완료된 단계

| Step | 이름 | 상태 | 결과 위치 |
|------|------|------|-----------|
| 1 | 팩트 덤프 | 완료 | 스펙 문서 내 |
| 2 | 뼈대 확장 | 완료 | 스펙 문서 내 |
| 3 | 서사 브릿지 | 완료 | 스펙 문서 내 |
| 4 | 논스톱 타이핑 | 완료 | `src/content/blog/r3f-water-caustics-effect.mdx` |
| 5 | 밸런스 체크 | 완료 | 아래 참조 |
| 6 | 미디어 삽입 | 완료 | 아래 참조 |
| 7 | 에셋 구조 정리 | 완료 | 아래 참조 |

## Step 5 밸런스 체크 결과 요약

### 적용된 조정 (A~D)
- **A** 도입부: 동료가 폰 화면 내미는 장면 추가 (3장 "생생하게 묘사하라" 강화)
- **B** 전개2: MAX_SPEED/Verlet 코드 디테일 압축 → "하드코딩 땜빵 → 다음 날 근본 해결" 1문장으로
- **C** 결론: 홍정모 레퍼런스 삭제 → 본인 체험만으로 Middle-out 도출 (직접 인용 없는 권위 차용은 오히려 약함)
- **D** 결론 마지막: "대체되는 건 코드를 치는 손이지~" 핵심 메시지를 독립 단락으로 분리

### 최종 자수
| 섹션 | 목표 | 현재 |
|------|------|------|
| 도입부 | ~300 | 276 |
| 전개1 | ~400 | 392 |
| 전개2 | ~600 | 701 (핵심 섹션이라 허용) |
| 결론 | ~400 | 391 |
| **전체** | **1,500~2,300** | **1,758** |

### 잔여 판단
- 전개2가 +100자 초과지만, 에피소드 2개 + 깨달음이 글의 핵심이므로 더 줄이면 서사가 얇아짐 → 유지 결정

## Step 6 미디어 삽입 결과

### 완료
- **wanted.png** (763K): 전개2 "이 모양으로 3D 모델링 해줘" 직후 `<figure>` + `<figcaption>`으로 삽입
- **water-caustics-final.mp4** (41MB): 결론부 Middle-out 단락 뒤 `<video autoplay loop muted playsinline>`으로 삽입
- **heroImage GIF 교체**: `~/Downloads/water-caustics-final.gif` (3.5MB) → `public/water-caustics.gif` 덮어쓰기
- 빌드 성공 확인 (`npm run build` 통과)

### 에셋 위치 (Step 6 시점, Step 7에서 변경됨)
> ~~아래는 구 경로. Step 7에서 src/ 아래로 이동~~

## Step 7 에셋 구조 정리

### 변경 사항
- **`.md` → `.mdx` 변환**: JSX import로 `src/assets/` 에셋 참조 가능
- **에셋 전부 `public/` → `src/assets/blog/`로 이동**
- **heroImage**: `heroImageUrl` (URL 문자열) → `heroImage` (Astro `image()` 스키마) 변경
  - Astro가 webp 최적화 자동 적용 (86KB → 24KB)
- **썸네일 추가**: MP4 3초 프레임 → `water-caustics-thumbnail.jpg` (960x480, ffmpeg 추출)

### 최종 에셋 위치
| 파일 | 경로 | 용도 |
|------|------|------|
| wanted.png | `src/assets/blog/wanted.png` | 전개2 — 해파리 레퍼런스 사진 |
| water-caustics-final.mp4 | `src/assets/blog/water-caustics-final.mp4` | 결론 — 완성 인터랙션 영상 |
| water-caustics.gif | `src/assets/blog/water-caustics.gif` | 교체용 hero GIF (현재 미사용) |
| water-caustics-thumbnail.jpg | `src/assets/blog/water-caustics-thumbnail.jpg` | heroImage (썸네일, 960x480) |

### MDX 구조
```mdx
---
heroImage: "../../assets/blog/water-caustics-thumbnail.jpg"
---
import wantedImg from '../../assets/blog/wanted.png';
import videoSrc from '../../assets/blog/water-caustics-final.mp4';

<!-- wantedImg.src / videoSrc 로 JSX에서 참조 -->
```

### 참고
- MP4 41MB — 배포 전 압축 필요 (ffmpeg 등)
- `public/` 에 blog 에셋 없음 (전부 `src/assets/blog/`로 이동 완료)
- 빌드 성공 확인

## 다음 세션 시작점

에셋 구조 정리(Step 7) 완료. 다음 작업:
1. **퇴고** — 문장 다듬기, 어색한 톤 전환 점검, 최종 자수 조정
2. **메타데이터 확정** — title/description 최종 검토, pubDate 조정 (현재: "Apr 02 2026")
3. **MP4 용량 최적화** — 41MB → 압축 (배포 전 필수)
