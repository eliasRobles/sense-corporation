"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { H2, Body, H3 } from "@/components/ui/typography";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Clock, Users as UsersIcon, Briefcase } from "lucide-react";

const engagementModels = [
  {
    icon: Clock,
    title: "Time & Materials",
    subtitle: "Flexible & Scalable",
    description:
      "Ideal for projects with evolving requirements. Pay for actual time and resources used with full transparency and flexibility.",
    features: [
      "Hourly or daily rates",
      "Flexible scope adjustments",
      "Transparent time tracking",
      "Ideal for ongoing work",
    ],
    badge: "Most Flexible",
  },
  {
    icon: Briefcase,
    title: "Fixed Price",
    subtitle: "Predictable Budget",
    description:
      "Best for well-defined projects with clear scope and deliverables. Fixed budget with guaranteed delivery milestones.",
    features: [
      "Defined scope & timeline",
      "Fixed budget commitment",
      "Milestone-based delivery",
      "Risk shared with vendor",
    ],
    badge: "Most Predictable",
  },
  {
    icon: UsersIcon,
    title: "Dedicated Team",
    subtitle: "Extended Capacity",
    description:
      "Long-term collaboration with a dedicated team integrated into your organization. Full control and continuous delivery.",
    features: [
      "Dedicated resources",
      "Long-term commitment",
      "Seamless integration",
      "Scalable team size",
    ],
    badge: "Most Popular",
  },
];

export function EngagementModelsSection() {
  return (
    <Section variant="muted" spacing="xl">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <ScrollReveal>
            <H2>Engagement Models</H2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Body className="text-text-secondary max-w-2xl mx-auto">
              Flexible collaboration models designed to fit your project needs,
              budget, and timeline.
            </Body>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {engagementModels.map((model, index) => {
            const Icon = model.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.15}>
                <Card className="h-full hover:shadow-xl transition-all hover:scale-[1.02]">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {model.badge}
                      </Badge>
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-1">{model.title}</CardTitle>
                      <p className="text-sm text-primary font-medium">
                        {model.subtitle}
                      </p>
                    </div>
                    <CardDescription className="text-base">
                      {model.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {model.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="text-primary mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <Body className="text-text-secondary">
              Not sure which model fits your needs? Our team will help you choose
              the right approach based on your project scope, timeline, and
              organizational goals.
            </Body>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
