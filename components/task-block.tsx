"use client"

import type { Task } from "@/app/page"

interface TaskBlockProps {
  task: Task
  onDelete: () => void
  onToggle: () => void
}

const colorClasses = {
  cyan: "from-cyan-600/20 to-cyan-900/10 border-cyan-500/40 text-cyan-100 accent-cyan-400",
  magenta: "from-magenta-600/20 to-magenta-900/10 border-magenta-500/40 text-magenta-100 accent-magenta-400",
  lime: "from-lime-600/20 to-lime-900/10 border-lime-500/40 text-lime-100 accent-lime-400",
  purple: "from-purple-600/20 to-purple-900/10 border-purple-500/40 text-purple-100 accent-purple-400",
}

const accentColors = {
  cyan: "text-cyan-400",
  magenta: "text-magenta-400",
  lime: "text-lime-400",
  purple: "text-purple-400",
}

export default function TaskBlock({ task, onDelete, onToggle }: TaskBlockProps) {
  return (
    <div
      className={`bg-gradient-to-r ${colorClasses[task.color]} border border-r-4 p-4 transition-all hover:shadow-lg hover:shadow-${task.color}-500/20 group`}
    >
      <div className="flex gap-4 items-start">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="mt-1 w-5 h-5 rounded cursor-pointer accent-cyan-400 focus:outline-none"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-2">
            <h3 className={`text-lg font-mono font-bold ${task.completed ? "line-through opacity-60" : ""}`}>
              {task.title}
            </h3>
            <span className={`text-xs font-mono whitespace-nowrap ${accentColors[task.color]}/70`}>
              {task.startTime} — {task.endTime}
            </span>
          </div>

          {task.description && (
            <p className={`text-sm font-mono ${task.completed ? "opacity-50" : "opacity-75"}`}>{task.description}</p>
          )}
        </div>

        <button
          onClick={onDelete}
          className="px-3 py-1 text-xs font-mono text-red-400/60 hover:text-red-400 hover:bg-red-500/10 border border-red-500/20 rounded transition opacity-0 group-hover:opacity-100"
        >
          DEL
        </button>
      </div>
    </div>
  )
}
