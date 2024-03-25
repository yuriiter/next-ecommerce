import { Placement } from "@/types/common";
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

export type OptionProps = {
  onClick: () => void;
  option: SelectOption;
  isSelected: boolean;
  disabled?: boolean;
};

export type RenderInputFunction = (inputProps: SelectInputProps) => ReactNode;

export type RenderOptionFunction = (optionProps: OptionProps) => ReactNode;

export type SelectProps = {
  placeholder?: string;
  value: SelectOption | undefined;
  onChange: (newValue: SelectOption | undefined) => void;
  options: SelectOption[];
  className?: string;
  disabled?: boolean;
  placement?: Placement;
  forceUseNativeSelect?: boolean;
  renderInput?: RenderInputFunction;
  renderOption?: RenderOptionFunction;
};
