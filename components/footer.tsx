"use client"

import { useLanguage } from "@/context/language-context"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-accent py-8 bg-foreground text-background retro-stripes">
      <div className="container mx-auto px-6 text-center">
        <p className="font-black text-lg uppercase text-retro">
          &copy; {currentYear} Fauzan Arbi. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  )
}
