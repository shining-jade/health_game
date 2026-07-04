# Transparent Animal Action Cutouts

This folder contains transparent PNG animal action cutouts for the main published game.

Use files with this pattern in `health_game_publish/index.html`:

```text
assets/type-action-cutouts-transparent/01_squirrel_01_standard_stop.png
...
assets/type-action-cutouts-transparent/08_hamster_03_pause_needed.png
```

Supporting files:

- `*_source_chromakey.png`: original generation source with chroma-key background.
- `*_transparent_sheet.png`: three-pose transparent sheet for each animal.
- `contact_sheet_preview.png`: visual QA preview on a checkerboard background.

If only final runtime files are desired later, keep the numbered cutout PNGs and archive the supporting files after verifying the index.
