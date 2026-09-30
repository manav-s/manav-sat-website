import Image from "next/image";
import { FadeIn } from "@/components/animations";

const STEPS = [
  {
    num: "01",
    title: "Initial consultation",
    body: "A free intro class to assess your goals, current level, and answer any questions.",
  },
  {
    num: "02",
    title: "Plan of attack",
    body: "Custom classes, AI-assisted grading, and targeted homework rebuilt around every review.",
  },
  {
    num: "03",
    title: "Climb the ladder",
    body: "Walk into the exam room with total confidence — get your score and apply to your dream school.",
  },
];

export function PathToSixteenHundred() {
  return (
    <section id="method" className="border-y border-line bg-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div className="self-start lg:sticky lg:top-32">
          <FadeIn>
            <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
              How it works
            </p>
            <h2 className="font-serif text-5xl leading-[0.98] font-normal tracking-[-0.02em] text-ink md:text-7xl">
              Your path to <span className="text-navy italic">1600.</span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
              Every lesson is one-on-one and live. The plan is rebuilt after
              each review, so time goes to what is actually costing points.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <figure className="mt-12">
              <div className="rounded-2xl border border-line bg-sheet p-2 shadow-[0_40px_90px_-50px_rgba(40,30,10,0.45)]">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-cream">
                  <Image
                    src="/class-screenshot.png"
                    alt="Manav teaching SAT math during a live online session"
                    fill
                    sizes="(min-width: 1024px) 520px, calc(100vw - 48px)"
                    className="object-contain"
                  />
                </div>
              </div>
              <figcaption className="mt-4 flex items-center gap-3 text-sm text-soft">
                <span className="h-px w-8 bg-line-strong" />
                A live lesson, working through a problem together.
              </figcaption>
            </figure>
          </FadeIn>
        </div>

        <div className="lg:pt-4">
          {STEPS.map((step, i) => (
            <FadeIn
              key={step.num}
              delay={i * 0.06}
              className="group grid grid-cols-[4.5rem_1fr] gap-6 border-t border-line-strong py-10 last:border-b md:grid-cols-[6rem_1fr] md:py-14"
            >
              <span className="nums font-serif text-5xl leading-none text-gold-soft transition-colors duration-500 group-hover:text-gold md:text-6xl">
                {step.num}
              </span>
              <div>
                <h3 className="font-serif text-3xl font-normal text-ink md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
