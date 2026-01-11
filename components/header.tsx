"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isTodoPage = pathname === "/todo"

  if (pathname === "/") {
    return null
  }

  return (
    <header className="sticky top-0 z-50 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-4 group">
          {/* Pixel Heart Logo Simulation */}
          <div className="relative w-16 h-14 bg-pink-500 clip-pixel-heart flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <div className="text-[0.5rem] leading-tight font-bold text-yellow-300 text-center uppercase tracking-tighter">
              PowerHack<br />Girls!
            </div>
            {/* Decorative pixels */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 animate-pulse delay-75" />
          </div>

          <h1 className="text-2xl md:text-3xl text-yellow-300 tracking-widest drop-shadow-[2px_2px_0_rgba(0,0,0,1)] hover:text-yellow-200 transition-colors">
            StudySync 2200
          </h1>
        </Link>

        <nav className="flex items-center gap-4 bg-purple-900/50 p-2 rounded-2xl border-2 border-pink-500/50 backdrop-blur-sm">
          <Link
            href="/todo"
            className={`px-6 py-2 rounded-xl text-xs md:text-sm transition-all border-2 ${isTodoPage
                ? "bg-pink-500 border-white text-white shadow-[0_4px_0_rgb(131,24,67)] translate-y-[-2px]"
                : "bg-transparent border-transparent text-pink-200 hover:bg-pink-500/20 hover:text-white"
              }`}
          >
            To-Do List
          </Link>
          <Link
            href="/about"
            className={`px-6 py-2 rounded-xl text-xs md:text-sm transition-all border-2 ${pathname === "/about"
                ? "bg-pink-500 border-white text-white shadow-[0_4px_0_rgb(131,24,67)] translate-y-[-2px]"
                : "bg-transparent border-transparent text-pink-200 hover:bg-pink-500/20 hover:text-white"
              }`}
          >
            About Us
          </Link>
          <div className="w-px h-6 bg-pink-500/50 mx-2" />
          <button className="text-sm font-bold text-white hover:text-yellow-300 transition-colors px-4">
            Log in
          </button>
          <button className="px-6 py-2 bg-purple-600 hover:bg-purple-500 border-2 border-purple-400 rounded-xl text-sm shadow-[0_4px_0_rgb(88,28,135)] active:translate-y-[2px] active:shadow-none transition-all">
            Sign up
          </button>
        </nav>
      </div>
    </header>
  )
}
