"use client";

import { motion } from "framer-motion";
import { Calendar, Target, TrendingUp, type LucideIcon } from "lucide-react";

type Step = {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    icon: Calendar,
    title: "Initial Consultation",
    body: "A free intro class to assess your goals, current level, and answer any questions.",
  },
  {
    num: "02",
    icon: Target,
    title: "Plan of Attack",
    body: "Custom classes, AI-assisted grading, and targeted homework rebuilt around every review.",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Climb the Ladder",
    body: "Walk into the exam room with total confidence — get your score and apply to your dream school.",
  },
];

export function PathToSixteenHundred() {
  return (
    <section className="relative overflow-hidden bg-[#00356B] py-16 text-white md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.06), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300 backdrop-blur">
            The Path
          </div>
          <h2 className="font-serif text-4xl font-normal tracking-tight md:text-6xl">
            Your path to <span className="italic text-white/90">1600</span>.
          </h2>
        </motion.div>

        <div className="relative">
          <svg
            aria-hidden
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="absolute left-0 top-12 hidden h-24 w-full md:block"
          >
            <defs>
              <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a3a3a3" stopOpacity="0" />
                <stop offset="20%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="80%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a3a3a3" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 80 50 Q 333 10 500 50 T 920 50"
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </svg>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.25, delayChildren: 0.3 }}
            className="relative grid gap-16 md:grid-cols-3 md:gap-12"
          >
            {STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.num}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="group relative z-10 flex flex-col items-center text-center"
                >
                  <div className="relative mb-8">
                    <div
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-white/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(255,255,255,0.0)",
                          "0 0 0 8px rgba(255,255,255,0.05)",
                          "0 0 0 0 rgba(255,255,255,0.0)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-[#124575] text-white/70 transition-all duration-500 group-hover:scale-110 group-hover:border-white group-hover:bg-white group-hover:text-neutral-900"
                    >
                      <Icon className="h-9 w-9 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                    </motion.div>
                    <div className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#00356B] font-mono text-xs font-bold text-white shadow-lg">
                      {step.num}
                    </div>
                  </div>

                  <h3 className="mb-3 font-serif text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mx-auto max-w-xs text-base leading-relaxed text-white/70">
                    {step.body}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
