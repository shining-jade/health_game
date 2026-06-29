# GitHub Pages 반영 방법

이 작업 폴더는 GitHub 저장소 `shining-jade/health_game`의 아래 경로에 게시되어야 합니다.

```text
약물오남용예방_시뮬레이션_리디자인/
```

게시 후 확인 주소는 다음과 같습니다.

```text
https://shining-jade.github.io/health_game/약물오남용예방_시뮬레이션_리디자인/
```

## 게시 스크립트

아래 스크립트는 현재 작업 폴더의 내용을 GitHub 저장소 안의 대상 폴더로 복사한 뒤 `main` 브랜치에 커밋하고 푸시합니다.

```powershell
.\tools\publish_to_health_game.ps1
```

## 자동 배포

저장소 루트의 `.github/workflows/deploy-pages.yml`은 `main` 브랜치에 push가 발생할 때마다 GitHub Pages 배포를 실행합니다.

GitHub 저장소 설정에서 Pages 배포 소스가 `GitHub Actions`로 선택되어 있어야 합니다. 설정 후에는 아래 주소로 배포 결과를 확인할 수 있습니다.

```text
https://shining-jade.github.io/health_game/
```

## 동작 방식

1. 임시 폴더에 `https://github.com/shining-jade/health_game.git` 저장소를 받습니다.
2. 현재 작업 폴더 내용을 `약물오남용예방_시뮬레이션_리디자인/` 폴더에 반영합니다.
3. 변경사항이 있으면 커밋합니다.
4. `main` 브랜치로 푸시합니다.

## 필요 조건

- GitHub에 푸시할 수 있는 Git 인증이 되어 있어야 합니다.
- 로컬 Git에서 `github.com`에 접속할 수 있어야 합니다.
- GitHub Pages가 `main` 브랜치에서 배포되도록 설정되어 있어야 합니다.
