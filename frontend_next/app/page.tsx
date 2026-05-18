"use client";

import { motion } from "motion/react";
import { useState } from "react";
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
    title: "internships & building 0 to 1",
    desc: "ml intern + sde intern. built products from scratch, shipped to real users. building > theorizing.",
  },
];

const faqs = [
  {
    q: "what tech do you work with?",
    a: "primarily python/django on the backend, react/next.js on the frontend. i also do devops with docker and aws. basically whatever gets the job done.",
  },
  {
    q: "are you available for freelance?",
    a: "yes. i take on freelance projects, contract roles, and i'm open to full-time positions too. hit me up on the hire me page.",
  },
  {
    q: "how fast can you ship?",
    a: "depends on scope obviously, but i'm known for moving fast. mvps in 1-2 weeks, production features in days. i don't do meeting-heavy workflows.",
  },
  {
    q: "do you do design too?",
    a: "i have a strong design sense and can build polished UIs, but i'm not a full-time designer. i work best when there's a design system or figma to reference.",
  },
  {
    q: "what's your work style?",
    a: "async-first, ship-fast, communicate clearly. i'll send you progress updates without you having to ask. no ghosting, no bs.",
  },
];

function TimelineSection() {
  return (
    <div className="relative pl-8 md:pl-10">
      {/* vertical line */}
      <div className="absolute left-[7px] md:left-[9px] top-2 bottom-0 w-[1px] bg-white/10" />

      {timeline.map((item, i) => (
        <div key={item.year} className="relative pb-14 last:pb-0">
          {/* dot */}
          <div className="absolute left-[-25px] md:left-[-23px] top-[6px] w-[7px] h-[7px] rounded-full bg-white/50 border border-white/20" />

          {/* content */}
          <span
            className="text-[13px] text-white/30 block mb-1"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            {item.year}
          </span>
          <h3 className="text-white/85 text-lg mb-2" style={{ fontFamily: '"Inria Serif", serif' }}>
            {item.title}
          </h3>
          <p className="text-white/35 text-[15px] leading-relaxed max-w-lg">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

function FaqItem({ item }: { item: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-6 flex items-center justify-between gap-4"
      >
        <span className="text-white/80 text-lg" style={{ fontFamily: '"Inria Serif", serif' }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white/30 text-2xl shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresenceWrapper open={open}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="text-white/35 text-base pb-6 leading-relaxed pl-0">
            {item.a}
          </p>
        </motion.div>
      </AnimatePresenceWrapper>
    </div>
  );
}

function AnimatePresenceWrapper({ open, children }: { open: boolean; children: React.ReactNode }) {
  const { AnimatePresence } = require("motion/react");
  return <AnimatePresence>{open && children}</AnimatePresence>;
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
            className="text-[14px] text-white/30 tracking-wide mb-6"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            software engineer
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.15] tracking-tight"
            style={{ fontFamily: '"Inria Serif", "Times New Roman", serif' }}
          >
            i build products.
            <br />
            <span className="text-white/40">you get results.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl mt-10 max-w-xl leading-relaxed">
            full-stack engineer building scalable web applications
            and saas products. starting with real problems, ending with real impact.
          </p>
          <div className="flex gap-4 mt-10">
            <Link
              href="/projects"
              className="text-[14px] tracking-wide border border-white/15 px-6 py-3 text-white/70 hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              view work
            </Link>
            <Link
              href="/hire-me"
              className="text-[14px] tracking-wide bg-white text-black px-6 py-3 hover:bg-white/90 transition-all duration-300"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              hire me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* typography section */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p
            className="text-4xl md:text-5xl lg:text-6xl text-white/80 leading-[1.3] font-light"
            style={{ fontFamily: '"Cardo", "Times New Roman", serif' }}
          >
            i believe great software is built at the intersection of
            <span className="italic text-white/50"> clean code</span>,
            <span className="italic text-white/50"> thoughtful design</span>, and
            <span className="italic text-white/50"> relentless shipping</span>.
          </p>
        </motion.div>
      </section>

      {/* about */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-start">
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
            <p className="text-white/75 text-xl leading-relaxed" style={{ fontFamily: '"Inria Serif", serif' }}>
              hey, i&apos;m sahil. wrote my first line of code at 17 and immediately knew
              this was it. been shipping ever since.
            </p>
            <p className="text-white/40 text-base leading-relaxed">
              currently obsessed with building scalable saas, designing clean apis,
              and solving problems that actually matter. i don&apos;t do tutorial projects.
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
            className="text-[13px] tracking-wide text-white/25 mb-10"
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
                className="border border-white/8 px-5 py-3 text-[15px] text-white/40 hover:text-white/80 hover:border-white/20 transition-all duration-200"
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
            className="text-[13px] tracking-wide text-white/25 mb-14"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            the journey
          </h2>
          <TimelineSection />
        </div>
      </section>

      {/* video section */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl">
          <h2
            className="text-[13px] tracking-wide text-white/25 mb-8"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            a quick intro
          </h2>
          <div className="aspect-video w-full max-w-2xl border border-white/8 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="intro video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p
            className="text-white/20 text-[13px] mt-5 italic"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            * real intro coming soon. enjoy this certified banger in the meantime.
          </p>
        </div>
      </section>

      {/* grid cards like poolside */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-5xl">
          <h2
            className="text-[13px] tracking-wide text-white/25 mb-12"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            what i bring to the table
          </h2>
          <div className="grid md:grid-cols-2 border border-white/8">
            {/* card 1 */}
            <div className="border-b md:border-b md:border-r border-white/8 p-8 md:p-12">
              <h3 className="text-2xl text-white/85 mb-4" style={{ fontFamily: '"Inria Serif", serif' }}>
                full-stack development
              </h3>
              <p className="text-white/35 text-base leading-relaxed">
                end-to-end product engineering. from database schema to pixel-perfect
                frontend. django, react, next.js, postgres, redis, the works.
              </p>
            </div>
            {/* card 2 with wireframe */}
            <div className="border-b border-white/8 p-8 md:p-12 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-32 h-32 opacity-30" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5">
                <ellipse cx="100" cy="100" rx="80" ry="40" />
                <ellipse cx="100" cy="100" rx="80" ry="40" transform="rotate(60 100 100)" />
                <ellipse cx="100" cy="100" rx="80" ry="40" transform="rotate(120 100 100)" />
                <polygon points="100,40 140,120 60,120" />
                <circle cx="100" cy="40" r="4" fill="rgba(255,255,255,0.4)" />
                <circle cx="140" cy="120" r="4" fill="rgba(255,255,255,0.4)" />
                <circle cx="60" cy="120" r="4" fill="rgba(255,255,255,0.4)" />
              </svg>
            </div>
            {/* card 3 with wireframe */}
            <div className="border-b md:border-b-0 md:border-r border-white/8 p-8 md:p-12 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-32 h-32 opacity-30" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5">
                <rect x="40" y="40" width="120" height="120" />
                <rect x="60" y="60" width="80" height="80" />
                <line x1="40" y1="40" x2="60" y2="60" />
                <line x1="160" y1="40" x2="140" y2="60" />
                <line x1="40" y1="160" x2="60" y2="140" />
                <line x1="160" y1="160" x2="140" y2="140" />
                <circle cx="100" cy="100" r="20" />
              </svg>
            </div>
            {/* card 4 */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl text-white/85 mb-4" style={{ fontFamily: '"Inria Serif", serif' }}>
                scalable architecture
              </h3>
              <p className="text-white/35 text-base leading-relaxed">
                systems designed to grow. clean apis, proper caching, containerized
                deployments. built for thousands of users from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-3xl">
          <h2
            className="text-[13px] tracking-wide text-white/25 mb-12"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            frequently asked
          </h2>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} item={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="border-t border-white/5 px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-normal leading-[1.4]" style={{ fontFamily: '"Inria Serif", serif' }}>
            <span className="text-white/90">the next commit.</span>{" "}
            <span className="text-white/40">
              where ideas become products and products become impact.
            </span>
          </h2>
          <p
            className="text-white/30 text-base mt-6 leading-relaxed"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            got a project? need a dev who actually ships? let&apos;s build something.
          </p>
          <Link
            href="/hire-me"
            className="inline-block mt-8 text-[14px] tracking-wide border border-white/15 px-6 py-3 text-white/60 hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
