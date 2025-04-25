import { APP_FILTERS } from "@/shared/app.constants";
import { Title } from "@browser-extensions/ui/title";
import { ExtensionsListActions } from "./extensions-list-actions";

export function ExtensionsHeader() {
  return (
    <div className="w-full flex items-center justify-center sm:!justify-between flex-col sm:flex-row gap-x-200 gap-y-300 flex-wrap">
      <Title className="text-center" size="md">
        Extensions List
      </Title>

      <ExtensionsListActions filters={APP_FILTERS} />
    </div>
  );
}
