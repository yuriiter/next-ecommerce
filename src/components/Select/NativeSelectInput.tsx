import React, { ChangeEvent } from "react";
import { SelectProps } from "./Select";
import { SelectInput } from "./SelectInput";
import { cn } from "@/utils";

type NativeSelectInputProps = Omit<SelectProps, "placement">;

export const NativeSelectInput = ({
  placeholder,
  value,
  onChange,
  options,
  className,
  disabled,
}: NativeSelectInputProps) => {
  const onNativeSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(
      options.find((option) =>
        typeof option === "string"
          ? option === e.target.value
          : option.value === e.target.value,
      ),
    );
  };
  return (
    <div className={cn(["select-wrapper--native", className])}>
      <SelectInput
        isDropdownOpen={false}
        toggleDropdownOpen={() => null}
        value={typeof value === "string" ? value : value?.value}
        placeholder={placeholder}
      />
      <select
        disabled={disabled}
        value={typeof value === "string" ? value : value?.value}
        onChange={onNativeSelectChange}
      >
        {options.map((option, idx) => (
          <option
            key={idx}
            value={typeof option === "string" ? option : option.value}
          >
            {typeof option === "string" ? option : option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
