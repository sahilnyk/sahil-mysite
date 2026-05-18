import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-0">
      {/* CTA rows like poolside */}
      <div className="px-6 md:px-16 lg:px-24 py-16 space-y-0">
        <div className="border-b border-white/5 pb-6 mb-6">
          <p className="text-xl md:text-2xl text-white/80 mb-3">
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
        <div className="border-b border-white/5 pb-6">
          <p className="text-xl md:text-2xl text-white/80 mb-3">
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

      {/* Footer links + giant text */}
      <div className="px-6 md:px-16 lg:px-24 pb-8">
        {/* Links row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
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

        {/* Giant striped/outlined text */}
        <div className="overflow-hidden select-none pointer-events-none">
          <svg
            viewBox="0 0 900 120"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="footer-lines" patternUnits="userSpaceOnUse" width="900" height="4">
                <line x1="0" y1="0" x2="900" y2="0" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="0" y1="2" x2="900" y2="2" stroke="transparent" strokeWidth="1" />
              </pattern>
              <clipPath id="footer-text-clip">
                <text
                  x="50%"
                  y="95"
                  textAnchor="middle"
                  fontSize="130"
                  fontFamily="'Times New Roman', Times, serif"
                  fontStyle="italic"
                  fontWeight="400"
                >
                  sahilnyk.xyz
                </text>
              </clipPath>
            </defs>
            <rect
              width="900"
              height="120"
              fill="url(#footer-lines)"
              clipPath="url(#footer-text-clip)"
            />
          </svg>
        </div>

        {/* Copyright */}
        <p
          className="text-[9px] text-white/10 tracking-wider mt-6 text-center"
          style={{ fontFamily: '"Source Code Pro", monospace' }}
        >
          &copy; 2025 sahilnyk
        </p>
      </div>
    </footer>
  );
}
