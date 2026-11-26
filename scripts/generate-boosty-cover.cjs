/**
 * Generates the Boosty channel cover (1920×1080, brand-styled) at
 * docs/boosty-cover.png. Run with the Electron runtime:
 * `electron scripts/generate-boosty-cover.cjs`
 */
const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

const WIDTH = 1920, HEIGHT = 1080;

const rendererSource = `(async () => {
  const canvas = document.createElement('canvas');
  canvas.width = ${WIDTH}; canvas.height = ${HEIGHT};
  const ctx = canvas.getContext('2d');

  // Background: charcoal gradient.
  const background = ctx.createLinearGradient(0, 0, 0, ${HEIGHT});
  background.addColorStop(0, '#20242a');
  background.addColorStop(1, '#0d0e10');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, ${WIDTH}, ${HEIGHT});

  // Faint watermark: a giant mask outline on the right, barely visible.
  ctx.save();
  ctx.globalAlpha = 0.07;
  ctx.translate(${WIDTH - 260}, ${HEIGHT / 2});
  ctx.scale(44, 44);
  ctx.translate(-12, -12);
  ctx.strokeStyle = '#c9a86a';
  ctx.lineWidth = 1.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke(new Path2D('M5.5 3.5h13v7.2c0 5.4-3.7 8.9-6.5 10-2.8-1.1-6.5-4.6-6.5-10z'));
  ctx.stroke(new Path2D('M9.2 9.6h1.7M13.1 9.6h1.7'));
  ctx.stroke(new Path2D('M10 14c1.3.9 2.7.9 4 0'));
  ctx.restore();

  // Thin brass frame.
  ctx.strokeStyle = 'rgba(201,168,106,0.45)';
  ctx.lineWidth = 6;
  ctx.strokeRect(18, 18, ${WIDTH - 36}, ${HEIGHT - 36});

  // Mask icon, centered above the wordmark.
  ctx.save();
  ctx.translate(${WIDTH / 2}, 320);
  ctx.scale(20, 20);
  ctx.translate(-12, -12);
  ctx.strokeStyle = '#c9a86a';
  ctx.lineWidth = 1.55;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke(new Path2D('M5.5 3.5h13v7.2c0 5.4-3.7 8.9-6.5 10-2.8-1.1-6.5-4.6-6.5-10z'));
  ctx.stroke(new Path2D('M9.2 9.6h1.7M13.1 9.6h1.7'));
  ctx.stroke(new Path2D('M10 14c1.3.9 2.7.9 4 0'));
  ctx.restore();

  // Wordmark.
  ctx.fillStyle = '#c9a86a';
  ctx.textAlign = 'center';
  ctx.font = 'bold 128px "Segoe UI", Arial, sans-serif';
  ctx.fillText('GrimStudio', ${WIDTH / 2}, 700);

  // Tagline.
  ctx.fillStyle = '#8f959e';
  ctx.font = '46px "Segoe UI", Arial, sans-serif';
  ctx.fillText('Профессиональная 3D-студия грима · Бесплатно · Открытый код', ${WIDTH / 2}, 800);

  // Small footer link.
  ctx.fillStyle = '#5d636c';
  ctx.font = '30px "Segoe UI", Arial, sans-serif';
  ctx.fillText('github.com/LatovaRR/grimstudio', ${WIDTH / 2}, ${HEIGHT - 100});

  return canvas.toDataURL('image/png');
})()`;

app.whenReady().then(() => {
  const win = new BrowserWindow({ show: false, width: 800, height: 600 });
  win.loadURL('data:text/html,<body></body>');
  win.webContents.once('did-finish-load', async () => {
    try {
      const dataUrl = await win.webContents.executeJavaScript(rendererSource, true);
      const target = path.join(__dirname, '..', 'docs', 'boosty-cover.png');
      fs.writeFileSync(target, Buffer.from(String(dataUrl).slice('data:image/png;base64,'.length), 'base64'));
      console.log('[boosty-cover] saved', target);
      app.exit(0);
    } catch (error) {
      console.error('[boosty-cover] failed:', error);
      app.exit(1);
    }
  });
});
app.on('window-all-closed', () => app.quit());
