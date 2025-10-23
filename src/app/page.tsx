"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ScanLine, TrendingUp, Building } from "lucide-react";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as LabelPrimitive from "@radix-ui/react-label";

// lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// components/ui/label.tsx
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

// components/ui/input.tsx
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// components/ui/textarea.tsx
const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

// components/ui/badge.tsx
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

// components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// components/ui/card.tsx
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// lib/placeholder-images.json (Data)
const placeholderImageData = {
  "placeholderImages": [
    {
      "id": "contact-illustration",
      "description": "An abstract illustration for the contact section.",
      "imageUrl": "https://images.unsplash.com/photo-1581161461543-e249191d3e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGFic3RyYWN0fGVufDB8fHx8MTc2MTA5OTIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "security abstract"
    }
  ]
};


// Page components
function Secure360Logo({ className }: { className?: string }) {
  return (
    <div className={cn(`flex items-center gap-2 font-headline`, className)}>
      <ShieldCheck className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold text-foreground">
        Secure<span className="text-primary">360</span>
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Secure360Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="#features"
            className="transition-colors hover:text-foreground/80"
          >
            Features
          </Link>
          <Link
            href="#about-us"
            className="transition-colors hover:text-foreground/80"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-background py-20 md:py-32"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute h-full w-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      <div className="container mx-auto">
        <div className="relative z-10 text-center">
          <Badge
            variant="outline"
            className="mb-4 animate-fade-in-up border-primary/50 text-primary"
          >
            Cybersecurity, Simplified.
          </Badge>
          <h1 className="animate-fade-in-up font-headline text-4xl font-bold tracking-tight text-foreground [animation-delay:200ms] sm:text-5xl md:text-6xl">
            Complete Protection for Your
            <br />
            <span className="text-primary">Digital World</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-lg text-muted-foreground [animation-delay:400ms]">
            Secure360 offers a unified platform to monitor threats, manage
            vulnerabilities, and respond to incidents—all in real-time.
          </p>
          <div className="mt-8 flex animate-fade-in-up flex-wrap justify-center gap-4 [animation-delay:600ms]">
            <Button asChild size="lg">
              <Link href="#contact">
                Request a Demo <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto mt-16 max-w-7xl animate-fade-in-up [animation-delay:800ms] md:mt-24">
          <div className="absolute inset-x-0 -top-16 z-10 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 -bottom-16 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg shadow-2xl shadow-primary/20 ring-1 ring-inset ring-primary/20">
            <Image
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5JTIwZGFzaGJvYXJkfGVufDB8fHx8MTc2MTEwMzgzMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cybersecurity matrix"
              fill
              className="object-cover object-top"
              data-ai-hint="cybersecurity matrix"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const featuresList = [
  {
    icon: <ScanLine className="h-8 w-8" />,
    title: "Real-Time Threat Monitoring",
    description:
      "Our advanced system continuously scans your network for threats, providing instant alerts and actionable insights to keep you ahead of attackers.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Vulnerability Management",
    description:
      "Automatically identify, prioritize, and remediate vulnerabilities across your assets, from cloud infrastructure to endpoint devices.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Incident Response",
    description:
      "Streamline your incident response with automated workflows and a centralized command center, reducing response time and minimizing impact.",
  },
];

function Features() {
  return (
    <section id="features" className="w-full bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto space-y-16">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Stay Secure
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Secure360 combines cutting-edge technology with an intuitive
            interface, making robust cybersecurity accessible to everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuresList.map((feature, index) => (
            <Card
              key={index}
              className="transform-gpu bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl">
                  {feature.title}
                </CardTitle>
                <CardDescription className="pt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about-us" className="w-full py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Badge
            variant="outline"
            className="mb-4 w-fit border-primary/50 text-primary"
          >
            The Team Behind The Tech
          </Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Powered by Sedge Enterprise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Secure360 is proudly developed and maintained by Sedge Enterprise, a
            forward-thinking technology firm dedicated to creating innovative
            and reliable software solutions. Our mission is to empower
            businesses with the tools they need to thrive in a digital-first world.
          </p>
          <div className="mt-8 flex items-center gap-4">
             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-foreground">
                <Building className="h-8 w-8"/>
            </div>
            <div>
                 <h3 className="font-bold text-foreground">Our Vision</h3>
                 <p className="text-muted-foreground">To build a secure and efficient digital future for everyone.</p>
            </div>
          </div>
           <Button asChild className="mt-8 w-fit">
              <Link href="https://sedgent.co.za/" target="_blank" rel="noopener noreferrer">
                Visit Sedge Enterprise
                <ArrowRight />
              </Link>
            </Button>
        </div>
        <div className="relative flex items-center justify-center rounded-lg bg-muted/50 p-8">
            <Image
                src="https://picsum.photos/seed/sedge/600/400"
                alt="Sedge Enterprise Team"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
                data-ai-hint="corporate team"
            />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactImage = placeholderImageData.placeholderImages.find(
    (p) => p.id === "contact-illustration"
  );
  return (
    <section id="contact" className="w-full bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Secure Your Business?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team is here to answer your questions and help you get started
            with Secure360.
          </p>
          {contactImage && (
            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={contactImage.imageUrl}
                alt={contactImage.description}
                fill
                className="object-cover"
                data-ai-hint={contactImage.imageHint}
              />
            </div>
          )}
        </div>
        <div className="flex items-center">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="w-full space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Hamzah Mahomed" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hamzah.m@sedgent.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your security needs..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="button" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Secure360Logo />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Secure360. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center md:items-end">
          <p className="text-xs text-muted-foreground">Designed by Sedge Enterprise</p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
