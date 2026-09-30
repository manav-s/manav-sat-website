import { FadeIn } from "@/components/animations";

const DOTS = 20;
const HOT = new Set([3, 11, 16]);

function DiagnoseVisual() {
  return (
    <div className="flex flex-wrap gap-2">
      {[
        ["Content gap", "bg-navy text-cream"],
        ["Pacing issue", "bg-[#f1e7d2] text-gold"],
        ["Trap answer", "border border-crimson/30 text-crimson"],
      ].map(([label, tone]) => (
        <span key={label} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${tone}`}>
          {label}
        </span>
      ))}
    </div>
  );
}

function TargetVisual() {
  return (
    <div>
      <div className="grid grid-cols-10 gap-1.5">
        {Array.from({ length: DOTS }).map((_, i) => (
          <span
            key={i}
            className={`aspect-square rounded-[4px] ${HOT.has(i) ? "bg-gold-soft" : "bg-line"}`}
          />
        ))}
      </div>
      <p className="mt-3 text-xs text-soft">20 topics · 3 patterns worth the time</p>
    </div>
  );
}

function RehearseVisual() {
  return (
    <div className="space-y-2">
      {[
        ["Timed modules", "w-[55%]"],
        ["Full practice tests", "w-[80%]"],
        ["Test-day plan", "w-full"],
      ].map(([label, width]) => (
        <div key={label} className="flex items-center gap-3">
          <span className="w-32 shrink-0 text-xs text-muted">{label}</span>
          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
            <span className={`block h-full rounded-full bg-navy ${width}`} />
          </span>
        </div>
      ))}
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

export function PrecisionFramework() {
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

        <div className="relative mt-16">
          {/* connector */}
          <div
            aria-hidden
            className="absolute top-[3.1rem] right-[16%] left-[16%] hidden h-px bg-linear-to-r from-line-strong via-gold-soft to-line-strong md:block"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {PHASES.map(({ num, name, body, outcome, Visual }, i) => (
              <FadeIn
                key={num}
                delay={i * 0.08}
                className="relative flex flex-col rounded-2xl border border-line bg-sheet p-7 shadow-[0_30px_80px_-50px_rgba(60,45,15,0.35)] md:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="nums relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft/60 bg-cream font-serif text-lg font-medium text-gold">
                    {num}
                  </span>
                  <h3 className="font-serif text-4xl font-normal text-ink italic">{name}.</h3>
                </div>
                <p className="mt-6 text-[15px] leading-relaxed text-muted">{body}</p>
                <div className="mt-7 rounded-xl border border-line bg-cream p-4">
                  <Visual />
                </div>
                <div className="mt-auto pt-7">
                  <div className="flex items-center gap-2.5 border-t border-line pt-5 text-sm font-medium text-navy">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-soft" />
                    {outcome}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
