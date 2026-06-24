# 사건 1 이미지 자산 체크리스트

## 에피소드명

**사건 1. 시험기간 카페인 사건 - 떨리는 손의 이유**

## 사건 개요

시험기간 오후 수업 중 민재가 손을 떨고 안색이 창백해진다. 플레이어는 친구 지우의 말, 영수증, 감기약 봉투, 메신저 대화 등을 통해 **수면 부족 + 감기약 복용 + 반복된 카페인 섭취**의 복합 원인을 추리한다.

## 현재 적용 상태

기존 일반 의약품 시뮬레이션 폴더의 이미지들을 참고해 1차 구현용 자산을 생성했다.

- 참고 시트: `docs/case01_reference_contact_sheet.jpg`
- 캐릭터 참고 시트: `docs/case01_character_reference_sheet.jpg`
- 생성 결과 시트: `docs/case01_generated_asset_sheet.jpg`
- 생성 스크립트: `tools/create_case01_starter_assets.py`

현재 실제 파일이 생성된 자산:

- [x] `bg_case01_scene01_classroom.webp`
- [x] `bg_case01_scene02_desk.webp`
- [x] `bg_case01_scene03_clueview.webp`
- [x] `bg_case01_scene04_healthroom.webp`
- [x] `npc_minjae_pale.webp`
- [x] `npc_minjae_relieved.webp`
- [x] `npc_jiwoo_worried.webp`
- [x] `npc_nurse_default.webp`
- [x] `clue_case01_receipt.webp`
- [x] `clue_case01_medicine_bag.webp`
- [x] `clue_case01_chat_capture.webp`
- [x] `clue_case01_energy_drink.webp`
- [x] `clue_case01_note.webp`
- [x] `thumb_case01.webp`

`$imagegen`으로 생성하여 현재 HTML에 연결된 자산:

- [x] `bg_case01_scene01_classroom_imagegen.webp`
- [x] `bg_case01_scene02_desk_imagegen.webp`
- [x] `bg_case01_scene04_healthroom_imagegen.webp`
- [x] `npc_minjae_pale_imagegen.webp`
- [x] `npc_minjae_relieved_imagegen.webp`
- [x] `npc_jiwoo_worried_imagegen.webp`
- [x] `npc_nurse_default_imagegen.webp`
- [x] `clue_case01_receipt_imagegen.webp`
- [x] `clue_case01_medicine_bag_imagegen.webp`
- [x] `clue_case01_chat_capture_imagegen.webp`
- [x] `clue_case01_energy_drink_imagegen.webp`
- [x] `clue_case01_note_imagegen.webp`

## 1. 전체 장면 구조

이 사건은 최소 4개 장면으로 나눈다.

1. 장면 1: 교실에서 이상 징후 발견
2. 장면 2: 책상/가방 주변 조사
3. 장면 3: 단서 확인 - 영수증/약봉투/채팅
4. 장면 4: 보건실에서 원인 정리 및 대응

선택적으로 추가 가능한 장면:

5. 장면 5: 사건 종료 / 학습 정리 화면용 썸네일

## 2. 장면별 이미지 체크리스트

### 장면 1. 교실에서 이상 징후 발견

장면 목적:

- 사건 도입
- 민재의 이상 상태를 시각적으로 보여줌
- 지우의 걱정과 첫 진술 제시

필요한 배경 이미지:

- [ ] [필수] `bg_case01_scene01_classroom.webp`

배경 설명:

- 시험기간 오후 교실 느낌
- 학생 책상, 창문, 칠판 정도가 보이는 단정한 학교 교실
- 너무 복잡하지 않게 구성

필요한 캐릭터 이미지:

- [ ] [필수] `npc_minjae_pale.webp`
- [ ] [필수] `npc_jiwoo_worried.webp`

캐릭터 설명:

- 민재: 창백함, 약간 힘없는 표정, 손이 떨리는 느낌
- 지우: 걱정스럽고 상황을 살피는 표정

선택 추가 캐릭터:

- [ ] [선택] `npc_teacher_concerned.webp`

필요한 단서 이미지:

- [ ] [선택] 책상 위 물병
- [ ] [선택] 떨어진 필기구
- [ ] [선택] 음료 캔 일부 노출

초기 버전에서는 장면 1의 단서 이미지를 파일로 따로 만들지 않아도 된다. 필요하면 연출용 오브젝트로 추가한다.

우선순위:

- 필수: 교실 배경 1, 민재 1, 지우 1
- 선택: 담임 1, 소품 오브젝트

### 장면 2. 책상/가방 주변 조사

장면 목적:

- 플레이어가 직접 조사에 들어가는 느낌 제공
- 단서 수집 시작
- “피곤함만이 원인은 아닐 수 있다”는 감각 형성

필요한 배경 이미지:

- [ ] [필수] `bg_case01_scene02_desk.webp`

배경 설명:

- 민재의 책상이나 가방을 확대해서 보는 느낌
- 책상 위 메모, 필통, 가방 입구 등이 보이면 좋음
- 일반 배경이라기보다 조사 화면용 보드에 가까움

필요한 캐릭터 이미지:

- [ ] [선택] 민재 반신 흐린 오버레이
- [ ] [선택] 지우 조사 동행 컷

초기 구현은 캐릭터 없이 배경만으로 충분하다.

필요한 단서 이미지:

- [ ] [필수] `clue_case01_medicine_bag.webp`
- [ ] [필수] `clue_case01_note.webp`
- [ ] [선택] `clue_case01_energy_drink.webp`

단서 설명:

- 감기약 봉투: 아침 복용 기록이 확인 가능한 구조
- 메모지: “졸리면 편의점” 같은 문구 포함 가능
- 음료 캔: 사건 초반엔 노골적이지 않게, 나중에 의미가 커지는 단서

우선순위:

- 필수: 책상/가방 조사 배경 1, 감기약 봉투 1, 메모지 1
- 선택: 음료 캔 1

### 장면 3. 단서 확인 - 영수증 / 메신저 / 음료

장면 목적:

- 본격적인 추리 정보 확보
- 단서 간 연결
- “한 번 마신 게 아니라 반복 섭취였다”는 중간 반전 제공

이 장면은 배경보다 **단서 카드 이미지**가 중요하다.

필요한 배경 이미지:

- [ ] [선택] `bg_case01_scene03_clueview.webp`

배경 설명:

- 단서 확대 UI를 깔끔하게 보여주기 위한 중립 배경
- 없으면 모달 UI만으로 처리 가능

필요한 캐릭터 이미지:

- 없음

필요한 단서 이미지:

- [ ] [필수] `clue_case01_receipt.webp`
- [ ] [필수] `clue_case01_chat_capture.webp`
- [ ] [필수] `clue_case01_energy_drink.webp`
- [ ] [필수] `clue_case01_medicine_bag.webp`

단서별 역할:

- 영수증: 오전/점심 2회 구매 확인
- 메신저 캡처: “안 마시면 못 버텨” 같은 정서적 힌트
- 에너지음료 캔: 실제 섭취 품목 시각화
- 감기약 봉투: 복용 시간 및 조합 위험 추론

우선순위:

- 필수: 영수증, 메신저 캡처, 에너지음료, 감기약 봉투
- 선택: 단서 확대용 공통 배경

### 장면 4. 보건실에서 원인 정리 및 대응

장면 목적:

- 사건의 해석
- 보건교사 설명
- 민재의 감정 회수
- 대응 및 학습 포인트 정리

필요한 배경 이미지:

- [ ] [필수] `bg_case01_scene04_healthroom.webp`

배경 설명:

- 학교 보건실
- 침대, 책상, 약장 느낌이 약하게 보이면 좋음
- 차분하고 안전한 분위기

필요한 캐릭터 이미지:

- [ ] [필수] `npc_nurse_default.webp`
- [ ] [필수] `npc_minjae_relieved.webp`

선택 추가 캐릭터:

- [ ] [선택] `npc_jiwoo_relieved.webp`

필요한 단서 이미지:

- [재사용] `clue_case01_receipt.webp`
- [재사용] `clue_case01_medicine_bag.webp`
- [재사용] `clue_case01_chat_capture.webp`

보건실 장면에서는 새 단서 이미지를 만들기보다 기존 단서를 재사용한다.

우선순위:

- 필수: 보건실 배경 1, 보건교사 1, 민재 회복 표정 1
- 선택: 지우 안심 표정 1

### 장면 5. 사건 종료 / 요약 / 썸네일

장면 목적:

- 에피소드 클리어 화면
- 활동지 연계
- 학습 정리 카드 또는 대표 썸네일

필요한 배경 이미지:

- [ ] [선택] `thumb_case01.webp`
- [선택] 보건실/교실 흐림 처리 배경 재사용

필요한 캐릭터 이미지:

- 없음

필요한 단서 이미지:

- [선택] 핵심 단서 2~3개 요약 썸네일
- [재사용] 영수증
- [재사용] 약 봉투
- [재사용] 음료 캔

초기 개발 단계에서는 없어도 된다.

## 3. 사건 1 전체 자산 목록 요약

### A. 배경 이미지 목록

필수:

- [ ] `bg_case01_scene01_classroom.webp`
- [ ] `bg_case01_scene02_desk.webp`
- [ ] `bg_case01_scene04_healthroom.webp`

선택:

- [ ] `bg_case01_scene03_clueview.webp`
- [ ] `thumb_case01.webp`

### B. 캐릭터 이미지 목록

필수:

- [ ] `npc_minjae_pale.webp`
- [ ] `npc_minjae_relieved.webp`
- [ ] `npc_jiwoo_worried.webp`
- [ ] `npc_nurse_default.webp`

선택:

- [ ] `npc_teacher_concerned.webp`
- [ ] `npc_jiwoo_relieved.webp`

### C. 단서 이미지 목록

필수:

- [ ] `clue_case01_receipt.webp`
- [ ] `clue_case01_medicine_bag.webp`
- [ ] `clue_case01_chat_capture.webp`
- [ ] `clue_case01_energy_drink.webp`
- [ ] `clue_case01_note.webp`

선택:

- [ ] `clue_case01_water_bottle.webp`
- [ ] `clue_case01_pencil_drop.webp`

### D. 플레이스홀더 목록

필수:

- [x] `placeholder_bg.webp`
- [x] `placeholder_character.webp`
- [x] `placeholder_clue.webp`

## 4. 최소 구현 세트와 확장 세트

### 최소 구현 세트

배경:

- [ ] 교실
- [ ] 책상/가방 조사
- [ ] 보건실

캐릭터:

- [ ] 민재(상태 이상)
- [ ] 민재(진정)
- [ ] 지우(걱정)
- [ ] 보건교사

단서:

- [ ] 영수증
- [ ] 감기약 봉투
- [ ] 메신저 캡처
- [ ] 에너지음료
- [ ] 메모지

이 정도면 사건 1은 충분히 구현 가능하다.

### 확장 세트

- [ ] 담임 교사 이미지
- [ ] 지우 안심 표정
- [ ] 단서 확대 전용 중립 배경
- [ ] 사건 썸네일
- [ ] 책상 위 소품 오브젝트

## 5. 장면-이미지 연결표

| 장면 | 배경 | 캐릭터 | 단서 |
| --- | --- | --- | --- |
| 장면 1 교실 | 교실 배경 | 민재(이상), 지우(걱정) | 선택적으로 물병/음료 소품 |
| 장면 2 조사 | 책상/가방 조사 배경 | 없음 또는 선택 | 감기약 봉투, 메모지, 음료 캔 |
| 장면 3 단서 확인 | 선택적 단서 배경 | 없음 | 영수증, 메신저 캡처, 감기약 봉투, 음료 캔 |
| 장면 4 보건실 | 보건실 배경 | 보건교사, 민재(진정) | 기존 단서 재사용 |
| 장면 5 종료 | 선택적 요약 배경 | 선택 | 요약용 핵심 단서 썸네일 |

## 6. 제작 우선순위 추천

### 1차 제작

바로 HTML에 붙일 핵심:

- [ ] 교실 배경
- [ ] 민재 이상 상태
- [ ] 지우 걱정 표정
- [ ] 책상/가방 조사 배경
- [ ] 영수증
- [ ] 감기약 봉투
- [ ] 메모지
- [ ] 보건실 배경
- [ ] 보건교사
- [x] 플레이스홀더 3종

### 2차 제작

추리 밀도 보강:

- [ ] 메신저 캡처
- [ ] 에너지음료 캔
- [ ] 민재 진정 표정
- [ ] 지우 안심 표정

### 3차 제작

연출 강화:

- [ ] 담임 교사
- [ ] 요약 썸네일
- [ ] 단서 확대 전용 배경
- [ ] 소품 오브젝트

## 7. 최종 정리

사건 1은 최소한 **배경 3장, 캐릭터 4장, 단서 5장**만 확보해도 충분히 구현 가능하다. 이후 표정 변화, 소품, 요약 썸네일을 추가하면서 완성도를 높이는 방식이 가장 효율적이다.
