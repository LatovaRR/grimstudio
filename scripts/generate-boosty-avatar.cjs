/**
 * Generates the Boosty avatar (1024×1024, designed for a circular crop —
 * everything important lives inside the inscribed circle) at
 * docs/boosty-avatar.png. Run with the Electron runtime:
 * `electron scripts/generate-boosty-avatar.cjs`
 */
const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

const SIZE = 1024;
const CENTER = SIZE / 2;

const rendererSource = `(async () => {
  const canvas = document.createElement('canvas');
  canvas.width = ${SIZE}; canvas.height = ${SIZE};
  const ctx = canvas.getContext('2d');

  // Background: radial charcoal gradient (corner falloff reads well in a circle).
  const background = ctx.createRadialGradient(${CENTER}, ${CENTER - 60}, 80, ${CENTER}, ${CENTER}, ${SIZE * 0.72});
  background.addColorStop(0, '#262a30');
  background.addColorStop(1, '#0c0d10');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, ${SIZE}, ${SIZE});

  // Brass ring just inside the circular crop — gives the avatar a clean edge.
  ctx.strokeStyle = 'rgba(201,168,106,0.55)';
  ctx.lineWidth = 16;
  ctx.beginPath();
  ctx.arc(${CENTER}, ${CENTER}, 466, 0, Math.PI * 2);
  ctx.stroke();

  // Makeup mask mark, scaled to fill the circle comfortably.
  ctx.save();
  ctx.translate(${CENTER}, ${CENTER});
  ctx.scale(31, 31);
  ctx.translate(-12, -12);
  ctx.strokeStyle = '#c9a86a';
  ctx.lineWidth = 1.55;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke(new Path2D('M5.5 3.5h13v7.2c0 5.4-3.7 8.9-6.5 10-2.8-1.1-6.5-4.6-6.5-10z'));
  ctx.stroke(new Path2D('M9.2 9.6h1.7M13.1 9.6h1.7'));
  ctx.stroke(new Path2D('M10 14c1.3.9 2.7.9 4 0'));
  ctx.restore();

  return canvas.toDataURL('image/png');
})()`;

app.whenReady().then(() => {
  const win = new BrowserWindow({ show: false, width: 800, height: 600 });
  win.loadURL('data:text/html,<body></body>');
  win.webContents.once('did-finish-load', async () => {
    try {
      const dataUrl = await win.webContents.executeJavaScript(rendererSource, true);
      const target = path.join(__dirname, '..', 'docs', 'boosty-avatar.png');
      fs.writeFileSync(target, Buffer.from(String(dataUrl).slice('data:image/png;base64,'.length), 'base64'));
      console.log('[boosty-avatar] saved', target);
      app.exit(0);
    } catch (error) {
      console.error('[boosty-avatar] failed:', error);
      app.exit(1);
    }
  });
});
app.on('window-all-closed', () => app.quit());
