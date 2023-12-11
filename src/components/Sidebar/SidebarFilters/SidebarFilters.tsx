import React from "react";
import { SidebarCheckbox } from "./SidebarCheckbox";
import { SidebarRange } from "./SidebarRange";
import { SidebarInputs } from "../types";
import { SidebarInputGroup } from "./SidebarInputGroup";
import { cn } from "@/utils";
import { Sidebar } from "..";

type SidebarFiltersProps = {
  className?: string;
  inputs: SidebarInputs;
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
  console.log(hidden);
  return (
    <>
      <Sidebar hidden={hidden} className={className}>
        <div className="sidebar__filters">
          {Object.entries(inputs || {}).map(([inputGroupName, groupInputs]) => (
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
