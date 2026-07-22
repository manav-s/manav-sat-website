import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  FileText,
  GraduationCap,
  Sparkles,
  Target,
} from "lucide-react";
import { BLOG_POSTS } from "./posts";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital SAT Strategy Blog",
  description:
    "Specific, no-fluff SAT prep advice from Manav Sharma, a perfect 1600 scorer and private SAT tutor.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Digital SAT Strategy Blog | Perfect Score Manav",
    description:
      "Specific, no-fluff SAT prep advice from a perfect 1600 SAT scorer.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

const featuredPost = BLOG_POSTS[0];
const startHerePosts = BLOG_POSTS.slice(1, 4);
const archivePosts = BLOG_POSTS.slice(4);

const archiveTopicLabels = [
  "Test-Day Gaps",
  "Two-Week Push",
  "Parent Guide",
  "High Scorers",
  "Retake Calls",
  "Score Reports",
  "Math Patterns",
  "Reading Growth",
  "Target Scores",
  "1600 Mindset",
  "Circle Rules",
  "Vocabulary",
  "Desmos",
  "Digital SAT",
  "Burnout",
  "Final 24 Hours",
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ee] text-[#141414]">
      <section className="border-b border-[#d8c9aa] bg-[#f8f5ee]">
        <div className="mx-auto max-w-7xl px-6 pt-8 pb-14 md:pt-10 md:pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00356B] transition-colors hover:text-[#001f3f]"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to home
          </Link>

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 border-l-2 border-[#B89B5E] pl-5 text-xs font-bold uppercase tracking-[0.24em] text-[#00356B]">
                <Sparkles className="h-4 w-4" />
                SAT strategy notes
              </div>
              <h1 className="max-w-4xl font-serif text-6xl font-semibold leading-[0.98] tracking-tight text-[#111111] md:text-7xl lg:text-8xl">
                The work behind higher SAT scores.
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-xl leading-9 text-[#4b4b4b]">
                Specific breakdowns for students trying to move out of the
                1300s, protect a 700+ section score, or make the final jump
                into the 1500 range.
              </p>
              <div className="mt-8 grid grid-cols-3 border-y border-[#d8c9aa] py-5 text-center">
                <div>
                  <div className="font-serif text-4xl font-semibold text-[#00356B]">
                    1600
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6e675d]">
                    Scorer
                  </div>
                </div>
                <div className="border-x border-[#d8c9aa]">
                  <div className="font-serif text-4xl font-semibold text-[#00356B]">
                    200+
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6e675d]">
                    Students
                  </div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-semibold text-[#00356B]">
                    {BLOG_POSTS.length}
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6e675d]">
                    Guides
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8c9aa] bg-[#111111] py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group grid overflow-hidden rounded-sm border border-white/10 bg-[#181818] md:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]"
          >
            {featuredPost.image && (
              <div
                className="relative min-h-[420px] overflow-hidden bg-[#252525] bg-cover bg-center md:min-h-[560px]"
                style={{
                  backgroundImage: `url(${featuredPost.image.src})`,
                }}
              >
                <Image
                  src={featuredPost.image.src}
                  alt={featuredPost.image.alt}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-6 md:hidden">
                  <div className="inline-flex items-center gap-2 rounded-sm bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#111111]">
                    Case study
                  </div>
                </div>
              </div>
            )}

            <div className="flex min-h-[520px] flex-col justify-between p-8 md:p-12 lg:p-14">
              <div>
                <div className="mb-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#d7bd78] md:inline-flex">
                  <GraduationCap className="h-4 w-4" />
                  Featured case study
                </div>
                <h2 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  {featuredPost.description}
                </p>
              </div>

              <div className="mt-12">
                <div className="grid grid-cols-3 border-y border-white/15 py-6">
                  <div>
                    <div className="font-serif text-4xl font-semibold text-white">
                      1310
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      Start
                    </div>
                  </div>
                  <div className="border-x border-white/15 px-5">
                    <div className="font-serif text-4xl font-semibold text-white">
                      1430
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      Superscore
                    </div>
                  </div>
                  <div className="pl-5">
                    <div className="font-serif text-4xl font-semibold text-white">
                      +120
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      Points
                    </div>
                  </div>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#d7bd78]">
                  Read the case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-b border-[#d8c9aa] bg-[#fbf8f1] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#00356B]">
                Start here
              </p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-[#111111] md:text-5xl">
                The highest-leverage reads.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5f5b53]">
              These are the posts I would send first to a student stuck in the
              1300s or low 1400s.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {startHerePosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex min-h-[360px] flex-col justify-between rounded-sm border border-[#d8c9aa] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#B89B5E] hover:shadow-xl hover:shadow-[#6d5b35]/10"
              >
                <div>
                  <div className="mb-8 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-[#8c733f]">
                    <span>0{index + 1}</span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-[#111111]">
                    {post.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-[#5f5b53]">
                    {post.description}
                  </p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#00356B]">
                  Read guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-10 lg:self-start">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#00356B]">
                Archive
              </p>
              <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-[#111111]">
                Specific answers for specific score problems.
              </h2>
              <div className="mt-8 space-y-4 border-t border-[#d8c9aa] pt-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#4b4b4b]">
                  <Target className="h-5 w-5 text-[#B89B5E]" />
                  Plateau diagnosis
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-[#4b4b4b]">
                  <BookOpen className="h-5 w-5 text-[#B89B5E]" />
                  Reading and Writing
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-[#4b4b4b]">
                  <FileText className="h-5 w-5 text-[#B89B5E]" />
                  Parent decisions
                </div>
              </div>
            </aside>

            <div className="divide-y divide-[#e4d8c1] border-y border-[#e4d8c1]">
              {archivePosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group grid gap-6 py-7 transition-colors hover:bg-[#fbf8f1] md:grid-cols-[150px_minmax(0,1fr)_32px] md:px-5"
                >
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8c733f] md:block">
                    <span>{archiveTopicLabels[index] ?? "SAT Strategy"}</span>
                    <span className="h-1 w-1 rounded-full bg-[#d8c9aa] md:hidden" />
                    <span className="text-[#8b8579] md:mt-3 md:block">
                      {post.readingTime}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-[#111111] md:text-3xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-[#5f5b53]">
                      {post.description}
                    </p>
                  </div>
                  <div className="hidden items-center justify-center md:flex">
                    <ArrowRight className="h-5 w-5 text-[#00356B] transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8c9aa] bg-[#00356B] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#d7bd78]">
              Private score review
            </p>
            <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Send the last practice test. I will tell you what to fix first.
            </h2>
          </div>
          <a
            href="sms:3477224114"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#00356B] transition-all hover:bg-[#f7f1e6]"
          >
            Text Manav
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
