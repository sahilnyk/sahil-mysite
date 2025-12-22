"use client";

import { motion } from "motion/react";

const techLogos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
];

// 🔥 Smooth Infinite Row
const InfiniteRow = ({ reverse = false }: { reverse?: boolean }) => (
    <motion.div
        className="flex gap-16 w-max"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
        }}
    >
        {[...techLogos, ...techLogos].map((logo, i) => (
            <img
                key={i}
                src={logo}
                className="h-14 sm:h-20 opacity-80 hover:opacity-100 hover:scale-105 transition duration-300"
                alt="tech"
            />
        ))}
    </motion.div>
);

export const TechStackMarquee = () => {
    return (
        <section className="w-full py-16 sm:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center px-4">

                {/* Heading */}
                <h2
                    className="
            text-3xl sm:text-5xl font-extrabold 
            bg-gradient-to-b from-white via-neutral-300 to-neutral-500
            bg-clip-text text-transparent
        "
                >
                    My Tech Stack
                </h2>

                <p className="text-neutral-400 mt-3 text-sm sm:text-base tracking-wide">
                    Building scalable systems using strong design principles.<br />
                    Tech stack is just the tool — not the magic.
                </p>

                {/* Row 1 */}
                <div className="relative mt-14 overflow-hidden">
                    <div className="flex w-[200%]">
                        <InfiniteRow />
                    </div>
                </div>

                {/* Row 2 (reverse) */}
                <div className="relative mt-10 overflow-hidden">
                    <div className="flex w-[200%]">
                        <InfiniteRow reverse />
                    </div>
                </div>

            </div>
        </section>
    );
};
