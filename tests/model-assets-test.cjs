const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const modelDir = path.join(root, 'assets', 'models');
const manifest = JSON.parse(fs.readFileSync(path.join(modelDir, 'manifest.json'), 'utf8'));
assert.equal(manifest.version, 1);
assert.ok(manifest.models.male && manifest.models.female, 'manifest must define both models');
for (const [id, model] of Object.entries(manifest.models)) {
  const objPath = path.resolve(modelDir, model.obj);
  const mtlPath = path.resolve(modelDir, model.mtl);
  assert.ok(objPath.startsWith(modelDir + path.sep) && mtlPath.startsWith(modelDir + path.sep), 'paths must remain inside models root');
  assert.ok(fs.existsSync(objPath), `${id} OBJ missing: ${model.obj}`);
  assert.ok(fs.existsSync(mtlPath), `${id} MTL missing: ${model.mtl}`);
  assert.ok(fs.statSync(objPath).size > 1000, 'OBJ file size suspicious');
  const obj = fs.readFileSync(objPath, 'utf8'), mtl = fs.readFileSync(mtlPath, 'utf8');
  assert.ok(/^mtllib\s+model\.mtl$/m.test(obj), `${id}: OBJ material filename mismatch`);
  assert.match(mtl, /^newmtl\s+/m, `${id}: material declaration missing`);
  let v=0, vt=0, faces=0, triangulated=0; const names=new Set([...mtl.matchAll(/^newmtl\s+(.+)$/gim)].map(m=>m[1].trim())); const used=new Set();
  for(const line of obj.split(/\r?\n/)){const t=line.trim();if(t.startsWith('v ')){const nums=t.slice(2).trim().split(/\s+/).map(Number);assert.ok(nums.length>=3&&nums.slice(0,3).every(Number.isFinite),'invalid vertex');v++;}else if(t.startsWith('vt '))vt++;else if(t.startsWith('usemtl '))used.add(t.slice(7).trim());else if(t.startsWith('f ')){const refs=t.slice(2).trim().split(/\s+/);assert.ok(refs.length>=3,'invalid face');faces++;triangulated+=refs.length-2;for(const ref of refs){const [vi,ti]=ref.split('/');assert.ok(Number(vi)>0&&Number(vi)<=v,'vertex index out of bounds');if(ti)assert.ok(Number(ti)>0&&Number(ti)<=vt,'UV index out of bounds');}}}
  assert.ok(v>0&&vt>0&&faces>0,`${id}: empty geometry or missing UVs`); for(const mat of used)assert.ok(names.has(mat),`${id}: missing material ${mat}`);
  const maps=[...mtl.matchAll(/^\s*map_Kd\s+(.+)$/gim)].map(m=>m[1].trim()); const missing=maps.filter(tex=>!fs.existsSync(path.resolve(path.dirname(mtlPath),tex)));
  console.log(`${model.displayName}: validated | ${v.toLocaleString()} vertices | ${vt.toLocaleString()} UVs | ${faces.toLocaleString()} faces | ${triangulated.toLocaleString()} triangles | ${names.size} material(s) | missing optional textures: ${missing.join(', ')||'none'}`);
}
console.log('Model assets integrity checks passed.');
