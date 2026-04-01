import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy | Sense Corporation",
  description: "Privacy Policy and data protection practices at Sense Corporation",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
        </div>

        <Card enableHoverEffect={false} className="p-8 md:p-12 shadow-sm hover:shadow-lg hover:scale-100 transition-shadow duration-300">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-text-secondary mb-4">
                At Sense Corporation ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-text-secondary mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Fill out contact forms</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage with our website or services</li>
              </ul>
              <p className="text-text-secondary mb-4">
                This information may include: name, email address, company name, phone number, job title, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-text-secondary mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-text-secondary mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To deliver and improve our services</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-text-secondary mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (hosting, analytics, email services)</li>
                <li><strong>Business Partners:</strong> With your consent, to provide services you request</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Data Security
              </h2>
              <p className="text-text-secondary mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="text-text-secondary mb-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-text-secondary mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-text-secondary mb-4">
                To exercise these rights, please contact us at <a href="mailto:info@sense.cr" className="text-primary hover:text-orange-500 hover:underline">info@sense.cr</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-text-secondary mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. For more information, please see our Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-text-secondary mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Data Retention
              </h2>
              <p className="text-text-secondary mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-text-secondary mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-text-secondary mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                12. Contact Us
              </h2>
              <p className="text-text-secondary mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-text-secondary mb-2">
                  <strong className="text-foreground">Sense Corporation</strong>
                </p>
                <p className="text-text-secondary mb-2">
                  Email: <a href="mailto:info@sense.cr" className="text-primary hover:text-orange-500 hover:underline">info@sense.cr</a>
                </p>
                <p className="text-text-secondary">
                  Location: San José, Costa Rica
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                13. Costa Rica Data Protection
              </h2>
              <p className="text-text-secondary mb-4">
                As a company based in Costa Rica, we comply with the Costa Rican Law on Protection of the Person Regarding the Processing of Personal Data (Law No. 8968). This law grants individuals rights regarding their personal data and establishes obligations for data controllers and processors.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </main>
  );
}
