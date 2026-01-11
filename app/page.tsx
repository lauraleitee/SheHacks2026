"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800 text-white overflow-hidden relative">
      <Header />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo and Title */}
            <div className="space-y-6">
              <div className="relative w-28 h-24 bg-pink-500 clip-pixel-heart flex items-center justify-center">
                <div className="text-[0.6rem] leading-tight font-bold text-yellow-300 text-center uppercase tracking-tighter">
                  PowerHack<br />Girls!
                </div>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-black text-yellow-300 font-pixel tracking-widest drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-4">
                  StudySync 2200
                </h1>
                <p className="text-xl md:text-2xl text-white font-pixel italic drop-shadow-md">
                  The future of student productivity
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="space-y-6 bg-white/10 p-8 rounded-[2rem] backdrop-blur-sm border-2 border-white/20">
              <div className="inline-block bg-pink-500/80 rounded-2xl px-6 py-2 border-2 border-white/50 transform -rotate-2">
                <h2 className="text-2xl md:text-3xl font-bold font-brush italic">
                  Our Mission
                </h2>
              </div>
              <div className="space-y-4 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  StudySync 2200, made by the <span className="font-bold text-yellow-300">Powerhack Girls</span>, is a dynamic to-do list and planner inspired by our
                  personal experiences as women in STEM navigating stress, deadlines, and overwhelming workloads.
                </p>
                <p>
                  Our vision is to turn those challenges into a more supportive productivity tool that helps students stay
                  organized, reduce stress, and feel confident managing their academic lives in a fast-paced,
                  future-focused world.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/todo"
              className="inline-flex items-center justify-center w-full md:w-auto px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl font-bold text-xl border-t-4 border-l-4 border-pink-300 border-b-4 border-r-4 border-purple-900 shadow-[0_6px_0_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,0.3)] active:translate-y-1 active:shadow-none transition-all uppercase tracking-wide"
            >
              Get Started
            </Link>
          </div>

          {/* Right Decorative Elements */}
          <div className="relative h-[500px] hidden md:block">
            {/* Planet */}
            <div className="absolute top-0 right-0">
              <div className="relative w-40 h-40 bg-purple-900 rounded-full border-4 border-black overflow-hidden shadow-xl">
                <div className="absolute top-1/2 left-0 w-full h-4 bg-pink-500 -rotate-45 transform origin-center border-y-2 border-black"></div>
                <div className="absolute top-6 right-6 w-8 h-8 bg-purple-800 rounded-full opacity-50"></div>
              </div>
              {/* Ring */}
              <div className="absolute top-1/2 left-1/2 w-60 h-16 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-60"></div>
            </div>

            {/* Clipboard */}
            <div className="absolute bottom-10 right-10">
              <div className="w-48 h-60 bg-purple-900 rounded-2xl border-4 border-black p-4 rotate-12 shadow-2xl relative">
                <div className="w-full h-full bg-pink-500/20 rounded-lg flex flex-col gap-3 p-2">
                  <div className="w-1/2 h-4 bg-white/20 rounded"></div>
                  <div className="w-3/4 h-3 bg-white/10 rounded"></div>
                  <div className="w-full h-3 bg-white/10 rounded"></div>
                  <div className="w-5/6 h-3 bg-white/10 rounded"></div>
                  <div className="mt-4 flex gap-2">
                    <div className="w-4 h-4 border border-white rounded"></div>
                    <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 border border-white rounded"></div>
                    <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                  </div>
                </div>
                {/* Clip */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-10 bg-gray-300 rounded-t-lg border-4 border-black flex items-center justify-center">
                  <div className="w-16 h-2 bg-black rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="absolute top-20 left-10 text-6xl text-yellow-300">★</div>
            <div className="absolute bottom-40 left-20 text-4xl text-yellow-300">★</div>
            <div className="absolute top-40 right-40 text-2xl text-white">✦</div>
          </div>
        </div>
      </div>
    </main>
  )
}
