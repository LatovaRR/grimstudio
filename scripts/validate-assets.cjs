const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),modelRoot=path.join(root,'assets','models');
const manifestPath=path.join(modelRoot,'manifest.json');
function fail(msg){console.error('[asset validation] ERROR:',msg);process.exitCode=1;}
if(!fs.existsSync(manifestPath)){fail('Missing models/manifest.json');process.exit(1);}
let manifest;try{manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));}catch(e){fail('Invalid manifest JSON: '+e.message);process.exit(1);}
for(const id of ['male','female']){const item=manifest.models?.[id];if(!item){fail(`Manifest entry ${id} missing`);continue;}for(const [kind,rel] of [['OBJ',item.obj],['MTL',item.mtl]]){if(typeof rel!=='string'){fail(`${id} ${kind} path invalid`);continue;}const p=path.resolve(modelRoot,rel);if(!p.startsWith(modelRoot+path.sep)){fail(`${id} ${kind} path escapes models directory`);continue;}if(!fs.existsSync(p)){fail(`${id} ${kind} missing: ${rel}`);continue;}const stat=fs.statSync(p);if(!stat.isFile()||stat.size<100){fail(`${id} ${kind} invalid/empty: ${rel}`);continue;}console.log(`${id} ${kind}: ${rel} (${stat.size} bytes)`);}}
if(!process.exitCode)console.log('Pre-build asset validation passed.');
