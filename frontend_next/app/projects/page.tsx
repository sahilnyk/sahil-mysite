import type { Metadata } from "next";
import { ProjectsList } from "./projects-list";

export const metadata: Metadata = {
  title: "projects",
  description:
    "things i've built — from saas tools to open source. real projects, real users, real impact.",
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://mysite-qz44.onrender.com";

async function getProjects() {
  try {
    const res = await fetch(`${API_URL}/projects/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-normal mb-4">projects</h1>
        <p className="text-white/40 max-w-lg">
          stuff i&apos;ve actually built and shipped. not tutorials, not todo apps —
          real things that solve real problems.
        </p>
      </div>

      <ProjectsList projects={projects} />
    </div>
  );
}
