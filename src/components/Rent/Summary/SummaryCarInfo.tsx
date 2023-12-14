import { CarGalleryItem } from "@/components/CarDetail/CarGallery/CarGalleryItem";
import { Rating } from "@/components/CarDetail/Rating";
import { Typography } from "@/components/Typography/Typography";
import { cn } from "@/utils";

type WithRating = {
  carRating: number;
  carNumOfVotes?: number;
};

type WithSubtitle = {
  subtitle: string;
};

type SummaryCarInfoProps = {
  thumbnailSrc: string;
  carTitle: string;
  className?: string;
} & (WithRating | WithSubtitle);

export const SummaryCarInfo = ({
  thumbnailSrc,
  carTitle,
  className,
  ...rest
}: SummaryCarInfoProps) => {
  return (
    <div className={cn(["summary__car-info", className])}>
      <CarGalleryItem
        isThumbnail
        isPicked={false}
        src={thumbnailSrc}
        title={carTitle}
        className="summary__car-img"
      />
      <div className="summary__car-title-rating">
        <p className="summary__car-title">{carTitle}</p>

        {"carRating" in rest ? (
          typeof rest.carRating === "number" && (
            <Rating rating={rest.carRating} numOfVotes={rest.carNumOfVotes} />
          )
        ) : (
          <Typography className="summary__car-subtitle" medium size="14">
            {rest.subtitle}
          </Typography>
        )}
      </div>
    </div>
  );
};
