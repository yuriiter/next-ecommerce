import React, { ReactNode, useRef, useState } from "react";
import { ArrowDownIcon } from "../svg/icons";
import { Dropdown } from "./Dropdown";
import { useClickOutside } from "@/hooks/useClickOutside";

type SelectWrapperProps = {
  value: string | undefined;
  placeholder?: string;
  children: ReactNode;
};

export const SelectWrapper = ({
  value,
  placeholder,
  children,
}: SelectWrapperProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(selectWrapperRef, () => setIsDropdownOpen(false));

  const toggleDropdownOpen = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div ref={selectWrapperRef} className="select">
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
      <Dropdown open={isDropdownOpen}>{children}</Dropdown>
    </div>
  );
};
