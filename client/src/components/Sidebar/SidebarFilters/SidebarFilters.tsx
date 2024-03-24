import React from "react";
import { SidebarInputGroup } from "./SidebarInputGroup";
import { Sidebar } from "..";
import { SidebarFiltersProps } from "./types";
import { Button, ButtonWIcon } from "@/components/Button";
import { useRouter } from "next/router";
import { Close } from "@/components/svg/icons";
import { useSidebar } from "../useSidebar";

export const SidebarFilters = ({
  inputs,
  className,
  onChangeFilters,
}: SidebarFiltersProps) => {
  const { setHidden } = useSidebar();
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
          <div className="flex justify-between">
            <Button
              disabled={resetButtonDisabled}
              onClick={removeAllFilters}
              variant="secondary"
            >
              Remove all filters
            </Button>
            <ButtonWIcon
              className="sidebar__close-icon"
              icon={<Close />}
              variant="secondary"
              onClick={() => setHidden(true)}
            >
              Close
            </ButtonWIcon>
          </div>
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
