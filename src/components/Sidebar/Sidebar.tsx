import React from "react";
import { SidebarCheckbox } from "./SidebarCheckbox";
import { SidebarRange } from "./SidebarRange";
import { SidebarInputs } from "./types";
import { SidebarInputGroup } from "./SidebarInputGroup";
import { cn } from "@/utils";

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
  className,
  onChangeFilters,
  hidden = false,
}: SidebarProps) => {
  return (
    <>
      <div
        className={cn([
          "sidebar__placeholder",
          hidden && "sidebar__placeholder--hidden",
        ])}
      ></div>
      <aside
        className={cn(["sidebar", hidden && "sidebar--hidden", className])}
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
