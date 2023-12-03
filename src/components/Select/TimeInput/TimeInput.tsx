import React, { useMemo } from "react";
import { generateTimeOptions, timeAsSelectOption, timeAsString } from "./utils";
import { Select } from "../Select";
import { SelectOption } from "../types";

type TimeInputProps = {
  placeholder?: string;
  value: SelectOption | undefined;
  onChange: (newValue: SelectOption) => void;
  className?: string;
};

export const TimeInput = ({
  placeholder,
  value,
  onChange,
  className,
}: TimeInputProps) => {
  const timeOptions: SelectOption[] = useMemo(
    () => generateTimeOptions().map((value) => timeAsString(value)),
    [],
  );

  const handleChange = (selectedOption: SelectOption | undefined) => {
    if (!selectedOption) return;
    onChange(selectedOption);
  };

  return (
    <Select
      className={className}
      options={timeOptions}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
