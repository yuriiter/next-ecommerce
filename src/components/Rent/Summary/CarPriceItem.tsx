type CarPriceItemProps = {
  name: string;
  value: number;
};

export const CarPriceItem = ({ name, value }: CarPriceItemProps) => {
  return (
    <div className="car-price__item">
      <span className="car-price__name">{name}</span>
      <span className="car-price__value">${value.toFixed(2)}</span>
    </div>
  );
};
