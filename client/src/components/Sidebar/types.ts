export type SidebarInputType = "switch" | "range";

export type SidebarInput = {
  name: string;
  value: boolean | number;
  key: string;
};

export type SidebarInputGroup = { groupName: string; inputs: SidebarInput[] };
