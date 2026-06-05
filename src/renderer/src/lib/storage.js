// Обёртка над IPC хранилищем прогресса с запасным вариантом на localStorage
// (на случай запуска вне Electron, например в браузере при разработке).

const hasApi = typeof window !== 'undefined' && window.api

export async function loadProgress() {
  if (hasApi) {
    try {
      return (await window.api.loadProgress()) || {}
    } catch {
      /* ignore */
    }
  }
  try {
    return JSON.parse(localStorage.getItem('jt-progress') || '{}')
  } catch {
    return {}
  }
}

export async function saveProgress(data) {
  if (hasApi) {
    try {
      await window.api.saveProgress(data)
      return
    } catch {
      /* ignore */
    }
  }
  localStorage.setItem('jt-progress', JSON.stringify(data))
}

export function clsx(...parts) {
  return parts.filter(Boolean).join(' ')
}
