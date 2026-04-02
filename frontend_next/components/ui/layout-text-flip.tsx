"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
    text = "Build Amazing",
    words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
    duration = 3000,
}: {
    text: string;
    words: string[];
    duration?: number;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const measurerRef = useRef<HTMLDivElement | null>(null);
    const [maxWidth, setMaxWidth] = useState<number | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [duration, words.length]);

    // measure widest word to avoid layout shifts
    useEffect(() => {
        const measure = () => {
            const el = measurerRef.current;
            if (!el) return setMaxWidth(null);
            const children = Array.from(el.children) as HTMLElement[];
            let max = 0;
            children.forEach((c) => {
                const w = c.getBoundingClientRect().width;
                if (w > max) max = w;
            });
            // add padding for the container's horizontal padding (px-3 sm:px-4)
            const padding = 24; // px
            setMaxWidth(Math.ceil(max + padding));
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [words]);

    return (
        <>
            {/* Static label text */}
            <motion.span
                layoutId="subtext"
                className="
          text-lg
          sm:text-xl
          md:text-3xl
          font-bold tracking-tight 
          drop-shadow-lg
        "
            >
                {text}
            </motion.span>

            {/* Animated word container */}
            {/* Hidden measurer (offscreen) used to compute widest word */}
            <div ref={measurerRef} aria-hidden className="absolute -left-[9999px] top-0 pointer-events-none opacity-0">
                {words.map((w, idx) => (
                    <span key={idx} className="inline-block whitespace-nowrap text-lg sm:text-xl md:text-3xl font-bold px-0">
                        {w}
                    </span>
                ))}
            </div>
            <motion.span
                layout
                className="
          relative 
          overflow-hidden 
          rounded-md 
          border border-transparent 
          bg-white 
          px-3 py-1
          sm:px-4 sm:py-2
          font-sans
          text-lg
          sm:text-xl
          md:text-3xl
          font-bold
          tracking-tight
          text-black
          shadow-sm 
          ring 
          shadow-black/10 
          ring-black/10 
          drop-shadow-lg

          dark:bg-neutral-900 
          dark:text-white 
          dark:shadow-sm 
          dark:ring-1 
          dark:shadow-white/10 
          dark:ring-white/10
        "
                style={maxWidth ? { width: `${maxWidth}px` } : undefined}
            >
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={currentIndex}
                        initial={{ y: -40, filter: "blur(10px)" }}
                        animate={{ y: 0, filter: "blur(0px)" }}
                        exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        className={cn("inline-block whitespace-nowrap")}
                    >
                        {words[currentIndex]}
                    </motion.span>
                </AnimatePresence>
            </motion.span>
        </>
    );
};
