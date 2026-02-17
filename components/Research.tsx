"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, FlaskConical, Circle } from "lucide-react";
import { researchItems } from "@/data/research";
import { cn } from "@/lib/utils";

const statusConfig = {
  active: { label: "Active", color: "text-emerald-400", dot: "bg-emerald-400" },
  ongoing: { label: "Ongoing", color: "text-amber-400", dot: "bg-amber-400" },
  complete: { label: "Complete", color: "text-[#00E5FF]", dot: "bg-[#00E5FF]" },
};

export default function Research() {
  const [expanded, setExpanded] = useState<string | null>(researchItems[0].id);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const toggle = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="research"
      className="py-28 relative bg-[#0D1321]/40"
      aria-labelledby="research-heading"
      ref={ref}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-3">
              02 / Research
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2
                  id="research-heading"
                  className="text-4xl sm:text-5xl font-display text-[#F1F5F9] mb-4"
                >
                  Research Threads
                </h2>
                <p className="text-[#94A3B8] max-w-xl leading-relaxed">
                  Active investigations into LLM behavior, evaluation methodology,
                  and reasoning systems — conducted with empirical rigor.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#475569] bg-[#111827] border border-[#1E293B] px-3 py-2 rounded-md whitespace-nowrap">
                <FlaskConical size={12} className="text-[#00E5FF]" />
                M.Tech Research · NIT Uttarakhand
              </div>
            </div>
          </div>

          {/* Research accordion */}
          <div className="space-y-3" role="list">
            {researchItems.map((item, i) => {
              const isOpen = expanded === item.id;
              const status = statusConfig[item.status];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  role="listitem"
                  className={cn(
                    "rounded-xl border transition-all duration-300",
                    isOpen
                      ? "bg-[#0D1321] border-[#1E3A5F]"
                      : "bg-[#080C14] border-[#1E293B] hover:border-[#334155]"
                  )}
                >
                  {/* Accordion trigger */}
                  <button
                    id={`research-trigger-${item.id}`}
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`research-panel-${item.id}`}
                    className="w-full text-left px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-inset rounded-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Status + year */}
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className={cn("flex items-center gap-1.5 text-xs font-mono", status.color)}>
                            <span className={cn("w-1.5 h-1.5 rounded-full", status.dot, item.status === "active" && "animate-pulse")} />
                            {status.label}
                          </span>
                          <span className="text-xs font-mono text-[#475569]">{item.year}</span>
                        </div>
                        <h3 className="text-[#F1F5F9] font-medium text-base sm:text-lg leading-snug mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#475569] text-sm font-mono">{item.subtitle}</p>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 mt-1"
                        aria-hidden="true"
                      >
                        <ChevronDown size={18} className="text-[#475569]" />
                      </motion.div>
                    </div>

                    {/* Tags (always visible) */}
                    <div className="flex flex-wrap gap-2 mt-3" aria-label="Research tags">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-[#111827] border border-[#1E293B] text-[#475569]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>

                  {/* Expandable panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`research-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`research-trigger-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-[#1E293B]">
                            {/* Abstract */}
                            <p className="text-[#94A3B8] leading-relaxed text-sm mb-5">
                              {item.abstract}
                            </p>

                            {/* Detail bullets */}
                            <ul className="space-y-3" aria-label="Research details">
                              {item.details.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-3 text-sm text-[#64748B] leading-relaxed"
                                >
                                  <span
                                    className="w-5 h-5 rounded-full bg-[#111827] border border-[#1E293B] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-mono text-[#00E5FF]"
                                    aria-hidden="true"
                                  >
                                    {idx + 1}
                                  </span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
