import React, { Dispatch, SetStateAction, useMemo } from "react";
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
};

export const PickerSection = ({
  className,
  pickUpData,
  setPickUpData,
  dropOffData,
  setDropOffData,
}: PickerSectionProps) => {
  const onSwapButtonClick = () => {
    setDropOffData((current) => ({
      ...current,
      location: pickUpData?.location,
    }));
    setPickUpData((current) => ({
      ...current,
      location: dropOffData?.location,
    }));
  };

  const dropOffPickerDisabled = useMemo(() => {
    const date = pickUpData?.date;
    const location = pickUpData?.location;
    const time = pickUpData?.time;

    return !(date && location && time);
  }, [pickUpData]);

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
        disabled={dropOffPickerDisabled}
      />
    </section>
  );
};
