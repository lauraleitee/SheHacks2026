"use client"

import type { Task } from "@/app/page"
import TaskBlock from "./task-block"

interface TaskListProps {
  tasks: Task[]
  onDeleteTask: (id: string) => void
  onToggleTask: (id: string) => void
}

export default function TaskList({ tasks, onDeleteTask, onToggleTask }: TaskListProps) {
  // Sort tasks by start time
  const sortedTasks = [...tasks].sort((a, b) => a.startTime.localeCompare(b.startTime))

  // Group tasks by hour
  const timeSlots = new Map<string, Task[]>()
  sortedTasks.forEach((task) => {
    const hour = task.startTime.split(":")[0]
    const key = `${hour}:00`
    if (!timeSlots.has(key)) {
      timeSlots.set(key, [])
    }
    timeSlots.get(key)!.push(task)
  })

  const allHours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"))

  return (
    <div className="bg-gradient-to-b from-black to-slate-900/20 border border-cyan-500/30 rounded-lg overflow-hidden backdrop-blur-sm">
      <div className="sticky top-24 bg-black border-b border-cyan-500/30 px-6 py-3 z-40">
        <h2 className="text-cyan-400 font-mono font-bold">
          TIMELINE {sortedTasks.length > 0 && `• ${sortedTasks.length} ACTIVE`}
        </h2>
      </div>

      {sortedTasks.length === 0 ? (
        <div className="p-12 text-center">
          <p className="text-cyan-300/60 font-mono text-sm">NO TASKS SCHEDULED FOR THIS DATE</p>
          <p className="text-cyan-300/40 font-mono text-xs mt-2">Create a new task to get started</p>
        </div>
      ) : (
        <div className="divide-y divide-cyan-500/20">
          {sortedTasks.map((task) => (
            <TaskBlock
              key={task.id}
              task={task}
              onDelete={() => onDeleteTask(task.id)}
              onToggle={() => onToggleTask(task.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
