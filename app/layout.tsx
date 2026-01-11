import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const pressStart2P = Press_Start_2P({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

export const metadata: Metadata = {
  title: "StudySync 2200",
  description: "Your local student friendly planner for year 2200",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${pressStart2P.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
