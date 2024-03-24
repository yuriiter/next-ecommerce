import React, { ReactNode } from "react";
import { cn } from "@/utils";
import { Placement } from "@/types/common";
import { useFollowMouseTooltip } from "./useFollowMouseTooltip";
import { useHover } from "@/hooks/useHover";
import { TooltipContent } from "./TooltipContent";

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
  });

  const { isHover, onMouseEnter, onMouseLeave } = useHover();

  const open = controlledManualOpen ?? isHover;

  return (
    <div
      ref={tooltipWrapperRef}
      tabIndex={-1}
      className={cn(["tooltip__wrapper", className])}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <TooltipContent
        followMouse={followMouse}
        leftTop={leftTop}
        placement={placement}
        open={open}
        content={content}
        showArrow={showArrow}
      />
    </div>
  );
};
