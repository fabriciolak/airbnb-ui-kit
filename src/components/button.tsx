import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { tw } from "../lib/utils";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center rounded-lg px-6 py-4 text-xs font-semibold focus:outline-2 focus:outline-neutral-04 focus:ring-2 focus:ring-shade-02 focus:ring-offset-1 disabled:bg-neutral-03 disabled:text-shade-01 ",
  variants: {
    variant: {
      default:
        "bg-gradient-radial-02 text-shade-01 hover:bg-gradient-radial-03 active:bg-gradient-radial-01",
      secondary: "bg-shade-02 text-shade-01",
      tertiary:
        "border border-shade-02 text-shade-02 disabled:border-neutral-03",
    },
    fullWidth: {
      true: "w-full px-0",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    fullWidth: false,
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  fullWidth: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "default", fullWidth, className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={tw(buttonVariants({ variant, className, fullWidth }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
