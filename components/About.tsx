"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Database, GitBranch, BarChart2, Layers } from "lucide-react";

const skillCategories = [
  {
    label: "LLM & NLP",
    icon: Brain,
    skills: ["GPT-4 / Claude / Gemini", "LangChain", "Prompt Engineering", "RLHF", "RAG Systems", "HuggingFace"],
  },
  {
    label: "ML / Deep Learning",
    icon: Cpu,
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Computer Vision", "YOLOv8", "CNN / LSTM"],
  },
  {
    label: "Data & Infra",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "Apache Airflow", "Docker", "FastAPI", "Pandas / NumPy"],
  },
  {
    label: "Research Methods",
    icon: BarChart2,
    skills: ["Statistical Analysis", "Benchmarking", "Ablation Studies", "Annotation", "Metric Design", "Reproducibility"],
  },
  {
    label: "Engineering",
    icon: GitBranch,
    skills: ["Python", "TypeScript", "Git / GitHub", "REST APIs", "System Design", "Linux"],
  },
  {
    label: "ML Ops",
    icon: Layers,
    skills: ["MLflow", "Weights & Biases", "CI/CD", "Model Registry", "A/B Testing", "Monitoring"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-28 relative"
      aria-labelledby="about-heading"
      ref={ref}
    >
      {/* Section glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-3">
              01 / About
            </p>
            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl font-display text-[#F1F5F9] mb-6"
            >
              Engineering Depth
              <br />
              <em className="italic text-[#94A3B8]">with Research Rigor</em>
            </h2>
            <div className="max-w-2xl space-y-4">
              <p className="text-[#94A3B8] leading-relaxed">
                I'm a M.Tech researcher at NIT Uttarakhand specializing in AI systems
                analysis and large language model evaluation. My work sits at the
                intersection of empirical ML research and production-grade engineering.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                My research investigates how prompting strategy, reasoning scaffold design,
                and evaluation methodology choices systematically affect model behavior —
                using structured benchmarks, statistical testing, and documentation-first
                workflows to produce reproducible findings.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                Beyond research, I build end-to-end ML systems: from computer vision
                pipelines deployed on edge hardware to supply chain risk analyzers
                processing tens of thousands of daily records.
              </p>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-mono text-[#475569] tracking-widest uppercase mb-6">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map(({ label, icon: Icon, skills }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="group relative p-5 rounded-lg bg-[#0D1321] border border-[#1E293B] hover:border-[#334155] transition-all duration-300"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00E5FF]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-md bg-[#111827] border border-[#1E293B] flex items-center justify-center">
                        <Icon size={15} className="text-[#00E5FF]" strokeWidth={1.5} />
                      </div>
                      <span className="text-[#F1F5F9] text-sm font-medium">{label}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {skills.map((skill) => (
                        <li
                          key={skill}
                          className="text-xs text-[#475569] group-hover:text-[#64748B] transition-colors flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#1E293B] group-hover:bg-[#00E5FF]/30 transition-colors flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
