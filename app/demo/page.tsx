"use client";

import React, { useRef } from "react";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Safari } from "@/components/magicui/safari";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { ConfettiButton } from "@/components/magicui/confetti";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TextReveal } from "@/components/magicui/text-reveal";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function MagicUIDemo() {
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress className="bg-primary" />
      
      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <BlurFade delay={0.1}>
            <AnimatedShinyText shimmerWidth={200} className="text-4xl font-bold">
              Magic UI Components Demo
            </AnimatedShinyText>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of beautiful, animated React components built with Framer Motion and Tailwind CSS.
            </p>
          </BlurFade>
          
          <div className="flex justify-center">
            <AnimatedThemeToggler />
          </div>
        </div>

        {/* Theme Toggler Section */}
        <BlurFade delay={0.3}>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Theme Toggler</h2>
            <p className="text-muted-foreground">
              Smooth animated toggle between light and dark themes.
            </p>
            <div className="p-6 border rounded-lg bg-card">
              <AnimatedThemeToggler />
            </div>
          </div>
        </BlurFade>

        {/* Safari Component */}
        <BlurFade delay={0.4}>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Safari Browser Mockup</h2>
            <p className="text-muted-foreground">
              Beautiful browser mockup component for showcasing websites.
            </p>
            <div className="p-6 border rounded-lg bg-card">
              <div className="max-w-2xl mx-auto">
                <Safari
                  url="https://magicui.design"
                  imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Animated Beam */}
        <BlurFade delay={0.5}>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Animated Beam</h2>
            <p className="text-muted-foreground">
              Connect elements with animated beams for flow diagrams.
            </p>
            <div className="p-12 border rounded-lg bg-card relative">
              <div className="flex justify-between items-center">
                <div 
                  ref={fromRef}
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold"
                >
                  A
                </div>
                <div 
                  ref={toRef}
                  className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold"
                >
                  B
                </div>
              </div>
              <AnimatedBeam 
                fromRef={fromRef as React.RefObject<HTMLElement>} 
                toRef={toRef as React.RefObject<HTMLElement>} 
                curvature={50}
                duration={3}
              />
            </div>
          </div>
        </BlurFade>

        {/* Confetti Button */}
        <BlurFade delay={0.6}>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Confetti Button</h2>
            <p className="text-muted-foreground">
              Celebrate user actions with confetti animations.
            </p>
            <div className="p-6 border rounded-lg bg-card text-center">
              <ConfettiButton 
                options={{ particleCount: 150, spread: 90 }}
                className="bg-gradient-to-r from-pink-500 to-violet-500"
              >
                🎉 Celebrate!
              </ConfettiButton>
            </div>
          </div>
        </BlurFade>

        {/* Text Animations */}
        <BlurFade delay={0.7}>
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Text Animations</h2>
            
            {/* Text Reveal */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Text Reveal</h3>
              <div className="p-6 border rounded-lg bg-card">
                <TextReveal className="text-2xl font-bold">
                  Magic UI will change the way you design beautiful interfaces
                </TextReveal>
              </div>
            </div>

            {/* Shiny Text */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Animated Shiny Text</h3>
              <div className="p-6 border rounded-lg bg-card text-center">
                <AnimatedShinyText 
                  shimmerWidth={180}
                  className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  Shimmering Magic Text ✨
                </AnimatedShinyText>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Box Reveal */}
        <BlurFade delay={0.8}>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Box Reveal Animation</h2>
            <p className="text-muted-foreground">
              Reveal content with a smooth box animation effect.
            </p>
            <div className="p-6 border rounded-lg bg-card">
              <BoxReveal boxColor="#5046e6" duration={0.7}>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Revealed Content!</h3>
                  <p className="text-muted-foreground">
                    This content was hidden behind an animated box overlay.
                  </p>
                </div>
              </BoxReveal>
            </div>
          </div>
        </BlurFade>

        {/* Interactive Button */}
        <BlurFade delay={0.9}>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Interactive Hover Button</h2>
            <p className="text-muted-foreground">
              Enhanced button with multiple hover effects and animations.
            </p>
            <div className="p-6 border rounded-lg bg-card text-center">
              <InteractiveHoverButton 
                text="Hover me!" 
                className="mr-4"
              />
              <InteractiveHoverButton 
                text="Click me too!" 
                className="bg-gradient-to-r from-green-500 to-blue-500"
              />
            </div>
          </div>
        </BlurFade>

        {/* Footer */}
        <BlurFade delay={1.0}>
          <div className="text-center text-muted-foreground py-8">
            <p>Built with Magic UI, Framer Motion, and Tailwind CSS</p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}