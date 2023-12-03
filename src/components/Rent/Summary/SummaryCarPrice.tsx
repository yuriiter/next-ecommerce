import { CarPriceItem } from "./CarPriceItem";

type SummaryCarPriceProps = {
  subtotal: number;
  tax: number;
  promo: number;
};

export const SummaryCarPrice = ({
  subtotal,
  tax,
  promo,
}: SummaryCarPriceProps) => {
  return (
    <div className="summary__car-price">
      <CarPriceItem name="Subtotal" value={subtotal} />
      <CarPriceItem name="Tax" value={tax} />
      <CarPriceItem name="Promo discount" value={promo} />
    </div>
  );
};
