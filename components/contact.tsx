"use client"

import { useLanguage } from "@/context/language-context"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-accent/10 to-secondary/10 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 border-4 border-accent/10 -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 -ml-32 -mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 animate-fade-in-up text-retro text-foreground">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-foreground mb-12 animate-fade-in-up font-bold">{t("contact.description")}</p>

          <div className="bg-background border-4 border-accent p-8 md:p-12 retro-shadow hover:scale-105 transition-transform duration-300 animate-fade-in-up">
            <a
              href={`mailto:${t("contact.email")}`}
              className="text-3xl font-black text-accent hover:text-secondary transition-colors uppercase text-retro break-all"
            >
              {t("contact.email")}
            </a>

            <p className="text-foreground mt-8 mb-8 font-bold text-lg">{t("contact.location")}</p>

            <div className="flex justify-center gap-8 pt-8 border-t-4 border-accent">
              <a
                href="https://linkedin.com/in/fauzan-arbi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-secondary transition-all duration-300 hover:scale-125 transform font-black text-2xl"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
