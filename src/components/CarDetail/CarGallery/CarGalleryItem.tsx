import React, { useState } from "react";
import Image from "next/image";
import { CarPickedImg } from "./CarPickedImg";
import { CarData } from "@/types";
import { BannerArrowBg } from "@/components/svg/images";
import { cn } from "@/utils";

type CarGalleryItemProps = {
  isThumbnail: boolean;
  isPicked: boolean;
  src: string;
  title: string;
  onChoose?: () => void;
  className?: string;
};

export const CarGalleryItem = ({
  isThumbnail,
  isPicked,
  src,
  title,
  onChoose,
  className,
}: CarGalleryItemProps) => {
  return (
    <div
      onClick={onChoose}
      className={cn([
        "car-detail__gallery-item",
        isPicked && "car-detail__gallery-item--picked",
        isThumbnail && "car-detail__gallery-item--thumbnail",
        className,
      ])}
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
          src={src}
          alt={`Rent car - ${title}`}
        />
      </div>
    </div>
  );
};
