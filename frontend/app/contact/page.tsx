import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { H1, H3, Body } from "@/components/ui/typography";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <Section spacing="xl" className="pt-24">
        <Container>
          <div className="text-center space-y-4 mb-16">
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
              <Card>
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
                          href="mailto:info@sensecorp.com"
                          className="text-sm text-text-secondary hover:text-primary transition-colors"
                        >
                          info@sensecorp.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a
                          href="tel:+15551234567"
                          className="text-sm text-text-secondary hover:text-primary transition-colors"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Office</p>
                        <p className="text-sm text-text-secondary">
                          123 Tech Boulevard
                          <br />
                          San Francisco, CA 94105
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Business Hours</p>
                        <p className="text-sm text-text-secondary">
                          Monday - Friday: 9:00 AM - 6:00 PM PST
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card>
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
