import { CarData } from "@/types";
import React from "react";
import { Button } from "../Button";
import { Like } from "../Like";
import { FuelIcon, PeopleIcon, TransmissionIcon } from "../svg/icons";
import { makeCapacityString } from "@/utils";
import { PriceInfo } from "../PriceInfo";
import { ImageWrapper } from "../ImageWrapper";
import { useLikeCar } from "@/queries/useLikeCar";
import Link from "next/link";

type CardProps = {
  carData: CarData;
};

export const Card = ({ carData }: CardProps) => {
  const {
    _id,
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

  const sendLikeRequest = useLikeCar(_id);

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__captions">
          <Link
            href="/cars/[carId]"
            as={`/cars/${_id}`}
            className="card__title"
          >
            {name}
          </Link>
          <p className="card__subtitle">{carType}</p>
        </div>
        <div className="card__favourite">
          <Like isLiked={isInFavourites} sendRequest={sendLikeRequest} />
        </div>
      </div>
      <ImageWrapper
        className="card__thumbnail"
        alt={thumbnail?.desc ?? ""}
        src={thumbnail?.img?.url ?? ""}
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
          as={`/cars/${_id}`}
        >
          Rent now
        </Button>
      </div>
    </div>
  );
};
