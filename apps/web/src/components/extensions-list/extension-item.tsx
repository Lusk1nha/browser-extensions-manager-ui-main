import { ExtensionEntity } from "@/entities/extension.entity";
import { Card } from "@browser-extensions/ui/card";
import { Title } from "@browser-extensions/ui/title";
import { Text } from "@browser-extensions/ui/text";

import { Switch } from "@browser-extensions/ui/switch";

import { TextHelper } from "@browser-extensions/utils/text";

import Image from "next/image";
import { Button } from "@browser-extensions/ui/button";
import { useExtensionsStore } from "@/providers/extensions-provider";
import { useCallback } from "react";

interface ExtensionItemProps {
  extension: ExtensionEntity;
}

export function ExtensionItem(props: Readonly<ExtensionItemProps>) {
  const { extension } = props;

  const updateExtension = useExtensionsStore((store) => store.updateExtension);
  const removeExtension = useExtensionsStore((store) => store.removeExtension);

  const shortenedDescription = TextHelper.getShortenedText(
    extension.description,
    100
  );

  const handleRemoveExtension = useCallback(() => {
    removeExtension(extension.id);
  }, [removeExtension, extension.id]);

  const handleUpdateActiveExtension = useCallback(() => {
    updateExtension(extension.id, {
      name: extension.name,
      logo: extension.logo,
      description: extension.description,
      isActive: !extension.isActive,
    });
  }, [updateExtension, extension]);

  return (
    <Card
      className="min-h-[200px] h-full flex flex-col justify-between gap-y-300"
      variant="primary"
      size="fit"
    >
      <section className="items-start flex gap-x-200">
        <Image
          src={extension.logo}
          width={60}
          height={60}
          alt={extension.name}
        />

        <div className="flex flex-col gap-y-100 overflow-hidden">
          <Title size="sm">{extension.name}</Title>
          <Text>{shortenedDescription}</Text>
        </div>
      </section>

      <div className="flex items-center justify-between ">
        <Button
          type="button"
          className="!h-[38px]"
          size="md"
          variant="outline"
          onClick={handleRemoveExtension}
        >
          Remove
        </Button>

        <Switch
          name={extension.name}
          checked={extension.isActive}
          onChange={handleUpdateActiveExtension}
        />
      </div>
    </Card>
  );
}
