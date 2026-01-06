import React from "react";

export default function Home() {
  return (
    <main className="bg-[#F7F6F3] text-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-16">
          {/* LEFT RAIL — 30% */}
          <aside className="md:sticky md:top-20 self-start">
            <p className="text-sm uppercase tracking-wide text-neutral-500 mb-6">
              Montreal Idea Jams
            </p>

            <h1 className="text-3xl font-medium leading-snug mb-6">
              Monthly conversations for people serious about entrepreneurship.
            </h1>

            <p className="text-neutral-600 mb-10">
              No slides. No pitching. Just honest stories and discussions.
            </p>

            <div className="space-y-4">
              <a
                href="#join"
                className="block w-full text-center px-6 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition"
              >
                Join the next Jam
              </a>

              <p className="text-sm text-neutral-500">
                Montreal · In-person · Once a month
              </p>
            </div>
          </aside>

          {/* EDITORIAL — 70% */}
          <section className="space-y-20 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-medium mb-4">Why MIJ exists</h2>
              <p className="text-neutral-700">
                Most entrepreneurial communities optimize for visibility and
                speed. We optimize for thinking.
              </p>
            </section>

            {/* Photo break */}
            <div className="rounded-3xl overflow-hidden">
              <div className="h-[360px] bg-neutral-300 flex items-center justify-center text-neutral-500">
                Photo from a past conversation
              </div>
            </div>

            <section>
              <p className="text-neutral-700">
                Montreal Idea Jams is intentionally small, informal, and
                conversation-driven. Each month, we invite an experienced
                founder or operator to share what really happened.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">
                What a Jam looks like
              </h2>
              <ul className="space-y-3 text-neutral-700 list-disc pl-6">
                <li>One guest entrepreneur</li>
                <li>Stories, lessons, and surprises</li>
                <li>Open questions and group discussion</li>
              </ul>
            </section>

            {/* Another photo */}
            <div className="rounded-3xl overflow-hidden">
              <div className="h-[300px] bg-neutral-300 flex items-center justify-center text-neutral-500">
                People talking, not presenting
              </div>
            </div>

            <section id="join">
              <h2 className="text-2xl font-medium mb-4">Who should join</h2>
              <p className="text-neutral-700">
                People curious about entrepreneurship and seriously considering
                making the jump — or already in it.
              </p>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
