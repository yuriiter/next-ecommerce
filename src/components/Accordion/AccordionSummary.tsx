import { cn } from "@/utils";
import { ReactNode } from "react";
import { PointMark } from "../PointMark";

export type AccordionSummaryProps = {
  expanded?: boolean;
  handleChange?: () => void;
  children: ReactNode;
  className?: string;
};

export const AccordionSummary = ({
  expanded,
  handleChange,
  children,
  className,
}: AccordionSummaryProps) => {
  return (
    <div
      className={cn(["accordion__summary", className])}
      onClick={handleChange}
    >
      <PointMark variant={expanded ? "dark" : "empty"} />
      {children}
    </div>
  );
};
