"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "HOME" },
  { href: "/posts", label: "POSTS" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/hire-me", label: "HIRE ME" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-[200px] z-50 hidden md:flex flex-col justify-between py-10 px-8 border-r border-white/5">
        {/* Logo */}
        <div>
          <Link href="/" className="text-sm font-normal tracking-[0.2em] uppercase text-white/90 hover:text-white">
            SAHILNYK
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] transition-colors ${
                pathname === link.href
                  ? "text-white font-medium"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="text-[10px] text-white/20 tracking-wider">
          &copy; 2025
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden border-b border-white/5 bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" className="text-xs tracking-[0.2em] uppercase text-white/90">
            SAHILNYK
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white/60"
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              {mobileOpen ? (
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
              ) : (
                <>
                  <rect y="3" width="18" height="1" rx="0.5" />
                  <rect y="8.5" width="18" height="1" rx="0.5" />
                  <rect y="14" width="18" height="1" rx="0.5" />
                </>
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <nav className="px-5 pb-6 flex flex-col gap-3 border-t border-white/5 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-xs tracking-[0.15em] ${
                  pathname === link.href ? "text-white" : "text-white/40"
                }`}
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
