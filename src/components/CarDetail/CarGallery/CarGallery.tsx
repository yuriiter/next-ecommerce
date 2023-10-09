import React, { useState } from "react";
import Image from "next/image";
import { CarPickedImg } from "./CarPickedImg";
import { CarData } from "@/types";
import { Banner } from "@/components/Banner";
import { BannerArrowBg } from "@/components/svg/images";

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
      {galleryItems.map((galleryItemSrc) => {
        const onChoose = () => setPickedImg(galleryItemSrc);
        const isPicked = pickedImg === galleryItemSrc;
        const isThumbnail = galleryItemSrc === thumbnail;
        return (
          <div
            onClick={onChoose}
            className={`car-detail__gallery-item
            ${isPicked ? "car-detail__gallery-item--picked" : ""}
            ${isThumbnail ? "car-detail__gallery-item--thumbnail" : ""}
            `}
            key={galleryItemSrc}
          >
            <div className="car-detail__item-wrapper">
              {isThumbnail && (
                <BannerArrowBg
                  className="car-detail__gallery-item-bg"
                  viewBox="0 0 1920 1080"
                  preserveAspectRatio="xMinYMin slice"
                />
              )}
              <Image
                className="car-detail__item-img"
                src={galleryItemSrc}
                alt={`Rent car - ${title}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
