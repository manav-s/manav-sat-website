"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Star, X } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { CountUp } from "@/components/count-up";

type Student = {
  name: string;
  videoId: string;
  image: string;
  before: number;
  after: number;
  quote?: string;
  note?: string;
};

// Figures match the homepage VSL.
const FEATURED: Student[] = [
  {
    name: "Michael",
    videoId: "NIaOo-lZlGQ",
    image: "/students/michael.jpg",
    before: 1420,
    after: 1560,
    quote:
      "Manav helped me dial in my accuracy and pacing. I jumped 140 points and ended up just one question shy of perfect.",
  },
  {
    name: "Nina",
    videoId: "CZpe_eG51So",
    image: "/students/nina.jpg",
    before: 1300,
    after: 1520,
    note: "Also earned a 34 ACT",
    quote:
      "My experience with Manav has been incredibly beneficial. He provides custom resources that were great for my needs as a student.",
  },
];

const MORE: Student[] = [
  { name: "Ava", videoId: "zuDcq9_n5jU", image: "/students/ava.jpg", before: 1300, after: 1420 },
  { name: "Amy", videoId: "bl9OWDqbAtQ", image: "/students/amy.jpg", before: 1290, after: 1400 },
  { name: "Alexis Grace", videoId: "pLioZIuZHZc", image: "/students/alexis.jpg", before: 1080, after: 1300 },
];

function ScoreJump({ student, size = "lg" }: { student: Student; size?: "lg" | "sm" }) {
  const big = size === "lg";
  return (
    <div className="flex items-end gap-3">
      <span
        className={`nums font-serif leading-none text-soft line-through decoration-crimson/50 decoration-1 ${big ? "text-3xl" : "text-2xl"}`}
      >
        {student.before}
      </span>
      <ArrowRight className={`shrink-0 text-line-strong ${big ? "mb-1.5 h-5 w-5" : "mb-1 h-4 w-4"}`} />
      <CountUp
        from={student.before}
        to={student.after}
        className={`font-serif leading-[0.8] text-navy ${big ? "text-6xl" : "text-5xl"}`}
      />
      <span className="mb-0.5 ml-auto rounded-full bg-[#f1e7d2] px-3 py-1 text-xs font-semibold whitespace-nowrap text-gold">
        +{student.after - student.before} pts
      </span>
    </div>
  );
}

function Portrait({
  student,
  onPlay,
  className = "",
  sizes,
}: {
  student: Student;
  onPlay: () => void;
  className?: string;
  sizes: string;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className={`group/portrait relative block w-full cursor-pointer overflow-hidden rounded-xl bg-paper ${className}`}
      aria-label={`Play ${student.name}'s video`}
    >
      <Image
        src={student.image}
        alt={`${student.name}, a student of Manav Sharma`}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1.2s] ease-editorial group-hover/portrait:scale-[1.04]"
      />
      <span className="absolute inset-0 bg-linear-to-t from-navy-deep/60 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 flex items-center gap-2.5 text-sm font-medium text-cream">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/95 text-navy shadow-lg transition-transform duration-500 ease-editorial group-hover/portrait:scale-110">
          <Play className="ml-0.5 h-3.5 w-3.5 fill-navy" />
        </span>
        Watch {student.name}
      </span>
    </button>
  );
}

export function StudentResults() {
  const [playing, setPlaying] = useState<Student | null>(null);

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlaying(null);
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [playing]);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {FEATURED.map((student, i) => (
          <FadeIn
            key={student.name}
            delay={i * 0.08}
            className="flex flex-col rounded-2xl border border-line bg-sheet p-3 shadow-[0_30px_80px_-50px_rgba(60,45,15,0.35)]"
          >
            <div className="grid gap-6 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
              <Portrait
                student={student}
                onPlay={() => setPlaying(student)}
                className="aspect-[4/5] sm:aspect-[3/4]"
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 100vw"
              />
              <div className="px-3 sm:py-4 sm:pr-4 sm:pl-0">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold-soft text-gold-soft" />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-[1.4rem] leading-[1.32] text-ink">
                  &ldquo;{student.quote}&rdquo;
                </blockquote>
                <p className="mt-5 flex items-baseline gap-2 text-sm">
                  <cite className="font-semibold text-ink not-italic">{student.name}</cite>
                  {student.note && <span className="text-soft">· {student.note}</span>}
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-xl bg-cream px-5 py-5">
              <ScoreJump student={student} />
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {MORE.map((student, i) => (
          <FadeIn
            key={student.name}
            delay={i * 0.08}
            className="rounded-2xl border border-line bg-sheet p-3 shadow-[0_30px_80px_-50px_rgba(60,45,15,0.35)]"
          >
            <Portrait
              student={student}
              onPlay={() => setPlaying(student)}
              className="aspect-[4/5]"
              sizes="(min-width: 640px) 33vw, 100vw"
            />
            <div className="px-2 pt-5 pb-3">
              <p className="mb-4 text-sm font-semibold text-ink">{student.name}</p>
              <ScoreJump student={student} size="sm" />
            </div>
          </FadeIn>
        ))}
      </div>

      {playing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${playing.name}'s video`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/85 p-4 backdrop-blur-md"
          onClick={() => setPlaying(null)}
        >
          <div
            className="rise-soft relative aspect-[9/16] h-[min(86vh,780px)] max-w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${playing.videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
              title={`${playing.name} testimonial`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
          <button
            type="button"
            onClick={() => setPlaying(null)}
            className="absolute top-5 right-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
