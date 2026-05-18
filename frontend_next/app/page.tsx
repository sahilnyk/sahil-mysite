"use client";

import { motion } from "motion/react";
import Link from "next/link";

const techStack = [
  "Python", "Django", "React", "Next.js", "TypeScript",
  "PostgreSQL", "Redis", "Docker", "AWS", "Tailwind CSS",
  "Node.js", "REST APIs", "Git", "Linux",
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
    desc: "designed REST APIs, deployed to the cloud, understood distributed systems. actual engineering.",
  },
  {
    year: "2025",
    title: "internships & building 0 → 1",
    desc: "ML intern + SDE intern. built products from scratch, shipped to real users.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Announcement Ticker Bar */}
      <div className="border-b border-white/5 overflow-hidden">
        <div className="flex items-center h-10">
          <div className="flex-shrink-0 px-6 border-r border-white/5 h-full flex items-center">
            <span className="text-[10px] tracking-[0.2em] text-white/60">! AVAILABLE FOR WORK</span>
          </div>
          <div className="flex-shrink-0 px-6 border-r border-white/5 h-full flex items-center">
            <span className="text-[10px] tracking-[0.2em] text-white/40">→ VIEW PROJECTS</span>
          </div>
          <div className="flex-shrink-0 px-6 h-full flex items-center">
            <span className="text-[10px] tracking-[0.2em] text-white/40">→ LATEST POST</span>
          </div>
        </div>
      </div>

      {/* Hero — Big centered statement like poolside */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.15] tracking-tight">
            I build products.
            <br />
            <span className="text-white/50">You get results.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-white/40 text-sm md:text-base max-w-lg leading-relaxed"
        >
          Full-stack engineer building scalable web applications
          and SaaS products — starting with real problems.
        </motion.p>
      </section>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* About / Profile Section */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[240px_1fr] gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/139529375?v=4"
              alt="Sahil Nayak"
              className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              hey, i&apos;m sahil — wrote my first line of code at 17 and
              immediately knew this was it. been shipping ever since.
            </p>
            <p className="text-white/40 leading-relaxed">
              currently obsessed with building scalable saas, designing clean APIs,
              and solving problems that actually matter. i don&apos;t do tutorial projects —
              everything i build has real users or solves a real pain point.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="/projects"
                className="text-xs tracking-[0.15em] uppercase border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition-all"
              >
                View Work
              </Link>
              <Link
                href="/hire-me"
                className="text-xs tracking-[0.15em] uppercase border border-white/20 px-5 py-2.5 bg-white text-black hover:bg-white/90 transition-all"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Tech Stack */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-10">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="border border-white/8 px-4 py-2 text-xs tracking-wider text-white/50 hover:text-white hover:border-white/25 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Timeline */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-12">
            The Journey
          </h2>
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 py-7 border-t border-white/5 first:border-t-0"
            >
              <span className="text-white/20 text-sm">{item.year}</span>
              <div>
                <h3 className="text-white/80 text-sm mb-1">{item.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Video Section */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-8">
            A Quick Intro
          </h2>
          <div className="aspect-video w-full max-w-2xl border border-white/8 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Intro Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-white/15 text-xs mt-4 italic">
            * real intro coming soon. enjoy this certified banger in the meantime.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* CTA */}
      <section className="px-6 md:px-16 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="font-medium">The Next Commit.</span>{" "}
            <span className="text-white/50">
              Where ideas become products — and products become impact.
            </span>
          </h2>
          <p className="text-white/30 text-sm mt-6 max-w-md mx-auto leading-relaxed">
            got a project? need a dev who actually ships and doesn&apos;t ghost?
            let&apos;s build something together.
          </p>
          <Link
            href="/hire-me"
            className="inline-block mt-8 text-xs tracking-[0.15em] uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
