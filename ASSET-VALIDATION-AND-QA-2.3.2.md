# GrimStudio 2.3.2 — Asset Validation & QA Report

## Source archive inspected
GrimStudio 2.3.1 source ZIP was extracted and inspected. The actual Male and Female OBJ files were present in `assets/models/`, along with their matching MTL files. Their original MTL files reference BMP diffuse textures that are absent from this archive.


## Changes
- Added `src/model-loader.mjs` as a focused OBJ/MTL integration module.
- Renderer now calls the modular parser on the actual OBJ and MTL text obtained via the existing allowlisted IPC.
- Retains actual OBJ geometry; no primitive/placeholder geometry is used.
- Removes missing `map_Kd` references from parsed MTL input and applies generated subtle fallback diffuse textures to materials without maps.
- Validates meshes have position data, normals are generated when absent, and bounds are finite/non-zero.
- Adds material/model diagnostic stats and warns for missing optional diffuse textures.
- Added `tests/model-assets-test.cjs` to validate model files, OBJ vertices/UVs/faces, material declarations, and material references.
- Updated package/app title/version to 2.3.2 and docs.


## Asset inspection (actual files)
| Model | Vertices | UVs | Faces | Triangles | Materials |
|---|---:|---:|---:|---:|---|
| Male Head | 12,466 | 12,608 | 12,410 | 24,820 | defaultMat |
| Female Head | 12,466 | 12,608 | 12,410 | 24,820 | defaultMat |

Both OBJ models contain UV coordinates and one declared material. The original diffuse BMP textures are missing (`Male Average Head.bmp`, `Female Average Head.bmp`); these are handled as optional, and a renderer-created fallback texture is used.


## Tests performed
- Node syntax checks: `main.cjs`, `preload.cjs`, `model-loader.mjs`, and `app.js` — passed.
- Static smoke test — passed.
- Spatial grid raycast unit tests — passed.
- OBJ/MTL integrity test for both models — passed.


## Not tested in this environment
- Electron renderer/WebGL runtime visual validation.
- Actual model switching and painting in a live window.
- Windows NSIS installer and portable build.
- Extended 5-minute painting/resource-use test.

No claim is made that the above untested runtime/packaging checks passed.
