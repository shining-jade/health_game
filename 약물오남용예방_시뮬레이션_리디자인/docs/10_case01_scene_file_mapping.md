# 사건 1 장면-파일 매핑표

이 문서는 사건 1 **시험기간 카페인 사건 - 떨리는 손의 이유**에서 각 장면이 어떤 배경, 캐릭터, 단서 이미지를 사용하는지 정리한다. 현재 구현은 `$imagegen`으로 생성한 `_imagegen.webp` 자산을 우선 사용한다.

## 1. 캐릭터 식별 표시 방식

현재 화면 기준:

- 왼쪽 캐릭터: **민재**
- 오른쪽 캐릭터: **지우**

추천 방식:

- 기본적으로 캐릭터 아래 작은 이름 태그를 유지한다.
- 현재 말하는 캐릭터는 이름 태그를 강조한다.
- 캐릭터 없는 조사/단서 장면에서는 이름 태그를 숨긴다.

이 방식은 **A + B 혼합형**이다.

- A: 캐릭터 하단 이름 태그
- B: 대사 중인 캐릭터 이름 강조

## 2. 이름 태그 문구 규칙

- 학생: `민재`, `지우`
- 교사: `담임 선생님`
- 보건교사: `보건샘`

보건교육 게임 톤에서는 `보건샘`이 친근하고 현재 프로젝트와 잘 맞는다.

## 3. 사건 1 장면-파일 매핑표

| 장면 ID | 장면명 | 배경 파일 | 좌측 캐릭터 | 우측 캐릭터 | 이름 표시 | 단서/오브젝트 파일 | 비고 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `case01_scene01` | 이상 징후 발견 | `bg_case01_scene01_classroom_imagegen.webp` | `npc_minjae_pale_imagegen.webp` = **민재** | `npc_jiwoo_worried_imagegen.webp` = **지우** | 좌: 민재 / 우: 지우, 지우 강조 | 선택: `clue_case01_water_bottle.webp`, `clue_case01_pencil_drop.webp` | 현재 HTML 화면 구조 |
| `case01_scene02` | 민재 상태 질문 | `bg_case01_scene01_classroom_imagegen.webp` 재사용 | `npc_minjae_pale_imagegen.webp` = **민재** | `npc_jiwoo_worried_imagegen.webp` 또는 숨김 = **지우** | 필요 | 없음 또는 책상 소품 | 교실 배경 재사용 |
| `case01_scene03` | 책상/가방 조사 | `bg_case01_scene02_desk_imagegen.webp` | 없음 | 없음 | 숨김 | `clue_case01_medicine_bag_imagegen.webp`, `clue_case01_note_imagegen.webp`, `clue_case01_energy_drink_imagegen.webp` | 조사 중심 장면 |
| `case01_scene04` | 영수증 확인 | `bg_case01_scene03_clueview.webp` 또는 모달형 | 없음 | 없음 | 숨김 | `clue_case01_receipt_imagegen.webp` | 단서 확대 장면 |
| `case01_scene05` | 메신저 확인 | `bg_case01_scene03_clueview.webp` 또는 모달형 | 없음 | 없음 | 숨김 | `clue_case01_chat_capture_imagegen.webp` | 단서 확대 장면 |
| `case01_scene06` | 음료 단서 확인 | `bg_case01_scene03_clueview.webp` 또는 모달형 | 없음 | 없음 | 숨김 | `clue_case01_energy_drink_imagegen.webp` | 단서 확대 장면 |
| `case01_scene07` | 보건실 이동 후 정리 | `bg_case01_scene04_healthroom_imagegen.webp` | `npc_minjae_relieved_imagegen.webp` = **민재** | `npc_nurse_default_imagegen.webp` = **보건샘** | 좌: 민재 / 우: 보건샘 | 기존 단서 재사용 가능 | 사건 해석 장면 |
| `case01_scene08` | 감정 회수 / 마무리 | `bg_case01_scene04_healthroom_imagegen.webp` 재사용 | `npc_minjae_relieved_imagegen.webp` = **민재** | 선택 `npc_jiwoo_relieved.webp` = **지우** 또는 `npc_nurse_default_imagegen.webp` = **보건샘** | 필요 | 없음 | 학습 정리 직전 |
| `case01_scene09` | 사건 종료 요약 | `thumb_case01.webp` 또는 보건실 흐림 배경 | 없음 | 없음 | 숨김 | 핵심 단서 썸네일 재사용 | 결과/정리 화면 |

## 4. HTML용 장면 데이터 구조

장면마다 아래 항목을 가지게 하면 관리가 쉽다.

| 항목 | 의미 |
| --- | --- |
| `background` | 현재 장면 배경 파일 |
| `leftCharacter.file` | 좌측 캐릭터 이미지 파일 |
| `leftCharacter.name` | 좌측 캐릭터 이름 |
| `rightCharacter.file` | 우측 캐릭터 이미지 파일 |
| `rightCharacter.name` | 우측 캐릭터 이름 |
| `speaker` | 현재 대사 중인 캐릭터 |
| `clues` | 현재 장면에서 보이는 단서 |

예시:

```js
{
  id: "case01_scene01",
  title: "이상 징후 발견",
  background: "./assets/images/backgrounds/case01/bg_case01_scene01_classroom_imagegen.webp",
  leftCharacter: {
    file: "./assets/images/characters/case01/npc_minjae_pale_imagegen.webp",
    name: "민재"
  },
  rightCharacter: {
    file: "./assets/images/characters/case01/npc_jiwoo_worried_imagegen.webp",
    name: "지우"
  },
  speaker: "지우",
  clues: []
}
```

## 5. 구현 규칙

1. 캐릭터 이미지와 이름은 세트로 움직인다.
2. 캐릭터 없는 장면에서는 이름 태그도 숨긴다.
3. 같은 배경은 재사용할 수 있다.
4. 현재 발화자만 이름 태그를 강조한다.
5. `index.html`의 현재 장면은 `case01_scene01`이며, 지우가 현재 발화자다.

