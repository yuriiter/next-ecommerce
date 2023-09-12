import React from "react";
import { SelectWrapper } from "./SelectWrapper";
import { SelectOption } from "./types";
import { Option } from "./Option";

type SelectProps = {
  placeholder?: string;
  value: SelectOption | undefined;
  onChange: (newValue: SelectOption | undefined) => void;
  options: SelectOption[];
  className?: string;
};

export const Select = ({
  placeholder,
  value,
  onChange,
  options,
  className = "",
}: SelectProps) => {
  return (
    <SelectWrapper
      value={value?.value}
      placeholder={placeholder}
      className={className}
    >
      <div className="select__options-wrapper">
        {options?.map((option) => {
          const selectOption = () => onChange(option);
          return (
            <Option
              key={option.value}
              isSelected={option === value}
              option={option}
              onClick={selectOption}
            />
          );
        })}
      </div>
    </SelectWrapper>
  );
};
