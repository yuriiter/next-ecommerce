import { CarData } from "@/types";
import React from "react";
import { Button } from "../Button";
import Image from "next/image";
import { Like } from "../Like";
import { FuelIcon, PeopleIcon, TransmissionIcon } from "../svg/icons";

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
    thumbnailURL,
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
            isLiked={isInFavorites}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
      <Image
        className="card__thumbnail"
        alt={`Rent car | ${name} - ${carType}`}
        src={thumbnailURL}
      />
      <div className="card__footer">
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
            <span>
              {peopleCapacity === 1 ? "1 person" : `${peopleCapacity} people`}
            </span>
          </div>
        </div>
        <div className="card__price-info">
          <div className="card__price">
            <span className="card__price-number">${price.toFixed(2)}/ </span>
            <sub className="card__price-day">day</sub>
          </div>
          {previousPrice !== undefined && (
            <span className="card__previous-price">
              ${previousPrice.toFixed(2)}
            </span>
          )}
        </div>
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
