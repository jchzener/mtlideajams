// src/components/JamCard.tsx

import { useState } from "react";
import { useTranslation } from "react-i18next";

interface JamCardProps {
  jam: import("../data/pastJams").Jam;
}

export default function JamCard({ jam }: JamCardProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Détermine la langue active (fr ou en)
  const lang = i18n.language.startsWith("fr") ? "fr" : "en";

  // Fonction utilitaire pour obtenir le texte traduit
  const tText = (localized: { en: string; fr: string }) => localized[lang];

  return (
    <div
      className={`relative bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md ${
        isOpen ? "ring-2 ring-stone-900" : ""
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* En-tête : nom, titre, date */}
      <div className="p-6 pb-4 border-b border-stone-200">
        <div className="flex items-start gap-4">
          <div>
            <h3 className="font-serif text-lg font-medium text-stone-900">
              {jam.speaker.name}
            </h3>
            <p className="text-sm text-stone-600">{tText(jam.speaker.title)}</p>
            <p className="text-xs text-stone-500 mt-1">
              {tText(jam.displayDate)}
            </p>
          </div>
        </div>
      </div>

      {/* Citation (toujours visible) */}
      <div className="p-6 pt-4">
        <blockquote className="text-sm italic text-stone-700 leading-relaxed">
          “{tText(jam.quote)}”
        </blockquote>
      </div>

      {/* Contenu détaillé (au clic) */}
      {isOpen && (
        <div className="p-6 pt-4 bg-stone-50 border-t border-stone-200 animate-fadeIn">
          <p className="text-sm text-stone-600 mb-4">
            {tText(jam.description)}
          </p>

          {jam.location && (
            <p className="text-xs text-stone-500 mb-2">
              <span className="font-semibold">
                {lang === "fr" ? "Lieu" : "Location"}:
              </span>{" "}
              {tText(jam.location)}
            </p>
          )}

          {jam.theme && (
            <span className="inline-block px-2 py-1 text-xs bg-stone-200 text-stone-700 rounded-full">
              {tText(jam.theme)}
            </span>
          )}
        </div>
      )}

      {/* Effet collage : petit coin découpé */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-stone-900 opacity-5 transform rotate-45 translate-x-2 -translate-y-2"></div>
    </div>
  );
}
