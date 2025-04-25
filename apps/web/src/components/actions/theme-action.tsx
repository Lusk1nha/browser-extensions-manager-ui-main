"use client";

import { Button } from "@browser-extensions/ui/button";
import { MoonIcon } from "@browser-extensions/design-system/moon-icon";
import { SunIcon } from "@browser-extensions/design-system/sun-icon";

import { useTheme } from "next-themes";
import { useCallback } from "react";
import { ThemeType } from "@/providers/theme-provider";

export function ThemeAction() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("dark");
  }, [theme, setTheme]);

  return (
    <Button
      type="button"
      className="w-[50px] h-[50px]"
      variant="toggle"
      size="md"
      onClick={handleThemeChange}
    >
      <span>
        <HandleButtonIcon theme={theme as ThemeType} />
      </span>
    </Button>
  );
}

interface HandleButtonIconProps {
  theme?: ThemeType;
}

function HandleButtonIcon(props: Readonly<HandleButtonIconProps>) {
  const { theme = "light" } = props;

  if (theme === "light") {
    return <MoonIcon className="h-5 w-5" />;
  }

  return <SunIcon className="h-5 w-5" />;
}
