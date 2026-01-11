// src/pages/PastJamsGrid.tsx

import { useTranslation } from "react-i18next";
import JamCard from "./JamCard";
import { pastJams } from "../data/pastJams";
import { Link } from "react-router-dom";

export default function PastJamsSection() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="font-serif text-2xl mb-8">{t("pastJams.title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastJams.map((jam) => (
          <Link key={jam.id} to={`/jams/${jam.id}`} className="block">
            <JamCard jam={jam} />
          </Link>
        ))}
      </div>
    </section>
  );
}
