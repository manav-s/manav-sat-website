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
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };

  const Component = props.href ? motion.a : motion.div;

  return (
    <Component
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: faster ? 0.1 : 0.2 }}
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
