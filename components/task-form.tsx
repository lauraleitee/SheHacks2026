"use client"

import type React from "react"
import { useState } from "react"

type TaskCategory = "Assignment" | "Exam" | "Project" | "Test" | "Other"

const CATEGORIES: TaskCategory[] = ["Assignment", "Exam", "Project", "Test", "Other"]

interface TaskFormProps {
  onAddTask: (task: { title: string; date: string; completed: boolean; category: TaskCategory }) => void
  selectedDate: string
}

export default function TaskForm({ onAddTask, selectedDate }: TaskFormProps) {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState<TaskCategory | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !category) return

    onAddTask({
      title: title.trim(),
      date: selectedDate,
      completed: false,
      category,
    })

    setTitle("")
    setCategory(null)
  }

  const selectedDateFormatted = new Date(selectedDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  const handleCategoryClick = (cat: TaskCategory) => {
    setCategory(category === cat ? null : cat)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-12 space-y-6"
    >
      {/* Input Group */}
      <div className="flex gap-4 p-2 bg-[#4c1d95] rounded-2xl border-4 border-[#3b0764] shadow-[0_4px_0_rgba(0,0,0,0.3)]">
        <input
          type="text"
          placeholder="Enter your task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 bg-transparent border-none text-white placeholder-purple-300 text-lg md:text-xl font-pixel px-4 focus:ring-0"
        />
        <button
          type="submit"
          disabled={!title.trim() || !category}
          className="px-6 py-2 bg-pink-500 hover:bg-pink-400 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_0_#9d174d] active:shadow-none active:translate-y-1"
        >
          + Add
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => handleCategoryClick(cat)}
            className={`px-8 py-2 rounded-full text-sm font-bold transition-all border-2 ${category === cat
                ? "bg-pink-500 border-white text-white shadow-[0_4px_0_#9d174d] -translate-y-1"
                : "bg-pink-500/30 border-pink-400/50 text-pink-100 hover:bg-pink-500/50"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </form>
  )
}
