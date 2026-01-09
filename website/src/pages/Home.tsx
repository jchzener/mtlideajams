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
      <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        {/* Left: Identity */}
        <span className="text-xs tracking-widest uppercase text-stone-500">
          Montreal Idea Jams
        </span>

        {/* Right: Quiet nav */}
        <nav className="flex items-center gap-6 text-xs tracking-widest text-stone-400">
          <a href="/jams" className="hover:text-stone-900 transition">
            Past Jams
          </a>

          <a href="#next-jam" className="hover:text-stone-900 transition">
            Join the conversation
          </a>

          <LanguageToggle />
        </nav>
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
            {t("home.finalCta.cta")}
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

      {/* NEXT JAM — INVITATION */}
      <section className="max-w-7xl mx-auto px-6 py-28 bg-white rounded-3xl shadow-sm border border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* LEFT */}
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-widest text-stone-500">
              {t("home.nextJam.eyebrow")}
            </span>

            <h2 className="font-serif text-3xl mt-3 mb-6">
              {t("home.nextJam.title")}
            </h2>

            <p className="text-stone-600 text-lg mb-8">
              {t("home.nextJam.context")}
            </p>

            <p className="text-stone-500 mb-1">
              {t("home.nextJam.speakerIntro")}
            </p>

            <p className="text-lg font-medium">
              {t("home.nextJam.speakerName")}
              <span className="text-stone-500">
                {" "}
                — {t("home.nextJam.speakerTitle")}
              </span>
            </p>

            <blockquote className="mt-6 pl-4 border-l-2 border-stone-300 italic text-stone-700">
              “{t("home.nextJam.quote")}”
            </blockquote>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-5">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-4">
                {t("home.nextJam.detailsTitle")}
              </h3>

              <div className="space-y-3 text-stone-700">
                <p>
                  <strong>Date:</strong> {t("home.nextJam.date")}
                </p>
                <p>
                  <strong>Time:</strong> {t("home.nextJam.time")}
                </p>
                <p>
                  <strong>Location:</strong> {t("home.nextJam.location")}
                </p>
                <p className="text-sm text-stone-500">
                  {t("home.nextJam.note")}
                </p>
              </div>

              <button className="mt-8 w-full bg-stone-900 text-white py-3 rounded-xl text-sm hover:bg-stone-800 transition active:translate-y-px">
                {t("home.nextJam.cta")}
              </button>
            </div>
          </div>
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
          {t("home.finalCta.cta")}
        </button>
      </section>
    </main>
  );
}
