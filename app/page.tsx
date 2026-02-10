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
  Target,
  TrendingUp,
} from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/animations";

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
            <FadeIn direction="right" className="relative z-10 order-2 md:order-1">
              <FadeIn delay={0.1}>
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
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="mb-6 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
                  Get your <span className="italic">dream</span> SAT score.
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-neutral-600 md:text-xl">
                  I scored a perfect 1600. Now I help students rewrite their
                  futures with a proven, personalized curriculum.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
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
              </FadeIn>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="order-1 flex justify-center md:order-2">
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
                <FadeIn delay={0.6} direction="up" className="absolute -bottom-12 -left-4 z-20 w-2/3 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl md:-bottom-16 md:-left-8">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/sat-score.png"
                      alt="Perfect 1600 SAT Score"
                      fill
                      className="object-contain"
                    />
                  </div>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeInStagger className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:divide-x sm:divide-neutral-800">
            {[
              { label: "Avg. Point Increase", value: "200" },
              { label: "Students", value: "250+" },
              { label: "Student Results", value: "Top 1%" },
            ].map((stat) => (
              <FadeIn key={stat.label} direction="up">
                <div className="text-center sm:px-8">
                  <div className="font-serif text-4xl font-bold text-white md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-wider text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>

          <div className="mt-20 border-t border-neutral-800 pt-12">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-neutral-500">
              Students Accepted Into Top Universities
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:grid lg:grid-cols-7 lg:gap-8">
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
                  name: "MIT",
                  logo: "/schools/mit.png",
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
      <section id="testimonials" className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 md:mb-32 text-center md:text-left">
            <FadeIn>
              <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
                Real students. <br />
                <span className="text-neutral-400">Real results.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {/* Case Study 1: Alexisgrace */}
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
              <FadeIn direction="right" className="order-2 md:order-1">
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-neutral-900 text-neutral-900"
                    />
                  ))}
                </div>
                <blockquote className="mb-8 font-serif text-3xl leading-tight text-neutral-900 md:text-4xl">
                  &ldquo;Alexisgrace came to me struggling with test-taking. Other
                  tutors didn&apos;t care. I saw dedication. Now she has
                  transformed her academic path.&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <cite className="not-italic font-bold text-lg text-neutral-900">
                      Alexisgrace
                    </cite>
                    <span className="ml-2 text-neutral-500">Student</span>
                  </div>
                  <div className="h-8 w-px bg-neutral-200"></div>
                  <div className="flex items-center gap-4 rounded-xl border border-neutral-100 bg-white p-4 shadow-xl shadow-neutral-900/5 ring-1 ring-neutral-900/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Before
                      </span>
                      <span className="font-mono text-xl font-medium text-neutral-400 line-through decoration-red-400/50">
                        1080
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-neutral-300" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-green-600">
                        After
                      </span>
                      <span className="font-mono text-3xl font-bold text-green-600">
                        1300 SAT
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="left" className="order-1 flex justify-center md:order-2">
                <div className="relative aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl ring-1 ring-neutral-200">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/pLioZIuZHZc"
                    title="Alexisgrace testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </FadeIn>
            </div>

            {/* Case Study 2: Nina */}
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
              <FadeIn direction="right" className="order-1 flex justify-center">
                <div className="relative aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl ring-1 ring-neutral-200">
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
                    <Star
                      key={i}
                      className="h-5 w-5 fill-neutral-900 text-neutral-900"
                    />
                  ))}
                </div>
                <blockquote className="mb-8 font-serif text-3xl leading-tight text-neutral-900 md:text-4xl">
                  &ldquo;Nina was exceptional but her schedule was packed. With
                  a custom plan, she scored a 1520 (Top 1%) and is applying to
                  top colleges with confidence.&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <cite className="not-italic font-bold text-lg text-neutral-900">
                      Nina
                    </cite>
                    <span className="ml-2 text-neutral-500">Student</span>
                  </div>
                  <div className="h-8 w-px bg-neutral-200"></div>
                  <div className="flex items-center gap-4 rounded-xl border border-neutral-100 bg-white p-4 shadow-xl shadow-neutral-900/5 ring-1 ring-neutral-900/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Before
                      </span>
                      <span className="font-mono text-xl font-medium text-neutral-400 line-through decoration-red-400/50">
                        27
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-neutral-300" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-green-600">
                        After
                      </span>
                      <span className="font-mono text-3xl font-bold text-green-600">
                        34 ACT
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="bg-neutral-900 py-24 text-white md:py-32 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 md:mb-32 text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-neutral-200">
                Your path to 1600
              </h2>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="absolute top-12 left-0 hidden w-full -translate-y-1/2 md:block px-12 opacity-30">
              <div className="w-full h-px border-t-2 border-dashed border-neutral-500"></div>
            </div>

            <FadeInStagger className="relative grid gap-12 md:grid-cols-3 md:gap-12">
              <FadeIn className="group relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 shadow-2xl transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:scale-110">
                  <Calendar className="h-10 w-10" />
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neutral-500 transition-colors group-hover:border-neutral-700 group-hover:text-neutral-300">
                    Step 01
                  </div>
                  <h3 className="text-xl font-bold text-white">Initial Consultation</h3>
                  <p className="leading-relaxed text-neutral-400 max-w-xs mx-auto">
                    A simple free intro class to assess your goals, current level,
                    and answer any questions.
                  </p>
                </div>
              </FadeIn>
              <FadeIn className="group relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 shadow-2xl transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:scale-110">
                  <Target className="h-10 w-10" />
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neutral-500 transition-colors group-hover:border-neutral-700 group-hover:text-neutral-300">
                    Step 02
                  </div>
                  <h3 className="text-xl font-bold text-white">Plan of Attack</h3>
                  <p className="leading-relaxed text-neutral-400 max-w-xs mx-auto">
                    Attend custom classes, complete targeted practice exams, and
                    review directly with me.
                  </p>
                </div>
              </FadeIn>
              <FadeIn className="group relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 shadow-2xl transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:scale-110">
                  <TrendingUp className="h-10 w-10" />
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neutral-500 transition-colors group-hover:border-neutral-700 group-hover:text-neutral-300">
                    Step 03
                  </div>
                  <h3 className="text-xl font-bold text-white">Climb the Ladder</h3>
                  <p className="leading-relaxed text-neutral-400 max-w-xs mx-auto">
                    Walk into the exam room with total confidence, get your score,
                    and apply to your dream school.
                  </p>
                </div>
              </FadeIn>
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* ── About / Limited Availability ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-neutral-50 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">
              Experience it yourself
            </h2>
          </FadeIn>
          
          <FadeInStagger className="grid gap-8 md:grid-cols-2">
            <FadeIn className="space-y-6">
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
            </FadeIn>

            <FadeIn className="flex flex-col items-center justify-center space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-100">
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
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>

      {/* ── Free Resources Section ── */}
      <section className="bg-background py-24 md:py-32 border-t border-neutral-100">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
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
              </FadeIn>
            ))}
          </FadeInStagger>
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
