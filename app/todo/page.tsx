"use client"

import { useState, useEffect } from "react"
import { addDays, startOfWeek, format } from "date-fns"
import WeeklyCalendar from "@/components/weekly-calendar"
import TaskForm from "@/components/task-form"
import StatsCards from "@/components/stats-cards"
import Header from "@/components/header"

export interface Task {
  id: string
  title: string
  date: string
  completed: boolean
  category: "Assignment" | "Exam" | "Project" | "Test" | "Other"
}

export default function TodoPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [weekStartDate, setWeekStartDate] = useState<string>(format(startOfWeek(new Date()), "yyyy-MM-dd"))
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("studysync-tasks")
    if (saved) {
      try {
        setTasks(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse saved tasks")
      }
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("studysync-tasks", JSON.stringify(tasks))
    }
  }, [tasks, mounted])

  const addTask = (task: Omit<Task, "id">) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const handlePreviousWeek = () => {
    const previousWeek = addDays(new Date(weekStartDate), -7)
    setWeekStartDate(format(previousWeek, "yyyy-MM-dd"))
    setSelectedDate(format(previousWeek, "yyyy-MM-dd"))
  }

  const handleNextWeek = () => {
    const nextWeek = addDays(new Date(weekStartDate), 7)
    setWeekStartDate(format(nextWeek, "yyyy-MM-dd"))
    setSelectedDate(format(nextWeek, "yyyy-MM-dd"))
  }

  const handleToday = () => {
    const today = new Date().toISOString().split("T")[0]
    setWeekStartDate(format(startOfWeek(new Date(today)), "yyyy-MM-dd"))
    setSelectedDate(today)
  }

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((t) => t.completed).length
  const incompleteTasks = tasks.filter((t) => !t.completed).length

  const weekStart = new Date(weekStartDate)
  const weekEnd = addDays(weekStart, 6)
  const monthYear = format(weekStart, "MMMM, yyyy")
  const weekOf = format(weekStart, "MMMM do")

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center">
        <div className="animate-pulse">Initializing StudySync 2200...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pb-20">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <StatsCards total={totalTasks} completed={completedTasks} incomplete={incompleteTasks} />

        {/* Date Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 my-12 px-4 md:px-12">
          <button
            onClick={handlePreviousWeek}
            className="px-8 py-3 rounded-full bg-purple-900/40 border-2 border-pink-500/50 text-white font-bold text-sm hover:bg-pink-500 hover:border-pink-500 transition shadow-[0_4px_0_rgb(88,28,135)] active:translate-y-1 active:shadow-none"
          >
            {"<"} Previous
          </button>

          <div className="text-center space-y-2">
            <h2
              className="text-4xl md:text-6xl font-black text-yellow-300 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "'Press Start 2P', monospace", letterSpacing: "-2px" }}
            >
              {monthYear}
            </h2>
            <p className="text-pink-200 text-lg font-bold tracking-widest uppercase">Week of {weekOf}</p>
          </div>

          <button
            onClick={handleNextWeek}
            className="px-8 py-3 rounded-full bg-purple-900/40 border-2 border-pink-500/50 text-white font-bold text-sm hover:bg-pink-500 hover:border-pink-500 transition shadow-[0_4px_0_rgb(88,28,135)] active:translate-y-1 active:shadow-none"
          >
            Next {">"}
          </button>
        </div>

        {/* Task Input Section */}
        <div className="bg-pink-600/10 rounded-[2rem] p-6 border-2 border-pink-500/20 mb-8 backdrop-blur-sm">
          <TaskForm onAddTask={addTask} selectedDate={selectedDate} />
        </div>

        {/* Main Calendar */}
        <WeeklyCalendar
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
          weekStartDate={weekStartDate}
        />
      </div>
    </main>
  )
}
