import { cn } from "@/utils";
import React, { Children } from "react";
import { ReactElement, useState } from "react";
import { AccordionDetailProps, AccordionSummaryProps } from ".";

type ControlledAccordionProps = {
  expanded: boolean;
  handleChange: () => void;
};

type UncontrolledAccordionProps = {
  expanded?: never;
  handleChange?: never;
};

type AccordionProps = {
  children:
    | [ReactElement<AccordionSummaryProps>, ReactElement<AccordionDetailProps>]
    | [ReactElement<AccordionSummaryProps>];

  className?: string;
} & (ControlledAccordionProps | UncontrolledAccordionProps);

export const Accordion = ({
  children,
  className,
  expanded: controlledExpanded,
  handleChange: controlledHandleChange,
}: AccordionProps) => {
  const [localExpanded, setLocalExpanded] = useState(false);
  const isControlled =
    typeof controlledExpanded === "boolean" &&
    typeof controlledHandleChange === "function";

  const expanded = isControlled ? controlledExpanded : localExpanded;
  const handleChange = isControlled
    ? controlledHandleChange
    : () => setLocalExpanded((current) => !current);

  const childrenArray = Children.toArray(children) as typeof children;
  const accordionSummary = React.cloneElement(childrenArray[0], {
    expanded,
    handleChange,
  });
  const accordionDetail = childrenArray[1];

  return (
    <div
      className={cn([
        "accordion",
        expanded && "accordion--expanded",
        className,
      ])}
      onClick={handleChange}
    >
      {accordionSummary}
      {accordionDetail}
    </div>
  );
};
