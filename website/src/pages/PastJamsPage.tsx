// src/pages/PastJamsPage.tsx

import { useTranslation } from "react-i18next";
import PastJamsSection from "../components/PastJamsGrid";
import { Link } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";

export default function PastJamsPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-stone-50 text-stone-900 min-h-screen">
      {/* HEADER — same mental model as Home */}
      <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        <Link
          to="/"
          className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition"
        >
          Montreal Idea Jams
        </Link>

        <nav className="flex items-center gap-6 text-sm text-stone-600">
          <Link to="/#join" className="hover:text-stone-900 transition">
            {t("nav.join")}
          </Link>

          <Link to="/jams" className="text-stone-900 font-medium">
            {t("nav.past")}
          </Link>

          <LanguageToggle />
        </nav>
      </header>

      {/* SOFT FOOTER CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-stone-600 mb-6">{t("pastJams.footerPrompt")}</p>

        <Link
          to="/#join"
          className="inline-flex items-center gap-2
            px-6 py-3
            bg-stone-900 text-white
            rounded-xl text-sm
            hover:bg-stone-800 transition
            active:translate-y-px"
        >
          {t("nav.join")}
        </Link>
      </section>
    </main>
  );
}
