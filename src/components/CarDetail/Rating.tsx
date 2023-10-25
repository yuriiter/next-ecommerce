import React, { useState } from "react";
import { StarEmpty, StarYellow } from "../svg/icons";

type RatingProps = {
  rating: number;
  numOfVotes?: number;
  className?: string;
  onVote?: (rating: number) => void | Promise<void>;
};

export const Rating = ({
  rating,
  numOfVotes,
  className = "",
  onVote,
}: RatingProps) => {
  const yellowStarsLen = Math.round(rating);
  const emptyStarsLen = 5 - yellowStarsLen;

  const yellowStars = Array.from({ length: yellowStarsLen }, (value, index) => {
    const onClick = () => onVote?.(index);
    return <StarYellow key={index} onClick={onClick} />;
  });

  const emptyStars = Array.from({ length: emptyStarsLen }, (value, index) => {
    const onClick = () => onVote?.(index);
    return <StarEmpty key={index} onClick={onClick} />;
  });

  return (
    <div className="rating__wrapper">
      <div className={`rating ${className}`}>
        {yellowStars}
        {emptyStars}
      </div>
      {numOfVotes !== undefined && (
        <span className="rating__num-of-votes">{numOfVotes}+ reviews</span>
      )}
    </div>
  );
};
