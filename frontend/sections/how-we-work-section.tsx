"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { H2, Body } from "@/components/ui/typography";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We begin by understanding your business objectives, current infrastructure, and technical requirements through comprehensive analysis and stakeholder interviews.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Our team develops a detailed roadmap aligned with your goals, including architecture design, technology selection, and implementation timeline.",
  },
  {
    number: "03",
    title: "Implementation & Development",
    description:
      "We execute the plan with agile methodologies, delivering incremental value while maintaining close collaboration and transparent communication.",
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures reliability, security, and performance. We validate every component against business requirements and industry standards.",
  },
  {
    number: "05",
    title: "Deployment & Support",
    description:
      "Smooth transition to production with comprehensive documentation, training, and ongoing support to ensure long-term success.",
  },
];

export function HowWeWorkSection() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <ScrollReveal>
            <H2>How We Work</H2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Body className="text-text-secondary max-w-2xl mx-auto">
              A proven methodology that delivers results through collaboration,
              transparency, and technical excellence.
            </Body>
          </ScrollReveal>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <Body className="text-text-secondary">{step.description}</Body>
                </div>
                <div className="flex-shrink-0 pt-3">
                  <CheckCircle2 className="w-6 h-6 text-success opacity-60" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
