/**
 * Allocation-light ray traversal for the uniform triangle-AABB grid built by
 * GrimStudio. The grid stores every triangle in all cells overlapped by its
 * bounds, so DDA traversal cannot skip a valid ray/triangle intersection.
 */
function intersectTriangle(origin, direction, points, triangles, face) {
  const offset = face * 3;
  const ia = triangles[offset] * 3;
  const ib = triangles[offset + 1] * 3;
  const ic = triangles[offset + 2] * 3;

  const ax = points[ia], ay = points[ia + 1], az = points[ia + 2];
  const e1x = points[ib] - ax, e1y = points[ib + 1] - ay, e1z = points[ib + 2] - az;
  const e2x = points[ic] - ax, e2y = points[ic + 1] - ay, e2z = points[ic + 2] - az;

  const px = direction.y * e2z - direction.z * e2y;
  const py = direction.z * e2x - direction.x * e2z;
  const pz = direction.x * e2y - direction.y * e2x;
  const determinant = e1x * px + e1y * py + e1z * pz;
  if (Math.abs(determinant) < 1e-10) return null;

  const inverse = 1 / determinant;
  const tx = origin.x - ax, ty = origin.y - ay, tz = origin.z - az;
  const u = (tx * px + ty * py + tz * pz) * inverse;
  if (u < -1e-8 || u > 1 + 1e-8) return null;

  const qx = ty * e1z - tz * e1y;
  const qy = tz * e1x - tx * e1z;
  const qz = tx * e1y - ty * e1x;
  const v = (direction.x * qx + direction.y * qy + direction.z * qz) * inverse;
  if (v < -1e-8 || u + v > 1 + 1e-8) return null;

  const distance = (e2x * qx + e2y * qy + e2z * qz) * inverse;
  return distance > 1e-7 ? { distance, u, v, ia, ib, ic } : null;
}

export function raycastGrid(spatial, origin, direction, maxDistance = Infinity) {
  const size = spatial.cellSize;
  const min = spatial.gridMin;
  const max = spatial.gridMax;
  // Inline slab intersection avoids creating temporary axis arrays and bounds tuples
  // for every high-frequency pointer ray.
  let near=0,far=Infinity;
  const ox=origin.x,oy=origin.y,oz=origin.z,dx=direction.x,dy=direction.y,dz=direction.z;
  if(Math.abs(dx)<1e-12){if(ox<min[0]||ox>max[0])return null;}else{let a=(min[0]-ox)/dx,b=(max[0]-ox)/dx;if(a>b){const swap=a;a=b;b=swap;}near=Math.max(near,a);far=Math.min(far,b);if(near>far)return null;}
  if(Math.abs(dy)<1e-12){if(oy<min[1]||oy>max[1])return null;}else{let a=(min[1]-oy)/dy,b=(max[1]-oy)/dy;if(a>b){const swap=a;a=b;b=swap;}near=Math.max(near,a);far=Math.min(far,b);if(near>far)return null;}
  if(Math.abs(dz)<1e-12){if(oz<min[2]||oz>max[2])return null;}else{let a=(min[2]-oz)/dz,b=(max[2]-oz)/dz;if(a>b){const swap=a;a=b;b=swap;}near=Math.max(near,a);far=Math.min(far,b);if(near>far)return null;}
  if(far<0)return null;
  const startT = Math.max(0, near);
  const endT = Math.min(far, maxDistance);
  if (startT > endT) return null;

  // Start just inside the volume to avoid landing outside due to float rounding.
  const epsilon = Math.max(1e-9, size * 1e-8);
  const sx = origin.x + direction.x * (startT + epsilon);
  const sy = origin.y + direction.y * (startT + epsilon);
  const sz = origin.z + direction.z * (startT + epsilon);
  const nx = spatial.nx, ny = spatial.ny, nz = spatial.nz;
  let x = Math.max(0, Math.min(nx - 1, Math.floor((sx - min[0]) / size)));
  let y = Math.max(0, Math.min(ny - 1, Math.floor((sy - min[1]) / size)));
  let z = Math.max(0, Math.min(nz - 1, Math.floor((sz - min[2]) / size)));

  const stepX = direction.x > 1e-12 ? 1 : direction.x < -1e-12 ? -1 : 0;
  const stepY = direction.y > 1e-12 ? 1 : direction.y < -1e-12 ? -1 : 0;
  const stepZ = direction.z > 1e-12 ? 1 : direction.z < -1e-12 ? -1 : 0;
  const deltaX = stepX ? size / Math.abs(direction.x) : Infinity;
  const deltaY = stepY ? size / Math.abs(direction.y) : Infinity;
  const deltaZ = stepZ ? size / Math.abs(direction.z) : Infinity;

  let nextX = stepX ? ((min[0] + (stepX > 0 ? x + 1 : x) * size - origin.x) / direction.x) : Infinity;
  let nextY = stepY ? ((min[1] + (stepY > 0 ? y + 1 : y) * size - origin.y) / direction.y) : Infinity;
  let nextZ = stepZ ? ((min[2] + (stepZ > 0 ? z + 1 : z) * size - origin.z) / direction.z) : Infinity;
  while (nextX < startT) nextX += deltaX;
  while (nextY < startT) nextY += deltaY;
  while (nextZ < startT) nextZ += deltaZ;

  spatial.mark = (spatial.mark + 1) >>> 0;
  if (spatial.mark === 0) {
    spatial.faceMarks.fill(0);
    spatial.mark = 1;
  }
  const mark = spatial.mark;
  let best = null;
  let bestDistance = endT;
  const offsets = spatial.offsets;
  const faceIds = spatial.faceIds;
  const marks = spatial.faceMarks;

  // A ray crosses no more than nx + ny + nz cells in this grid.
  const maxSteps = nx + ny + nz + 3;
  for (let steps = 0; steps < maxSteps; steps++) {
    if (x < 0 || x >= nx || y < 0 || y >= ny || z < 0 || z >= nz) break;
    const cell = x + nx * (y + ny * z);
    for (let i = offsets[cell], stop = offsets[cell + 1]; i < stop; i++) {
      const face = faceIds[i];
      if (marks[face] === mark) continue;
      marks[face] = mark;
      const hit = intersectTriangle(origin, direction, spatial.points, spatial.triangles, face);
      if (hit && hit.distance < bestDistance) {
        bestDistance = hit.distance;
        best = {
          faceIndex: face,
          distance: hit.distance,
          u: hit.u,
          v: hit.v,
          x: origin.x + direction.x * hit.distance,
          y: origin.y + direction.y * hit.distance,
          z: origin.z + direction.z * hit.distance
        };
      }
    }

    const cellExit = Math.min(nextX, nextY, nextZ);
    if (best && bestDistance <= cellExit + epsilon) break;
    if (cellExit > endT) break;

    // Step all tied axes to avoid visiting zero-volume edge/corner cells.
    const tie = Math.max(epsilon, Math.abs(cellExit) * 1e-12);
    if (nextX <= cellExit + tie) { x += stepX; nextX += deltaX; }
    if (nextY <= cellExit + tie) { y += stepY; nextY += deltaY; }
    if (nextZ <= cellExit + tie) { z += stepZ; nextZ += deltaZ; }
  }
  return best;
}
