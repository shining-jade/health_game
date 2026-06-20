# Assets

이 폴더는 리디자인 프로젝트의 이미지, 오디오, 데이터 자산을 관리한다.

## 기본 구조

```text
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
      /panels
    /thumbnails
    /placeholders
  /audio
  /data
```

## 사용 원칙

- 배경은 `.webp`를 우선 사용한다.
- 캐릭터/오브젝트는 `.webp` 또는 투명 배경 `.png`를 사용한다.
- UI 아이콘은 `.svg`를 우선 사용한다.
- 사건 전용 자산은 `case01`, `case02`처럼 사건 ID 폴더에 둔다.
- 반복 사용 자산은 `common` 폴더에 둔다.
- 실제 이미지가 없을 때는 `images/placeholders` 또는 CSS 라벨 박스를 사용한다.

자세한 기준은 `docs/05_asset_management_guide.md`를 따른다.

