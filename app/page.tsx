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
  User,
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
              className="flex items-center gap-2 rounded-sm bg-[#00356B] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#00264d]"
            >
              <Phone className="h-4 w-4" />
              Inquire
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative border-b border-[#e4d8c1] bg-[#fbf8f1] pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
            <FadeIn direction="right" className="relative z-10 order-2 md:order-1">
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
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#00356B] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-[#00264d]"
                  >
                    <Phone className="h-5 w-5" />
                    Private Score Review
                  </a>
                  <a
                    href="#vsl"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-[#00356B]/25 bg-transparent px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#00356B] transition-all hover:border-[#00356B] hover:bg-white/50"
                  >
                    Hear the Approach
                  </a>
                </div>
              </FadeIn>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="order-1 flex justify-center md:order-2">
              <div className="relative w-full max-w-[550px]">
                {/* Main Image - Manav */}
                <div className="relative z-10 ml-auto aspect-[3/4] w-3/4 overflow-hidden rounded-sm border border-[#d8c9aa] bg-white">
                  <Image
                    src="/headshot.png"
                    alt="Manav Sharma — perfect 1600 SAT scorer and private SAT tutor"
                    fill
                    className="object-cover object-top scale-150 translate-y-8"
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
              <span className="inline-flex items-center justify-center border border-[#e4d8c1] bg-[#fbf8f1] px-3 py-2 md:shrink-0 md:border-0 md:bg-transparent md:p-0">
                <span>
                  <span className="md:hidden">1600 SAT</span>
                  <span className="hidden md:inline">Perfect <span className="font-bold text-[#00356B]">1600 SAT</span></span>
                </span>
              </span>
              <span className="hidden h-px w-6 shrink-0 bg-[#d8c9aa] md:block" />
              <span className="inline-flex items-center justify-center border border-[#e4d8c1] bg-[#fbf8f1] px-3 py-2 md:shrink-0 md:border-0 md:bg-transparent md:p-0">
                <span>
                  <span className="md:hidden">National Merit</span>
                  <span className="hidden md:inline">National Merit <span className="font-bold text-[#00356B]">Scholar</span></span>
                </span>
              </span>
              <span className="hidden h-px w-6 shrink-0 bg-[#d8c9aa] md:block" />
              <span className="inline-flex items-center justify-center border border-[#e4d8c1] bg-[#fbf8f1] px-3 py-2 md:shrink-0 md:border-0 md:bg-transparent md:p-0">
                <span>
                  <span className="md:hidden">Microsoft SWE</span>
                  <span className="hidden md:inline">Software Engineer, <span className="font-bold text-[#00356B]">Microsoft</span></span>
                </span>
              </span>
              <span className="hidden h-px w-6 shrink-0 bg-[#d8c9aa] md:block" />
              <span className="inline-flex items-center justify-center border border-[#e4d8c1] bg-[#fbf8f1] px-3 py-2 md:shrink-0 md:border-0 md:bg-transparent md:p-0">
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
      <section id="vsl" className="border-b border-[#e4d8c1] bg-[#f7f1e6] py-20 md:py-28">
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
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#00356B] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-[#00264d]"
              >
                <Phone className="h-5 w-5" />
                Request a Private Score Review
              </a>
              <p className="max-w-sm text-sm leading-relaxed text-[#5f5b53]">
                Send the current score, target score, and test date. I&apos;ll
                tell you what I would fix first.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Admissions/Tracker Section ── */}
      <section className="border-b border-[#e4d8c1] bg-[#fbf8f1] py-12">
        <div className="mx-auto max-w-4xl px-6">
            <FadeIn>
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="text-center md:text-left">
                        {TOTAL_SPOTS - CURRENT_STUDENTS.length === 0 ? (
                             <div className="flex items-center justify-center gap-2 md:justify-start">
                                <div className="h-2 w-2 rounded-full bg-[#B89B5E]"></div>
                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#8c733f]">Waitlist Open</span>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:justify-start">
                                <div className="h-2 w-2 rounded-full bg-[#B89B5E] animate-pulse"></div>
                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#00356B]">Private Intake Open</span>
                            </div>
                        )}
                        <h3 className="mt-2 font-serif text-2xl font-normal text-[#111111] md:text-3xl">{cohortMonth} Private Roster</h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#4b4b4b]">
                            I work with <span className="font-semibold text-[#111111]">{TOTAL_SPOTS} students at a time</span> so each family receives direct attention, a clear plan, and careful review.
                        </p>
                    </div>

                    <div className="w-full max-w-sm rounded-sm border border-[#d8c9aa] bg-white p-5">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="text-sm font-bold text-[#111111]">Current Private Roster</div>
                             <div className="rounded-sm bg-[#f7f1e6] px-2 py-1 text-xs font-semibold text-[#00356B]">
                                {TOTAL_SPOTS - CURRENT_STUDENTS.length} spots left
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {Array.from({ length: TOTAL_SPOTS }).map((_, i) => {
                            const student = CURRENT_STUDENTS[i];
                            return (
                                <div
                                key={i}
                                className={`flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3 transition-all ${
                                    student
                                    ? 'bg-[#00356B] text-white'
                                    : 'border border-dashed border-[#d8c9aa] bg-[#fbf8f1] text-[#8d8577]'
                                }`}
                                >
                                {student ? (
                                    <>
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">
                                            {student[0]}
                                        </span>
                                        <span className="text-xs font-medium truncate">
                                            {student}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-200/50">
                                            <User className="h-3 w-3" />
                                        </div>
                                        <span className="text-xs font-medium">Private Intake</span>
                                    </>
                                )}
                                </div>
                            );
                            })}
                        </div>
                        <p className="mt-3 text-right text-xs font-medium text-[#00356B]">Updated {LAST_UPDATED}</p>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeInStagger className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:divide-x sm:divide-neutral-800">
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
                  <div className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>

          <div className="mt-20 border-t border-neutral-800 pt-12">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
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
      <section id="testimonials" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 md:mb-32 text-center md:text-left">
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
              <FadeIn direction="right" className="order-2">
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
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <cite className="not-italic text-lg font-bold text-[#111111]">
                      Michael
                    </cite>
                    <span className="ml-2 text-[#5f5b53]">Student</span>
                  </div>
                  <div className="h-8 w-px bg-neutral-200"></div>
                  <div className="flex items-center gap-4 rounded-sm border border-[#e4d8c1] bg-[#fbf8f1] p-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Before
                      </span>
                      <span className="font-mono text-xl font-medium text-neutral-400 line-through decoration-red-400/50">
                        1420
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-neutral-300" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00356B]">
                        After
                      </span>
                      <span className="font-mono text-3xl font-bold text-[#00356B]">
                        1560 SAT
                      </span>
                    </div>
                  </div>
                </div>
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
              <FadeIn direction="left" className="order-2">
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
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <cite className="not-italic text-lg font-bold text-[#111111]">
                      Nina
                    </cite>
                    <span className="ml-2 text-[#5f5b53]">Student</span>
                  </div>
                  <div className="h-8 w-px bg-neutral-200"></div>
                  <div className="flex items-center gap-4 rounded-sm border border-[#e4d8c1] bg-[#fbf8f1] p-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Before
                      </span>
                      <span className="font-mono text-xl font-medium text-neutral-400 line-through decoration-red-400/50">
                        1300
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-neutral-300" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00356B]">
                        After
                      </span>
                      <span className="font-mono text-3xl font-bold text-[#00356B]">
                        1520
                      </span>
                    </div>
                  </div>
                </div>
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

      {/* ── About / Limited Availability ── */}
      <section className="overflow-hidden bg-[#fbf8f1] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <FadeIn direction="right" className="order-2 md:order-1">
              <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-[#d8c9aa] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#00356B]">
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
                  <div className="absolute -left-4 -top-4 z-10 rounded-sm bg-[#00356B] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
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
      <section className="border-y border-[#e4d8c1] bg-white py-20 md:py-28">
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
                className="rounded-sm border border-[#e4d8c1] bg-[#fbf8f1] p-6"
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
      <section className="bg-[#f7f1e6] py-24 md:py-32">
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#00356B] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-[#00264d]"
              >
                <Phone className="h-5 w-5" />
                347-722-4114
              </a>
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-wrap justify-center gap-2 max-w-sm">
                  {Array.from({ length: TOTAL_SPOTS }).map((_, i) => {
                    const student = CURRENT_STUDENTS[i];
                    return (
                        <div
                          key={i}
                          className={`flex items-center gap-1.5 rounded-full py-1 pl-1 pr-2.5 transition-all ${
                            student
                              ? 'bg-[#00356B] text-white'
                              : 'border border-dashed border-[#d8c9aa] bg-[#fbf8f1] text-[#8d8577]'
                          }`}
                        >
                          {student ? (
                            <>
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-[9px] font-bold">
                                    {student[0]}
                                </span>
                                <span className="text-[10px] font-medium">
                                    {student}
                                </span>
                            </>
                          ) : (
                            <>
                                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-200/50">
                                    <User className="h-2.5 w-2.5" />
                                </div>
                                <span className="text-[10px] font-medium">Open</span>
                            </>
                          )}
                        </div>
                    );
                  })}
                </div>
                <p className="text-center text-xs text-[#5f5b53]">
                  {TOTAL_SPOTS - CURRENT_STUDENTS.length === 0
                    ? 'Currently fully booked — join the waitlist'
                    : `Only ${TOTAL_SPOTS - CURRENT_STUDENTS.length} of ${TOTAL_SPOTS} spots remaining.`}
                  <span className="block mt-1 opacity-75">I only work with {TOTAL_SPOTS} students at a time.</span>
                </p>
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>

      {/* ── Free Resources Section ── */}
      <section id="videos" className="border-t border-[#e4d8c1] bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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
            <FadeInStagger className="grid gap-6 lg:grid-cols-2">
              {CASE_STUDY_POSTS.map((post) => (
                <FadeIn
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group grid overflow-hidden rounded-sm border border-[#d8c9aa] bg-[#fbf8f1] transition-all hover:-translate-y-1 hover:border-[#B89B5E] hover:shadow-2xl hover:shadow-[#6d5b35]/10 sm:grid-cols-[190px_minmax(0,1fr)]"
                >
                  {post.image && (
                    <div className="relative min-h-[260px] overflow-hidden bg-[#efe6d6] sm:h-full">
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        fill
                        sizes="(min-width: 1024px) 190px, (min-width: 640px) 190px, 100vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                  )}
                  <div className="flex min-h-[260px] flex-col justify-between p-6 md:p-7">
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

            <FadeIn>
              <div className="mt-16 mb-6 flex flex-col justify-between gap-4 border-b border-[#e4d8c1] pb-5 md:flex-row md:items-end">
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
                <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-sm border border-[#00356B]/20 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#00356B] transition-colors hover:border-[#00356B] hover:bg-[#fbf8f1] [&::-webkit-details-marker]:hidden">
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
