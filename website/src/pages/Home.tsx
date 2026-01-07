// src/pages/Home.tsx

import heroImg from "../assets/images/mij-hero.jpg";
import convoImg from "../assets/images/mij-conversation.jpg";
import peopleImg from "../assets/images/mij-people.jpg";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../components/LanguageToggle";
import HomePastJamsCollage from "../components/HomePastJamsCollage";

export default function Home() {
  const { t } = useTranslation();

  const nextJam = {
    date: "January 27, 2026",
    time: "6:30 PM – 8:30 PM",
    location: "Café Névé – Plateau",
    speaker: {
      name: "Marie L.",
      title: "Co-founder of CleanLoop",
      quote:
        "The biggest challenge wasn’t technical… it was believing my idea deserved to exist.",
    },
    ctaLink: "#",
  };

  return (
    <main className="bg-stone-50 text-stone-900">
      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
        <span className="text-xs tracking-widest uppercase text-stone-500">
          Montreal Idea Jams
        </span>
        <LanguageToggle />
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h1 className="font-serif text-4xl leading-tight">
            {t("home.hero.title")}
          </h1>
          <p className="text-stone-600 mb-8 mt-4">{t("home.hero.subtitle")}</p>

          <button
            className="px-6 py-3 bg-stone-900 text-white rounded-xl text-sm 
           hover:bg-stone-800 transition 
           active:translate-y-px 
           focus:outline-none focus:ring-2 focus:ring-stone-500"
          >
            {t("home.hero.cta")}
          </button>

          <p className="text-xs text-stone-500 mt-4">{t("home.hero.footer")}</p>
        </div>

        <div className="lg:col-span-8">
          <img
            src={heroImg}
            alt={t("home.hero.imageAlt")}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>
      </section>

      {/* NEXT JAM */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white rounded-3xl shadow-sm">
        <h2 className="font-serif text-2xl mb-6">{t("home.nextJam.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-2">
              {t("home.nextJam.dateLabel")}
            </h3>
            <p className="text-lg font-medium">{nextJam.date}</p>
            <p className="text-sm text-stone-600">{nextJam.time}</p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-2">
              {t("home.nextJam.locationLabel")}
            </h3>
            <p className="text-lg font-medium">{nextJam.location}</p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-2">
              {t("home.nextJam.speakerLabel")}
            </h3>
            <p className="text-lg font-medium">{nextJam.speaker.name}</p>
            <p className="text-sm text-stone-600">{nextJam.speaker.title}</p>
            <blockquote className="mt-3 text-sm italic text-neutral-700">
              “{nextJam.speaker.quote}”
            </blockquote>
          </div>
        </div>

        <div className="mt-8">
          <button
            className="px-6 py-3 bg-stone-900 text-white rounded-xl text-sm 
           hover:bg-stone-800 transition 
           active:translate-y-px 
           focus:outline-none focus:ring-2 focus:ring-stone-500"
          >
            {t("home.nextJam.cta")}
          </button>
        </div>
      </section>

      {/* WHY MIJ EXISTS */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="font-serif text-2xl">{t("home.why.title")}</h2>
        <p className="text-stone-600 text-lg mt-4">
          {t("home.why.description")}
        </p>
      </section>

      {/* IMAGE BREAK */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <img
          src={convoImg}
          alt={t("home.convoImageAlt")}
          className="rounded-3xl w-full object-cover"
        />
      </section>

      {/* WHAT A JAM LOOKS LIKE */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold mb-6">
          {t("home.format.title")}
        </h2>

        <ul className="space-y-4 text-stone-600">
          <li>• {t("home.format.item1")}</li>
          <li>• {t("home.format.item2")}</li>
          <li>• {t("home.format.item3")}</li>
        </ul>
      </section>

      {/* PEOPLE IMAGE */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <img
          src={peopleImg}
          alt={t("home.peopleImageAlt")}
          className="rounded-3xl w-full object-cover"
        />
      </section>

      {/* HOME PAST JAMS COLLAGE */}
      <HomePastJamsCollage />

      {/* WHO SHOULD JOIN */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold mb-4">{t("home.who.title")}</h2>
        <p className="text-stone-600 text-lg">{t("home.who.description")}</p>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center bg-white rounded-3xl shadow-sm">
        <h2 className="text-3xl font-semibold mb-6">
          {t("home.finalCta.title")}
        </h2>

        <button
          className="px-6 py-3 bg-stone-900 text-white rounded-xl text-sm 
           hover:bg-stone-800 transition 
           active:translate-y-px 
           focus:outline-none focus:ring-2 focus:ring-stone-500"
        >
          {t("home.finalCta.cta")}
        </button>
      </section>
    </main>
  );
}
