"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import CaseStudy from "@/components/case-study"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <CaseStudy />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
