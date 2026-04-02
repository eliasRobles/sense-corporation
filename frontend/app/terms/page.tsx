import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service | Sense Corporation",
  description: "Terms of Service for Sense Corporation services",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
        </div>

        <Card enableHoverEffect={false} className="p-8 md:p-12 shadow-sm hover:shadow-lg hover:scale-100 transition-shadow duration-300">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-text-secondary mb-4">
                By accessing or using the services provided by Sense Corporation ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>
              <p className="text-text-secondary mb-4">
                These Terms apply to all visitors, users, and others who access or use our website, applications, or services (collectively, the "Services").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Description of Services
              </h2>
              <p className="text-text-secondary mb-4">
                Sense Corporation provides technology consulting and services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Custom software development</li>
                <li>Cloud infrastructure solutions</li>
                <li>Digital transformation consulting</li>
                <li>IT operations and support</li>
                <li>Security and identity access management</li>
                <li>Technology advisory services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. User Responsibilities
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                3.1 Account Registration
              </h3>
              <p className="text-text-secondary mb-4">
                You may be required to create an account to access certain Services. You agree to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                3.2 Acceptable Use
              </h3>
              <p className="text-text-secondary mb-4">
                You agree not to use our Services to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful or malicious code</li>
                <li>Interfere with or disrupt our Services</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or harvest user information</li>
                <li>Engage in any fraudulent activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Service Agreements and Engagement
              </h2>
              <p className="text-text-secondary mb-4">
                Specific services may be subject to separate service agreements or statements of work ("SOW"). In the event of any conflict between these Terms and a separate agreement, the separate agreement shall prevail with respect to those specific services.
              </p>
              <p className="text-text-secondary mb-4">
                All service engagements will include:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Scope of work and deliverables</li>
                <li>Project timeline and milestones</li>
                <li>Pricing and payment terms</li>
                <li>Intellectual property ownership</li>
                <li>Confidentiality provisions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Intellectual Property Rights
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                5.1 Our Intellectual Property
              </h3>
              <p className="text-text-secondary mb-4">
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of Sense Corporation and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                5.2 Client Intellectual Property
              </h3>
              <p className="text-text-secondary mb-4">
                Unless otherwise specified in a separate agreement, custom work products developed specifically for clients shall be owned by the client upon full payment. We retain the right to use general knowledge, skills, experience, and ideas gained during the engagement.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                5.3 License Grant
              </h3>
              <p className="text-text-secondary mb-4">
                We grant you a limited, non-exclusive, non-transferable license to access and use our Services for your internal business purposes, subject to these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Payment Terms
              </h2>
              <p className="text-text-secondary mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Invoices are due within 30 days of issuance unless otherwise agreed</li>
                <li>Late payments may incur interest charges</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Prices are subject to change with 30 days notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Confidentiality
              </h2>
              <p className="text-text-secondary mb-4">
                Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of the engagement. This obligation survives termination of the service relationship.
              </p>
              <p className="text-text-secondary mb-4">
                Confidential information does not include information that:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Is publicly available</li>
                <li>Was known prior to disclosure</li>
                <li>Is independently developed</li>
                <li>Is rightfully obtained from a third party</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Warranties and Disclaimers
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                8.1 Service Warranties
              </h3>
              <p className="text-text-secondary mb-4">
                We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards. Specific warranties for deliverables will be outlined in individual service agreements.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                8.2 Disclaimers
              </h3>
              <p className="text-text-secondary mb-4">
                EXCEPT AS EXPRESSLY PROVIDED IN A SERVICE AGREEMENT, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-text-secondary mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SENSE CORPORATION BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
              </p>
              <p className="text-text-secondary mb-4">
                Our total liability for any claims arising out of or relating to these Terms or our Services shall not exceed the amounts paid by you to us for the services in question during the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Indemnification
              </h2>
              <p className="text-text-secondary mb-4">
                You agree to indemnify, defend, and hold harmless Sense Corporation and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Your access to or use of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you provide to us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Termination
              </h2>
              <p className="text-text-secondary mb-4">
                We reserve the right to suspend or terminate your access to our Services at any time, with or without cause or notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Your right to use the Services will immediately cease</li>
                <li>We may delete your account and data</li>
                <li>Outstanding fees remain due and payable</li>
                <li>Provisions that by their nature should survive will continue</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                12. Dispute Resolution
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                12.1 Governing Law
              </h3>
              <p className="text-text-secondary mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Costa Rica, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                12.2 Jurisdiction
              </h3>
              <p className="text-text-secondary mb-4">
                Any disputes arising out of or relating to these Terms or our Services shall be subject to the exclusive jurisdiction of the courts of San Jose, Costa Rica.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                12.3 Arbitration
              </h3>
              <p className="text-text-secondary mb-4">
                At our discretion, we may require that disputes be resolved through binding arbitration in accordance with the rules of arbitration in Costa Rica.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-text-secondary mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website and updating the "Last updated" date. Your continued use of our Services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                14. General Provisions
              </h2>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Sense Corporation regarding the Services</li>
                <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions will remain in effect</li>
                <li><strong>Waiver:</strong> Failure to enforce any right or provision does not constitute a waiver</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our written consent</li>
                <li><strong>Force Majeure:</strong> We are not liable for failures caused by events beyond our reasonable control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                15. Contact Information
              </h2>
              <p className="text-text-secondary mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-text-secondary mb-2">
                  <strong className="text-foreground">Sense Corporation</strong>
                </p>
                <p className="text-text-secondary mb-2">
                  Email: <a href="mailto:info@sense.cr" className="text-primary hover:text-orange-500 hover:underline">info@sense.cr</a>
                </p>
                <p className="text-text-secondary">
                  Location: San Jose, Costa Rica
                </p>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </main>
  );
}
