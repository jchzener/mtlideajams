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
              {jam.displayDate[lang]} · {jam.location[lang]}
            </div>

            <div className="mt-4 inline-block px-3 py-1 text-xs rounded-full bg-stone-200 text-stone-700">
              {jam.theme[lang]}
            </div>
          </div>
        </header>

        {/* Long description */}
        <section className="mb-20 space-y-6">
          {jam.descriptionLong[lang].split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-lg text-stone-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Quote */}
        <section className="mb-24">
          <blockquote className="font-serif text-xl md:text-2xl italic text-stone-700 leading-relaxed border-l-4 border-stone-300 pl-6">
            “{jam.quote[lang]}”
          </blockquote>
        </section>

        {/* Takeaways */}
        <section className="mb-24">
          <h2 className="font-serif text-2xl mb-8">
            {t("jamDetail.takeaways")}
          </h2>

          <ul className="grid md:grid-cols-3 gap-6">
            {jam.takeaways[lang].map((item, i) => (
              <li
                key={i}
                className="rounded-2xl bg-white p-5 border border-stone-200 shadow-sm hover:shadow-md transition"
              >
                <p className="text-stone-700 italic text-sm leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Resources */}
        {jam.resources && (
          <section className="mb-24">
            <h2 className="font-serif text-2xl mb-8">
              {t("jamDetail.resources")}
            </h2>

            <div className="space-y-4">
              {jam.resources.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-stone-600"
                >
                  <span className="text-stone-500 mt-1">
                    {res.type === "book" && "📘"}
                    {res.type === "talk" && "🎧"}
                    {res.type === "article" && "📄"}
                    {res.type === "course" && "🎓"}
                  </span>
                  <div>
                    <p>{res.label}</p>
                    {res.link && (
                      <a
                        href={res.link}
                        className="ml-1 text-stone-500 hover:text-stone-900"
                      >
                        →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        {jam.gallery && jam.gallery.length > 0 && (
          <section className="mb-12">
            <img
              src={jam.gallery[0].src}
              alt={jam.gallery[0].alt}
              className="rounded-2xl w-full object-cover
                         shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]
                         border border-stone-200"
            />
          </section>
        )}

        {/* Footer CTA */}
        <section className="pt-8 border-stone-200">
          <div className="max-w-md mx-auto text-center bg-stone-50 rounded-xl p-8 shadow-sm">
            {" "}
            <h3 className="font-serif text-2xl mb-4">
              {t("jamDetail.joinNext.cta")}
            </h3>
            <p className="text-stone-600 mb-6">
              {t("jamDetail.joinNext.note")}
            </p>
            <section className="max-w-7xl mx-auto px-6 py-4 text-center">
              <Link
                to="/"
                className="px-6 py-3 bg-stone-900 text-white rounded-xl text-sm
                     hover:text-green-500 transition active:translate-y-px"
              >
                {t("jamDetail.joinNext.button")} →
              </Link>
            </section>
          </div>
        </section>
      </article>
    </main>
  );
}
