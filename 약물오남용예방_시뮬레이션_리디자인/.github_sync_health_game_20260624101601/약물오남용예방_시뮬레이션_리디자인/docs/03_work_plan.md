# 작업 순서

## 1순위: 친구사건형 UI 와이어프레임 초안 제작

상태: 상세 초안 작성 완료

목표:

- PC 레이아웃 확정
- 모바일 레이아웃 확정
- 상태창, 사건 패널, 아이템창, 메모장 구조 확정

산출물:

- PC 화면 구성안: `wireframes/01_friend_case_ui_wireframe_brief.md`
- 모바일 화면 구성안: `wireframes/01_friend_case_ui_wireframe_brief.md`
- 공통 컴포넌트 목록: `wireframes/01_friend_case_ui_wireframe_brief.md`

다음 세부 작업:

- UI HTML 구조 명세 작성: `docs/04_ui_html_structure_spec.md`
- 이미지/배경 자산 관리 기준 작성: `docs/05_asset_management_guide.md`
- 실제 HTML 마크업 초안 작성: `index.html`
- 이미지 레이어 반영 프로토타입 노트 작성: `docs/06_image_layer_prototype_notes.md`
- 사건 1 이미지 자산 체크리스트 작성: `docs/07_case01_image_asset_checklist.md`
- 사건 1 이미지 자산 매니페스트 작성: `assets/data/case01_asset_manifest.json`
- 사건 1 비주얼 연출/이미지 프롬프트 작성: `docs/08_case01_visual_direction_and_image_prompts.md`
- 기존 이미지 참고 기반 1차 case01 자산 생성: `tools/create_case01_starter_assets.py`
- imagegen 기반 필수 case01 자산 생성 및 HTML 연결: `docs/09_imagegen_implementation_log.md`
- 캐릭터 이름 태그 UI 추가: `index.html`
- 사건 1 장면-파일 매핑표 작성: `docs/10_case01_scene_file_mapping.md`
- 사건 1 장면 매핑 JSON 작성: `assets/data/case01_scene_mapping.json`
- 6편 옴니버스 구성안 작성: `docs/11_omnibus_episode_plan_and_select_ui.md`
- 에피소드 선택 데이터 작성: `assets/data/episodes.json`
- 첫 화면 에피소드 선택 UI 추가: `index.html`
- 사건 1 JS 장면 데이터 작성: `assets/data/case01_game_data.js`
- JS 데이터 기반 장면 렌더링 구조 작성: `docs/12_js_scene_data_rendering.md`
- 사건 시작 화면 문구 작성
- 단서 획득/메모 추가/활동지 연계 피드백 문구 작성

## 2순위: 에피소드 공통 활동지 템플릿 설계

목표:

- 1~2장 분량 활동지 구성
- 게임 속 메모장과 동일한 사고 구조 유지
- 수업 중 작성 지점과 게임 후 작성 지점 구분

산출물:

- 공통 활동지 템플릿
- 에피소드별 변형 규칙

## 3순위: 시험기간 카페인 사건 1편 상세 스크립트 작성

목표:

- 장면 구성
- NPC 대사
- 선택지
- 단서
- 정답 및 피드백 작성

산출물:

- 에피소드 1 상세 스크립트
- 단서 목록
- 종료 피드백

## 4순위: 육각형 6축 문구와 성장 반영 방식 확정

목표:

- 각 축 설명 확정
- 에피소드별 상승 조건 설계
- 활동지 자기평가와 연결

산출물:

- 성장 지표 정의서
- 에피소드별 역량 반영표
