"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import React from "react";

interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  options?: confetti.Options;
}

export function ConfettiButton({ 
  children, 
  className, 
  options = {}, 
  ...props 
}: ConfettiButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      ...options,
    });
    
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Button
      className={cn("relative", className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}
