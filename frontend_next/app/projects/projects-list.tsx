"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  desc: string;
  date: string;
  links: string;
  techstack: string;
  slug: string;
}

export function ProjectsList({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="border border-white/5 p-12 text-center">
        <p className="text-white/40 italic">
          projects loading from the backend... or i&apos;m deploying something new rn.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="border border-white/5 p-8 hover:border-white/20 transition-all group"
        >
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl text-white group-hover:italic transition-all">
              {project.title}
            </h2>
            {project.links && (
              <Link
                href={project.links}
                target="_blank"
                rel="noopener"
                className="text-white/30 text-sm hover:text-white shrink-0"
              >
                ↗
              </Link>
            )}
          </div>
          <div
            className="text-white/40 text-sm mb-6 leading-relaxed line-clamp-3 [&_p]:mb-0"
            dangerouslySetInnerHTML={{
              __html: project.desc?.replace(/<[^>]+>/g, "").slice(0, 200),
            }}
          />
          <div className="flex flex-wrap gap-2">
            {project.techstack?.split(",").map((tech) => (
              <span
                key={tech}
                className="text-xs text-white/20 border border-white/5 px-2 py-1"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
          <time className="text-white/15 text-xs mt-4 block">
            {new Date(project.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </time>
        </motion.div>
      ))}
    </div>
  );
}
