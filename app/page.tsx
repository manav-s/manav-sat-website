import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  Clock,
  Trophy,
  Shield,
  Linkedin,
  Youtube,
  PlayCircle,
  Terminal,
  Sparkles,
  ClipboardCheck,
  SlidersHorizontal,
} from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/animations";
import { PathToSixteenHundred } from "@/components/path-to-1600";
import { BLOG_POSTS } from "@/app/blog/posts";

const SMS_LINK = "sms:3477224114";

export const dynamic = "force-dynamic";

// Configure these in Vercel Environment Variables:
// NEXT_PUBLIC_TOTAL_SPOTS=6
// NEXT_PUBLIC_STUDENTS='["Arjun, NY", "Priya, NJ"]'
// NEXT_PUBLIC_LAST_UPDATED='Feb 10, 2026'
const TOTAL_SPOTS = Number(process.env.NEXT_PUBLIC_TOTAL_SPOTS || 6);
const LAST_UPDATED = process.env.NEXT_PUBLIC_LAST_UPDATED || "Feb 10, 2026";
const CASE_STUDY_POSTS = BLOG_POSTS.filter((post) => post.image);
const STRATEGY_POSTS = BLOG_POSTS.filter((post) => !post.image);
const VISIBLE_HOMEPAGE_POST_COUNT = 5;
const VISIBLE_STRATEGY_COUNT = Math.max(
  0,
  VISIBLE_HOMEPAGE_POST_COUNT - CASE_STUDY_POSTS.length,
);
const VISIBLE_STRATEGY_POSTS = STRATEGY_POSTS.slice(0, VISIBLE_STRATEGY_COUNT);
const MORE_STRATEGY_POSTS = STRATEGY_POSTS.slice(VISIBLE_STRATEGY_COUNT);

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

function StudentScore({ name, before, after }: { name: string; before: string; after: string }) {
  return (
    <div className="mt-auto pt-2">
      <p className="mb-5">
        <cite className="not-italic text-lg font-bold text-[#111111]">{name}</cite>
        <span className="ml-2 text-[#5f5b53]">Student</span>
      </p>
      <div className="grid grid-cols-[auto_24px_auto] items-end justify-start gap-x-5 border-t border-[#e4d8c1] pt-5">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#5f5b53]">Before SAT</p>
          <p className="font-serif text-5xl font-normal leading-none tracking-tight tabular-nums text-[#8d8577]">{before}</p>
        </div>
        <ArrowRight className="mb-3 h-5 w-5 text-[#8d8577]" />
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#00356B]">After SAT</p>
          <p className="font-serif text-5xl font-normal leading-none tracking-tight tabular-nums text-[#00356B]">{after}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const cohortMonth = getCurrentCohortMonth();

  return (
    <div className="min-h-screen bg-[#fbf8f1] text-[#161616]">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#e4d8c1] bg-[#fbf8f1]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-serif text-xl font-normal tracking-tight text-[#00356B]">
            Manav Sharma
          </span>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="#sat-guides"
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00356B] transition-colors hover:text-[#001f3f]"
            >
              Blog
            </Link>
            <a
              href={SMS_LINK}
              className="flex items-center gap-2 rounded-sm bg-[#00356B] px-5 py-2.5 text-xs font-semibold tracking-normal text-white transition-all hover:bg-[#00264d]"
            >
              <Phone className="h-4 w-4" />
              Inquire
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative border-b border-[#e4d8c1] bg-[#fbf8f1] pt-28 pb-14 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr] lg:gap-16">
            <FadeIn direction="right" className="relative z-10 order-1">
              <FadeIn delay={0.1}>
                <div className="mb-7 border-l-2 border-[#B89B5E] pl-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#00356B]">
                  1600 SAT · National Merit Scholar
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="mb-6 font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[#111111] md:text-6xl lg:text-7xl">
                  Private SAT coaching from a <span className="italic">perfect</span> scorer.
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-[#4b4b4b] md:text-xl">
                  Private coaching for families seeking a careful,
                  individualized path to stronger scores and greater academic
                  confidence.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href={SMS_LINK}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#00356B] px-6 py-4 text-sm font-semibold tracking-normal text-white transition-all hover:bg-[#00264d]"
                  >
                    <Phone className="h-5 w-5" />
                    Private score review
                  </a>
                  <a
                    href="#vsl"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-[#00356B]/25 bg-transparent px-6 py-4 text-sm font-semibold tracking-normal text-[#00356B] transition-all hover:border-[#00356B] hover:bg-white/50"
                  >
                    Hear the approach
                  </a>
                </div>
              </FadeIn>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="order-2 flex justify-center">
              <div className="relative w-full max-w-[550px]">
                {/* Main Image - Manav */}
                <div className="relative z-10 mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-t-[160px] rounded-b-sm bg-[#efe6d6]">
                  <Image
                    src="/headshot.png"
                    alt="Manav Sharma — perfect 1600 SAT scorer and private SAT tutor"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 420px, 90vw"
                    priority
                  />
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Credentials Strip ── */}
      <section className="border-b border-[#e4d8c1] bg-white py-5 md:py-8">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[#00356B]/80 md:flex md:flex-nowrap md:items-center md:justify-center md:gap-x-4 md:text-xs md:tracking-[0.16em] lg:gap-x-5">
              <span className="inline-flex items-center justify-center px-3 py-2 md:shrink-0 md:border-0 md:bg-transparent md:p-0">
                <span>
                  <span className="md:hidden">1600 SAT</span>
                  <span className="hidden md:inline">Perfect <span className="font-bold text-[#00356B]">1600 SAT</span></span>
                </span>
              </span>
              <span className="hidden h-px w-6 shrink-0 bg-[#d8c9aa] md:block" />
              <span className="inline-flex items-center justify-center px-3 py-2 md:shrink-0 md:border-0 md:bg-transparent md:p-0">
                <span>
                  <span className="md:hidden">National Merit</span>
                  <span className="hidden md:inline">National Merit <span className="font-bold text-[#00356B]">Scholar</span></span>
                </span>
              </span>
              <span className="hidden h-px w-6 shrink-0 bg-[#d8c9aa] md:block" />
              <span className="inline-flex items-center justify-center px-3 py-2 md:shrink-0 md:border-0 md:bg-transparent md:p-0">
                <span>
                  <span className="md:hidden">Microsoft SWE</span>
                  <span className="hidden md:inline">Software Engineer, <span className="font-bold text-[#00356B]">Microsoft</span></span>
                </span>
              </span>
              <span className="hidden h-px w-6 shrink-0 bg-[#d8c9aa] md:block" />
              <span className="inline-flex items-center justify-center px-3 py-2 md:shrink-0 md:border-0 md:bg-transparent md:p-0">
                <span>
                  <span className="md:hidden">Ex-JPMorgan</span>
                  <span className="hidden md:inline">Formerly <span className="font-bold text-[#00356B]">JPMorgan Chase</span></span>
                </span>
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── VSL Section ── */}
      <section id="vsl" className="border-b border-[#e4d8c1] bg-[#f7f1e6] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#00356B]">
                A short note for parents
              </p>
              <h2 className="font-serif text-4xl font-normal tracking-tight text-[#111111] md:text-5xl">
                How I find where SAT points are being lost
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#4b4b4b]">
                In this short breakdown, I explain the SAT Precision Framework:
                how I review a student&apos;s work, identify the real score bottleneck,
                and decide what should be fixed first.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="overflow-hidden rounded-sm border border-[#d8c9aa] bg-black">
              <video
                src="/vsl-captioned.mp4"
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black"
                aria-label="Video explaining Manav Sharma's SAT tutoring approach"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
              <a
                href={SMS_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#00356B] px-6 py-4 text-sm font-semibold tracking-normal text-white transition-all hover:bg-[#00264d]"
              >
                <Phone className="h-5 w-5" />
                Request a Private score review
              </a>
              <p className="max-w-sm text-sm leading-relaxed text-[#5f5b53]">
                Send the current score, target score, and test date. I&apos;ll
                tell you what I would fix first.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Availability ── */}
      <section className="border-b border-[#e4d8c1] bg-[#fbf8f1] py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-2xl text-[#00356B]">{cohortMonth} private coaching</p>
            <p className="mt-1 text-sm leading-relaxed text-[#5f5b53]">A small roster of {TOTAL_SPOTS} students. Direct attention for every family.</p>
          </div>
          <div className="sm:text-right">
            <p className="text-sm font-medium text-[#00356B]">{Math.max(0, TOTAL_SPOTS - CURRENT_STUDENTS.length) === 0 ? "Waitlist open" : `${Math.max(0, TOTAL_SPOTS - CURRENT_STUDENTS.length)} spaces available`}</p>
            <p className="mt-1 text-xs text-[#5f5b53]">Updated {LAST_UPDATED}</p>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="bg-[#00356B] py-14 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <FadeInStagger className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:divide-x sm:divide-white/15">
            {[
              { label: "Avg. Point Increase", value: "170" },
              { label: "Students", value: "250+" },
              { label: "Student Results", value: "Top 1%" },
            ].map((stat) => (
              <FadeIn key={stat.label} direction="up">
                <div className="text-center sm:px-8">
                  <div className="font-serif text-4xl font-normal text-white md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>

          <div className="mt-12 border-t border-white/15 pt-8">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-white/60">
              Students I&apos;ve Worked With Have Gone On To Attend
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:grid lg:grid-cols-6 lg:gap-8">
              {[
                {
                  name: "Harvard",
                  logo: "/schools/harvard.png",
                },
                {
                  name: "Yale",
                  logo: "/schools/yale.png",
                },
                {
                  name: "Princeton",
                  logo: "/schools/princeton.png",
                },
                {
                  name: "Cornell",
                  logo: "/schools/cornell.png",
                },
                {
                  name: "UPenn",
                  logo: "/schools/upenn.png",
                },
                {
                  name: "Stanford",
                  logo: "/schools/stanford.png",
                },
              ].map((school) => (
                <div key={school.name} className="flex items-center justify-center">
                  <Image
                    src={school.logo}
                    alt={`${school.name} logo`}
                    width={240}
                    height={140}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 md:mb-14 text-center md:text-left">
            <FadeIn>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#00356B]">
                Student outcomes
              </p>
              <h2 className="mb-6 font-serif text-4xl font-normal text-[#111111] md:text-5xl">
                Selected student results.
              </h2>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            <div className="grid gap-10 lg:grid-cols-2">
            {/* Case Study 1: Michael */}
            <div className="flex flex-col gap-8 rounded-sm border border-[#e4d8c1] bg-white p-6 md:p-8">
              <FadeIn direction="right" className="order-2 flex flex-1 flex-col">
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#B89B5E] text-[#B89B5E]" />
                  ))}
                </div>
                <blockquote className="mb-8 font-serif text-3xl leading-tight text-[#111111]">
                  &ldquo;Manav helped me dial in my accuracy and pacing — I
                  jumped <strong>140 points</strong> and ended up just one
                  question shy of perfect.&rdquo;
                </blockquote>
                <StudentScore name="Michael" before="1420" after="1560" />
              </FadeIn>
              <FadeIn direction="left" className="order-1 flex justify-center">
                <div className="relative aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-sm border border-[#e4d8c1] bg-neutral-900">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/NIaOo-lZlGQ"
                    title="Michael testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </FadeIn>
            </div>

            {/* Case Study 2: Nina */}
            <div className="flex flex-col gap-8 rounded-sm border border-[#e4d8c1] bg-white p-6 md:p-8">
              <FadeIn direction="right" className="order-1 flex justify-center">
                <div className="relative aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-sm border border-[#e4d8c1] bg-neutral-900">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/CZpe_eG51So"
                    title="Nina testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </FadeIn>
              <FadeIn direction="left" className="order-2 flex flex-1 flex-col">
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#B89B5E] text-[#B89B5E]" />
                  ))}
                </div>
                <blockquote className="mb-8 font-serif text-3xl leading-tight text-[#111111]">
                  &ldquo;My experience with Manav has been incredibly
                  beneficial. He provides custom resources that were great
                  for my needs as a student.&rdquo;
                </blockquote>
                <StudentScore name="Nina" before="1300" after="1520" />
              </FadeIn>
            </div>
            </div>

            <FadeInStagger className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Ava",
                  id: "zuDcq9_n5jU",
                },
                {
                  name: "Amy",
                  id: "bl9OWDqbAtQ",
                },
                {
                  name: "Alexisgrace",
                  id: "pLioZIuZHZc",
                },
              ].map((student) => (
                <FadeIn key={student.id} className="text-center">
                  <div className="mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-sm border border-[#e4d8c1] bg-neutral-900">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${student.id}`}
                      title={`${student.name} testimonial`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-4 text-lg font-bold text-[#111111]">
                    {student.name}
                  </p>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <PathToSixteenHundred />

      {/* ── AI-Assisted Feedback Loop ── */}
      <section
        id="ai-guided-practice"
        className="border-b border-[#e4d8c1] bg-[#f7f1e6] py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <FadeIn direction="right">
              <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-[#d8c9aa] bg-white px-4 py-2 text-[11px] font-bold tracking-normal text-[#00356B]">
                <Sparkles className="h-4 w-4 text-[#B89B5E]" />
                AI-assisted precision
              </div>
              <h2 className="font-serif text-4xl font-normal leading-[1.08] tracking-tight text-[#111111] md:text-5xl">
                More useful feedback after every assignment.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4b4b4b]">
                I use custom AI-assisted tools to turn each practice set into a
                sharper plan: grade the work, surface recurring mistake
                patterns, and build homework around what the student actually
                needs next.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5f5b53]">
                I review every recommendation myself. AI makes the feedback
                loop faster and more detailed; the judgment, teaching, and
                relationship remain fully human.
              </p>

              <div className="mt-10 space-y-4">
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
                    <div
                      key={feature.title}
                      className="flex gap-4 border-t border-[#d8c9aa] pt-4 first:border-t-0 first:pt-0"
                    >
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#00356B] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#111111]">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-[#5f5b53]">
                          {feature.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="overflow-hidden rounded-sm border border-[#d8c9aa] bg-white shadow-2xl shadow-[#6d5b35]/10">
                <div className="flex items-center justify-between border-b border-[#e4d8c1] px-5 py-4 md:px-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c733f]">
                      Practice review 06
                    </p>
                    <p className="mt-1 font-serif text-2xl text-[#111111]">
                      Student feedback
                    </p>
                  </div>
                  <div className="rounded-full bg-[#edf4ef] px-3 py-1.5 text-xs font-semibold text-[#295b38]">
                    Reviewed
                  </div>
                </div>

                <div className="p-5 md:p-7">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        label: "Accuracy",
                        value: "84%",
                        note: "+7% this week",
                      },
                      {
                        label: "Avg. pace",
                        value: "1:42",
                        note: "On target",
                      },
                      {
                        label: "Patterns found",
                        value: "3",
                        note: "2 high priority",
                      },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-sm border border-[#e4d8c1] bg-[#fbf8f1] p-4"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8d8577]">
                          {metric.label}
                        </p>
                        <p className="mt-2 font-serif text-3xl text-[#00356B]">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-xs text-[#5f5b53]">
                          {metric.note}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-sm border border-[#e4d8c1]">
                    <div className="flex items-center justify-between border-b border-[#e4d8c1] px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00356B]">
                        Next custom assignment
                      </p>
                      <span className="text-xs font-medium text-[#8d8577]">
                        30 questions
                      </span>
                    </div>
                    <div className="divide-y divide-[#e4d8c1] px-4">
                      {[
                        {
                          skill: "Transitions & logical flow",
                          count: "12 questions",
                          priority: "Priority",
                        },
                        {
                          skill: "Advanced algebra",
                          count: "10 questions",
                          priority: "Reinforce",
                        },
                        {
                          skill: "Timed mixed review",
                          count: "8 questions",
                          priority: "Maintain",
                        },
                      ].map((assignment) => (
                        <div
                          key={assignment.skill}
                          className="flex items-center justify-between gap-4 py-4"
                        >
                          <div>
                            <p className="text-sm font-semibold text-[#111111]">
                              {assignment.skill}
                            </p>
                            <p className="mt-1 text-xs text-[#8d8577]">
                              {assignment.count}
                            </p>
                          </div>
                          <span className="rounded-sm bg-[#f7f1e6] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8c733f]">
                            {assignment.priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-3 border-l-2 border-[#B89B5E] bg-[#fbf8f1] px-4 py-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00356B] text-[10px] font-bold text-white">
                      MS
                    </div>
                    <p className="text-xs leading-5 text-[#5f5b53]">
                      <span className="font-bold text-[#111111]">
                        Reviewed by Manav:
                      </span>{" "}
                      The next set prioritizes the two patterns costing the
                      most points while keeping stronger skills fresh.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section id="case-studies" className="border-b border-[#e4d8c1] bg-[#fbf8f1] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mb-16 max-w-3xl md:mb-20">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#00356B]">
                Detailed outcomes
              </p>
              <h2 className="font-serif text-4xl font-normal text-[#111111] md:text-5xl">
                The work behind the scores.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4b4b4b]">
                Read how individual students diagnosed their score gaps,
                changed their preparation, and translated the work into
                measurable results.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid gap-6 md:grid-cols-2">
            {CASE_STUDY_POSTS.map((post) => (
              <FadeIn
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex min-h-[620px] flex-col overflow-hidden rounded-sm border border-[#d8c9aa] bg-white transition-all hover:-translate-y-1 hover:border-[#B89B5E] hover:shadow-2xl hover:shadow-[#6d5b35]/10"
              >
                {post.image && (
                  <div className="relative h-[320px] shrink-0 overflow-hidden bg-[#efe6d6]">
                    <Image
                      src={post.cardImage?.src ?? post.image.src}
                      alt={post.cardImage?.alt ?? post.image.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c733f]">
                      <span>Case study</span>
                      <span className="h-1 w-1 rounded-full bg-[#d8c9aa]" />
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[#111111]">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#5f5b53]">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-[#e4d8c1] pt-5">
                    <span className="font-serif text-2xl font-normal text-[#00356B]">
                      {post.image?.result ?? "Student result"}
                    </span>
                    <ArrowRight className="h-5 w-5 text-[#00356B] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── About / Limited Availability ── */}
      <section className="overflow-hidden bg-[#fbf8f1] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <FadeIn direction="right" className="order-1">
              <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-[#d8c9aa] bg-white px-4 py-1.5 text-xs font-semibold tracking-normal text-[#00356B]">
                <Clock className="h-4 w-4" />
                Private guidance
              </div>
              <h2 className="mb-6 font-serif text-4xl font-normal text-[#111111] md:text-5xl">
                A more careful approach to SAT preparation.
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-[#4b4b4b] md:text-xl">
                <p>
                  I do not start by assigning more random practice. I start by
                  finding where points are actually leaking: comprehension,
                  timing, careless errors, question recognition, or test strategy.
                </p>
                <p>
                  Then I build the coaching around the few changes most likely
                  to move the score. Your student works directly with me: a
                  perfect scorer, National Merit Scholar, and{" "}
                  <span className="font-semibold text-[#111111]">Software Engineer at Microsoft</span> who
                  has helped 250+ students build a more precise SAT plan.
                </p>
              </div>

              <div className="mt-8 border-l-2 border-[#B89B5E] bg-white px-5 py-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00356B]">
                  Human-led, technology-augmented
                </p>
                <p className="mt-3 text-base leading-7 text-[#4b4b4b]">
                  Every student receives direct private coaching from me,
                  supported by my own AI-assisted systems for analyzing
                  mistakes, identifying recurring score patterns, and
                  personalizing practice between sessions. The technology
                  sharpens my diagnosis; it never replaces the teaching.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 rounded-sm border border-[#d8c9aa] bg-white px-5 py-4">
                     <div className="flex rounded-sm bg-[#f7f1e6] p-2.5">
                         <Terminal className="h-5 w-5 text-[#00356B]" />
                     </div>
                     <div>
                         <div className="text-[10px] font-bold uppercase tracking-wider text-[#8d8577]">Career</div>
                         <div className="mt-1 text-sm font-bold leading-none text-[#111111]">Microsoft Engineer</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-sm border border-[#d8c9aa] bg-white px-5 py-4">
                     <div className="flex rounded-sm bg-[#f7f1e6] p-2.5">
                         <Trophy className="h-5 w-5 text-[#B89B5E]" />
                     </div>
                     <div>
                         <div className="text-[10px] font-bold uppercase tracking-wider text-[#8d8577]">Score</div>
                         <div className="mt-1 text-sm font-bold leading-none text-[#111111]">Perfect 1600</div>
                     </div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="left" className="order-1 md:order-2">
               <div className="relative rounded-sm border border-[#d8c9aa] bg-white p-2 transition-transform duration-500 hover:-translate-y-1">
                  <div className="absolute -left-4 -top-4 z-10 rounded-sm bg-[#00356B] px-4 py-2 text-xs font-bold tracking-normal text-white">
                    Live Session
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-sm bg-neutral-100">
                     <Image 
                        src="/class-screenshot.png"
                        alt="Manav teaching a 1:1 SAT prep session over video"
                        fill
                        className="object-cover"
                     />
                  </div>
                  {/* Decorative Elements */}
                   <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-sm border border-dashed border-[#d8c9aa] bg-[#f7f1e6]"></div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Fit Section ── */}
      <section className="border-y border-[#e4d8c1] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#00356B]">
                Private fit
              </p>
              <h2 className="font-serif text-4xl font-normal tracking-tight text-[#111111] md:text-5xl">
                For families seeking private academic guidance.
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="grid gap-6 md:grid-cols-2">
            {[
              "A student aiming for a top score, not just a small bump.",
              "A family that wants a SAT Precision Framework review before more practice.",
              "A student who has tried videos, apps, classes, or tutors and still feels stuck.",
              "A parent who wants direct 1:1 attention, accountability, and a clear next step.",
            ].map((item) => (
              <FadeIn
                key={item}
                className="border-t border-[#d8c9aa] py-6"
              >
                <div className="flex gap-4">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00356B]" />
                  <p className="text-lg leading-relaxed text-[#4b4b4b]">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f7f1e6] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center font-serif text-3xl font-normal text-[#111111] md:text-4xl">
              Start with a private score review
            </h2>
          </FadeIn>
          
          <FadeInStagger className="grid gap-8 md:grid-cols-2">
            <FadeIn className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-[#00356B]" />
                <p className="text-lg text-[#4b4b4b]">A SAT Precision Framework review of the current score and target score</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-[#00356B]" />
                <p className="text-lg text-[#4b4b4b]">A clear diagnosis of where points are leaking</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-[#00356B]" />
                <p className="text-lg text-[#4b4b4b]">A recommendation for what to fix first</p>
              </div>
              
              <div className="pt-6">
                <div className="inline-flex items-center gap-2 border-l-2 border-[#B89B5E] pl-4">
                  <Shield className="h-5 w-5 text-[#00356B]" />
                  <span className="font-semibold text-[#111111]">
                    Selective fit
                  </span>
                </div>
                <p className="mt-2 pl-4 text-sm text-[#5f5b53]">
                  If I do not think I can help, I&apos;ll tell you directly.
                </p>
              </div>
            </FadeIn>

            <FadeIn className="flex flex-col items-center justify-center space-y-6 rounded-sm border border-[#d8c9aa] bg-white p-8">
              <h3 className="text-center font-semibold text-[#111111]">
                Text me directly for a private score review.
              </h3>
              <a
                href={SMS_LINK}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#00356B] px-8 py-4 text-sm font-semibold tracking-normal text-white transition-all hover:bg-[#00264d]"
              >
                <Phone className="h-5 w-5" />
                347-722-4114
              </a>
              <div className="flex flex-col items-center gap-4">
                <p className="text-center text-xs text-[#5f5b53]">
                  {TOTAL_SPOTS - CURRENT_STUDENTS.length === 0
                    ? 'Currently fully booked — join the waitlist'
                    : `${Math.max(0, TOTAL_SPOTS - CURRENT_STUDENTS.length)} spaces available for private coaching.`}
                  <span className="block mt-1 opacity-75">I only work with {TOTAL_SPOTS} students at a time.</span>
                </p>
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>

      {/* ── Free Resources Section ── */}
      <section id="videos" className="border-t border-[#e4d8c1] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="mb-6 font-serif text-4xl font-normal text-[#111111] md:text-5xl">
                  SAT notes and instruction
                </h2>
                <p className="text-lg leading-relaxed text-[#4b4b4b]">
                  Get a preview of my teaching style and free strategies on my
                  YouTube channel.
                </p>
              </div>
              <a
                href="https://www.youtube.com/@Manav-Sharma-swe/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[#00356B] transition-colors hover:text-[#00264d]"
              >
                View all videos <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          <FadeInStagger className="grid gap-8 md:grid-cols-3">
            {[
              {
                id: "QIvksRmWbiY",
                title: "The Best SAT Grammar Guide",
              },
              {
                id: "ywQZjlE122o",
                title: "Desmos for SAT in 10 Mins",
              },
              {
                id: "lqWIGsptSno",
                title: "Avoid SAT Burnout",
              },
            ].map((video) => (
              <FadeIn
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video w-full overflow-hidden rounded-sm bg-neutral-100"
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <PlayCircle className="h-6 w-6 fill-neutral-900 text-neutral-900 ml-1" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>

          <FadeInStagger className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                id: "jTQa0C1einM",
                title: "What SAT Score Do I Need?",
              },
              {
                id: "xaX7odGkSAI",
                title: "+100 SAT Points",
              },
              {
                id: "gwPipkJL9BU",
                title: "How to Get a 1600 — Reading Modules",
              },
              {
                id: "1eI7eJecJ-c",
                title: "How to Solve SAT Vocab Questions",
              },
            ].map((video) => (
              <FadeIn
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video w-full overflow-hidden rounded-sm bg-neutral-100"
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <PlayCircle className="h-6 w-6 fill-neutral-900 text-neutral-900 ml-1" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>

          <div
            id="sat-guides"
            className="mt-20 border-t border-[#e4d8c1] pt-16 md:mt-24 md:pt-20"
          >
            <FadeIn>
              <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#e4d8c1] pb-5 md:flex-row md:items-end">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#00356B]">
                    Strategy library
                  </p>
                  <h3 className="font-serif text-3xl font-normal tracking-tight text-[#111111] md:text-4xl">
                    Specific answers for specific SAT problems.
                  </h3>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8d8577]">
                  {STRATEGY_POSTS.length} guides
                </p>
              </div>
            </FadeIn>

            <FadeInStagger className="divide-y divide-[#e4d8c1] border-b border-[#e4d8c1]">
              {VISIBLE_STRATEGY_POSTS.map((post) => (
                <FadeIn
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group grid gap-4 py-6 transition-colors hover:bg-[#fbf8f1] md:grid-cols-[170px_minmax(0,1fr)_32px] md:px-5"
                >
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#8c733f] md:block">
                    <span>{post.videoId ? "Video transcript" : "SAT guide"}</span>
                    <span className="h-1 w-1 rounded-full bg-[#d8c9aa] md:hidden" />
                    <span className="text-[#8b8579] md:mt-3 md:block">
                      {post.readingTime}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-normal leading-tight tracking-tight text-[#111111] md:text-3xl">
                      {post.title}
                    </h4>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-[#5f5b53]">
                      {post.description}
                    </p>
                  </div>
                  <div className="hidden items-center justify-center md:flex">
                    <ArrowRight className="h-5 w-5 text-[#00356B] transition-transform group-hover:translate-x-1" />
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>

            {MORE_STRATEGY_POSTS.length > 0 && (
              <details className="group mt-6">
                <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-sm border border-[#00356B]/20 px-5 py-3 text-sm font-bold tracking-normal text-[#00356B] transition-colors hover:border-[#00356B] hover:bg-[#fbf8f1] [&::-webkit-details-marker]:hidden">
                  See more guides
                  <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <FadeInStagger className="mt-6 divide-y divide-[#e4d8c1] border-y border-[#e4d8c1]">
                  {MORE_STRATEGY_POSTS.map((post) => (
                    <FadeIn
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group/post grid gap-4 py-6 transition-colors hover:bg-[#fbf8f1] md:grid-cols-[170px_minmax(0,1fr)_32px] md:px-5"
                    >
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#8c733f] md:block">
                        <span>
                          {post.videoId ? "Video transcript" : "SAT guide"}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-[#d8c9aa] md:hidden" />
                        <span className="text-[#8b8579] md:mt-3 md:block">
                          {post.readingTime}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-serif text-2xl font-normal leading-tight tracking-tight text-[#111111] md:text-3xl">
                          {post.title}
                        </h4>
                        <p className="mt-3 max-w-3xl text-base leading-7 text-[#5f5b53]">
                          {post.description}
                        </p>
                      </div>
                      <div className="hidden items-center justify-center md:flex">
                        <ArrowRight className="h-5 w-5 text-[#00356B] transition-transform group-hover/post:translate-x-1" />
                      </div>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </details>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#e4d8c1] bg-[#fbf8f1] py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <p className="text-sm font-medium text-[#5f5b53]">
              © {new Date().getFullYear()} Manav Sharma. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/manavsharma-sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8d8577] transition-colors hover:text-[#00356B]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@Manav-Sharma-swe/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8d8577] transition-colors hover:text-[#00356B]"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="mailto:contact@manavsharma.com"
              className="text-sm font-medium text-[#5f5b53] transition-colors hover:text-[#00356B]"
            >
              Contact
            </a>
            <Link
              href="/#sat-guides"
              className="text-sm font-medium text-[#5f5b53] transition-colors hover:text-[#00356B]"
            >
              Blog
            </Link>
            <a
              href="#"
              className="text-sm font-medium text-[#5f5b53] transition-colors hover:text-[#00356B]"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
