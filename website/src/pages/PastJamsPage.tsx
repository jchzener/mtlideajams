// src/pages/PastJamsPage.tsx

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";
import { pastJams } from "../data/pastJams";

export default function PastJamsPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("fr") ? "fr" : "en";

  // Helper: deterministic tilt based on jam id
  const getTilt = (id: string) =>
    ["0", "2", "4", "6", "8"].some((d) => id.endsWith(d)) ? "1deg" : "-1deg";

  return (
    <main className="bg-stone-50 text-stone-900 min-h-screen">
      {/* Header with back link + nav */}
      <header className="max-w-7xl mx-auto px-6 pt-10 flex items-center justify-between">
        <Link
          to="/"
          className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition"
        >
          ← Montreal Idea Jams
        </Link>

        <nav className="flex items-center gap-6 text-sm text-stone-600">
          <Link to="#" className="hover:text-stone-900 transition">
            {t("nav.join")}
          </Link>
          <Link
            to="/jams"
            className="font-medium hover:text-stone-900 transition"
          >
            {t("nav.past")}
          </Link>
          <LanguageToggle />
        </nav>
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
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastJams.map((jam) => (
            <Link
              key={jam.id}
              to={`/jams/${jam.id}`}
              className="group relative bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ transform: `rotate(${getTilt(jam.id)})` }}
            >
              {/* Collage corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-stone-900 opacity-5 transform rotate-45 translate-x-2 -translate-y-2"></div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-lg font-medium text-stone-900 group-hover:text-black">
                  {jam.speaker.name}
                </h3>
                <p className="text-sm text-stone-600 mb-2">
                  {jam.speaker.title[lang]}
                </p>
                <p className="text-xs text-stone-500 mb-4">
                  {jam.displayDate[lang]}
                </p>

                <blockquote className="text-sm italic text-stone-700 leading-relaxed mb-4 line-clamp-2">
                  “{jam.quote[lang]}”
                </blockquote>

                <span className="inline-block px-2 py-1 text-xs bg-stone-200 text-stone-700 rounded-full">
                  {jam.theme[lang]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Back to home CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <Link
          to="/"
          className="px-6 py-3 bg-stone-900 text-white rounded-xl text-sm 
                     hover:bg-stone-800 transition 
                     active:translate-y-px 
                     focus:outline-none focus:ring-2 focus:ring-stone-500"
        >
          {t("pastJams.backToHome")}
        </Link>
      </section>
    </main>
  );
}
