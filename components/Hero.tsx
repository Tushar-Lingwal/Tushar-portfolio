"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download, FlaskConical } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tusharlingwal",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tusharlingwal",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:tushar@example.com",
    icon: Mail,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background: grid + radial glow */}
      <div
        className="absolute inset-0 bg-grid opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,229,255,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Tag line */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00E5FF]/8 border border-[#00E5FF]/20 text-[#00E5FF] text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              Open to Research Collaborations
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-normal text-[#F1F5F9] leading-[1.05] mb-4"
          >
            Tushar Lingwal
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-xl sm:text-2xl font-light text-[#94A3B8] mb-1">
              AI/ML Engineer
              <span className="text-[#1E3A5F] mx-3">·</span>
              <span className="gradient-text font-medium">LLM Researcher</span>
            </p>
            <p className="font-mono text-sm text-[#475569] tracking-wide">
              M.Tech in AI & ML · NIT Uttarakhand
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mb-10 text-balance"
          >
            Building rigorous evaluation frameworks for large language models.
            Researching the boundaries of reasoning, prompting strategy, and
            model calibration — with documentation-first, reproducible methodology.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded bg-[#00E5FF] text-[#080C14] text-sm font-semibold hover:bg-[#00E5FF]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C14]"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="px-6 py-3 rounded border border-[#1E293B] text-[#94A3B8] text-sm font-medium hover:border-[#334155] hover:text-[#F1F5F9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C14] inline-flex items-center gap-2"
            >
              <FlaskConical size={15} />
              Research Work
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded border border-[#1E293B] text-[#94A3B8] text-sm font-medium hover:border-[#334155] hover:text-[#F1F5F9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C14] inline-flex items-center gap-2"
            >
              <Download size={15} />
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="text-[#475569] hover:text-[#00E5FF] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded p-1"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
            <span className="w-px h-5 bg-[#1E293B] mx-1" aria-hidden="true" />
            <span className="text-xs font-mono text-[#475569] tracking-widest">
              tushar@nit.ac.in
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[#475569]" />
        </motion.div>
        <span className="text-[10px] font-mono text-[#334155] tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
