import React, { ChangeEvent } from "react";
import { SelectInput } from "./SelectInput";
import { cn } from "@/utils";
import { SelectProps } from "./types";

type NativeSelectInputProps = Omit<SelectProps, "placement">;

export const NativeSelectInput = ({
  placeholder,
  value,
  onChange,
  options,
  className,
  disabled,
  renderInput,
}: NativeSelectInputProps) => {
  const onNativeSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(
      options.find((option) =>
        typeof option === "string"
          ? option === e.target.value
          : option.value === e.target.value
      )
    );
  };
  return (
    <div className={cn(["select-wrapper--native", className])}>
      {renderInput?.({
        isDropdownOpen: false,
        toggleDropdownOpen: () => null,
        value: typeof value === "string" ? value : value?.value,
        placeholder,
      }) ?? (
        <SelectInput
          isDropdownOpen={false}
          toggleDropdownOpen={() => null}
          value={typeof value === "string" ? value : value?.value}
          placeholder={placeholder}
        />
      )}
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
