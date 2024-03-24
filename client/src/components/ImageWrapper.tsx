import { StaticImageData } from "next/image";
import { SyntheticEvent, HTMLProps } from "react";
import carFallbackImage from "@/assets/img/car-fallback.png";

type NextImageProps = HTMLProps<HTMLImageElement> & {
  fallbackImgSrc?: string | StaticImageData;
};

export const ImageWrapper = ({ fallbackImgSrc, ...rest }: NextImageProps) => {
  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      typeof fallbackImgSrc === "string"
        ? fallbackImgSrc
        : fallbackImgSrc?.src ?? carFallbackImage.src;
  };

  return <img {...rest} onError={onError} />;
};
