"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/hire-me", label: "Hire Me" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar — top-aligned nav */}
      <aside className="fixed left-0 top-0 h-screen w-[220px] z-50 hidden md:flex flex-col py-10 px-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg italic font-normal text-white/90 hover:text-white transition-colors mb-12"
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          sahilnyk
        </Link>

        {/* Nav Links — top aligned */}
        <nav className="flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/35 hover:text-white/70"
              }`}
              style={{ fontFamily: '"Source Code Pro", monospace' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom info */}
        <div className="mt-auto">
          <p
            className="text-[10px] text-white/15"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            &copy; 2025 sahilnyk
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="text-base italic text-white/90"
            style={{ fontFamily: '"Times New Roman", serif' }}
          >
            sahilnyk
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white/50 p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" fill="none">
                <path d="M5 5L15 15M15 5L5 15" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <rect y="5" width="20" height="1.2" rx="0.6" />
                <rect y="9.5" width="14" height="1.2" rx="0.6" />
                <rect y="14" width="20" height="1.2" rx="0.6" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav className="px-5 pb-5 flex flex-col gap-4 border-t border-white/5 pt-4 bg-[#0a0a0a]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  pathname === link.href ? "text-white" : "text-white/40"
                }`}
                style={{ fontFamily: '"Source Code Pro", monospace' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
