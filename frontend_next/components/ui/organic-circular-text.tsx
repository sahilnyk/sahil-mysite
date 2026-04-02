"use client";

import React, { useMemo } from "react";
import { motion } from "motion/react";

type Props = {
    items: string[];
    radius?: number;
    onItemClick?: (text: string, index: number) => void;
};

export default function OrganicCircularText({ items, radius = 150, onItemClick }: Props) {
    const total = items.length;

    // lock randomness once per mount
    const randomValues = useMemo(
        () =>
            items.map(() => ({
                offset: (Math.random() - 0.5) * 12, // position shift in degrees
                rotate: (Math.random() - 0.5) * 20, // tilt for visual charm
                translateJitter: (Math.random() - 0.5) * 10, // px jitter on radius
                floatOffset: Math.random() * 1.5, // phase offset for float
            })),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {items.map((text, i) => {
                const baseAngle = (i / total) * 360;
                const rv = randomValues[i];
                const angle = baseAngle + rv.offset;
                const jitteredRadius = radius + rv.translateJitter;
                const flip = i % 2 === 0; // alternate inward/outward

                return (
                    <motion.div
                        key={i}
                        className="absolute left-1/2 top-1/2 pointer-events-auto cursor-pointer"
                        style={{
                            transform: `rotate(${angle}deg) translate(${jitteredRadius}px) rotate(${flip ? angle : angle + 180}deg)`,
                            transformOrigin: "center",
                        }}
                        whileHover={{ scale: 1.12, rotate: rv.rotate + 6 }}
                        animate={{ y: [0, -6 - rv.floatOffset, 0] }}
                        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                        onClick={() => onItemClick ? onItemClick(text, i) : console.log(text)}
                    >
                        <span
                            className="text-white/90 text-sm sm:text-base md:text-lg whitespace-nowrap"
                            style={{ fontFamily: "'Gochi Hand', cursive", transform: `rotate(${rv.rotate}deg)` }}
                        >
                            {text}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
}
