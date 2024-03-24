import { cn } from "@/utils";
import React from "react";

type PriceInfoProps = {
  previousPrice?: number;
  price: number;
  className?: string;
};

export const PriceInfo = ({
  previousPrice,
  price,
  className,
}: PriceInfoProps) => {
  return (
    <div className={cn(["price__info", className])}>
      <div className="price">
        <span className="price__number">${price?.toFixed(2)}/ </span>
        <sub className="price__day">day</sub>
      </div>
      {previousPrice !== undefined && previousPrice > price ? (
        <span className="price__previous">${previousPrice.toFixed(2)}</span>
      ) : null}
    </div>
  );
};
