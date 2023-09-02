import React from "react";
import { PickerSelect } from "./PickerSelect";

type PickerProps = {
  variant: "pick-up" | "drop-off";
};

export const Picker = ({ variant }: PickerProps) => {
  return (
    <div className="picker">
      <div className="picker__header">
        <div
          className={`picker__point-mark picker__point-mark--${variant}`}
        ></div>
        <span className="picker__header-text">
          {variant === "pick-up" ? "pick - up" : "drop - off"}
        </span>
      </div>
      <div className="picker__selects">
        <PickerSelect
          selectType="location"
          title="Locations"
          label="Select your city"
        />
        <div className="picker__divide-x"></div>
        <PickerSelect selectType="date" title="Date" label="Select your date" />
        <div className="picker__divide-x"></div>
        <PickerSelect selectType="time" title="Time" label="Select your time" />
      </div>
    </div>
  );
};
