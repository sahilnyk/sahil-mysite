"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

const techStack = [
  "Python", "Django", "React", "Next.js", "TypeScript",
  "PostgreSQL", "Redis", "Docker", "AWS", "Tailwind CSS",
  "Node.js", "REST APIs", "Git", "Linux",
];

const timeline = [
  {
    year: "2021",
    title: "Wrote my first 'Hello World'",
    desc: "Got introduced to coding through Python. Immediately got addicted to the dopamine of seeing code actually do something.",
  },
  {
    year: "2022",
    title: "Build season activated",
    desc: "Adopted the 'learn by shipping' philosophy. Built multiple projects, broke things, fixed them at 3am.",
  },
  {
    year: "2023",
    title: "Entered CS @ University",
    desc: "Data structures, algorithms, computer architecture. The theoretical foundation that makes everything click.",
  },
  {
    year: "2024",
    title: "APIs, Cloud & going Full-Stack",
    desc: "Designed REST APIs, deployed to the cloud, understood distributed systems. Actual engineering, not just coding.",
  },
  {
    year: "2025",
    title: "Internships & building 0 → 1",
    desc: "ML Intern + SDE Intern. Built products from scratch, shipped to real users. Building > theorizing.",
  },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="relative grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-8 pb-12 last:pb-0"
    >
      {/* Dot + Line */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-3 h-3 rounded-full bg-white/80 border-2 border-white/40"
          style={{ animation: "timeline-dot 1.5s ease-in-out infinite" }}
          transition={{ delay: index * 0.2 }}
        />
        {index < timeline.length - 1 && (
          <div className="w-[1px] flex-1 mt-2 timeline-line" />
        )}
      </div>

      {/* Content */}
      <div className="pb-2">
        <span
          className="text-[11px] text-white/25 tracking-wider"
          style={{ fontFamily: '"Source Code Pro", monospace' }}
        >
          {item.year}
        </span>
        <h3 className="text-white/90 text-base mt-1 mb-2">{item.title}</h3>
        <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      {/* Hero */}
      <section className="flex flex-col justify-center min-h-[90vh] px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p
            className="text-[11px] text-white/30 tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            Software Engineer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.2] tracking-tight">
            I build products.
            <br />
            <span className="text-white/40">You get results.</span>
          </h1>
          <p className="text-white/35 text-base md:text-lg mt-8 max-w-lg leading-relaxed">
            Full-stack engineer building scalable web applications
            and SaaS products — starting with real problems, ending with real impact.
          </p>
          <div className="flex gap-4 mt-10">
            <Link
              href="/projects"
              className="text-[11px] tracking-[0.15em] uppercase border border-white/15 px-6 py-3 text-white/70 hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              View Work
            </Link>
            <Link
              href="/hire-me"
              className="text-[11px] tracking-[0.15em] uppercase bg-white text-black px-6 py-3 hover:bg-white/90 transition-all duration-300"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl grid md:grid-cols-[200px_1fr] gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/139529375?v=4"
              alt="Sahil Nayak"
              className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-white/8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              hey, i&apos;m sahil — wrote my first line of code at 17 and immediately knew
              this was it. been shipping ever since.
            </p>
            <p className="text-white/35 text-sm leading-relaxed">
              currently obsessed with building scalable saas, designing clean APIs,
              and solving problems that actually matter. i don&apos;t do tutorial projects —
              everything i build has real users or solves a real pain point. if it doesn&apos;t
              ship, it doesn&apos;t count.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl">
          <h2
            className="text-[10px] tracking-[0.25em] text-white/25 uppercase mb-8"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            Tech Stack
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="border border-white/8 px-4 py-2 text-xs text-white/40 hover:text-white/80 hover:border-white/20 transition-all duration-200"
                style={{ fontFamily: '"Source Code Pro", monospace' }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl">
          <h2
            className="text-[10px] tracking-[0.25em] text-white/25 uppercase mb-14"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            The Journey
          </h2>
          <div className="pl-2">
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section — rough grey beam bg */}
      <section className="border-t border-white/5">
        <div className="beam-bg noise px-6 md:px-16 lg:px-24 py-24">
          <div className="relative z-10 max-w-4xl">
            <h2
              className="text-[10px] tracking-[0.25em] text-white/25 uppercase mb-8"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              A Quick Intro
            </h2>
            <div className="aspect-video w-full max-w-2xl border border-white/8 overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.02)]">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Intro Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p
              className="text-white/15 text-[11px] mt-5 italic"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              * real intro coming soon. enjoy this certified banger in the meantime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-normal leading-[1.4]">
            <span className="text-white/90">The Next Commit.</span>{" "}
            <span className="text-white/35">
              Where ideas become products — and products become impact.
            </span>
          </h2>
          <p
            className="text-white/25 text-sm mt-6 leading-relaxed"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            got a project? need a dev who actually ships? let&apos;s build something.
          </p>
          <Link
            href="/hire-me"
            className="inline-block mt-8 text-[11px] tracking-[0.15em] uppercase border border-white/15 px-6 py-3 text-white/60 hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
