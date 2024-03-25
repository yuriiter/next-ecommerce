import React, { Fragment } from "react";
import { SelectWrapper } from "./SelectWrapper";
import { Option } from "./Option";
import { useMQ } from "@/hooks/mediaQuery/useMQ";
import { NativeSelectInput } from "./NativeSelectInput";
import { SelectProps } from "./types";

export const Select = ({
  placeholder,
  value,
  onChange,
  options,
  className,
  disabled = false,
  placement,
  forceUseNativeSelect = undefined,
  renderInput,
  renderOption,
}: SelectProps) => {
  const useNativeSelect = useMQ("MD", "max");

  if (
    forceUseNativeSelect ||
    (useNativeSelect && !disabled && forceUseNativeSelect === undefined)
  ) {
    return (
      <NativeSelectInput
        renderInput={renderInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        options={options}
        className={className}
        disabled={disabled}
      />
    );
  }

  return (
    <SelectWrapper
      value={typeof value === "string" ? value : value?.value}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      placement={placement}
      renderInput={renderInput}
    >
      <div className="select__options-wrapper">
        {options?.map((option) => {
          const selectOption = () => onChange(option);
          return (
            <Fragment key={typeof option === "string" ? option : option.value}>
              {renderOption?.({
                isSelected: option === value,
                option,
                onClick: selectOption,
              }) ?? (
                <Option
                  isSelected={option === value}
                  option={option}
                  onClick={selectOption}
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </SelectWrapper>
  );
};
