"use client";

import { Button } from "@browser-extensions/ui/button";
import { MoonIcon } from "@browser-extensions/design-system/moon-icon";
import { SunIcon } from "@browser-extensions/design-system/sun-icon";

import { useTheme } from "next-themes";
import { useCallback } from "react";

export function ThemeAction() {
  const { theme, setTheme, systemTheme } = useTheme();

  const handleThemeChange = useCallback(() => {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark");
      return;
    }

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
      <MoonIcon className="h-5 w-5 flex dark:!hidden" />
      <SunIcon className="h-5 w-5 hidden dark:!flex" />
    </Button>
  );
}
