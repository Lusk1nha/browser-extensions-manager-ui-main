"use client";

import { ExtensionsHeader } from "./extensions-header";
import { ExtensionsRender } from "./extensions-render";
import { useSearchParams } from "next/navigation";
import { AppFilter } from "@/shared/enums/app.enum";
import { useExtensionsStore } from "@/providers/extensions-provider";

export function ExtensionsList() {
  const extensions = useExtensionsStore((store) => store.extensions);
  const searchParams = useSearchParams();

  const currentFilter = searchParams.get("filter") ?? AppFilter.All;

  return (
    <div className="flex flex-col w-full h-full gap-y-400">
      <ExtensionsHeader />
      <ExtensionsRender
        extensions={extensions}
        currentFilter={currentFilter as AppFilter}
      />
    </div>
  );
}
