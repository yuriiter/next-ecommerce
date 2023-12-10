import { cn } from "@/utils";
import React, { ReactNode } from "react";

type BadgeProps = {
  className?: string;
  children: ReactNode;
  overRoundIcon?: boolean;
  animated?: boolean;
} & ({ value: number; max: number } | { value?: never; max?: never });

export const Badge = ({
  className,
  children,
  value,
  max,
  animated = true,
  overRoundIcon = true,
}: BadgeProps) => {
  return (
    <div className={cn(["badge", animated && "badge--animated"])}>
      <div
        className={cn([
          "badge__content",
          overRoundIcon && "badge__content--over-round",
        ])}
      >
        {value ? (value > max ? `${max - 1}+` : value) : null}
      </div>
      {children}
    </div>
  );
};
