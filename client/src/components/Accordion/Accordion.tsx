import { cn } from "@/utils";
import React, { Children } from "react";
import { ReactElement, useState } from "react";
import { AccordionSummaryProps } from "./AccordionSummary";
import { AccordionDetailProps } from "./AccordionDetail";

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
    | ReactElement<AccordionSummaryProps>
    | [ReactElement<AccordionSummaryProps>, ReactElement<AccordionDetailProps>];

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

  const childrenArray = Array.isArray(children)
    ? Children.toArray(children)
    : Children.toArray([children]);

  const accordionSummary = React.cloneElement(
    childrenArray[0] as ReactElement<AccordionSummaryProps>,
    {
      expanded,
      handleChange,
    }
  );

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
