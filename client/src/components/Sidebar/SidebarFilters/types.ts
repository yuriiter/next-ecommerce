import { SidebarInputGroup as SidebarInputGroupData } from "../types";

export type SidebarFiltersProps = {
  className?: string;
  inputs: SidebarInputGroupData[];
  onChangeFilters: (key: string, newValue: boolean | number) => void;
};
