import { cn } from "@/utils";
import { ReactNode } from "react";

type AccordionProps = {
  children: ReactNode;
  className?: string;
};

export const Accordion = ({ children, className }: AccordionProps) => (
  <div className={cn(["accordion", className])}>{children}</div>
);
