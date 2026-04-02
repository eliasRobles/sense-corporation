import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cookie Policy | Sense Corporation",
  description: "Cookie Policy and tracking technologies used by Sense Corporation",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
        </div>

        <Card enableHoverEffect={false} className="p-8 md:p-12 shadow-sm hover:shadow-lg hover:scale-100 transition-shadow duration-300">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-text-secondary mb-4">
                This Cookie Policy explains how Sense Corporation ("we," "our," or "us") uses cookies and similar tracking technologies when you visit our website. This policy should be read in conjunction with our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. What Are Cookies?
              </h2>
              <p className="text-text-secondary mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences, understand how you use the site, and provide a better user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Types of Cookies We Use
              </h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                3.1 Essential Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure access, and maintaining your session. The website cannot function properly without these cookies.
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Session management cookies</li>
                <li>Security and authentication cookies</li>
                <li>Load balancing cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                3.2 Preference Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                These cookies allow the website to remember choices you make (such as your language preference or theme selection) and provide enhanced, personalized features.
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Theme preferences (dark/light mode)</li>
                <li>Language settings</li>
                <li>Font size preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                3.3 Analytics Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website's functionality and content.
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Google Analytics (anonymized IP)</li>
                <li>Page view tracking</li>
                <li>User behavior analysis</li>
                <li>Performance metrics</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                3.4 Marketing Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                These cookies track your browsing habits to deliver advertising that is more relevant to you and your interests. They may be set by us or by third-party providers.
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>Advertising network cookies</li>
                <li>Remarketing cookies</li>
                <li>Social media tracking pixels</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Specific Cookies We Use
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-foreground border-b border-border">Cookie Name</th>
                      <th className="px-4 py-2 text-left font-semibold text-foreground border-b border-border">Purpose</th>
                      <th className="px-4 py-2 text-left font-semibold text-foreground border-b border-border">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr>
                      <td className="px-4 py-2 border-b border-border">session_id</td>
                      <td className="px-4 py-2 border-b border-border">Maintains your session</td>
                      <td className="px-4 py-2 border-b border-border">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-border">theme_preference</td>
                      <td className="px-4 py-2 border-b border-border">Stores theme selection</td>
                      <td className="px-4 py-2 border-b border-border">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-border">_ga</td>
                      <td className="px-4 py-2 border-b border-border">Google Analytics - distinguishes users</td>
                      <td className="px-4 py-2 border-b border-border">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-border">_gid</td>
                      <td className="px-4 py-2 border-b border-border">Google Analytics - distinguishes users</td>
                      <td className="px-4 py-2 border-b border-border">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Third-Party Cookies
              </h2>
              <p className="text-text-secondary mb-4">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. You should review the respective privacy policies of these third parties for more information.
              </p>
              <p className="text-text-secondary mb-4">
                Third-party services we use include:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Vercel Analytics:</strong> For performance and traffic analysis</li>
                <li><strong>Social Media Platforms:</strong> When you interact with social media buttons or widgets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. How to Control Cookies
              </h2>
              <p className="text-text-secondary mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                6.1 Browser Settings
              </h3>
              <p className="text-text-secondary mb-4">
                Most browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience of our website.
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                6.2 Opt-Out Tools
              </h3>
              <p className="text-text-secondary mb-4">
                You can opt out of analytics and advertising cookies through:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li><strong>Google Analytics:</strong> Install the Google Analytics Opt-out Browser Add-on</li>
                <li><strong>Network Advertising Initiative:</strong> Visit optout.networkadvertising.org</li>
                <li><strong>Digital Advertising Alliance:</strong> Visit optout.aboutads.info</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Do Not Track Signals
              </h2>
              <p className="text-text-secondary mb-4">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activity tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we respect your privacy choices through our cookie settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Mobile Devices
              </h2>
              <p className="text-text-secondary mb-4">
                Mobile devices use identifiers rather than cookies. You can control how your mobile device shares information through your device settings:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li><strong>iOS:</strong> Settings → Privacy → Tracking</li>
                <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Updates to This Cookie Policy
              </h2>
              <p className="text-text-secondary mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. More Information
              </h2>
              <p className="text-text-secondary mb-4">
                For more information about cookies and how they work, visit:
              </p>
              <ul className="list-disc pl-6 text-text-secondary mb-4 space-y-2">
                <li>All About Cookies: <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a></li>
                <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.networkadvertising.org</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Contact Us
              </h2>
              <p className="text-text-secondary mb-4">
                If you have any questions about our use of cookies, please contact us:
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
