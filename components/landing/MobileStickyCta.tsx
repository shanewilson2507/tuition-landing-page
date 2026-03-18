import { siteConfig } from "@/components/siteConfig";

export function MobileStickyCta() {
  return (
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
  );
}

