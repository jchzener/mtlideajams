// src/pages/JamDetailPage.tsx

import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { pastJams } from "../data/pastJams";
import { useEffect, useState } from "react";

export default function JamDetailPage() {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const lang = i18n.language.startsWith("fr") ? "fr" : "en";

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
          <p className="text-stone-600 mb-6">
            {t("jamDetail.notFound.description")}
          </p>
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

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Intro */}
        <header className="mb-16">
          <h1 className="font-serif text-3xl md:text-4xl leading-tight">
            {jam.speaker.name}
          </h1>

          <p className="text-stone-600 mt-2">{jam.speaker.title[lang]}</p>

          <div className="mt-4 text-sm text-stone-500">
            {jam.displayDate[lang]} · Montréal
          </div>

          <div className="mt-6 inline-block px-3 py-1 text-xs rounded-full bg-stone-200 text-stone-700">
            {jam.theme[lang]}
          </div>
        </header>

        {/* Why it mattered */}
        <section className="mb-20">
          <p className="text-lg text-stone-700 leading-relaxed">
            {jam.description[lang]}
          </p>
        </section>

        {/* Key idea / pull quote */}
        <section className="mb-20">
          <blockquote className="font-serif text-xl md:text-2xl italic text-stone-800 leading-relaxed border-l-4 border-stone-300 pl-6">
            “{jam.quote[lang]}”
          </blockquote>
        </section>

        {/* Join next jam */}
        <section className="mt-24 pt-12 border-t border-stone-200">
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

        {/* Back to archive */}
        <footer className="mt-16">
          <Link to="/jams" className="text-xs text-stone-500 hover:underline">
            ← Back to archive
          </Link>
        </footer>
      </article>
    </main>
  );
}
