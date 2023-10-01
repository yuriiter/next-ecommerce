import React, { ChangeEvent } from "react";

type SidebarCheckboxProps = {
  label: string;
  value: boolean;
  numOfItemsOfType?: number;
  onChange: (newValue: boolean) => void;
};

export const SidebarCheckbox = ({
  label,
  value,
  numOfItemsOfType,
  onChange,
}: SidebarCheckboxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Boolean(e.currentTarget.value));
  };

  return (
    <label className="sidebar__checkbox">
      <input type="checkbox" checked={value} onChange={handleChange} />
      {label}
      {numOfItemsOfType !== undefined && (
        <span> ({numOfItemsOfType} items)</span>
      )}
    </label>
  );
};
