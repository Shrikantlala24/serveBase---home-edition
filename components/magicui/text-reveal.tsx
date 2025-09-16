"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function TextReveal({ children, className = "" }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Split text into words for individual animation
  const text = React.Children.toArray(children)
    .join('')
    .toString();
  
  const words = text.split(' ');

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.6, 0.01, 0.05, 0.95],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}