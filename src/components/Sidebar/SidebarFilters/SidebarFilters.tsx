import React from "react";
import { SidebarInputGroup } from "./SidebarInputGroup";
import { Sidebar } from "..";
import { SidebarFiltersProps } from "./types";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";

export const SidebarFilters = ({
  inputs,
  className,
  onChangeFilters,
}: SidebarFiltersProps) => {
  const router = useRouter();
  const removeAllFilters = () =>
    router.push({ pathname: router.pathname, query: "" }, undefined, {
      shallow: true,
    });

  const resetButtonDisabled = Object.keys(router.query).length === 0;

  return (
    <>
      <Sidebar className={className}>
        <div className="sidebar__filters">
          <Button
            disabled={resetButtonDisabled}
            onClick={removeAllFilters}
            variant="secondary"
          >
            Remove all filters
          </Button>
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
