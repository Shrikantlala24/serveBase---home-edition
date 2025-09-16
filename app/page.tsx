"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextReveal } from "@/components/magicui/text-reveal";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ConfettiButton } from "@/components/magicui/confetti";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  Zap, 
  Brain, 
  MessageSquare, 
  FileText, 
  Calendar, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Bot, 
  Workflow,
  Mail,
  Upload,
  BarChart3,
  Clock,
  Shield,
  Star,
  Play,
  ChevronRight,
  Globe,
  Smartphone,
  Laptop
} from "lucide-react";

export default function LandingPage() {
  const emailRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-primary rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">ServeBase</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              Get Started Free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Next-Generation AI Project Management
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Project Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The AI assistant that transforms scattered emails, documents, and conversations into intelligent project insights. Never lose context again.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-xl text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              <span className="font-medium">5-Minute Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="font-medium">10,000+ Teams</span>
            </div>
          </div>
        </div>
      </section>
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <BlurFade delay={0.1}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-primary rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">ServeBase</span>
                <span className="text-xs text-muted-foreground -mt-1">AI Project Assistant</span>
              </div>
            </div>
          </BlurFade>
          
          <nav className="hidden md:flex space-x-8">
            <BlurFade delay={0.2}>
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium">
                Features
              </Link>
            </BlurFade>
            <BlurFade delay={0.25}>
              <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium">
                How it Works
              </Link>
            </BlurFade>
            <BlurFade delay={0.3}>
              <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium">
                Testimonials
              </Link>
            </BlurFade>
            <BlurFade delay={0.35}>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium">
                Pricing
              </Link>
            </BlurFade>
          </nav>

          <div className="flex items-center space-x-4">
            <BlurFade delay={0.4}>
              <AnimatedThemeToggler />
            </BlurFade>
            <BlurFade delay={0.45}>
              <Button variant="ghost" size="sm" className="font-medium">
                Sign In
              </Button>
            </BlurFade>
            <BlurFade delay={0.5}>
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Get Started Free
              </Button>
            </BlurFade>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto text-center max-w-7xl relative z-10">
          <BlurFade delay={0.1}>
            <div className="flex items-center justify-center mb-8">
              <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Next-Generation AI Project Management
              </Badge>
            </div>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
              <div className="mb-4">
                <AnimatedShinyText shimmerWidth={300} className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                  Transform Your
                </AnimatedShinyText>
              </div>
              <div className="text-foreground">Project Intelligence</div>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="max-w-4xl mx-auto mb-12">
              <TextReveal className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed">
                The AI assistant that transforms scattered emails, documents, and conversations into intelligent project insights. Never lose context again.
              </TextReveal>
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <ConfettiButton 
                options={{ particleCount: 150, spread: 90, origin: { x: 0.5, y: 0.6 } }}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-2xl hover:shadow-primary/25 text-xl px-10 py-5 rounded-xl font-bold transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-3" />
              </ConfettiButton>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl px-10 py-5 rounded-xl border-2 hover:bg-muted/50 transition-all duration-300 hover:scale-105 group"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </BlurFade>

          {/* Trust Indicators */}
          <BlurFade delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="font-medium">5-Minute Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="font-medium">10,000+ Teams</span>
              </div>
            </div>
          </BlurFade>

          {/* Enhanced Hero Animation */}
          <BlurFade delay={0.6}>
            <div className="relative max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
                <BoxReveal boxColor="hsl(var(--primary))" duration={0.5}>
                  <div ref={emailRef} className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl p-8 relative shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-lg">Email & Documents</span>
                        <p className="text-sm text-muted-foreground">Automatic ingestion</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                          <FileText className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full w-4/5"></div>
                          <p className="text-xs text-muted-foreground mt-1">Project Brief.pdf</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <Mail className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full w-3/5"></div>
                          <p className="text-xs text-muted-foreground mt-1">Client feedback email</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </BoxReveal>

                <BoxReveal boxColor="hsl(var(--secondary))" duration={0.5}>
                  <div ref={aiRef} className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 relative shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center animate-pulse">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-lg">AI Processing</span>
                        <p className="text-sm text-muted-foreground">Intelligent analysis</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center py-4">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full animate-spin-slow flex items-center justify-center">
                          <Bot className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Progress value={75} className="mb-2" />
                      <p className="text-sm text-muted-foreground">Extracting insights...</p>
                    </div>
                  </div>
                </BoxReveal>

                <BoxReveal boxColor="hsl(var(--secondary))" duration={0.5}>
                  <div ref={projectRef} className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl p-8 relative shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-lg">Smart Insights</span>
                        <p className="text-sm text-muted-foreground">Actionable results</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm font-medium">3 tasks completed</span>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">+2</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-blue-500" />
                          <span className="text-sm font-medium">Next deadline: 2 days</span>
                        </div>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">Soon</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <MessageSquare className="w-5 h-5 text-purple-500" />
                          <span className="text-sm font-medium">AI suggestion ready</span>
                        </div>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">New</Badge>
                      </div>
                    </div>
                  </div>
                </BoxReveal>
              </div>

              {/* Enhanced Animated Beams */}
              <AnimatedBeam 
                fromRef={emailRef as React.RefObject<HTMLElement>} 
                toRef={aiRef as React.RefObject<HTMLElement>} 
                curvature={40}
                duration={2.5}
                gradientStartColor="hsl(var(--primary))"
                gradientStopColor="hsl(var(--secondary))"
                pathWidth={3}
              />
              <AnimatedBeam 
                fromRef={aiRef as React.RefObject<HTMLElement>} 
                toRef={projectRef as React.RefObject<HTMLElement>} 
                curvature={-40}
                duration={2.5}
                delay={1.2}
                gradientStartColor="hsl(var(--secondary))"
                gradientStopColor="hsl(var(--primary))"
                pathWidth={3}
              />
            </div>
          </BlurFade>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-32 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <BlurFade delay={0.1}>
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Powerful Features
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Everything You Need for
                <br />
                <AnimatedShinyText className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Intelligent Project Management
                </AnimatedShinyText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From email ingestion to AI-powered insights, ServeBase transforms how you manage projects.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlurFade delay={0.2}>
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Email Integration</CardTitle>
                  <CardDescription className="text-base">
                    Automatically process emails and extract project-relevant information, attachments, and Google Drive links.
                  </CardDescription>
                </CardHeader>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3}>
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Smart File Processing</CardTitle>
                  <CardDescription className="text-base">
                    AI-powered extraction and analysis of PDFs, Word docs, presentations, and images with OCR capabilities.
                  </CardDescription>
                </CardHeader>
              </Card>
            </BlurFade>

            <BlurFade delay={0.4}>
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">AI Chat Assistant</CardTitle>
                  <CardDescription className="text-base">
                    Ask questions about your projects and get intelligent answers based on all your documents and communications.
                  </CardDescription>
                </CardHeader>
              </Card>
            </BlurFade>

            <BlurFade delay={0.5}>
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Workflow className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Automated Workflows</CardTitle>
                  <CardDescription className="text-base">
                    Automated workflows that turn emails into tasks, extract action items, and keep your projects moving forward.
                  </CardDescription>
                </CardHeader>
              </Card>
            </BlurFade>

            <BlurFade delay={0.6}>
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Analytics & Insights</CardTitle>
                  <CardDescription className="text-base">
                    Get intelligent project summaries, productivity metrics, and AI-powered recommendations for better outcomes.
                  </CardDescription>
                </CardHeader>
              </Card>
            </BlurFade>

            <BlurFade delay={0.7}>
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Team Collaboration</CardTitle>
                  <CardDescription className="text-base">
                    Share project insights, assign tasks, and collaborate with your team using AI-enhanced project summaries.
                  </CardDescription>
                </CardHeader>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <BlurFade delay={0.1}>
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-4">
                <Workflow className="w-4 h-4 mr-2" />
                Simple Process
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                From Chaos to Clarity
                <br />
                <span className="text-muted-foreground">in 3 Simple Steps</span>
              </h2>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <BlurFade delay={0.2}>
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Connect Your Sources</h3>
                <p className="text-muted-foreground text-lg">
                  Link your email, Google Drive, and other tools. ServeBase automatically ingests and organizes all your project data.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Processes Everything</h3>
                <p className="text-muted-foreground text-lg">
                  Our AI extracts insights, creates summaries, and builds a comprehensive knowledge base for each project.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.6}>
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Get Intelligent Insights</h3>
                <p className="text-muted-foreground text-lg">
                  Chat with your projects, get AI recommendations, and make data-driven decisions with complete context.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <BlurFade delay={0.1}>
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-4">
                <Star className="w-4 h-4 mr-2" />
                Customer Stories
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Loved by Teams Worldwide
              </h2>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-8">
            <BlurFade delay={0.2}>
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">
                    "ServeBase transformed our project management. We went from scattered emails to organized insights in days."
                  </p>
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src="/api/placeholder/48/48" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Project Manager, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.4}>
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">
                    "The AI chat feature is incredible. It knows everything about our projects and gives spot-on recommendations."
                  </p>
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src="/api/placeholder/48/48" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Michael Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Founder, StartupXYZ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.6}>
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">
                    "Finally, a tool that understands our workflow. The automated insights save us hours every week."
                  </p>
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src="/api/placeholder/48/48" />
                      <AvatarFallback>EL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Emily Liu</p>
                      <p className="text-sm text-muted-foreground">Operations Director, AgencyCo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Ready to Transform Your
              <br />
              <AnimatedShinyText className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Project Management?
              </AnimatedShinyText>
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of teams already using AI to streamline their projects and boost productivity.
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ConfettiButton 
                options={{ particleCount: 200, spread: 100, origin: { x: 0.5, y: 0.6 } }}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-2xl hover:shadow-primary/25 text-2xl px-12 py-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-6 h-6 ml-3" />
              </ConfettiButton>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl px-12 py-6 rounded-2xl border-2 hover:bg-muted/50 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <p className="text-muted-foreground mt-8">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </BlurFade>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-primary rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-xl font-bold">ServeBase</span>
                  <p className="text-sm text-muted-foreground">AI Project Assistant</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md">
                Transform your scattered project data into intelligent insights with AI-powered project management.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Security</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2024 ServeBase. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
