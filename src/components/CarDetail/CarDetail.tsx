import { CarData } from "@/types";
import { CarGallery } from "./CarGallery/CarGallery";
import { CarDescription } from "./CarDescription";
import { CarReviews } from "./CarReviews";

type CarDetailProps = {
  data: CarData;
};

export const CarDetail = ({ data }: CarDetailProps) => {
  if (!data) return "Loading...";
  const { title, subtitle, thumbnail, photos } = data;

  return (
    <div className="car-detail">
      <CarGallery
        title={title}
        subtitle={subtitle}
        thumbnail={thumbnail}
        photos={photos}
      />
      <CarDescription carData={data} />
      <CarReviews />
    </div>
  );
};
