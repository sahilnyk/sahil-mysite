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
    desc: "got introduced to coding through python. immediately got addicted to the dopamine of seeing code actually do something. no turning back after this.",
  },
  {
    year: "2022",
    title: "build season activated",
    desc: "adopted the 'learn by shipping' philosophy. built multiple projects, broke things, fixed them at 3am. the usual dev arc.",
  },
  {
    year: "2023",
    title: "entered cs @ university",
    desc: "time to actually learn why things work — data structures, algorithms, computer architecture. the theoretical foundation that makes everything click.",
  },
  {
    year: "2024",
    title: "apis, cloud & going full-stack",
    desc: "designed REST APIs, deployed to the cloud, understood distributed systems. things started feeling like actual engineering, not just coding.",
  },
  {
    year: "2025",
    title: "internships & building 0 → 1",
    desc: "ML intern + SDE intern. built products from scratch, shipped to real users. realized building > theorizing. every single time.",
  },
];

const projects = [
  {
    title: "saas analytics dashboard",
    desc: "real-time metrics, auth, role-based access. django + react.",
    tech: "Django, React, PostgreSQL",
  },
  {
    title: "ai-powered blog platform",
    desc: "auto-summarization, SEO optimization, CMS with CKEditor.",
    tech: "Next.js, Python, OpenAI",
  },
  {
    title: "developer portfolio (this site)",
    desc: "minimal, fast, times new roman energy. because good design doesn't need to scream.",
    tech: "Next.js, Tailwind, Django API",
  },
];

export default function Home() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 min-h-[80vh] flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <p className="text-white/50 text-sm tracking-wider uppercase">
            software engineer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1]">
            hey, i&apos;m{" "}
            <span className="italic">sahil</span>.
            <br />
            i build things for
            <br />
            the internet.
          </h1>
          <p className="text-white/50 text-lg max-w-md leading-relaxed">
            wrote my first line of code at 17. been shipping ever since.
            currently obsessed with building scalable saas & solving problems
            that actually matter.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-block border border-white/20 px-5 py-2.5 text-sm hover:bg-white hover:text-black transition-all"
            >
              view work
            </Link>
            <Link
              href="/hire-me"
              className="inline-block border border-white/20 px-5 py-2.5 text-sm bg-white text-black hover:bg-white/90 transition-all"
            >
              hire me
            </Link>
          </div>
        </motion.div>

        {/* Right — Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/139529375?v=4"
              alt="Sahil Nayak"
              className="w-64 h-64 md:w-80 md:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
            />
            <div className="absolute -bottom-3 -right-3 w-64 h-64 md:w-80 md:h-80 border border-white/5 -z-10" />
          </div>
        </motion.div>
      </section>

      {/* Typographic Letter Cards — poolside style */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {["S", "A", "H", "I", "L"].map((letter, i) => (
              <motion.div
                key={letter + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="aspect-[3/4] border border-white/10 flex items-center justify-center overflow-hidden group hover:border-white/30 transition-all"
              >
                <span className="text-[12vw] md:text-[8vw] font-normal italic text-white/10 group-hover:text-white/25 transition-all duration-500 select-none">
                  {letter}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-white/30 mt-6 text-center text-sm">
            building things that matter, one commit at a time.
          </p>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-white/40 uppercase tracking-wider mb-8">
            tech i work with daily
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="border border-white/10 px-4 py-2 text-sm text-white/70 hover:text-white hover:border-white/30 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-white/40 uppercase tracking-wider mb-12">
            the journey so far
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 py-8 border-t border-white/5"
              >
                <span className="text-white/30 text-lg font-normal">
                  {item.year}
                </span>
                <div>
                  <h3 className="text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Glimpse */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-sm text-white/40 uppercase tracking-wider">
              selected work
            </h2>
            <Link href="/projects" className="text-sm text-white/40 hover:text-white">
              view all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-white/5 p-6 hover:border-white/20 transition-all group"
              >
                <h3 className="text-white mb-3 group-hover:italic transition-all">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>
                <p className="text-white/20 text-xs">{project.tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-white/40 uppercase tracking-wider mb-8">
            a quick intro (sort of)
          </h2>
          <div className="aspect-video w-full max-w-3xl border border-white/10 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Intro Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-white/20 text-xs mt-3 italic">
            * real intro video coming soon. for now, enjoy this certified banger.
          </p>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-6xl mx-auto px-6 mt-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/5 py-16 px-6"
        >
          <h2 className="text-3xl md:text-4xl mb-4">let&apos;s build something cool.</h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto">
            got a project idea? need a dev who actually ships? hit me up.
          </p>
          <Link
            href="/hire-me"
            className="inline-block border border-white/20 px-8 py-3 text-sm hover:bg-white hover:text-black transition-all"
          >
            get in touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
