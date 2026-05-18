"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-0">
      {/* CTA rows */}
      <div className="px-6 md:px-16 lg:px-24 py-20 space-y-0">
        <div className="border-b border-white/5 pb-8 mb-8">
          <p className="text-2xl md:text-3xl text-white/80 mb-4">
            Need a dev who actually ships?
          </p>
          <div className="flex justify-end">
            <Link
              href="/hire-me"
              className="text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              → HIRE ME TODAY
            </Link>
          </div>
        </div>
        <div className="border-b border-white/5 pb-8">
          <p className="text-2xl md:text-3xl text-white/80 mb-4">
            Check out what I&apos;ve been building.
          </p>
          <div className="flex justify-end">
            <Link
              href="/projects"
              className="text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              → VIEW PROJECTS
            </Link>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="px-6 md:px-16 lg:px-24 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
          <nav
            className="flex flex-col gap-3 text-[11px] tracking-[0.15em] uppercase text-white/30"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            <Link href="/posts" className="hover:text-white/60 transition-colors">Posts</Link>
            <Link href="/projects" className="hover:text-white/60 transition-colors">Projects</Link>
            <Link href="/gallery" className="hover:text-white/60 transition-colors">Gallery</Link>
            <Link href="/hire-me" className="hover:text-white/60 transition-colors">Hire Me</Link>
          </nav>

          <div
            className="flex gap-6 text-[11px] tracking-[0.15em] uppercase text-white/30"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            <Link href="https://github.com/sahilnyk" target="_blank" rel="noopener" className="hover:text-white/60 transition-colors">
              Github
            </Link>
            <Link href="https://linkedin.com/in/sahilnyk" target="_blank" rel="noopener" className="hover:text-white/60 transition-colors">
              LinkedIn
            </Link>
            <Link href="https://twitter.com/sahilnyk" target="_blank" rel="noopener" className="hover:text-white/60 transition-colors">
              Twitter
            </Link>
          </div>
        </div>
      </div>

      {/* Giant animated sahilnyk.xyz */}
      <div className="overflow-hidden select-none pointer-events-none px-2 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.svg
            viewBox="0 0 1200 200"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              filter: [
                "drop-shadow(0 0 0px rgba(255,255,255,0))",
                "drop-shadow(0 0 8px rgba(255,255,255,0.08))",
                "drop-shadow(0 0 0px rgba(255,255,255,0))",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <defs>
              <pattern id="ft-lines" patternUnits="userSpaceOnUse" width="1200" height="3.5">
                <line x1="0" y1="0" x2="1200" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                <line x1="0" y1="1.75" x2="1200" y2="1.75" stroke="transparent" strokeWidth="1" />
              </pattern>
              <clipPath id="ft-clip">
                <text
                  x="50%"
                  y="160"
                  textAnchor="middle"
                  fontSize="190"
                  fontFamily="'Times New Roman', Times, serif"
                  fontStyle="italic"
                  fontWeight="400"
                >
                  sahilnyk.xyz
                </text>
              </clipPath>
            </defs>
            <rect
              width="1200"
              height="200"
              fill="url(#ft-lines)"
              clipPath="url(#ft-clip)"
            />
          </motion.svg>
        </motion.div>
      </div>
    </footer>
  );
}
