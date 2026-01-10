// src/components/JamCard.tsx

type JamCardProps = {
  jam: {
    title: string;
    date: string;
    image: string;
    theme?: string;
    excerpt?: string;
    speaker?: string;
  };
};

export default function JamCard({ jam }: JamCardProps) {
  return (
    <article
      className="h-full rounded-xl border border-stone-200 bg-white
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-md"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={jam.image}
          alt={jam.title}
          className="w-full h-44 object-cover
            transition-all duration-300
            group-hover:h-32"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">
            {jam.date}
          </p>

          <h3 className="font-serif text-lg mb-2">{jam.title}</h3>

          {/* Hover reveal */}
          <div
            className="overflow-hidden max-h-0 opacity-0
              transition-all duration-300 ease-out
              group-hover:max-h-40 group-hover:opacity-100"
          >
            {jam.theme && (
              <p className="text-sm italic text-stone-600 mb-3">{jam.theme}</p>
            )}

            {jam.excerpt && (
              <p className="text-sm text-stone-600 mb-2">{jam.excerpt}</p>
            )}

            {jam.speaker && (
              <p className="text-xs text-stone-500">With {jam.speaker}</p>
            )}
          </div>
        </div>

        {/* Read session link */}
        <div
          className="mt-6 text-sm text-stone-500
            opacity-0 translate-y-1
            transition-all duration-300 ease-out
            group-hover:opacity-100 group-hover:translate-y-0"
        >
          ↗ Read session
        </div>
      </div>
    </article>
  );
}
