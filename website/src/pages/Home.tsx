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
        {/* Left (Text Card) */}
        <div className="lg:col-span-4 bg-white p-8 rounded-xl shadow-sm border border-stone-200">
          <h1 className="font-serif text-4xl leading-tight mb-4">
            Monthly conversations for people serious about entrepreneurship.
          </h1>
          <p className="text-stone-600 mb-6">
            No slides. No pitching. Just honest stories and discussions.
          </p>
          <button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm hover:bg-stone-800 transition active:translate-y-px">
            Join the next Jam
          </button>
          <p className="text-xs text-stone-500 mt-4">
            Montreal · In-person · Once a month
          </p>
        </div>

        {/* Right (Photo) */}
        <div className="lg:col-span-8">
          <img
            src={heroImg}
            alt="People in conversation at Montreal Idea Jams"
            className="rounded-2xl md:rounded-3xl object-cover w-full h-full
                 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]
                 border border-stone-200"
          />
        </div>
      </section>

      {/* NEXT JAM */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white rounded-2xl shadow-sm">
        <h2 className="font-serif text-2xl mb-6">Next Montreal Idea Jam</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-2">
              📅 Date
            </h3>
            <p className="text-lg font-medium">January 27, 2026</p>
            <p className="text-sm text-stone-600">6:30 PM – 8:30 PM</p>
          </div>

          <div className="md:w-1/3">
            <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-2">
              📍 Location
            </h3>
            <p className="text-lg font-medium">Café Névé – Plateau</p>
          </div>

          <div className="md:w-1/3">
            <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-2">
              👤 Speaker
            </h3>
            <p className="text-lg font-medium">Marie L.</p>
            <p className="text-sm text-stone-600">Co-founder of CleanLoop</p>
            <blockquote className="text-sm italic text-stone-700 mt-2">
              “The biggest challenge wasn’t technical… it was believing my idea
              deserved to exist.”
            </blockquote>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm hover:bg-stone-800 transition active:translate-y-px">
            Reserve your spot
          </button>
        </div>
      </section>

      {/* WHY MIJ EXISTS */}
      <section className="max-w-4xl mx-auto px-6 py-28">
        <div className="border-t border-stone-300 pt-10">
          <h2 className="font-serif text-2xl mb-6">{t("home.why.title")}</h2>

          <p className="text-xl text-stone-800 font-medium mb-8 leading-snug">
            {t("home.why.thesis")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </p>

          <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
            <p>{t("home.why.p1")}</p>
            <p>{t("home.why.p2")}</p>
            <p>{t("home.why.p3")}</p>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <img
          src={convoImg}
          alt={t("home.convoImageAlt")}
          className="rounded-2xl md:rounded-3xl object-cover w-full
           shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]
           border border-stone-200"
        />
      </section>

      {/* WHAT A JAM FEELS LIKE */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="font-serif text-2xl mb-8">
          {t("home.jamExperience.title")}
        </h2>

        <div className="space-y-8 text-stone-600 text-lg leading-relaxed">
          {[1, 2, 3].map((i) => (
            <p key={i}>
              {t(`home.jamExperience.p${i}`)
                .split("\n")
                .map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          ))}
        </div>
      </section>

      {/* PEOPLE IMAGE */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <img
          src={peopleImg}
          alt={t("home.peopleImageAlt")}
          className="rounded-2xl md:rounded-3xl object-cover w-full
           shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]
           border border-stone-200"
        />
      </section>

      {/* HOME PAST JAMS COLLAGE */}
      <HomePastJamsCollage />

      {/* WHO SHOULD JOIN */}
      <section className="max-w-5xl mx-auto px-6 py-24 bg-stone-50 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Who should join</h2>
        <p className="text-stone-600 text-lg">
          People curious about entrepreneurship and seriously considering making
          the jump — or already in it.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center bg-white rounded-xl shadow-sm">
        <h2 className="text-3xl font-semibold mb-6">
          Come for the conversation.
          <br />
          Stay for the thinking.
        </h2>

        <button className="bg-stone-900 text-white px-8 py-4 rounded-xl text-sm hover:bg-stone-800 transition active:translate-y-px">
          Join the next Jam
        </button>
      </section>
    </main>
  );
}
