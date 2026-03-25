import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

// Heading 1
export interface H1Props extends HTMLAttributes<HTMLHeadingElement> {}

const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
H1.displayName = "H1";

// Heading 2
const H2 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          "scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
H2.displayName = "H2";

// Heading 3
const H3 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl text-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
H3.displayName = "H3";

// Heading 4
const H4 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl text-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
H4.displayName = "H4";

// Paragraph - Lead (large text)
export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

const Lead = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-xl text-text-secondary leading-relaxed", className)}
        {...props}
      />
    );
  }
);
Lead.displayName = "Lead";

// Paragraph - Body
const Body = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-base text-foreground leading-7", className)}
        {...props}
      />
    );
  }
);
Body.displayName = "Body";

// Paragraph - Small
const Small = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-text-secondary leading-relaxed", className)}
        {...props}
      />
    );
  }
);
Small.displayName = "Small";

// Paragraph - Muted
const Muted = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-text-muted leading-relaxed", className)}
        {...props}
      />
    );
  }
);
Muted.displayName = "Muted";

export { H1, H2, H3, H4, Lead, Body, Small, Muted };
