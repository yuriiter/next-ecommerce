import React, { ReactNode, createContext } from "react";

type DropdownProps = {
  children: ReactNode;
  open: boolean;
  className?: string;
};

type DropDownContextValue = {
  dropdownOpen: boolean;
};

export const DropdownContext = createContext<DropDownContextValue>({
  dropdownOpen: false,
});

export const Dropdown = ({ children, open, className = "" }: DropdownProps) => {
  return (
    <DropdownContext.Provider value={{ dropdownOpen: open }}>
      <div
        tabIndex={open ? 0 : -1}
        className={`${className} select__dropdown ${
          open ? "select__dropdown--open" : ""
        }`}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
