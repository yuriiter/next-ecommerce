import { CarData } from "@/types";
import React from "react";

type CardProps = {
  carData: CarData;
};

export const Card = ({ carData }: CardProps) => {
  const {
    id,
    name,
    carType,
    fuelCapacity,
    peopleCapacity,
    isManual,
    price,
    previousPrice,
    isInFavorites,
  } = carData;

  return <div>Card</div>;
};
