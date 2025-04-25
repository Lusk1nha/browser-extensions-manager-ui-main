import { APP_FILTERS } from "@/shared/app.constants";

import { Title } from "@browser-extensions/ui/title";
import { ExtensionItem } from "./extension-item";

export function ExtensionList() {
  return (
    <div className="w-full flex items-center justify-center sm:!justify-between flex-col sm:flex-row gap-x-200 gap-y-300 flex-wrap">
      <Title className="text-center" size="md">
        Extensions List
      </Title>

      <div className="items-center justify-center flex gap-150 flex-wrap">
        {APP_FILTERS.map((filter) => (
          <ExtensionItem
            key={filter.name}
            name={filter.name}
            description={filter.description}
          >
            {filter.label}
          </ExtensionItem>
        ))}
      </div>
    </div>
  );
}
