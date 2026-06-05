import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { detectJdk, runJava } from './java-runner.js'

const isDev = !app.isPackaged

// Файл прогресса хранится в пользовательской папке данных приложения
function progressPath() {
  return join(app.getPath('userData'), 'progress.json')
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 960,
    minHeight: 640,
    show: false,
    backgroundColor: '#f7f8fc',
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true
    }
  })

  win.on('ready-to-show', () => win.show())

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (isDev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// IPC: загрузка / сохранение прогресса
ipcMain.handle('progress:load', () => {
  try {
    const p = progressPath()
    if (existsSync(p)) return JSON.parse(readFileSync(p, 'utf-8'))
  } catch (e) {
    console.error('progress load failed', e)
  }
  return {}
})

ipcMain.handle('progress:save', (_e, data) => {
  try {
    writeFileSync(progressPath(), JSON.stringify(data, null, 2), 'utf-8')
    return true
  } catch (e) {
    console.error('progress save failed', e)
    return false
  }
})

// IPC: запуск Java
ipcMain.handle('java:detect', () => detectJdk())
ipcMain.handle('java:run', (_e, payload) => runJava(payload))

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
