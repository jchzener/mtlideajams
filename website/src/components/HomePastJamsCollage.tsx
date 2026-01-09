// src/components/HomePastJamsCollage.tsx

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { pastJams } from "../data/pastJams";

export default function HomePastJamsCollage() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language.startsWith("fr") ? "fr" : "en";

  const recentJams = pastJams.slice(0, 3);

  const getTilt = (id: string) =>
    ["0", "2", "4", "6", "8"].some((d) => id.endsWith(d)) ? "1deg" : "-1deg";

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="font-serif text-2xl mb-8">{t("home.past.title")}</h2>

      <p className="text-stone-600 mb-8 max-w-2xl">
        Over the past months, these conversations have brought together
        founders, operators, investors, and builders from very different paths —
        all showing up to think, not pitch.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentJams.map((jam) => (
          <Link
            key={jam.id}
            to={`/jams/${jam.id}`}
            className="group relative bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            style={{ transform: `rotate(${getTilt(jam.id)})` }}
          >
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

            <div className="absolute top-0 right-0 w-8 h-8 bg-stone-900 opacity-5 transform rotate-45 translate-x-2 -translate-y-2"></div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/jams"
          className="text-sm text-stone-500 hover:text-stone-900 underline transition"
        >
          {t("home.past.viewAll")}
        </Link>
      </div>
    </section>
  );
}
