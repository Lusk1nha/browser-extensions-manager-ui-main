import { AppElementFilter } from "@/shared/app.constants";
import { ExtensionsFilter } from "./extensions-filter";

interface ExtensionListActionsProps {
  filters: AppElementFilter[];
}

export function ExtensionsListActions(
  props: Readonly<ExtensionListActionsProps>
) {
  const { filters } = props;

  return (
    <ul className="items-center justify-center flex gap-150 flex-wrap">
      {filters.map((filter) => (
        <li key={filter.name}>
          <ExtensionsFilter name={filter.name} description={filter.description}>
            {filter.label}
          </ExtensionsFilter>
        </li>
      ))}
    </ul>
  );
}
