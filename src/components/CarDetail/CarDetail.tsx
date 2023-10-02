import { CarData } from "@/types";
import { CarGallery } from "./CarGallery";
import { CarDescription } from "./CarDescription";
import { CarReviews } from "./CarReviews";

type CarDetailProps = {
  data: CarData;
};

export const CarDetail = ({ data }: CarDetailProps) => {
  return (
    <div className="car-detail">
      <CarGallery />
      <CarDescription />
      <CarReviews />
    </div>
  );
};
