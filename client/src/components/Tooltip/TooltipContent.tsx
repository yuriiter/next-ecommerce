import { cn } from "@/utils";
import { Placement } from "@/types/common";
import React, { ReactNode } from "react";
import { AnimatedDisplay } from "../AnimatedDisplay";
import { Typography } from "../Typography/Typography";

type TooltipContentProps = {
  followMouse: boolean;
  leftTop: [number, number];
  placement: Placement;
  open: boolean;
  content: ReactNode;
  showArrow: boolean;
};

export const TooltipContent = ({
  followMouse,
  leftTop,
  placement,
  open,
  content,
  showArrow,
}: TooltipContentProps) => {
  return (
    <AnimatedDisplay
      display={open}
      style={
        followMouse
          ? { left: `${leftTop[0]}px`, top: `${leftTop[1]}px` }
          : undefined
      }
      className={cn([
        "tooltip__content",
        `tooltip__content--${placement}`,
        followMouse && "tooltip__content--follow-mouse",
        showArrow && "tooltip__content--show-arrow",
        typeof open === "boolean" && "tooltip__content--manual-open",
      ])}
    >
      {typeof content === "string" || typeof content === "number" ? (
        <Typography primary0>{content}</Typography>
      ) : (
        content
      )}
    </AnimatedDisplay>
  );
};
