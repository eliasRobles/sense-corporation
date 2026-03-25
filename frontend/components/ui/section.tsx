import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "elevated";
  spacing?: "sm" | "md" | "lg" | "xl";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", spacing = "lg", ...props }, ref) => {
    const variantClasses = {
      default: "bg-background",
      muted: "bg-muted",
      elevated: "bg-surface-elevated",
    };

    const spacingClasses = {
      sm: "py-12",
      md: "py-16",
      lg: "py-20",
      xl: "py-24 lg:py-32",
    };

    return (
      <section
        ref={ref}
        className={cn(
          variantClasses[variant],
          spacingClasses[spacing],
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

export { Section };
