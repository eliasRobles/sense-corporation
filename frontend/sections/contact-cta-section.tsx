"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { H2, Lead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GradientBlur } from "@/components/ui/placeholders";
import { ArrowRight, MessageSquare } from "lucide-react";

export function ContactCTASection() {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      <GradientBlur className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <H2 className="text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </H2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Lead className="text-text-secondary max-w-2xl mx-auto">
              Let's discuss how Sense Corporation can help you achieve your
              technology goals. Schedule a free consultation with our experts today.
            </Lead>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gap-2 group">
                <MessageSquare className="w-5 h-5" />
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-text">No obligation.</span>{" "}
                Free 30-minute discovery call to explore your needs and see if
                we're a good fit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
