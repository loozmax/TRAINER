// Движок проверки кода без запуска Java.
// Каждое задание описывает набор правил (checks). Все правила должны пройти.

// Убираем комментарии и схлопываем пробелы — для гибкого сравнения.
export function normalize(code) {
  return code
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function applyCheck(check, code) {
  const norm = normalize(code)
  switch (check.type) {
    case 'contains': {
      const target = check.ci ? code.toLowerCase() : code
      const needle = check.ci ? check.value.toLowerCase() : check.value
      return target.includes(needle)
    }
    case 'containsNorm': {
      const n = normalize(check.value)
      return norm.includes(n)
    }
    case 'notContains':
      return !code.includes(check.value)
    case 'regex': {
      const flags = check.flags || 'm'
      return new RegExp(check.value, flags).test(code)
    }
    case 'minLength':
      return norm.length >= check.value
    default:
      return false
  }
}

// Возвращает { passed, results: [{message, passed}], ratio }
export function runChecks(task, code) {
  const checks = task.checks || []
  const results = checks.map((c) => ({
    message: c.message,
    passed: applyCheck(c, code)
  }))
  const passedCount = results.filter((r) => r.passed).length
  return {
    passed: checks.length > 0 && passedCount === checks.length,
    results,
    ratio: checks.length ? passedCount / checks.length : 0
  }
}
