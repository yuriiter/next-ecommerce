import React from "react";
import { Button } from "./Button";
import { BannerArrowBg, BannerEllipseBg } from "./svg/images";
import { cn } from "@/utils";
import { ImageData } from "@/types";

type BannerProps = {
  title?: string;
  description?: string;
  variant: "light" | "dark";
  className?: string;
  carPicture: string | ImageData;
} & (
  | { buttonText: string; href?: never; onClick: () => void }
  | { buttonText: string; href: string; onClick?: never }
  | { buttonText?: never; href?: never; onClick?: never }
);

export const Banner = ({
  title,
  description,
  variant,
  buttonText,
  carPicture,
  className,
  ...rest
}: BannerProps) => {
  const bannerVariantClassName = `banner--${variant}`;
  return (
    <div className={cn(["banner", bannerVariantClassName, className])}>
      <div className="banner__bg">
        {variant === "light" ? (
          <BannerEllipseBg
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMinYMin slice"
          />
        ) : (
          <BannerArrowBg
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMinYMin slice"
          />
        )}
      </div>
      <div className="banner__text">
        <h3 className="banner__title">{title}</h3>
        <p className="banner__description">{description}</p>
      </div>

      {buttonText && (
        <Button
          size="lg"
          onClick={rest.onClick}
          href={rest.href}
          className="banner__button"
        >
          {buttonText}
        </Button>
      )}

      <img
        className="banner__car-img"
        alt={`Car for rental. ${title}`}
        src={
          typeof carPicture === "string"
            ? carPicture
            : carPicture.img?.url ?? ""
        }
      />
    </div>
  );
};
