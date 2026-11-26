# GrimStudio 2.2.3 Performance Pass


## Scope

This release is a focused continuous-stroke optimization on the existing Three.js surface-decal engine. Existing tools, project schema, layers, undo/redo, camera controls, exports, and the head mesh are retained.


## Changes

- Pointer queue frame budget increased (Performance: 10, Balanced: 12, Quality: 16 samples/frame) to reduce accumulated queue lag during sustained dragging. The queue remains bounded and uses coalesced pointer events.
- Preview decal batches increased (Performance: 24, Balanced: 32, Quality: 40 geometries) to lower the frequency of merge/copy/dispose cycles.
- Saved-stroke reconstruction batches increased from 64 to 96 dabs per geometry batch.
- A model registry foundation was added with metadata for the current model. The current head is labeled `Test Model` in its ready status. No UI model selector or additional model assets are introduced.


## Architecture decisions

The application uses Three.js rendering through WebGL and high-performance context preference. This pass does not claim GPU compute painting: decal geometry generation, spatial queries, and geometry merges remain CPU-side JavaScript. Rust/native and WebGPU painting were not integrated because a meaningful migration needs profiling and a changed rendering/storage architecture; introducing a bridge before establishing a bottleneck could add transfer overhead.


## Verification

Static checks and the repository tests should be run with `npm test` after dependencies are installed. The authoring environment does not include a Windows GPU test session, so interactive Windows frame-time, GPU utilization, long-stroke quality, and input-latency measurements are not asserted here. No benchmark figures are fabricated.
