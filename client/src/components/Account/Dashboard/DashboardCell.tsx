import { GridCell } from "@/components/Grid/GridCell";
import { GridCellProps } from "@/components/Grid/types";
import React from "react";

type DashboardCellProps = GridCellProps;

export const DashboardCell = () => {
  return (
    <GridCell className="dashboard__cell" gridRow="span 2">
      Cell 1
    </GridCell>
  );
};
