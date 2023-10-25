import { Review } from "@/types";
import React, { useState } from "react";
import { CarReview } from "./CarReview";
import { RenderShowMoreButton, ShowMore } from "../Cards/ShowMore";
import { ButtonWIcon } from "../Button";
import { ArrowDownIcon } from "../svg/icons";

type CarReviewProps = {
  reviews: Review[];
};

const ReviewShowAll: RenderShowMoreButton = ({ onClick }) => {
  return (
    <ButtonWIcon
      variant="minimal"
      icon={<ArrowDownIcon />}
      onClick={onClick}
      iconBefore={false}
    >
      Show All
    </ButtonWIcon>
  );
};

export const CarReviews = ({ reviews }: CarReviewProps) => {
  const [commentsToShowLimit, setCommentsToShowLimit] = useState(2);

  return (
    <div className="car-reviews">
      <h4 className="car-reviews__title">
        Reviews <span className="car-reviews__count">{reviews.length}</span>
      </h4>
      <div className="car-reviews__container">
        {reviews.slice(0, commentsToShowLimit).map((review) => (
          <CarReview key={review.id} review={review} />
        ))}
      </div>
      <ShowMore
        step={1000000000}
        itemsToShowLimit={commentsToShowLimit}
        setItemsToShowLimit={setCommentsToShowLimit}
        totalItemsCount={reviews.length}
        itemNamePlural={""}
        itemNameSingular={""}
        renderButton={ReviewShowAll}
        renderTotalCount={() => null}
        className="car-reviews__show-more"
      />
    </div>
  );
};
