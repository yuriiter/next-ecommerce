import React, { useState } from "react";
import { ArrowDownIcon } from "../svg/icons";

type SelectProps = {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
};

export const Select = ({ value, placeholder, onChange }: SelectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdownOpen = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div className="select">
      <div className="select__data" onClick={toggleDropdownOpen}>
        {value && <span className="select__value">{value}</span>}
        {!value && placeholder && (
          <span className="select__placeholder">{placeholder}</span>
        )}
        <ArrowDownIcon
          className={`select__arrow-down ${
            isDropdownOpen ? "select__arrow-down--rotate" : ""
          }`}
        />
      </div>
      <div
        tabIndex={isDropdownOpen ? 0 : -1}
        className={`calendar select__dropdown ${
          isDropdownOpen ? "select__dropdown--open" : ""
        }`}
      ></div>
    </div>
  );
};
