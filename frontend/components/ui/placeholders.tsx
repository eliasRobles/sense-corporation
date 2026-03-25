export function DotPattern({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        className="w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1"
              className="fill-current text-text-muted"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  );
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        className="w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              className="stroke-current text-border"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}

export function WavePattern({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="0.1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}

export function GradientBlur({
  variant = "primary",
  className,
}: {
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}) {
  const colors = {
    primary: "from-primary/20 to-transparent",
    secondary: "from-secondary/20 to-transparent",
    accent: "from-accent/20 to-transparent",
  };

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${colors[variant]} blur-3xl -z-10 ${className}`}
    />
  );
}

export function GlowEffect({
  color = "primary",
  className,
}: {
  color?: "primary" | "secondary" | "accent";
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        background: `radial-gradient(circle at center, hsl(var(--${color})) 0%, transparent 70%)`,
        opacity: 0.1,
      }}
    />
  );
}

export function ImagePlaceholder({
  aspectRatio = "16/9",
  className,
}: {
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9";
  className?: string;
}) {
  return (
    <div
      className={`relative w-full bg-gradient-to-br from-muted to-surface rounded-lg overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-24 h-24 text-text-muted/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}

export function IconPlaceholder({
  size = "md",
  variant = "default",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "secondary";
}) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const variants = {
    default: "bg-muted text-text-muted",
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
  };

  return (
    <div
      className={`${sizes[size]} ${variants[variant]} rounded-lg flex items-center justify-center`}
    >
      <svg
        className="w-1/2 h-1/2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    </div>
  );
}
