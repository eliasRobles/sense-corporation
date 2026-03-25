# Component Library Reference - Phase 2

## Quick Import Guide

```tsx
// Single imports
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, H2, Lead, Body } from "@/components/ui/typography";

// Or use barrel exports
import { Button, Card, H1, Container } from "@/components";
```

## Button Component

```tsx
import { Button } from "@/components/ui/button";

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

## Card Component

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";

<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Main content here
  </CardContent>
</Card>
```

## Typography

```tsx
import { H1, H2, H3, H4, Lead, Body, Small, Muted } from "@/components/ui/typography";

<H1>Main Heading</H1>
<H2>Section Heading</H2>
<H3>Subsection Heading</H3>
<Lead>Large introductory text</Lead>
<Body>Standard paragraph text</Body>
<Small>Secondary text</Small>
<Muted>Tertiary/helper text</Muted>
```

## Layout Components

```tsx
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

<Section variant="muted" spacing="xl">
  <Container size="lg">
    Your content here
  </Container>
</Section>
```

## Input Components

```tsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

<Input type="email" placeholder="Enter email" />
<Textarea placeholder="Enter message" rows={4} />
```

## Badge Component

```tsx
import { Badge } from "@/components/ui/badge";

<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
```

## Animations

```tsx
import { FadeIn, SlideUp, SlideInLeft } from "@/components/ui/animations";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Instant animations
<FadeIn delay={0.2} duration={0.5}>Content</FadeIn>
<SlideUp delay={0.1}>Content</SlideUp>

// Scroll-triggered
<ScrollReveal delay={0.2} once={true}>
  Content reveals on scroll
</ScrollReveal>
```

## Placeholders

```tsx
import { 
  ImagePlaceholder, 
  GradientBlur, 
  IconPlaceholder 
} from "@/components/ui/placeholders";

<ImagePlaceholder aspectRatio="16/9" />
<GradientBlur variant="primary" className="absolute inset-0" />
<IconPlaceholder size="lg" variant="primary" />
```

## Common Patterns

### Full Page Section
```tsx
<Section spacing="xl">
  <Container>
    <div className="text-center space-y-6">
      <H2>Section Title</H2>
      <Lead>Section description</Lead>
    </div>
  </Container>
</Section>
```

### Feature Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {features.map((feature) => (
    <Card key={feature.id}>
      <CardHeader>
        <IconPlaceholder size="md" variant="primary" />
        <CardTitle>{feature.title}</CardTitle>
        <CardDescription>{feature.description}</CardDescription>
      </CardHeader>
    </Card>
  ))}
</div>
```

### Two-Column Layout
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <ImagePlaceholder aspectRatio="4/3" />
  <div className="space-y-4">
    <H2>Title</H2>
    <Body>Content</Body>
  </div>
</div>
```

## Theme Colors Reference

All components automatically use theme colors:
- `bg-primary` / `text-primary` - Orange accent
- `bg-secondary` / `text-secondary` - Deep slate
- `bg-background` - Main background
- `bg-surface` - Elevated surface
- `bg-muted` - Muted background
- `text-foreground` - Primary text
- `text-text-secondary` - Secondary text
- `text-text-muted` - Muted text
- `border-border` - Border color

## Best Practices

1. **Always use theme tokens** - Never hardcode colors
2. **Use semantic components** - H1, H2 instead of styled divs
3. **Compose with variants** - Use component props for variations
4. **Animate intentionally** - Use delays to create visual hierarchy
5. **Mobile-first** - Design for mobile, enhance for desktop
6. **Accessibility** - Use semantic HTML and proper ARIA labels
