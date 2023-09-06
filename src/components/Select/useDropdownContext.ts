import { useContext } from "react";
import { DropdownContext } from "./Dropdown";

export const useDropdownContext = () => {
  const dropdownContextValue = useContext(DropdownContext);

  return dropdownContextValue;
};
