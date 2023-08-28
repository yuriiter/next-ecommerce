import React, { ReactNode } from "react";

type BadgeProps = {
  className?: string;
  children: ReactNode;
  overRoundIcon?: boolean;
} & ({ value: number; max: number } | { value?: never; max?: never });

export const Badge = ({
  className,
  children,
  value,
  max,
  overRoundIcon = true,
}: BadgeProps) => {
  return (
    <div className="badge">
      <div
        className={`badge__content ${
          overRoundIcon ? "badge__content--over-round" : ""
        }`}
      >
        {value ? (value > max ? `${max - 1}+` : value) : null}
      </div>
      {children}
    </div>
  );
};
