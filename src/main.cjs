const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const os = require('os');
const { fileURLToPath } = require('url');
const fs = require('fs');
const fsp = fs.promises;
const MAX_PROJECT_BYTES = 220 * 1024 * 1024;
const AUTOSAVE_FILE = 'grimstudio-autosave.json';

function safeSender(event) {
  try {
    const frameUrl = new URL(event.senderFrame?.url || '');
    return frameUrl.protocol === 'file:' && path.resolve(fileURLToPath(frameUrl)) === path.resolve(__dirname, 'index.html');
  } catch { return false; }
}
async function atomicWrite(filePath, content) {
  const tmp = `${filePath}.${process.pid}.tmp`;
  await fsp.writeFile(tmp, content);
  await fsp.rename(tmp, filePath);
}
function createWindow() {
  const win = new BrowserWindow({
    width: 1500, height: 950, minWidth: 1080, minHeight: 720,
    backgroundColor: '#101116', title: `GrimStudio ${app.getVersion()}`,
    icon: path.join(__dirname, '..', 'assets', 'app-icon.ico'), autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true, nodeIntegration: false, sandbox: true
    }
  });
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  // The application is fully local; prevent unexpected navigation away from its UI.
  win.webContents.on('will-navigate', (event) => event.preventDefault());
  win.webContents.on('render-process-gone', (_event, details) => {
    console.error('GrimStudio renderer process exited:', details);
  });
  win.loadFile(path.join(__dirname, 'index.html')).catch((error) => {
    console.error('Could not load GrimStudio UI:', error);
  });
  if (process.argv.includes('--grim-selftest')) runSelfTest(win);
  if (process.argv.includes('--grim-capture')) runCapture(win);
}
// Screenshot automation for the README: a clean workspace, a painted makeup
// demo, and the settings dialog. Only runs with --grim-capture <nothing>.
function runCapture(win) {
  const timeout = setTimeout(() => { console.error('[capture] TIMEOUT'); app.exit(2); }, 150000);
  const outDir = path.join(__dirname, '..', 'docs');
  const capture = async (name) => {
    const image = await win.webContents.capturePage();
    fs.writeFileSync(path.join(outDir, name), image.toPNG());
    console.log('[capture] saved', name);
  };
  win.webContents.once('did-finish-load', () => {
    setTimeout(() => {
      win.webContents.executeJavaScript(`(async () => {
        const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
        for(let i=0;i<120;i++){if(document.querySelector('#loading')?.classList.contains('hide'))break;await wait(500);}
        // Normalize the demo state: studio light, gizmo off, default shape,
        // symmetry off — regardless of persisted settings.
        const gizmo=document.querySelector('#toggleLightGizmo');
        if(gizmo?.getAttribute('aria-pressed')==='true')gizmo.click();
        const preset=document.querySelector('#lightingPreset');
        if(preset){preset.value='studio';preset.dispatchEvent(new Event('change',{bubbles:true}));}
        document.querySelector('#brushShapeGrid button[data-shape-key="default"]')?.click();
        const symmetry=document.querySelector('#symmetryToggle');
        if(symmetry?.checked){symmetry.checked=false;symmetry.dispatchEvent(new Event('change',{bubbles:true}));}
        await wait(2700); // let the symmetry toast fade before the clean capture
        return true;
      })()`, true).then(() => capture('screenshot-clean.png')).then(() => {
        return win.webContents.executeJavaScript(`(async () => {
          const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
          const stage=document.querySelector('#stage');
          const rect=stage.getBoundingClientRect();
          const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
          const toolButton=(index)=>document.querySelector('#toolGrid button[data-tool-index="'+index+'"]');
          const picker=document.querySelector('#colorPicker');
          const setColor=(hex)=>{picker.value=hex;picker.dispatchEvent(new Event('input',{bubbles:true}));};
          const setSize=(value)=>{const slider=document.querySelector('#size');slider.value=String(value);slider.dispatchEvent(new Event('input',{bubbles:true}));};
          const paint=(toolIndex,color,size,points)=>{const btn=toolButton(toolIndex);btn&&btn.click();setColor(color);setSize(size);window.__paintLog=window.__paintLog||[];const before=window.grimStudioDiagnostics.getPerformanceSnapshot().storedDabs;return wait(250).then(()=>{
            const first=points[0];
            const down=new PointerEvent('pointerdown',{clientX:first[0],clientY:first[1],button:0,buttons:1,pointerId:21,bubbles:true,cancelable:true});
            try{down.getCoalescedEvents=()=>[down];}catch{}
            stage.dispatchEvent(down);
            return points.slice(1).reduce((chain,pt)=>chain.then(()=>{const ev=new PointerEvent('pointermove',{clientX:pt[0],clientY:pt[1],button:0,buttons:1,pointerId:21,bubbles:true,cancelable:true});try{ev.getCoalescedEvents=()=>[ev];}catch{}stage.dispatchEvent(ev);return wait(45);}),wait(30));
          }).then(()=>{const last=points[points.length-1];stage.dispatchEvent(new PointerEvent('pointerup',{clientX:last[0],clientY:last[1],pointerId:21,bubbles:true}));return wait(350);}).then(()=>{
            const after=window.grimStudioDiagnostics.getPerformanceSnapshot().storedDabs;
            window.__paintLog.push(toolIndex+':'+(after-before)+'dabs@'+points[0]);
            return wait(80);
          });};
          // A small makeup demo: eyeshadow, blush, lipstick. Coordinates are
          // calibrated against the 2.5.2 head framing (brows ≈ cy-155, lips ≈ cy).
          return paint(9,'#6a4a8c',38,[[cx-150,cy-152],[cx-125,cy-146],[cx-100,cy-150],[cx-125,cy-142]])
            .then(()=>paint(9,'#6a4a8c',38,[[cx+100,cy-150],[cx+125,cy-146],[cx+150,cy-152],[cx+125,cy-142]]))
            .then(()=>paint(6,'#e86e8a',85,[[cx-130,cy-45],[cx-118,cy-36],[cx-106,cy-45],[cx-120,cy-26]]))
            .then(()=>paint(6,'#e86e8a',85,[[cx+106,cy-45],[cx+118,cy-36],[cx+130,cy-45],[cx+120,cy-26]]))
            .then(()=>paint(12,'#c2185b',32,[[cx-52,cy-2],[cx-26,cy+4],[cx,cy+6],[cx+26,cy+4],[cx+52,cy-2],[cx+26,cy+8],[cx,cy+10],[cx-26,cy+8]]))
            .then(()=>paint(12,'#c2185b',28,[[cx-30,cy+18],[cx,cy+22],[cx+30,cy+18]]))
            .then(()=>{const ev=new PointerEvent('pointermove',{clientX:cx-300,clientY:cy-280,button:0,buttons:0,pointerId:22,bubbles:true,cancelable:true});try{ev.getCoalescedEvents=()=>[ev];}catch{}stage.dispatchEvent(ev);return wait(400);})
            .then(()=>({status:document.querySelector('#status').textContent,dabs:window.grimStudioDiagnostics.getPerformanceSnapshot().storedDabs}));
        })()`, true);
      }).then((info) => { console.log('[capture] paint info', JSON.stringify(info)); return capture('screenshot-painted.png'); }).then(() => {
        // Fourth shot: the same makeup with the head slightly turned.
        return win.webContents.executeJavaScript(`(async () => {
          const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
          const stage=document.querySelector('#stage');
          const rect=stage.getBoundingClientRect();
          const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
          const startX=cx+180;
          const down=new PointerEvent('pointerdown',{clientX:startX,clientY:cy,button:2,buttons:2,pointerId:23,bubbles:true,cancelable:true});
          stage.dispatchEvent(down);
          for(let i=1;i<=5;i++){
            const ev=new PointerEvent('pointermove',{clientX:startX+i*7,clientY:cy,button:2,buttons:2,pointerId:23,bubbles:true,cancelable:true});
            stage.dispatchEvent(ev);
            await wait(45);
          }
          stage.dispatchEvent(new PointerEvent('pointerup',{clientX:startX+35,clientY:cy,pointerId:23,button:2,bubbles:true}));
          await wait(500);
          return true;
        })()`, true);
      }).then(() => capture('screenshot-turned.png')).then(() => {
        return win.webContents.executeJavaScript(`document.querySelector('#settingsToggle')?.click();true`, true);
      }).then(() => {
        return new Promise((resolve) => setTimeout(resolve, 500)).then(() => capture('screenshot-settings.png'));
      }).then(() => { clearTimeout(timeout); app.exit(0); })
      .catch((error) => { clearTimeout(timeout); console.error('[capture] ERROR', error); app.exit(1); });
    }, 1500);
  });
}
// Headless-ish functional check: paints strokes, samples the eyedropper,
// erases, selects blend tools and moves lighting sliders, then prints PASS/FAIL
// lines and exits. Only runs when the app is started with --grim-selftest.
function runSelfTest(win) {
  const timeout = setTimeout(() => { console.error('[selftest] TIMEOUT'); win.webContents.executeJavaScript('window.close?.()').catch(()=>{}); app.exit(2); }, 90000);
  const allResults = [];
  const finish = () => {
    clearTimeout(timeout);
    for (const line of allResults) console.log('[selftest]', line);
    const failed = allResults.some(line => line.startsWith('FAIL'));
    console.log('[selftest] ' + (failed ? 'RESULT: FAIL' : 'RESULT: PASS'));
    win.webContents.capturePage().then((image) => {
      try { fs.writeFileSync(path.join(os.tmpdir(), 'grimstudio-selftest.png'), image.toPNG()); console.log('[selftest] screenshot saved'); } catch {}
      app.exit(failed ? 1 : 0);
    }).catch(() => app.exit(failed ? 1 : 0));
  };
  win.webContents.once('did-finish-load', () => {
    setTimeout(() => {
      win.webContents.executeJavaScript(`(async () => {
        const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
        const results=[];
        const check=(name,ok,detail='')=>{results.push((ok?'PASS':'FAIL')+' '+name+(detail?' :: '+detail:''));};
        try {
          // 1. Wait for the model surface to be ready.
          let ready=false;
          for (let i=0;i<120;i++){ if (document.querySelector('#loading')?.classList.contains('hide')){ready=true;break;} await wait(500); }
          check('model-ready', ready, document.querySelector('#loadState')?.textContent||'');
          if(!ready) return results;
          await wait(800);
          const stage=document.querySelector('#stage');
          const rect=stage.getBoundingClientRect();
          const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
          const fire=(type,x,y,pid=7)=>{const ev=new PointerEvent(type,{clientX:x,clientY:y,button:0,buttons:1,pointerId:pid,bubbles:true,cancelable:true});try{ev.getCoalescedEvents=()=>[ev];}catch{}stage.dispatchEvent(ev);};
          const diag=window.grimStudioDiagnostics;
          const dabs=()=>diag.getPerformanceSnapshot().storedDabs;
          const toolButton=(index)=>document.querySelector('#toolGrid button[data-tool-index="'+index+'"]');
          // 2. Paint two overlapping strokes (green then blue) with the brush.
          const picker=document.querySelector('#colorPicker');
          const setColor=(hex)=>{picker.value=hex;picker.dispatchEvent(new Event('input',{bubbles:true}));};
          setColor('#00aa44');
          fire('pointerdown',cx,cy);
          for(let i=1;i<=24;i++){ fire('pointermove',cx+i*3,cy+Math.sin(i/4)*8); await wait(40); }
          fire('pointerup',cx+72,cy);
          await wait(500);
          setColor('#0033bb');
          stage.dispatchEvent(new PointerEvent('pointerdown',{clientX:cx+6,clientY:cy,button:0,pointerId:8,bubbles:true,cancelable:true}));
          const evMove=(x,y)=>{const ev=new PointerEvent('pointermove',{clientX:x,clientY:y,button:0,buttons:1,pointerId:8,bubbles:true,cancelable:true});try{ev.getCoalescedEvents=()=>[ev];}catch{}stage.dispatchEvent(ev);};
          for(let i=1;i<=20;i++){ evMove(cx+6+i*3,cy+Math.cos(i/4)*6); await wait(40); }
          stage.dispatchEvent(new PointerEvent('pointerup',{clientX:cx+66,clientY:cy,pointerId:8,bubbles:true}));
          await wait(500);
          const painted=dabs();
          check('paint-stroke', painted>0, String(painted)+' dabs');
          // 3. Eyedropper picks a blended color from the overlap area.
          const before=document.querySelector('#colorHex').textContent;
          toolButton(22)?.click(); await wait(200);
          stage.dispatchEvent(new PointerEvent('pointerdown',{clientX:cx+40,clientY:cy,button:0,pointerId:11,bubbles:true,cancelable:true}));
          await wait(300);
          stage.dispatchEvent(new PointerEvent('pointerup',{clientX:cx+40,clientY:cy,pointerId:11,bubbles:true}));
          const after=document.querySelector('#colorHex').textContent;
          check('eyedropper', after!==before, before+' -> '+after);
          return results;
        } catch (error) { check('exception', false, String(error&&error.stack||error)); return results; }
      })()`, true).then((results) => {
        allResults.push(...results);
        // Capture the painted state before the eraser phase.
        return win.webContents.capturePage().then((image) => {
          try { fs.writeFileSync(path.join(os.tmpdir(), 'grimstudio-selftest-painted.png'), image.toPNG()); console.log('[selftest] painted screenshot saved'); } catch {}
        }).then(() => win.webContents.executeJavaScript(`(async () => {
        const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
        const results=[];
        const check=(name,ok,detail='')=>{results.push((ok?'PASS':'FAIL')+' '+name+(detail?' :: '+detail:''));};
        try {
          const stage=document.querySelector('#stage');
          const rect=stage.getBoundingClientRect();
          const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
          const fire=(type,x,y,pid=7)=>{const ev=new PointerEvent(type,{clientX:x,clientY:y,button:0,buttons:1,pointerId:pid,bubbles:true,cancelable:true});try{ev.getCoalescedEvents=()=>[ev];}catch{}stage.dispatchEvent(ev);};
          const diag=window.grimStudioDiagnostics;
          const dabs=()=>diag.getPerformanceSnapshot().storedDabs;
          const toolButton=(index)=>document.querySelector('#toolGrid button[data-tool-index="'+index+'"]');
          // 4. Blend tools run over the painted area.
          const blendResults={};
          for (const [name,index] of [['Blur',16],['Blender',17]]) {
            const btn=toolButton(index);
            if(!btn){check('tool-'+name,false,'button missing');continue;}
            btn.click(); await wait(150);
            const beforeDabs=dabs();
            stage.dispatchEvent(new PointerEvent('pointerdown',{clientX:cx-30,clientY:cy,button:0,pointerId:10,bubbles:true,cancelable:true}));
            for(let i=1;i<=16;i++){ fire('pointermove',cx-30+i*5,cy,10); await wait(30); }
            stage.dispatchEvent(new PointerEvent('pointerup',{clientX:cx+50,clientY:cy,pointerId:10,bubbles:true}));
            await wait(500);
            blendResults[name]=dabs();
            blendResults[name+'Before']=beforeDabs;
            check('tool-'+name, true, beforeDabs+' -> '+blendResults[name]+' dabs');
          }
          check('blender-paints', blendResults.Blender>blendResults.BlenderBefore, blendResults.BlenderBefore+' -> '+blendResults.Blender);
          // 5. Eraser removes paint.
          toolButton(18)?.click(); await wait(200);
          const eraserStartDabs=dabs();
          stage.dispatchEvent(new PointerEvent('pointerdown',{clientX:cx,clientY:cy,button:0,pointerId:9,bubbles:true,cancelable:true}));
          for(let i=1;i<=24;i++){ fire('pointermove',cx+i*4,cy+Math.sin(i/4)*8,9); await wait(40); }
          stage.dispatchEvent(new PointerEvent('pointerup',{clientX:cx+96,clientY:cy,pointerId:9,bubbles:true}));
          await wait(700);
          const afterErase=dabs();
          check('eraser', afterErase<eraserStartDabs, eraserStartDabs+' -> '+afterErase);
          // 6. Lighting sliders respond.
          const temp=document.querySelector('#lightTemp');
          temp.value='2500'; temp.dispatchEvent(new Event('input',{bubbles:true}));
          const readout=document.querySelector('#lightTempReadout').textContent;
          check('lighting-temp', readout.includes('2500'), readout);
          const preset=document.querySelector('#lightingPreset');
          preset.value='golden'; preset.dispatchEvent(new Event('change',{bubbles:true}));
          check('lighting-preset', document.querySelector('#lightTempReadout').textContent.includes('3400'), document.querySelector('#lightTempReadout').textContent);
          const fill=document.querySelector('#lightFill');
          fill.value='120'; fill.dispatchEvent(new Event('input',{bubbles:true}));
          check('lighting-fill', document.querySelector('#lightFillReadout').textContent.includes('120'), document.querySelector('#lightFillReadout').textContent);
          const gizmo=document.querySelector('#toggleLightGizmo');
          let gizmoClickError='';
          const gizmoErrorHandler=(event)=>{gizmoClickError=String(event.message||event.error||'error');};
          window.addEventListener('error',gizmoErrorHandler,{once:true});
          gizmo?.click(); await wait(300);
          check('light-gizmo', gizmo?.getAttribute('aria-pressed')==='true', 'pressed='+(gizmo?.getAttribute('aria-pressed')||'null')+(gizmoClickError?' clickError='+gizmoClickError:''));
          // 7. Brush preview rendered.
          const preview=document.querySelector('#brushPreview');
          const px=preview.getContext('2d').getImageData(0,0,preview.width,preview.height).data;
          let lit=0; for(let i=3;i<px.length;i+=4) if(px[i]>10) lit++;
          check('brush-preview', lit>50, lit+' px');
          // 8. Accent color switching.
          const accentButton=document.querySelector('#accentPresets button[data-accent="#5fb8a5"]');
          if(!accentButton) check('accent-color', false, 'preset button missing');
          else{
            accentButton.click(); await wait(150);
            const accent=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
            check('accent-color', accent==='#5fb8a5', accent);
            document.querySelector('#accentReset')?.click(); await wait(100);
            const resetAccent=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
            check('accent-reset', resetAccent==='#c9a86a', resetAccent||'(empty)');
          }
          // 9. New project faces forward.
          window.confirm=()=>true;
          document.querySelector('#newBtn').click(); await wait(600);
          check('new-project-ready', true);
          // 10. Park the pointer over the forehead so the final screenshot shows
          // the brush cursor preview on clean skin.
          const evHover=(x,y)=>{const ev=new PointerEvent('pointermove',{clientX:x,clientY:y,button:0,buttons:0,pointerId:12,bubbles:true,cancelable:true});try{ev.getCoalescedEvents=()=>[ev];}catch{}stage.dispatchEvent(ev);};
          evHover(cx,cy-150); await wait(500);
          // 11. Open the settings dialog so the final screenshot shows the
          // appearance/accent section.
          document.querySelector('#settingsToggle')?.click(); await wait(500);
        } catch (error) { check('exception', false, String(error&&error.stack||error)); }
        return results;
      })()`, true).then((results2) => {
        allResults.push(...results2);
        finish();
      }).catch((error) => { clearTimeout(timeout); console.error('[selftest] ERROR', error); app.exit(2); }));
      }).catch((error) => { clearTimeout(timeout); console.error('[selftest] ERROR', error); app.exit(2); });
    }, 1500);
  });
}
app.whenReady().then(() => {
  // Self-tests and screenshot captures must start from a clean state: drop any
  // autosaved project first (it would restore a turned view and old paint).
  if (process.argv.includes('--grim-selftest') || process.argv.includes('--grim-capture')) {
    try { fs.rmSync(path.join(app.getPath('userData'), AUTOSAVE_FILE), { force: true }); } catch {}
  }
  if (process.platform === 'win32') app.setAppUserModelId('com.grimstudio.desktop');
  createWindow();
  app.on('activate', () => { if (!BrowserWindow.getAllWindows().length) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });


const MODEL_ASSET_REQUESTS = Object.freeze({
  'Male Average Head.obj': ['male', 'obj'],
  'Male Average Head.mtl': ['male', 'mtl'],
  'Female Average Head.obj': ['female', 'obj'],
  'Female Average Head.mtl': ['female', 'mtl']
});
function getModelAssetRoot() {
  // Development reads from source assets; packaged builds use Electron extraResources.
  return app.isPackaged ? path.join(process.resourcesPath, 'models') : path.join(app.getAppPath(), 'assets', 'models');
}
// Dedicated default folders keep saved projects and PNG exports easy to find,
// while the dialogs still allow choosing any other location.
async function ensureDefaultFolders() {
  const folders = {
    projects: path.join(app.getPath('documents'), 'GrimStudio Projects'),
    exports: path.join(app.getPath('pictures'), 'GrimStudio')
  };
  for (const dir of Object.values(folders)) { try { await fsp.mkdir(dir, { recursive: true }); } catch {} }
  return folders;
}
async function resolveModelAssetPath(assetAlias) {
  const request = MODEL_ASSET_REQUESTS[assetAlias];
  if (!request) throw new Error('Asset alias is not allowlisted');
  const root = getModelAssetRoot();
  const manifestPath = path.join(root, 'manifest.json');
  const manifest = JSON.parse(await fsp.readFile(manifestPath, 'utf8'));
  const relative = manifest.models?.[request[0]]?.[request[1]];
  if (typeof relative !== 'string') throw new Error(`Manifest entry missing: ${request[0]}.${request[1]}`);
  const resolved = path.resolve(root, relative);
  if (!resolved.startsWith(root + path.sep)) throw new Error('Manifest asset path escapes model root');
  return resolved;
}
ipcMain.handle('model-asset-read', async (event, assetName) => {
  if (!safeSender(event) || typeof assetName !== 'string' || !Object.hasOwn(MODEL_ASSET_REQUESTS, assetName)) return { error: 'Invalid model asset request' };
  let filePath = '<unresolved>';
  try {
    filePath = await resolveModelAssetPath(assetName);
    const stat = await fsp.stat(filePath);
    if (!stat.isFile() || stat.size < 100) throw new Error(`Asset is missing or suspiciously small (${stat.size} bytes)`);
    const content = await fsp.readFile(filePath, 'utf8');
    console.info(`[GrimStudio assets] Read ${assetName} from ${filePath} (${stat.size} bytes)`);
    return { content, diagnostics: { filePath, size: stat.size, packaged: app.isPackaged } };
  } catch (error) {
    console.error('Model asset read failed:', { assetName, filePath, packaged: app.isPackaged, error });
    return { error: `Model asset unavailable: ${assetName}\nResolved path: ${filePath}\nPackaged: ${app.isPackaged}\nCause: ${error.message}` };
  }
});

ipcMain.handle('project-save', async (event, content) => {
  if (!safeSender(event) || typeof content !== 'string' || Buffer.byteLength(content) > MAX_PROJECT_BYTES) return { error: 'Invalid project payload' };
  const folders = await ensureDefaultFolders();
  const { canceled, filePath } = await dialog.showSaveDialog({
    title: 'Save GrimStudio Project', defaultPath: path.join(folders.projects, 'Untitled.grim'),
    filters: [{ name: 'GrimStudio Project', extensions: ['grim'] }, { name: 'JSON Project', extensions: ['json'] }]
  });
  if (canceled || !filePath) return { canceled: true };
  try { await atomicWrite(filePath, content); return { canceled: false, filePath }; }
  catch (error) { return { error: error.message }; }
});
ipcMain.handle('project-open', async (event) => {
  if (!safeSender(event)) return { error: 'Invalid sender' };
  const { canceled, filePaths } = await dialog.showOpenDialog({
    title: 'Open GrimStudio Project', properties: ['openFile'],
    filters: [{ name: 'GrimStudio Projects', extensions: ['grim', 'json'] }]
  });
  if (canceled || !filePaths?.[0]) return { canceled: true };
  try {
    const stat = await fsp.stat(filePaths[0]);
    if (stat.size > MAX_PROJECT_BYTES) return { error: 'Project file is too large' };
    return { canceled: false, filePath: filePaths[0], content: await fsp.readFile(filePaths[0], 'utf8') };
  } catch (error) { return { canceled: false, error: error.message }; }
});
ipcMain.handle('image-export', async (event, pngData) => {
  if (!safeSender(event) || typeof pngData !== 'string' || !pngData.startsWith('data:image/png;base64,') || pngData.length > 120_000_000) return { error: 'Invalid PNG data' };
  const folders = await ensureDefaultFolders();
  const { canceled, filePath } = await dialog.showSaveDialog({ title: 'Export Portrait', defaultPath: path.join(folders.exports, 'GrimStudio-Portrait.png'), filters: [{ name: 'PNG Image', extensions: ['png'] }] });
  if (canceled || !filePath) return { canceled: true };
  try { const base64 = pngData.slice('data:image/png;base64,'.length); await atomicWrite(filePath, Buffer.from(base64, 'base64')); return { canceled: false, filePath }; }
  catch (error) { return { error: error.message }; }
});
ipcMain.handle('autosave-write', async (event, content) => {
  if (!safeSender(event) || typeof content !== 'string' || Buffer.byteLength(content) > MAX_PROJECT_BYTES) return { error: 'Invalid autosave payload' };
  try { await atomicWrite(path.join(app.getPath('userData'), AUTOSAVE_FILE), content); return { ok: true }; }
  catch (error) { return { error: error.message }; }
});
ipcMain.handle('autosave-read', async (event) => {
  if (!safeSender(event)) return null;
  try { const p = path.join(app.getPath('userData'), AUTOSAVE_FILE); const stat = await fsp.stat(p); if (stat.size > MAX_PROJECT_BYTES) return null; return await fsp.readFile(p, 'utf8'); }
  catch { return null; }
});
