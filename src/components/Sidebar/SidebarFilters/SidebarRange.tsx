import RangeSlider from "@/components/RangeSlider";
import React from "react";

type SidebarRangeProps = {
  value: number;
  onChange: (newValue: number) => void;
};

export const SidebarRange = ({ value, onChange }: SidebarRangeProps) => {
  console.log("bp4", value, typeof value);
  if (typeof value !== "number") return null;
  return (
    <label>
      <RangeSlider min={0} max={100} value={value} onChange={onChange} />
    </label>
  );
};
