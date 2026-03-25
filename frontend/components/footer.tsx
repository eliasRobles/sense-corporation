import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-primary" />
              <span className="text-lg font-semibold text-foreground">
                Sense Corporation
              </span>
            </div>
            <p className="text-sm text-text-secondary max-w-md">
              Modern technology services company specializing in digital
              transformation and enterprise IT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-text-secondary hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-text-secondary hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-text-secondary hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-text-secondary hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-text-secondary text-center">
            © {currentYear} Sense Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
