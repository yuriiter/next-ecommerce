import React, { ReactNode } from "react";

type PickerSelectProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export const PickerSelect = ({
  title,
  children,
  className = "",
}: PickerSelectProps) => {
  return (
    <div className={`picker__select ${className}`}>
      <div className="picker__select-title">{title}</div>
      {children}
    </div>
  );
};
