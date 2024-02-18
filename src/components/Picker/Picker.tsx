import React, { Dispatch, SetStateAction, useEffect } from "react";
import { PickerSelect } from "./PickerSelect";
import { DateInput } from "../Select/DateInput/DateInput";
import { Select } from "../Select/Select";
import { SelectOption } from "../Select/types";
import TimeInput from "../Select/TimeInput";
import { cn } from "@/utils";
import { PointMark } from "../PointMark";
import { locationOptions } from "@/constants/mockupData";
import { PickerData } from "./types";
import { useToast } from "../Toast/useToast";

type PickerProps = {
  headerTitle: string;
  className?: string;
  pickerData: PickerData | undefined;
  setPickerData: Dispatch<SetStateAction<PickerData | undefined>>;
  pointMarkVariant: "dark" | "light";
  disabled?: boolean;
};

export const Picker = ({
  headerTitle,
  pickerData,
  setPickerData,
  className,
  pointMarkVariant,
  disabled = false,
}: PickerProps) => {
  const { location, time, date } = pickerData || {
    location: undefined,
    time: undefined,
    date: undefined,
  };

  const onLocationChange = (newValue: SelectOption | undefined) =>
    setPickerData((current) => ({ ...current, location: newValue }));
  const onDateChange = (newValue: Date | undefined) =>
    setPickerData((current) => ({ ...current, date: newValue }));
  const onTimeChange = (newValue: SelectOption | undefined) =>
    setPickerData((current) => ({ ...current, time: newValue }));

  return (
    <div className={cn(["picker", disabled && "picker--disabled", className])}>
      <div className="picker__header">
        <PointMark variant={pointMarkVariant} />
        <span className="picker__header-text">{headerTitle}</span>
      </div>
      <div className="picker__selects">
        <PickerSelect title="Locations">
          <Select
            placeholder="Select city"
            value={location}
            onChange={onLocationChange}
            options={locationOptions}
            disabled={disabled}
            placement="right-bottom"
          />
        </PickerSelect>
        <div className="picker__divide-x"></div>
        <PickerSelect title="Date">
          <DateInput
            placeholder="Select date"
            value={date}
            onChange={onDateChange}
            disabled={disabled}
          />
        </PickerSelect>
        <div className="picker__divide-x"></div>
        <PickerSelect title="Time">
          <TimeInput
            placeholder="Select time"
            value={time}
            onChange={onTimeChange}
            disabled={disabled}
          />
        </PickerSelect>
      </div>
    </div>
  );
};
