"use client"

import { useLanguage } from "@/context/language-context"

export default function CaseStudy() {
  const { t } = useLanguage()

  return (
    <section
      id="case-study"
      className="py-20 md:py-32 bg-gradient-to-br from-accent/5 to-secondary/5 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-accent/20" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-secondary/20 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 animate-fade-in-up text-retro text-foreground">
            {t("caseStudy.title")}
          </h2>
          <p className="text-xl text-foreground font-bold animate-fade-in-up">{t("caseStudy.subtitle")}</p>
        </div>

        <div className="max-w-6xl mx-auto bg-background border-4 border-accent overflow-hidden retro-shadow hover:scale-105 transition-transform duration-300 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Full image on left side */}
            <div className="h-96 md:h-full w-full flex items-center justify-center border-r-4 border-accent relative p-0 m-0">
              <img src="/proses.jpeg" alt="Digitalization" className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-background">
              <h3 className="text-3xl font-black mb-2 text-retro text-foreground">{t("caseStudy.projectTitle")}</h3>
              <p className="text-sm font-black text-accent mb-8 uppercase">{t("caseStudy.company")}</p>

              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-2xl font-black text-accent mb-3 uppercase">{t("caseStudy.challenge")}</h4>
                  <p className="text-foreground leading-relaxed font-semibold">{t("caseStudy.challengeDesc")}</p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="text-2xl font-black text-secondary mb-3 uppercase">{t("caseStudy.action")}</h4>
                  <p className="text-foreground leading-relaxed font-semibold">{t("caseStudy.actionDesc")}</p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-2xl font-black text-accent mb-3 uppercase">{t("caseStudy.result")}</h4>
                  <ul className="space-y-3 text-foreground font-semibold">
                    <li className="flex gap-3">
                      <span className="text-accent font-black text-xl">▪</span>
                      <span>{t("caseStudy.result1")}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-black text-xl">▪</span>
                      <span>{t("caseStudy.result2")}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-black text-xl">▪</span>
                      <span>{t("caseStudy.result3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
