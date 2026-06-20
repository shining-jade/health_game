# JS 장면 데이터 렌더링 구조

이 문서는 `index.html`이 HTML을 직접 고치지 않고, JS 데이터만 바꿔 장면/캐릭터/대사/단서/발화자를 바꿀 수 있도록 만든 구조를 설명한다.

## 1. 목표

- 에피소드 선택형 옴니버스 지원
- 장면별 배경/캐릭터/대사/선택지 관리
- 누가 말하는지 이름 태그 자동 반영
- 단서, 메모, 사건 패널, 진행도 연결 가능
- 활동지/결과 화면까지 확장 가능

## 2. 데이터 파일

현재 사건 1 데이터는 아래 파일에 있다.

- `assets/data/case01_game_data.js`

데이터 구조:

- `characters`: 캐릭터 사전
- `clues`: 단서 사전
- `episodes`: 에피소드와 장면 목록

## 3. 핵심 렌더 함수

`index.html`의 하단 스크립트에서 다음 함수를 사용한다.

- `renderScene(sceneId)`: 장면 전체 렌더링
- `renderActors(scene)`: 좌우 캐릭터와 이름 태그 렌더링
- `renderChoices(scene)`: 선택지 버튼 렌더링
- `renderActions(scene)`: 하단 액션 버튼 렌더링
- `renderCasePanel(scene)`: 사건 패널 렌더링
- `renderInventory()`: 단서함 렌더링
- `renderResult()`: 사건 결과 화면 렌더링

## 4. 장면 데이터 최소 구조

```js
{
  id,
  title,
  background,
  actors: {
    left: { characterId, visible },
    right: { characterId, visible }
  },
  speaker,
  dialogue: { name, text },
  choices: [{ text, nextSceneId }]
}
```

## 5. 이름 태그 자동 처리

장면 데이터의 `speaker` 값에 따라 이름 태그가 자동으로 강조된다.

- `speaker: "left"` → 왼쪽 이름 태그 강조
- `speaker: "right"` → 오른쪽 이름 태그 강조
- `speaker: null` → 이름 태그 강조 없음

캐릭터가 없는 장면에서는 이름 태그도 렌더링하지 않는다.

## 6. 현재 구현 상태

- `case01_scene01`부터 `case01_scene07`까지 선택지로 이동 가능
- `case01_result` 결과 화면 렌더링 가능
- 단서함은 `gameData.clues`를 기준으로 자동 렌더링
- 사건 패널은 각 장면의 `casePanel` 데이터를 기준으로 자동 렌더링

