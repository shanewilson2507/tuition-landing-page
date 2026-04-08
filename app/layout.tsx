import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/siteUrl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Private Tuition That Gets Results | Book a Lesson",
    template: "%s | Private Tuition",
  },
  description:
    "High-quality 1:1 tuition tailored to your goals. Book a lesson in minutes, get a clear plan, and start improving fast.",
  applicationName: "Private Tuition",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Private Tuition That Gets Results",
    description:
      "High-quality 1:1 tuition tailored to your goals. Book a lesson in minutes.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Tuition That Gets Results",
    description:
      "High-quality 1:1 tuition tailored to your goals. Book a lesson in minutes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
