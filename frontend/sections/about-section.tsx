"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { H2, Body } from "@/components/ui/typography";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ImagePlaceholder } from "@/components/ui/placeholders";

export function AboutSection() {
  return (
    <Section id="about" spacing="xl">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <ImagePlaceholder aspectRatio="4/3" />
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.2}>
              <H2>Who We Are</H2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Body>
                Sense Corporation is a modern technology services company
                specializing in digital transformation and enterprise IT
                solutions. We partner with organizations to modernize their
                technology infrastructure, build custom software, and drive
                operational excellence.
              </Body>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Body>
                With deep expertise across cloud platforms, software
                development, and IT operations, we deliver solutions that are
                not only technically sound but strategically aligned with your
                business objectives.
              </Body>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Body className="text-text-secondary">
                Our approach combines technical depth with business acumen,
                ensuring every solution we deliver drives measurable value for
                your organization.
              </Body>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
