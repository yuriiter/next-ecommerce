import React, { Dispatch, SetStateAction } from "react";
import { PickerSelect } from "./PickerSelect";
import { DateInput } from "../Select/DateInput/DateInput";
import { Select } from "../Select/Select";
import { SelectOption } from "../Select/types";
import TimeInput from "../Select/TimeInput";
import { Time } from "../Select/TimeInput/types";
import { cn } from "@/utils";

type PickerProps = {
  headerTitle: string;
  className?: string;
  location: SelectOption | undefined;
  setLocation: Dispatch<SetStateAction<SelectOption | undefined>>;
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  time: SelectOption | undefined;
  setTime: Dispatch<SetStateAction<SelectOption | undefined>>;
};

const locationOptions: SelectOption[] = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
].map((city) => ({ value: city, label: city } as SelectOption));

export const Picker = ({
  headerTitle,
  location,
  setLocation,
  date,
  setDate,
  time,
  setTime,
  className,
}: PickerProps) => {
  const onLocationChange = (newValue: SelectOption | undefined) =>
    setLocation(newValue);
  const onDateChange = (newValue: Date | undefined) => setDate(newValue);
  const onTimeChange = (newValue: SelectOption | undefined) =>
    setTime(newValue);

  return (
    <div className={cn(["picker", className])}>
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
            options={locationOptions}
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
          <TimeInput
            placeholder="Select time"
            value={time}
            onChange={onTimeChange}
          />
        </PickerSelect>
      </div>
    </div>
  );
};
