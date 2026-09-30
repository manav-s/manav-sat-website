"use client";

import { useEffect, useRef } from "react";

/**
 * Renders the final value on the server, then counts up the first time it
 * scrolls into view. Numbers already on screen at load are left alone.
 */
export function CountUp({
  to,
  from = 0,
  duration = 1400,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    const render = (value: number) => {
      el.textContent = `${prefix}${Math.round(value)}${suffix}`;
    };
    render(from);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          render(from + (to - from) * (1 - Math.pow(1 - p, 4)));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      render(to);
    };
  }, [from, to, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "lining-nums tabular-nums" }}>
      {prefix}
      {to}
      {suffix}
    </span>
  );
}
