"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconArticle,
  IconCode,
  IconPhoto,
  IconMail,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-0">
      {/* cta rows */}
      <div className="px-6 md:px-16 lg:px-24 py-20 space-y-0">
        <div className="border-b border-white/5 pb-8 mb-8">
          <p className="text-2xl md:text-3xl text-white/80 mb-4">
            need a dev who actually ships?
          </p>
          <div className="flex justify-end">
            <Link
              href="/hire-me"
              className="text-[12px] tracking-wide text-white/50 hover:text-white transition-colors flex items-center gap-2"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              → hire me today
            </Link>
          </div>
        </div>
        <div className="border-b border-white/5 pb-8">
          <p className="text-2xl md:text-3xl text-white/80 mb-4">
            check out what i&apos;ve been building.
          </p>
          <div className="flex justify-end">
            <Link
              href="/projects"
              className="text-[12px] tracking-wide text-white/50 hover:text-white transition-colors flex items-center gap-2"
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
            className="flex flex-col gap-4 text-[13px] text-white/30"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            <Link href="/posts" className="hover:text-white/60 transition-colors flex items-center gap-2">
              <IconArticle size={15} strokeWidth={1.5} /> posts
            </Link>
            <Link href="/projects" className="hover:text-white/60 transition-colors flex items-center gap-2">
              <IconCode size={15} strokeWidth={1.5} /> projects
            </Link>
            <Link href="/gallery" className="hover:text-white/60 transition-colors flex items-center gap-2">
              <IconPhoto size={15} strokeWidth={1.5} /> gallery
            </Link>
            <Link href="/hire-me" className="hover:text-white/60 transition-colors flex items-center gap-2">
              <IconMail size={15} strokeWidth={1.5} /> hire me
            </Link>
          </nav>

          <div
            className="flex gap-6 text-[13px] text-white/30"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            <Link href="https://github.com/sahilnyk" target="_blank" rel="noopener" className="hover:text-white/60 transition-colors flex items-center gap-2">
              <IconBrandGithub size={16} strokeWidth={1.5} /> github
            </Link>
            <Link href="https://linkedin.com/in/sahilnyk" target="_blank" rel="noopener" className="hover:text-white/60 transition-colors flex items-center gap-2">
              <IconBrandLinkedin size={16} strokeWidth={1.5} /> linkedin
            </Link>
            <Link href="https://twitter.com/sahilnyk" target="_blank" rel="noopener" className="hover:text-white/60 transition-colors flex items-center gap-2">
              <IconBrandX size={16} strokeWidth={1.5} /> twitter
            </Link>
          </div>
        </div>
      </div>

      {/* giant animated sahilnyk.xyz */}
      <div className="overflow-hidden select-none pointer-events-none px-0 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.svg
            viewBox="0 0 1000 180"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            animate={{
              filter: [
                "drop-shadow(0 0 0px rgba(255,255,255,0))",
                "drop-shadow(0 0 12px rgba(255,255,255,0.06))",
                "drop-shadow(0 0 0px rgba(255,255,255,0))",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <defs>
              <pattern id="ft-lines" patternUnits="userSpaceOnUse" width="1000" height="3">
                <line x1="0" y1="0" x2="1000" y2="0" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" />
                <line x1="0" y1="1.5" x2="1000" y2="1.5" stroke="transparent" strokeWidth="1" />
              </pattern>
              <clipPath id="ft-clip">
                <text
                  x="50%"
                  y="145"
                  textAnchor="middle"
                  fontSize="170"
                  fontFamily="'Times New Roman', Times, serif"
                  fontStyle="italic"
                  fontWeight="400"
                >
                  sahilnyk.xyz
                </text>
              </clipPath>
            </defs>
            <rect
              width="1000"
              height="180"
              fill="url(#ft-lines)"
              clipPath="url(#ft-clip)"
            />
          </motion.svg>
        </motion.div>
      </div>
    </footer>
  );
}
