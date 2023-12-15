import { CarData } from "@/types";
import { cn } from "@/utils";
import React, { ChangeEvent, useState } from "react";
import { StepInput } from "../Steps/StepInput";
import { SummaryCaptions } from "./SummaryCaptions";
import { SummaryCarInfo } from "./SummaryCarInfo";
import { SummaryCarPrice } from "./SummaryCarPrice";
import { SummaryFooter } from "./SummaryFooter";
import { useHideNavigation } from "@/components/Layout/Navigation/useHideNavigation";

type SummaryProps = {
  car: CarData;
  subtotal: number;
  tax: number;
  total: number;
};

export const Summary = ({ car, subtotal, tax, total }: SummaryProps) => {
  const [translateToTop, navigationHeight] = useHideNavigation();
  const [promoCode, setPromoCode] = useState("");
  const onPromoCodeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPromoCode(e.target.value);
  const onPromoCodeSubmit = () => console.error("Not implemented");

  if (!car) return null;

  return (
    <div
      className={cn([
        "summary__wrapper",
        translateToTop && "summary__wrapper--to-top",
      ])}
    >
      <div
        className="summary"
        style={{ top: `${(!translateToTop ? navigationHeight : 0) + 32}px` }}
      >
        <div className="summary__header">
          <SummaryCaptions
            title="Rental summary"
            subtitle="
            Prices may change depending on the length of the rental and the
            price of your rental car.
          "
          />
        </div>
        <SummaryCarInfo
          thumbnailSrc={car?.thumbnail}
          carTitle={car?.title}
          carRating={car?.rating}
          carNumOfVotes={car?.numOfVotes}
        />
        <div className="summary__car-divider picker__divide-x"></div>
        <SummaryCarPrice subtotal={subtotal} tax={tax} promo={0} />
        <StepInput
          value={promoCode}
          onChange={onPromoCodeChange}
          name="promoCode"
          placeholder="Apply promo code"
          selfSubmit={onPromoCodeSubmit}
          selfSubmitText="Apply now"
        />
        <SummaryFooter total={total} />
      </div>
    </div>
  );
};
