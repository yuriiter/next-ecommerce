export type SidebarInputType = "switch" | "range";

export type SidebarInput = {
  name: string;
  inputType: SidebarInputType;
  numOfItemsOfType?: number;
} & (
  | {
      inputType: "switch";
      value: boolean;
    }
  | {
      inputType: "range";
      value: number;
    }
);

export type SidebarInputs = Record<string, SidebarInput[]>;
