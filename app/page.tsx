import Image from "next/image";
import {
  Phone,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
  Clock,
  Trophy,
  Shield,
  GraduationCap,
  Linkedin,
  Youtube,
  PlayCircle,
} from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/manav-sharma-evergreenprep/intro-class-manav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-neutral-900">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-100 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-serif text-xl font-bold tracking-tight">
            Manav Sharma
          </span>
          <div className="flex items-center gap-6">
            <a
              href="tel:3477224114"
              className="hidden text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 sm:block"
            >
              +1-347-722-4114
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/10"
            >
              Book First Class
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
            <div className="relative z-10 order-2 md:order-1">
              <div className="mb-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student" width={32} height={32} className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                    <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" width={32} height={32} className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                    <Image src="https://randomuser.me/api/portraits/women/68.jpg" alt="Student" width={32} height={32} className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                  </div>
                  <span className="text-sm font-medium text-neutral-600">
                    Join 200+ successful students
                  </span>
                </div>
                <div className="hidden h-8 w-px bg-neutral-200 sm:block"></div>
                <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 23 23"
                  >
                    <path fill="#f35325" d="M1 1h10v10H1z" />
                    <path fill="#81bc06" d="M12 1h10v10H12z" />
                    <path fill="#05a6f0" d="M1 12h10v10H1z" />
                    <path fill="#ffba08" d="M12 12h10v10H12z" />
                  </svg>
                  Software Engineer at Microsoft
                </div>
              </div>
              <h1 className="mb-6 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
                Get your <span className="italic">dream</span> SAT score.
              </h1>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-neutral-600 md:text-xl">
                I scored a perfect 1600. Now I help students rewrite their
                futures with a proven, personalized curriculum.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-900/20"
                >
                  Book Free Consultation
                </a>
                <a
                  href="#testimonials"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-8 py-4 text-base font-semibold text-neutral-900 transition-all hover:bg-neutral-200"
                >
                  See Results
                </a>
              </div>
            </div>
            <div className="order-1 flex justify-center md:order-2">
              <div className="relative w-full max-w-[550px]">
                {/* Main Image - Manav */}
                <div className="relative z-10 ml-auto aspect-[3/4] w-3/4 overflow-hidden rounded-2xl border-4 border-white bg-neutral-100 shadow-2xl">
                  <Image
                    src="/headshot.jpg"
                    alt="Manav Sharma"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Secondary Image - SAT Score */}
                <div className="absolute -bottom-12 -left-4 z-20 w-2/3 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl md:-bottom-16 md:-left-8">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/sat-score.png"
                      alt="Perfect 1600 SAT Score"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x md:divide-neutral-300/50">
            {[
              { label: "SAT Score", value: "1600" },
              { label: "Students", value: "200+" },
              { label: "Student Results", value: "Top 1%" },
              { label: "Guarantee", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:px-8">
                <div className="font-serif text-4xl font-bold text-neutral-900 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 md:mb-24">
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Real students. <br />
              <span className="text-neutral-400">Real results.</span>
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-between space-y-8">
              <div>
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-neutral-900 text-neutral-900"
                    />
                  ))}
                </div>
                <blockquote className="font-serif text-2xl leading-relaxed text-neutral-900">
                  &ldquo;Alexisgrace came to me struggling with test-taking.
                  Other tutors didn&apos;t care. I saw dedication. Now she has
                  transformed her academic path.&rdquo;
                </blockquote>
                <div className="mt-6">
                  <cite className="not-italic font-semibold text-neutral-900">
                    Alexisgrace
                  </cite>
                  <span className="ml-2 text-neutral-500">— Student</span>
                </div>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/pLioZIuZHZc"
                  title="Alexisgrace testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-8">
              <div>
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-neutral-900 text-neutral-900"
                    />
                  ))}
                </div>
                <blockquote className="font-serif text-2xl leading-relaxed text-neutral-900">
                  &ldquo;Nina was exceptional but her schedule was packed. With
                  a custom plan, she scored a 1520 (Top 1%) and is applying to
                  top colleges with confidence.&rdquo;
                </blockquote>
                <div className="mt-6">
                  <cite className="not-italic font-semibold text-neutral-900">
                    Nina
                  </cite>
                  <span className="ml-2 text-neutral-500">— Student</span>
                </div>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
                {/* Video placeholder */}
                <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
                  Add Video Asset
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="bg-neutral-900 py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 md:mb-24">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-200">
              Your path to 1600
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            <div className="group space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-xl font-bold transition-colors group-hover:bg-white group-hover:text-black">
                1
              </div>
              <h3 className="text-xl font-bold">Schedule</h3>
              <p className="leading-relaxed text-neutral-400">
                A simple free intro class to assess your goals, current level,
                and answer any questions.
              </p>
            </div>
            <div className="group space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-xl font-bold transition-colors group-hover:bg-white group-hover:text-black">
                2
              </div>
              <h3 className="text-xl font-bold">Plan of Attack</h3>
              <p className="leading-relaxed text-neutral-400">
                Attend custom classes, complete targeted practice exams, and
                review directly with me.
              </p>
            </div>
            <div className="group space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-xl font-bold transition-colors group-hover:bg-white group-hover:text-black">
                3
              </div>
              <h3 className="text-xl font-bold">Climb the Ladder</h3>
              <p className="leading-relaxed text-neutral-400">
                Walk into the exam room with total confidence, get your score,
                and apply to your dream school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Limited Availability ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-600">
            <Clock className="h-4 w-4" />
            Limited Availability
          </div>
          <h2 className="mb-8 font-serif text-4xl font-bold md:text-5xl">
            A boutique approach.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
            As a full-time Software Engineer at Microsoft, I maintain a small,
            select group of students to ensure everyone gets the highest quality
            instruction. I&apos;m not a big agency — I&apos;m a dedicated
            mentor.
          </p>
          <p className="text-lg leading-relaxed text-neutral-600 md:text-xl">
            My methods didn&apos;t just help me score a perfect 1600; they have
            helped over 200 students transform their academic paths.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-neutral-50 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">
            Experience it yourself
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-neutral-900" />
                <p className="text-lg text-neutral-700">Proven teaching methods</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-neutral-900" />
                <p className="text-lg text-neutral-700">Learn applicable strategies</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-neutral-900" />
                <p className="text-lg text-neutral-700">Detailed Q&A session</p>
              </div>
              
              <div className="pt-6">
                <div className="inline-flex items-center gap-2 border-l-2 border-neutral-900 pl-4">
                  <Shield className="h-5 w-5 text-neutral-900" />
                  <span className="font-semibold text-neutral-900">
                    100% Refund Guarantee
                  </span>
                </div>
                <p className="mt-2 pl-4 text-sm text-neutral-500">
                  If there is no improvement after 30 days.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-100">
              <h3 className="text-center font-semibold text-neutral-900">
                Ready to transform your score?
              </h3>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-900/20"
              >
                Book Free Trial Class
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <p className="text-center text-xs text-neutral-400">
                Limited spots available for upcoming session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free Resources Section ── */}
      <section className="bg-background py-24 md:py-32 border-t border-neutral-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
                Watch & Learn
              </h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                Get a preview of my teaching style and free strategies on my
                YouTube channel.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@Manav-Sharma-swe/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              View all videos <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
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
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100"
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <PlayCircle className="h-6 w-6 fill-neutral-900 text-neutral-900 ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
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
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100"
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <PlayCircle className="h-6 w-6 fill-neutral-900 text-neutral-900 ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-background py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <p className="text-sm font-medium text-neutral-500">
              © {new Date().getFullYear()} Manav Sharma. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/manavsharma-sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-[#0077b5]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@Manav-Sharma-swe/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-[#FF0000]"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="mailto:contact@manavsharma.com"
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
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
