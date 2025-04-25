import { cn } from "@browser-extensions/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const cardVariants = cva("flex  border", {
  variants: {
    variant: {
      default:
        "bg-card-base text-card-text border-card-border shadow-card-shadow dark:border-none dark:shadow-none rounded-10 md:rounded-12 lg:rounded-20",
      primary:
        "bg-card-base text-card-text border-card-border shadow-card-shadow dark:shadow-none rounded-20",
    },
    size: {
      default: "px-150 py-100",
      fit: "p-250",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, size, variant, ...rest } = props;

  return (
    <div
      ref={ref}
      data-component="card"
      data-variant={variant}
      className={cn(cardVariants({ variant, size, className }))}
      {...rest}
    />
  );
});

Card.displayName = "Card";

export { Card, cardVariants };
