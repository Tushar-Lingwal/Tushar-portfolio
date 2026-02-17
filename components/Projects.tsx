"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryConfig = {
  research: { label: "Research", color: "text-violet-400 bg-violet-400/10 border-violet-400/20" },
  systems: { label: "Systems", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  applied: { label: "Applied", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  inView: boolean;
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const cat = categoryConfig[project.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col rounded-xl border transition-all duration-300 overflow-hidden",
        hovered
          ? "border-[#1E3A5F] bg-[#0D1321]"
          : "border-[#1E293B] bg-[#080C14]"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-px transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: "linear-gradient(90deg, transparent, #00E5FF, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-mono text-[#00E5FF]/70 bg-[#00E5FF]/5 border border-[#00E5FF]/15 px-2 py-0.5 rounded-full uppercase tracking-widest">
            Featured
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        {/* Category */}
        <div className="mb-4">
          <span
            className={cn(
              "text-xs font-mono px-2 py-0.5 rounded border",
              cat.color
            )}
          >
            {cat.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[#F1F5F9] font-semibold text-lg leading-snug mb-3 group-hover:text-[#00E5FF] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#64748B] text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-[#475569] bg-[#111827] border border-[#1E293B] px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#1E293B]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="flex items-center gap-1.5 text-sm text-[#475569] hover:text-[#F1F5F9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded px-1"
            >
              <Github size={15} strokeWidth={1.5} />
              <span className="font-mono text-xs">Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center gap-1.5 text-sm text-[#475569] hover:text-[#00E5FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded px-1 ml-auto"
            >
              <span className="font-mono text-xs">Demo</span>
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="py-28 relative"
      aria-labelledby="projects-heading"
      ref={ref}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-3">
              03 / Projects
            </p>
            <h2
              id="projects-heading"
              className="text-4xl sm:text-5xl font-display text-[#F1F5F9] mb-4"
            >
              Systems Built,
              <br />
              <em className="italic text-[#94A3B8]">Problems Solved</em>
            </h2>
            <p className="text-[#94A3B8] max-w-xl leading-relaxed">
              From edge-deployed computer vision to LLM evaluation infrastructure —
              engineering projects grounded in research methodology.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
              />
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/tusharlingwal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#94A3B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded px-2 py-1"
            >
              <Github size={15} strokeWidth={1.5} />
              View all repositories on GitHub
              <ExternalLink size={13} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
