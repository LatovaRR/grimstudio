const assert = require('node:assert/strict');
(async () => {
  const { raycastGrid } = await import('../src/spatial-raycast.mjs');

  // Two parallel square surfaces in one grid cell: a nearer z=0 surface and a
  // farther z=-0.5 surface. The closest visible triangle must win.
  const points = new Float32Array([
    -0.8,-0.8,0, 0.8,-0.8,0, 0.8,0.8,0, -0.8,0.8,0,
    -0.8,-0.8,-0.5, 0.8,-0.8,-0.5, 0.8,0.8,-0.5, -0.8,0.8,-0.5
  ]);
  const triangles = new Uint32Array([0,1,2, 0,2,3, 4,5,6, 4,6,7]);
  const spatial = {
    points, triangles, faceCount: 4,
    gridMin: [-1,-1,-1], gridMax: [1,1,1],
    cellSize: 2, nx: 1, ny: 1, nz: 1,
    offsets: new Uint32Array([0,4]), faceIds: new Uint32Array([0,1,2,3]),
    faceMarks: new Uint32Array(4), mark: 0
  };
  const hit = raycastGrid(spatial, {x:0,y:0,z:0.9}, {x:0,y:0,z:-1});
  assert.ok(hit, 'Ray should hit the surface');
  assert.equal(hit.faceIndex, 0, 'Nearest visible surface must be selected');
  assert.ok(Math.abs(hit.distance - 0.9) < 1e-6, 'Nearest hit distance must be correct');
  assert.ok(Math.abs(hit.z) < 1e-6, 'Hit point must lie on the front surface');

  const miss = raycastGrid(spatial, {x:1.2,y:0,z:0.9}, {x:0,y:0,z:-1});
  assert.equal(miss, null, 'Ray outside the surface bounds must miss');

  const reverse = raycastGrid(spatial, {x:0,y:0,z:-0.9}, {x:0,y:0,z:1});
  assert.ok(reverse, 'Ray from the opposite side should hit a visible surface');
  assert.equal(reverse.faceIndex, 2, 'The nearest surface from the reverse direction must be selected');

  // DDA must traverse multiple cells to reach the face, including rays parallel
  // to two grid axes. The test grid stores every triangle in each overlapped cell.
  const gridPoints = new Float32Array([
    -1.8,-1.8,0, 1.8,-1.8,0, 1.8,1.8,0,
    -1.8,-1.8,0, 1.8,1.8,0, -1.8,1.8,0,
    -1.8,-1.8,1, 1.8,-1.8,1, 1.8,1.8,1,
    -1.8,-1.8,1, 1.8,1.8,1, -1.8,1.8,1
  ]);
  const gridTriangles = new Uint32Array([0,1,2,3,4,5,6,7,8,9,10,11]);
  const nx=4,ny=4,nz=4,cellSize=1,gridMin=[-2,-2,-2],cellFaces=Array.from({length:nx*ny*nz},()=>[]);
  for(let face=0;face<4;face++){
    const ids=[gridTriangles[face*3],gridTriangles[face*3+1],gridTriangles[face*3+2]];
    const mins=[0,1,2].map(axis=>Math.min(...ids.map(id=>gridPoints[id*3+axis])));
    const maxs=[0,1,2].map(axis=>Math.max(...ids.map(id=>gridPoints[id*3+axis])));
    const lo=mins.map((v,axis)=>Math.max(0,Math.min(3,Math.floor((v-gridMin[axis])/cellSize))));
    const hi=maxs.map((v,axis)=>Math.max(0,Math.min(3,Math.floor((v-gridMin[axis])/cellSize))));
    for(let z=lo[2];z<=hi[2];z++)for(let y=lo[1];y<=hi[1];y++)for(let x=lo[0];x<=hi[0];x++)cellFaces[x+nx*(y+ny*z)].push(face);
  }
  const offsets=new Uint32Array(cellFaces.length+1),faceIds=[];
  for(let cell=0;cell<cellFaces.length;cell++){faceIds.push(...cellFaces[cell]);offsets[cell+1]=faceIds.length;}
  const multiCell={points:gridPoints,triangles:gridTriangles,faceCount:4,gridMin,gridMax:[2,2,2],cellSize,nx,ny,nz,offsets,faceIds:new Uint32Array(faceIds),faceMarks:new Uint32Array(4),mark:0};
  const traversed=raycastGrid(multiCell,{x:-1,y:.2,z:-1.5},{x:0,y:0,z:1});
  assert.ok(traversed,'DDA should traverse multiple cells and hit a face');
  assert.ok(traversed.faceIndex===0||traversed.faceIndex===1,'DDA must stop at the nearest plane after crossing cells');
  assert.ok(Math.abs(traversed.distance-1.5)<1e-6,'Multi-cell hit distance must be correct');
  const limited=raycastGrid(multiCell,{x:-1,y:.2,z:-1.5},{x:0,y:0,z:1},1.0);
  assert.equal(limited,null,'maxDistance must stop traversal before a distant surface');

  process.stdout.write('Spatial grid raycast tests passed (nearest hit, miss, reverse, multi-cell traversal, max distance).\n');
})().catch((error) => { console.error(error); process.exitCode = 1; });
