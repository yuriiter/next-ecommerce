import React from "react";
import Image from "next/image";
import { Banner } from "@/components/Banner";
import { CarData } from "@/types";

type CarPickedImgType = {
  src: string;
} & Pick<CarData, "title" | "subtitle" | "thumbnail">;

export const CarPickedImg = ({
  title,
  subtitle,
  src,
  thumbnail,
}: CarPickedImgType) => {
  return (
    <div className="car-detail__gallery-picked">
      {src !== thumbnail ? (
        <Image src={src} alt={`Rent car - ${title}`} />
      ) : (
        <Banner
          title={title}
          description={subtitle}
          variant="dark"
          carPicture={src}
        />
      )}
    </div>
  );
};
