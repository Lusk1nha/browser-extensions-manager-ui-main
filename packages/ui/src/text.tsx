import { cn } from "@browser-extensions/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const textVariants = cva("font-noto-sans font-normal", {
  variants: {
    variant: {
      default: "text-text-color",
    },
    size: {
      default: "text-base -tracking-[0.5px]",
      md: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  className?: string;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;

  return (
    <h2
      ref={ref}
      data-component="Text"
      data-variant={variant}
      className={cn(
        textVariants({
          variant,
          size,
          className,
        })
      )}
      {...rest}
    />
  );
});

Text.displayName = "Text";

export { Text, textVariants };
