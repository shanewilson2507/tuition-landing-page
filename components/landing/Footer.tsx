import { siteConfig } from "@/components/siteConfig";

export function Footer() {
  return (
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
        <p>
          © {new Date().getFullYear()} {siteConfig.businessName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

