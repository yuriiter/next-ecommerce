import React, { ReactNode } from "react";
import { cn } from "@/utils";
import { Placement } from "@/types/common";
import { Typography } from "../Typography/Typography";
import { useFollowMouseTooltip } from "./useFollowMouseTooltip";

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  followMouse?: boolean;
  placement?: Placement;
  className?: string;
  showArrow?: boolean;
  manualOpen?: boolean | undefined;
};

export const Tooltip = ({
  children,
  content,
  followMouse = false,
  placement = "center-bottom",
  showArrow = true,
  className,
  manualOpen: controlledManualOpen = undefined,
}: TooltipProps) => {
  const { leftTop, tooltipWrapperRef } = useFollowMouseTooltip({
    followMouse,
    placement,
  });

  const manualOpen = controlledManualOpen;

  return (
    <div
      ref={tooltipWrapperRef}
      tabIndex={-1}
      className={cn(["tooltip__wrapper", className])}
    >
      {children}
      <div
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
          typeof manualOpen === "boolean" && "tooltip__content--manual-open",
          manualOpen === true && "tooltip__content--open",
          manualOpen === false && "tooltip__content--closed",
        ])}
      >
        {typeof content === "string" || typeof content === "number" ? (
          <Typography primary0>{content}</Typography>
        ) : (
          content
        )}
      </div>
    </div>
  );
};
