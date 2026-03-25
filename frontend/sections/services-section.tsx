"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { H2, Body } from "@/components/ui/typography";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { IconPlaceholder } from "@/components/ui/placeholders";
import {
  Code2,
  Cloud,
  Cog,
  Shield,
  Zap,
  Boxes,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built to meet your unique business requirements and scale with your growth.",
  },
  {
    icon: Cloud,
    title: "Cloud & Architecture",
    description:
      "Design and implement robust cloud infrastructure that optimizes performance, security, and cost efficiency.",
  },
  {
    icon: Cog,
    title: "Digital Transformation",
    description:
      "Modernize legacy systems and processes to drive efficiency and unlock new business opportunities.",
  },
  {
    icon: Zap,
    title: "Automation & Optimization",
    description:
      "Streamline operations with intelligent automation that reduces costs and accelerates delivery.",
  },
  {
    icon: Shield,
    title: "Identity & Access Management",
    description:
      "Secure your organization with enterprise-grade identity solutions and zero-trust architecture.",
  },
  {
    icon: Boxes,
    title: "IT Operations & Support",
    description:
      "Reliable 24/7 support and proactive monitoring to keep your systems running at peak performance.",
  },
];

export function ServicesSection() {
  return (
    <Section id="services" variant="muted" spacing="xl">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <ScrollReveal>
            <H2>What We Do</H2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Body className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive technology services designed to modernize your
              operations and accelerate digital transformation.
            </Body>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
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
