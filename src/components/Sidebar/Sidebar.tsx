import React from "react";
import { SidebarCheckbox } from "./SidebarCheckbox";
import { SidebarRange } from "./SidebarRange";
import { SidebarInputs } from "./types";
import { SidebarInputGroup } from "./SidebarInputGroup";

type SidebarProps = {
  className?: string;
  inputs: SidebarInputs;
  onChangeFilters: (
    inputGroupName: string,
    inputName: string,
    newValue: boolean | number
  ) => void;
  hidden?: boolean;
};

export const Sidebar = ({
  inputs,
  className = "",
  onChangeFilters,
  hidden = false,
}: SidebarProps) => {
  return (
    <>
      <div
        className={`sidebar__placeholder ${
          hidden ? "sidebar__placeholder--hidden" : ""
        }`}
      ></div>
      <aside
        className={`sidebar ${className} ${hidden ? "sidebar--hidden" : ""}`}
      >
        <div className="sidebar__input-groups">
          {Object.entries(inputs || {}).map(([inputGroupName, groupInputs]) => (
            <SidebarInputGroup
              key={inputGroupName}
              inputGroupName={inputGroupName}
              groupInputs={groupInputs}
              onChangeFilters={onChangeFilters}
            />
          ))}
        </div>
      </aside>
    </>
  );
};
