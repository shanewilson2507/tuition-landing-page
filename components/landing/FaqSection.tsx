type FaqItem = { q: string; a: string };

const faqs: readonly FaqItem[] = [
  {
    q: "What ages and levels do you teach?",
    a: "Primary, 11+, GCSE and A-Level (depending on subject). If you’re unsure, send your year group and exam board and I’ll confirm.",
  },
  {
    q: "Do you offer online lessons?",
    a: "Yes. Online lessons work well with shared whiteboards, live feedback, and clear homework. In-person options depend on location and availability.",
  },
  {
    q: "How quickly can we start?",
    a: "Usually within a few days. Fill in the booking form and include your availability so we can lock in a regular slot.",
  },
  {
    q: "How do you track progress?",
    a: "We set a clear goal (grade or confidence), identify gaps, then review progress regularly with short checks and targeted practice.",
  },
] as const;

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
          Frequently asked questions
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-black/10 bg-white p-5"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-black">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span
                    className={cn(
                      "inline-flex size-8 items-center justify-center rounded-lg border border-black/10 text-black/60 transition",
                      "group-open:rotate-45",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-black/70">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-gradient-to-br from-blue-50 to-white p-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-base font-semibold text-black">Ready to book?</p>
              <p className="mt-1 text-sm text-black/70">
                Share your availability and we’ll confirm a regular slot.
              </p>
            </div>
            <a
              href="#book"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.25)]"
            >
              Book a lesson
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

