import React, { ReactNode } from "react";
import { Button } from "./Button";
import { BannerArrowBg, BannerEllipseBg } from "./svg/images";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type BannerProps = {
  title: string;
  description: string;
  variant: "light" | "dark";
  buttonText: string;
  carPicture: string | StaticImport;
} & ({ href?: never; onClick: () => void } | { href: string; onClick?: never });

export const Banner = ({
  title,
  description,
  variant,
  buttonText,
  carPicture,
  ...rest
}: BannerProps) => {
  const bannerVariantClassName = `banner--${variant}`;
  return (
    <div className={`banner ${bannerVariantClassName}`}>
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

      {"href" in rest ? (
        <Button size="lg" href={rest.href} className="banner__button">
          {buttonText}
        </Button>
      ) : (
        <Button size="lg" onClick={rest.onClick} className="banner__button">
          {buttonText}
        </Button>
      )}

      <Image
        className="banner__car-img"
        alt={`Car for rental. ${title}`}
        src={carPicture}
      />
    </div>
  );
};
