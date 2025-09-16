"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function InteractiveHoverButton({ 
  children,
  className,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}