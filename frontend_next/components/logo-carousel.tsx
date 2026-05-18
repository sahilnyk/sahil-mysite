"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Logo {
  name: string;
  url: string;
}

const allLogos: Logo[] = [
  { name: "python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "django", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "react", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "nextjs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "typescript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "postgresql", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "redis", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "aws", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "nodejs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "javascript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function LogoColumn({ logos, interval }: { logos: Logo[]; interval: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, interval);
    return () => clearInterval(timer);
  }, [logos.length, interval]);

  return (
    <div className="relative h-14 w-28 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={logos[currentIndex].name}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute flex flex-col items-center gap-1"
        >
          <img
            src={logos[currentIndex].url}
            alt={logos[currentIndex].name}
            className="w-8 h-8 object-contain opacity-60"
          />
          <span
            className="text-[10px] text-white/30"
            style={{ fontFamily: '"Source Code Pro", monospace' }}
          >
            {logos[currentIndex].name}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function LogoCarousel({ columnCount = 4 }: { columnCount?: number }) {
  const [columns, setColumns] = useState<Logo[][]>([]);

  useEffect(() => {
    const shuffled = shuffleArray(allLogos);
    const cols: Logo[][] = Array.from({ length: columnCount }, () => []);
    shuffled.forEach((logo, i) => {
      cols[i % columnCount].push(logo);
    });
    setColumns(cols);
  }, [columnCount]);

  if (columns.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-6 items-center">
      {columns.map((col, i) => (
        <LogoColumn key={i} logos={col} interval={2500 + i * 400} />
      ))}
    </div>
  );
}
