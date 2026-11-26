const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const packagedModels=path.join(root,'dist','win-unpacked','resources','models');
const required=['manifest.json','male/model.obj','male/model.mtl','female/model.obj','female/model.mtl'];
for(const rel of required){const file=path.join(packagedModels,rel);if(!fs.existsSync(file)||fs.statSync(file).size<100){console.error('Packaged asset missing or invalid:',file);process.exit(1);}console.log('Verified packaged resource:',rel);}
console.log('Post-build packaged asset verification passed.');
