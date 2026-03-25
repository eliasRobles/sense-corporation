"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { H1, Lead } from "@/components/ui/typography";
import { SlideUp, FadeIn } from "@/components/ui/animations";
import { GradientBlur } from "@/components/ui/placeholders";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden" spacing="xl">
      <GradientBlur variant="primary" className="top-0 right-0 w-1/2 h-1/2" />
      <Container>
        <div className="flex flex-col items-center text-center space-y-8">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted border border-border">
              <span className="text-sm font-medium text-foreground">
                Enterprise Technology Services
              </span>
            </div>
          </FadeIn>

          <SlideUp delay={0.1} className="space-y-4 max-w-4xl">
            <H1 className="text-5xl md:text-6xl lg:text-7xl">
              Transform Your Business with{" "}
              <span className="text-primary">Modern Technology</span>
            </H1>
          </SlideUp>

          <SlideUp delay={0.2} className="max-w-2xl">
            <Lead>
              Sense Corporation helps organizations modernize operations,
              strengthen digital foundations, and build scalable software
              solutions.
            </Lead>
          </SlideUp>

          <SlideUp delay={0.3} className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button size="lg" variant="outline">
                Explore Services
              </Button>
            </Link>
          </SlideUp>
        </div>
      </Container>
    </Section>
  );
}
