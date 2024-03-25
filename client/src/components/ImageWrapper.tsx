import Image, { ImageProps, StaticImageData } from "next/image";
import { SyntheticEvent } from "react";
import carFallbackImage from "@/assets/img/car-fallback.png";

type ImageWrapperProps = ImageProps & {
  fallbackImgSrc?: string | StaticImageData;
};

export const ImageWrapper = ({
  fallbackImgSrc,
  alt,
  ...rest
}: ImageWrapperProps) => {
  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      typeof fallbackImgSrc === "string"
        ? fallbackImgSrc
        : fallbackImgSrc?.src ?? carFallbackImage.src;
  };

  return <Image layout="fill" alt={alt} {...rest} onError={onError} />;
};
