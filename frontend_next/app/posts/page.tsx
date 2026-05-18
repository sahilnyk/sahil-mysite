import type { Metadata } from "next";
import { PostsList } from "./posts-list";

export const metadata: Metadata = {
  title: "posts",
  description:
    "thoughts, learnings, and random dev rants by sahilnyk. mostly about building stuff and figuring things out.",
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://mysite-qz44.onrender.com";

async function getBlogs() {
  try {
    const res = await fetch(`${API_URL}/blogs/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function PostsPage() {
  const blogs = await getBlogs();

  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-normal mb-4">posts</h1>
        <p className="text-white/40 max-w-lg">
          things i&apos;ve learned, thoughts i&apos;ve had, and stuff i felt like writing down.
          mostly dev stuff. sometimes life stuff.
        </p>
      </div>

      <PostsList blogs={blogs} />
    </div>
  );
}
