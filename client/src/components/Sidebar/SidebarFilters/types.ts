import { SidebarInputGroup as SidebarInputGroupData } from "../types";

export type SidebarFiltersProps = {
  className?: string;
  inputs: SidebarInputGroupData[];
  onChangeFilters: (
    inputGroupName: string,
    inputName: string,
    newValue: boolean | number,
  ) => void;
};
