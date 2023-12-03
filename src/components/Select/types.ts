import { ReactNode } from "react";

export type SelectOption =
  | {
      value: string;
      label: string;
      icon?: ReactNode;
    }
  | string;
