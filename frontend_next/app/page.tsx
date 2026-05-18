"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

const techStack = [
  "python", "django", "react", "next.js", "typescript",
  "postgresql", "redis", "docker", "aws", "tailwind css",
  "node.js", "rest apis", "git", "linux",
];

const timeline = [
  {
    year: "2021",
    title: "wrote my first 'hello world'",
    desc: "got introduced to coding through python. immediately got addicted to the dopamine of seeing code actually do something.",
  },
  {
    year: "2022",
    title: "build season activated",
    desc: "adopted the 'learn by shipping' philosophy. built multiple projects, broke things, fixed them at 3am.",
  },
  {
    year: "2023",
    title: "entered cs @ university",
    desc: "data structures, algorithms, computer architecture. the theoretical foundation that makes everything click.",
  },
  {
    year: "2024",
    title: "apis, cloud & going full-stack",
    desc: "designed rest apis, deployed to the cloud, understood distributed systems. actual engineering, not just coding.",
  },
  {
    year: "2025",
    title: "internships & building 0 → 1",
    desc: "ml intern + sde intern. built products from scratch, shipped to real users. building > theorizing.",
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
      className="relative grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-8 pb-14 last:pb-0"
    >
      {/* dot + line */}
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

      {/* content */}
      <div className="pb-2">
        <span
          className="text-[12px] text-white/25 tracking-wider"
          style={{ fontFamily: '"Source Code Pro", monospace' }}
        >
          {item.year}
        </span>
        <h3 className="text-white/90 text-lg mt-1 mb-2">{item.title}</h3>
        <p className="text-white/35 text-base leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      {/* hero */}
      <section className="flex flex-col justify-center min-h-[90vh] px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p
            className="text-[13px] text-white/30 tracking-wide mb-6"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            software engineer
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.2] tracking-tight">
            i build products.
            <br />
            <span className="text-white/40">you get results.</span>
          </h1>
          <p className="text-white/35 text-lg md:text-xl mt-8 max-w-lg leading-relaxed">
            full-stack engineer building scalable web applications
            and saas products — starting with real problems, ending with real impact.
          </p>
          <div className="flex gap-4 mt-10">
            <Link
              href="/projects"
              className="text-[13px] tracking-wide border border-white/15 px-6 py-3 text-white/70 hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              view work
            </Link>
            <Link
              href="/hire-me"
              className="text-[13px] tracking-wide bg-white text-black px-6 py-3 hover:bg-white/90 transition-all duration-300"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              hire me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* about */}
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
              alt="sahil nayak"
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
            <p className="text-white/70 text-xl leading-relaxed">
              hey, i&apos;m sahil — wrote my first line of code at 17 and immediately knew
              this was it. been shipping ever since.
            </p>
            <p className="text-white/35 text-base leading-relaxed">
              currently obsessed with building scalable saas, designing clean apis,
              and solving problems that actually matter. i don&apos;t do tutorial projects —
              everything i build has real users or solves a real pain point. if it doesn&apos;t
              ship, it doesn&apos;t count.
            </p>
          </motion.div>
        </div>
      </section>

      {/* tech stack */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl">
          <h2
            className="text-[12px] tracking-wide text-white/25 mb-10"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            tech stack
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="border border-white/8 px-4 py-2.5 text-sm text-white/40 hover:text-white/80 hover:border-white/20 transition-all duration-200"
                style={{ fontFamily: '"Source Code Pro", monospace' }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* timeline */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl">
          <h2
            className="text-[12px] tracking-wide text-white/25 mb-14"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            the journey
          </h2>
          <div className="pl-2">
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* video section */}
      <section className="border-t border-white/5">
        <div className="beam-bg noise px-6 md:px-16 lg:px-24 py-24">
          <div className="relative z-10 max-w-4xl">
            <h2
              className="text-[12px] tracking-wide text-white/25 mb-8"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              a quick intro
            </h2>
            <div className="aspect-video w-full max-w-2xl border border-white/8 overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.02)]">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="intro video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p
              className="text-white/15 text-[12px] mt-5 italic"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              * real intro coming soon. enjoy this certified banger in the meantime.
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-normal leading-[1.4]">
            <span className="text-white/90">the next commit.</span>{" "}
            <span className="text-white/35">
              where ideas become products — and products become impact.
            </span>
          </h2>
          <p
            className="text-white/25 text-base mt-6 leading-relaxed"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            got a project? need a dev who actually ships? let&apos;s build something.
          </p>
          <Link
            href="/hire-me"
            className="inline-block mt-8 text-[13px] tracking-wide border border-white/15 px-6 py-3 text-white/60 hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
