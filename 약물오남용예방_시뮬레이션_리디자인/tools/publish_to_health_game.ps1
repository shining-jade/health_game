param(
  [string]$RepositoryUrl = "https://github.com/shining-jade/health_game.git",
  [string]$Branch = "main",
  [string]$TargetFolder = "",
  [string]$CommitMessage = "Update redesigned medicine misuse prevention simulation",
  [switch]$ConfirmPush
)

$ErrorActionPreference = "Stop"

$sourceRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
if (-not $TargetFolder) {
  $TargetFolder = Split-Path $sourceRoot -Leaf
}

$cloneRoot = Join-Path $env:TEMP "health_game_codex_publish"
$targetRoot = Join-Path $cloneRoot $TargetFolder

function Assert-SafePath {
  param(
    [Parameter(Mandatory = $true)][string]$Path,
    [Parameter(Mandatory = $true)][string]$ExpectedParent
  )

  $fullPath = [System.IO.Path]::GetFullPath($Path)
  $fullParent = [System.IO.Path]::GetFullPath($ExpectedParent)

  if (-not $fullPath.StartsWith($fullParent, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Unsafe path detected: $fullPath"
  }
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  throw "Git is not installed or is not available in PATH."
}

if (-not (Test-Path $cloneRoot)) {
  git clone $RepositoryUrl $cloneRoot
}

Push-Location $cloneRoot
try {
  git fetch origin
  git checkout $Branch
  git reset --hard "origin/$Branch"

  Assert-SafePath -Path $targetRoot -ExpectedParent $cloneRoot

  if (-not (Test-Path $targetRoot)) {
    New-Item -ItemType Directory -Path $targetRoot | Out-Null
  }

  Get-ChildItem -LiteralPath $targetRoot -Directory -Force -Filter ".github_sync*" | ForEach-Object {
    Assert-SafePath -Path $_.FullName -ExpectedParent $targetRoot
    Remove-Item -LiteralPath $_.FullName -Recurse -Force
  }

  robocopy $sourceRoot $targetRoot /MIR /XD .git .agents .codex .github_sync* | Out-Null
  $robocopyCode = $LASTEXITCODE
  if ($robocopyCode -ge 8) {
    throw "Robocopy failed with exit code $robocopyCode."
  }

  git add $TargetFolder

  $changes = git status --porcelain
  if (-not $changes) {
    Write-Host "No changes to publish."
    exit 0
  }

  Write-Host "Changes ready to publish:"
  git status --short

  if (-not $ConfirmPush) {
    Write-Host ""
    Write-Host "Preview only. Nothing was committed or pushed."
    Write-Host "To publish to GitHub, run this command again with -ConfirmPush."
    exit 0
  }

  git commit -m $CommitMessage
  git push origin $Branch

  Write-Host "Published to:"
  Write-Host "https://shining-jade.github.io/health_game/$TargetFolder/"
}
finally {
  Pop-Location
}
