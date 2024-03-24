import { cn } from "@/utils";
import { ReactNode } from "react";

export type AccordionDetailProps = {
  children: ReactNode;
  className?: string;
};

export const AccordionDetail = ({
  children,
  className,
}: AccordionDetailProps) => (
  <div className={cn(["accordion__detail", className])}>{children}</div>
);
