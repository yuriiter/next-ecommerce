import React, { type PropsWithChildren } from "react";
import { SidebarFilters } from "..";
import { SidebarFiltersProps } from "./types";

type WithSidebarFiltersProps = PropsWithChildren & SidebarFiltersProps;

export const WithSidebarFilters = ({
  children,
  inputs,
  onChangeFilters,
}: WithSidebarFiltersProps) => {
  return (
    <div className="with-sidebar">
      <SidebarFilters inputs={inputs} onChangeFilters={onChangeFilters} />

      <div className="with-sidebar__content">{children}</div>
    </div>
  );
};
