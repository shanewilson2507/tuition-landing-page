import { BookingForm } from "@/components/BookingForm";

export function HeroSection() {
  return (
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
            Get focused lessons that fix gaps quickly, build confidence, and make
            homework/exams feel manageable.
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
            <p className="text-sm font-semibold text-black">Popular options</p>
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
                  <p className="text-sm font-semibold text-black">{item.title}</p>
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
  );
}

