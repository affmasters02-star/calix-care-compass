import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-black uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-card hover:bg-primary/90 hover:shadow-lift hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md hover:-translate-y-0.5",
        outline:
          "border-2 border-primary/20 bg-background text-primary shadow-sm hover:border-primary/40 hover:bg-primary-soft hover:text-primary hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:-translate-y-0.5",
        ghost: "text-primary hover:bg-primary-soft hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        brand:
          "bg-gradient-brand text-primary-foreground shadow-card hover:brightness-110 hover:shadow-lift hover:-translate-y-0.5",
        accent:
          "bg-gradient-cta text-accent-foreground shadow-card hover:brightness-110 hover:shadow-lift hover:-translate-y-0.5",
        soft: "bg-primary-soft text-primary hover:bg-primary/10 hover:-translate-y-0.5",
        outlineBrand:
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
        onDark:
          "border-2 border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-12 w-12",
      },

    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
