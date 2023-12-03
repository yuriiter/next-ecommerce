import { CarGalleryItem } from "@/components/CarDetail/CarGallery/CarGalleryItem";
import { Rating } from "@/components/CarDetail/Rating";

type SummaryCarInfoProps = {
  thumbnailSrc: string;
  carTitle: string;
  carRating: number;
  carNumOfVotes: number;
};

export const SummaryCarInfo = ({
  thumbnailSrc,
  carTitle,
  carRating,
  carNumOfVotes,
}: SummaryCarInfoProps) => {
  return (
    <div className="summary__car-info">
      <CarGalleryItem
        isThumbnail
        isPicked={false}
        src={thumbnailSrc}
        title={carTitle}
        className="summary__car-img"
      />
      <div className="summary__car-title-rating">
        <p className="summary__car-title">{carTitle}</p>
        <Rating rating={carRating} numOfVotes={carNumOfVotes} />
      </div>
    </div>
  );
};
