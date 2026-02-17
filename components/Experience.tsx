"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

const typeConfig = {
  internship: {
    icon: Briefcase,
    badge: "Internship",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
  research: {
    icon: GraduationCap,
    badge: "Research",
    badgeColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
  academic: {
    icon: GraduationCap,
    badge: "Academic",
    badgeColor: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/20",
  },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-28 relative bg-[#0D1321]/30"
      aria-labelledby="experience-heading"
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
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-3">
              05 / Experience
            </p>
            <h2
              id="experience-heading"
              className="text-4xl sm:text-5xl font-display text-[#F1F5F9] mb-4"
            >
              Where I've
              <br />
              <em className="italic text-[#94A3B8]">Applied My Work</em>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#1E3A5F] via-[#1E293B] to-transparent hidden sm:block"
              aria-hidden="true"
            />

            <ol className="space-y-12" aria-label="Work experience timeline">
              {experiences.map((exp, i) => {
                const config = typeConfig[exp.type];
                const Icon = config.icon;

                return (
                  <motion.li
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative timeline-item sm:pl-16"
                  >
                    {/* Timeline dot */}
                    <div
                      className="hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-full bg-[#0D1321] border-2 border-[#1E3A5F] items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon size={16} className="text-[#00E5FF]" strokeWidth={1.5} />
                    </div>

                    {/* Card */}
                    <div className="rounded-xl bg-[#080C14] border border-[#1E293B] p-6 hover:border-[#334155] transition-colors duration-300">
                      {/* Header row */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <h3 className="text-[#F1F5F9] font-semibold text-lg">
                              {exp.role}
                            </h3>
                            <span
                              className={cn(
                                "text-xs font-mono px-2 py-0.5 rounded border",
                                config.badgeColor
                              )}
                            >
                              {config.badge}
                            </span>
                          </div>
                          <p className="text-[#94A3B8] font-medium">{exp.org}</p>
                        </div>

                        <div className="flex flex-col items-end gap-1 text-xs font-mono text-[#475569]">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={11} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={11} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2.5" aria-label="Role highlights">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm text-[#64748B] leading-relaxed"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2"
                              aria-hidden="true"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
