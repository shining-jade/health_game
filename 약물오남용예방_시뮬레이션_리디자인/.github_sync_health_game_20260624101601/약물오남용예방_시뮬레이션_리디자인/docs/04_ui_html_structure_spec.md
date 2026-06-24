# 친구사건형 UI HTML 설계 명세

이 문서는 친구사건형 약물오남용예방 시뮬레이션을 실제 HTML/CSS/JS로 구현하기 위한 UI 구조 명세다. 기준은 **친구사건형 / PC+모바일 반응형 / 상태창+단서함+메모장+사건패널 포함** 구조다.

## 1. 설계 목표

이 UI는 다음 목적을 만족해야 한다.

1. **친구 사건형 추리 진행**
   - 사건 발생
   - NPC 대화
   - 단서 수집
   - 메모 정리
   - 원인 추론
   - 대응 선택
   - 학습 정리

2. **모바일/PC 반응형 지원**
   - PC: 3열 레이아웃
   - 모바일: 메인 장면 + 하단 탭 구조

3. **오프라인 활동지 연계**
   - 메모장 구조와 활동지 구조를 유사하게 맞춘다.
   - 사건 종료 후 활동지 작성 유도 문구를 제공한다.

## 2. 전체 화면 구조

### 2.1 최상위 레이아웃

```html
<div id="app" class="app-shell">
  <header id="topBar" class="top-bar"></header>

  <main id="mainLayout" class="main-layout">
    <aside id="statusPanel" class="status-panel"></aside>
    <section id="sceneArea" class="scene-area"></section>
    <aside id="casePanel" class="case-panel"></aside>
  </main>

  <section id="bottomFeedback" class="bottom-feedback"></section>

  <nav id="mobileTabBar" class="mobile-tab-bar" aria-label="모바일 도구 탭"></nav>

  <div id="inventoryModal" class="modal" hidden></div>
  <div id="memoModal" class="modal" hidden></div>
  <div id="questionModal" class="modal" hidden></div>
  <div id="worksheetModal" class="modal" hidden></div>
</div>
```

## 3. PC/모바일 레이아웃 정책

### 3.1 PC 레이아웃

- `#mainLayout`을 3열 구조로 사용한다.
- 좌측: 상태창
- 중앙: 장면/대사/선택지
- 우측: 사건 패널 + 도구 버튼

권장 CSS:

```css
#mainLayout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr) 320px;
  gap: 16px;
  align-items: stretch;
}
```

### 3.2 모바일 레이아웃

- `#statusPanel`, `#casePanel`은 기본적으로 숨기거나 축약한다.
- 중앙 `#sceneArea`를 메인 화면으로 사용한다.
- 하단 `#mobileTabBar`를 통해 상태/사건/단서/메모를 전환한다.
- `#inventoryModal`, `#memoModal` 등을 전체 화면 패널 또는 바텀시트처럼 사용한다.

권장 CSS:

```css
@media (max-width: 768px) {
  #mainLayout {
    display: block;
  }

  #statusPanel,
  #casePanel,
  #bottomFeedback {
    display: none;
  }

  #mobileTabBar {
    display: flex;
  }
}
```

## 4. 상단 바 `#topBar`

### 4.1 역할

- 현재 시간/날짜/에피소드 맥락 제공
- 사건명 상시 노출
- 모바일/PC 공통 핵심 내비게이션

### 4.2 포함 요소

```html
<header id="topBar" class="top-bar">
  <div class="top-context">
    <span class="date-label">시험 2일 전</span>
    <span class="place-label">교실</span>
  </div>

  <h1 class="case-title">사건: 떨리는 손의 이유</h1>

  <div class="top-actions">
    <span class="investigation-count">조사 2/4</span>
    <button type="button" class="icon-button" aria-label="핵심 질문 보기">?</button>
    <button type="button" class="icon-button" aria-label="메뉴 열기">☰</button>
  </div>
</header>
```

### 4.3 텍스트 규칙

- 사건명은 한 줄 유지를 우선한다.
- 모바일에서는 날짜 + 사건명만 우선 노출한다.
- 장소는 줄이거나 아이콘화할 수 있다.

## 5. 상태창 `#statusPanel`

### 5.1 역할

친구사건형에서 플레이어의 **건강 추리 역량 상태**를 보여준다.

### 5.2 포함 항목

- 관찰력
- 판단력
- 공감도
- 대응력
- 건강문해력
- 신뢰도

### 5.3 HTML 구조 예시

```html
<aside id="statusPanel" class="status-panel">
  <h2>상태</h2>
  <p class="panel-helper">내가 사건을 파악하고 대응하는 현재 역량</p>

  <div class="stat-row">
    <span class="stat-label">관찰력</span>
    <div class="stat-bar" aria-label="관찰력 4단계">
      <span style="width: 80%"></span>
    </div>
  </div>

  <div class="stat-row">
    <span class="stat-label">판단력</span>
    <div class="stat-bar" aria-label="판단력 5단계">
      <span style="width: 100%"></span>
    </div>
  </div>

  <div class="stat-row">
    <span class="stat-label">공감도</span>
    <div class="stat-bar" aria-label="공감도 3단계">
      <span style="width: 60%"></span>
    </div>
  </div>

  <div class="stat-row">
    <span class="stat-label">대응력</span>
    <div class="stat-bar" aria-label="대응력 4단계">
      <span style="width: 80%"></span>
    </div>
  </div>

  <div class="stat-row">
    <span class="stat-label">건강문해력</span>
    <div class="stat-bar" aria-label="건강문해력 3단계">
      <span style="width: 60%"></span>
    </div>
  </div>

  <div class="stat-row">
    <span class="stat-label">신뢰도</span>
    <div class="stat-bar" aria-label="신뢰도 4단계">
      <span style="width: 80%"></span>
    </div>
  </div>
</aside>
```

### 5.4 구현 메모

- 수치 숫자보다는 5단계 막대형을 추천한다.
- 추후 육각형 성장 화면과 데이터 연동 가능하게 구성한다.

## 6. 중앙 장면 영역 `#sceneArea`

### 6.1 역할

가장 핵심적인 플레이 영역이다.

- 배경/상황 제시
- NPC 대사
- 선택지
- 조사 포인트
- 사건 진행

### 6.2 기본 구조

```html
<section id="sceneArea" class="scene-area">
  <div class="scene-header">
    <span class="scene-step">장면 1</span>
    <h2>이상 징후 발견</h2>
  </div>

  <div class="scene-visual" role="img" aria-label="시험기간 교실 장면"></div>

  <div class="dialogue-box">
    <strong class="speaker-name">지우</strong>
    <p>민재가 아까부터 손을 계속 떨고 있었어.</p>
  </div>

  <div class="choice-list" aria-label="선택지">
    <button type="button">민재에게 직접 상태를 묻는다</button>
    <button type="button">오늘 먹은 것을 확인한다</button>
    <button type="button">지우에게 더 자세히 묻는다</button>
  </div>

  <div class="scene-actions">
    <button type="button">주변 조사</button>
    <button type="button">단서 확인</button>
  </div>
</section>
```

### 6.3 구성 원칙

- 장면 제목은 짧게 쓴다.
- 대사는 2~4줄 이내로 끊는다.
- 선택지는 2~4개를 유지한다.
- 중요한 액션 버튼은 선택지 아래 배치한다.

### 6.4 추천 버튼 문구

- `주변 조사`
- `단서 확인`
- `메모에 정리`
- `다음 장면`

## 7. 사건 패널 `#casePanel`

### 7.1 역할

현재 사건을 구조화해서 보여주는 패널이다.

### 7.2 기본 섹션

1. 현재 이상 징후
2. 확인된 사실
3. 불확실한 점
4. 조사 진행도
5. 도구 버튼

### 7.3 HTML 구조 예시

```html
<aside id="casePanel" class="case-panel">
  <div class="case-panel-header">
    <h2>사건 패널</h2>
    <p class="key-question">핵심 질문: 민재의 상태를 악화시킨 주요 원인은 무엇일까?</p>
  </div>

  <section class="case-section">
    <h3>이상 징후</h3>
    <ul>
      <li>손 떨림</li>
      <li>창백한 안색</li>
      <li>집중 저하</li>
    </ul>
  </section>

  <section class="case-section">
    <h3>확인된 사실</h3>
    <ul>
      <li>아침 감기약 복용</li>
      <li>오전 쉬는 시간 편의점 방문</li>
    </ul>
  </section>

  <section class="case-section">
    <h3>불확실한 점</h3>
    <ul>
      <li>음료를 몇 번 마셨는가?</li>
      <li>전날 수면 부족 정도는?</li>
    </ul>
  </section>

  <section class="case-progress">
    <h3>진행도</h3>
    <span>단서 3/5</span>
    <span>진술 2/4</span>
    <span>가설 1/3</span>
  </section>

  <div class="tool-buttons">
    <button type="button">단서함</button>
    <button type="button">메모장</button>
    <button type="button">핵심 질문</button>
    <button type="button">활동지</button>
  </div>
</aside>
```

### 7.4 설계 포인트

- “이상 징후 / 확인된 사실 / 불확실한 점” 구분이 매우 중요하다.
- 플레이어가 지금 어떤 단계에 있는지 즉시 파악 가능해야 한다.

## 8. 하단 피드백 영역 `#bottomFeedback`

### 8.1 역할

- 새 단서 획득 알림
- 메모 업데이트 알림
- 활동지 작성 유도
- 시스템 피드백 표시

### 8.2 HTML 예시

```html
<section id="bottomFeedback" class="bottom-feedback" aria-live="polite">
  <p>새 단서 획득: 편의점 영수증</p>
  <p>메모장 업데이트: 반복 섭취 가능성 추가</p>
</section>
```

### 8.3 활용 문구 예시

- `새 단서 획득: 감기약 봉투`
- `메모장에 '아침 복용 기록'이 추가되었습니다`
- `활동지에 처음 가설을 적어보세요`

## 9. 모바일 하단 탭 `#mobileTabBar`

### 9.1 역할

모바일에서 상태/사건/단서/메모를 전환한다.

### 9.2 HTML 예시

```html
<nav id="mobileTabBar" class="mobile-tab-bar" aria-label="모바일 도구 탭">
  <button type="button" data-panel="status">상태</button>
  <button type="button" data-panel="case">사건</button>
  <button type="button" data-panel="inventory">단서</button>
  <button type="button" data-panel="memo">메모</button>
</nav>
```

### 9.3 정책

- 탭 클릭 시 해당 모달 또는 슬라이드 패널을 연다.
- 모바일에서는 `#statusPanel`, `#casePanel` 대신 사용한다.

## 10. 단서함 모달 `#inventoryModal`

### 10.1 역할

수집한 단서를 카드형으로 보여준다.

### 10.2 분류

- 물리 단서
- 디지털 단서
- 관찰 기록
- 참고 정보

### 10.3 HTML 구조 예시

```html
<div id="inventoryModal" class="modal inventory-modal" role="dialog" aria-modal="true" aria-labelledby="inventoryTitle" hidden>
  <div class="modal-panel">
    <header class="modal-header">
      <h2 id="inventoryTitle">단서함</h2>
      <button type="button" class="close-button">닫기</button>
    </header>

    <div class="category-tabs">
      <button type="button" class="active">물리 단서</button>
      <button type="button">디지털 단서</button>
      <button type="button">관찰 기록</button>
      <button type="button">참고 정보</button>
    </div>

    <div class="clue-grid">
      <article class="clue-card">
        <span class="clue-type">물리 단서</span>
        <h3>편의점 영수증</h3>
        <p>오전 쉬는 시간 / 점심시간 구매 기록</p>
        <div class="card-actions">
          <button type="button">상세보기</button>
          <button type="button">메모 추가</button>
          <button type="button">비교하기</button>
        </div>
      </article>
    </div>
  </div>
</div>
```

### 10.4 단서 카드 필수 정보

- 제목
- 분류
- 획득 위치/시간
- 간단 설명
- 액션 버튼

## 11. 메모장 모달 `#memoModal`

### 11.1 역할

플레이어가 추론 내용을 정리하는 핵심 도구다.

### 11.2 메모장 탭 구성

- 관찰한 사실
- 의심되는 점
- 핵심 질문
- 대응 계획
- 배운 점

### 11.3 HTML 예시

```html
<div id="memoModal" class="modal memo-modal" role="dialog" aria-modal="true" aria-labelledby="memoTitle" hidden>
  <div class="modal-panel">
    <header class="modal-header">
      <h2 id="memoTitle">메모장</h2>
      <button type="button" class="close-button">닫기</button>
    </header>

    <div class="memo-tabs">
      <button type="button" class="active">관찰한 사실</button>
      <button type="button">의심되는 점</button>
      <button type="button">핵심 질문</button>
      <button type="button">대응 계획</button>
      <button type="button">배운 점</button>
    </div>

    <section class="memo-section">
      <h3>관찰한 사실</h3>
      <p class="input-guide">직접 확인한 정보만 적어보세요.</p>
      <textarea rows="5" placeholder="예: 민재는 오전과 점심에 음료를 샀다."></textarea>
    </section>
  </div>
</div>
```

### 11.4 입력 가이드 문구

- 관찰한 사실: `직접 확인한 정보만 적어보세요`
- 의심되는 점: `아직 확실하지 않지만 의심되는 점을 정리해보세요`
- 대응 계획: `지금 가장 적절한 행동을 적어보세요`
- 배운 점: `이번 사건에서 새롭게 알게 된 점을 적어보세요`

## 12. 핵심 질문 모달 `#questionModal`

### 12.1 역할

현재 사건의 중심 질문을 다시 보여주고, 플레이어가 길을 잃지 않게 한다.

### 12.2 HTML 예시

```html
<div id="questionModal" class="modal question-modal" role="dialog" aria-modal="true" aria-labelledby="questionTitle" hidden>
  <div class="modal-panel">
    <header class="modal-header">
      <h2 id="questionTitle">핵심 질문</h2>
      <button type="button" class="close-button">닫기</button>
    </header>

    <section class="question-content">
      <p class="primary-question">민재의 상태를 악화시킨 주요 원인은 무엇일까?</p>
      <ul>
        <li>단순한 피곤함일까?</li>
        <li>감기약만의 문제일까?</li>
        <li>반복된 카페인 섭취가 있었을까?</li>
      </ul>
    </section>
  </div>
</div>
```

## 13. 활동지 모달 `#worksheetModal`

### 13.1 역할

오프라인 활동지와 연결되는 안내창이다.

### 13.2 HTML 예시

```html
<div id="worksheetModal" class="modal worksheet-modal" role="dialog" aria-modal="true" aria-labelledby="worksheetTitle" hidden>
  <div class="modal-panel">
    <header class="modal-header">
      <h2 id="worksheetTitle">활동지 안내</h2>
      <button type="button" class="close-button">닫기</button>
    </header>

    <section class="worksheet-content">
      <p>활동지에 아래 내용을 먼저 적어보세요.</p>
      <ol>
        <li>민재에게 보인 이상 징후</li>
        <li>처음 생각한 원인</li>
        <li>중요하다고 본 단서 2개</li>
      </ol>
    </section>
  </div>
</div>
```

### 13.3 연동 문구 예시

- `활동지에 처음 가설을 적어보세요`
- `어떤 단서 때문에 생각이 바뀌었는지 기록해보세요`
- `사건 종료 후 배운 점을 정리해보세요`

## 14. 사건 진행 단계별 화면 흐름

### 14.1 사건 시작

- 상단 바에 사건명 표시
- 사건 패널 초기화
- 메인 장면에 이상 상황 노출

### 14.2 조사 단계

- NPC 대화
- 조사 버튼 클릭
- 단서 획득
- 사건 패널 업데이트

### 14.3 정리 단계

- 메모장 작성
- 활동지 힌트 표시
- 핵심 질문 재확인

### 14.4 추론 단계

- 원인 조합 선택
- 대응 방식 선택

### 14.5 종료 단계

- 사건 원인 요약
- 학습 포인트 정리
- 역량 성장 표시
- 활동지 마무리 안내

## 15. 버튼/라벨 텍스트 통일안

### 공통 버튼

- `다음`
- `닫기`
- `확인`
- `메모 추가`
- `상세보기`
- `비교하기`

### 도구 버튼

- `단서함`
- `메모장`
- `핵심 질문`
- `활동지`

### 사건용 버튼

- `주변 조사`
- `상태 묻기`
- `자세히 듣기`
- `확인해보기`
- `대응 선택`

## 16. CSS/UX 설계 원칙

### 16.1 가독성

- 대사창 폰트 크기를 충분히 크게 잡는다.
- 버튼 높이를 넉넉하게 잡는다.
- 줄간격에 여유를 둔다.

### 16.2 카드형 구조 우선

- 단서, 메모, 피드백은 카드형으로 구성한다.
- 모바일에서 스크롤/탭 사용이 쉬워야 한다.

### 16.3 색상 역할 분리

- 상태창: 차분한 기본색
- 사건 패널: 경고/주의 계열 포인트
- 메모장: 중립색
- 활동지 안내: 강조색

### 16.4 모바일 터치 최적화

- 버튼 최소 높이를 크게 잡는다.
- 탭 간격을 충분히 확보한다.
- 팝업 닫기 버튼을 명확히 둔다.

## 17. 개발 우선순위

### 1차 구현

- 상단 바
- 중앙 장면 영역
- 상태창
- 사건 패널
- 모바일 하단 탭

### 2차 구현

- 단서함 모달
- 메모장 모달
- 핵심 질문 모달
- 활동지 안내 모달

### 3차 구현

- 사건 종료 화면
- 육각형 성장 시각화
- 활동지 출력/다운로드 연결

## 18. 바로 구현용 한 줄 요약

이 UI는 **PC에서는 3열(상태-장면-사건), 모바일에서는 메인 장면 + 하단 탭 구조**로 가고, **단서함/메모장/핵심 질문/활동지 안내를 모달 또는 슬라이드 패널로 열어 추리형 학습 흐름을 지원**하도록 설계한다.

## 19. 다음 후보 작업

가장 실무적으로 바로 이어갈 수 있는 작업은 다음 순서다.

1. 실제 HTML 마크업 초안 작성
2. PC/모바일 와이어프레임 표 정리
3. 시험기간 카페인 사건 1편용 실제 화면 문구를 채운 샘플 UI 콘텐츠 작성

