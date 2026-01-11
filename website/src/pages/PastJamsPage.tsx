// src/pages/PastJamsPage.tsx

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";
import PastJamsSection from "../components/PastJamsGrid";

export default function PastJamsPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-stone-50 text-stone-900 min-h-screen">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 pt-10 flex items-center justify-between">
        <Link
          to="/"
          className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition"
        >
          ← Montreal Idea Jams
        </Link>

        <nav className="flex items-center gap-6 text-sm text-stone-600">
          <a href="#join" className="hover:text-stone-900 transition">
            {t("nav.join")}
          </a>
          <Link
            to="/jams"
            className="font-medium hover:text-stone-900 transition"
          >
            {t("nav.past")}
          </Link>
          <LanguageToggle />
        </nav>
      </header>

      {/* Title */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="font-serif text-3xl md:text-4xl">
          {t("pastJams.title")}
        </h1>
        <p className="text-stone-600 mt-4 max-w-2xl">
          {t("pastJams.subtitle")}
        </p>
      </section>

      {/* Archive */}
      <PastJamsSection />

      {/* Back CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <Link
          to="/"
          className="px-6 py-3 bg-stone-900 text-white rounded-xl text-sm
                     hover:bg-stone-800 transition active:translate-y-px"
        >
          {t("pastJams.backToHome")}
        </Link>
      </section>
    </main>
  );
}
