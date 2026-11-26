/**
 * Generates the donation QR code (plain TON address, high error correction so
 * a center medallion can cover part of it) and composites it into a branded
 * card image at docs/donate-ton-qr.png.
 *
 * Usage: node scripts/generate-donate-qr.cjs
 * Requires the dev dependency `qrcode`.
 */
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const DONATE_ADDRESS = 'UQC4yRjAxohUwu6qDN074EzPPvyC619nGBUM1YBzxksZBk5M';

QRCode.toBuffer(DONATE_ADDRESS, {
  errorCorrectionLevel: 'H',
  margin: 1,
  width: 440,
  color: { dark: '#101114ff', light: '#ffffffff' }
}).then((buffer) => {
  const target = process.argv[2] || path.join(__dirname, '..', 'docs', 'donate-ton-qr.raw.png');
  fs.writeFileSync(target, buffer);
  console.log('[donate-qr] base QR written to', target, '(', buffer.length, 'bytes )');
}).catch((error) => {
  console.error('[donate-qr] failed:', error);
  process.exit(1);
});
