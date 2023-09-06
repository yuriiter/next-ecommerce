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
};

export const DateInput = ({
  placeholder,
  min = new Date(),
  max,
  value,
  onChange,
}: DateInputProps) => {
  const valueAsString = value ? dateToString(value) : value;

  return (
    <SelectWrapper value={valueAsString} placeholder={placeholder}>
      <Calendar min={min} max={max} value={value} onChange={onChange} />
    </SelectWrapper>
  );
};
