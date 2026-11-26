# GrimStudio 2.3.1 — Bug Audit & Test Report

## Confirmed changes

1. **Local model loading reliability:** the renderer previously used Three.js `FileLoader`/`loadAsync()` against relative local `file://` asset URLs. Renderer-side fetch access to local files can be restricted or behave differently in packaged Electron builds. The new flow reads a strict allowlist of four OBJ/MTL filenames through IPC in the main process and passes the text to `OBJLoader.parse()` and `MTLLoader.parse()`.
2. **Model switching:** added a switch-in-progress guard and disables the selector during the operation. On destination model-load failure, the prior model's paint session is restored and reloaded.
3. **Failure cleanup:** partial geometry/material state from a failed model load is disposed; mesh and spatial-index arrays are cleared.
4. **Save messaging:** save exceptions no longer display a misleading success message.
5. **IPC sender validation:** sender validation now checks that the caller is the app's local renderer page, not merely any `file://` page.
6. **Versioning:** package version, HTML title, window title, changelog, README, and static test expectations updated to 2.3.1.

## Asset notes

- Both supplied OBJ and MTL assets remain included unchanged.
- Their MTLs reference diffuse BMP files that are absent from the source archive. The loader strips those optional `map_Kd` lines and uses the existing neutral material workflow; geometry loading does not depend on those missing maps.
- OBJ SHA-256: Male `a620ea72aacc6d9da2a953382526e971d1db1d819388b6a963cb3516fa730268`; Female `1c1555e8d0e66c19450ef073715f258705a502373a09eac3dc5cd6452b5a9bb2`.

## Tests executed

- `node --check src/main.cjs` — passed.
- `node --check src/preload.cjs` — passed.
- `node --input-type=module --check < src/app.js` — passed.
- `node --check tests/smoke-test.cjs` — passed.
- `node --check tests/spatial-raycast-test.cjs` — passed.
- `npm run test:static` — passed: static smoke tests and spatial-grid raycast suite.

## Not verified in this environment

- Renderer bundling: blocked because `node_modules` is absent (`esbuild: not found`).
- Electron startup and IPC runtime integration: not run (Electron dependencies unavailable).
- Packaged Windows installer and portable build: not run (dependencies unavailable and this is not a Windows build environment).
- Interactive Male/Female load and repeated switching: code-level/static checks only; runtime not executed.
- Painting, project round-trip, autosave/recovery, PNG export, GPU/VRAM/RAM measurement, FPS, and five-minute stability session: not run.

## Known remaining risks

- A runtime test is still needed on Windows for packaged resource access and real model loading.
- Missing BMP textures mean the supplied heads use neutral material surfaces rather than their original diffuse appearance.
- Static tests cannot guarantee compatibility with every integrated GPU or driver.

No runtime or packaging success is claimed beyond the checks listed above.
