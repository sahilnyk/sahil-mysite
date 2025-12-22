"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function NavbarMenuDemo() {
    const [hovered, setHovered] = useState(false);
    const [direction, setDirection] = useState<Direction>("TOP");

    const rotateDirection = (d: Direction): Direction => {
        const dirs: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const i = dirs.indexOf(d);
        return dirs[(i + 1) % dirs.length];
    };

    const movingMap: Record<Direction, string> = {
        TOP: "radial-gradient(25% 60% at 50% 0%, white 0%, transparent 100%)",
        LEFT: "radial-gradient(25% 60% at 0% 50%, white 0%, transparent 100%)",
        BOTTOM: "radial-gradient(25% 60% at 50% 100%, white 0%, transparent 100%)",
        RIGHT: "radial-gradient(25% 60% at 100% 50%, white 0%, transparent 100%)",
    };

    const highlight =
        "radial-gradient(80% 200% at 50% 50%, #3275F8 0%, transparent 100%)";

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prev) => rotateDirection(prev));
            }, 900);
            return () => clearInterval(interval);
        }
    }, [hovered]);

    return (
        <div className="w-full flex justify-center pt-4 sm:pt-6">
            <div
                className="relative"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Moving Glow */}
                <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ filter: "blur(4px)" }}
                    initial={{ background: movingMap[direction] }}
                    animate={{
                        background: hovered
                            ? [movingMap[direction], highlight]
                            : movingMap[direction],
                    }}
                    transition={{ ease: "linear", duration: 1 }}
                />

                {/* NAVBAR */}
                <div
                    className="
            relative flex items-center 
            gap-4 sm:gap-8 
            rounded-full
            bg-white dark:bg-black
            border dark:border-white/20 border-black/20
            shadow-lg 
            px-5 py-3 sm:px-8 sm:py-4
            transition-all duration-500
            hover:scale-[1.02]
          "
                >
                    {/* === ROUTING LINKS === */}
                    <Link
                        href="/"
                        className="
              cursor-pointer 
              text-sm sm:text-base
              text-black dark:text-white 
              hover:text-neutral-400 
              transition
            "
                    >
                        About
                    </Link>

                    <Link
                        href="/projects"
                        className="
              cursor-pointer 
              text-sm sm:text-base
              text-black dark:text-white 
              hover:text-neutral-400 
              transition
            "
                    >
                        Projects
                    </Link>

                    <Link
                        href="/blog"
                        className="
              cursor-pointer 
              text-sm sm:text-base
              text-black dark:text-white 
              hover:text-neutral-400 
              transition
            "
                    >
                        Blog
                    </Link>

                    {/* GitHub */}
                    <a
                        href="https://github.com/sahilnyk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              h-8 w-8 sm:h-10 sm:w-10 
              flex items-center justify-center 
              rounded-full 
              border border-white/30 hover:border-white transition
              bg-black hover:bg-white/10
            "
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            className="h-4 w-4 sm:h-6 sm:w-6 invert"
                            alt="GitHub"
                        />
                    </a>

                    {/* LinkedIn - White Icon */}
                    <a
                        href="https://www.linkedin.com/in/sahil-nayak-464548277/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              h-8 w-8 sm:h-10 sm:w-10 
              flex items-center justify-center 
              rounded-full 
              border border-white/30 hover:border-white transition
              bg-black hover:bg-white/10
            "
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                            className="h-4 w-4 sm:h-6 sm:w-6"
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
