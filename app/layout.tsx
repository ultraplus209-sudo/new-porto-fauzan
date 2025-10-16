import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fauzan Arbi | Operations Specialist",
  description:
    "Portfolio of Fauzan Arbi, an Operations Specialist with experience in project lifecycle management, logistics, and process digitalization.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.className} bg-background text-foreground`}>{children}</body>
    </html>
  )
}
