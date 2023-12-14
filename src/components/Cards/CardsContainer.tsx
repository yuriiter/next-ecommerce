import { CarData, LinkData } from "@/types";
import React from "react";
import { Card } from "./Card";
import Link from "next/link";
import { cn } from "@/utils";

type CardsContainerProps = {
  title?: string;
  rightLink?: LinkData;
  horizontalScrolling?: boolean;
  cards: CarData[];
  loading?: boolean;
  className?: string;
};

export const CardsContainer = ({
  title,
  rightLink,
  horizontalScrolling = false,
  cards,
  loading = false,
  className,
}: CardsContainerProps) => {
  return (
    <div
      className={cn([
        "cards",
        horizontalScrolling && "cards--horizontal-scrolling",
        loading && "cards--loading",
        className,
      ])}
    >
      {(title || rightLink) && (
        <div className="cards__header">
          {title && <div className="cards__header-title">{title}</div>}
          {rightLink && (
            <Link className="cards__header-link" href={rightLink.href}>
              {rightLink.content}
            </Link>
          )}
        </div>
      )}
      <div className="cards__container">
        {cards.map((card) => (
          <Card key={card.id} carData={card} />
        ))}
      </div>
    </div>
  );
};
