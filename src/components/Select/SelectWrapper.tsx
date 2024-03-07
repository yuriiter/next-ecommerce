import React, { ReactNode, useCallback, useRef, useState } from "react";
import { Dropdown } from "./Dropdown/Dropdown";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/utils";
import { useKeyEvent } from "@/hooks/useKeyEvent";
import { SelectInput } from "./SelectInput";
import { Placement } from "@/types/common";
import { RenderInputFunction } from "./types";

type SelectWrapperProps = {
  value: string | undefined;
  placeholder?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  placement?: Placement;
  renderInput?: RenderInputFunction;
};

export const SelectWrapper = ({
  value,
  placeholder,
  children,
  className,
  disabled = false,
  placement,
  renderInput,
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
      {renderInput?.({
        isDropdownOpen,
        toggleDropdownOpen,
        value,
        placeholder,
      }) ?? (
        <SelectInput
          isDropdownOpen={isDropdownOpen}
          toggleDropdownOpen={toggleDropdownOpen}
          value={value}
          placeholder={placeholder}
        />
      )}
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
