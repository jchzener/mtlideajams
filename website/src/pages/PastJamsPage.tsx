// src/pages/PastJamsPage.tsx

import { useTranslation } from "react-i18next";
import PastJamsSection from "../components/PastJamsGrid";
import { Link } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";

export default function PastJamsPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-stone-50 text-stone-900 min-h-screen">
      {/* Header with back link + language toggle */}
      <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm text-stone-500 hover:text-stone-900 transition"
        >
          ← Montreal Idea Jams
        </Link>

        {/* ✅ Add LanguageToggle here */}
        <LanguageToggle />
      </header>

      {/* Page title */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="font-serif text-3xl md:text-4xl">
          {t("pastJams.title")}
        </h1>
        <p className="text-stone-600 mt-4 max-w-2xl">
          {t("pastJams.subtitle")}
        </p>
      </section>

      {/* Archive grid */}
      <PastJamsSection />

      {/* Back to top / home CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <Link
          to="/"
          className="inline-block bg-stone-900 text-white px-6 py-3 rounded-xl text-sm hover:bg-stone-800 transition"
        >
          {t("pastJams.backToHome")}
        </Link>
      </section>
    </main>
  );
}
