import React, { ReactNode } from "react";
import { SelectOption } from "./types";
import { useDropdownContext } from "./useDropdownContext";
import { cn } from "@/utils";

type OptionProps = {
  onClick: () => void;
  option: SelectOption;
  isSelected: boolean;
};

export const Option = ({ onClick, option, isSelected }: OptionProps) => {
  const { setDropdownOpen } = useDropdownContext();

  const onSelectOption = () => {
    setDropdownOpen(false);
    onClick();
  };

  return (
    <div
      className={cn([
        "select__option-wrapper",
        isSelected && "select__option-wrapper--selected",
      ])}
      onClick={onSelectOption}
    >
      <span className="select__option">
        <span>{option.label}</span>
        <span>{option.icon}</span>
      </span>
    </div>
  );
};
