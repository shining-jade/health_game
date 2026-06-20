# 조사 장면 구현 완료 체크리스트

대상 장면: `case01_scene03` 책상과 가방 조사

현재 구현 방식은 별도 `#investigationScene` 섹션을 새로 두는 방식이 아니라, 기존 장면 렌더러의 `.scene-visual` 안에 `.scene-hotspot-layer`를 얹는 통합형 구조다. 모바일/PC 공통 장면 UI, 대사 타자 효과, 단서함, 메모장, 사건 패널과 같은 렌더 흐름을 그대로 공유하기 위한 선택이다.

## 1. 기본 구조

- [x] 조사 장면 데이터에 `type: "investigation"` 추가
- [x] 기존 `.scene-visual` 안에 `.scene-hotspot-layer` 추가
- [x] 일반 장면 렌더러에서 조사 장면을 함께 렌더링
- [x] 조사 진행도는 `.scene-progress`와 상단 진행 칩에 표시
- [x] 조사 장면에서도 메모장, 단서함, 사건 패널을 기존 UI와 연동

## 2. 핫스팟 구조

- [x] 핵심 핫스팟: 약 봉투, 메모지, 음료 캔
- [x] 보조 핫스팟: 필통, 물병
- [x] 각 핫스팟에 `id`, `clueId`, `type`, `label`, `foundText` 포함
- [x] `%` 기반 `x`, `y`, `width`, `height` 좌표 사용
- [x] 모바일에서도 같은 좌표 체계 유지

현재 핫스팟 id:

- `hotspot_medicine_bag`
- `hotspot_note`
- `hotspot_energy_drink`
- `hotspot_pencilcase`
- `hotspot_bottle`

## 3. 완료 표시

- [x] 발견 전: 파란 점선 박스
- [x] 발견 후: 초록 실선 박스
- [x] 발견 후: 체크 스탬프 배지 표시
- [x] 발견 후: 라벨에 `확인` 문구 표시
- [x] 발견한 핫스팟을 다시 눌러도 상세 카드 재확인 가능

## 4. 조건부 진행

- [x] `state.investigation[scene.id].foundHotspots` 저장
- [x] `state.investigation[scene.id].foundCoreClues` 저장
- [x] 핵심 단서 3개 중 2개 이상 발견 시 진행 가능
- [x] 보조 핫스팟은 진행 조건에 포함하지 않음
- [x] 조건 충족 전 다음 버튼 비활성화
- [x] 조건 충족 후 다음 버튼 강조
- [x] 진행 문구가 `다음 분석 가능`으로 변경

## 5. 단서 상세 모달

- [x] `#clueDetailModal` 추가
- [x] `#clueDetailImage`, `#clueDetailCategory`, `#clueDetailTitle`, `#clueDetailText` 추가
- [x] `#clueDetailMemoBtn` 추가
- [x] `#closeClueDetailBtn`, `#clueDetailCloseBtn` 추가
- [x] `openClueDetailModal()` 구현
- [x] `closeClueDetailModal()` 구현
- [x] `addActiveClueDetailToMemo()` 구현
- [x] 기존 `alert()` 제거
- [x] 단서함 상세보기와 핫스팟 클릭이 같은 상세 모달 사용

## 6. 메모장/단서함 연동

- [x] 핵심 핫스팟 클릭 시 `state.unlockedClues`에 단서 추가
- [x] 단서 상세 모달에서 메모 추가 가능
- [x] 단서함에는 확보한 단서만 표시
- [x] 현재 장면 관련 단서 표시 유지
- [x] 장면별 `memoHints` 표시 유지

## 7. 조사 완료 후 전환

- [x] `sceneTransitionOverlay` 추가
- [x] `proceedToNextSceneWithTransition()` 구현
- [x] 조사 완료 후 바로 장면 이동하지 않고 분석 전환 카드 표시
- [x] 전환 중 중복 클릭 방지
- [x] `investigation.transition` 데이터로 문구 관리

## 8. 검증 항목

- [x] `node --check assets/data/case01_game_data.js`
- [x] `node tools/validate_case01_assets.js`
- [x] 자산 누락 없음

## 남은 확인 권장 사항

- [ ] 실제 모바일 기기에서 핫스팟 좌표 1~2% 미세 조정
- [ ] 보조 핫스팟용 전용 이미지가 필요할지 추후 판단
- [ ] 다음 에피소드에도 같은 `investigation` 데이터 패턴 재사용
