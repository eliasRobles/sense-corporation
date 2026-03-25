"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { H2, Body } from "@/components/ui/typography";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Target, Users, Award, Zap, Shield, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Business-First Approach",
    description:
      "We align technology decisions with business objectives, ensuring every solution delivers measurable value and ROI.",
  },
  {
    icon: Users,
    title: "Senior-Level Expertise",
    description:
      "Our team consists of seasoned professionals with years of enterprise experience across diverse industries.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Successful delivery of complex projects for organizations ranging from startups to Fortune 500 companies.",
  },
  {
    icon: Zap,
    title: "Agile & Adaptive",
    description:
      "We embrace change and respond quickly to evolving requirements while maintaining project momentum.",
  },
  {
    icon: Shield,
    title: "Security by Design",
    description:
      "Enterprise-grade security practices embedded from day one, ensuring compliance and data protection.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Partnership",
    description:
      "We're invested in your success beyond project delivery, providing ongoing support and strategic guidance.",
  },
];

export function WhySenseSection() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <ScrollReveal>
            <H2>Why Sense Corporation</H2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Body className="text-text-secondary max-w-2xl mx-auto">
              More than a service provider—a strategic technology partner
              committed to your success.
            </Body>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
