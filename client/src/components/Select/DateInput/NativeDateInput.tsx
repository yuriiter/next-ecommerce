import React, { ChangeEvent } from "react";
import { SelectInput } from "../SelectInput";
import {
  dateToString,
  dateToStringForNativeInput,
  stringToDate,
} from "./utils";
import { cn } from "@/utils";
import { DateInputProps } from "./types";

type NativeDateInputProps = Omit<DateInputProps, "placement">;

export const NativeDateInput = ({
  placeholder,
  min = new Date(),
  max,
  value,
  onChange,
  className,
  disabled,
}: NativeDateInputProps) => {
  const onNativeDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValueAsDate = stringToDate(e.target.value);
    onChange(newValueAsDate);
  };
  const valueAsString = value ? dateToString(value) : "";
  const valueAsStringForNativeInput = value
    ? dateToStringForNativeInput(value)
    : "";
  return (
    <div className={cn(["select-wrapper--native", className])}>
      <SelectInput
        isDropdownOpen={false}
        toggleDropdownOpen={() => null}
        value={valueAsString}
        placeholder={placeholder}
      />
      <input
        disabled={disabled}
        type="date"
        value={valueAsStringForNativeInput}
        onChange={onNativeDateChange}
        min={dateToStringForNativeInput(min)}
        max={max ? dateToStringForNativeInput(max) : undefined}
      />
    </div>
  );
};
