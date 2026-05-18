import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "sahilnyk — software engineer",
    template: "%s | sahilnyk",
  },
  description:
    "hey, i'm sahil nayak — a genZ dev who builds scalable web apps, saas products, and occasionally breaks prod on fridays. check out my work.",
  keywords: [
    "sahil nayak",
    "sahilnyk",
    "software engineer",
    "fullstack developer",
    "web developer",
    "saas",
    "react",
    "nextjs",
    "django",
    "python",
    "portfolio",
  ],
  authors: [{ name: "Sahil Nayak", url: "https://sahilnyk.vercel.app" }],
  creator: "Sahil Nayak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahilnyk.vercel.app",
    siteName: "sahilnyk",
    title: "sahilnyk — software engineer",
    description:
      "genZ dev building scalable web apps & saas. django + react + next.js. let's ship something cool.",
  },
  twitter: {
    card: "summary_large_image",
    title: "sahilnyk — software engineer",
    description:
      "genZ dev building scalable web apps & saas. let's ship something cool.",
    creator: "@sahilnyk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-black text-white grid-bg">
        {/* Perspective grid overlay */}
        <div className="perspective-grid" />

        {/* Watermark */}
        <div className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
          <span className="watermark-text text-[20vw] whitespace-nowrap">
            sahilnyk
          </span>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
