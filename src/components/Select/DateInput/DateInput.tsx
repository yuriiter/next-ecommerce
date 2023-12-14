import React from "react";
import { dateToString } from "./utils";
import { Calendar } from "./Calendar";
import { SelectWrapper } from "../SelectWrapper";

type DateInputProps = {
  placeholder?: string;
  min?: Date;
  max?: Date;
  value: Date | undefined;
  onChange: (newValue: Date) => void;
  className?: string;
  disabled?: boolean;
};

export const DateInput = ({
  placeholder,
  min = new Date(),
  max,
  value,
  onChange,
  className,
  disabled = false,
}: DateInputProps) => {
  const valueAsString = value ? dateToString(value) : value;

  return (
    <SelectWrapper
      className={className}
      value={valueAsString}
      placeholder={placeholder}
      disabled={disabled}
    >
      <Calendar min={min} max={max} value={value} onChange={onChange} />
    </SelectWrapper>
  );
};
