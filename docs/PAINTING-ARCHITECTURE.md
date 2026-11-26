# GrimStudio 2.2.2 — Painting Architecture (baseline)

## Source model is read-only

The supplied `assets/models/human-head.glb` remains the visual base. The new stroke pipeline does not write into its original UV textures, replace base-color images, mutate material maps, or change model geometry.

## Surface decal pipeline

A pointer position is converted to a ray against the loaded model. The closest visible triangle intersection is found through a uniform spatial grid built when the model loads. The grid uses DDA traversal, so pointer ray queries test only triangles in the crossed cells instead of scanning the full mesh on every sample.

The mesh's transformed vertex coordinates and triangle normals are precomputed once. For each dab, a local tangent frame is constructed from its surface normal and stroke angle. Nearby triangles are queried through the spatial grid, transformed into the decal's local frame, and clipped against the projector volume using reusable numeric scratch buffers. The clipped geometry receives a per-dab UV mapping for the brush stamp and is placed in the active makeup layer.

This avoids relying on mirrored or overlapping UV islands from the source model. The brush projection remains surface-attached and is restricted by visible-hit selection and surface-normal filtering, not by semantic face-region labels.

## No region-based restrictions

Version 2.2.2 removes skin/eye/hair/eyebrow region classification and all region-based paintability toggles. Any valid visible surface on the model can receive makeup. Normal raycast visibility checks remain active to avoid painting through the head onto hidden geometry.

## Stroke batching and memory behavior

Pointer samples are collected from coalesced pointer events and processed through a bounded animation-frame queue. The Performance profile limits intermediate raycasts. Decal geometry is accumulated in bounded batches and merged when a batch threshold is reached or the stroke ends, rather than forcing a preview mesh update on every animation frame.

Committed strokes reuse the preview batch meshes. Reconstructed strokes are generated in larger bounded batches. Temporary clip polygon points use reusable numeric buffers, reducing per-triangle JavaScript object allocation.

Eraser movement is recorded as a path during pointer interaction. On release, a spatial bucket lookup identifies affected dabs and rebuilds only changed strokes. This avoids repeated full-layer eraser rebuilds on each pointer sample.

## Project storage and compatibility

Version 4 `.grim` projects store each stroke as model-local dab records: mesh index, local position, local normal, radius, aspect ratio, and angle, along with tool, color, opacity, softness, and flow. The mesh geometry for a stroke is reconstructed against the bundled model when opening a project. Each visible layer is rebuilt independently.

Older UV-painted projects remain loadable through a separate compatibility overlay. New strokes use the surface-decal engine. Existing legacy paint may still show UV artifacts that were already present in the original project; the new engine does not rewrite those images.

## Brush tools and known limitations

Tools use differentiated stamp masks, footprint proportions, pigment strengths, and finish materials. However, not every correction operation is a full raster-pixel filter yet:

- Blur and Blender currently create soft overlay/blending approximations, not full composited-pixel filters.
- Smudge uses a directional nearby-pigment approximation, not a full pixel-transport solver.
- Eraser removes nearby stored dabs from the selected layer; it is not yet a continuous per-pixel alpha eraser.
- Mascara and eyebrow strokes use stylized directional stamp patterns rather than physically simulated individual fibers.

## 2.5.0 updates

- Paint dabs now carry per-dab pigment colors (linear-space RGB plus a CSS fallback string), so a single stroke can blend many tones. Decal geometry gains a `color` attribute and all paint materials use `vertexColors`.
- Paint overlays use lit `MeshPhongMaterial`/`MeshPhysicalMaterial` shading. Decal normals are smoothly interpolated from the underlying mesh's vertex normals (stored in the spatial index), so strokes shade exactly like the skin beneath them and facial shadows survive large painted areas.
- Blur repaints the local averaged pigment (sampled by the composited sampler) with a feathered veil; Blender mixes that average with the active pigment; Smudge physically displaces nearby dabs along the stroke direction, replacing affected stroke objects immutably so undo history stays valid.
- The eyedropper and the blend tools share one composited sampler (`samplePigment`): dabs are weighted by proximity, stroke alpha, tool alpha and layer opacity, returning the perceived mixed color.
- The eraser erases by point-to-segment distance along the brush path (optionally mirrored), rebuilds only touched strokes, and erases incrementally during the drag.
- Lighting is a first-class system: color temperature (Kelvin → linear RGB via the Tanner Helland approximation), key-light azimuth/elevation, intensity, and ten real-life presets drive the hemisphere/key/fill/rim lights.
- Projects store `version: 5` plus the lighting state and brush shape override; older projects load unchanged (dabs without a color fall back to the stroke color).

## 2.5.1 updates

- The eraser is fully continuous: each pointer sample erases along the segment between the previous and current surface positions (segment-distance test, optionally mirrored), with no span gating, so press-and-drag and single presses both work instantly. `eraseAlongPath` is now a pure data pass — affected strokes are recorded into a touched map and rebuilt once per animation frame; unaffected strokes are skipped through an allocation-free early-out scan, and layer thumbnails sync once per stroke instead of per pass.- Smudge projects its movement delta onto the surface tangent plane and smooths the direction across samples (jitter-proof), caps displacement relative to the brush reach, and rebuilds touched strokes every animation frame.
- The on-model brush cursor renders the tool's actual stamp texture (tinted pigment, red tint for the eraser) plus a thin dark ring, shares one decal vertex buffer between both layers, and follows the pointer during painting via the pointer-queue flush. It auto-refreshes on tool/shape/softness/pigment changes.
- Appearance: user-selectable accent color (8 presets + custom picker + reset) drives CSS custom properties including derived soft fill, border line and contrast text shades; the accent persists in settings.

These limitations must not be represented as professional pixel-level equivalents.

## Performance diagnostics

Use the Performance diagnostics button in the viewport to inspect measured FPS, average raycast/decal/pointer timings, overlay mesh count, and JavaScript heap size where Chromium exposes it. Diagnostic counters reset at each display interval. Measurements should be taken on the target Windows GPU; the authoring environment's static tests do not establish a real GPU frame-rate improvement.

## Camera and pointer interaction

The viewport uses one active pointer state: `idle`, `paint`, `rotate`, or `pan`. Left mouse starts painting only after a valid visible surface hit. Right mouse is the default held rotation gesture; middle mouse is the default held pan gesture. Pointer release/cancel, lost pointer capture, window blur, and document visibility changes clear the interaction state.

## 2.5.2 updates

- The Smudge tool was removed entirely (tool entry, icon, 'smear' stamp mask, stroke mode, smudge displacement engine).
- Eraser, second rework: eraseAlongPath no longer removes meshes during the data pass. Updated stroke objects inherit the stale meshes; the rAF rebuild disposes and rebuilds them synchronously, eliminating the 'stroke missing' frame that caused flicker. Segment distance is computed directly per dab (the erase path per sample is one or two segments, so spatial bucketing is unnecessary and its cell granularity could miss large-radius dabs).
- Lighting state gains fill, rim and ambient factors (unitless), set independently by sliders and by every preset; the light-source gizmo (marker + halo + direction line, depth test off) visualizes the key light position and persists across sessions.
- The application icon is generated from the in-app makeup-mask mark by scripts/generate-app-icon.cjs (Electron draws canvas paths at 16-256 px and assembles a PNG-compressed ICO).
