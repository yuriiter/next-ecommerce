import { cn } from "@/utils";
import React, { ReactNode } from "react";

type BadgeProps = {
  className?: string;
  children: ReactNode;
  overRoundIcon?: boolean;
  animated?: boolean;
  show?: boolean;
} & ({ value: number; max: number } | { value?: never; max?: never });

export const Badge = ({
  className,
  children,
  value,
  max,
  animated = true,
  overRoundIcon = true,
  show = true,
}: BadgeProps) => {
  return (
    <div className={cn([className, "badge", animated && "badge--animated"])}>
      <div
        className={cn([
          "badge__content",
          overRoundIcon && "badge__content--over-round",
          !show && "hidden",
        ])}
      >
        {value ? (value > max ? `${max - 1}+` : value) : null}
      </div>
      {children}
    </div>
  );
};
