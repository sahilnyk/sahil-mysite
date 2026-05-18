"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/posts", label: "posts" },
  { href: "/projects", label: "projects" },
  { href: "/gallery", label: "gallery" },
  { href: "/hire-me", label: "hire me" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl italic font-normal tracking-tight text-white/90 hover:text-white transition-colors"
        >
          sahilnyk
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/60">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-white transition-colors ${
                  pathname === link.href ? "text-white" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-white/60 hover:text-white" aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <rect y="4" width="20" height="1.5" rx="0.75" />
            <rect y="9.25" width="20" height="1.5" rx="0.75" />
            <rect y="14.5" width="20" height="1.5" rx="0.75" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
