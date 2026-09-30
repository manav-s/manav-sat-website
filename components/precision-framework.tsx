"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations";

const EASE = [0.16, 1, 0.3, 1] as const;
const LINE_START = 0.35; // s: when the spark leaves step 01
const LINE_DURATION = 1.6; // s: spark travel from 01 to 03
const stepAt = (i: number) => LINE_START + (i * LINE_DURATION) / 2;

// Desktop plays one choreographed sequence; mobile plays each card as it scrolls in.
const DESKTOP = "(min-width: 768px)";
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(DESKTOP);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};
const useIsDesktop = () =>
  useSyncExternalStore(subscribe, () => window.matchMedia(DESKTOP).matches, () => true);

type VisualProps = { on: boolean; at: number };

// ── 01 · Six misses sorted into their real cause ─────────────────────
const CAUSES = [
  { label: "Content gap", pill: "bg-navy text-cream", square: "bg-navy", count: 3 },
  { label: "Pacing issue", pill: "bg-[#f1e7d2] text-gold", square: "bg-gold-soft", count: 2 },
  { label: "Trap answer", pill: "border border-crimson/30 text-crimson", square: "bg-crimson/80", count: 1 },
];
// Order the questions land in, as [row, slot]: interleaved so it reads as sorting.
const SORT_ORDER: [number, number][] = [[0, 0], [1, 0], [0, 1], [2, 0], [0, 2], [1, 1]];

function DiagnoseVisual({ on, at }: VisualProps) {
  return (
    <div className="space-y-2.5">
      {CAUSES.map((cause, row) => (
        <motion.div
          key={cause.label}
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -8 }}
          animate={on ? { opacity: 1, x: 0 } : undefined}
          transition={{ delay: at + row * 0.1, duration: 0.5, ease: EASE }}
        >
          <span className={`w-[6.4rem] shrink-0 rounded-full px-3 py-1 text-center text-xs font-semibold ${cause.pill}`}>
            {cause.label}
          </span>
          <span className="flex gap-1.5">
            {Array.from({ length: cause.count }).map((_, slot) => {
              const k = SORT_ORDER.findIndex(([r, s]) => r === row && s === slot);
              return (
                <motion.span
                  key={slot}
                  className={`h-3.5 w-3.5 rounded-[4px] ${cause.square}`}
                  initial={{ opacity: 0, scale: 0.2, y: -12 }}
                  animate={on ? { opacity: 1, scale: 1, y: 0 } : undefined}
                  transition={{ delay: at + 0.45 + k * 0.13, type: "spring", stiffness: 520, damping: 22 }}
                />
              );
            })}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ── 02 · Twenty topics narrow to three patterns ──────────────────────
const TOPICS = 20;
const HOT = new Set([3, 11, 16]);
const IDLE = "#e4d8c1";
const GOLD = "#c9ab6f";

function TargetVisual({ on, at }: VisualProps) {
  const narrow = at + 0.8; // when the grid collapses to the three patterns
  return (
    <div>
      <div className="grid grid-cols-10 gap-1.5">
        {Array.from({ length: TOPICS }).map((_, i) => {
          const hot = HOT.has(i);
          const appear = at + i * 0.025;
          return (
            <motion.span
              key={i}
              className="aspect-square rounded-[4px]"
              initial={{ opacity: 0, scale: 0.4, backgroundColor: IDLE }}
              animate={
                on
                  ? {
                      opacity: hot ? [0, 1, 1] : [0, 1, 1, 0.4],
                      scale: hot ? [0.4, 1, 1, 1.22, 1] : [0.4, 1, 1, 0.88],
                      backgroundColor: hot ? [IDLE, IDLE, IDLE, GOLD, GOLD] : IDLE,
                    }
                  : undefined
              }
              transition={{
                delay: appear,
                duration: narrow - appear + 0.6,
                times: hot ? [0, 0.3, 0.72, 0.86, 1] : [0, 0.3, 0.72, 1],
                ease: "easeOut",
              }}
              style={hot && on ? { boxShadow: "0 0 0 3px rgba(201,171,111,0.22)" } : undefined}
            />
          );
        })}
      </div>
      <p className="mt-3 text-xs text-soft">
        20 topics ·{" "}
        <motion.span
          className="font-semibold text-gold"
          initial={{ opacity: 0 }}
          animate={on ? { opacity: 1 } : undefined}
          transition={{ delay: narrow + 0.45, duration: 0.5 }}
        >
          3 patterns worth the time
        </motion.span>
      </p>
    </div>
  );
}

// ── 03 · Practice builds until test day is ready ─────────────────────
const DRILLS = [
  { label: "Timed modules", width: 0.55 },
  { label: "Full practice tests", width: 0.8 },
  { label: "Test-day plan", width: 1 },
];

function RehearseVisual({ on, at }: VisualProps) {
  const done = at + 0.3 * (DRILLS.length - 1) + 0.9;
  return (
    <div className="space-y-2.5">
      {DRILLS.map((drill, i) => {
        const last = i === DRILLS.length - 1;
        return (
          <div key={drill.label} className="flex items-center gap-3">
            <span className="w-32 shrink-0 text-xs text-muted">{drill.label}</span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
              <motion.span
                className="block h-full origin-left rounded-full bg-navy"
                style={{ width: `${drill.width * 100}%` }}
                initial={{ scaleX: 0 }}
                animate={on ? { scaleX: 1 } : undefined}
                transition={{ delay: at + i * 0.3, duration: 0.9, ease: EASE }}
              />
            </span>
            <motion.span
              aria-hidden={!last}
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-navy text-cream ${last ? "" : "invisible"}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={on && last ? { opacity: 1, scale: 1 } : undefined}
              transition={{ delay: done, type: "spring", stiffness: 500, damping: 18 }}
            >
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
            </motion.span>
          </div>
        );
      })}
    </div>
  );
}

const PHASES = [
  {
    num: "01",
    name: "Diagnose",
    body: "It starts with an audit. Every missed question is sorted by its real cause, not just “math” or “reading.”",
    outcome: "Every miss, sorted by real cause",
    Visual: DiagnoseVisual,
  },
  {
    num: "02",
    name: "Target",
    body: "Most students don’t need 20 concepts. They have two or three patterns costing them points, and that is where every lesson goes.",
    outcome: "A plan rebuilt after every review",
    Visual: TargetVisual,
  },
  {
    num: "03",
    name: "Rehearse",
    body: "Fixes are practiced under real timing until they hold, so your student walks into the SAT with a plan instead of hoping.",
    outcome: "An actual plan for test day",
    Visual: RehearseVisual,
  },
];

function PhaseCard({
  phase,
  index,
  sectionOn,
  isDesktop,
  reduce,
}: {
  phase: (typeof PHASES)[number];
  index: number;
  sectionOn: boolean;
  isDesktop: boolean;
  reduce: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const selfOn = useInView(ref, { once: true, amount: 0.4 });
  const on = reduce || (isDesktop ? sectionOn : selfOn);
  const at = reduce ? 0 : isDesktop ? stepAt(index) : 0.25;
  const { num, name, body, outcome, Visual } = phase;

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 40, rotateX: 16 }}
      animate={on ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
      transition={{ delay: isDesktop ? index * 0.09 : 0, duration: 0.9, ease: EASE }}
      style={{ transformPerspective: 1100, transformOrigin: "50% 100%" }}
    >
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-sheet p-7 shadow-[0_30px_80px_-50px_rgba(60,45,15,0.35)] transition-shadow duration-500 hover:shadow-[0_40px_90px_-40px_rgba(60,45,15,0.45)] md:p-8"
      >
        <div className="flex items-center gap-4">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center">
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full bg-gold-soft"
              initial={{ opacity: 0, scale: 1 }}
              animate={on && !reduce ? { opacity: [0, 0.5, 0], scale: [1, 1, 2] } : undefined}
              transition={{ delay: at, duration: 0.9, ease: "easeOut" }}
            />
            <motion.span
              className="nums relative flex h-12 w-12 items-center justify-center rounded-full border font-serif text-lg font-medium"
              initial={{ backgroundColor: "#fbf8f1", color: "#8c733f", borderColor: "rgba(201,171,111,0.6)" }}
              animate={
                on
                  ? { backgroundColor: "#00356b", color: "#fbf8f1", borderColor: "#00356b", scale: reduce ? 1 : [1, 1.14, 1] }
                  : undefined
              }
              transition={{ delay: at, duration: 0.55, ease: EASE }}
            >
              {num}
            </motion.span>
          </span>
          <h3 className="font-serif text-4xl font-normal text-ink italic">{name}.</h3>
        </div>
        <p className="mt-6 text-[15px] leading-relaxed text-muted">{body}</p>
        <div className="mt-7 rounded-xl border border-line bg-cream p-4">
          <Visual on={on} at={at} />
        </div>
        <motion.div
          className="mt-auto pt-7"
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={on ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: at + 1.6, duration: 0.6, ease: EASE }}
        >
          <div className="flex items-center gap-2.5 border-t border-line pt-5 text-sm font-medium text-navy">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-soft" />
            {outcome}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PrecisionFramework() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionOn = useInView(sectionRef, { once: true, amount: 0.35 });
  const reduce = useReducedMotion() ?? false;
  const isDesktop = useIsDesktop();
  const lineOn = reduce || sectionOn;

  return (
    <section id="framework" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">The method</p>
          <h2 className="mt-5 font-serif text-[2.75rem] leading-[1] font-normal tracking-[-0.02em] text-ink md:text-6xl">
            The SAT Precision <span className="text-navy italic">Framework.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The same way of thinking that took me to a perfect 1600, broken
            into three steps your student learns to run on their own.
          </p>
        </FadeIn>

        <div ref={sectionRef} className="relative mt-16">
          {/* Connector runs numeral to numeral behind the cards, so it shows in the gaps. */}
          <div
            aria-hidden
            className="absolute top-14 left-14 hidden h-px md:block"
            style={{ right: "calc((100% - 3rem) / 3 - 3.5rem)" }}
          >
            <motion.div
              className="h-full origin-left bg-linear-to-r from-gold-soft via-gold to-gold-soft"
              initial={reduce ? false : { scaleX: 0 }}
              animate={lineOn ? { scaleX: 1 } : undefined}
              transition={{ delay: LINE_START, duration: LINE_DURATION, ease: [0.45, 0, 0.55, 1] }}
            />
            {!reduce && (
              <motion.span
                className="absolute top-1/2 -mt-[5px] -ml-[5px] h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_14px_4px_rgba(201,171,111,0.7)]"
                initial={{ left: "0%", opacity: 0 }}
                animate={lineOn ? { left: ["0%", "100%"], opacity: [0, 1, 1, 0] } : undefined}
                transition={{
                  left: { delay: LINE_START, duration: LINE_DURATION, ease: [0.45, 0, 0.55, 1] },
                  opacity: { delay: LINE_START, duration: LINE_DURATION + 0.3, times: [0, 0.08, 0.9, 1] },
                }}
              />
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PHASES.map((phase, i) => (
              <PhaseCard
                key={phase.num}
                phase={phase}
                index={i}
                sectionOn={sectionOn}
                isDesktop={isDesktop}
                reduce={reduce}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
