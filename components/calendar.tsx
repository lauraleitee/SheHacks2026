"use client"

import { useState } from "react"
import type { Task } from "@/app/page"

interface CalendarProps {
  selectedDate: string
  onDateSelect: (date: string) => void
  tasks: Task[]
}

export default function Calendar({ selectedDate, onDateSelect, tasks }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getTaskCountForDate = (dateStr: string) => {
    return tasks.filter((task) => task.date === dateStr).length
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const days = []
  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)

  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  // Days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const year = currentMonth.getFullYear()
  const month = String(currentMonth.getMonth() + 1).padStart(2, "0")

  return (
    <div className="bg-gradient-to-b from-black to-slate-900/20 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-2 mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 text-cyan-400 hover:text-magenta-400 text-sm font-mono transition"
        >
          ← PREV
        </button>
        <h2 className="text-center font-mono font-bold text-cyan-300 text-sm">
          {currentMonth.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 text-cyan-400 hover:text-magenta-400 text-sm font-mono transition"
        >
          NEXT →
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div key={day} className="text-center text-xs font-mono text-cyan-400/60 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => {
          const dateStr = day ? `${year}-${month}-${String(day).padStart(2, "0")}` : null
          const taskCount = dateStr ? getTaskCountForDate(dateStr) : 0
          const isSelected = dateStr === selectedDate
          const isToday = dateStr === new Date().toISOString().split("T")[0]

          return (
            <button
              key={i}
              onClick={() => dateStr && onDateSelect(dateStr)}
              disabled={!day}
              className={`aspect-square rounded text-xs font-mono font-bold transition-all ${
                !day
                  ? "bg-transparent"
                  : isSelected
                    ? "bg-magenta-500 text-black border-2 border-magenta-400 shadow-lg shadow-magenta-500/50"
                    : isToday
                      ? "bg-cyan-500/20 border border-cyan-500 text-cyan-300"
                      : taskCount > 0
                        ? "bg-slate-800 border border-cyan-500/40 text-cyan-300 hover:bg-slate-700"
                        : "bg-slate-900/40 border border-cyan-500/20 text-cyan-400/60 hover:bg-slate-800"
              }`}
            >
              {day && (
                <div className="flex flex-col items-center justify-center h-full">
                  <span>{day}</span>
                  {taskCount > 0 && <span className="text-xs opacity-75">•</span>}
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
