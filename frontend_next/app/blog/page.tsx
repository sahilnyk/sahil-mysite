"use client";

import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { NavbarMenuDemo } from "@/components/ui/navbar-menu-demo";
import { Cover } from "@/components/ui/cover";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArticle,
    IconBrain,
    IconBulb,
    IconNotebook,
    IconRocket,
    IconTerminal2,
    IconWriting,
} from "@tabler/icons-react";

export default function BlogPage() {
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
                    I write about <Cover>Tech & Learning</Cover>
                </h1>

                <p className="text-neutral-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
                    Not Added Blogs (My DB terminated because of free tier) will add soon.
                    Thanks for your time
                </p>

                {/* ========= BENTO GRID ========= */}
                <div className="mt-14">
                    <BentoGrid className="max-w-5xl mx-auto">
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

/* =================== GRID DATA =================== */

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl 
  bg-gradient-to-br from-neutral-200 dark:from-neutral-900 
  dark:to-neutral-800 to-neutral-100" />
);

const items = [
    {
        title: "Breaking into Tech",
        description: "How I started coding and what truly helped me grow.",
        header: <Skeleton />,
        icon: <IconWriting className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Product Thinking",
        description: "Why thinking like a product engineer changes everything.",
        header: <Skeleton />,
        icon: <IconBulb className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Deep Work & Focus",
        description: "Systems, habits and routines that actually work.",
        header: <Skeleton />,
        icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "APIs & Architectures",
        description: "Notes on building scalable and maintainable systems.",
        header: <Skeleton />,
        icon: <IconTerminal2 className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Life as a Developer",
        description: "Mindset, growth, failures and wins.",
        header: <Skeleton />,
        icon: <IconNotebook className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Shipping Fast",
        description: "Lessons from building & deploying real world products.",
        header: <Skeleton />,
        icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Articles & Guides",
        description: "Practical tutorials and guides I write.",
        header: <Skeleton />,
        icon: <IconArticle className="h-4 w-4 text-neutral-500" />,
    },
];
