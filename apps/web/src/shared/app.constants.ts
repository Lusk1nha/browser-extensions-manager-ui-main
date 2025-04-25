import { AppFilter } from "./enums/app.enum";

export interface AppElementFilter {
  name: AppFilter;
  label: string;
  description?: string;
}

export const APP_FILTERS = [
  {
    name: AppFilter.All,
    label: "All",
    description: "All extensions",
  },
  {
    name: AppFilter.Active,
    label: "Active",
    description: "Active extensions",
  },
  {
    name: AppFilter.Inactive,
    label: "Inactive",
    description: "Inactive extensions",
  },
] as const satisfies AppElementFilter[];
