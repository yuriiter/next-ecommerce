import React from "react";
import { SelectWrapper } from "./SelectWrapper";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  placeholder?: string;
  value: SelectOption | undefined;
  onChange: (newValue: SelectOption | undefined) => void;
};

export const Select = ({ placeholder, value, onChange }: SelectProps) => {
  return (
    <SelectWrapper value={value?.value} placeholder={placeholder}>
      {null}
    </SelectWrapper>
  );
};
