import React, { ComponentType, useState } from "react";
import DateInput from "../DateInput";

type SelectType = "location" | "date" | "time";

type PickerSelectProps = {
  selectType: SelectType;
  title: string;
  label: string;
  className?: string;
};

const selectTypeToComponentMap: Record<SelectType, ComponentType<any> | null> =
  {
    location: null,
    date: DateInput,
    time: null,
  };

export const PickerSelect = ({
  selectType,
  title,
  label,
  className = "",
}: PickerSelectProps) => {
  const Select = selectTypeToComponentMap[selectType];
  const [date, setDate] = useState<Date>();

  const handleDateChange = (newValue: Date | undefined) => setDate(newValue);

  return (
    <div className={`picker__select ${className}`}>
      <div className="picker__select-title">{title}</div>
      {Select && (
        <Select
          className="picker__select-input"
          placeholder="Select your date"
          value={date}
          onChange={handleDateChange}
        />
      )}
    </div>
  );
};
