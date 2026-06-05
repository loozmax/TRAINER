import { useEffect, useMemo, useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import TaskView from './components/TaskView'
import { modules, allTasks } from './data/curriculum'
import { loadProgress, saveProgress } from './lib/storage'
import { detectJdk } from './lib/javaRun'

export default function App() {
  // progress: { [taskId]: { completed: boolean, code: string } }
  const [progress, setProgress] = useState({})
  const [activeId, setActiveId] = useState(allTasks[0].id)
  const [loaded, setLoaded] = useState(false)
  const [jdk, setJdk] = useState({ available: false })
  const saveTimer = useRef(null)

  // Загрузка прогресса при старте
  useEffect(() => {
    loadProgress().then((data) => {
      setProgress(data || {})
      setLoaded(true)
    })
    detectJdk().then(setJdk)
  }, [])

  // Дебаунс-сохранение в файл
  useEffect(() => {
    if (!loaded) return
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => saveProgress(progress), 400)
    return () => clearTimeout(saveTimer.current)
  }, [progress, loaded])

  const activeTask = useMemo(() => allTasks.find((t) => t.id === activeId), [activeId])

  const code = progress[activeId]?.code ?? activeTask.starter
  const totalSolved = allTasks.filter((t) => progress[t.id]?.completed).length

  function setCode(newCode) {
    setProgress((p) => ({
      ...p,
      [activeId]: { ...(p[activeId] || {}), code: newCode }
    }))
  }

  function markSolved(taskId) {
    setProgress((p) => ({
      ...p,
      [taskId]: { ...(p[taskId] || {}), completed: true }
    }))
  }

  if (!loaded) {
    return (
      <div className="grid h-full place-items-center text-muted-foreground">
        <div className="animate-pulse">Загрузка…</div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full overflow-hidden bg-background">
      <Sidebar
        modules={modules}
        progress={progress}
        activeId={activeId}
        onSelect={setActiveId}
        totalSolved={totalSolved}
        totalCount={allTasks.length}
      />
      <main className="min-w-0 flex-1">
        <TaskView
          key={activeTask.id}
          task={activeTask}
          code={code}
          onChange={setCode}
          onSolved={markSolved}
          moduleTitle={activeTask.moduleTitle}
          moduleColor={activeTask.moduleColor}
          completed={!!progress[activeId]?.completed}
          jdk={jdk}
        />
      </main>
    </div>
  )
}
