"use client";

import confetti from "canvas-confetti";
import React from "react";

interface ConfettiProps {
  particleCount?: number;
  angle?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  drift?: number;
  flat?: boolean;
  ticks?: number;
  origin?: { x: number; y: number };
  colors?: string[];
  shapes?: ("square" | "circle")[];
  zIndex?: number;
  disableForReducedMotion?: boolean;
  useWorker?: boolean;
  resize?: boolean;
  canvas?: HTMLCanvasElement | null;
  scalar?: number;
}

interface ConfettiButtonProps {
  options?: ConfettiProps;
  children?: React.ReactNode;
  className?: string;
}

export function Confetti(props: ConfettiProps) {
  React.useEffect(() => {
    const defaultOptions: ConfettiProps = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      flat: false,
      ticks: 200,
      origin: { x: 0.5, y: 0.5 },
      colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88c999", "#fcff00", "#ffa400", "#ffacac"],
      shapes: ["square", "circle"],
      zIndex: 100,
      disableForReducedMotion: false,
      useWorker: true,
      resize: true,
      scalar: 1,
    };

    const options = { ...defaultOptions, ...props };
    confetti(options);
  }, []);

  return null;
}

export function ConfettiButton({ 
  options = {}, 
  children = "Click me!", 
  className = "" 
}: ConfettiButtonProps) {
  const handleClick = () => {
    const defaultOptions: ConfettiProps = {
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.6 },
    };

    confetti({ ...defaultOptions, ...options });
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}