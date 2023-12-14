import React, { Dispatch, SetStateAction } from "react";
import { PickerData } from "./types";
import { cn } from "@/utils";
import { Picker } from ".";
import { IconButton } from "../Button";
import { SwapIcon } from "../svg/icons";

type PickerSectionProps = {
  className?: string;
  pickUpData: PickerData | undefined;
  setPickUpData: Dispatch<SetStateAction<PickerData | undefined>>;
  dropOffData: PickerData | undefined;
  setDropOffData: Dispatch<SetStateAction<PickerData | undefined>>;
  onSwapButtonClick: () => void;
};

export const PickerSection = ({
  className,
  pickUpData,
  setPickUpData,
  dropOffData,
  setDropOffData,
  onSwapButtonClick,
}: PickerSectionProps) => {
  return (
    <section className={cn(["pickers__section", className])}>
      <Picker
        headerTitle="Pick - up"
        pointMarkVariant="dark"
        pickerData={pickUpData}
        setPickerData={setPickUpData}
      />
      <IconButton
        size="lg"
        className="picker__swap-button"
        onClick={onSwapButtonClick}
      >
        <SwapIcon />
      </IconButton>
      <Picker
        pickerData={dropOffData}
        setPickerData={setDropOffData}
        headerTitle="drop - off"
        className="picker--drop-off"
        pointMarkVariant="light"
      />
    </section>
  );
};
