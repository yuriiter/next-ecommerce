import React, { ChangeEvent } from "react";

type SidebarRangeProps = {
  label: string;
  value: number;
  numOfItemsOfType?: number;
  onChange: (newValue: boolean) => void;
};

export const SidebarRange = ({
  label,
  value,
  numOfItemsOfType,
  onChange,
}: SidebarRangeProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Boolean(e.currentTarget.value));
  };

  return (
    <label className="sidebar__checkbox">
      <input type="checkbox" onChange={handleChange} />
      {label}
      {numOfItemsOfType !== undefined && (
        <span> ({numOfItemsOfType} items)</span>
      )}
    </label>
  );
};
