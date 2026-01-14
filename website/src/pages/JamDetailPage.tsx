// src/pages/JamDetailPage.tsx

import { useParams, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { pastJams } from "../data/pastJams";

import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import PaperCard from "../components/PaperCard";

export default function JamDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const forcedLang = location.state?.lang as "en" | "fr" | undefined;
  const lang = forcedLang ?? (i18n.language.startsWith("fr") ? "fr" : "en");

  const jam = pastJams.find((j) => j.id === id);
  const capitalizeFirst = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

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

  const [month, year] = jam.displayDate[lang].split(" ");
  const formattedMonth = capitalizeFirst(month);
  const gallery = jam.gallery ?? [];

  return (
    <main className="bg-stone-50 text-stone-900 min-h-screen">
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
        <header className="mb-20 flex flex-col md:flex-row gap-8">
          <img
            src={jam.speaker.image}
            alt={jam.speaker.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/speakers/default.jpg";
            }}
            className="w-36 h-36 rounded-2xl object-cover border border-stone-200 shadow-sm"
          />

          <div>
            <h1 className="font-serif text-3xl md:text-4xl">
              {jam.speaker.name}
            </h1>

            <p className="text-stone-600 mt-2">{jam.speaker.title[lang]}</p>

            <p className="mt-4 text-sm text-stone-500">
              {jam.location[lang]} · {formattedMonth} · {year}
            </p>

            <span className="inline-block mt-4 px-3 py-1 text-xs rounded-full bg-stone-200 text-stone-700">
              {jam.theme[lang]}
            </span>
          </div>
        </header>

        {/* Key question */}
        <Section>
          <p className="text-xl font-medium text-stone-800">
            {jam.keyQuestion[lang]}
          </p>
          <br />
          <br />
          {/* Context */}
          <p className="text-lg text-stone-600 leading-relaxed">
            {jam.context[lang]}
          </p>
          <br />
          {/* Description */}
          {jam.descriptionLong[lang].split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-lg text-stone-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </Section>

        {/* Quote */}
        <Section>
          <PaperCard rotate={-1}>
            <blockquote className="font-serif text-xl md:text-2xl italic text-stone-700">
              “{jam.quote[lang]}”
            </blockquote>
          </PaperCard>
        </Section>

        {/* Takeaways */}
        <Section>
          <SectionTitle>{t("jamDetail.takeaways")}</SectionTitle>

          <ul className="grid md:grid-cols-3 gap-6">
            {jam.takeaways[lang].map((item, i) => (
              <li
                key={i}
                className="rounded-2xl bg-white p-5 border border-stone-200 shadow-sm"
              >
                <p className="text-stone-700 italic text-sm leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Resources */}
        {jam.resources && jam.resources.length > 0 && (
          <Section>
            <SectionTitle>{t("jamDetail.resources")}</SectionTitle>

            <div className="rounded-2xl bg-white border border-stone-200 p-6 space-y-4">
              {jam.resources.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-stone-600"
                >
                  <span className="mt-1">
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
                        className="text-sm text-stone-500 hover:text-stone-900"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Gallery */}
        {gallery.length > 0 && (
          <Section>
            <img
              src={gallery[0].src}
              alt={gallery[0].alt}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                const randomIndex = Math.floor(Math.random() * 7) + 1;
                target.src = `/images/jams/default_${randomIndex}.jpg`;
              }}
              className="rounded-2xl w-full object-cover border border-stone-200 shadow-sm"
            />
          </Section>
        )}

        {/* Join next jam */}
        <Section className="pt-12">
          <PaperCard rotate={1}>
            <h3 className="font-serif text-2xl mb-4">
              {t("jamDetail.joinNext.cta")}
            </h3>

            <p className="text-stone-600 mb-6">
              {t("jamDetail.joinNext.note")}
            </p>

            <a
              href="https://tally.so/r/wogA4V"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-stone-900 text-white rounded-xl text-sm
                         hover:bg-stone-800 transition active:translate-y-px"
            >
              {t("jamDetail.joinNext.button")} →
            </a>
          </PaperCard>
        </Section>

        {/* Back */}
        <footer className="mt-20 text-right">
          <Link to="/jams" className="text-sm text-stone-500 hover:underline">
            ← {t("jamDetail.backToAll")}
          </Link>
        </footer>
      </article>
    </main>
  );
}
