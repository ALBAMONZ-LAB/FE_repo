import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "block w-full rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-input bg-background text-foreground",
        error: "border border-red-500 bg-red-50 text-red-900",
        success: "border border-green-500 bg-green-50 text-green-900",
        warning: "border border-yellow-500 bg-yellow-50 text-yellow-900",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-5 text-lg",
      },
      width: {
        full: "w-full",
        auto: "w-auto",
        half: "w-1/2",
        custom: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      width: "half",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"| "width">,
    VariantProps<typeof inputVariants> {
        customWidth?: string;
    }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, width, customWidth, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ variant, size, width }), customWidth && customWidth, className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
