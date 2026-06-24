# 프로젝트 코드 삽입 순서표

이 문서는 현재 구현된 `index.html` 중심 구조를 기준으로, 기능별 HTML/CSS/JS 블록을 어디에 두어야 하는지 정리한 적용 순서표다.

현재 프로젝트는 아직 `style.css`, `app.js`로 완전히 분리하지 않고 `index.html` 안에 CSS와 JS를 포함한다. 나중에 파일을 분리할 경우에도 아래 순서를 그대로 유지하면 된다.

---

## 1. 전체 적용 목표

현재 UI는 다음 흐름을 기준으로 구성한다.

1. 에피소드 선택 화면
2. 사건 장면 화면
3. 단서함 모달
4. 메모장 모달
5. 핵심 질문 / 활동지 모달
6. 결과 화면
7. 인쇄 / PDF 저장
8. 결과 카드 이미지 저장 / 복사

핵심 원칙은 HTML은 고정 구조만 갖고, 장면/캐릭터/대사/단서/결과 내용은 `assets/data/case01_game_data.js`와 JS 렌더 함수가 채우는 것이다.

---

## 2. HTML 삽입 순서

### 2-1. 최상위 화면 구조

위치: `index.html`의 `.app-shell` 내부

현재 화면은 다음 세 영역으로 나눈다.

```html
<section id="episodeSelectScreen">...</section>
<main id="casePlayArea">...</main>
<section id="resultScreen">...</section>
```

역할:

- `episodeSelectScreen`: 첫 화면의 사건 카드 목록
- `casePlayArea`: 실제 사건 진행 화면
- `resultScreen`: 사건 해결 후 출력/저장 가능한 결과 카드 화면

### 2-2. 에피소드 선택 화면

위치: `.top-bar` 다음, `casePlayArea` 이전

필수 id:

```html
id="episodeSelectScreen"
id="episodeCardList"
```

`episodeCardList`는 비어 있어도 된다. JS의 `renderEpisodeSelectScreen()`이 `gameData.episodes`를 읽어 자동으로 카드를 만든다.

### 2-3. 장면 진행 화면

위치: `main.main-layout#casePlayArea`

필수 클래스/요소:

```html
.scene-step
.scene-title
.scene-desc
.scene-progress
.scene-bg
.scene-overlay
.scene-visual__tags
.dialogue-speaker
.dialogue-text
.choice-list
.sub-action-row
.case-panel__body
```

현재 프로젝트는 id보다 class selector 기반으로 렌더링한다. 따라서 위 클래스명은 유지하는 편이 안전하다.

### 2-4. 단서함 모달

위치: `casePlayArea` 아래, 다른 모달들과 같은 레벨

필수 id / 속성:

```html
id="inventoryModal"
id="inventoryEmptyMessage"
id="inventoryClueGrid"
data-inventory-category="all"
data-inventory-category="물리 단서"
data-inventory-category="디지털 단서"
data-inventory-category="관찰 기록"
```

단서 카드 버튼은 JS가 다음 속성으로 생성한다.

```html
data-clue-action="detail"
data-clue-action="memo"
data-clue-id="..."
```

### 2-5. 메모장 모달

위치: 단서함 모달 아래

필수 id / 속성:

```html
id="memoModal"
id="memoHintBox"
id="memoTextareaLabel"
id="memoTextareaHelp"
id="memoTextarea"
id="saveMemoBtn"
id="clearMemoBtn"
data-memo-tab="facts"
data-memo-tab="suspects"
data-memo-tab="questions"
data-memo-tab="plans"
data-memo-tab="learned"
```

메모 내용은 `state.memo`에 탭별로 저장된다.

### 2-6. 핵심 질문 / 활동지 모달

위치: 메모장 모달 아래

현재 필수 id:

```html
id="questionModal"
data-question-text
id="worksheetModal"
```

다음 단계에서 장면 데이터 기반으로 더 확장할 수 있다.

### 2-7. 결과 화면

위치: `casePlayArea` 바로 아래, `mobile-tabbar`보다 위

필수 id:

```html
id="resultScreen"
id="resultExportCard"
id="resultTitle"
id="resultSubtitle"
id="resultSummary"
id="resultClueList"
id="resultLearningList"
id="resultSafetyList"
id="resultMemoSummary"
id="printResultBtn"
id="savePdfBtn"
id="saveImageBtn"
id="copyImageBtn"
id="backToEpisodesFromResultBtn"
```

결과 화면의 버튼은 `data-result-action`으로 연결한다.

```html
data-result-action="print"
data-result-action="pdf"
data-result-action="save-image"
data-result-action="copy-image"
data-result-action="back"
```

---

## 3. CSS 삽입 순서

위치: `index.html`의 `<style>` 내부

권장 순서:

1. 전역 변수와 기본 태그 스타일
2. 화면 전환 상태
   - `.app-shell.is-selecting`
   - `.app-shell.is-result`
3. 상단 바 / 공통 버튼
4. 에피소드 선택 화면
5. 상태창 / 사건 패널
6. 장면 화면
7. 캐릭터 레이어
   - `.scene-actor`
   - `.scene-name-tag`
8. 선택지 / 보조 액션
9. 모달 공통
10. 단서 카드
11. 메모장
12. 결과 화면
13. 하단 피드백
14. 반응형 media query
15. 인쇄 전용 `@media print`

결과 화면에서 반드시 유지할 CSS:

```css
.result-screen
.result-export-card
.result-action-bar
@media print
```

이미지 저장/복사 캡처 대상은 `#resultExportCard`이므로, 결과 카드 배경은 흰색으로 고정한다.

---

## 4. JS 삽입 순서

위치: `index.html` 하단 `<script src="./assets/data/case01_game_data.js"></script>` 다음의 inline script

### 4-1. 데이터와 상태

가장 먼저 둔다.

```js
const gameData = window.gameData;
const state = { ... };
let currentEpisode = null;
let currentSceneId = null;
```

포함해야 하는 state 핵심값:

```js
currentView
currentEpisodeId
currentSceneId
completedEpisodes
unlockedClues
viewedClues
activeInventoryCategory
activeMemoTab
memo
```

### 4-2. 설정 객체

state 다음에 둔다.

```js
const actionModalMap = { ... };
const memoTabConfig = { ... };
```

### 4-3. 공통 helper

설정 객체 다음에 둔다.

```js
const $ = ...
const $$ = ...
const escapeHtml = ...
const getCurrentEpisode = ...
const getScene = ...
const getCurrentScene = ...
```

### 4-4. 화면 전환 함수

helper 다음에 둔다.

```js
showEpisodeSelectScreen()
showSceneScreen()
showResultScreen()
```

### 4-5. 에피소드 선택 함수

화면 전환 함수 다음에 둔다.

```js
renderEpisodeSelectScreen()
startEpisode()
markEpisodeCompleted()
```

### 4-6. 장면 렌더 함수

에피소드 함수 다음에 둔다.

```js
renderActors()
renderTags()
renderChoices()
renderCasePanel()
renderScene()
```

`renderScene()`은 결과 id를 먼저 확인해 `renderResult()`로 분기해야 한다.

```js
if (currentEpisode.result?.id === sceneId) {
  renderResult(currentEpisode.result);
  return;
}
```

### 4-7. 단서함 함수

장면 렌더 함수 주변, 또는 직후에 둔다.

```js
unlockSceneClues()
renderInventory()
openClueDetail()
addClueToMemo()
openInventoryModal()
```

장면 진입 시 `cluesUnlock`이 `state.unlockedClues`에 저장된다.

### 4-8. 메모장 함수

단서함 함수 다음에 둔다.

```js
renderMemoTabs()
renderMemoHintBox()
renderMemoTextarea()
renderMemoModal()
saveCurrentMemoTab()
clearCurrentMemoTab()
changeMemoTab()
openMemoModal()
```

메모장은 `state.memo`를 기준으로 유지된다.

### 4-9. 결과 화면 함수

메모장 함수 다음에 둔다.

```js
renderMemoSummaryHtml()
getResultPayload()
renderResult()
printResultCard()
saveResultAsPdf()
```

결과 화면은 `state.memo`와 확보된 단서를 함께 요약한다.

### 4-10. 이미지 저장/복사 함수

결과 화면 함수 다음에 둔다.

```js
waitForFonts()
inlineImagesForCapture()
getCaptureStyleText()
captureElementAsPng()
captureElementAsBlob()
setButtonLoading()
saveResultAsImage()
copyResultImage()
```

캡처 대상:

```js
document.getElementById("resultExportCard")
```

### 4-11. 모달과 클릭 이벤트

거의 마지막에 둔다.

```js
openModal()
closeModal()
document.addEventListener("click", ...)
document.addEventListener("keydown", ...)
```

현재 프로젝트는 별도 `bind...()` 함수 대신 이벤트 위임 방식으로 처리한다. 따라서 새 버튼을 추가할 때는 `data-*` 속성을 맞추는 것이 중요하다.

### 4-12. 초기 실행

스크립트 마지막에 둔다.

```js
renderEpisodeSelectScreen();
showEpisodeSelectScreen();
```

---

## 5. 외부 캡처 라이브러리 위치

이미지 저장/복사를 더 안정적으로 만들려면 `html-to-image`를 로드할 수 있다.

위치: `case01_game_data.js`와 inline app script 사이

```html
<script src="https://unpkg.com/html-to-image"></script>
```

현재 구현은 `htmlToImage`가 있으면 사용하고, 없으면 자체 SVG/canvas fallback으로 동작한다.

주의:

- 로컬 파일 환경에서는 이미지 복사가 제한될 수 있다.
- 이 경우 이미지 저장 버튼을 사용하면 된다.
- 네트워크가 없는 수업 환경이라면 외부 CDN 의존은 피하고 현재 fallback을 유지한다.

---

## 6. 실제 적용 체크리스트

### HTML

- [ ] `episodeSelectScreen`이 있다.
- [ ] `episodeCardList`가 있다.
- [ ] `casePlayArea`가 있다.
- [ ] `inventoryModal`이 있다.
- [ ] `memoModal`이 있다.
- [ ] `questionModal`이 있다.
- [ ] `worksheetModal`이 있다.
- [ ] `resultScreen`이 있다.
- [ ] `resultExportCard`가 있다.

### CSS

- [ ] `.app-shell.is-selecting` 화면 전환 CSS가 있다.
- [ ] `.app-shell.is-result` 화면 전환 CSS가 있다.
- [ ] `.scene-actor` / `.scene-name-tag` CSS가 있다.
- [ ] `.result-screen` / `.result-export-card` CSS가 있다.
- [ ] `@media print`가 있다.
- [ ] 모바일 반응형에서 결과 카드가 한 열로 정리된다.

### JS

- [ ] `gameData`가 먼저 로드된다.
- [ ] `state`가 있다.
- [ ] `renderEpisodeSelectScreen()`이 있다.
- [ ] `startEpisode()`가 있다.
- [ ] `renderScene()`이 결과 id를 분기한다.
- [ ] `renderInventory()`가 `state.unlockedClues`를 사용한다.
- [ ] `renderMemoModal()`이 `state.memo`를 사용한다.
- [ ] `renderResult()`가 `resultExportCard`를 채운다.
- [ ] `saveResultAsImage()`가 있다.
- [ ] `copyResultImage()`가 있다.

---

## 7. 디버깅 순서

문제가 생기면 아래 순서대로 확인한다.

1. 에피소드 선택 화면이 보이는가?
2. EP01 시작 버튼을 누르면 첫 장면으로 이동하는가?
3. 장면 선택지를 누르면 배경/캐릭터/대사가 바뀌는가?
4. 특정 장면에서 단서가 확보되는가?
5. 단서함에 확보한 단서만 보이는가?
6. 단서에서 메모로 보내기가 되는가?
7. 메모장 탭을 바꿔도 입력값이 유지되는가?
8. 결과 장면으로 이동하면 결과 카드가 보이는가?
9. 인쇄/PDF 버튼이 작동하는가?
10. 이미지 저장 버튼이 PNG를 내려받는가?
11. 이미지 복사가 안 될 때 안내 메시지가 보이는가?

---

## 8. 자주 빠지는 부분

### 8-1. `resultExportCard` 누락

이미지 저장/복사는 이 id를 기준으로 동작한다.

### 8-2. `case01_game_data.js` 로드 순서 오류

`window.gameData`가 먼저 있어야 inline app script가 정상 실행된다.

### 8-3. 화면 전환 클래스 충돌

`is-selecting`, `is-result`가 동시에 남아 있으면 화면이 이상하게 보일 수 있다.

### 8-4. 메모 저장 누락

메모 모달을 닫거나 탭을 바꿀 때 `saveCurrentMemoTab(false)`가 호출되어야 한다.

### 8-5. 로컬 파일에서 클립보드 복사 실패

브라우저 보안 정책 때문에 `file://` 환경에서는 이미지 복사가 실패할 수 있다. 이 경우 이미지 저장 기능으로 대체한다.

---

## 9. 현재 프로젝트 기준 완료 상태

현재 `index.html`에는 다음 기능이 이미 통합되어 있다.

- 에피소드 선택 화면 렌더링
- EP01 사건 시작
- 장면 데이터 기반 렌더링
- 캐릭터 이름표와 발화자 강조
- 단서함과 `cluesUnlock` / `cluesShown` 연결
- 메모장과 `memoHints` / `state.memo` 연결
- 결과 화면 렌더링
- 인쇄 / PDF 저장
- 결과 카드 이미지 저장 / 복사

다음 확장 후보:

- 핵심 질문 모달을 장면별 데이터로 확장
- 활동지 모달을 장면별 작성 항목과 연결
- 결과 카드에 육각형 성장 시각화 추가
- `index.html`을 `style.css`, `app.js`로 분리
