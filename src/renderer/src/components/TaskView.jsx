import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Play,
  RotateCcw,
  Eye,
  EyeOff,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Trophy,
  ChevronRight,
  Terminal,
  Loader2,
  AlertTriangle
} from 'lucide-react'
import CodeEditor from './CodeEditor'
import Markdown from './Markdown'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { runChecks } from '../lib/checker'
import { runJavaTask } from '../lib/javaRun'

function DifficultyBadge({ level }) {
  const variant =
    level === 'Лёгкое' ? 'success' : level === 'Сложное' ? 'destructive' : 'warning'
  return <Badge variant={variant}>{level}</Badge>
}

export default function TaskView({
  task,
  code,
  onChange,
  onSolved,
  moduleTitle,
  moduleColor,
  completed,
  jdk
}) {
  const [results, setResults] = useState(null)
  const [runResult, setRunResult] = useState(null)
  const [running, setRunning] = useState(false)
  const [lastAction, setLastAction] = useState(null) // 'check' | 'run'
  const [showSolution, setShowSolution] = useState(false)
  const [savedCode, setSavedCode] = useState(null)
  const [hintCount, setHintCount] = useState(0)
  const [justSolved, setJustSolved] = useState(false)

  const runnable = !!task.run && jdk?.available

  // Сброс эфемерного состояния при смене задания
  useEffect(() => {
    setResults(null)
    setRunResult(null)
    setRunning(false)
    setLastAction(null)
    setShowSolution(false)
    setSavedCode(null)
    setHintCount(0)
    setJustSolved(false)
  }, [task.id])

  function celebrate() {
    if (!completed) {
      setJustSolved(true)
      onSolved(task.id)
      setTimeout(() => setJustSolved(false), 2600)
    }
  }

  function handleCheck() {
    const res = runChecks(task, code)
    setResults(res)
    setLastAction('check')
    if (res.passed) celebrate()
  }

  async function handleRun() {
    setRunning(true)
    setLastAction('run')
    try {
      const res = await runJavaTask(task, code)
      setRunResult(res)
      if (res.matched) celebrate()
    } finally {
      setRunning(false)
    }
  }

  function handleReset() {
    onChange(task.starter)
    setResults(null)
    setRunResult(null)
    setShowSolution(false)
  }

  function applySolution() {
    setSavedCode(code)
    onChange(task.solution)
    setShowSolution(true)
    setResults(null)
    setRunResult(null)
  }

  function hideSolution() {
    if (savedCode !== null) onChange(savedCode)
    setShowSolution(false)
  }

  return (
    <div className="flex h-full flex-col">
      {/* Шапка задания */}
      <header className="flex items-center gap-3 border-b border-border px-7 py-5">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <span style={{ color: moduleColor }}>{moduleTitle}</span>
            <ChevronRight className="h-3 w-3" />
            <span>Задание</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="truncate text-xl font-bold text-foreground">{task.title}</h2>
            <DifficultyBadge level={task.difficulty} />
            {task.run && (
              <Badge variant={jdk?.available ? 'success' : 'secondary'}>
                <Terminal /> {jdk?.available ? 'Запускается' : 'Нужен JDK'}
              </Badge>
            )}
            {completed && (
              <Badge variant="success">
                <CheckCircle2 /> Решено
              </Badge>
            )}
          </div>
        </div>
      </header>

      {/* Тело: теория слева, редактор справа */}
      <div className="grid min-h-0 flex-1 grid-cols-[minmax(300px,400px)_1fr]">
        {/* Левая колонка */}
        <div className="flex flex-col gap-4 overflow-y-auto border-r border-border p-6">
          <section>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Теория
            </h3>
            <Card className="p-4">
              <Markdown text={task.theory} className="text-sm" />
            </Card>
          </section>

          <section>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Задача
            </h3>
            <Card className="border-primary/20 bg-primary/5 p-4">
              <Markdown text={task.task} className="text-sm text-foreground/90" />
            </Card>
          </section>

          {/* Подсказки */}
          <section>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Подсказки
              </h3>
              {hintCount < task.hints.length && (
                <button
                  onClick={() => setHintCount((c) => c + 1)}
                  className="inline-flex items-center gap-1 text-xs text-warning hover:brightness-110"
                >
                  <Lightbulb className="h-3.5 w-3.5" />
                  Открыть ({hintCount}/{task.hints.length})
                </button>
              )}
            </div>
            <div className="space-y-2">
              <AnimatePresence>
                {task.hints.slice(0, hintCount).map((hint, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2 rounded-md border border-warning/20 bg-warning/5 p-3 text-sm text-foreground/80"
                  >
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                    <span>{hint}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              {hintCount === 0 && (
                <p className="text-xs text-muted-foreground/70">
                  Застрял? Открывай подсказки по одной — это нормально.
                </p>
              )}
            </div>
          </section>
        </div>

        {/* Правая колонка: редактор + результаты */}
        <div className="flex min-h-0 flex-col gap-3 p-6">
          {/* Тулбар */}
          <div className="flex items-center gap-2">
            {runnable ? (
              <>
                <Button variant="gradient" onClick={handleRun} disabled={running}>
                  {running ? <Loader2 className="animate-spin" /> : <Terminal />}
                  {running ? 'Запуск…' : 'Запустить'}
                </Button>
                <Button variant="outline" onClick={handleCheck} disabled={running}>
                  <CheckCircle2 />
                  Проверить
                </Button>
              </>
            ) : (
              <Button variant="gradient" onClick={handleCheck}>
                <Play />
                Проверить
              </Button>
            )}
            <Button variant="outline" onClick={handleReset} disabled={running}>
              <RotateCcw />
              Сброс
            </Button>
            <div className="flex-1" />
            {showSolution ? (
              <Button variant="outline" onClick={hideSolution}>
                <EyeOff />
                Скрыть решение
              </Button>
            ) : (
              <Button variant="soft" onClick={applySolution}>
                <Eye />
                Показать решение
              </Button>
            )}
          </div>

          {/* Редактор */}
          <Card className="relative min-h-0 flex-1 overflow-hidden p-1">
            <CodeEditor value={code} onChange={onChange} />
          </Card>

          {/* Результаты: консоль запуска или проверка по шаблонам */}
          {lastAction === 'run' ? (
            <RunConsole running={running} result={runResult} />
          ) : (
            <ResultsPanel results={results} runnable={runnable} />
          )}
        </div>
      </div>

      {/* Баннер успеха */}
      <AnimatePresence>
        {justSolved && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="pointer-events-none fixed bottom-8 left-1/2 z-50 -translate-x-1/2"
          >
            <div className="flex items-center gap-3 rounded-lg border border-success/40 bg-card px-6 py-4 shadow-glow">
              <Trophy className="h-6 w-6 text-warning" />
              <div>
                <div className="font-semibold text-foreground">Задание решено!</div>
                <div className="text-xs text-muted-foreground">
                  Отличная работа — двигаемся дальше
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function RunConsole({ running, result }) {
  if (running) {
    return (
      <Card className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        Компиляция и запуск через JDK…
      </Card>
    )
  }
  if (!result) return null

  const compileError = result.phase === 'compile'
  const runtimeError = result.phase === 'run' && !result.ok
  const mismatch = result.ok && !result.matched

  let header
  if (result.matched) {
    header = (
      <div className="flex items-center gap-2 text-success">
        <CheckCircle2 className="h-5 w-5" />
        <span className="font-semibold">Программа запустилась, вывод совпал с ожидаемым</span>
      </div>
    )
  } else if (compileError) {
    header = (
      <div className="flex items-center gap-2 text-destructive">
        <XCircle className="h-5 w-5" />
        <span className="font-semibold">Ошибка компиляции</span>
      </div>
    )
  } else if (runtimeError) {
    header = (
      <div className="flex items-center gap-2 text-destructive">
        <XCircle className="h-5 w-5" />
        <span className="font-semibold">Ошибка во время выполнения</span>
      </div>
    )
  } else if (mismatch) {
    header = (
      <div className="flex items-center gap-2 text-warning">
        <AlertTriangle className="h-5 w-5" />
        <span className="font-semibold">Запустилось, но вывод отличается</span>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      <Card
        className={`max-h-52 space-y-2 overflow-y-auto p-4 ${
          result.matched ? 'border-success/40' : ''
        }`}
      >
        {header}

        {result.stdout && (
          <div>
            <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Terminal className="h-3.5 w-3.5" /> Вывод программы
            </div>
            <pre className="selectable whitespace-pre-wrap rounded-md bg-secondary p-3 font-mono text-xs text-foreground">
              {result.stdout}
            </pre>
          </div>
        )}

        {result.stderr && (
          <div>
            <div className="mb-1 text-xs text-destructive">Ошибки</div>
            <pre className="selectable whitespace-pre-wrap rounded-md bg-destructive/10 p-3 font-mono text-xs text-destructive">
              {result.stderr}
            </pre>
          </div>
        )}

        {mismatch && result.expected && (
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <div className="mb-1 text-muted-foreground">Ожидалось</div>
              <pre className="selectable whitespace-pre-wrap rounded-md bg-success/10 p-2 font-mono text-success">
                {result.expected}
              </pre>
            </div>
            <div>
              <div className="mb-1 text-muted-foreground">Получено</div>
              <pre className="selectable whitespace-pre-wrap rounded-md bg-warning/10 p-2 font-mono text-warning">
                {result.actual || '(пусто)'}
              </pre>
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  )
}

function ResultsPanel({ results, runnable }) {
  if (!results) {
    return (
      <Card className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground">
        <Play className="h-4 w-4" />
        {runnable
          ? 'Нажми «Запустить» для реальной компиляции или «Проверить» для разбора по критериям.'
          : 'Нажми «Проверить», чтобы прогнать код по критериям задания.'}
      </Card>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      <Card
        className={`max-h-44 overflow-y-auto p-4 ${results.passed ? 'border-success/40' : ''}`}
      >
        <div className="mb-2 flex items-center gap-2">
          {results.passed ? (
            <>
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="font-semibold text-success">Все критерии пройдены</span>
            </>
          ) : (
            <span className="text-sm font-medium text-foreground/80">
              Пройдено критериев: {results.results.filter((r) => r.passed).length} /{' '}
              {results.results.length}
            </span>
          )}
        </div>
        <ul className="space-y-1.5">
          {results.results.map((r, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              {r.passed ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
              ) : (
                <XCircle className="h-4 w-4 shrink-0 text-destructive" />
              )}
              <span className={r.passed ? 'text-muted-foreground' : 'text-foreground/80'}>
                {r.message}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}
