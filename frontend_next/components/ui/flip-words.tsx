"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
    words,
    duration = 3000,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
            <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                    opacity: 0,
                    y: -30,
                    x: 30,
                    filter: "blur(6px)",
                    scale: 1.4,
                    position: "absolute",
                }}
                transition={{ duration: 0.4 }}
                key={currentWord}
                className={cn(
                    "inline-block px-2 text-neutral-100 dark:text-white",
                    className
                )}
            >
                {currentWord}
            </motion.span>
        </AnimatePresence>
    );
};
