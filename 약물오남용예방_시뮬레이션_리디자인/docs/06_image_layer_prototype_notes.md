# 이미지 레이어 반영 HTML 프로토타입 노트

`index.html`에는 배경 / 캐릭터 / 단서 썸네일이 바로 들어갈 수 있는 구조를 반영했다. 실제 이미지가 없어도 `assets/images/placeholders`의 임시 이미지로 화면을 확인할 수 있다.

## 1. 장면 이미지 레이어 구조

장면 영역은 배경 한 장만 쓰는 구조가 아니라, 다음 레이어로 나뉜다.

- `.scene-bg`: 장면 배경
- `.scene-overlay`: 캐릭터 레이어 컨테이너
- `.scene-character--left`: 왼쪽 캐릭터
- `.scene-character--right`: 오른쪽 캐릭터
- `.scene-character--center`: 중앙 캐릭터

이 구조를 사용하면 장면별로 민재, 지우, 보건교사 같은 인물을 쉽게 바꿀 수 있다.

## 2. 개발용 플레이스홀더 경로

현재 HTML은 아래 임시 이미지를 사용한다.

```text
./assets/images/placeholders/placeholder_bg.webp
./assets/images/placeholders/placeholder_character.webp
./assets/images/placeholders/placeholder_clue.webp
```

## 3. 실제 자산 교체 경로

### 배경 이미지

현재:

```html
src="./assets/images/placeholders/placeholder_bg.webp"
```

실제 교체 예:

```html
src="./assets/images/backgrounds/case01/bg_case01_scene01_classroom.webp"
```

### 캐릭터 이미지

현재:

```html
src="./assets/images/placeholders/placeholder_character.webp"
```

실제 교체 예:

```html
src="./assets/images/characters/case01/npc_minjae_pale.webp"
src="./assets/images/characters/case01/npc_jiwoo_worried.webp"
```

### 단서 이미지

현재:

```html
src="./assets/images/placeholders/placeholder_clue.webp"
```

실제 교체 예:

```html
src="./assets/images/clues/case01/clue_case01_receipt.webp"
src="./assets/images/clues/case01/clue_case01_medicine_bag.webp"
```

## 4. 단서 카드 썸네일 슬롯

단서함의 각 단서 카드는 이미지 썸네일을 가진다.

```html
<img
  class="clue-card__thumb"
  src="./assets/images/clues/case01/clue_case01_receipt.webp"
  alt="편의점 영수증"
/>
```

이 슬롯에는 영수증, 약 봉투, 메신저 캡처, 에너지음료 캔 등을 넣을 수 있다.

## 5. 구현 상태

- PC 3열 레이아웃 반영
- 모바일 하단 탭 반영
- 배경/캐릭터 레이어 반영
- 단서 카드 썸네일 반영
- 단서함/메모장/핵심 질문/활동지 모달 반영
- 개발용 플레이스홀더 이미지 생성 완료

