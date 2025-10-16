"use client"

import { useLanguage } from "@/context/language-context"

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative overflow-hidden retro-grid">
      <div className="absolute top-20 left-1/4 w-40 h-40 border-4 border-accent/10 rotate-12" />
      <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-secondary/5 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-16 animate-fade-in-up text-retro text-foreground">
          {t("skills.title")}
        </h2>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Core Competencies */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-3xl font-black mb-8 text-accent uppercase text-retro">
              {t("skills.coreCompetencies")}
            </h3>
            <div className="flex flex-wrap gap-4">
              {(t("skills.competencies") as unknown as string[]).map((skill: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-accent text-white font-black py-3 px-6 uppercase text-sm retro-border hover:scale-110 transition-transform duration-300 hover:retro-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Proficiencies */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-black mb-8 text-secondary uppercase text-retro">
              {t("skills.technicalProficiencies")}
            </h3>
            <div className="flex flex-wrap gap-4">
              {(t("skills.technical") as unknown as string[]).map((skill: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-secondary text-white font-black py-3 px-6 uppercase text-sm retro-border hover:scale-110 transition-transform duration-300 hover:retro-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
