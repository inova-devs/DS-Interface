"use client";
import React from "react";

import { cn } from "@inovadevs-org/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2  focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100  disabled:opacity-50",

  {
    variants: {
      variant: {
        default:
          "bg-sky-9 hover:bg-sky-10 text-slate-12 transition-colors duration-300 focus:ring-sky-7",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "bg-sky-1 border border-sky-7 hover:border-sky-8 text-sky-11 transition-colors duration-300",
        subtle: "bg-slate-100 text-slate-900 hover:bg-slate-200",
        ghost:
          "bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent",
        link: "bg-transparent text-slate-900 hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xl: "h-11 px-16 rounded-md",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
