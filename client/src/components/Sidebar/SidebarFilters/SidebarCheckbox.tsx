import React, { ChangeEvent } from "react";
import checkmark from "@/assets/img/checkmark.svg";
import checkmarkChecked from "@/assets/img/checkmark-checked.svg";
import Image from "next/image";

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
    onChange(e.currentTarget.checked);
  };

  return (
    <label className="sidebar__checkbox">
      <input
        type="checkbox"
        checked={value}
        className="sidebar__input"
        onChange={handleChange}
      />
      <Image
        className="sidebar__checkmark"
        alt={`Tick - ${label}`}
        src={checkmark}
      />
      <Image
        className="sidebar__checkmark sidebar__checkmark--checked"
        alt={`Tick - ${label}`}
        src={checkmarkChecked}
      />
      <span className="sidebar__label">
        {label}
        {numOfItemsOfType !== undefined && (
          <span className="sidebar__checkbox-count"> ({numOfItemsOfType})</span>
        )}
      </span>
    </label>
  );
};
