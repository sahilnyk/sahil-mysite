import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen w-full bg-[#0a0a0a] text-white">
        <CustomCursor />
        <Navbar />

        {/* Main content offset by sidebar on desktop */}
        <div className="md:ml-[220px] relative min-h-screen">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
