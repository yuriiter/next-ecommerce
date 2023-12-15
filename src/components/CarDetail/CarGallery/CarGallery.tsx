import React, { useState } from "react";
import { CarPickedImg } from "./CarPickedImg";
import { CarData } from "@/types";
import { CarGalleryItem } from "./CarGalleryItem";

type CarGalleryProps = Pick<
  CarData,
  "title" | "subtitle" | "thumbnail" | "photos"
>;

export const CarGallery = ({
  title,
  subtitle,
  thumbnail,
  photos = [],
}: CarGalleryProps) => {
  const [pickedImg, setPickedImg] = useState(thumbnail);
  const galleryItems = [thumbnail, ...photos.slice(0, 2)];

  return (
    <div className="car-detail__gallery">
      <CarPickedImg
        src={pickedImg}
        thumbnail={thumbnail}
        title={title}
        subtitle={subtitle}
      />
      {galleryItems.map((galleryItemSrc, idx) => {
        const onChoose = () => setPickedImg(galleryItemSrc);
        const isPicked = pickedImg === galleryItemSrc;
        const isThumbnail = galleryItemSrc === thumbnail;
        return (
          <CarGalleryItem
            key={idx}
            isThumbnail={isThumbnail}
            isPicked={isPicked}
            src={galleryItemSrc}
            title={title}
            onChoose={onChoose}
          />
        );
      })}
    </div>
  );
};
