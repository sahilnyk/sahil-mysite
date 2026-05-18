import type { Metadata } from "next";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://mysite-qz44.onrender.com";

async function getBlog(slug: string) {
  try {
    const res = await fetch(`${API_URL}/blogs/${slug}/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return { title: "post not found" };
  return {
    title: blog.title,
    description: blog.desc?.replace(/<[^>]+>/g, "").slice(0, 160),
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div className="pt-24 pb-20 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-3xl mb-4">404 — post not found</h1>
        <p className="text-white/40 mb-8">
          this post doesn&apos;t exist or got yeeted into the void.
        </p>
        <Link href="/posts" className="text-white/60 hover:text-white">
          ← back to posts
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-24 pb-20 max-w-3xl mx-auto px-6">
      <Link href="/posts" className="text-white/40 text-sm hover:text-white mb-8 inline-block">
        ← back to posts
      </Link>
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-normal mb-4">{blog.title}</h1>
        <div className="flex gap-4 text-sm text-white/30">
          <span>{blog.category}</span>
          <span>•</span>
          <time>
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{blog.author}</span>
        </div>
      </header>
      <div
        className="prose prose-invert prose-lg max-w-none [&_p]:text-white/70 [&_p]:leading-relaxed [&_h2]:text-white [&_h3]:text-white [&_a]:text-white [&_a]:underline"
        dangerouslySetInnerHTML={{ __html: blog.desc }}
      />
    </article>
  );
}
