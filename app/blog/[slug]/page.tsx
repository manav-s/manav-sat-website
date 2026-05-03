import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG_POSTS, getPostBySlug } from "../posts";

const SITE_URL = "https://perfectscoremanav.com";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Manav Sharma"],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postIndex = BLOG_POSTS.findIndex((item) => item.slug === post.slug);
  const nextPost = BLOG_POSTS[(postIndex + 1) % BLOG_POSTS.length];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Manav Sharma",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Perfect Score Manav",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article>
        <header className="border-b border-neutral-100 bg-neutral-50 pt-28 pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to SAT strategy
            </Link>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-medium text-neutral-500">
              <span>{post.readingTime}</span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <time dateTime={post.publishedAt}>SAT prep</time>
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-neutral-950 md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-600">
              {post.description}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <div className="space-y-6 text-lg leading-8 text-neutral-700">
            {post.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 space-y-14">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-5 font-serif text-3xl font-bold tracking-tight text-neutral-950">
                  {section.heading}
                </h2>
                <div className="space-y-6 text-lg leading-8 text-neutral-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-6 space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-base leading-7 text-neutral-700"
                      >
                        <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-neutral-900" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-14 space-y-6 border-t border-neutral-200 pt-10 text-lg leading-8 text-neutral-700">
            {post.closing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-neutral-950 p-8 text-white md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
              Want a second set of eyes?
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold">
              Send me the last practice test.
            </h2>
            <p className="mb-6 max-w-2xl leading-7 text-neutral-300">
              I will tell you what is actually holding the score back and
              whether 1:1 coaching makes sense.
            </p>
            <a
              href="sms:3477224114"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-950 transition-all hover:bg-neutral-200"
            >
              Text Manav
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-8">
            <Link
              href="/blog"
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              All posts
            </Link>
            <Link
              href={`/blog/${nextPost.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-950"
            >
              Next post
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
      <script
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
