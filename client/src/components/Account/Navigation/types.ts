import { ReactNode } from "react";

export type NavigationItemData = {
  icon: ReactNode;
  label: string;
  path: string;
  component?: ReactNode;
};

export type NavigationMap = Record<string, NavigationItemData[]>;
