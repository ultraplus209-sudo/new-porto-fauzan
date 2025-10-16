"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 retro-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/5" />

      {/* Retro geometric shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-accent/30 rotate-45 animate-pulse" />
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-secondary/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-4 border-secondary/30" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative">
            <div className="w-48 h-48 border-4 border-accent bg-accent/5 flex items-center justify-center retro-shadow hover:retro-shadow transition-all duration-300">
              <img src="placeholder-user.jpeg" alt="Logo" className="w-43 h-43 object-contain" />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary border-4 border-background" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent border-4 border-background" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-4 animate-fade-in-up text-balance text-retro text-foreground">
          {t("hero.title")}
        </h1>

        <h2 className="text-3xl md:text-5xl font-black text-accent mb-8 animate-fade-in-up text-retro">
          {t("hero.subtitle")}
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground mb-12 leading-relaxed animate-fade-in-up text-pretty font-semibold">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
          <Link
            href="#contact"
            className="bg-accent text-white font-black py-4 px-8 text-lg uppercase retro-border hover:scale-110 transition-transform duration-300 hover:retro-shadow"
          >
            {t("hero.cta")}
          </Link>
          <a
            href="https://linkedin.com/in/fauzan-arbi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white font-black py-4 px-8 text-lg uppercase retro-border hover:scale-110 transition-transform duration-300 hover:retro-shadow"
          >
            {t("hero.viewLinkedIn")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-4xl text-accent font-black">↓</div>
      </div>
    </section>
  )
}
