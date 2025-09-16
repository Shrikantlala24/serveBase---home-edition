"use client";

import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView: inViewProp = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: inViewMargin as any });

  const shouldAnimate = inViewProp ? inView : true;

  const directionOffset = {
    up: { y: -offset, x: 0 },
    down: { y: offset, x: 0 },
    left: { x: -offset, y: 0 },
    right: { x: offset, y: 0 },
  };

  const defaultVariants = {
    hidden: {
      ...directionOffset[direction],
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}