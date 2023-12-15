import React from "react";
import { dateToString } from "./utils";
import { Calendar } from "./Calendar";
import { SelectWrapper } from "../SelectWrapper";
import { DropdownPlacement } from "../Dropdown/types";

type DateInputProps = {
  placeholder?: string;
  min?: Date;
  max?: Date;
  value: Date | undefined;
  onChange: (newValue: Date) => void;
  className?: string;
  disabled?: boolean;
  placement?: DropdownPlacement;
};

export const DateInput = ({
  placeholder,
  min = new Date(),
  max,
  value,
  onChange,
  className,
  disabled = false,
  placement,
}: DateInputProps) => {
  const valueAsString = value ? dateToString(value) : value;

  return (
    <SelectWrapper
      className={className}
      value={valueAsString}
      placeholder={placeholder}
      disabled={disabled}
      placement={placement}
    >
      <Calendar min={min} max={max} value={value} onChange={onChange} />
    </SelectWrapper>
  );
};
