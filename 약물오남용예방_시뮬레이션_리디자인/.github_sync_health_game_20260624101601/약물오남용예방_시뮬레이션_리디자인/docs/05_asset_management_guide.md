# 이미지/배경 자산 관리 가이드

이 문서는 이미지와 배경 리소스를 나중에 쉽게 교체할 수 있도록 폴더 구조, 파일명 규칙, 해상도 기준, HTML 연결 방식을 정리한 가이드다.

핵심 목표:

- 지금은 임시 이미지로 개발 가능해야 한다.
- 나중에 실제 배경/오브젝트/NPC 이미지를 쉽게 꽂아 넣을 수 있어야 한다.
- PC/모바일 공용으로 무리 없이 사용할 수 있어야 한다.
- 사건별로 이미지가 늘어나도 관리가 꼬이지 않아야 한다.

## 1. 기본 원칙

### 원칙 1. 화면용 이미지와 데이터용 파일명을 맞춘다

장면 ID가 `case01_scene01`이면 이미지 파일명도 같은 체계를 따른다.

예:

- 배경: `bg_case01_scene01_classroom.webp`
- 관련 오브젝트: `obj_case01_desk_note.webp`
- 단서: `clue_case01_receipt.webp`

이렇게 맞추면 나중에 JS 데이터와 이미지 연결이 쉬워진다.

### 원칙 2. 배경 / 캐릭터 / 단서 / UI 아이콘을 폴더로 분리한다

한 폴더에 모든 이미지를 넣으면 사건이 늘어날수록 관리가 어려워진다.

### 원칙 3. PNG 남발보다 WEBP를 우선한다

모바일까지 고려하면 용량 관리가 중요하다.

권장 확장자:

- 배경: `.webp`
- 캐릭터/오브젝트: `.webp` 또는 투명 배경 `.png`
- 아이콘: `.svg`
- 활동지 미리보기 같은 고정 이미지: `.webp`

### 원칙 4. 에피소드별 폴더와 공용 폴더를 함께 운영한다

- 공용: 교실, 복도, 보건실 같은 반복 사용 배경
- 에피소드별: 특정 사건에만 쓰는 영수증, 메모, 컵, 약봉투

## 2. 추천 폴더 구조

```text
/assets
  /images
    /backgrounds
      /common
      /case01
      /case02
    /characters
      /common
      /case01
      /case02
    /clues
      /common
      /case01
      /case02
    /ui
      /icons
      /badges
      /panels
    /thumbnails
    /placeholders
  /audio
  /data
```

## 3. 폴더별 역할

### 3.1 `backgrounds`

장면의 전체 배경 이미지.

예:

- 교실
- 보건실
- 복도
- 편의점
- 책상 확대 장면

사용 방식:

- `scene-visual` 영역의 메인 배경
- 상황 몰입용
- 장면 단위 교체

권장 파일명:

- `bg_classroom_day.webp`
- `bg_healthroom_day.webp`
- `bg_case01_scene01_classroom.webp`

### 3.2 `characters`

NPC 일러스트, 반신 이미지, 표정 변화 이미지.

예:

- 민재 기본
- 민재 어지러운 표정
- 지우 걱정 표정
- 담임 기본
- 보건교사 기본

사용 방식:

- 대사창 옆 인물 표시
- 중앙 장면 오버레이
- 선택지 강조 연출

권장 파일명:

- `npc_minjae_neutral.webp`
- `npc_minjae_dizzy.webp`
- `npc_jiwoo_worried.webp`

표정이 늘어날 수 있으므로 `[캐릭터]_[상태].webp` 형식을 추천한다.

### 3.3 `clues`

단서 카드, 조사 오브젝트, 확대보기용 이미지.

예:

- 영수증
- 감기약 봉투
- 음료 캔
- 채팅 캡처
- 손글씨 메모
- 복용 수첩

사용 방식:

- 단서함 카드 이미지
- 조사 화면 확대 이미지
- 메모장 자동 기록과 연결

권장 파일명:

- `clue_case01_receipt.webp`
- `clue_case01_medicine_bag.webp`
- `clue_case01_phone_chat.webp`

### 3.4 `ui/icons`

상태창, 사건 패널, 버튼에 쓰이는 아이콘.

예:

- 관찰력
- 판단력
- 공감도
- 대응력
- 건강문해력
- 신뢰도
- 단서함
- 메모장
- 활동지

사용 방식:

- SVG 권장
- 텍스트와 함께 쓰는 작은 보조 요소

### 3.5 `thumbnails`

에피소드 선택 목록이나 저장 데이터 미리보기용 이미지.

예:

- 카페인 사건 썸네일
- SNS 건강정보 사건 썸네일

### 3.6 `placeholders`

실제 이미지가 없을 때 개발용으로 쓰는 임시 이미지.

예:

- `placeholder_bg.webp`
- `placeholder_character.webp`
- `placeholder_clue.webp`

## 4. 사건별 이미지 관리 기준

친구사건형은 사건마다 단서가 다르기 때문에 사건 단위로 묶는 규칙이 중요하다.

사건 1 “떨리는 손의 이유”의 사건 ID는 `case01`로 둔다.

```text
/backgrounds/case01/
  bg_case01_scene01_classroom.webp
  bg_case01_scene02_desk.webp
  bg_case01_scene03_healthroom.webp

/characters/case01/
  npc_minjae_neutral.webp
  npc_minjae_pale.webp
  npc_jiwoo_worried.webp

/clues/case01/
  clue_case01_receipt.webp
  clue_case01_medicine_bag.webp
  clue_case01_energy_drink.webp
  clue_case01_chat_capture.webp
  clue_case01_note.webp
```

이렇게 하면 사건 2, 3이 추가돼도 자산이 섞이지 않는다.

## 5. HTML 연결 방식

### 5.1 배경 이미지

```html
<img
  class="scene-visual__image"
  src="./assets/images/backgrounds/case01/bg_case01_scene01_classroom.webp"
  alt="시험기간 오후 교실 장면"
/>
```

### 5.2 캐릭터 이미지 오버레이

배경 위에 인물 레이어를 올리고 싶을 때 사용한다.

```html
<div class="scene-visual">
  <img
    class="scene-visual__image"
    src="./assets/images/backgrounds/case01/bg_case01_scene01_classroom.webp"
    alt="교실 장면"
  />
  <img
    class="scene-character scene-character--right"
    src="./assets/images/characters/case01/npc_jiwoo_worried.webp"
    alt="걱정하는 지우"
  />
</div>
```

### 5.3 단서함 이미지

```html
<article class="clue-card">
  <img
    class="clue-card__thumb"
    src="./assets/images/clues/case01/clue_case01_receipt.webp"
    alt="편의점 영수증"
  />
  <h3 class="clue-card__title">편의점 영수증</h3>
</article>
```

## 6. 장면 이미지 구성 방식

### 방식 A. 배경 1장 + 캐릭터 오버레이

추천도: 높음

구조:

- 교실 배경 1장
- 민재 이미지 1장
- 지우 이미지 1장
- 필요하면 말풍선/표정 교체

장점:

- 재사용성이 높다.
- 이미지 수정을 부분적으로 할 수 있다.
- 모바일에서도 가볍다.

단점:

- 배치 작업이 조금 필요하다.

### 방식 B. 장면 완성 일러스트 1장

추천도: 중간

구조:

- 장면마다 교실 전체가 하나의 완성 이미지

장점:

- 보기에는 자연스럽다.
- 배치 고민이 적다.

단점:

- 사건 수정/캐릭터 위치 수정이 어렵다.
- 장면 수가 많아지면 리소스 부담이 크다.

현재 프로젝트에는 방식 A가 더 적합하다. 즉, **배경 / 캐릭터 / 단서**를 분리해서 관리한다.

## 7. 사건 1 기준 최소 이미지 세트

처음부터 너무 많이 만들 필요는 없다. 사건 1개 기준 최소 세트만 잡아도 된다.

배경:

- 교실
- 책상/가방 조사 장면
- 보건실

캐릭터:

- 민재 기본
- 민재 상태 이상
- 지우 걱정
- 보건교사 기본

단서:

- 영수증
- 감기약 봉투
- 에너지음료 캔
- 채팅 캡처
- 메모지

즉 최소 **배경 3장 / 캐릭터 4장 / 단서 5장** 정도로 시작 가능하다.

## 8. 이미지 제작/수집 시 스타일 통일 규칙

이미지를 나중에 만들거나 가져올 때 스타일이 들쭉날쭉하면 UI가 어색해진다.

추천 스타일:

- 학교 교육용에 맞는 밝고 단정한 톤
- 과도하게 사실적인 병원/응급 장면 금지
- 공포스럽거나 자극적인 연출 지양
- 캐릭터는 친근한 2D/반실사 일러스트 톤
- 단서 이미지는 읽기 쉬운 클린한 구성
- 배경은 채도가 과하지 않게 구성

## 9. 해상도/비율 가이드

### 배경

- 권장 비율: 16:9
- 기준 크기: `1600x900` 또는 `1920x1080`
- 모바일에서도 중앙 크롭 가능하게 구성

### 캐릭터

- 세로형 PNG/WEBP
- 높이 기준 `900~1400px`
- 투명 배경 권장

### 단서

- 정사각형 또는 4:3 카드형
- 썸네일: `512x512` 또는 `800x600`
- 확대보기용은 더 크게 보관 가능

### 아이콘

- SVG 권장
- `24px` / `32px` 기준

## 10. CSS에서 대비할 클래스

나중에 이미지가 들어올 것을 고려해 지금부터 클래스만 잡아둔다.

```css
.scene-visual {
  position: relative;
  overflow: hidden;
}

.scene-visual__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scene-character {
  position: absolute;
  bottom: 0;
  max-height: 92%;
  object-fit: contain;
  pointer-events: none;
}

.scene-character--left {
  left: 4%;
}

.scene-character--right {
  right: 4%;
}

.clue-card__thumb {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #eef3f8;
}
```

## 11. 개발용 임시 이미지 운영법

실제 이미지가 아직 없으면 개발 중에는 아래 방식 중 하나를 사용한다.

### 방법 1. 공통 플레이스홀더 이미지

```text
/assets/images/placeholders/
  placeholder_bg.webp
  placeholder_character.webp
  placeholder_clue.webp
```

### 방법 2. 색상 박스 + 라벨

이미지 대신 CSS 배경과 텍스트로 임시 표시한다.

예:

- `교실 배경`
- `지우 이미지`
- `영수증 단서`

초기 개발 속도는 이쪽이 빠르다.

## 12. 실제 적용용 정리안

```text
project-root
  index.html
  /assets
    /images
      /backgrounds
        /common
        /case01
      /characters
        /common
        /case01
      /clues
        /common
        /case01
      /ui
        /icons
        /badges
      /placeholders
```

## 13. 사건 1 기준 실제 자산 리스트 예시

배경:

- `bg_case01_scene01_classroom.webp`
- `bg_case01_scene02_desk.webp`
- `bg_case01_scene03_healthroom.webp`

캐릭터:

- `npc_minjae_neutral.webp`
- `npc_minjae_pale.webp`
- `npc_jiwoo_worried.webp`
- `npc_nurse_default.webp`

단서:

- `clue_case01_receipt.webp`
- `clue_case01_medicine_bag.webp`
- `clue_case01_energy_drink.webp`
- `clue_case01_chat_capture.webp`
- `clue_case01_note.webp`

플레이스홀더:

- `placeholder_bg.webp`
- `placeholder_character.webp`
- `placeholder_clue.webp`

