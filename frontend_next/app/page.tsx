"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
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

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="relative flex gap-6 md:gap-10 pb-0"
    >
      {/* left column: year + line */}
      <div className="flex flex-col items-center pt-1 shrink-0 w-[60px] md:w-[80px]">
        <span
          className="text-[14px] text-white/50 font-medium"
          style={{ fontFamily: '"Source Code Pro", monospace' }}
        >
          {item.year}
        </span>
        <div className="w-[1px] flex-1 mt-3 bg-gradient-to-b from-blue-400/30 to-transparent" />
      </div>

      {/* right column: card */}
      <div className="flex-1 border border-white/6 p-6 md:p-8 mb-5 hover:border-white/15 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 rounded-full bg-blue-400/70 group-hover:bg-blue-400 transition-colors" />
          <h3 className="text-white/90 text-xl" style={{ fontFamily: '"Inria Serif", serif' }}>
            {item.title}
          </h3>
        </div>
        <p className="text-white/40 text-base leading-relaxed pl-5">{item.desc}</p>
      </div>
    </motion.div>
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
          <div>
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* video section with rough grey texture */}
      <section className="border-t border-white/5">
        <div className="beam-bg noise px-6 md:px-16 lg:px-24 py-24">
          <div className="relative z-10 max-w-4xl">
            <h2
              className="text-[13px] tracking-wide text-white/25 mb-8"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              a quick intro
            </h2>
            <div className="aspect-video w-full max-w-2xl border border-white/8 overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.03)]">
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
