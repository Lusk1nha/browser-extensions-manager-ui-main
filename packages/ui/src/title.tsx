import { cn } from "@browser-extensions/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const titleVariants = cva("font-noto-sans font-bold -tracking-[1px]", {
  variants: {
    variant: {
      default: "text-title-color",
    },
    size: {
      sm: "text-lg -tracking-[0.2px]",
      default: "text-2xl -tracking-[1px]",
      md: "text-[34px] -tracking-[1px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  className?: string;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;

  return (
    <h2
      ref={ref}
      data-component="title"
      data-variant={variant}
      className={cn(
        titleVariants({
          variant,
          size,
          className,
        })
      )}
      {...rest}
    />
  );
});

Title.displayName = "Title";

export { Title, titleVariants };
