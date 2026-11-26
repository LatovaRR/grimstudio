/**
 * Generates assets/app-icon.ico (multi-size, PNG-compressed) and
 * assets/app-icon.png from a minimalist vector makeup-mask mark drawn on a
 * canvas. Run with the Electron runtime: `electron scripts/generate-app-icon.cjs`.
 */
const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

const SIZES = [16, 24, 32, 48, 64, 128, 256];

// Serialized into the renderer: draws the icon at one size and returns a PNG data URL.
const rendererSource = `(async () => {
  const drawIcon = (size) => {
    const canvas = document.createElement('canvas');
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext('2d');
    // Dark rounded-square backdrop with a subtle vertical gradient.
    const background = ctx.createLinearGradient(0, 0, 0, size);
    background.addColorStop(0, '#1e2126');
    background.addColorStop(1, '#0f1114');
    ctx.fillStyle = background;
    ctx.beginPath();
    ctx.roundRect(0, 0, size, size, size * 0.18);
    ctx.fill();
    // Thin accent border ring.
    const ring = Math.max(1, size / 48);
    ctx.strokeStyle = 'rgba(201,168,106,0.4)';
    ctx.lineWidth = ring;
    ctx.beginPath();
    ctx.roundRect(ring / 2, ring / 2, size - ring, size - ring, size * 0.17);
    ctx.stroke();
    // Makeup mask mark, drawn from the 24-unit design grid.
    ctx.save();
    ctx.scale(size / 24, size / 24);
    ctx.strokeStyle = '#c9a86a';
    ctx.lineWidth = 1.55;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke(new Path2D('M5.5 3.5h13v7.2c0 5.4-3.7 8.9-6.5 10-2.8-1.1-6.5-4.6-6.5-10z'));
    ctx.stroke(new Path2D('M9.2 9.6h1.7M13.1 9.6h1.7'));
    ctx.stroke(new Path2D('M10 14c1.3.9 2.7.9 4 0'));
    ctx.restore();
    return canvas.toDataURL('image/png');
  };
  return ${JSON.stringify(SIZES)}.map((size) => ({ size, dataUrl: drawIcon(size) }));
})()`;

function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);
  const directory = Buffer.alloc(16 * entries.length);
  let offset = 6 + 16 * entries.length;
  const payloads = [];
  entries.forEach((entry, index) => {
    const slot = directory.subarray(index * 16, (index + 1) * 16);
    slot.writeUInt8(entry.size >= 256 ? 0 : entry.size, 0);
    slot.writeUInt8(entry.size >= 256 ? 0 : entry.size, 1);
    slot.writeUInt8(0, 2);
    slot.writeUInt8(0, 3);
    slot.writeUInt16LE(1, 4);
    slot.writeUInt16LE(32, 6);
    slot.writeUInt32LE(entry.data.length, 8);
    slot.writeUInt32LE(offset, 12);
    offset += entry.data.length;
    payloads.push(entry.data);
  });
  return Buffer.concat([header, directory, ...payloads]);
}

app.whenReady().then(() => {
  const win = new BrowserWindow({ show: false, width: 320, height: 320 });
  win.loadURL('data:text/html,<body></body>');
  win.webContents.once('did-finish-load', async () => {
    try {
      const rendered = await win.webContents.executeJavaScript(rendererSource, true);
      const assets = path.resolve(__dirname, '..', 'assets');
      fs.mkdirSync(assets, { recursive: true });
      const pngs = rendered.map((item) => ({
        size: item.size,
        data: Buffer.from(String(item.dataUrl).slice('data:image/png;base64,'.length), 'base64')
      }));
      const bySize = new Map(pngs.map((entry) => [entry.size, entry.data]));
      fs.writeFileSync(path.join(assets, 'app-icon.ico'), buildIco(pngs));
      fs.writeFileSync(path.join(assets, 'app-icon.png'), bySize.get(256));
      console.log(`[app-icon] generated app-icon.ico (${pngs.length} sizes) and app-icon.png`);
      app.exit(0);
    } catch (error) {
      console.error('[app-icon] generation failed:', error);
      app.exit(1);
    }
  });
});
app.on('window-all-closed', () => app.quit());
