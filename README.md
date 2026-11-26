# GrimStudio 2.5.2

GrimStudio is an Electron desktop 3D makeup and face-paint editor. This release adds a real-time lighting studio (color temperature, light direction, real-life presets), working blend tools (blur, smudge, blender), a rebuilt eraser, lit brush overlays that preserve facial shading, live brush previews and shape presets, and a fully rewritten professional interface with custom vector icons.

## Model assets

- `assets/models/manifest.json` describes the two heads.
- `assets/models/male/model.obj` and `model.mtl` are the Male Head assets.
- `assets/models/female/model.obj` and `model.mtl` are the Female Head assets.
- Model files are packaged as Electron `extraResources` to `resources/models`, not relying on the app's working directory or ASAR virtual paths.
- Original referenced BMP diffuse maps are absent from the provided 2.3.2 archive; fallback texture generation remains in the loader.

## Build

Use Node.js 20 or newer on Windows. Run `npm install`, then `npm test`, then `npm run dist`. The build runs model asset validation before packaging and checks `dist/win-unpacked/resources/models` after electron-builder completes. Missing required models/materials fail validation.

## Distribution

electron-builder is configured for NSIS installer and portable targets. Build output and successful packaging must be verified on Windows; this source-only environment does not claim a Windows installer was produced.

## Known verification limits

Static asset and source checks can be run from this project. Visual Electron/WebGL checks, installer launch checks, and extended paint/stability tests require a Windows runtime and are not claimed unless performed.
