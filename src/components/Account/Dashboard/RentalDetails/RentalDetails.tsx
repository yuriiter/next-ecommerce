import { Typography } from "@/components/Typography/Typography";
import React from "react";
import { RentalDetailsMap } from "./RentalDetailsMap";
import { SummaryCarInfo } from "@/components/Rent/Summary/SummaryCarInfo";
import { RentalData } from "@/types";
import { SummaryFooter } from "@/components/Rent/Summary/SummaryFooter";
import { PickerSection } from "@/components/Picker/PickerSection";

type RentalDetailsProps = {
  rentalData: RentalData;
};
export const RentalDetails = ({ rentalData }: RentalDetailsProps) => {
  const {
    id,
    car: { thumbnail, name, subtitle },
    pickUpData,
    dropOffData,
    total,
  } = rentalData;
  return (
    <div className="rental-details">
      <div className="rental-details__inner-wrapper">
        <Typography className="rental-details__title" bold size="20">
          Rental details
        </Typography>
        <RentalDetailsMap />
        <div className="flex space-between items-center">
          <SummaryCarInfo
            thumbnailSrc={thumbnail}
            carTitle={name}
            subtitle={subtitle}
            className="rental-details__car-info"
          />
          <Typography color="#3D5278" medium size="14">
            #{id}
          </Typography>
        </div>
        <PickerSection
          className="rental-details__pickers"
          pickUpData={pickUpData}
          setPickUpData={() => null}
          dropOffData={dropOffData}
          setDropOffData={() => null}
          onSwapButtonClick={() => null}
        />
        <div className="summary__car-divider picker__divide-x"></div>
        <SummaryFooter total={total} />
      </div>
    </div>
  );
};
