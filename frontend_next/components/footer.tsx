import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} sahilnyk. built with caffeine & curiosity.</p>
        <div className="flex gap-6">
          <Link href="https://github.com/sahilnyk" target="_blank" rel="noopener">
            github
          </Link>
          <Link href="https://linkedin.com/in/sahilnyk" target="_blank" rel="noopener">
            linkedin
          </Link>
          <Link href="https://twitter.com/sahilnyk" target="_blank" rel="noopener">
            twitter/x
          </Link>
        </div>
      </div>
    </footer>
  );
}
