import React from "react";
import { SidebarCheckbox } from "./SidebarCheckbox";
import { SidebarRange } from "./SidebarRange";
import { SidebarInputs } from "./types";

type SidebarProps = {
  className?: string;
  inputs: SidebarInputs;
};

export const Sidebar = ({ inputs, className = "" }: SidebarProps) => {
  return (
    <aside className={`sidebar ${className}`}>
      {Object.entries(inputs || {}).map(([inputGroupName, groupInputs]) => (
        <div key={inputGroupName} className="sidebar__input-group">
          <p className="sidebar__">{inputGroupName}</p>
          <div className="sidebar__inputs">
            {groupInputs.map(({ name, inputType, numOfItemsOfType, value }) => {
              if (inputType === "switch")
                return (
                  <SidebarCheckbox
                    key={`${inputGroupName}-${name}`}
                    label={name}
                    value={value}
                    onChange={function (newValue: boolean): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                );
              else
                return (
                  <SidebarRange
                    key={`${inputGroupName}-${name}`}
                    label={name}
                    value={value}
                    onChange={function (newValue: boolean): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
};
