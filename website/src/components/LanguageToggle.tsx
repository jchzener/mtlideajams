// src/components/LanguageToggle.tsx

import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    // Optional: save preference
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="text-xs text-neutral-400 space-x-2">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`hover:text-neutral-900 transition ${
          i18n.language.startsWith("en") ? "font-bold text-neutral-900" : ""
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span>/</span>
      <button
        onClick={() => handleLanguageChange("fr")}
        className={`hover:text-neutral-900 transition ${
          i18n.language.startsWith("fr") ? "font-bold text-neutral-900" : ""
        }`}
        aria-label="Basculer en français"
      >
        FR
      </button>
    </div>
  );
}
