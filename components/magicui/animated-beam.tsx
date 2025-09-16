"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedBeamProps {
  className?: string;
  containerRef?: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 5,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const updatePath = () => {
      if (!fromRef.current || !toRef.current) return;

      const container = containerRef?.current || document.body;
      const containerRect = container.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const fromX = fromRect.left + fromRect.width / 2 - containerRect.left + startXOffset;
      const fromY = fromRect.top + fromRect.height / 2 - containerRect.top + startYOffset;
      const toX = toRect.left + toRect.width / 2 - containerRect.left + endXOffset;
      const toY = toRect.top + toRect.height / 2 - containerRect.top + endYOffset;

      const midX = (fromX + toX) / 2;
      const midY = (fromY + toY) / 2 + curvature;

      const path = `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
      setPathD(path);

      const maxX = Math.max(fromX, toX, midX);
      const maxY = Math.max(fromY, toY, midY);
      const minX = Math.min(fromX, toX, midX);
      const minY = Math.min(fromY, toY, midY);

      setSvgDimensions({
        width: maxX - minX + 100,
        height: maxY - minY + 100,
      });
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    
    return () => window.removeEventListener("resize", updatePath);
  }, [fromRef, toRef, containerRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      className={`pointer-events-none absolute inset-0 ${className}`}
      width={svgDimensions.width}
      height={svgDimensions.height}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={`beam-gradient-${Math.random().toString(36).substr(2, 9)}`}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        fill="none"
      />

      <motion.path
        ref={pathRef}
        d={pathD}
        stroke={`url(#beam-gradient-${Math.random().toString(36).substr(2, 9)})`}
        strokeWidth={pathWidth}
        fill="none"
        strokeDasharray="20 20"
        strokeLinecap="round"
        initial={{
          strokeDashoffset: reverse ? -40 : 40,
          opacity: 0,
        }}
        animate={{
          strokeDashoffset: reverse ? 40 : -40,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </svg>
  );
}