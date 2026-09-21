# Teacher Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 기존 학생 게임을 수정하지 않고, PC와 휴대폰에서 사용할 수 있는 탭형 교사용 소개 페이지를 `/teacher-guide/`에 추가한다.

**Architecture:** `teacher-guide/index.html`은 교육 콘텐츠와 무자바스크립트 대체 링크를, `teacher-guide/styles.css`는 반응형 레이아웃과 접근성 표현을, `teacher-guide/script.js`는 탭·해시·결과 카드·모달의 점진적 향상을 담당한다. 외부 프레임워크나 서버 없이 GitHub Pages에서 동작하며 기존 결과 카드 8개를 상대 경로로 읽는다.

**Tech Stack:** HTML5, CSS3, 바닐라 JavaScript, Node.js 기반 정적 계약 테스트, GitHub Pages, 브라우저 반응형 검증

**Spec:** `docs/superpowers/specs/2026-09-21-teacher-guide-design.md`

## Global Constraints

- 기존 학생 게임 파일 `index.html`은 수정하지 않는다.
- 기존 `assets/` 파일은 생성·수정·삭제하지 않고 읽기 전용으로 재사용한다.
- 새 제품 파일은 `teacher-guide/index.html`, `teacher-guide/styles.css`, `teacher-guide/script.js` 세 개로 제한한다.
- 외부 JavaScript 프레임워크, 데이터베이스, 로그인, 빌드 과정은 추가하지 않는다.
- 기본 본문은 16px 이상, 모바일에서도 15px 미만으로 줄이지 않는다.
- 360px, 390px, 768px, 1280px 이상 화면에서 가로 넘침이 없어야 한다.
- 탭과 결과 모달은 마우스, 터치, 키보드로 조작할 수 있어야 한다.
- JavaScript가 꺼져도 모든 설명과 8개 원본 결과 카드 링크를 사용할 수 있어야 한다.
- 저장소에는 사용자의 기존 변경이 있으므로 모든 커밋은 `git commit --only --no-verify --no-gpg-sign -m "메시지" -- teacher-guide/<파일> tests/teacher-guide-<파일>` 형식으로 계획된 경로만 제한한다.
- 구현 시작 시점 보호 기준: `index.html` SHA-256은 `FCE92994EC961224BEEDB9889E2431CFEC8C5A077DA2890DF3329AD55EBF8BF0`이다.

## Review Focus

- 알 수 없거나 비어 있는 URL 해시는 `왜 만들었나요` 탭으로 안전하게 돌아가야 한다. Task 3의 `resolveTabId` 단위 테스트가 이를 고정한다.
- 결과 카드 파일이 하나라도 누락되거나 경로가 틀리면 배포 전에 실패해야 한다. Task 1의 자산 존재 테스트가 8개 경로를 모두 검사한다.
- JavaScript가 실패해도 교사용 설명과 원본 카드 링크가 사라지면 안 된다. Task 1의 `hidden` 속성·`noscript` 계약 테스트가 이를 검사한다.
- 360px 휴대폰에서 탭, 카드, 모달 때문에 가로 스크롤이 생기면 안 된다. Task 5의 360px·390px 브라우저 검증이 `scrollWidth <= innerWidth`를 확인한다.
- 모달을 ESC로 닫은 뒤 포커스가 원래 캐릭터 버튼으로 돌아가야 한다. Task 4의 상태 함수 테스트와 Task 5의 실제 키보드 검증이 이를 확인한다.

---

## File Map

- Create: `teacher-guide/index.html` — 의미론적 페이지 구조, 네 개 탭의 본문, `<dialog>`, 무자바스크립트 원본 카드 링크
- Create: `teacher-guide/styles.css` — 게임과 연결되는 색상 체계, 반응형 그리드, 탭·포커스·모달 스타일
- Create: `teacher-guide/script.js` — 탭 해시 라우팅, 키보드 탭 이동, 결과 카드 렌더링, 모달 열기·닫기·포커스 복귀
- Create: `tests/teacher-guide-content.test.js` — HTML 콘텐츠, 링크, 패널, 자산 경로, 무자바스크립트 계약
- Create: `tests/teacher-guide-style.test.js` — 반응형 구간, 터치 크기, 동작 감소, 가로 넘침 방지 CSS 계약
- Create: `tests/teacher-guide-script.test.js` — 탭 해시 해석, 결과 데이터, 카드 마크업, 모달 상태 순수 함수 테스트
- Existing read-only: `index.html`
- Existing read-only: `assets/type-result-cards/*.png`

---

### Task 1: 의미론적 교사용 콘텐츠와 자산 계약

**Files:**
- Create: `teacher-guide/index.html`
- Create: `tests/teacher-guide-content.test.js`
- Read only: `assets/type-result-cards/*.png`
- Read only: `index.html`

**Interfaces:**
- Consumes: 기존 학생 게임 `../index.html`, 기존 결과 카드 `../assets/type-result-cards/<filename>.png`
- Produces: `#teacher-guide-tabs`, 네 개의 `[role="tab"]`, `#panel-motivation`, `#panel-journey`, `#panel-characters`, `#panel-classroom`, `#character-grid`, `#result-dialog`, `#result-dialog-image`, `#result-dialog-title`, `#result-dialog-close`

- [ ] **Step 1: 정적 콘텐츠 계약 테스트를 작성한다**

`tests/teacher-guide-content.test.js`를 다음 구조로 만든다.

```js
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'teacher-guide', 'index.html');
if (!fs.existsSync(htmlPath)) throw new Error('teacher-guide/index.html 없음');

const html = fs.readFileSync(htmlPath, 'utf8');
const requiredText = [
  '왜 만들었나요',
  '7일간의 선택',
  '결과 캐릭터',
  '수업 활용 · 제작 이야기',
  'D-7', 'D-5', 'D-3', 'D-Day',
  '체력', '지식', '카페인 관리', '컨디션', '판단력', '사회성',
  'Claude', 'Codex', '이미지 생성 도구'
];
for (const text of requiredText) {
  if (!html.includes(text)) throw new Error(`필수 문구 없음: ${text}`);
}

const panelIds = ['motivation', 'journey', 'characters', 'classroom'];
for (const id of panelIds) {
  if (!html.includes(`id="tab-${id}"`)) throw new Error(`탭 없음: ${id}`);
  if (!html.includes(`id="panel-${id}"`)) throw new Error(`패널 없음: ${id}`);
}

if (!/href="\.\.\/index\.html"[^>]*>[^<]*게임 체험하기/.test(html)) {
  throw new Error('기존 학생 게임 링크가 없음');
}
if (/<section[^>]+id="panel-[^"]+"[^>]+hidden/i.test(html)) {
  throw new Error('무자바스크립트 환경에서 패널을 숨기면 안 됨');
}

const cardFiles = [
  '01_squirrel_self_control_result.png',
  '02_bear_hydration_result.png',
  '03_frog_courage_result.png',
  '04_owl_medicine_knowledge_result.png',
  '05_rabbit_sleep_result.png',
  '06_turtle_focus_result.png',
  '07_meerkat_balance_result.png',
  '08_hamster_caffeine_warning_result.png'
];
for (const file of cardFiles) {
  const asset = path.join(root, 'assets', 'type-result-cards', file);
  if (!fs.existsSync(asset)) throw new Error(`결과 카드 자산 없음: ${file}`);
  if (!html.includes(`../assets/type-result-cards/${file}`)) {
    throw new Error(`무자바스크립트 카드 링크 없음: ${file}`);
  }
}

if (!/<noscript>[\s\S]*8가지 결과 카드[\s\S]*<\/noscript>/i.test(html)) {
  throw new Error('무자바스크립트 결과 카드 안내 없음');
}

console.log('teacher guide content contract passed');
```

- [ ] **Step 2: 테스트가 예상대로 실패하는지 확인한다**

Run:

```powershell
node tests/teacher-guide-content.test.js
```

Expected: `teacher-guide/index.html 없음`으로 실패한다.

- [ ] **Step 3: `teacher-guide/index.html`의 의미론적 골격과 실제 한국어 콘텐츠를 작성한다**

다음 구조를 사용한다.

```html
<!doctype html>
<html lang="ko" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="약, 알고 먹자! 일반의약품 오남용 예방 시뮬레이션 교사용 수업 안내">
  <title>약, 알고 먹자! — 교사용 소개</title>
  <link rel="stylesheet" href="styles.css">
  <script>document.documentElement.classList.replace('no-js', 'js');</script>
  <script src="script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#guide-content">본문으로 바로가기</a>
  <header class="hero">
    <div class="hero__content">
      <p class="eyebrow">교사용 수업 안내</p>
      <h1>약, 알고 먹자!</h1>
      <p class="hero__subtitle">일반의약품 오남용 예방 육성 시뮬레이션</p>
      <p>카페인과 일반의약품의 성분·효과·복용 기준을 이해하고 일상 속 선택을 연습하는 활동입니다.</p>
      <a class="hero-cta" href="../index.html">게임 체험하기</a>
      <p class="audience-note">현재 페이지는 교사용 안내이며 학생용 안내는 추후 별도로 확장할 예정입니다.</p>
    </div>
  </header>
  <main id="guide-content" class="guide-shell">
    <nav id="teacher-guide-tabs" class="tab-list" role="tablist" aria-label="교사용 소개 내용">
      <button id="tab-motivation" class="tab-button" type="button" role="tab" aria-controls="panel-motivation">왜 만들었나요</button>
      <button id="tab-journey" class="tab-button" type="button" role="tab" aria-controls="panel-journey">7일간의 선택</button>
      <button id="tab-characters" class="tab-button" type="button" role="tab" aria-controls="panel-characters">결과 캐릭터</button>
      <button id="tab-classroom" class="tab-button" type="button" role="tab" aria-controls="panel-classroom">수업 활용 · 제작 이야기</button>
    </nav>
    <section id="panel-motivation" class="tab-panel" role="tabpanel" aria-labelledby="tab-motivation">
      <h2>왜 만들었나요?</h2>
      <p>학생들의 고카페인 음료 섭취와 수면 부족, 두통·어지러움·가슴 답답함을 보며 시작했습니다.</p>
      <p>누가 줘서 그냥 먹는 약이 아니라 복용 이유, 효과, 성분과 용법을 알고 선택하기를 바라는 마음을 담았습니다.</p>
    </section>
    <section id="panel-journey" class="tab-panel" role="tabpanel" aria-labelledby="tab-journey">
      <h2>시험을 앞둔 7일간의 선택</h2>
      <p>D-7, D-5, D-3, D-Day의 주요 장면에서 선택을 이어갑니다.</p>
      <div class="timeline" aria-label="7일간의 주요 시점">
        <article><strong>D-7</strong><p>고카페인 음료와 라벨 확인</p></article>
        <article><strong>D-5</strong><p>진통제, 공복 복용과 복용 간격</p></article>
        <article><strong>D-3</strong><p>성분 중복, SNS 정보와 수면</p></article>
        <article><strong>D-Day</strong><p>미니퀴즈와 결과 확인</p></article>
      </div>
      <p>체력, 지식, 카페인 관리, 컨디션, 판단력, 사회성의 여섯 능력치가 선택에 따라 달라집니다.</p>
    </section>
    <section id="panel-characters" class="tab-panel" role="tabpanel" aria-labelledby="tab-characters">
      <h2>8가지 결과 캐릭터</h2>
      <div id="character-grid" class="character-grid"></div>
      <noscript>
        <p>8가지 결과 카드를 원본 이미지로 확인할 수 있습니다.</p>
        <ul>
          <li><a href="../assets/type-result-cards/01_squirrel_self_control_result.png">신중한 다람쥐형</a></li>
          <li><a href="../assets/type-result-cards/02_bear_hydration_result.png">든든한 곰형</a></li>
          <li><a href="../assets/type-result-cards/03_frog_courage_result.png">재빠른 개구리형</a></li>
          <li><a href="../assets/type-result-cards/04_owl_medicine_knowledge_result.png">꼼꼼한 부엉이형</a></li>
          <li><a href="../assets/type-result-cards/05_rabbit_sleep_result.png">균형 잡힌 토끼형</a></li>
          <li><a href="../assets/type-result-cards/06_turtle_focus_result.png">꾸준한 거북이형</a></li>
          <li><a href="../assets/type-result-cards/07_meerkat_balance_result.png">침착한 미어캣형</a></li>
          <li><a href="../assets/type-result-cards/08_hamster_caffeine_warning_result.png">점검이 필요한 햄스터형</a></li>
        </ul>
      </noscript>
    </section>
    <section id="panel-classroom" class="tab-panel" role="tabpanel" aria-labelledby="tab-classroom">
      <h2>수업 활용과 제작 이야기</h2>
      <ol>
        <li>카페인과 일반의약품의 이론 지식을 학습합니다.</li>
        <li>개인별로 게임을 체험합니다.</li>
        <li>선택과 결과 캐릭터를 비교하고 토론합니다.</li>
        <li>안전한 복용 기준을 자신의 언어로 정리합니다.</li>
      </ol>
      <p>교사가 교육 목표를 설계하고 Claude로 초기 구조를 잡은 뒤 Codex로 코드와 세부 기능, 이미지 생성 도구로 시각 자료 제작을 발전시켰습니다.</p>
    </section>
  </main>
  <dialog id="result-dialog" aria-labelledby="result-dialog-title">
    <div class="dialog-shell">
      <button id="result-dialog-close" class="dialog-close" type="button" aria-label="결과 카드 닫기">×</button>
      <h2 id="result-dialog-title"></h2>
      <img id="result-dialog-image" src="" alt="">
      <p class="dialog-error" role="status"></p>
    </div>
  </dialog>
</body>
</html>
```

본문은 설계서 4.1~4.6의 문장을 축약 없이 반영한다. 특히 `7일간`이 `D-7`부터 시험 당일까지의 여정임을 명시하고, 햄스터형을 실패나 낙인으로 표현하지 않는다. `<noscript>`에는 8개 파일 각각을 여는 `<a>`와 결과 유형명을 넣는다.

- [ ] **Step 4: 콘텐츠 계약 테스트를 통과시킨다**

Run:

```powershell
node tests/teacher-guide-content.test.js
```

Expected: `teacher guide content contract passed`

- [ ] **Step 5: 학생 게임 보호 해시를 확인한다**

Run:

```powershell
(Get-FileHash -Algorithm SHA256 -LiteralPath 'index.html').Hash
```

Expected: `FCE92994EC961224BEEDB9889E2431CFEC8C5A077DA2890DF3329AD55EBF8BF0`

- [ ] **Step 6: Task 1 파일만 커밋한다**

```powershell
git add -- teacher-guide/index.html tests/teacher-guide-content.test.js
git commit --only --no-verify --no-gpg-sign -m "feat: add teacher guide content" -- teacher-guide/index.html tests/teacher-guide-content.test.js
```

---

### Task 2: 반응형 시각 체계와 접근성 스타일

**Files:**
- Create: `teacher-guide/styles.css`
- Create: `tests/teacher-guide-style.test.js`
- Modify: `teacher-guide/index.html`

**Interfaces:**
- Consumes: Task 1의 `.hero`, `.guide-shell`, `.tab-list`, `.tab-button`, `.tab-panel`, `.timeline`, `.character-grid`, `.character-card`, `#result-dialog`
- Produces: `--color-*` 디자인 토큰, `.js .tab-panel[hidden]`, 1100px 본문 폭, 데스크톱 4열·태블릿 2열·휴대폰 1~2열 카드 그리드, 44px 터치 영역

- [ ] **Step 1: CSS 계약 테스트를 작성한다**

`tests/teacher-guide-style.test.js`에 다음 검사를 넣는다.

```js
const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'teacher-guide', 'styles.css');
if (!fs.existsSync(cssPath)) throw new Error('teacher-guide/styles.css 없음');
const css = fs.readFileSync(cssPath, 'utf8');

const contracts = [
  [':root', '디자인 토큰'],
  ['max-width: 1100px', '본문 최대 폭'],
  ['grid-template-columns: repeat(4, minmax(0, 1fr))', '데스크톱 카드 4열'],
  ['@media (max-width: 860px)', '태블릿 구간'],
  ['@media (max-width: 560px)', '휴대폰 구간'],
  ['min-height: 44px', '터치 영역'],
  ['overflow-x: auto', '모바일 탭 스크롤'],
  ['prefers-reduced-motion: reduce', '동작 감소'],
  ['.js .tab-panel[hidden]', '자바스크립트 탭 숨김'],
  [':focus-visible', '키보드 포커스']
];
for (const [needle, label] of contracts) {
  if (!css.includes(needle)) throw new Error(`${label} 규칙 없음: ${needle}`);
}
if (/font-size:\s*(?:1[0-4]|[0-9])px/.test(css)) {
  throw new Error('15px 미만의 고정 글꼴 크기 사용 금지');
}
console.log('teacher guide style contract passed');
```

- [ ] **Step 2: 테스트가 스타일 파일 누락으로 실패하는지 확인한다**

Run:

```powershell
node tests/teacher-guide-style.test.js
```

Expected: `teacher-guide/styles.css 없음`으로 실패한다.

- [ ] **Step 3: 게임과 연결되는 디자인 토큰과 기본 레이아웃을 구현한다**

`teacher-guide/styles.css`의 토큰은 다음 값에서 시작한다.

```css
:root {
  --color-bg: #fffaf2;
  --color-surface: #ffffff;
  --color-ink: #38291f;
  --color-muted: #745f52;
  --color-mint: #35b883;
  --color-mint-soft: #e8f8f1;
  --color-peach: #ff8d72;
  --color-peach-soft: #fff0e8;
  --color-border: #ead8c9;
  --shadow-card: 0 14px 34px rgba(66, 45, 35, 0.11);
  --radius-card: 24px;
}
```

본문은 `max-width: 1100px`, `margin-inline: auto`, `padding-inline: clamp(16px, 4vw, 32px)`로 제한한다. 본문은 16px 이상, `line-height: 1.7`로 설정한다. 링크, 버튼, 탭에 명확한 `:focus-visible` 윤곽선을 준다.

- [ ] **Step 4: 반응형 카드·타임라인·탭·모달 스타일을 구현한다**

다음 계약을 실제 선언으로 포함한다.

```css
.character-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.tab-button, .hero-cta, .dialog-close { min-height: 44px; }
.js .tab-panel[hidden] { display: none; }

@media (max-width: 860px) {
  .character-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .timeline { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 560px) {
  .tab-list { overflow-x: auto; flex-wrap: nowrap; }
  .timeline { grid-template-columns: 1fr; }
}

@media (max-width: 380px) {
  .character-grid { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
}
```

모달의 `img`는 `max-width: min(92vw, 720px)`와 `max-height: 82vh`, `object-fit: contain`을 사용한다. `body`와 주요 그리드 자식에는 `min-width: 0`을 적용해 긴 텍스트로 인한 가로 넘침을 막는다.

- [ ] **Step 5: CSS 계약 테스트를 통과시킨다**

Run:

```powershell
node tests/teacher-guide-style.test.js
```

Expected: `teacher guide style contract passed`

- [ ] **Step 6: Task 2 파일만 커밋한다**

```powershell
git add -- teacher-guide/index.html teacher-guide/styles.css tests/teacher-guide-style.test.js
git commit --only --no-verify --no-gpg-sign -m "style: make teacher guide responsive" -- teacher-guide/index.html teacher-guide/styles.css tests/teacher-guide-style.test.js
```

---

### Task 3: 해시 기반 탭과 키보드 내비게이션

**Files:**
- Create: `teacher-guide/script.js`
- Create: `tests/teacher-guide-script.test.js`
- Modify: `teacher-guide/index.html`

**Interfaces:**
- Consumes: Task 1의 `#tab-<id>`와 `#panel-<id>` 요소
- Produces: `TAB_IDS: readonly string[]`, `resolveTabId(hash: string): string`, `activateTab(tabId: string, options?: {updateHash?: boolean, focus?: boolean}): string`, `initTabs(): void`

- [ ] **Step 1: 탭 해시와 결과 데이터에 대한 실패 테스트를 작성한다**

`tests/teacher-guide-script.test.js`를 다음 내용으로 시작한다.

```js
const path = require('path');
const guide = require(path.join(__dirname, '..', 'teacher-guide', 'script.js'));

const validTabs = ['motivation', 'journey', 'characters', 'classroom'];
for (const id of validTabs) {
  if (guide.resolveTabId(`#${id}`) !== id) throw new Error(`유효 해시 처리 실패: ${id}`);
}
for (const hash of ['', '#', '#unknown', '#MOTIVATION']) {
  if (guide.resolveTabId(hash) !== 'motivation') throw new Error(`기본 탭 처리 실패: ${hash}`);
}

if (!Array.isArray(guide.RESULT_TYPES) || guide.RESULT_TYPES.length !== 8) {
  throw new Error('결과 유형은 정확히 8개여야 함');
}
const keys = new Set(guide.RESULT_TYPES.map(item => item.key));
if (keys.size !== 8) throw new Error('결과 유형 key 중복');

console.log('teacher guide script contract passed');
```

- [ ] **Step 2: 스크립트 파일 누락으로 실패하는지 확인한다**

Run:

```powershell
node tests/teacher-guide-script.test.js
```

Expected: `Cannot find module 'teacher-guide/script.js'`를 포함한 오류로 실패한다.

- [ ] **Step 3: 순수 데이터와 해시 해석 함수를 구현한다**

`teacher-guide/script.js`를 IIFE로 만들고 브라우저와 Node.js에서 함께 읽을 수 있게 한다.

```js
(() => {
  'use strict';

  const TAB_IDS = Object.freeze(['motivation', 'journey', 'characters', 'classroom']);
  const RESULT_TYPES = Object.freeze([
    { key: 'selfControl', name: '신중한 다람쥐형', file: '01_squirrel_self_control_result.png', summary: '확인하고 기준을 지키는 신중한 선택' },
    { key: 'hydration', name: '든든한 곰형', file: '02_bear_hydration_result.png', summary: '몸 상태와 회복을 먼저 챙기는 선택' },
    { key: 'courage', name: '재빠른 개구리형', file: '03_frog_courage_result.png', summary: '위험을 발견하면 주변에도 알려주는 선택' },
    { key: 'medicineKnowledge', name: '꼼꼼한 부엉이형', file: '04_owl_medicine_knowledge_result.png', summary: '성분과 용법을 꼼꼼히 확인하는 선택' },
    { key: 'sleep', name: '균형 잡힌 토끼형', file: '05_rabbit_sleep_result.png', summary: '수면과 생활 리듬을 지키는 선택' },
    { key: 'focus', name: '꾸준한 거북이형', file: '06_turtle_focus_result.png', summary: '기본을 꾸준히 관리하는 선택' },
    { key: 'balance', name: '침착한 미어캣형', file: '07_meerkat_balance_result.png', summary: '여러 건강 지표를 고르게 살피는 선택' },
    { key: 'caffeineWarning', name: '점검이 필요한 햄스터형', file: '08_hamster_caffeine_warning_result.png', summary: '카페인과 복용 습관을 다시 살펴보라는 신호' }
  ]);

  function resolveTabId(hash) {
    const id = String(hash || '').replace(/^#/, '');
    return TAB_IDS.includes(id) ? id : TAB_IDS[0];
  }

  const api = { TAB_IDS, RESULT_TYPES, resolveTabId };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.TeacherGuide = api;
})();
```

- [ ] **Step 4: `activateTab`과 `initTabs`를 구현한다**

`activateTab`은 모든 탭의 `aria-selected`와 `tabIndex`, 모든 패널의 `hidden`을 갱신한다. `options.updateHash !== false`이면 `history.replaceState(null, '', '#<id>')`로 해시를 바꾼다. `options.focus === true`이면 선택 탭에 포커스를 둔다.

`initTabs`는 다음 이벤트를 연결한다.

- 클릭: 선택 탭 활성화
- `ArrowLeft`, `ArrowRight`: 이전·다음 탭 순환
- `Home`, `End`: 첫·마지막 탭 이동
- `hashchange`: URL 해시에 해당하는 탭 활성화
- 최초 실행: `resolveTabId(location.hash)` 결과 활성화

각 키보드 이동은 `event.preventDefault()` 후 `activateTab(nextId, {updateHash: true, focus: true})`를 호출한다.

Task 3 완료 시 `api`를 `{ TAB_IDS, RESULT_TYPES, resolveTabId, activateTab, initTabs }`로 갱신한다. 브라우저에서는 `DOMContentLoaded` 때 `initTabs()`를 한 번 호출하고, Node.js에서는 `document`가 없으므로 초기화하지 않는다.

- [ ] **Step 5: 스크립트 계약 테스트를 통과시킨다**

Run:

```powershell
node tests/teacher-guide-script.test.js
```

Expected: `teacher guide script contract passed`

- [ ] **Step 6: Task 3 파일만 커밋한다**

```powershell
git add -- teacher-guide/index.html teacher-guide/script.js tests/teacher-guide-script.test.js
git commit --only --no-verify --no-gpg-sign -m "feat: add accessible teacher guide tabs" -- teacher-guide/index.html teacher-guide/script.js tests/teacher-guide-script.test.js
```

---

### Task 4: 8개 결과 카드와 확대 모달

**Files:**
- Modify: `teacher-guide/script.js`
- Modify: `teacher-guide/index.html`
- Modify: `tests/teacher-guide-script.test.js`

**Interfaces:**
- Consumes: Task 3의 `RESULT_TYPES`, Task 1의 `#character-grid`와 `#result-dialog` 요소
- Produces: `resultImagePath(file: string): string`, `buildResultCardMarkup(result): string`, `createDialogState(): {opener: HTMLElement|null}`, `renderCharacterGrid(): void`, `openResultDialog(result, opener): void`, `closeResultDialog(): void`, `initResultDialog(): void`

- [ ] **Step 1: 결과 경로·마크업·대체 문구 테스트를 추가한다**

`tests/teacher-guide-script.test.js`에 다음 검사를 추가한다.

```js
if (guide.resultImagePath('card.png') !== '../assets/type-result-cards/card.png') {
  throw new Error('결과 카드 상대 경로 오류');
}

for (const result of guide.RESULT_TYPES) {
  const markup = guide.buildResultCardMarkup(result);
  for (const expected of [result.key, result.name, result.summary, result.file, 'button']) {
    if (!markup.includes(expected)) throw new Error(`${result.name} 마크업 누락: ${expected}`);
  }
}

const state = guide.createDialogState();
if (state.opener !== null) throw new Error('모달 초기 opener는 null이어야 함');
```

- [ ] **Step 2: 새 테스트가 export 누락으로 실패하는지 확인한다**

Run:

```powershell
node tests/teacher-guide-script.test.js
```

Expected: `guide.resultImagePath is not a function`으로 실패한다.

- [ ] **Step 3: 결과 카드 생성 함수를 구현한다**

`resultImagePath`는 고정 기본 경로와 전달된 파일명만 결합한다. `buildResultCardMarkup`은 다음 의미 구조를 문자열로 반환한다.

```html
<button class="character-card" type="button" data-result-key="selfControl" aria-label="신중한 다람쥐형 결과 카드 크게 보기">
  <img src="../assets/type-result-cards/01_squirrel_self_control_result.png" alt="" loading="lazy">
  <span class="character-card__name">신중한 다람쥐형</span>
  <span class="character-card__summary">확인하고 기준을 지키는 신중한 선택</span>
</button>
```

동적 문자열에는 고정된 내부 상수만 사용한다. `renderCharacterGrid`는 `RESULT_TYPES.map(buildResultCardMarkup).join('')`으로 `#character-grid`를 채우고 각 버튼 클릭 시 해당 결과를 찾아 `openResultDialog`를 호출한다.

- [ ] **Step 4: 모달 열기·닫기와 이미지 실패 상태를 구현한다**

`openResultDialog`는 opener를 상태 객체에 저장하고 제목, 이미지 `src`, 이미지 `alt`를 갱신한다. 네이티브 `showModal()`이 있으면 사용하고, 없으면 `open` 속성과 `.dialog-fallback-open` 클래스를 적용한다. 열린 직후 닫기 버튼에 포커스를 둔다.

`closeResultDialog`는 네이티브 `close()` 또는 fallback 속성을 정리하고, 저장된 opener가 연결 상태이면 `focus()`한 뒤 opener를 `null`로 바꾼다.

`initResultDialog`는 다음을 연결한다.

- 닫기 버튼 클릭 → `closeResultDialog()`
- dialog의 `cancel` → 기본 동작을 막고 `closeResultDialog()`
- dialog 배경 클릭 → `event.target === dialog`일 때 닫기
- 이미지 `error` → 이미지를 숨기고 `.dialog-error`에 `<결과명> 이미지를 불러오지 못했습니다.` 표시
- 이미지 `load` → 이미지 표시, 오류 문구 비우기

`const dialogState = createDialogState()`를 IIFE 내부에 한 번 만들고 열기·닫기 함수가 공유한다. Task 4 완료 시 `api`에 `resultImagePath`, `buildResultCardMarkup`, `createDialogState`, `renderCharacterGrid`, `openResultDialog`, `closeResultDialog`, `initResultDialog`을 추가한다. 브라우저의 `DOMContentLoaded` 초기화에서 `renderCharacterGrid()`와 `initResultDialog()`을 각각 한 번 호출한다.

- [ ] **Step 5: 테스트를 통과시키고 JavaScript 문법을 확인한다**

Run:

```powershell
node tests/teacher-guide-script.test.js
node --check teacher-guide/script.js
```

Expected: 계약 테스트 통과, `node --check` 출력 없이 종료 코드 0.

- [ ] **Step 6: Task 4 파일만 커밋한다**

```powershell
git add -- teacher-guide/index.html teacher-guide/script.js tests/teacher-guide-script.test.js
git commit --only --no-verify --no-gpg-sign -m "feat: add result character gallery" -- teacher-guide/index.html teacher-guide/script.js tests/teacher-guide-script.test.js
```

---

### Task 5: 통합 회귀 검사와 실제 브라우저 검증

**Files:**
- Modify if defects are found: `teacher-guide/index.html`
- Modify if defects are found: `teacher-guide/styles.css`
- Modify if defects are found: `teacher-guide/script.js`
- Modify if a regression needs pinning: `tests/teacher-guide-content.test.js`
- Modify if a regression needs pinning: `tests/teacher-guide-style.test.js`
- Modify if a regression needs pinning: `tests/teacher-guide-script.test.js`

**Interfaces:**
- Consumes: Tasks 1~4의 완성된 정적 페이지와 테스트
- Produces: 360px, 390px, 768px, 1280px 검증을 통과한 배포 가능한 `/teacher-guide/`

- [ ] **Step 1: 모든 자동 검사를 실행한다**

Run:

```powershell
node tests/teacher-guide-content.test.js
node tests/teacher-guide-style.test.js
node tests/teacher-guide-script.test.js
node --check teacher-guide/script.js
node tests/html-script-syntax.test.js
node tests/choice-records.test.js
```

Expected: 모든 명령 종료 코드 0. 기존 게임 회귀 검사도 그대로 통과한다.

- [ ] **Step 2: 로컬 정적 서버를 실행한다**

Run from `health_game_publish`:

```powershell
python -m http.server 4173
```

Open: `http://127.0.0.1:4173/teacher-guide/`

- [ ] **Step 3: 데스크톱 1280px에서 탭·콘텐츠·카드·모달을 검증한다**

브라우저에서 다음을 확인한다.

1. 첫 화면에 제목, 교사용 안내, 게임 체험 버튼이 보인다.
2. 네 개 탭을 차례로 눌렀을 때 한 패널만 표시되고 URL 해시가 정확히 바뀐다.
3. `#characters`로 직접 이동한 뒤 새로고침해도 결과 캐릭터 탭이 열린다.
4. 8개 캐릭터 카드가 4열로 표시된다.
5. 각 카드를 한 번씩 열어 이름과 이미지가 일치하는지 확인한다.
6. `게임 체험하기`의 `href`가 `../index.html`인지 DOM으로 확인하되, 기존 게임은 수정하지 않는다.

- [ ] **Step 4: 키보드 접근성을 검증한다**

브라우저에서 다음 순서로 확인한다.

1. `Tab`으로 탭 목록에 진입한다.
2. `ArrowRight`, `ArrowLeft`, `Home`, `End`가 예상 탭으로 이동하는지 확인한다.
3. 캐릭터 버튼에 포커스를 두고 `Enter`로 모달을 연다.
4. 모달이 열리면 닫기 버튼이 포커스를 받는지 확인한다.
5. `Escape`로 닫은 뒤 원래 캐릭터 버튼에 포커스가 돌아오는지 확인한다.
6. 포커스 표시가 모든 배경에서 보이는지 확인한다.

- [ ] **Step 5: 360px·390px·768px 화면을 검증한다**

각 너비에서 브라우저 viewport를 설정하고 다음 식을 평가한다.

```js
document.documentElement.scrollWidth <= window.innerWidth
```

Expected: 세 너비 모두 `true`.

추가로 다음을 눈으로 확인한다.

- 360px: 탭 목록이 가로로 스크롤되고 페이지 전체에는 가로 스크롤이 없다.
- 390px: 결과 카드가 겹치지 않고 글자가 잘리지 않는다.
- 768px: 결과 카드 2열과 타임라인 2열이 유지된다.
- 모든 크기: 모달 이미지와 닫기 버튼이 viewport 안에 있다.

- [ ] **Step 6: 무자바스크립트와 이미지 실패 상태를 검증한다**

브라우저 개발자 기능으로 JavaScript를 비활성화한 상태에서 새로고침하고 다음을 확인한다.

- 네 개 패널의 본문이 모두 순서대로 보인다.
- 8개 결과 카드 원본 링크가 보이고 열린다.
- 게임 체험 링크가 동작한다.

그다음 브라우저에서 첫 결과 이미지의 `src`를 존재하지 않는 이름으로 임시 변경해 모달을 열고 `신중한 다람쥐형 이미지를 불러오지 못했습니다.`가 보이는지 확인한다. 이 DOM 임시 변경은 파일에 저장하지 않는다.

- [ ] **Step 7: 보호 파일과 자산 해시를 최종 확인한다**

Run:

```powershell
(Get-FileHash -Algorithm SHA256 -LiteralPath 'index.html').Hash
Get-ChildItem -LiteralPath 'assets\type-result-cards' -Filter '*_result.png' | Sort-Object Name | ForEach-Object { "{0} {1}" -f $_.Name, (Get-FileHash -Algorithm SHA256 -LiteralPath $_.FullName).Hash }
```

Expected `index.html`: `FCE92994EC961224BEEDB9889E2431CFEC8C5A077DA2890DF3329AD55EBF8BF0`

Expected asset hashes:

```text
01_squirrel_self_control_result.png 61996257C4C432ACAEE2953B6593C3D9FC4E8AB5B3CF0BDABA9F0EF0DA669F44
02_bear_hydration_result.png 4C4E07A98469E6ABBCE5B538B2FC65F3265A076E6096A25B7BF8C78FF656160F
03_frog_courage_result.png 09CB621245A462FDD218054FC7156DB6F7CF17AAD0B22512E27D49D4F238A8BB
04_owl_medicine_knowledge_result.png 66DB67B4350B38F3AD96EF1D0ACB4561F94340927646ECFB0E18773BE0398A3D
05_rabbit_sleep_result.png 562AF68F8EF4916AB630792C9C0C38CAEDB716320523A17E14996F4155FBE56A
06_turtle_focus_result.png 938FD29D6835BFA9130ACC0FE575AB8A034E58552D3F7B051FEE11D639362258
07_meerkat_balance_result.png 1259C75F40823E454F28441EC3F799EDB4ED36C768A6F4BBFA164028E7BCE985
08_hamster_caffeine_warning_result.png 762373E6B3836FAD14A251CE93884F71D5E34125C334EE674E7C6D5F7A7F8C01
```

- [ ] **Step 8: 브라우저 검증에서 발견한 결함을 해당 테스트로 고정하고 수정한다**

결함이 발견되면 먼저 이를 재현하는 가장 가까운 계약 테스트에 구체적인 assertion을 추가해 실패를 확인한다. 그다음 `teacher-guide/` 내부 파일만 최소 수정하고 Task 5의 자동 검사와 해당 viewport 검증을 다시 실행한다.

- [ ] **Step 9: 최종 변경 파일만 커밋한다**

Task 5에서 수정이 없으면 새 커밋을 만들지 않는다. 수정이 있으면 실제 수정된 `teacher-guide/`와 `tests/teacher-guide-*.test.js` 경로만 다음 형식으로 커밋한다.

```powershell
git add -- teacher-guide/index.html teacher-guide/styles.css teacher-guide/script.js tests/teacher-guide-content.test.js tests/teacher-guide-style.test.js tests/teacher-guide-script.test.js
git commit --only --no-verify --no-gpg-sign -m "fix: harden teacher guide presentation" -- teacher-guide/index.html teacher-guide/styles.css teacher-guide/script.js tests/teacher-guide-content.test.js tests/teacher-guide-style.test.js tests/teacher-guide-script.test.js
```

- [ ] **Step 10: 최종 상태를 보고한다**

다음 항목을 결과에 포함한다.

- 새 페이지 경로와 로컬 미리보기 URL
- 자동 검사별 성공 결과
- 검증한 viewport 크기
- 8개 모달과 키보드 조작 결과
- `index.html` 및 기존 결과 카드 해시 유지 확인
- 사용자의 기존 미커밋 변경은 포함하거나 수정하지 않았다는 확인
