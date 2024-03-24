import { useState } from "react";
import { PickerData } from "../types";

export const usePickerSectionData = () => {
  const [pickUpData, setPickUpData] = useState<PickerData>();
  const [dropOffData, setDropOffData] = useState<PickerData>();

  return {
    pickUpData,
    setPickUpData,
    dropOffData,
    setDropOffData,
  };
};
