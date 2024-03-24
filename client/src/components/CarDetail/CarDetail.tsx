import { CarData } from "@/types";
import { CarGallery } from "./CarGallery/CarGallery";
import { CarDescription } from "./CarDescription";
import { CarReviews } from "./CarReviews";
import { Typography } from "../Typography/Typography";
import { LoadingPoints } from "../LoadingPoints";

type CarDetailProps = {
  data: CarData | undefined;
  loading: boolean;
};

export const CarDetail = ({ data, loading }: CarDetailProps) => {
  if (loading)
    return (
      <Typography className="text-center" secondary300 size="16">
        Loading <LoadingPoints />
      </Typography>
    );
  if (!data)
    return (
      <Typography className="text-center" secondary300 size="16">
        Not found
      </Typography>
    );

  const { title, subtitle, thumbnail, photos, reviews } = data;

  return (
    <div className="car-detail">
      <CarGallery
        title={title}
        subtitle={subtitle}
        thumbnail={thumbnail}
        photos={photos}
      />
      <CarDescription carData={data} />
      <CarReviews reviews={reviews} />
    </div>
  );
};
