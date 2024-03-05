import React from "react";
import { SidebarInputGroup } from "./SidebarInputGroup";
import { Sidebar } from "..";
import { SidebarFiltersProps } from "./types";

export const SidebarFilters = ({
  inputs,
  className,
  onChangeFilters,
  hidden = false,
}: SidebarFiltersProps) => {
  return (
    <>
      <Sidebar hidden={hidden} className={className}>
        <div className="sidebar__filters">
          {inputs.map(({ groupName: inputGroupName, inputs: groupInputs }) => (
            <SidebarInputGroup
              key={inputGroupName}
              inputGroupName={inputGroupName}
              groupInputs={groupInputs}
              onChangeFilters={onChangeFilters}
            />
          ))}
        </div>
      </Sidebar>
    </>
  );
};
