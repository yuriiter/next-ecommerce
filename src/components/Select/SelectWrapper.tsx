import React, { ReactNode, useCallback, useRef, useState } from "react";
import { ArrowDownIcon } from "../svg/icons";
import { Dropdown } from "./Dropdown";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/utils";
import { useKeyEvent } from "@/hooks/useKeyEvent";

type SelectWrapperProps = {
  value: string | undefined;
  placeholder?: string;
  children: ReactNode;
  className?: string;
};

export const SelectWrapper = ({
  value,
  placeholder,
  children,
  className,
}: SelectWrapperProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(selectWrapperRef, () => setIsDropdownOpen(false));
  const toggleDropdownOpen = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  useKeyEvent("Escape", closeDropdown);

  return (
    <div
      ref={selectWrapperRef}
      className={cn(["select", isDropdownOpen && "select--open", className])}
    >
      <div className="select__data" onClick={toggleDropdownOpen}>
        {value && <span className="select__value">{value}</span>}
        {!value && placeholder && (
          <span className="select__placeholder">{placeholder}</span>
        )}
        <ArrowDownIcon
          className={cn([
            "select__arrow-down",
            isDropdownOpen && "select__arrow-down--rotate",
          ])}
        />
      </div>
      <Dropdown open={isDropdownOpen} setOpen={setIsDropdownOpen}>
        {children}
      </Dropdown>
    </div>
  );
};
