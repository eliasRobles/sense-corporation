"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useScroll, useActiveSection } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScroll();
  const activeSection = useActiveSection();

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 backdrop-blur-xl shadow-lg shadow-black/5"
          : "border-transparent bg-background/80 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 rounded-lg bg-orange-600 transition-transform group-hover:scale-110" />
            <span className="text-xl font-semibold text-foreground">
              Sense Corporation
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#services"
              className={cn(
                "text-sm font-medium transition-all duration-200 relative py-1",
                activeSection === "services"
                  ? "text-primary"
                  : "text-text-secondary hover:text-foreground"
              )}
            >
              Services
              {activeSection === "services" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <Link
              href="/#about"
              className={cn(
                "text-sm font-medium transition-all duration-200 relative py-1",
                activeSection === "about"
                  ? "text-primary"
                  : "text-text-secondary hover:text-foreground"
              )}
            >
              About
              {activeSection === "about" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <Link
              href="/#capabilities"
              className={cn(
                "text-sm font-medium transition-all duration-200 relative py-1",
                activeSection === "capabilities"
                  ? "text-primary"
                  : "text-text-secondary hover:text-foreground"
              )}
            >
              Capabilities
              {activeSection === "capabilities" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
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
              className="hidden sm:inline-flex px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
