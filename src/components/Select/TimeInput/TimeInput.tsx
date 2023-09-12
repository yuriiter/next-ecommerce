import React, { useMemo } from "react";
import { generateTimeOptions, timeAsSelectOption } from "./utils";
import { Select } from "../Select";
import { SelectOption } from "../types";

type TimeInputProps = {
  placeholder?: string;
  value: SelectOption | undefined;
  onChange: (newValue: SelectOption) => void;
};

export const TimeInput = ({ placeholder, value, onChange }: TimeInputProps) => {
  const timeOptions: SelectOption[] = useMemo(
    () => generateTimeOptions().map((value) => timeAsSelectOption(value)),
    []
  );

  const handleChange = (selectedOption: SelectOption | undefined) => {
    if (!selectedOption) return;
    onChange(selectedOption);
  };

  return (
    <Select
      options={timeOptions}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
