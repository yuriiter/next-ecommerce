import { CarData } from "@/types";
import React, { Fragment } from "react";
import { Like } from "../Like";
import { Rating } from "./Rating";
import { makeCapacityString } from "@/utils";
import { Button } from "../Button";
import { PriceInfo } from "../PriceInfo";

type CarDescriptionProps = {
  carData: CarData;
};

export const CarDescription = ({ carData }: CarDescriptionProps) => {
  const {
    id,
    name,
    description,
    carType,
    fuelCapacity,
    peopleCapacity,
    isManual,
    price,
    previousPrice,
    isInFavorites,
    rating,
    numOfVotes,
  } = carData;

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
        <Like
          isLiked={isInFavorites}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
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
          href="/cars/[carId]"
          as={`/cars/${id}`}
        >
          Rent now
        </Button>
      </div>
    </div>
  );
};
