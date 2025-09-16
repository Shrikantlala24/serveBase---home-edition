"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export function AnimatedShinyText({ 
  children, 
  className = "", 
  shimmerWidth = 100 
}: AnimatedShinyTextProps) {
  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 -top-0 -bottom-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{
          width: `${shimmerWidth}px`,
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 3,
        }}
      />
    </div>
  );
}