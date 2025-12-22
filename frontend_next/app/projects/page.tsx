"use client";

import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { NavbarMenuDemo } from "@/components/ui/navbar-menu-demo";
import { Cover } from "@/components/ui/cover";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export default function ProjectsPage() {
    return (
        <main className="relative min-h-screen w-full px-4 sm:px-6 pt-0 pb-10">

            {/* ===== BACKGROUND ===== */}
            <div className="fixed inset-0 z-0">
                <BackgroundRippleEffect />
            </div>

            {/* ===== NAVBAR ===== */}
            <div className="sticky top-0 z-30">
                <NavbarMenuDemo />
            </div>

            {/* ===== PAGE CONTENT ===== */}
            <div className="relative z-10 max-w-6xl mx-auto mt-16 text-center">

                {/* Heading */}
                <h1
                    className="
            text-4xl md:text-5xl lg:text-6xl 
            font-semibold
            bg-clip-text text-transparent
            bg-gradient-to-b from-white via-neutral-300 to-neutral-500
          "
                >
                    I have built some cool <Cover>Projects</Cover>
                </h1>

                <p className="text-neutral-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
                    A collection of products and applications I've built over the years.
                    From small academic projects to full-scale web applications.
                </p>

                {/* ========= OFFICIAL BENTO GRID ========= */}
                <div className="mt-14">
                    <BentoGrid className="max-w-4xl mx-auto">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                            />
                        ))}
                    </BentoGrid>
                </div>

            </div>
        </main>
    );
}

/* =================== EXACT OFFICIAL GRID DATA =================== */

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl 
  bg-gradient-to-br from-neutral-200 dark:from-neutral-900 
  dark:to-neutral-800 to-neutral-100" />
);

const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description: "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
