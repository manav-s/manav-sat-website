"use client";

import type { ReactNode } from "react";

const MESSAGE = encodeURIComponent("Hi, I'm looking for SAT coaching for my child");
const RECIPIENT = "+13477224114";

export function SmsLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`sms:${RECIPIENT}?body=${MESSAGE}`}
      className={className}
      onClick={(event) => {
        // Apple Messages uses &body rather than Android's ?body.
        const separator = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent)
          ? "&"
          : "?";
        event.currentTarget.href = `sms:${RECIPIENT}${separator}body=${MESSAGE}`;
      }}
    >
      {children}
    </a>
  );
}
