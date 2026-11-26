const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('grim', Object.freeze({
  saveProject: (content) => ipcRenderer.invoke('project-save', content),
  openProject: () => ipcRenderer.invoke('project-open'),
  exportImage: (pngData) => ipcRenderer.invoke('image-export', pngData),
  autosave: (content) => ipcRenderer.invoke('autosave-write', content),
  readAutosave: () => ipcRenderer.invoke('autosave-read'),
  readModelAsset: (assetName) => ipcRenderer.invoke('model-asset-read', assetName)
}));
