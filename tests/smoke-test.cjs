const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

for (const file of ['src/main.cjs','src/preload.cjs','src/spatial-raycast.mjs','tests/smoke-test.cjs','tests/spatial-raycast-test.cjs']) {
  const result = spawnSync(process.execPath, ['--check', path.join(root, file)], { encoding: 'utf8' });
  assert.equal(result.status, 0, `${file} syntax check failed: ${result.stderr || result.stdout}`);
}
const appSource = read('src/app.js');
const appSyntax = spawnSync(process.execPath, ['--input-type=module','--check'], { input: appSource, encoding: 'utf8' });
assert.equal(appSyntax.status, 0, `src/app.js syntax check failed: ${appSyntax.stderr || appSyntax.stdout}`);

const html = read('src/index.html');
const css = read('src/style.css');
const main = read('src/main.cjs');
const packageJson = JSON.parse(read('package.json'));
assert.equal(packageJson.version, '2.5.2', 'Project version must be 2.5.2');
assert.match(html, /app\.bundle\.js/, 'HTML must load the bundled renderer');
assert.match(packageJson.scripts['build:renderer'], /esbuild.*--bundle.*--format=iife/, 'Renderer must be bundled for Electron file:// runtime');
assert.ok(packageJson.build.files.some(entry => entry.includes('assets/**/*')), 'Builder must include assets');
assert.ok(packageJson.build.extraResources?.some(entry => entry.from === 'assets/models' && entry.to === 'models'), 'Models must be copied to Electron resources via extraResources');
assert.ok(packageJson.scripts['validate:assets'], 'Pre-build asset validation script must exist');
assert.ok(packageJson.scripts.dist.includes('verify-packaged-assets.cjs'), 'Post-build packaged asset verification must run');
assert.match(main, /process\.resourcesPath, 'models'/, 'Packaged asset resolver must use resourcesPath');
assert.match(main, /manifest\.models/, 'Asset paths must be resolved from model manifest');
assert.match(main, /contextIsolation:\s*true/, 'Electron context isolation must remain enabled');
assert.match(main, /nodeIntegration:\s*false/, 'Node integration must remain disabled');
assert.match(main, /model-asset-read/, 'Main process must expose the allowlisted model asset IPC handler');
assert.match(read('src/preload.cjs'), /readModelAsset/, 'Preload must expose the model asset bridge');
assert.match(appSource, /parseHeadModel\(\{objText:objResult\.content,mtlText:mtlResult\.content,modelId:entry\.id\}\)/, 'Renderer should parse actual OBJ/MTL content using the modular model loader');
assert.ok(fs.existsSync(path.join(root,'src','model-loader.mjs')), 'Modular OBJ/MTL loader must be bundled from source');
assert.match(appSource, /modelSwitchBusy/, 'Model switching must guard against concurrent switches');
assert.match(appSource, /disposeModelRoot\(modelRoot\)/, 'Partial failed model loads must clean up model resources');
assert.match(appSource, /Project save failed/, 'Save failures should show a truthful error status');

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'HTML contains duplicate IDs');
for (const id of ['headModelSelect','graphicsQuality','adaptivePerformance','memoryOptimization','stage','viewport','toolGrid','toolFilters','colorPicker','layers','addLayer','duplicateLayer','clearLayer','layerUp','layerDown','undoBtn','redoBtn','saveBtn','openBtn','exportBtn','loadingText','loadingSubtext','retryModel','languageSelect','themeSelect','symmetryToggle','flow','cameraRotateSelect','cameraPanSelect','rotationSensitivity','zoomSensitivity','performanceMode','performanceDiagnosticsToggle','performanceDiagnostics','perfFps','perfRaycast','perfDecal','perfPointer','perfMeshes','perfMemory','resetCameraControls']) {
  assert.ok(ids.includes(id), `Missing UI id: ${id}`);
}

const modelPath = path.join(root,'assets','models','human-head.glb');
assert.ok(fs.existsSync(modelPath), 'Legacy lightweight head model is missing');
for (const model of ['male/model.obj','male/model.mtl','female/model.obj','female/model.mtl','manifest.json']) assert.ok(fs.existsSync(path.join(root,'assets','models',model)), `Missing model asset: ${model}`);
const glb = fs.readFileSync(modelPath);
assert.equal(glb.toString('ascii',0,4),'glTF','GLB magic header missing');
assert.equal(glb.readUInt32LE(4),2,'GLB version must be 2');
assert.equal(glb.readUInt32LE(8),glb.length,'GLB file length mismatch');
const jsonLength = glb.readUInt32LE(12);
assert.equal(glb.readUInt32LE(16),0x4e4f534a,'GLB JSON chunk type mismatch');
const modelJson = JSON.parse(glb.toString('utf8',20,20+jsonLength));
assert.ok(modelJson.meshes?.length,'Model must include mesh geometry');
assert.ok(modelJson.materials?.length,'Model must preserve original materials');
assert.ok(modelJson.images?.length,'Model must retain embedded textures');
const modelHash = crypto.createHash('sha256').update(glb).digest('hex');
assert.equal(modelHash,'1a525e9bf4aeccdd6b13ac3080217901ba1ab05d3a268392b8cf5d844b79577c','Bundled GLB must match the previously supplied model');

// Region restrictions must be completely absent from the runtime and interface.
assert.doesNotMatch(appSource,/regionSettings|isRegionPaintable|faceRegions|classifySurfaceRegion|REGION_CODE|REGION_NAME/,'Region-based paintability logic must be removed');
assert.doesNotMatch(html,/regionSkin|regionEyes|regionHair|regionBrows|paintableRegions|regionNote/,'Region controls must be removed from the UI');
assert.ok(!fs.existsSync(path.join(root,'src','region-classifier.mjs')),'Obsolete region classifier must be removed');

// Performance-critical path: BVH-like uniform-grid traversal avoids full-mesh raycasting.
assert.match(appSource,/import \{ raycastGrid \} from '\.\/spatial-raycast\.mjs'/,'Fast grid raycast module must be used');
assert.match(appSource,/function buildSpatialIndex/,'Spatial index builder must exist');
assert.match(appSource,/faceNormals/,'Triangle normals must be precomputed');
assert.match(appSource,/function getHitAt[\s\S]*?raycastGrid\(/,'Pointer hits must use accelerated grid traversal');
assert.doesNotMatch(appSource,/raycaster\.intersectObjects\(/,'Slow full-mesh raycaster must not be used for paint input');
assert.match(appSource,/candidateFaces:\[\]/,'Candidate face buffer must be reused');
assert.match(appSource,/const PERFORMANCE_PROFILES=\{performance:\{step:\.98,maxInterpolatedHits:1,maxPointerSamples:10,previewBatchSize:24/,'Default painting profile must limit per-frame raycasts');
assert.match(appSource,/pendingPointerSamples\.length>64/,'Pointer sample queue must be bounded');
assert.match(appSource,/function flushStrokePreviewBatch/,'Preview geometry must be batched');
const pointerFlush=appSource.match(/function flushPointerQueue\([\s\S]*?\nfunction cancelActiveInteraction/);
assert.ok(pointerFlush,'Pointer queue handler must exist');
assert.doesNotMatch(pointerFlush[0],/flushStrokePreviewBatch\(\)/,'Preview geometry must not be re-merged unconditionally every animation frame');
assert.match(appSource,/new Float64Array\(96\)/,'Decal clipping must reuse numeric scratch buffers');
assert.match(appSource,/function finishStroke[\s\S]*?meshes:activeStroke\.previewMeshes/,'Finished strokes must reuse preview batches instead of merging them twice');
assert.match(appSource,/function eraseAlongPath/,'Eraser must process a path in one batch');
assert.doesNotMatch(appSource,/eraseAtPoint\(/,'Per-pointer full-layer eraser rebuild must be removed');
assert.match(appSource,/batchSize=96/,'Restored strokes must rebuild in larger bounded geometry batches');
assert.match(appSource,/getPerformanceSnapshot/,'Developer diagnostics must expose measured counters');

// Makeup remains non-destructive and project-safe.
for (const symbol of ['createLayer','makeDecalGeometry','createStrokeMaterial','buildStrokeMesh','cloneStrokeData','eraseAlongPath','storeCurrentLayerSnapshot','validateProject','restoreProject','exportImage']) {
  assert.match(appSource,new RegExp(`\\b${symbol}\\b`),`Missing feature: ${symbol}`);
}
assert.match(appSource,/legacyPaint/,'Legacy UV-based project data must remain loadable');
assert.match(appSource,/model:currentHeadModelId/,'Projects must preserve active head model');
assert.match(appSource,/function switchHeadModel/,'Male/female model switching must exist');
assert.match(read('src/model-loader.mjs'),/new OBJLoader\(\)/,'OBJ head loader must be used');
assert.match(appSource,/updateAdaptiveQuality/,'Adaptive rendering quality controller must exist');
assert.match(appSource,/historyLimit=memoryOptimization\?50:MAX_HISTORY/,'Memory mode must bound undo history generously');
assert.match(appSource,/modelSessions/,'Per-model paint sessions must be preserved');
assert.match(appSource,/cameraRotateButton/,'Explicit camera control must remain implemented');
assert.match(appSource,/themePreference/,'Theme selection must remain implemented');
assert.match(appSource,/language === 'ru'|language==='ru'/,'Russian localization must remain implemented');
assert.match(appSource,/finish:'gloss'/,'Glossy material finish must remain supported');
assert.match(appSource,/mask:'foundation'/,'Foundation must have a dedicated brush mask');
assert.match(appSource,/mask:'blush'/,'Blush must have a dedicated brush mask');
assert.match(appSource,/mask:'contour'/,'Contour must have a dedicated brush mask');
assert.match(appSource,/mask:'shadow'/,'Eyeshadow must have a dedicated brush mask');
assert.match(appSource,/mask:'liner'/,'Eyeliner must have a dedicated brush mask');
assert.match(appSource,/mask:'lipstick'/,'Lipstick must have a dedicated brush mask');
assert.match(appSource,/mask:'gloss'/,'Lip gloss must have a dedicated brush mask');
assert.match(css,/\.performance-diagnostics/,'Performance diagnostics overlay styles are required');
assert.match(html,/id="performanceDiagnostics"/,'Diagnostics overlay must be available in the viewport');
assert.match(packageJson.scripts.test,/spatial-raycast-test/,'Spatial raycast unit tests must run in npm test');

console.log(`GrimStudio 2.5.2 static smoke tests passed. Model ${(glb.length/1024/1024).toFixed(2)} MiB; SHA-256 ${modelHash}`);
