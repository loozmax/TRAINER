import { Coffee, Leaf, Database, Rocket, CheckCircle2, Circle, GraduationCap } from 'lucide-react'
import { Progress } from './ui/progress'
import { cn } from '@/lib/utils'

const ICONS = { Coffee, Leaf, Database, Rocket }

export default function Sidebar({ modules, progress, activeId, onSelect, totalSolved, totalCount }) {
  return (
    <aside className="flex h-full w-[320px] shrink-0 flex-col border-r border-border bg-card/40">
      {/* Заголовок */}
      <div className="px-5 pb-4 pt-6">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-primary to-[hsl(190_90%_55%)] shadow-glow">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-foreground">Java Trainer</h1>
            <p className="text-xs text-muted-foreground">Java · Spring Boot · Hibernate</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Прогресс</span>
            <span className="font-semibold text-primary">
              {totalSolved} / {totalCount}
            </span>
          </div>
          <Progress value={totalCount ? (totalSolved / totalCount) * 100 : 0} />
        </div>
      </div>

      {/* Список модулей */}
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 pb-6">
        {modules.map((mod) => {
          const Icon = ICONS[mod.icon] || Coffee
          const solved = mod.tasks.filter((t) => progress[t.id]?.completed).length
          return (
            <div key={mod.id}>
              <div className="mb-2 flex items-center gap-2.5 px-2">
                <div
                  className="grid h-7 w-7 place-items-center rounded-md"
                  style={{ backgroundColor: `${mod.color}22`, color: mod.color }}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-1 items-center gap-1.5">
                  <span className="text-sm font-semibold text-foreground">{mod.title}</span>
                  {mod.isProject && (
                    <span
                      className="rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide"
                      style={{ backgroundColor: `${mod.color}22`, color: mod.color }}
                    >
                      Проект
                    </span>
                  )}
                </div>
                <span className="text-[11px] tabular-nums text-muted-foreground">
                  {solved}/{mod.tasks.length}
                </span>
              </div>

              <div className="space-y-1">
                {mod.tasks.map((task) => {
                  const done = progress[task.id]?.completed
                  const active = task.id === activeId
                  return (
                    <button
                      key={task.id}
                      onClick={() => onSelect(task.id)}
                      className={cn(
                        'group flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left transition-all',
                        active ? 'bg-primary/15 ring-1 ring-primary/40' : 'hover:bg-accent'
                      )}
                    >
                      {done ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                      ) : (
                        <Circle
                          className={cn(
                            'h-4 w-4 shrink-0',
                            active ? 'text-primary' : 'text-muted-foreground/50'
                          )}
                        />
                      )}
                      <span
                        className={cn(
                          'flex-1 truncate text-sm',
                          active ? 'font-medium text-foreground' : 'text-muted-foreground'
                        )}
                      >
                        {task.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
