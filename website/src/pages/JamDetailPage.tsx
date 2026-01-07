// src/pages/JamDetailPage.tsx

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { pastJams } from "../data/pastJams";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LanguageToggle from "../components/LanguageToggle";

// Placeholder image for now — replace with real speaker photos later
const defaultSpeakerPhoto = "/images/speakers/default.jpg";

export default function JamDetailPage() {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const lang = i18n.language.startsWith("fr") ? "fr" : "en";

  const jam = pastJams.find((j) => j.id === id);

  // State for animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!jam) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-3xl mb-4">
          {t("jamDetail.notFound.title")}
        </h1>
        <p className="text-stone-600 mb-6">
          {t("jamDetail.notFound.description")}
        </p>
        <Link to="/jams" className="text-stone-500 hover:underline">
          ← {t("jamDetail.notFound.back")}
        </Link>
      </div>
    );
  }

  // Optional: Add speaker photo if available
  const speakerPhoto = jam.speaker.name.includes("Fahad")
    ? "/images/speakers/fahad.jpg"
    : jam.speaker.name.includes("Kareem")
    ? "/images/speakers/kareem.jpg"
    : jam.speaker.name.includes("Rim")
    ? "/images/speakers/rim.jpg"
    : jam.speaker.name.includes("Hasan")
    ? "/images/speakers/hasan.jpg"
    : jam.speaker.name.includes("Pranav")
    ? "/images/speakers/pranav.jpg"
    : jam.speaker.name.includes("Patrick")
    ? "/images/speakers/patrick.jpg"
    : jam.speaker.name.includes("Jeffrey")
    ? "/images/speakers/jeffrey.jpg"
    : defaultSpeakerPhoto;

  return (
    <main
      className={`bg-stone-50 text-stone-900 min-h-screen transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        <Link
          to="/jams"
          className="text-sm text-stone-500 hover:text-stone-900 transition"
        >
          ← {t("jamDetail.header.backToAll")}
        </Link>

        <LanguageToggle />
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Speaker header */}
        <div className="animate-fade-in-up">
          <div className="flex items-start gap-6 mb-8">
            <img
              src={speakerPhoto}
              alt={`${jam.speaker.name} - ${jam.speaker.title[lang]}`}
              className="rounded-2xl md:rounded-3xl object-cover w-full
           shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]
           border border-stone-200"
            />
            <div>
              <h1 className="font-serif text-3xl md:text-4xl">
                {jam.speaker.name}
              </h1>
              <p className="text-stone-600 mt-1">{jam.speaker.title[lang]}</p>
              <p className="text-xs text-stone-500 mt-1">
                {jam.displayDate[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Detail card */}
        <div className="bg-white rounded-xl shadow-sm p-8 animate-fadeIn">
          {/* Theme */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              {t("jamDetail.theme")}
            </h2>
            <span className="inline-block px-3 py-1 text-sm bg-stone-200 text-stone-700 rounded-full">
              {jam.theme[lang]}
            </span>
          </div>

          {/* Quote */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              {t("jamDetail.quote")}
            </h2>
            <blockquote className="text-lg italic text-stone-700 leading-relaxed border-l-4 border-stone-400 pl-4">
              “{jam.quote[lang]}”
            </blockquote>
          </div>

          {/* Description */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              {t("jamDetail.description")}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {jam.description[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Back button */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <Link
          to="/jams"
          className="px-6 py-3 bg-stone-900 text-white rounded-xl text-sm 
           hover:bg-stone-800 transition 
           active:translate-y-px 
           focus:outline-none focus:ring-2 focus:ring-stone-500"
        >
          {t("jamDetail.backToAll")}
        </Link>
      </section>
    </main>
  );
}
