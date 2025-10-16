"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#case-study", label: t("nav.caseStudy") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-4 border-accent retro-stripes">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="#"
          className="text-3xl font-black text-accent hover:scale-110 transition-transform duration-300 text-retro"
        >
          Fauzan Arbi
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-bold text-foreground hover:text-accent transition-all duration-300 relative group text-sm uppercase tracking-wider"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-3 ml-6 pl-6 border-l-4 border-accent">
            <button
              onClick={() => setLanguage("en")}
              className={`font-black text-sm uppercase transition-all duration-300 px-3 py-1 ${
                language === "en" ? "bg-accent text-white scale-110 retro-border" : "text-foreground hover:text-accent"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("id")}
              className={`font-black text-sm uppercase transition-all duration-300 px-3 py-1 ${
                language === "id"
                  ? "bg-secondary text-white scale-110 retro-border"
                  : "text-foreground hover:text-secondary"
              }`}
            >
              ID
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`text-xs font-black uppercase transition-all duration-300 px-2 py-1 ${
                language === "en" ? "bg-accent text-white" : "text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("id")}
              className={`text-xs font-black uppercase transition-all duration-300 px-2 py-1 ${
                language === "id" ? "bg-secondary text-white" : "text-foreground"
              }`}
            >
              ID
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-accent/20 rounded transition-colors font-black text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-accent bg-background retro-stripes animate-fade-in">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 font-bold text-accent hover:bg-accent/10 transition-colors uppercase text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
