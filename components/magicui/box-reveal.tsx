"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface BoxRevealProps {
  children: React.ReactNode;
  className?: string;
  boxColor?: string;
  duration?: number;
}

export function BoxReveal({ 
  children, 
  className = "", 
  boxColor = "#5046e6", 
  duration = 0.5 
}: BoxRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: duration, delay: duration }}
      >
        {children}
      </motion.div>
      
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ 
          duration: duration, 
          ease: [0.6, 0.01, 0.05, 0.95] 
        }}
        style={{
          transformOrigin: "bottom",
          background: boxColor,
        }}
      />
    </div>
  );
}