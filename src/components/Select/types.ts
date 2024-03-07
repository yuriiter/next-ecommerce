import { ReactNode } from "react";

export type SelectOption =
  | {
      value: string;
      label: string;
      icon?: ReactNode;
    }
  | string;

export type SelectInputProps = {
  isDropdownOpen: boolean;
  toggleDropdownOpen: () => void;
  value: string | undefined;
  placeholder?: string;
};

export type RenderInputFunction = (inputProps: SelectInputProps) => ReactNode;
