// Реальная компиляция и запуск Java через локальный JDK.
// Используется только для заданий Java Core — Spring/Hibernate без библиотек не собрать.
import { execFile } from 'child_process'
import { mkdtempSync, writeFileSync, rmSync, existsSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'
import path from 'path'

const isWin = process.platform === 'win32'
const exe = (name) => (isWin ? `${name}.exe` : name)

// Находим бинарники JDK: сначала JAVA_HOME, затем PATH.
function resolveTools() {
  const home = process.env.JAVA_HOME
  if (home) {
    const javac = join(home, 'bin', exe('javac'))
    const java = join(home, 'bin', exe('java'))
    if (existsSync(javac) && existsSync(java)) return { javac, java }
  }
  return { javac: 'javac', java: 'java' }
}

function run(cmd, args, opts) {
  return new Promise((resolve) => {
    execFile(cmd, args, opts, (error, stdout, stderr) => {
      resolve({ error, stdout: stdout || '', stderr: stderr || '' })
    })
  })
}

// Проверка наличия JDK
export async function detectJdk() {
  const { javac, java } = resolveTools()
  const res = await run(javac, ['-version'], { timeout: 8000 })
  if (res.error) return { available: false }
  const version = (res.stdout + res.stderr).trim()
  return { available: true, version, javac, java }
}

// Убираем модификатор public у объявлений верхнего уровня,
// чтобы любой код можно было положить в один файл Solution.java.
function stripTopLevelPublic(source) {
  return source.replace(/^public\s+(?=.*\b(?:class|interface|enum|record)\b)/gm, '')
}

// Компиляция + запуск. Возвращает { ok, phase, stdout, stderr }.
export async function runJava({ source, harness, entry = 'Main' }) {
  const { javac, java } = resolveTools()
  let dir
  try {
    dir = mkdtempSync(join(tmpdir(), 'jt-run-'))
    const combined = stripTopLevelPublic(source) + (harness ? '\n\n' + harness : '')
    const file = join(dir, 'Solution.java')
    writeFileSync(file, combined, 'utf-8')

    // Компиляция
    const compile = await run(javac, ['-encoding', 'UTF-8', 'Solution.java'], {
      cwd: dir,
      timeout: 25000
    })
    if (compile.error) {
      return {
        ok: false,
        phase: 'compile',
        stdout: '',
        stderr: cleanup(compile.stderr || compile.error.message, dir)
      }
    }

    // Запуск
    const exec = await run(java, ['-Dfile.encoding=UTF-8', '-cp', '.', entry], {
      cwd: dir,
      timeout: 8000,
      maxBuffer: 1024 * 1024
    })

    if (exec.error && exec.error.killed) {
      return {
        ok: false,
        phase: 'run',
        stdout: exec.stdout,
        stderr: 'Превышено время выполнения (возможно, бесконечный цикл).'
      }
    }

    return {
      ok: !exec.error,
      phase: 'run',
      stdout: exec.stdout,
      stderr: exec.stderr || (exec.error ? exec.error.message : '')
    }
  } catch (e) {
    return { ok: false, phase: 'error', stdout: '', stderr: String(e && e.message) }
  } finally {
    if (dir) {
      try {
        rmSync(dir, { recursive: true, force: true })
      } catch {
        /* ignore */
      }
    }
  }
}

// Заменяем абсолютные пути temp-папки в выводе компилятора на короткое имя файла.
function cleanup(text, dir) {
  if (!text) return ''
  const full = path.join(dir, 'Solution.java')
  return text.split(full).join('Solution.java').split(dir).join('').trim()
}
