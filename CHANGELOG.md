# GrimStudio 2.5.2 — Eraser Rework, Light Source Gizmo & New App Icon

- The Smudge tool was removed completely (tool, icon, stamp mask, stroke mode and its plumbing); the blend category now contains Blur, Blender and Eraser.
- Eraser rework, second pass: fixed the flicker — the data pass no longer removes meshes; updated stroke objects inherit the old meshes, and the scheduled rebuild disposes stale geometry and builds fresh meshes in one synchronous task, so no frame can render a "stroke missing" state. Fixed missed dabs: erase distance is now computed directly against the path segments (the old spatial bucket granularity could miss dabs with large radii), and the code is simpler for it.
- New light-source indicator: a viewport button toggles a glowing marker (with halo and a direction line from the model center) drawn on top of the scene, so the exact key-light position is visible even behind the head. The state persists in settings.
- Finer light tuning: separate Fill, Rim and Ambient intensity sliders (0–200%, ambient 0–150%) in addition to the key light; all ten real-life presets now define their own fill/rim/ambient balance. Older saved settings and projects fall back to the previous brightness.
- New application icon: a minimalist brass makeup mask on a dark rounded square, generated as a multi-size ICO (16–256 px) plus a 256 px PNG by `scripts/generate-app-icon.cjs`; the unused clown icon was removed.
- Git: the project history now starts at this release; tag `v2.5.1` preserves the pre-change baseline for rollback.

## GrimStudio 2.5.1 — Continuous Eraser, Live Brush Cursor & Accent Themes

- The eraser now truly supports press-and-drag: every pointer sample erases along the segment between the previous and current surface position, so holding the button and sweeping erases continuously with no gating, and a single press erases immediately. Affected strokes rebuild once per animation frame (untouched strokes are skipped via an allocation-free early-out), and layer thumbnails refresh once at the end of the drag instead of on every pass.
- Smudge rework: the movement delta is projected onto the surface tangent plane and direction-smoothed across samples, eliminating jitter tears; displacement strength is capped relative to the brush reach; touched strokes rebuild every frame for smooth live feedback.
- Brush cursor rework: the on-model cursor now previews the tool's real stamp footprint (the same cached stamp texture, tinted with the pigment — red tint for the eraser) and follows the pointer during painting, not only while idle. A thin dark ring gives exact size/position reading; the mirrored twin follows symmetry. The cursor automatically refreshes when tool, shape preset, softness or pigment changes.
- New appearance setting: a selectable workspace accent color — eight curated presets plus a custom color picker and a one-click reset. Derived shades (soft fill, border lines, contrast text on accent buttons) are computed from the chosen color, so every control stays readable in both dark and light themes.
- Code cleanup: removed dead sampler stub and obsolete erase-point recorder, inline stroke color assignment, unified cursor geometry handling (one decal vertex buffer shared by ring and stamp layers).
- Internal version strings unified at 2.5.1.

## GrimStudio 2.5.0 — Lighting Studio, Blend Tools & Refined Workspace

- Versioning overhaul: package, window title, HTML title, build script and static tests now all agree on 2.5.0. The window title is now derived from `app.getVersion()` at runtime, so the title bar can never show a stale build number again.
- New Lighting studio: color temperature (2200–9500 K), key-light direction (azimuth + elevation) and intensity are directly adjustable, with ten real-life lighting presets (studio portrait, vanity mirror, overcast daylight, direct sun, golden hour, sunset, moonlight, backstage, candlelight, ring light). Lighting is persisted in settings and saved projects.
- Blur, Smudge and Blender actually work now: Blur repaints the local averaged pigment with a feathered veil, Smudge physically displaces nearby paint dabs along the stroke (a real surface smear, rebuilt live), and Blender mixes the local average with the active pigment. Paint dabs now carry per-dab colors, so one stroke can blend many tones.
- Eyedropper now samples the visually composited color: it blends overlapping dab alphas in layer order instead of returning only the single nearest dab color, so mixed/overlapping paint can be picked.
- Eraser rework: erase reach follows the full brush path as segment distance (no more dab-center-only checks), strokes rebuild incrementally during the drag so erased paint disappears immediately, the normal-alignment gate was removed, and mirrored erasing follows the symmetry toggle.
- Brush shape fixes: every tool mask was recalibrated toward compact, near-circular footprints (max aspect ratio 1.35) with smoother falloffs, eliminating the ragged edges elongated stamps produced.
- Paint overlays are now lit (Phong shading with smoothly interpolated normals matching the underlying skin), so painted areas keep facial shading and features stay visible — flattening away the face shadows when covering large areas is fixed.
- Brush preview: a live 2D stamp preview shows the exact dab footprint, softness, opacity and pigment before painting, plus an on-model cursor that projects the real brush footprint (and its mirror twin) onto the surface.
- Brush shape presets: Round Soft, Round Hard, Flat, Airbrush, Speckle, Porous, Fine Hair, Star and Rosette can override any tool's default stamp.
- A new project now resets the model to face forward.
- Full interface rewrite: restrained professional dark/light design system with custom minimalist vector icons (no emoji anywhere), tighter typography and consistent spacing.

## GrimStudio 2.4.0 — Professional Workspace, Realistic Brushes & Clown Icon

- The reset view button was replaced by a dedicated Back view button; front, left, right and back views are all one click (or key 1–4) away.
- The interface was decluttered: all camera, performance and reference settings moved into a dedicated Settings dialog (⚙ button or Esc to close). The main panels now hold only tools, brush settings, model, views, color and layers. Tab toggles a distraction-free zen mode.
- Tool settings now behave like real makeup: opacity alone defines final stroke visibility, edge softness drives the falloff of every tool mask (not just three), and flow controls how fast pigment builds up along the stroke via dab density.
- Tool alphas were recalibrated per tool for realistic coverage (airy airbrush/powder, solid liner and pencil, buildable foundation and blush).
- Undo/redo history now keeps 100 steps (50 in memory-optimization mode) instead of 12.
- New app icon: a friendly clown face drawn and bundled as a multi-size ICO (16/32/48/256).
- Extended the default palette with real cosmetic shade families: foundations ivory→espresso, blushes, lip shades, eyeshadow neutrals and classic stage paints.
- Camera can now zoom much closer to the model (minimum distance lowered from 2.4 to 1.2 world units).
- The layer list now shows a live thumbnail preview per layer plus a stroke count, making it obvious what lives on which layer.
- Skin tone selection for the standard head models: eight presets from porcelain to rich, applied as a material tint, persisted in settings and project files.
- Saved projects default to Documents\GrimStudio Projects and PNG exports default to Pictures\GrimStudio; both dialogs still allow choosing any folder.
- New shortcuts: B/E/I tools, M symmetry, G grid, L new layer, 1–4 views, +/− zoom, Tab zen mode, Ctrl+Shift+Z redo, Ctrl+E export.

## GrimStudio 2.3.5 — Camera, Views & Brush Behavior Fix

- Front/left/right/reset view buttons now show the correct sides of the head: the normalized model faces -Z, so the front view uses a PI orbit yaw (previously "Front" displayed the back of the head). The app also starts facing the model.
- Camera panning actually works now: it previously moved the model group together with the camera, which made every pan mode a visual no-op. The model stays fixed; only the camera and its look-at target move.
- The "Shift + right mouse" pan mode is no longer silently forced to "Disabled" when rotation uses the right mouse button — the Shift key disambiguates the two gestures. Only a genuine middle-button collision still disables pan.
- Brush size is now fixed in model space: one slider step covers the same physical patch of skin at any zoom level, instead of rescaling with camera distance. Eraser reach and dab spacing follow the same radius.

## GrimStudio 2.3.4 — Renderer Responsiveness & Input Latency Update

- Painting preview now streams into a single pre-allocated dynamic mesh per stroke (drawRange updates each frame), so brush strokes appear immediately instead of only after 24 dabs or on mouse release, and a stroke costs one draw call instead of one merged mesh per batch.
- Orbit/camera world matrices are now rebuilt only when a transform actually changes; pointer raycasts no longer force a full scene traversal per sample.
- Project serialization (autosave, save) no longer deep-clones every dab including six undo-history copies and the second head's session; runtime-only fields are stripped by a JSON replacer, cutting multi-hundred-millisecond UI stalls on painted projects.
- Autosave defers itself while a stroke is active so serialization can never interleave with painting.
- Restoring projects and rebuilding layers (undo, clear, model switch) now build stroke geometry incrementally with UI yields instead of one long blocking pass; a build token cancels stale rebuilds if the layer changes underneath.
- Disabled `preserveDrawingBuffer`; PNG export already re-renders immediately before `toDataURL`, and the preserved backbuffer cost a framebuffer copy every frame.
- Head models remain 12,410 triangles each; painting smoothness is dominated by decal resolution, not model tessellation, so polygon counts were intentionally left unchanged.

## GrimStudio 2.3.3 — Asset Loading Fix & Professional UI Update

- Fixed packaged asset resolution: development reads `assets/models`; packaged builds read Electron `resources/models`.
- Added explicit allowlisted model-to-resource path mapping in main process IPC.
- Electron Builder now copies models via `extraResources` to a stable external resource directory.
- Removed reliance on ASAR-unpacked model paths for model reads.
- Added `assets/models/manifest.json` and normalized male/female folder layout.
- Updated OBJ `mtllib` names to match local material files.
- Added pre-build asset validation and post-build packaged-resource verification.
- Improved model-load error diagnostics to include resolved path, packaged state, and underlying filesystem cause.
- Improved model switching failure handling to preserve the currently displayed model and active state instead of unnecessary reload rollback.
- Refreshed interface styling with a restrained dark creative-tool palette, improved spacing, more compact panels, and refined controls.
- Preserved existing painting, layers, project, export, and interaction features.

## Known limitations

- Original BMP diffuse textures are not present in the source archive; fallback material textures remain active.
- Electron packaged runtime, Windows installer, portable app, and visual UI tests still need Windows execution.
