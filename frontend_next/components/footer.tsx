"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconArticle,
  IconCode,
  IconPhoto,
  IconMail,
} from "@tabler/icons-react";

function FooterLink({ href, label, icon: Icon, external }: {
  href: string;
  label: string;
  icon: typeof IconBrandGithub;
  external?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="hover:text-white/60 transition-colors flex items-center gap-2"
    >
      <motion.span
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0, width: hovered ? "auto" : 0 }}
        transition={{ duration: 0.2 }}
        className="inline-flex overflow-hidden"
      >
        <Icon size={15} strokeWidth={1.5} />
      </motion.span>
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-0">
      {/* cta rows */}
      <div className="px-6 md:px-16 lg:px-24 py-20 space-y-0">
        <div className="border-b border-white/5 pb-8 mb-8">
          <p className="text-2xl md:text-3xl text-white/80 mb-4" style={{ fontFamily: '"Inria Serif", serif' }}>
            need a dev who actually ships?
          </p>
          <div className="flex justify-end">
            <Link
              href="/hire-me"
              className="text-[13px] tracking-wide text-white/50 hover:text-white transition-colors"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              → hire me today
            </Link>
          </div>
        </div>
        <div className="border-b border-white/5 pb-8">
          <p className="text-2xl md:text-3xl text-white/80 mb-4" style={{ fontFamily: '"Inria Serif", serif' }}>
            check out what i&apos;ve been building.
          </p>
          <div className="flex justify-end">
            <Link
              href="/projects"
              className="text-[13px] tracking-wide text-white/50 hover:text-white transition-colors"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              → view projects
            </Link>
          </div>
        </div>
      </div>

      {/* footer links */}
      <div className="px-6 md:px-16 lg:px-24 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
          <nav
            className="flex flex-col gap-4 text-[14px] text-white/30"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            <FooterLink href="/posts" label="posts" icon={IconArticle} />
            <FooterLink href="/projects" label="projects" icon={IconCode} />
            <FooterLink href="/gallery" label="gallery" icon={IconPhoto} />
            <FooterLink href="/hire-me" label="hire me" icon={IconMail} />
          </nav>

          <div
            className="flex gap-6 text-[14px] text-white/30"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            <FooterLink href="https://github.com/sahilnyk" label="github" icon={IconBrandGithub} external />
            <FooterLink href="https://linkedin.com/in/sahilnyk" label="linkedin" icon={IconBrandLinkedin} external />
            <FooterLink href="https://twitter.com/sahilnyk" label="twitter" icon={IconBrandX} external />
          </div>
        </div>
      </div>

      {/* giant animated sahilnyk in bowlby one */}
      <div className="overflow-hidden select-none pointer-events-none px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2
            className="text-[18vw] md:text-[14vw] leading-none text-center text-transparent"
            style={{
              fontFamily: '"Bowlby One", sans-serif',
              WebkitTextStroke: "1.5px rgba(255,255,255,0.12)",
            }}
          >
            sahilnyk
          </h2>
        </motion.div>
      </div>
    </footer>
  );
}
