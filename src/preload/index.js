import { contextBridge, ipcRenderer } from 'electron'

// Безопасный мост между рендером и main-процессом
contextBridge.exposeInMainWorld('api', {
  loadProgress: () => ipcRenderer.invoke('progress:load'),
  saveProgress: (data) => ipcRenderer.invoke('progress:save', data),
  detectJdk: () => ipcRenderer.invoke('java:detect'),
  runJava: (payload) => ipcRenderer.invoke('java:run', payload),
  platform: process.platform
})
