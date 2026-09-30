"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
} & HTMLMotionProps<"div"> & HTMLMotionProps<"a">;

export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
  fullWidth = false,
  ...props
}: FadeInProps) {
  const directions = {
    up: { y: 14 },
    down: { y: -14 },
    left: { x: 14 },
    right: { x: -14 },
    none: {},
  };

  const Component = props.href ? motion.a : motion.div;

  // Trigger slightly before the element scrolls in so sections are never seen empty.
  return (
    <Component
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px 120px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ width: fullWidth ? "100%" : "auto" }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function FadeInStagger({
  children,
  className = "",
  faster = false,
}: {
  children: React.ReactNode;
  className?: string;
  faster?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px 120px 0px" }}
      transition={{ staggerChildren: faster ? 0.06 : 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({ children, className = "", ...props }: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
