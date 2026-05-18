"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IconHome,
  IconArticle,
  IconCode,
  IconPhoto,
  IconMail,
} from "@tabler/icons-react";

const links = [
  { href: "/", label: "home", icon: IconHome },
  { href: "/posts", label: "posts", icon: IconArticle },
  { href: "/projects", label: "projects", icon: IconCode },
  { href: "/gallery", label: "gallery", icon: IconPhoto },
  { href: "/hire-me", label: "hire me", icon: IconMail },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* desktop sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-[220px] z-50 hidden md:flex flex-col py-10 px-8">
        {/* brand */}
        <Link
          href="/"
          className="text-xl italic font-normal text-white/90 hover:text-white transition-colors mb-14"
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          sahilnyk
        </Link>

        {/* nav links */}
        <nav className="flex flex-col gap-5">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 text-[14px] transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/35 hover:text-white/70"
                }`}
                style={{ fontFamily: '"Source Code Pro", monospace' }}
              >
                <Icon size={16} strokeWidth={1.5} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* bottom */}
        <div className="mt-auto">
          <p
            className="text-[11px] text-white/15"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            sahilnyk.xyz
          </p>
        </div>
      </aside>

      {/* mobile header */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="text-lg italic text-white/90"
            style={{ fontFamily: '"Times New Roman", serif' }}
          >
            sahilnyk
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white/50 p-1"
            aria-label="toggle menu"
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
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 text-sm ${
                    pathname === link.href ? "text-white" : "text-white/40"
                  }`}
                  style={{ fontFamily: '"Source Code Pro", monospace' }}
                >
                  <Icon size={16} strokeWidth={1.5} />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </header>
    </>
  );
}
