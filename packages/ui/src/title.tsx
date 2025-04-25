import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const titleVariants = cva("font-noto-sans font-bold -tracking-[1px]", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "text-2xl",
      md: "text-[34px]",
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
      className={titleVariants({
        variant,
        size,
        className,
      })}
      {...rest}
    />
  );
});

Title.displayName = "Title";

export { Title, titleVariants };
