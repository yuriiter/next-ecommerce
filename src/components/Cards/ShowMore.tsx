import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../Button";

type ShowMoreProps = {
  step: number;
  itemsToShowLimit: number;
  setItemsToShowLimit: Dispatch<SetStateAction<number>>;
  totalItemsCount: number;
  itemNamePlural: string;
  itemNameSingular: string;
};

export const ShowMore = ({
  step,
  itemsToShowLimit,
  setItemsToShowLimit,
  totalItemsCount,
  itemNamePlural,
  itemNameSingular,
}: ShowMoreProps) => {
  const onShowMoreButtonClick = () => {
    setItemsToShowLimit((prevItemsToShowCount) => prevItemsToShowCount + step);
  };

  if (itemsToShowLimit >= totalItemsCount) {
    return null;
  }

  return (
    <div className="show-more">
      <Button
        onClick={onShowMoreButtonClick}
        size="lg"
        className="show-more__button"
      >
        Show more {itemNamePlural}
      </Button>
      <span className="show-more__total-count">
        {totalItemsCount === 1
          ? `1 ${itemNameSingular}`
          : `${totalItemsCount} ${itemNamePlural}`}
      </span>
    </div>
  );
};
