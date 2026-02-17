"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Code2, GraduationCap, Star } from "lucide-react";
import { achievements } from "@/data/achievements";

const iconMap = {
  trophy: Trophy,
  code: Code2,
  academic: GraduationCap,
  star: Star,
};

const iconColorMap = {
  trophy: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  code: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  academic: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  star: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/20",
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      className="py-28 relative"
      aria-labelledby="achievements-heading"
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
              06 / Recognition
            </p>
            <h2
              id="achievements-heading"
              className="text-4xl sm:text-5xl font-display text-[#F1F5F9] mb-4"
            >
              Milestones &
              <br />
              <em className="italic text-[#94A3B8]">Recognition</em>
            </h2>
          </div>

          {/* Achievement grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {achievements.map((achievement, i) => {
              const Icon = iconMap[achievement.icon];
              const colorClass = iconColorMap[achievement.icon];

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative rounded-xl bg-[#080C14] border border-[#1E293B] p-6 hover:border-[#334155] transition-all duration-300 overflow-hidden"
                  role="article"
                  aria-label={achievement.title}
                >
                  {/* Background glow on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    {/* Icon + metric row */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg border flex items-center justify-center ${colorClass}`}
                        aria-hidden="true"
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </div>

                      {achievement.metric && (
                        <span className="text-xs font-mono text-[#475569] bg-[#111827] border border-[#1E293B] px-2.5 py-1 rounded-full">
                          {achievement.metric}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-[#F1F5F9] font-semibold text-base mb-1 leading-snug">
                      {achievement.title}
                    </h3>
                    <p className="text-xs font-mono text-[#475569] mb-3">
                      {achievement.org} · {achievement.year}
                    </p>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
