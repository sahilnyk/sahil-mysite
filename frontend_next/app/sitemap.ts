import type { MetadataRoute } from "next";

const BASE_URL = "https://sahilnyk.vercel.app";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://mysite-qz44.onrender.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/posts`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/hire-me`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${API_URL}/blogs/`);
    if (res.ok) {
      const blogs = await res.json();
      blogPages = blogs.map((blog: { slug: string; date: string }) => ({
        url: `${BASE_URL}/posts/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
    }
  } catch {}

  return [...staticPages, ...blogPages];
}
