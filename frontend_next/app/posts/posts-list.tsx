"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  desc: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

export function PostsList({ blogs }: { blogs: Blog[] }) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="border border-white/5 p-12 text-center">
        <p className="text-white/40 italic">
          no posts yet. i&apos;m probably writing one right now though.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {blogs.map((blog, i) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <Link
            href={`/posts/${blog.slug}`}
            className="block py-8 border-t border-white/5 group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h2 className="text-lg text-white group-hover:italic transition-all">
                  {blog.title}
                </h2>
                <p className="text-white/30 text-sm mt-1">{blog.category}</p>
              </div>
              <time className="text-white/20 text-sm shrink-0">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
