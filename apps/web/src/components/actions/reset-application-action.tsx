"use client";

import { useExtensionsStore } from "@/providers/extensions-provider";
import { APP_EXTENSIONS } from "@/shared/app.constants";
import { Button } from "@browser-extensions/ui/button";
import { ListRestart } from "lucide-react";
import { useCallback } from "react";

export function ResetApplicationAction() {
  const setExtensions = useExtensionsStore((store) => store.setExtensions);
  const isDefaultExtensions = useExtensionsStore((store) => store.isDefault);

  const resetExtensionsToDefault = useCallback(() => {
    setExtensions(APP_EXTENSIONS, true);
  }, [setExtensions]);

  if (isDefaultExtensions) {
    return null;
  }

  return (
    <Button
      type="button"
      className="w-[50px] h-[50px]"
      variant="toggle"
      size="md"
      onClick={resetExtensionsToDefault}
    >
      <span>
        <ListRestart className="h-5 w-5" />
      </span>
    </Button>
  );
}
