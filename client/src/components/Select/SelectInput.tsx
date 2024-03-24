import React from "react";
import { ArrowDownIcon } from "../svg/icons";
import { cn } from "@/utils";

export type SelectInputProps = {
  isDropdownOpen: boolean;
  toggleDropdownOpen: () => void;
  value: string | undefined;
  placeholder?: string;
};

export const SelectInput = ({
  isDropdownOpen,
  toggleDropdownOpen,
  value,
  placeholder,
}: SelectInputProps) => {
  return (
    <div className="select__data" onClick={toggleDropdownOpen}>
      {value && <span className="select__value">{value}</span>}
      {!value && placeholder && (
        <span className="select__placeholder">{placeholder}</span>
      )}
      <ArrowDownIcon
        className={cn([
          "select__arrow-down",
          isDropdownOpen && "select__arrow-down--rotate",
        ])}
      />
    </div>
  );
};
