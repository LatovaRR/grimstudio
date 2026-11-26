# GrimStudio 2.3.3 — Bug Audit & Testing Report

## Confirmed issue and fix
The previous main process looked up model files in `app.getAppPath()/assets/models` in both modes. This is unreliable for a packaged build when assets are unpacked or copied outside the ASAR virtual directory. The build configuration did not explicitly copy model assets into a stable Electron resources directory.

## Changes made
- Relocated the real model assets into `assets/models/male/` and `assets/models/female/`.
- OBJ material-library references were normalized to the local `model.mtl` names.
- Added `assets/models/manifest.json`, used by the main-process allowlisted asset reader.
- Development resolver reads from source `assets/models`; packaged resolver reads from `process.resourcesPath/models`.
- Electron Builder `extraResources` explicitly copies `assets/models` to `resources/models`. Model files are excluded from app ASAR files to avoid duplicate copies.
- Added pre-build model asset checks and post-build packaged-output checks. Build script fails when assets are missing.
- Model switching now preserves the old model when a target load fails and reports failure without obscuring the active viewport.
- Updated UI styling to a tighter dark creative-workspace design system. Existing panel structure and painting controls are retained; this is a visual refinement, not a complete component rewrite.

## Asset validation
- Male OBJ: 1,209,963 bytes; 12,466 vertices; 12,608 UV coordinates; 12,410 faces; 24,820 triangulated triangles.
- Female OBJ: 1,310,825 bytes; 12,466 vertices; 12,608 UV coordinates; 12,410 faces; 24,820 triangulated triangles.
- Both MTL files declare `defaultMat`, which matches the OBJ material usage.
- MTL references BMP maps `Male Average Head.bmp` and `Female Average Head.bmp`; these source texture files are not present. The existing loader uses its generated fallback texture for these missing optional maps.

## Tests passed
- `node --check` for main, preload, renderer source, and model loader.
- `npm run validate:assets` pre-build validation.
- Static smoke tests.
- Spatial grid raycast tests.
- OBJ/MTL integrity checks for both models.

## Tests not completed
- Renderer bundle build: attempted, blocked because `esbuild` is not installed (`esbuild: not found`).
- Electron/WebGL visual startup and actual model load in a live window.
- Windows NSIS installer and portable EXE build.
- Post-build asset verification against real packaged output.
- Long-duration painting and memory/GPU profiling.

No Windows executable is included or claimed to have been built. The source has packaging configuration and validation scripts, but production packaging must still be run in a Windows/Node environment with dependencies installed.
