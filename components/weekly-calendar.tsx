"use client"

import { format, addDays } from "date-fns"

interface Task {
  id: string
  title: string
  date: string
  completed: boolean
  category: string
}

interface WeeklyCalendarProps {
  selectedDate: string
  onDateSelect: (date: string) => void
  tasks: Task[]
  onDeleteTask: (id: string) => void
  onToggleTask: (id: string) => void
  weekStartDate: string
}

export default function WeeklyCalendar({
  selectedDate,
  onDateSelect,
  tasks,
  onDeleteTask,
  onToggleTask,
  weekStartDate,
}: WeeklyCalendarProps) {
  const weekStart = new Date(weekStartDate)
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))
  const today = new Date().toISOString().split("T")[0]

  return (
    <div className="grid grid-cols-7 gap-3 h-[500px]">
      {weekDays.map((day) => {
        const dateStr = format(day, "yyyy-MM-dd")
        const dayTasks = tasks.filter((task) => task.date === dateStr)
        const isSelected = dateStr === selectedDate
        const isToday = dateStr === today

        return (
          <div
            key={dateStr}
            onClick={() => onDateSelect(dateStr)}
            className="flex flex-col h-full cursor-pointer group"
          >
            {/* Day Header - Pixel Art Box */}
            <div className="text-center mb-2">
              <span className="inline-block text-[10px] sm:text-xs font-bold text-white tracking-tighter drop-shadow-md">
                {format(day, "EEE")}, {format(day, "d")}
              </span>
            </div>

            {/* Day Column */}
            <div className={`flex-1 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden ${isToday
                ? "bg-gradient-to-b from-purple-500 to-pink-600 border-yellow-300 shadow-[0_0_15px_rgba(253,224,71,0.5)]"
                : isSelected
                  ? "bg-gradient-to-b from-purple-600 to-purple-800 border-white"
                  : "bg-gradient-to-b from-purple-900/50 to-purple-900/80 border-purple-700/50 hover:border-pink-500/50"
              }`}>
              {/* Tasks List */}
              <div className="p-2 space-y-2 overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-pink-500">
                {dayTasks.map((task) => (
                  <div key={task.id} className="group/task relative bg-black/20 p-2 rounded text-xs text-white border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleTask(task.id);
                        }}
                        className={`mt-0.5 w-3 h-3 border border-white/50 rounded-sm flex items-center justify-center ${task.completed ? "bg-yellow-300 border-yellow-300" : ""}`}
                      >
                        {task.completed && <span className="text-black text-[8px]">✓</span>}
                      </button>
                      <span className={`break-words leading-tight ${task.completed ? "line-through opacity-50" : ""}`}>
                        {task.title}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onDeleteTask(task.id)
                      }}
                      className="absolute top-1 right-1 opacity-0 group-hover/task:opacity-100 text-pink-300 hover:text-red-400 font-bold px-1"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
