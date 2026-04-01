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
              href="/#about"
              className={cn(
                "text-sm font-medium transition-all duration-200",
                activeSection === "about"
                  ? "text-orange-600"
                  : "text-text-secondary hover:text-foreground"
              )}
            >
              About
            </Link>
            <Link
              href="/#services"
              className={cn(
                "text-sm font-medium transition-all duration-200",
                activeSection === "services"
                  ? "text-orange-600"
                  : "text-text-secondary hover:text-foreground"
              )}
            >
              Services
            </Link>
            <Link
              href="/#capabilities"
              className={cn(
                "text-sm font-medium transition-all duration-200",
                activeSection === "capabilities"
                  ? "text-orange-600"
                  : "text-text-secondary hover:text-foreground"
              )}
            >
              How We Work
            </Link>
            <Link
              href="/#technologies"
              className={cn(
                "text-sm font-medium transition-all duration-200",
                activeSection === "technologies"
                  ? "text-orange-600"
                  : "text-text-secondary hover:text-foreground"
              )}
            >
              Technologies
            </Link>
            <Link
              href="/#why-sense"
              className={cn(
                "text-sm font-medium transition-all duration-200",
                activeSection === "why-sense"
                  ? "text-orange-600"
                  : "text-text-secondary hover:text-foreground"
              )}
            >
              Why Us
            </Link>
            <Link
              href="/#engagement"
              className={cn(
                "text-sm font-medium transition-all duration-200",
                activeSection === "engagement"
                  ? "text-orange-600"
                  : "text-text-secondary hover:text-foreground"
              )}
            >
              Engagement
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-all duration-200",
                activeSection === "contact"
                  ? "text-orange-600"
                  : "text-text-secondary hover:text-foreground"
              )}
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
