"use client";

import { HTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Fade In
export interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
}

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, delay = 0, duration = 0.5, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

FadeIn.displayName = "FadeIn";

// Slide Up
export interface SlideUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  offset?: number;
}

export const SlideUp = forwardRef<HTMLDivElement, SlideUpProps>(
  (
    { children, delay = 0, duration = 0.5, offset = 20, className, ...props },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, delay }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

SlideUp.displayName = "SlideUp";

// Slide In from Left
export const SlideInLeft = forwardRef<HTMLDivElement, SlideUpProps>(
  (
    { children, delay = 0, duration = 0.5, offset = 40, className, ...props },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -offset }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration, delay }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

SlideInLeft.displayName = "SlideInLeft";

// Slide In from Right
export const SlideInRight = forwardRef<HTMLDivElement, SlideUpProps>(
  (
    { children, delay = 0, duration = 0.5, offset = 40, className, ...props },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: offset }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration, delay }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

SlideInRight.displayName = "SlideInRight";

// Scale In
export const ScaleIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, delay = 0, duration = 0.5, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration, delay }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

ScaleIn.displayName = "ScaleIn";

// Stagger Container
export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
}

export const StaggerContainer = forwardRef<
  HTMLDivElement,
  StaggerContainerProps
>(({ children, staggerDelay = 0.1, className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
});

StaggerContainer.displayName = "StaggerContainer";

// Stagger Item
export const StaggerItem = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerItem.displayName = "StaggerItem";
