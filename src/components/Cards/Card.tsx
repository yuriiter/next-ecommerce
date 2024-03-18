import { CarData } from "@/types";
import React from "react";
import { Button } from "../Button";
import Image from "next/image";
import { Like } from "../Like";
import { FuelIcon, PeopleIcon, TransmissionIcon } from "../svg/icons";
import { makeCapacityString } from "@/utils";
import { PriceInfo } from "../PriceInfo";

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
    isInFavourites,
    thumbnail,
  } = carData;

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__captions">
          <h4 className="card__title">{name}</h4>
          <p className="card__subtitle">{carType}</p>
        </div>
        <div className="card__favourite">
          <Like
            isLiked={isInFavourites}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
      <Image
        className="card__thumbnail"
        alt={`Rent car | ${name} - ${carType}`}
        src={thumbnail}
      />
      <div className="card__info">
        <div className="card__info-item">
          <FuelIcon className="card__info-icon" />
          <span>{fuelCapacity}L</span>
        </div>
        <div className="card__info-item">
          <TransmissionIcon className="card__info-icon" />
          <span>{isManual ? "manual" : "automatic"}</span>
        </div>
        <div className="card__info-item">
          <PeopleIcon className="card__info-icon" />
          <span>{makeCapacityString(peopleCapacity)}</span>
        </div>
      </div>
      <div className="card__footer">
        <PriceInfo
          className="card__price"
          price={price}
          previousPrice={previousPrice}
        />
        <Button
          size="lg"
          className="card__link"
          href="/cars/[carId]"
          as={`/cars/${id}`}
        >
          Rent now
        </Button>
      </div>
    </div>
  );
};
