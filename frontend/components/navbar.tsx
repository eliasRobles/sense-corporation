"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-primary" />
            <span className="text-xl font-semibold text-foreground">
              Sense Corporation
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#services"
              className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/#capabilities"
              className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
            >
              Capabilities
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
