import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Linkedin,
  Youtube,
  Play,
  Sparkles,
  ClipboardCheck,
  SlidersHorizontal,
} from "lucide-react";
import { FadeIn } from "@/components/animations";
import { PathToSixteenHundred } from "@/components/path-to-1600";
import { SmsLink } from "@/components/sms-link";
import { CountUp } from "@/components/count-up";
import { VslPlayer } from "@/components/vsl-player";
import { StudentResults } from "@/components/student-results";
import { FeedbackDemo } from "@/components/feedback-demo";
import { BLOG_POSTS } from "@/app/blog/posts";

export const dynamic = "force-dynamic";

// Configure these in Vercel Environment Variables:
// NEXT_PUBLIC_TOTAL_SPOTS=6
// NEXT_PUBLIC_STUDENTS='["Arjun, NY", "Priya, NJ"]'
const TOTAL_SPOTS = Number(process.env.NEXT_PUBLIC_TOTAL_SPOTS || 6);
const CASE_STUDY_POSTS = BLOG_POSTS.filter((post) => post.image);
const STRATEGY_POSTS = BLOG_POSTS.filter((post) => !post.image);
const VISIBLE_STRATEGY_COUNT = 3;
const VISIBLE_STRATEGY_POSTS = STRATEGY_POSTS.slice(0, VISIBLE_STRATEGY_COUNT);
const MORE_STRATEGY_POSTS = STRATEGY_POSTS.slice(VISIBLE_STRATEGY_COUNT);

const PHONE_DISPLAY = "(347) 722-4114";

// Sharper homepage crops for case studies whose article image is small.
const CASE_STUDY_HOME_IMAGE: Record<string, string> = {
  "nina-34-act-score-personalized-test-prep": "/students/nina.jpg",
};

// Names reflect what each image actually shows (the file names predate a logo swap).
const SCHOOLS = [
  { name: "Columbia", logo: "/schools/harvard.png", className: "h-11 brightness-[0.55] md:h-14" },
  { name: "MIT", logo: "/schools/yale.png" },
  { name: "Yale", logo: "/schools/princeton.png" },
  { name: "Cornell", logo: "/schools/cornell.png" },
  { name: "NYU", logo: "/schools/upenn.png" },
  { name: "Stanford", logo: "/schools/stanford.png" },
  { name: "Florida State", logo: "/schools/fsu.svg" },
];

const YOUTUBE_VIDEOS = [
  { id: "QIvksRmWbiY", title: "The Best SAT Grammar Guide" },
  { id: "ywQZjlE122o", title: "Desmos for SAT in 10 Mins" },
  { id: "lqWIGsptSno", title: "Avoid SAT Burnout" },
];

function getCurrentCohortMonth() {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    timeZone: "America/New_York",
  }).format(new Date());
}

let CURRENT_STUDENTS: string[] = [
  "Arjun, NY",
  "Priya, NJ",
  "Ethan, CT",
  "Sofia, NY",
];

if (process.env.NEXT_PUBLIC_STUDENTS) {
  try {
    const parsed = JSON.parse(process.env.NEXT_PUBLIC_STUDENTS);
    if (Array.isArray(parsed)) {
      CURRENT_STUDENTS = parsed;
    }
  } catch (e) {
    console.warn("Failed to parse NEXT_PUBLIC_STUDENTS env var", e);
  }
}

// ── Shared styles ──────────────────────────────────────────────────────
const BTN_PRIMARY =
  "group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-7 py-4 text-[15px] font-medium text-cream shadow-[0_18px_36px_-16px_rgba(0,53,107,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#002a55]";
const BTN_ON_DARK =
  "group inline-flex items-center justify-center gap-2.5 rounded-full bg-cream px-7 py-4 text-[15px] font-medium text-navy shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white";
const H2 =
  "font-serif text-[2.75rem] leading-[1] font-normal tracking-[-0.02em] md:text-6xl";

function Eyebrow({
  children,
  className = "text-gold",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-xs font-semibold tracking-[0.18em] uppercase ${className}`}>
      {children}
    </p>
  );
}

export default function Home() {
  const cohortMonth = getCurrentCohortMonth();
  const spotsLeft = Math.max(0, TOTAL_SPOTS - CURRENT_STUDENTS.length);
  const [featuredStudy, ...otherStudies] = CASE_STUDY_POSTS;

  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 z-50 w-full border-b border-line/70 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-serif text-[1.55rem] leading-none font-medium tracking-[-0.01em] text-navy">
              Manav Sharma
            </span>
            <span className="hidden items-center gap-3 text-[13px] text-soft sm:flex">
              <span className="h-4 w-px bg-line-strong" />
              SAT Coaching
            </span>
          </Link>
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-8 text-[14px] font-medium text-ink/65 md:flex">
              {[
                ["Approach", "#vsl"],
                ["Results", "#results"],
                ["Method", "#method"],
                ["Guides", "#sat-guides"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="transition-colors hover:text-navy">
                  {label}
                </a>
              ))}
            </div>
            <SmsLink className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-[#002a55]">
              <Phone className="h-3.5 w-3.5" />
              Text Manav
            </SmsLink>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="grain relative overflow-hidden pt-32 pb-24 md:pt-36 md:pb-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -bottom-28 font-serif text-[18rem] leading-none text-navy/[0.035] italic select-none md:text-[32rem]"
        >
          1600
        </span>
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <a
              href="#cohort"
              className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-sheet/80 py-1.5 pr-4 pl-1.5 text-[13px] text-muted shadow-[0_6px_20px_-12px_rgba(60,45,15,0.4)] transition-colors hover:border-line-strong"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy/[0.08]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-navy" />
              </span>
              {spotsLeft > 0 ? (
                <>
                  {cohortMonth} cohort ·{" "}
                  <span className="font-semibold text-navy">
                    {spotsLeft} of {TOTAL_SPOTS} spots open
                  </span>
                </>
              ) : (
                <>
                  {cohortMonth} cohort is full ·{" "}
                  <span className="font-semibold text-navy">Join the waitlist</span>
                </>
              )}
            </a>

            <h1
              className="rise mt-8 font-serif text-[3.4rem] leading-[0.96] font-normal tracking-[-0.02em] text-ink sm:text-7xl lg:text-[5.4rem]"
              style={{ animationDelay: "80ms" }}
            >
              Private SAT coaching from a{" "}
              <span className="text-navy italic">perfect</span> scorer.
            </h1>

            <p
              className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              Private coaching for families seeking a careful, individualized
              path to stronger scores and greater academic confidence. Your
              student works directly with me.
            </p>

            <div
              className="rise mt-9 flex flex-col gap-6 sm:flex-row sm:items-center"
              style={{ animationDelay: "240ms" }}
            >
              <SmsLink className={BTN_PRIMARY}>
                Text for a private score review
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </SmsLink>
              <a href="#vsl" className="group inline-flex items-center gap-3 text-[15px] font-medium text-navy">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-sheet shadow-sm transition-all duration-300 group-hover:border-navy/40 group-hover:shadow-md">
                  <Play className="ml-0.5 h-4 w-4 fill-navy" />
                </span>
                Watch the 5-min breakdown
              </a>
            </div>

            <p
              className="rise mt-10 max-w-xl border-t border-line pt-6 text-sm leading-relaxed text-soft"
              style={{ animationDelay: "320ms" }}
            >
              National Merit Scholar · Software engineer at{" "}
              <span className="text-ink">Microsoft</span> and{" "}
              <span className="text-ink">JPMorgan Chase</span>
            </p>
          </div>

          <div
            className="rise-soft relative mx-auto w-full max-w-[380px] md:mr-0 md:ml-auto"
            style={{ animationDelay: "120ms" }}
          >
            <div aria-hidden className="absolute -inset-3.5 rounded-[28px] border border-line-strong/80" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#2e2e2e] shadow-[0_60px_110px_-45px_rgba(20,20,20,0.6)]">
              <Image
                src="/headshot.png"
                alt="Manav Sharma — perfect 1600 SAT scorer and private SAT tutor"
                fill
                priority
                sizes="(min-width: 768px) 400px, 90vw"
                className="object-cover object-[50%_22%]"
              />
            </div>
            <div className="absolute -bottom-9 -left-5 rounded-2xl border border-line bg-sheet/95 px-6 py-5 shadow-[0_30px_60px_-24px_rgba(40,30,10,0.4)] backdrop-blur md:-left-16">
              <p className="text-[13px] font-medium text-soft">Official SAT score</p>
              <p className="nums mt-2 font-serif text-6xl leading-none text-navy">
                1600
                <span className="ml-1 text-2xl text-soft">/1600</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof strip ── */}
      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
            {[
              { to: 1600, label: "Perfect SAT score", from: 400 },
              { to: 250, suffix: "+", label: "Students coached" },
              { to: 150, prefix: "+", label: "Average point increase" },
              { to: TOTAL_SPOTS, label: "Students per cohort" },
            ].map((stat) => (
              <div key={stat.label} className="bg-cream px-2 py-10 md:px-8 md:py-12">
                <CountUp
                  to={stat.to}
                  from={stat.from ?? 0}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-serif text-5xl leading-none font-semibold tracking-[-0.01em] text-navy md:text-6xl"
                />
                <p className="mt-3 text-sm font-medium text-ink/70">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-line py-10">
            <p className="text-center font-serif text-lg leading-snug font-medium text-ink/70 italic">
              Students I’ve worked with have gone on to attend
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:justify-between md:gap-x-8">
              {SCHOOLS.map((school) => (
                <Image
                  key={school.name}
                  src={school.logo}
                  alt={`${school.name} logo`}
                  width={240}
                  height={140}
                  className={`w-auto object-contain opacity-55 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 ${school.className ?? "h-9 md:h-11"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VSL ── */}
      <section id="vsl" className="grain relative overflow-hidden bg-navy-deep py-24 text-cream md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, rgba(20,90,170,0.45), transparent 70%), radial-gradient(40% 40% at 50% 100%, rgba(201,171,111,0.10), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <Eyebrow className="text-gold-soft">A short note for parents · 5 minutes</Eyebrow>
            <h2 className={`${H2} mt-6 text-cream`}>
              How I find where SAT points are{" "}
              <span className="text-gold-soft italic">being lost.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
              In this short breakdown, I explain the SAT Precision Framework:
              how I review a student’s work, identify the real score
              bottleneck, and decide what should be fixed first.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="mt-12 md:mt-14">
            <VslPlayer />
          </FadeIn>

          <FadeIn className="mt-14 flex flex-col items-center gap-4 text-center">
            <SmsLink className={BTN_ON_DARK}>
              Request a private score review
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </SmsLink>
            <p className="max-w-sm text-sm leading-relaxed text-cream/55">
              Send the current score, target score, and test date. I’ll tell
              you what I would fix first.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Student results ── */}
      <section id="results" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Student outcomes</Eyebrow>
              <h2 className={`${H2} mt-5 text-ink`}>
                Selected student <span className="text-navy italic">results.</span>
              </h2>
            </div>
            <p className="max-w-xs text-base leading-relaxed text-muted">
              Short video notes from students, in their own words. Tap a
              portrait to watch.
            </p>
          </FadeIn>
          <StudentResults />
        </div>
      </section>

      {/* ── Method ── */}
      <PathToSixteenHundred />

      {/* ── AI-Assisted Feedback Loop ── */}
      <section id="ai-guided-practice" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <FadeIn>
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                <Sparkles className="h-4 w-4 text-gold-soft" />
                AI-assisted precision
              </p>
              <h2 className={`${H2} mt-5 text-ink`}>
                More useful feedback after{" "}
                <span className="text-navy italic">every</span> assignment.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                My AI-assisted tools identify recurring mistakes and shape
                targeted homework after each practice set. I personally review
                every recommendation and teach every lesson.
              </p>

              <div className="mt-10">
                {[
                  {
                    icon: ClipboardCheck,
                    title: "Deeper grading",
                    body: "Work is reviewed for concepts, pacing, and error type — not just marked right or wrong.",
                  },
                  {
                    icon: SlidersHorizontal,
                    title: "Truly custom homework",
                    body: "Practice adapts to the student’s missed skills, target score, timeline, and current workload.",
                  },
                  {
                    icon: Sparkles,
                    title: "Better use of lesson time",
                    body: "I enter each session already knowing what changed, what is sticking, and what needs attention next.",
                  },
                ].map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex gap-5 border-t border-line py-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-sheet text-navy">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h3 className="font-serif text-[1.3rem] font-medium text-ink">{feature.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-muted">{feature.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <FeedbackDemo />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Case studies ── */}
      <section id="case-studies" className="border-y border-line bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mb-14 max-w-3xl md:mb-16">
            <Eyebrow>Detailed outcomes</Eyebrow>
            <h2 className={`${H2} mt-5 text-ink`}>
              The work behind the <span className="text-navy italic">scores.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Read how individual students diagnosed their score gaps, changed
              their preparation, and translated the work into measurable
              results.
            </p>
          </FadeIn>

          {featuredStudy?.image && (
            <FadeIn
              href={`/blog/${featuredStudy.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-line bg-sheet transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-40px_rgba(60,45,15,0.4)] md:grid-cols-2"
            >
              <div className="relative min-h-[300px] overflow-hidden bg-[#efe6d6] md:min-h-[460px]">
                <Image
                  src={
                    CASE_STUDY_HOME_IMAGE[featuredStudy.slug] ??
                    featuredStudy.cardImage?.src ??
                    featuredStudy.image.src
                  }
                  alt={featuredStudy.cardImage?.alt ?? featuredStudy.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-[50%_30%] transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-between p-8 md:p-12">
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">
                    <span>Featured case study</span>
                    <span className="h-1 w-1 rounded-full bg-line-strong" />
                    <span>{featuredStudy.readingTime}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-4xl leading-[1.08] font-normal tracking-tight text-ink md:text-5xl">
                    {featuredStudy.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-muted">{featuredStudy.description}</p>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                  <span className="font-serif text-3xl text-navy">
                    {featuredStudy.image.result ?? "Student result"}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium text-navy">
                    Read the case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </FadeIn>
          )}

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {otherStudies.map((post, i) => (
              <FadeIn
                key={post.slug}
                href={`/blog/${post.slug}`}
                delay={(i % 2) * 0.06}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-sheet transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-40px_rgba(60,45,15,0.4)]"
              >
                {post.image && (
                  <div className="relative h-[260px] shrink-0 overflow-hidden bg-[#efe6d6]">
                    <Image
                      src={post.cardImage?.src ?? post.image.src}
                      alt={post.cardImage?.alt ?? post.image.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between p-7 md:p-8">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">
                      <span>Case study</span>
                      <span className="h-1 w-1 rounded-full bg-line-strong" />
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-[1.75rem] leading-tight font-normal tracking-tight text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{post.description}</p>
                  </div>
                  <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                    <span className="font-serif text-2xl font-medium text-navy">
                      {post.image?.result ?? "Student result"}
                    </span>
                    <ArrowRight className="h-5 w-5 text-navy transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + roster ── */}
      <section id="cohort" className="grain relative overflow-hidden bg-[#031a33] py-24 text-cream md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 85% 15%, rgba(0,83,160,0.28), transparent 70%), radial-gradient(45% 55% at 0% 100%, rgba(1,12,25,0.7), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <FadeIn>
            <Eyebrow className="text-gold-soft">The next step</Eyebrow>
            <h2 className="mt-6 font-serif text-5xl leading-[0.98] font-normal tracking-[-0.02em] md:text-7xl">
              Start with a private{" "}
              <span className="text-gold-soft italic">score review.</span>
            </h2>
            <ul className="mt-10 space-y-5">
              {[
                "A SAT Precision Framework review of the current score and target score",
                "A clear diagnosis of where points are leaking",
                "A recommendation for what to fix first",
              ].map((item) => (
                <li key={item} className="flex gap-4 text-lg leading-snug text-cream/85">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-gold-soft" strokeWidth={1.5} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-start gap-4 border-l border-gold-soft/50 pl-5">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-gold-soft" strokeWidth={1.5} />
              <div>
                <p className="font-semibold text-cream">Selective fit</p>
                <p className="mt-1 text-sm text-cream/60">
                  If I do not think I can help, I’ll tell you directly.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl bg-cream/10 p-3 ring-1 ring-white/15 backdrop-blur-sm">
            <div className="rounded-[20px] bg-sheet p-7 text-ink shadow-2xl md:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">
                    {cohortMonth} cohort
                  </p>
                  <p className="mt-1.5 font-serif text-3xl font-medium text-ink">Private roster</p>
                </div>
                <span className="rounded-full bg-navy/[0.07] px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-navy">
                  {spotsLeft > 0 ? `${spotsLeft} of ${TOTAL_SPOTS} open` : "Waitlist open"}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {Array.from({ length: TOTAL_SPOTS }).map((_, i) => {
                  const student = CURRENT_STUDENTS[i];
                  return student ? (
                    <div key={i} className="flex items-center gap-2.5 rounded-xl bg-navy px-2.5 py-2.5 text-cream">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream/15 text-[11px] font-semibold">
                        {student[0]}
                      </span>
                      <span className="truncate text-xs font-medium">{student}</span>
                    </div>
                  ) : (
                    <div key={i} className="flex items-center gap-2.5 rounded-xl border border-dashed border-line-strong px-2.5 py-2.5 text-soft">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f1e7d2]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                      </span>
                      <span className="text-xs font-medium">Open seat</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-line pt-7">
                <p className="text-sm text-muted">Text me directly</p>
                <p className="nums mt-1 font-serif text-5xl leading-none tracking-tight text-navy">
                  {PHONE_DISPLAY}
                </p>
                <SmsLink className={`${BTN_PRIMARY} mt-7 w-full`}>
                  <Phone className="h-4 w-4" />
                  Text for a score review
                </SmsLink>
                <p className="mt-4 text-center text-xs text-soft">
                  Include the current score, target score, and test date.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Free resources ── */}
      <section id="videos" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Free instruction</Eyebrow>
              <h2 className={`${H2} mt-5 text-ink`}>
                SAT notes and <span className="text-navy italic">instruction.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Get a preview of my teaching style and free strategies on my
                YouTube channel.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@Manav-Sharma-swe/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-navy"
            >
              View all videos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {YOUTUBE_VIDEOS.map((video, i) => (
              <FadeIn
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                delay={i * 0.06}
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-paper">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    fill
                    sizes="(min-width: 1152px) 347px, (min-width: 768px) calc((100vw - 112px) / 3), calc(100vw - 48px)"
                    className="object-cover transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/10 transition-colors duration-500 group-hover:bg-navy-deep/25">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/95 shadow-xl transition-transform duration-500 ease-editorial group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5 fill-navy text-navy" />
                    </span>
                  </div>
                </div>
                <p className="mt-4 font-serif text-[1.3rem] font-medium text-ink transition-colors group-hover:text-navy">
                  {video.title}
                </p>
              </FadeIn>
            ))}
          </div>

          <div id="sat-guides" className="mt-24 md:mt-28">
            <FadeIn>
              <div className="mb-4 flex flex-col justify-between gap-4 border-b border-line-strong pb-6 md:flex-row md:items-end">
                <div>
                  <Eyebrow>Strategy library</Eyebrow>
                  <h3 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink md:text-5xl">
                    Specific answers for specific SAT problems.
                  </h3>
                </div>
                <p className="text-sm text-soft">
                  <span className="nums font-serif text-2xl text-navy">{STRATEGY_POSTS.length}</span> guides
                </p>
              </div>
            </FadeIn>

            <div className="divide-y divide-line">
              {VISIBLE_STRATEGY_POSTS.map((post) => (
                <StrategyRow key={post.slug} post={post} />
              ))}
            </div>

            {MORE_STRATEGY_POSTS.length > 0 && (
              <details className="group/more mt-2 border-t border-line">
                <summary className="mt-8 inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-sheet [&::-webkit-details-marker]:hidden">
                  See all {STRATEGY_POSTS.length} guides
                  <ArrowRight className="h-4 w-4 transition-transform group-open/more:rotate-90" />
                </summary>
                <div className="mt-6 divide-y divide-line border-t border-line">
                  {MORE_STRATEGY_POSTS.map((post) => (
                    <StrategyRow key={post.slug} post={post} />
                  ))}
                </div>
              </details>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-navy-deep text-cream/65">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:py-20">
          <div>
            <p className="font-serif text-3xl font-medium text-cream">Manav Sharma</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              Private SAT coaching from a perfect 1600 scorer. Your student
              works directly with me.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/in/manavsharma-sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-soft hover:text-cream"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@Manav-Sharma-swe/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-soft hover:text-cream"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:items-end">
            <SmsLink className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-white">
              <Phone className="h-4 w-4" />
              Text {PHONE_DISPLAY}
            </SmsLink>
            <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
              <a href="mailto:contact@manavsharma.com" className="transition-colors hover:text-cream">
                Contact
              </a>
              <Link href="/#sat-guides" className="transition-colors hover:text-cream">
                Guides
              </Link>
              <a href="#" className="transition-colors hover:text-cream">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-cream">
                Terms
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-cream/40">
            © {new Date().getFullYear()} Manav Sharma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function StrategyRow({ post }: { post: (typeof BLOG_POSTS)[number] }) {
  return (
    <FadeIn
      href={`/blog/${post.slug}`}
      className="group grid gap-3 py-7 transition-colors md:grid-cols-[170px_minmax(0,1fr)_40px] md:gap-6 md:px-2"
    >
      <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.12em] text-gold uppercase md:block">
        <span>{post.videoId ? "Video transcript" : "SAT guide"}</span>
        <span className="h-1 w-1 rounded-full bg-line-strong md:hidden" />
        <span className="text-soft md:mt-2 md:block">{post.readingTime}</span>
      </div>
      <div>
        <h4 className="font-serif text-2xl leading-tight font-normal tracking-tight text-ink transition-colors group-hover:text-navy md:text-[1.9rem]">
          {post.title}
        </h4>
        <p className="mt-2.5 max-w-3xl text-base leading-7 text-muted">{post.description}</p>
      </div>
      <div className="hidden items-center justify-center md:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-cream">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </FadeIn>
  );
}
