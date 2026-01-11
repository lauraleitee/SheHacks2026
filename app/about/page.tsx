"use client"

import Link from "next/link"
import Header from "@/components/header"

interface TeamMember {
  name: string
  facts: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: "Eshanya R.",
    facts: ["i'm addicted to matcha", "dogs are my fav animal", "i'm on WITS+!"],
  },
  {
    name: "Prisha K.",
    facts: ["I am a night owl", "I love all types of animals", "I played basketball professionally"],
  },
  {
    name: "Laura L.",
    facts: ["I'm a lacrosse player for the Western Varsity team", "I moved here from Brazil", "I love Harry Potter"],
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-20">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col items-center mb-16">
          <div className="flex gap-4 items-center mb-8">
            <div className="relative w-20 h-20 bg-pink-500 clip-pixel-heart flex items-center justify-center animate-pulse">
              <div className="text-[0.6rem] leading-tight font-bold text-yellow-300 text-center uppercase tracking-tighter">
                PowerHack<br />Girls!
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-yellow-300 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] tracking-widest">
              StudySync 2200
            </h1>
          </div>

          {/* About Us Title Banner */}
          <div className="relative bg-gradient-to-r from-pink-400 to-purple-400 px-12 py-6 rounded-[2rem] border-4 border-pink-300 shadow-[0_8px_0_rgba(0,0,0,0.2)]">
            <h2 className="text-3xl md:text-5xl font-bold text-black font-pixel uppercase tracking-widest text-center stroke-black drop-shadow-sm">
              ABOUT US PAGE
            </h2>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-pink-200 font-pixel drop-shadow-md ml-4 text-shadow-sm">
            Meet our team!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-transform duration-300 border-t border-white/20"
              >
                <h4 className="text-xl md:text-3xl font-bold mb-8 text-white font-pixel text-center">{member.name}</h4>
                <ul className="space-y-6">
                  {member.facts.map((fact, factIndex) => (
                    <li key={factIndex} className="flex items-start gap-4 text-base md:text-lg text-pink-50 font-medium leading-relaxed">
                      <span className="text-white text-xl mt-1">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
