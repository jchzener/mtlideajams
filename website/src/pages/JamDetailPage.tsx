// src/pages/JamDetailPage.tsx

import { useParams, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { pastJams } from "../data/pastJams";
import { useEffect, useState } from "react";

export default function JamDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const forcedLang = location.state?.lang as "en" | "fr" | undefined;
  const lang = forcedLang ?? (i18n.language.startsWith("fr") ? "fr" : "en");

  const jam = pastJams.find((j) => j.id === id);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  if (!jam) {
    return (
      <main className="bg-stone-50 min-h-screen">
        <section className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-3xl mb-4">
            {t("jamDetail.notFound.title")}
          </h1>
          <Link to="/jams" className="text-sm text-stone-500 hover:underline">
            ← {t("jamDetail.notFound.back")}
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main
      className={`bg-stone-50 text-stone-900 min-h-screen transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 pt-10">
        <Link
          to="/jams"
          className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition"
        >
          ← {t("jamDetail.header.backToAll")}
        </Link>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Speaker intro */}
        <header className="mb-16 flex flex-col md:flex-row gap-8">
          <img
            src={jam.speaker.image}
            alt={jam.speaker.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover
                       border border-stone-200
                       shadow-sm"
          />

          <div>
            <h1 className="font-serif text-3xl md:text-4xl">
              {jam.speaker.name}
            </h1>

            <p className="text-stone-600 mt-2">{jam.speaker.title[lang]}</p>

            <div className="mt-4 text-sm text-stone-500">
              {jam.displayDate[lang]} · Montréal
            </div>

            <div className="mt-4 inline-block px-3 py-1 text-xs rounded-full bg-stone-200 text-stone-700">
              {jam.theme[lang]}
            </div>
          </div>
        </header>

        {/* Description */}
        <section className="mb-20">
          <p className="text-lg text-stone-700 leading-relaxed">
            {jam.description[lang]}
          </p>
        </section>

        {/* Quote */}
        <section className="mb-24">
          <blockquote className="font-serif text-xl md:text-2xl italic text-stone-800 leading-relaxed border-l-4 border-stone-300 pl-6">
            “{jam.quote[lang]}”
          </blockquote>
        </section>

        {/* Join next jam */}
        <section className="pt-12 border-t border-stone-200">
          <Link
            to="/#join"
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition"
          >
            Join the next Montreal Idea Jam →
          </Link>

          <p className="mt-2 text-xs text-stone-500">
            Small group · No pitching · Thoughtful conversations
          </p>
        </section>

        {/* Back */}
        <footer className="mt-16">
          <Link to="/jams" className="text-xs text-stone-500 hover:underline">
            ← Back to archive
          </Link>
        </footer>
      </article>
    </main>
  );
}
