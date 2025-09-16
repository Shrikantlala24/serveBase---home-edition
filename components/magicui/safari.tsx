"use client";

import React from "react";

type SafariMode = "default" | "simple";

interface SafariProps extends React.SVGProps<SVGSVGElement> {
  url?: string;
  imageSrc?: string;
  videoSrc?: string;
  width?: number;
  height?: number;
  mode?: SafariMode;
}

export function Safari({
  url = "https://ui.aceternity.com",
  imageSrc,
  videoSrc,
  width = 1203,
  height = 753,
  mode = "default",
  ...props
}: SafariProps) {
  const aspectRatio = height / width;
  const viewBoxHeight = 753;
  const viewBoxWidth = 1203;

  return (
    <div className="relative">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* Browser window background */}
        <rect
          width="1203"
          height="753"
          rx="12"
          fill="url(#paint0_linear)"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="1"
        />
        
        {/* Top bar */}
        <rect width="1203" height="48" fill="rgba(255,255,255,0.95)" />
        
        {/* Traffic lights */}
        <circle cx="24" cy="24" r="6" fill="#FF5F57" />
        <circle cx="44" cy="24" r="6" fill="#FFBD2E" />
        <circle cx="64" cy="24" r="6" fill="#28CA42" />
        
        {mode === "default" && (
          <>
            {/* Address bar */}
            <rect
              x="88"
              y="12"
              width="1027"
              height="24"
              rx="12"
              fill="rgba(0,0,0,0.05)"
            />
            
            {/* URL text */}
            <text
              x="100"
              y="26"
              fontSize="11"
              fill="rgba(0,0,0,0.6)"
              fontFamily="system-ui, sans-serif"
            >
              {url}
            </text>
          </>
        )}
        
        {/* Content area */}
        <rect
          x="1"
          y="49"
          width="1201"
          height="703"
          fill="white"
        />
        
        {/* Image/Video content */}
        {imageSrc && (
          <image
            href={imageSrc}
            x="1"
            y="49"
            width="1201"
            height="703"
            preserveAspectRatio="xMidYMid slice"
          />
        )}
        
        {videoSrc && (
          <foreignObject x="1" y="49" width="1201" height="703">
            <video
              src={videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
          </foreignObject>
        )}
        
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop stopColor="rgba(255,255,255,0.1)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}