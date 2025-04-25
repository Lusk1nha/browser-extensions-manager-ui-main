import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@browser-extensions/utils/cn";

const switchVariants = cva(`relative inline-flex items-center cursor-pointer`, {
  variants: {
    variant: {
      default: "rounded-[14.5px]",
    },
    checked: {
      true: "bg-switch-active-bg",
      false: "bg-switch-inactive-bg",
    },
    size: {
      default: "w-[36px] h-5",
      sm: "h-6",
      lg: "h-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof switchVariants> {
  name: string;
  checked: boolean;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const { size, variant, checked, className, ...rest } = props;

  return (
    <label
      className={cn(switchVariants({ variant, size, checked, className }))}
      data-component="switch"
      data-variant={variant}
    >
      <input
        type="checkbox"
        checked={checked}
        className="sr-only peer"
        data-value={checked ? "true" : "false"}
        ref={ref}
        {...rest}
      />

      <div
        className={cn(
          "bg-switch-dot-bg min-w-4 min-h-4 absolute top-1/2 transform -translate-y-1/2 rounded-full transition-transform duration-200 ease-in-out",
          checked ? "right-0.5 translate-x-0" : "left-0.5 translate-x-0"
        )}
      />
    </label>
  );
});

Switch.displayName = "Switch";

export { Switch, switchVariants };
