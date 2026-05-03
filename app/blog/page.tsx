import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "./posts";

const SITE_URL = "https://perfectscoremanav.com";

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

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="border-b border-neutral-100 bg-neutral-50 pt-28 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/"
            className="mb-10 inline-flex text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Back to home
          </Link>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
            SAT Strategy
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-bold tracking-tight text-neutral-950 md:text-6xl">
            Specific SAT advice from a perfect scorer.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            No generic study tips. These are the patterns I see when students
            are trying to break out of the 1300s and 1400s.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-6 px-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/5"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-medium text-neutral-500">
                <span>{post.readingTime}</span>
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <time dateTime={post.publishedAt}>SAT prep</time>
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold leading-tight tracking-tight text-neutral-950 md:text-4xl">
                {post.title}
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-neutral-600">
                {post.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-neutral-950">
                Read the post
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
