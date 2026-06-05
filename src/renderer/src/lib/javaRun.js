// Запуск задания через реальный JDK и сравнение вывода с ожидаемым.

const norm = (s) => (s || '').replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').trim()

export async function detectJdk() {
  if (typeof window === 'undefined' || !window.api?.detectJdk) return { available: false }
  try {
    return await window.api.detectJdk()
  } catch {
    return { available: false }
  }
}

export async function runJavaTask(task, code) {
  if (!window.api?.runJava) {
    return { ok: false, phase: 'error', stderr: 'Запуск недоступен вне приложения.', matched: false }
  }
  const res = await window.api.runJava({
    source: code,
    harness: task.run?.harness,
    entry: task.run?.entry || 'Main'
  })
  const expected = norm(task.run?.expected)
  const actual = norm(res.stdout)
  const matched = res.ok && (expected === '' ? true : actual === expected)
  return { ...res, actual, expected, matched }
}
