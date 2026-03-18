import Script from "next/script";
import { siteConfig } from "@/components/siteConfig";
import { getSiteUrl } from "@/lib/siteUrl";
import { Footer } from "@/components/landing/Footer";
import { FaqSection } from "@/components/landing/FaqSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { MobileStickyCta } from "@/components/landing/MobileStickyCta";
import { NavBar } from "@/components/landing/NavBar";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { SkipToBookingLink } from "@/components/landing/SkipToBookingLink";

export function LandingPage() {
  const base = getSiteUrl().toString().replace(/\/$/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    telephone: siteConfig.primaryPhoneE164,
    email: siteConfig.primaryEmail,
    areaServed: siteConfig.location,
    url: `${base}/`,
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

      <SkipToBookingLink />

      <NavBar />

      <main className="bg-white">
        <HeroSection />
        <HowItWorksSection />
        <ResultsSection />
        <FaqSection />
      </main>

      <Footer />
      <MobileStickyCta />
    </>
  );
}

