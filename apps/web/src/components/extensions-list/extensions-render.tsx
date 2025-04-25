"use client";

import { Extension, ExtensionEntity } from "@/entities/extension.entity";
import { AppFilter } from "@/shared/enums/app.enum";
import { useMemo } from "react";
import { ExtensionItem } from "./extension-item";

import { Text } from "@browser-extensions/ui/text";

interface ExtensionsRenderProps {
  extensions: Extension[];
  currentFilter?: AppFilter;
}

export function ExtensionsRender(props: Readonly<ExtensionsRenderProps>) {
  const { extensions, currentFilter = AppFilter.All } = props;

  const filteredExtensions = useMemo(() => {
    if (currentFilter === AppFilter.All) {
      return extensions;
    }

    if (currentFilter === AppFilter.Active) {
      return extensions.filter((extension) => extension.isActive);
    }

    return extensions.filter((extension) => !extension.isActive);
  }, [extensions, currentFilter]);

  if (filteredExtensions.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Text className="text-3xl text-400 text-200">No extensions found</Text>
      </div>
    );
  }

  return (
    <ul className="gap-150 grid grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 items-center justify-center flex-wrap">
      {filteredExtensions.map((extension) => (
        <li className="w-full h-full" key={extension.name}>
          <ExtensionItem extension={new ExtensionEntity(extension)} />
        </li>
      ))}
    </ul>
  );
}
