import { siteConfig } from "@/components/siteConfig";

export function NavBar() {
  return (
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
  );
}

