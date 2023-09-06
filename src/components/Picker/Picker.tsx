import React, { Dispatch, SetStateAction } from "react";
import { PickerSelect } from "./PickerSelect";
import { DateInput } from "../Select/DateInput/DateInput";
import { Select } from "../Select/Select";

type PickerProps = {
  headerTitle: string;
  className?: string;
  location: string | undefined;
  setLocation: Dispatch<SetStateAction<string | undefined>>;
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  time: Date | undefined;
  setTime: Dispatch<SetStateAction<Date | undefined>>;
};

export const Picker = ({
  headerTitle,
  location,
  setLocation,
  date,
  setDate,
  time,
  setTime,
  className = "",
}: PickerProps) => {
  const onLocationChange = (newValue: string | undefined) =>
    setLocation(newValue);
  const onDateChange = (newValue: Date | undefined) => setDate(newValue);
  const onTimeChange = (newValue: Date | undefined) => setTime(newValue);

  return (
    <div className={`picker ${className}`}>
      <div className="picker__header">
        <div className={`picker__point-mark`}></div>
        <span className="picker__header-text">{headerTitle}</span>
      </div>
      <div className="picker__selects">
        <PickerSelect title="Locations">
          <Select
            placeholder="Select city"
            value={location}
            onChange={onLocationChange}
          />
        </PickerSelect>
        <div className="picker__divide-x"></div>
        <PickerSelect title="Date">
          <DateInput
            placeholder="Select date"
            value={date}
            onChange={onDateChange}
          />
        </PickerSelect>
        <div className="picker__divide-x"></div>
        <PickerSelect title="Time">
          <DateInput
            placeholder="Select time"
            value={time}
            onChange={onTimeChange}
          />
        </PickerSelect>
      </div>
    </div>
  );
};
