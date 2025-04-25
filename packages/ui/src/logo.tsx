import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { LogoRawIcon } from "@browser-extensions/design-system/logo-raw-icon";

const logoVariants = cva("flex items-center gap-x-150", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
  className?: string;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>((props, ref) => {
  const { className, variant, ...rest } = props;

  return (
    <div
      ref={ref}
      data-component="logo"
      data-variant={variant}
      className={logoVariants({ variant, className })}
      {...rest}
    >
      <LogoRawIcon className="h-10 w-10 text-logo-base" data-icon />

      <h2
        className="block max-[300px]:hidden text-2xl text-logo-text font-geologica font-semibold"
        data-title
      >
        Extensions
      </h2>
    </div>
  );
});

Logo.displayName = "Logo";

export { Logo, logoVariants };
