"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  offset = 40,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
      transition={{ duration, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function ScrollFadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
}: Omit<ScrollRevealProps, "offset">) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function ScrollScale({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
}: Omit<ScrollRevealProps, "offset">) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
      }
      transition={{ duration, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
