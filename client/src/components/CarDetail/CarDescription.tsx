import { CarData } from "@/types";
import React, { Fragment } from "react";
import { Like } from "../Like";
import { Rating } from "./Rating";
import { makeCapacityString } from "@/utils";
import { Button } from "../Button";
import { PriceInfo } from "../PriceInfo";
import { useLikeCar } from "@/queries/useLikeCar";

type CarDescriptionProps = {
  carData: CarData;
};

export const CarDescription = ({ carData }: CarDescriptionProps) => {
  const {
    _id,
    name,
    description,
    carType,
    fuelCapacity,
    peopleCapacity,
    isManual,
    price,
    previousPrice,
    isInFavourites,
    rating,
    numOfVotes,
  } = carData;
  const sendLikeRequest = useLikeCar(_id);

  const attributes = {
    "car type": carType,
    capacity: makeCapacityString(peopleCapacity),
    steering: isManual ? "manual" : "automatic",
    gasoline: `${fuelCapacity}L`,
  };

  return (
    <div className="car-detail__description">
      <div className="car-detail__description-header">
        <h3 className="car-detail__description-title">{name}</h3>
        <Like isLiked={isInFavourites} sendRequest={sendLikeRequest} />
        <div className="car-detail__description-rating">
          <Rating rating={rating} numOfVotes={numOfVotes} />
        </div>
      </div>
      <p className="car-detail__description-text">{description}</p>
      <div className="car-detail__description-attributes">
        {Object.entries(attributes).map(([name, value]) => {
          return (
            <div key={name} className="car-detail__attribute-pair">
              <span className="car-detail__description-attribute car-detail__description-attribute--name">
                {name}
              </span>
              <span className="car-detail__description-attribute">{value}</span>
            </div>
          );
        })}
      </div>
      <div className="car-detail__description-footer">
        <PriceInfo
          className="car-detail__description-price"
          price={price}
          previousPrice={previousPrice}
        />
        <Button
          size="lg"
          className="car-detail__description-button"
          href="/cars/[carId]/rent"
          as={`/cars/${_id}/rent`}
        >
          Rent now
        </Button>
      </div>
    </div>
  );
};
