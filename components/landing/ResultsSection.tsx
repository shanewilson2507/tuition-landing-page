import { siteConfig } from "@/components/siteConfig";

export function ResultsSection() {
  return (
    <section id="results" className="scroll-mt-24 border-y border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              Built for busy families
            </h2>
            <p className="mt-3 text-lg leading-8 text-black/70">
              Lessons are structured, calm, and focused — so students leave
              knowing exactly what to do next.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-black/70">
              {[
                "Clear notes and next steps after every lesson",
                "Homework that matches the plan (not random worksheets)",
                "Exam technique + confidence, not just content",
                "Flexible scheduling where possible",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 size-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#book"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.25)]"
              >
                Book a lesson
              </a>
              <a
                href={`mailto:${siteConfig.primaryEmail}`}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-black/10 bg-white px-5 text-sm font-semibold text-black/80 hover:bg-black/[0.03]"
              >
                Email a question
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-zinc-50 to-white p-6">
              <p className="text-sm font-semibold text-black">What parents say</p>
              <div className="mt-4 grid gap-4">
                {[
                  {
                    quote:
                      "My child finally feels confident in Maths. Lessons are clear and the plan actually works.",
                    name: "Parent of Year 10 student",
                  },
                  {
                    quote:
                      "The feedback after each session is so helpful. We can see progress week by week.",
                    name: "Parent of Year 6 student",
                  },
                ].map((t) => (
                  <figure
                    key={t.name}
                    className="rounded-xl border border-black/10 bg-white p-5"
                  >
                    <blockquote className="text-sm leading-7 text-black/70">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-3 text-xs font-medium text-black/60">
                      {t.name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

