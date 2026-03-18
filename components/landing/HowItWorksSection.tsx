export function HowItWorksSection() {
  return (
    <section id="how" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            How it works
          </h2>
          <p className="mt-3 text-lg leading-8 text-black/70">
            Simple process, clear outcomes. You’ll always know what we’re doing
            and why.
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
                <p className="text-base font-semibold text-black">{card.title}</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-black/60">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

