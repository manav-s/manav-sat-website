"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

const CHAPTERS = [
  { at: 28, label: "Why scores get stuck" },
  { at: 62, label: "Why most prep is built backwards" },
  { at: 110, label: "How I got to 1600" },
  { at: 165, label: "The 2–3 patterns that matter" },
  { at: 195, label: "How the audit works" },
  { at: 256, label: "Who this is for" },
];

const stamp = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export function VslPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = (at?: number) => {
    setStarted(true);
    const video = videoRef.current;
    if (!video) return;
    if (at !== undefined) {
      const seek = () => {
        video.currentTime = at;
      };
      if (video.readyState >= 1) seek();
      else video.addEventListener("loadedmetadata", seek, { once: true });
    }
    // If the browser blocks playback, the native controls are already showing.
    video.play().catch(() => {});
  };

  return (
    <div>
      <div className="group relative aspect-video overflow-hidden rounded-2xl bg-navy-deep shadow-[0_50px_120px_-40px_rgba(0,0,0,0.75)] ring-1 ring-white/10">
        <video
          ref={videoRef}
          poster="/vsl-poster.jpg"
          controls={started}
          playsInline
          preload="none"
          className="h-full w-full"
          aria-label="Video: how Manav Sharma finds where SAT points are being lost"
        >
          <source src="/vsl-final.mp4" type='video/mp4; codecs="hvc1"' />
          <source src="/vsl-final-h264.mp4" type="video/mp4" />
        </video>
        {!started && (
          <button
            type="button"
            onClick={() => play()}
            className="absolute inset-0 flex cursor-pointer items-center justify-center"
            aria-label="Play the 5-minute breakdown"
          >
            <span className="absolute inset-0 bg-linear-to-t from-navy-deep/35 via-transparent via-30% to-transparent transition-opacity duration-500 group-hover:opacity-70" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-cream text-navy shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-editorial group-hover:scale-110 md:h-24 md:w-24">
              <span
                aria-hidden
                className="absolute inset-0 animate-ping rounded-full bg-cream/30"
                style={{ animationDuration: "2.6s" }}
              />
              <Play className="relative ml-1 h-7 w-7 fill-navy md:h-8 md:w-8" strokeWidth={1.5} />
            </span>
            <span className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-navy-deep/70 px-4 py-2 text-sm font-medium text-cream backdrop-blur-md md:bottom-7 md:left-7">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-soft" />
              Watch the breakdown
              <span className="nums text-cream/60">5:27</span>
            </span>
          </button>
        )}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {CHAPTERS.map((chapter) => (
          <button
            key={chapter.at}
            type="button"
            onClick={() => play(chapter.at)}
            className="group/chapter inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-cream/75 transition-colors hover:border-gold-soft/50 hover:bg-white/[0.07] hover:text-cream"
          >
            <span className="nums text-xs font-semibold text-gold-soft">{stamp(chapter.at)}</span>
            {chapter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
