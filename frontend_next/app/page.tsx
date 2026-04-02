"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import CircularText from "@/components/ui/circular-text";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { NavbarMenuDemo } from "@/components/ui/navbar-menu-demo";
import { Timeline } from "@/components/ui/timeline";
import { TechStackMarquee } from "@/components/ui/tech-stack-marquee";

export default function Home() {
  const profileRef = useRef<HTMLImageElement | null>(null);
  return (
    <main className="relative min-h-screen w-full px-4 sm:px-6 pt-0 pb-10">

      {/* ===== BACKGROUND RIPPLE ===== */}
      <div className="fixed inset-0 z-0">
        <BackgroundRippleEffect />
      </div>

      {/* ===== NAVBAR — STICKY & TOUCHING TOP ===== */}
      <div className="sticky top-0 z-30">
        <NavbarMenuDemo />
      </div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center mt-10">

        {/* LEFT */}
        <div className="space-y-6 font-sans text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight bg-linear-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Software Engineer
          </h1>

          <div className="flex flex-col gap-2 text-neutral-400 text-lg sm:text-xl items-start">
            <LayoutTextFlip
              text="I love"
              words={[
                "Building SaaS",
                "Product Experiences",
                "Solving Problems",
                "Scaling Products",
              ]}
            />
          </div>

          <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
            I wrote my{" "}
            <span className="text-white font-semibold border-b border-white/30">
              first line of code at the age of 17
            </span>{" "}
            and I have been{" "}
            <span className="text-slate-200 font-semibold">
              building stuff ever since.
            </span>{" "}
            Currently building{" "}
            <span className="text-white font-semibold">
              scalable web applications
            </span>{" "}
            and{" "}
            <span className="text-slate-200 font-semibold">
              SaaS products
            </span>{" "}
            that solve{" "}
            <span className="text-white font-semibold border-b border-white/40">
              real-world problems.
            </span>
          </p>
        </div>

        {/* ===== RIGHT PROFILE AREA ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center mt-6 md:mt-0"
        >
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -inset-4 sm:-inset-8 md:-inset-14 rounded-full bg-white/10 blur-2xl sm:blur-3xl"
          />

          <motion.div
            className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-[26rem] md:h-[26rem]"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 300 300" className="w-full h-full" fill="none" stroke="white" strokeWidth="4">
              <circle cx="150" cy="150" r="135" strokeDasharray="7 14" strokeLinecap="round" />
            </svg>
          </motion.div>

          <motion.img
            ref={profileRef}
            src="https://avatars.githubusercontent.com/u/139529375?v=4"
            alt="Sahil"
            className="rounded-full object-cover w-36 h-36 sm:w-52 sm:h-52 md:w-96 md:h-96 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.12)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <CircularText
            items={["Sahil Nayak", "Trekking", "Chess", "Travelling", "He builds cool stuff", "Reading Tech Blogs"]}
            anchorRef={profileRef}
            offset={18}
          />
        </motion.div>
      </div>

      {/* ===== TIMELINE SECTION ===== */}
      <div className="relative z-10 mt-24">
        <Timeline
          data={[
            {
              title: (
                <span className="bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                  2021 — Got Introduced to Coding
                </span>
              ),
              content: (
                <p className="text-neutral-400">
                  Wrote my first few lines of code, understood programming fundamentals,
                  and explored Python & Django.
                </p>
              ),
            },
            {
              title: (
                <span className="bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                  2022 — Built Projects
                </span>
              ),
              content: (
                <p className="text-neutral-400">
                  Started following a “build while learning” mindset.
                  Created multiple real-world projects and sharpened problem-solving.
                </p>
              ),
            },
            {
              title: (
                <span className="bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                  2023 — Entered Computer Science
                </span>
              ),
              content: (
                <p className="text-neutral-400">
                  Joined university and learned core CS fundamentals:
                  Computer Architecture, Data Structures, Algorithms and more.
                </p>
              ),
            },
            {
              title: (
                <span className="bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                  2024 — APIs & Cloud
                </span>
              ),
              content: (
                <p className="text-neutral-400">
                  Explored modern tools, understood API design,
                  built projects and deployed them to the cloud.
                </p>
              ),
            },
            {
              title: (
                <span className="bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                  2025 — Internships & 0 → 1 Building
                </span>
              ),
              content: (
                <p className="text-neutral-400">
                  Completed internships as a Machine Learning Intern
                  and Software Developer Intern. Built products from scratch
                  and delivered real impact.
                </p>
              ),
            },
          ]}
        />
      </div>

      {/* ===== TECH STACK ===== */}
      <div className="relative z-10 mt-10">
        <TechStackMarquee />
      </div>

    </main>
  );
}
