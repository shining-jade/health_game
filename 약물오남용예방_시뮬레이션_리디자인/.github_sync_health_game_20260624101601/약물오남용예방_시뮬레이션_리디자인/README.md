# 약물오남용예방 시뮬레이션 리디자인

이 폴더는 기존 육성 시뮬레이션형 약물오남용예방 콘텐츠를 **친구 사건형 추리 에피소드** 구조로 확장하기 위한 리디자인 작업 공간이다.

## 프로젝트 핵심 방향

기존 구조는 주인공 자신의 카페인 섭취와 약물 오남용을 관리하는 육성 시뮬레이션 성격이 강했다. 리디자인 방향은 여기에 친구 사건형 추리 에피소드를 결합하여, 플레이어가 주변 학생의 이상 징후와 오남용 원인을 관찰, 추론, 대응하는 구조로 확장하는 것이다.

전체 경험은 다음 흐름을 지향한다.

1. 평상시: 육성 시뮬레이션 기반 진행
2. 사건 발생 시: 친구 사건형 추리 에피소드 진행
3. 에피소드 종료 후: 학습 정리, 성장 피드백, 오프라인 활동지 연계

## 설계 한 문장

게임은 사건을 흥미롭게 경험하게 하고, 메모장과 활동지는 그 경험을 학습으로 굳히게 하며, 상태창과 성장 시스템은 내가 어떤 건강 판단 역량을 키워가고 있는지 보여준다.

## 폴더 구조

- `index.html`: 친구사건형 UI 반응형 HTML 프로토타입
- `docs/`: 프로젝트 방향, 작업 순서, 시스템 설계 문서
- `wireframes/`: PC/모바일 UI 와이어프레임 기획
- `worksheets/`: 오프라인 활동지 템플릿
- `episodes/`: 에피소드별 상세 스크립트와 단서 설계
- `assets/`: 배경, 캐릭터, 단서, UI 아이콘, 오디오, 데이터 자산

## 다음 작업 순서

1. 친구사건형 UI 와이어프레임 초안 제작
2. 에피소드 공통 활동지 템플릿 설계
3. 시험기간 카페인 사건 1편 상세 스크립트 작성
4. 육각형 6축 문구와 성장 반영 방식 확정

## 구현 참고 문서

- `docs/04_ui_html_structure_spec.md`: HTML/CSS 구현용 UI 구조 명세
- `docs/05_asset_management_guide.md`: 이미지/배경 자산 관리 기준
- `docs/06_image_layer_prototype_notes.md`: 이미지 레이어 반영 프로토타입 노트
- `docs/07_case01_image_asset_checklist.md`: 사건 1 장면별 이미지 자산 체크리스트
- `docs/08_case01_visual_direction_and_image_prompts.md`: 사건 1 비주얼 연출 설명 및 이미지 생성 프롬프트
- `docs/09_imagegen_implementation_log.md`: imagegen 생성 자산 구현 기록
- `docs/10_case01_scene_file_mapping.md`: 사건 1 장면-파일 매핑표 및 캐릭터 이름 표시 규칙
- `docs/11_omnibus_episode_plan_and_select_ui.md`: 6편 옴니버스 구성안 및 에피소드 선택 UI
- `docs/12_js_scene_data_rendering.md`: JS 데이터 기반 장면 렌더링 구조
- `assets/data/case01_asset_manifest.json`: 사건 1 이미지 자산 매니페스트
- `assets/data/case01_scene_mapping.json`: 사건 1 장면별 배경/캐릭터/단서 매핑 데이터
- `assets/data/episodes.json`: 6편 에피소드 선택 화면 데이터
- `assets/data/case01_game_data.js`: 사건 1 실제 장면 렌더링 데이터
