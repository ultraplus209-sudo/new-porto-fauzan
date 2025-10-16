"use client"

import { useLanguage } from "@/context/language-context"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 border-4 border-accent/10 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 -ml-32 -mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-16 animate-fade-in-up text-retro text-foreground">
          {t("about.title")}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background border-4 border-accent p-8 md:p-12 retro-shadow hover:scale-105 transition-transform duration-300 animate-fade-in-up">
            <p className="text-lg text-foreground leading-relaxed whitespace-pre-line font-semibold">
              {t("about.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
