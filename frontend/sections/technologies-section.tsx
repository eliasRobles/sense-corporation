"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { H2, Body, Small } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const technologies = {
  "Cloud & Infrastructure": [
    "Microsoft Azure",
    "AWS",
    "Google Cloud",
    "Kubernetes",
    "Docker",
    "Terraform",
  ],
  "Backend & APIs": [
    "Node.js",
    "NestJS",
    ".NET Core",
    "Python",
    "PostgreSQL",
    "MongoDB",
  ],
  "Frontend & Mobile": [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Tailwind CSS",
    "Flutter",
  ],
  "DevOps & Tools": [
    "Azure DevOps",
    "GitHub Actions",
    "Jenkins",
    "Grafana",
    "Prometheus",
    "ELK Stack",
  ],
  "Security & Identity": [
    "Azure AD",
    "Entra ID",
    "OAuth 2.0",
    "SAML",
    "Zero Trust",
    "MFA",
  ],
  "Data & Analytics": [
    "Power BI",
    "Azure Synapse",
    "Apache Spark",
    "Databricks",
    "Tableau",
    "SQL Server",
  ],
};

export function TechnologiesSection() {
  return (
    <Section variant="muted" spacing="xl">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <ScrollReveal>
            <H2>Technologies & Capabilities</H2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Body className="text-text-secondary max-w-2xl mx-auto">
              Enterprise-grade technology stack with deep expertise across
              modern platforms and tools.
            </Body>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <ScrollReveal key={category} delay={categoryIndex * 0.1}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-sm hover:bg-primary/10 hover:border-primary/50 transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-12 text-center">
            <Small className="text-text-muted">
              And many more technologies tailored to your specific requirements
            </Small>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
