# Imagegen 구현 기록

`$imagegen` 스킬을 사용해 사건 1의 최소 구현 자산을 생성하고 `index.html`에 연결했다.

## 생성 방식

- 배경/단서: built-in `image_gen`으로 생성 후 `.webp` 변환
- 캐릭터: built-in `image_gen`으로 크로마키 배경 생성 후 `remove_chroma_key.py`로 투명 배경 처리, `.webp` 변환
- 원본 생성 이미지는 `C:\Users\KYUNGMIN\.codex\generated_images\019ee323-3837-7aa1-abad-10a51f09eac1`에 남겨두었다.
- 프로젝트 사용본은 `assets/images/.../case01` 아래에 `_imagegen.webp` 이름으로 저장했다.

## 생성 결과 확인

확인용 시트:

- `docs/case01_imagegen_asset_sheet.jpg`

## HTML 적용 상태

`index.html`은 현재 장면 1 프로토타입과 단서함에 다음 `_imagegen` 자산을 사용한다.

### 현재 화면에 직접 연결된 배경

- `assets/images/backgrounds/case01/bg_case01_scene01_classroom_imagegen.webp`

### 현재 화면에 직접 연결된 캐릭터

- `assets/images/characters/case01/npc_minjae_pale_imagegen.webp`
- `assets/images/characters/case01/npc_jiwoo_worried_imagegen.webp`

### 현재 단서함에 직접 연결된 단서

- `assets/images/clues/case01/clue_case01_receipt_imagegen.webp`
- `assets/images/clues/case01/clue_case01_medicine_bag_imagegen.webp`
- `assets/images/clues/case01/clue_case01_note_imagegen.webp`
- `assets/images/clues/case01/clue_case01_chat_capture_imagegen.webp`
- `assets/images/clues/case01/clue_case01_energy_drink_imagegen.webp`

### 생성 완료, 이후 장면 전환에 연결할 자산

- `assets/images/backgrounds/case01/bg_case01_scene02_desk_imagegen.webp`
- `assets/images/backgrounds/case01/bg_case01_scene04_healthroom_imagegen.webp`
- `assets/images/characters/case01/npc_nurse_default_imagegen.webp`
- `assets/images/characters/case01/npc_minjae_relieved_imagegen.webp`

## 품질 메모

- 교실 배경: 캐릭터 배치용 여백이 충분하고 장면 도입에 적합하다.
- 책상/가방 조사 배경: 단서 클릭 포인트가 명확하다.
- 보건실 배경: 안정적이고 차분한 정리 장면에 적합하다.
- 캐릭터 4종: 투명 배경 처리가 완료되어 장면 위에 배치 가능하다.
- 단서 5종: 메모지, 영수증, 메신저 캡처의 주요 텍스트가 읽히는 편이다.

## 남은 선택 자산

필수 세트는 완료되었고, 다음은 선택/확장 자산이다.

- `npc_teacher_concerned_imagegen.webp`
- `npc_jiwoo_relieved_imagegen.webp`
- `bg_case01_scene03_clueview_imagegen.webp`
- `thumb_case01_imagegen.webp`
- `clue_case01_water_bottle_imagegen.webp`
- `clue_case01_pencil_drop_imagegen.webp`
