import { Review } from "@/types";
import Image from "next/image";
import React from "react";
import { Rating } from "./Rating";
import { dateToString } from "../Select/DateInput/utils";

type CarReviewProps = {
  review: Review;
};

export const CarReview = ({ review }: CarReviewProps) => {
  const { avatar, fullName, caption, date, rating, comment } = review;

  return (
    <div className="car-review">
      <div className="car-review__header">
        <div className="car-review__profile">
          <Image
            className="car-review__profile-img"
            src={avatar}
            alt={`Comment on car by ${fullName}`}
          />
          <div className="car-review__profile-text">
            <span className="car-review__full-name">{fullName}</span>
            <span className="car-review__caption">{caption}</span>
          </div>
        </div>
        <div className="car-review__date-rating">
          <span className="car-review__date">{dateToString(date)}</span>
          <Rating rating={rating} />
        </div>
      </div>
      <div className="car-review__comment">{comment}</div>
    </div>
  );
};
