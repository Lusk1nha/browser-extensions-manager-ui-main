import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const cardVariants = cva(
  `
    flex px-150 py-100 items-center
    rounded-10 md:rounded-12 lg:rounded-20 border
  `,
  {
    variants: {
      variant: {
        default:
          "bg-card-base text-card-text border-card-border shadow-card-shadow dark:border-none dark:shadow-none",
      },
      size: {
        default: "h-[66px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

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
      className={cardVariants({ variant, size, className })}
      {...rest}
    />
  );
});

Card.displayName = "Card";

export { Card, cardVariants };
