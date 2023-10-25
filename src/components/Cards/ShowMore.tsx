import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Button } from "../Button";

export type RenderShowMoreButton = (props: {
  onClick: () => void;
  itemNamePlural: string;
}) => ReactNode;

export type RenderTotalCount = (props: {
  totalItemsCount: number;
  itemNamePlural: string;
  itemNameSingular: string;
}) => ReactNode;

type ShowMoreProps = {
  step: number;
  itemsToShowLimit: number;
  setItemsToShowLimit: Dispatch<SetStateAction<number>>;
  totalItemsCount: number;
  itemNamePlural: string;
  itemNameSingular: string;
  className?: string;
  renderButton?: RenderShowMoreButton;
  renderTotalCount?: RenderTotalCount;
};

export const ShowMore = ({
  step,
  itemsToShowLimit,
  setItemsToShowLimit,
  totalItemsCount,
  itemNamePlural,
  itemNameSingular,
  renderButton,
  renderTotalCount,
  className = "",
}: ShowMoreProps) => {
  const onShowMoreButtonClick = () => {
    setItemsToShowLimit((prevItemsToShowCount) => prevItemsToShowCount + step);
  };

  if (itemsToShowLimit >= totalItemsCount) {
    return null;
  }

  console.log(renderButton);

  return (
    <div className={`show-more ${className}`}>
      {renderButton ? (
        renderButton({ onClick: onShowMoreButtonClick, itemNamePlural })
      ) : (
        <Button
          onClick={onShowMoreButtonClick}
          size="lg"
          className="show-more__button"
        >
          Show more {itemNamePlural}
        </Button>
      )}
      {renderTotalCount ? (
        renderTotalCount({ totalItemsCount, itemNamePlural, itemNameSingular })
      ) : (
        <span className="show-more__total-count">
          {totalItemsCount === 1
            ? `1 ${itemNameSingular}`
            : `${totalItemsCount} ${itemNamePlural}`}
        </span>
      )}
    </div>
  );
};
