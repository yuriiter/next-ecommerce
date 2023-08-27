import React, { ReactNode } from "react";
import { Button } from "./Button";
import { BannerArrowBg, BannerEllipsBg } from "./svg/images";

type BannerProps = {
  title: string;
  description: string;
  variant: "light" | "dark";
  buttonText: string;
} & ({ href?: never; onClick: () => void } | { href: string; onClick?: never });

export const Banner = ({
  title,
  description,
  variant,
  buttonText,
  ...rest
}: BannerProps) => {
  const bannerVariantClassName = `banner--${variant}`;

  return (
    <div className={`banner ${bannerVariantClassName}`}>
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
    </div>
  );
};
