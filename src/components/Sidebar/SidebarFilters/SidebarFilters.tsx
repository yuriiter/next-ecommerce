import React from "react";
import { SidebarInputGroup as SidebarInputGroupData } from "../types";
import { SidebarInputGroup } from "./SidebarInputGroup";
import { Sidebar } from "..";

type SidebarFiltersProps = {
  className?: string;
  inputs: SidebarInputGroupData[];
  onChangeFilters: (
    inputGroupName: string,
    inputName: string,
    newValue: boolean | number,
  ) => void;
  hidden?: boolean;
};

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
