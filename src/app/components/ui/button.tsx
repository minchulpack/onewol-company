import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "react-router";

import { cn } from "./utils";
import { useI18n } from "../../lib/i18n";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type SiteVariant = "primary" | "secondary" | "ghost";
type SiteSize = "md" | "lg";

const siteBase =
  "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const siteSizes: Record<SiteSize, string> = {
  md: "h-11 px-5 text-sm tracking-wide",
  lg: "h-13 px-7 text-[15px] tracking-wide",
};

const siteVariants: Record<SiteVariant, string> = {
  primary:
    "bg-[var(--brand-charcoal)] text-[var(--brand-warm-white)] hover:bg-[var(--brand-accent)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(154,122,86,0.5)]",
  secondary:
    "bg-transparent text-[var(--brand-charcoal)] border border-[var(--brand-charcoal)]/15 hover:border-[var(--brand-charcoal)]/40 hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-[var(--brand-charcoal)] hover:text-[var(--brand-accent)]",
};

function isSiteButton(variant?: string | null, size?: string | null) {
  return (
    variant === "primary" ||
    (variant === "secondary" && (size === "md" || size === "lg")) ||
    (variant === "ghost" && (size === "md" || size === "lg")) ||
    size === "md"
  );
}

function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  Omit<VariantProps<typeof buttonVariants>, "variant" | "size"> & {
    variant?: VariantProps<typeof buttonVariants>["variant"] | SiteVariant;
    size?: VariantProps<typeof buttonVariants>["size"] | SiteSize;
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  const variantName = String(variant);
  const sizeName = String(size);

  if (isSiteButton(variantName, sizeName)) {
    return (
      <Comp
        data-slot="button"
        className={cn(
          siteBase,
          siteSizes[(sizeName as SiteSize) || "md"],
          siteVariants[(variantName as SiteVariant) || "primary"],
          className,
        )}
        {...props}
      />
    );
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  variant?: SiteVariant;
  size?: SiteSize;
  className?: string;
  onClick?: () => void;
}

function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  onClick,
}: ButtonLinkProps) {
  const { pathFor, locale } = useI18n();
  const buttonClass = cn(siteBase, siteSizes[size], siteVariants[variant], className);

  if (href.startsWith("http") || href.startsWith("mailto")) {
    return (
      <a href={href} className={buttonClass} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link to={pathFor(locale, href)} className={buttonClass} onClick={onClick}>
      {children}
    </Link>
  );
}

export { Button, ButtonLink, buttonVariants };
