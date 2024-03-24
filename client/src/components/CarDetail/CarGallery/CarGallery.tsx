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

  const pickedImgSrc = pickedImg?.img?.url;

  return (
    <div className="car-detail__gallery">
      {pickedImgSrc !== undefined && (
        <CarPickedImg
          src={pickedImgSrc}
          thumbnail={thumbnail}
          title={title}
          subtitle={subtitle}
        />
      )}
      {galleryItems.map((galleryItemSrc, idx) => {
        const onChoose = () => setPickedImg(galleryItemSrc);
        const isPicked = pickedImg === galleryItemSrc;
        const isThumbnail = galleryItemSrc === thumbnail;
        const imgUrl = galleryItemSrc?.img?.url;
        if (!imgUrl) return;
        return (
          <CarGalleryItem
            key={idx}
            isThumbnail={isThumbnail}
            isPicked={isPicked}
            src={imgUrl}
            title={title}
            onChoose={onChoose}
          />
        );
      })}
    </div>
  );
};
