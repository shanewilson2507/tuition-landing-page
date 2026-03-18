import Script from "next/script";
import { BookingForm } from "./BookingForm";
import { siteConfig } from "./siteConfig";

const faqs = [
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

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    telephone: siteConfig.primaryPhoneE164,
    email: siteConfig.primaryEmail,
    areaServed: siteConfig.location,
    url: "https://example.com/",
    description:
      "High-quality 1:1 tuition tailored to your goals. Book a lesson in minutes.",
  };

  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#book"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black focus:shadow"
      >
        Skip to booking
      </a>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-black">
              {siteConfig.businessName}
            </p>
            <p className="truncate text-xs text-black/60">{siteConfig.location}</p>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-black/70 md:flex">
            <a className="hover:text-black" href="#how">
              How it works
            </a>
            <a className="hover:text-black" href="#results">
              Results
            </a>
            <a className="hover:text-black" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${siteConfig.primaryPhoneE164}`}
              className="hidden rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-medium text-black/80 hover:bg-black/[0.03] sm:inline-flex"
            >
              Call
            </a>
            <a
              href="#book"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.25)]"
            >
              Book a lesson
            </a>
          </div>
        </div>
      </header>

      <main className="bg-white">
        <section className="border-b border-black/10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:py-14">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wide text-blue-700">
                1:1 tuition • tailored plan • weekly progress
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                Discover a clear path to better grades — without the stress.
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-black/70">
                Get focused lessons that fix gaps quickly, build confidence, and
                make homework/exams feel manageable.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#book"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.25)]"
                >
                  Book a lesson
                </a>
                <a
                  href="#how"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-black/10 bg-white px-5 text-sm font-semibold text-black/80 hover:bg-black/[0.03]"
                >
                  See how it works
                </a>
              </div>

              <p className="mt-3 text-xs text-black/50">
                *Response time is usually within 24 hours.
              </p>

              <div className="mt-8 rounded-2xl border border-black/10 bg-gradient-to-b from-zinc-50 to-white p-5">
                <p className="text-sm font-semibold text-black">
                  Popular options
                </p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { title: "GCSE Boost", desc: "Target weak topics fast" },
                    { title: "11+ Prep", desc: "Structured weekly plan" },
                    { title: "Confidence Builder", desc: "Calm, patient pace" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-black/10 bg-white p-4"
                    >
                      <p className="text-sm font-semibold text-black">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-black/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div id="book" className="scroll-mt-24">
                <BookingForm />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { k: "4.9/5", v: "parent ratings" },
                  { k: "1:1", v: "personal plan" },
                  { k: "Weekly", v: "measurable progress" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-black/10 bg-white p-4 text-center"
                  >
                    <p className="text-lg font-semibold text-black">{s.k}</p>
                    <p className="mt-1 text-xs text-black/60">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                How it works
              </h2>
              <p className="mt-3 text-lg leading-8 text-black/70">
                Simple process, clear outcomes. You’ll always know what we’re
                doing and why.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Quick assessment",
                  desc: "We identify gaps and set an achievable goal.",
                },
                {
                  step: "2",
                  title: "Personal lesson plan",
                  desc: "Targeted topics, smart practice, and feedback.",
                },
                {
                  step: "3",
                  title: "Progress you can see",
                  desc: "Regular check-ins so improvements stick.",
                },
              ].map((card) => (
                <div
                  key={card.step}
                  className="rounded-2xl border border-black/10 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white">
                      {card.step}
                    </div>
                    <p className="text-base font-semibold text-black">
                      {card.title}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  <p className="text-sm font-semibold text-black">
                    What parents say
                  </p>
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
                        className={classNames(
                          "inline-flex size-8 items-center justify-center rounded-lg border border-black/10 text-black/60 transition",
                          "group-open:rotate-45",
                        )}
                        aria-hidden
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-black/70">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-black/10 bg-gradient-to-br from-blue-50 to-white p-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-base font-semibold text-black">
                    Ready to book?
                  </p>
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
      </main>

      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-black/60 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-black/70">{siteConfig.businessName}</p>
            <p className="mt-1">
              Email{" "}
              <a className="underline" href={`mailto:${siteConfig.primaryEmail}`}>
                {siteConfig.primaryEmail}
              </a>{" "}
              • Call{" "}
              <a className="underline" href={`tel:${siteConfig.primaryPhoneE164}`}>
                {siteConfig.primaryPhoneDisplay}
              </a>
            </p>
          </div>
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/90 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3">
          <a
            href={`tel:${siteConfig.primaryPhoneE164}`}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-black/10 bg-white text-sm font-semibold text-black/80"
          >
            Call
          </a>
          <a
            href="#book"
            className="inline-flex h-11 flex-[1.2] items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white"
          >
            Book
          </a>
        </div>
      </div>
    </>
  );
}

