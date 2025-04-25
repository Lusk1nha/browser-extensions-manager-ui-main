import { cn } from "@browser-extensions/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "flex items-center justify-center font-normal focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "border rounded-full bg-button-default-bg hover:bg-button-default-bg-hover text-button-default-text border-button-default-border focus:ring-offset-button-default-ring",
        active:
          "rounded-full bg-button-active-bg hover:bg-button-active-bg-hover text-button-active-text border-button-active-border focus:ring-offset-button-active-ring",
        toggle:
          "rounded-12 bg-button-default-bg hover:bg-button-default-bg-hover text-button-default-text border-button-default-border focus:ring-offset-button-default-ring",
        outline:
          "rounded-full bg-transparent border text-button-default-text border-button-default-border focus:ring-offset-button-default-ring",
      },
      size: {
        default: "h-[46px] px-5 text-xl -tracking-[0.3px]",
        md: "h-[50px] px-4 text-base font-medium -tracking-[0.2px]",
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
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;

  return (
    <button
      ref={ref}
      data-component="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
