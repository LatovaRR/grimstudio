import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

/** Creates a subtle procedural diffuse map when original MTL texture files are missing. */
function createSkinFallbackTexture(modelId) {
  const width = 256, height = 256;
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const image = ctx.createImageData(width, height);
  const base = modelId === 'female' ? [206, 166, 146] : [184, 145, 126];
  // Low-amplitude, deterministic variation avoids a flat plastic appearance without
  // pretending to reproduce unavailable original texture maps.
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4;
    const wave = Math.sin(x * 0.027) * 1.2 + Math.cos(y * 0.031) * 1.0;
    const noise = (((x * 73 + y * 151 + x * y * 17) % 31) - 15) * 0.22 + wave;
    image.data[i] = Math.max(0, Math.min(255, base[0] + noise));
    image.data[i + 1] = Math.max(0, Math.min(255, base[1] + noise));
    image.data[i + 2] = Math.max(0, Math.min(255, base[2] + noise));
    image.data[i + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  texture.userData.grimstudioFallback = true;
  return texture;
}


/** Parse actual OBJ and MTL content; optional absent diffuse maps are stripped safely. */
export function parseHeadModel({ objText, mtlText, modelId }) {
  if (typeof objText !== 'string' || objText.length < 100) throw new Error('OBJ content is missing or too small');
  if (typeof mtlText !== 'string' || !/^\s*newmtl\s+/m.test(mtlText)) throw new Error('MTL contains no material definitions');
  const missingTextureRefs = [...mtlText.matchAll(/^\s*map_Kd\s+(.+)\s*$/gim)].map(m => m[1].trim());
  // The source archive does not include the BMP files named by its MTL files.
  // Keep the real material declarations but remove unresolved maps to avoid loader errors.
  const mtlWithoutMissingMaps = mtlText.split(/\r?\n/).filter(line => !/^\s*map_Kd\s/i.test(line)).join('\n');
  const materialCreator = new MTLLoader().parse(mtlWithoutMissingMaps, '');
  materialCreator.preload();
  const root = new OBJLoader().setMaterials(materialCreator).parse(objText);
  let meshes = 0, vertices = 0, uvMeshes = 0;
  root.traverse((node) => {
    if (!node.isMesh) return;
    meshes++;
    const geometry = node.geometry;
    if (!geometry.attributes.position?.count) throw new Error(`Mesh ${node.name || meshes} has no position data`);
    vertices += geometry.attributes.position.count;
    if (geometry.attributes.uv?.count) uvMeshes++;
    if (!geometry.attributes.normal) geometry.computeVertexNormals();
    const mats = Array.isArray(node.material) ? node.material : [node.material];
    for (const material of mats) {
      if (!material) continue;
      material.side = THREE.DoubleSide;
      material.roughness = 0.88;
      material.metalness = 0;
      if (!material.map) {
        material.map = createSkinFallbackTexture(modelId);
        material.color?.set(0xffffff);
      }
      material.needsUpdate = true;
    }
  });
  if (!meshes) throw new Error('OBJ parsed but contains no mesh geometry');
  if (!vertices) throw new Error('OBJ geometry has no vertices');
  const bounds = new THREE.Box3().setFromObject(root);
  const size = bounds.getSize(new THREE.Vector3());
  if (![size.x, size.y, size.z].every(Number.isFinite) || Math.max(size.x, size.y, size.z) <= 0) throw new Error('Model has invalid bounding dimensions');
  return { root, stats: { meshes, vertices, uvMeshes, bounds: { x: size.x, y: size.y, z: size.z }, missingTextureRefs } };
}


export function disposeLoadedModel(root) {
  if (!root) return;
  const geometries = new Set(), materials = new Set(), textures = new Set();
  root.traverse((node) => {
    if (!node.isMesh) return;
    if (node.geometry) geometries.add(node.geometry);
    const list = Array.isArray(node.material) ? node.material : [node.material];
    for (const material of list) {
      if (!material) continue;
      materials.add(material);
      for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
    }
  });
  textures.forEach(texture => texture.dispose());
  materials.forEach(material => material.dispose());
  geometries.forEach(geometry => geometry.dispose());
}
