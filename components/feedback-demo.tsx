"use client";

import { useEffect, useRef, useState } from "react";

type Row = { skill: string; count: number; priority: "Priority" | "Reinforce" | "Maintain" };
type Review = {
  accuracy: number;
  accuracyNote: string;
  pace: number; // seconds per question
  paceNote: string;
  patterns: number;
  patternsNote: string;
  rows: Row[];
  note: string;
};

// Illustrative sequence: one student's reviews improving week over week.
const REVIEWS: Review[] = [
  {
    accuracy: 84,
    accuracyNote: "+7% this week",
    pace: 102,
    paceNote: "On target",
    patterns: 3,
    patternsNote: "2 high priority",
    rows: [
      { skill: "Transitions & logical flow", count: 12, priority: "Priority" },
      { skill: "Advanced algebra", count: 10, priority: "Reinforce" },
      { skill: "Timed mixed review", count: 8, priority: "Maintain" },
    ],
    note: "The next set prioritizes the two patterns costing the most points while keeping stronger skills fresh.",
  },
  {
    accuracy: 88,
    accuracyNote: "+4% this week",
    pace: 95,
    paceNote: "Ahead of target",
    patterns: 2,
    patternsNote: "1 high priority",
    rows: [
      { skill: "Inference questions", count: 12, priority: "Priority" },
      { skill: "Systems of equations", count: 10, priority: "Reinforce" },
      { skill: "Transitions & logical flow", count: 8, priority: "Maintain" },
    ],
    note: "Transitions are now automatic. Inference is the next pattern to close, so it leads this set.",
  },
  {
    accuracy: 91,
    accuracyNote: "+3% this week",
    pace: 91,
    paceNote: "On target",
    patterns: 2,
    patternsNote: "1 high priority",
    rows: [
      { skill: "Rhetorical synthesis", count: 10, priority: "Priority" },
      { skill: "Circles & angles", count: 10, priority: "Reinforce" },
      { skill: "Full timed module", count: 10, priority: "Maintain" },
    ],
    note: "Accuracy is holding under time. Adding a full module to rehearse test-day pacing.",
  },
];

// Timeline of one review, in ms.
const T_METRICS = 900;
const T_BUILD = 2100;
const T_ROW_GAP = 380;
const T_REVIEWED = 3500;
const T_TYPE = 1700;
const T_OUT = 8800;
const CYCLE = 9300;
// First time on screen, open on a finished review instead of a blank one.
const START_AT = T_REVIEWED + T_TYPE + 200;

const TONES: Record<Row["priority"], string> = {
  Priority: "bg-navy text-cream",
  Reinforce: "bg-[#f1e7d2] text-gold",
  Maintain: "bg-cream text-soft",
};

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const easeOut = (x: number) => 1 - Math.pow(1 - clamp01(x), 3);
const pace = (s: number) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;

export function FeedbackDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [clock, setClock] = useState({ index: 0, t: START_AT });

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let last = 0;
    let visible = false;
    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 100) : 0;
      last = now;
      setClock((c) => {
        const t = c.t + dt;
        return t >= CYCLE ? { index: (c.index + 1) % REVIEWS.length, t: t - CYCLE } : { index: c.index, t };
      });
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          visible = true;
          last = 0;
          frame = requestAnimationFrame(tick);
        } else if (!entry.isIntersecting && visible) {
          visible = false;
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const { index, t } = clock;
  const review = REVIEWS[index];
  const prev = REVIEWS[(index + REVIEWS.length - 1) % REVIEWS.length];

  const m = easeOut((t - T_METRICS) / 1000);
  const graded = t >= T_METRICS;
  const status = t < T_BUILD ? "grading" : t < T_REVIEWED ? "building" : "reviewed";
  const typed = Math.floor(review.note.length * clamp01((t - T_REVIEWED - 100) / T_TYPE));
  const fadeOut = 1 - clamp01((t - T_OUT) / 400);
  const fadeIn = clamp01(t / 300);
  const content = Math.min(fadeIn, fadeOut);
  const total = review.rows.reduce((n, r) => n + r.count, 0);

  const metrics = [
    {
      label: "Accuracy",
      value: `${Math.round(prev.accuracy + (review.accuracy - prev.accuracy) * m)}%`,
      note: review.accuracyNote,
    },
    { label: "Avg. pace", value: pace(prev.pace + (review.pace - prev.pace) * m), note: review.paceNote },
    { label: "Patterns found", value: String(Math.round(review.patterns * m)), note: review.patternsNote },
  ];

  return (
    <div ref={ref}>
      <div className="rounded-3xl border border-line bg-paper p-3 shadow-[0_50px_100px_-50px_rgba(60,45,15,0.45)]">
        <div className="overflow-hidden rounded-[18px] border border-line bg-sheet">
          <div className="relative flex items-center justify-between border-b border-line px-6 py-5 md:px-7">
            <div>
              <p className="nums text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">
                Practice review {String(6 + index).padStart(2, "0")}
              </p>
              <p className="mt-1 font-serif text-2xl font-medium text-ink">Student feedback</p>
            </div>
            {status === "reviewed" ? (
              <div className="flex items-center gap-2 rounded-full bg-[#edf4ef] px-3 py-1.5 text-xs font-semibold text-[#295b38]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3c8a55]" />
                Reviewed
              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-full bg-[#f6efe0] px-3 py-1.5 text-xs font-semibold text-gold">
                <span className="h-3 w-3 animate-spin rounded-full border-[1.5px] border-gold/25 border-t-gold" />
                {status === "grading" ? "Grading 30 answers" : "Building next set"}
              </div>
            )}
            <span
              aria-hidden
              className="absolute bottom-[-1px] left-0 h-[2px] bg-gold-soft"
              style={{ width: `${(t / CYCLE) * 100}%` }}
            />
          </div>

          <div className="p-5 md:p-7" style={{ opacity: content }}>
            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-line bg-cream p-4">
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-soft uppercase">{metric.label}</p>
                  {graded ? (
                    <p className="nums mt-2 font-serif text-4xl leading-none text-navy">{metric.value}</p>
                  ) : (
                    <span className="mt-2.5 block h-7 w-16 animate-pulse rounded-md bg-line/70" />
                  )}
                  <p className="mt-2 text-xs text-muted" style={{ opacity: m }}>
                    {metric.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-line">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <p className="text-[12px] font-semibold tracking-[0.1em] text-navy uppercase">Next custom assignment</p>
                <span className="nums text-xs font-medium text-soft" style={{ opacity: status === "grading" ? 0 : 1 }}>
                  {total} questions
                </span>
              </div>
              <div className="divide-y divide-line px-4">
                {review.rows.map((row, i) => {
                  const p = easeOut((t - T_BUILD - i * T_ROW_GAP) / 450);
                  const chip = easeOut((t - T_BUILD - i * T_ROW_GAP - 250) / 300);
                  return (
                    <div key={`${index}-${row.skill}`} className="flex h-[62px] items-center justify-between gap-4">
                      <div style={{ opacity: p, transform: `translateX(${(1 - p) * -10}px)` }}>
                        <p className="text-sm font-semibold text-ink">{row.skill}</p>
                        <p className="mt-0.5 text-xs text-soft">{row.count} questions</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase ${TONES[row.priority]}`}
                        style={{ opacity: chip, transform: `scale(${0.85 + 0.15 * chip})` }}
                      >
                        {row.priority}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex min-h-[76px] items-start gap-3 rounded-xl border-l-2 border-gold-soft bg-cream px-4 py-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-cream">
                MS
              </div>
              <p className="text-xs leading-5 text-muted">
                <span className="font-semibold text-ink">Reviewed by Manav:</span>{" "}
                {status === "reviewed" ? review.note.slice(0, typed) : ""}
                {status === "reviewed" && typed < review.note.length && (
                  <span className="ml-px inline-block h-3 w-px translate-y-0.5 animate-pulse bg-ink" />
                )}
                {status !== "reviewed" && <span className="text-soft italic">waiting for review…</span>}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-soft">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-soft" />
        Illustrative example — runs after every practice set
      </p>
    </div>
  );
}
