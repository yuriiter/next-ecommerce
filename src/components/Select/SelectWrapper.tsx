import React, { ReactNode, useCallback, useRef, useState } from "react";
import { ArrowDownIcon } from "../svg/icons";
import { Dropdown } from "./Dropdown/Dropdown";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/utils";
import { useKeyEvent } from "@/hooks/useKeyEvent";
import { DropdownPlacement } from "./Dropdown/types";
import { SelectInput } from "./SelectInput";

type SelectWrapperProps = {
  value: string | undefined;
  placeholder?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  placement?: DropdownPlacement;
};

export const SelectWrapper = ({
  value,
  placeholder,
  children,
  className,
  disabled = false,
  placement,
}: SelectWrapperProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(selectWrapperRef, () => setIsDropdownOpen(false));
  const toggleDropdownOpen = () =>
    !disabled && setIsDropdownOpen((prev) => !prev);
  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  useKeyEvent("Escape", closeDropdown);

  return (
    <div
      ref={selectWrapperRef}
      className={cn([
        "select",
        isDropdownOpen && "select--open",
        disabled && "select--disabled",
        className,
      ])}
    >
      <SelectInput
        isDropdownOpen={isDropdownOpen}
        toggleDropdownOpen={toggleDropdownOpen}
        value={value}
        placeholder={placeholder}
      />
      <Dropdown
        placement={placement}
        open={isDropdownOpen}
        setOpen={setIsDropdownOpen}
      >
        {children}
      </Dropdown>
    </div>
  );
};
