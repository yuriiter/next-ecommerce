import React, { useCallback } from "react";
import { SidebarInput } from "../types";
import { SidebarCheckbox } from "./SidebarCheckbox";
import { SidebarRange } from "./SidebarRange";

type SidebarInputGroupProps = {
  inputGroupName: string;
  groupInputs: SidebarInput[];
  onChangeFilters: (
    inputGroupName: string,
    inputName: string,
    newValue: boolean | number,
  ) => void;
};

export const SidebarInputGroup = ({
  inputGroupName,
  groupInputs,
  onChangeFilters,
}: SidebarInputGroupProps) => {
  return (
    <div className="sidebar__input-group">
      <p className="sidebar__input-group-name">{inputGroupName}</p>
      <div className="sidebar__inputs">
        {groupInputs.map(({ name, inputType, numOfItemsOfType, value }) => {
          const onChangeInput = (newValue: boolean | number) => {
            onChangeFilters(inputGroupName, name, newValue);
          };
          if (inputType === "switch")
            return (
              <SidebarCheckbox
                key={`${inputGroupName}-${name}`}
                label={name}
                value={value}
                numOfItemsOfType={numOfItemsOfType}
                onChange={onChangeInput}
              />
            );
          else
            return (
              <SidebarRange
                key={`${inputGroupName}-${name}`}
                label={name}
                value={value}
                onChange={onChangeInput}
              />
            );
        })}
      </div>
    </div>
  );
};
