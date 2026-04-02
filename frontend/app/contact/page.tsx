"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { H1, H3, Body } from "@/components/ui/typography";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { FloatingCode } from "@/components/ui/floating-code";

export default function ContactPage() {
  return (
    <main>
      <Section spacing="xl" className="pt-24 relative overflow-hidden">
        {/* Tech Background Animations - Only for header area */}
        <div className="absolute inset-x-0 top-0 h-[400px] -z-10">
          <FloatingParticles />
          <FloatingCode />
        </div>

        <Container>
          <div className="text-center space-y-4 mb-16 relative z-10">
            <H1>Get in Touch</H1>
            <Body className="text-text-secondary max-w-2xl mx-auto">
              Have a question or ready to start your project? We'd love to hear
              from you. Our team is here to help you transform your business with
              modern technology solutions.
            </Body>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card enableHoverEffect={false} className="shadow-sm hover:shadow-lg hover:scale-100 transition-shadow duration-300">
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <H3 className="mb-4">Contact Information</H3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a
                          href="mailto:info@sense.cr"
                          className="text-sm text-text-secondary hover:text-orange-500 transition-colors"
                        >
                          info@sense.cr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Office</p>
                        <p className="text-sm text-text-secondary">
                          San Jose, Costa Rica
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Business Hours</p>
                        <p className="text-sm text-text-secondary">
                          24/7 Support Available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card enableHoverEffect={false} className="shadow-sm hover:shadow-lg hover:scale-100 transition-shadow duration-300">
                <CardContent className="pt-6 space-y-4">
                  <H3 className="text-lg">Why Contact Us?</H3>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Free 30-minute consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Response within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>No obligation or commitment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Confidential discussion of your needs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
