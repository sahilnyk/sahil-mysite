import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-0">
      <div className="px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.15em] text-white/25 uppercase">
        <p>&copy; 2025 sahilnyk. built with caffeine & curiosity.</p>
        <div className="flex gap-6">
          <Link href="https://github.com/sahilnyk" target="_blank" rel="noopener">
            Github
          </Link>
          <Link href="https://linkedin.com/in/sahilnyk" target="_blank" rel="noopener">
            LinkedIn
          </Link>
          <Link href="https://twitter.com/sahilnyk" target="_blank" rel="noopener">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
