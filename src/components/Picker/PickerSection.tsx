import React, { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { PickerData } from "./types";
import { cn, dateOrDateStringToDate, setTimeOfDate } from "@/utils";
import { Picker } from ".";
import { IconButton } from "../Button";
import { SearchIcon } from "../svg/icons";
import { Tooltip } from "../Tooltip/Tooltip";
import { useMQ } from "@/hooks/mediaQuery/useMQ";
import { stringAsTime } from "../Select/TimeInput/utils";
import useURLQueryState from "@/hooks/URLQueries/useURLQueryState";
import { useRouter } from "next/router";

type PickerSectionProps = {
  className?: string;
  pickUpData: PickerData | undefined;
  setPickUpData: Dispatch<SetStateAction<PickerData | undefined>>;
  dropOffData: PickerData | undefined;
  setDropOffData: Dispatch<SetStateAction<PickerData | undefined>>;
  hideCentralButton?: boolean;
};

export const PickerSection = ({
  className,
  pickUpData,
  setPickUpData,
  dropOffData,
  setDropOffData,
  hideCentralButton = false,
}: PickerSectionProps) => {
  const router = useRouter();
  const [pickUpStateFromQuery, setPickUpStateFromQuery] =
    useURLQueryState<PickerData>("pickUp", {});
  const [dropOffStateFromQuery, setDropOffStateFromQuery] =
    useURLQueryState<PickerData>("dropOff", {});

  const isMobile = useMQ("MD", "max");

  useEffect(() => {
    if (!hideCentralButton) {
      setPickUpData(pickUpStateFromQuery);
      setDropOffData(dropOffStateFromQuery);
      if (
        Object.keys(pickUpStateFromQuery).length > 0 &&
        Object.keys(dropOffStateFromQuery).length > 0
      ) {
        router.push({ query: router.query, pathname: "/cars" });
      }
    }
  }, [pickUpStateFromQuery, dropOffStateFromQuery]);

  const onCentralButtonClick = () => {
    setPickUpStateFromQuery(pickUpData as PickerData);
    setDropOffStateFromQuery(dropOffData as PickerData);
  };

  const dropOffPickerDisabled = useMemo(() => {
    const date = pickUpData?.date;
    const location = pickUpData?.location;
    const time = pickUpData?.time;

    return !(date && location && time);
  }, [pickUpData]);

  const centralButtonTooltip = useMemo(() => {
    if (!pickUpData || !dropOffData) return "Fill in both forms";

    const {
      date: pickUpDate,
      time: pickUpTime,
      location: pickUpLocation,
    } = pickUpData;
    const {
      date: dropOffDate,
      time: dropOffTime,
      location: dropOffLocation,
    } = dropOffData;
    if (
      !pickUpDate ||
      !pickUpTime ||
      !dropOffDate ||
      !dropOffTime ||
      !pickUpLocation ||
      !dropOffLocation
    )
      return "Fill in both forms";

    const pickUpDateAndTime = setTimeOfDate(
      dateOrDateStringToDate(pickUpDate) as Date,
      stringAsTime(pickUpTime as string)
    );

    const dropOffDateAndTime = setTimeOfDate(
      dateOrDateStringToDate(dropOffDate) as Date,
      stringAsTime(dropOffTime as string)
    );

    return dropOffDateAndTime <= pickUpDateAndTime
      ? "Drop-off must be later than pick-up"
      : "Apply changes";
  }, [pickUpData, dropOffData]);

  return (
    <section className={cn(["pickers__section", className])}>
      <Picker
        headerTitle="Pick - up"
        pointMarkVariant="dark"
        pickerData={pickUpData}
        setPickerData={setPickUpData}
      />
      {!hideCentralButton && (
        <Tooltip
          className="picker-central-button__tooltip-wrapper"
          content={centralButtonTooltip}
        >
          <IconButton
            size="lg"
            className="picker__central-button"
            onClick={onCentralButtonClick}
            disabled={centralButtonTooltip !== "Apply changes"}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip
        followMouse={dropOffPickerDisabled}
        manualOpen={!dropOffPickerDisabled ? false : undefined}
        content="Fill in pick-up form first"
        placement={isMobile ? "center-bottom" : "left-center"}
        className="picker__tooltip-wrapper"
      >
        <Picker
          pickerData={dropOffData}
          setPickerData={setDropOffData}
          headerTitle="drop - off"
          className="picker--drop-off"
          pointMarkVariant="light"
          disabled={dropOffPickerDisabled}
        />
      </Tooltip>
    </section>
  );
};
