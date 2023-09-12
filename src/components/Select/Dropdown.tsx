import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
} from "react";

type DropdownProps = {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

type DropDownContextType = {
  dropdownOpen: boolean;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

export const DropdownContext = createContext<DropDownContextType>({
  dropdownOpen: false,
  setDropdownOpen: () => null,
});

export const Dropdown = ({
  children,
  open,
  setOpen,
  className = "",
}: DropdownProps) => {
  return (
    <DropdownContext.Provider
      value={{ dropdownOpen: open, setDropdownOpen: setOpen }}
    >
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
