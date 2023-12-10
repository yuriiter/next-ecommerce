import RangeSlider from "@/components/RangeSlider";
import React, { ChangeEvent } from "react";

type SidebarRangeProps = {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
};

export const SidebarRange = ({ label, value, onChange }: SidebarRangeProps) => {
  return (
    <label className="">
      <RangeSlider min={0} max={100} value={value} onChange={onChange} />
      {label}
      <span className="sidebar__range-value">Max. ${value.toFixed(2)}</span>
    </label>
  );
};
