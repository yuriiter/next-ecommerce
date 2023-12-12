import React from "react";
import {
  TypographyComponent,
  TypographyProps,
  TypographySize,
  TypographyWeight,
} from "./types";
import {
  defaultTypographyComponent,
  defaultTypographySize,
  defaultTypographyWeight,
  typographyComponents,
  typographyWeights,
  typographyColors,
} from "./constants";
import { cn } from "@/utils";

export const Typography = ({
  className,
  children,
  ...rest
}: TypographyProps) => {
  const restKeys = Object.keys(rest);

  const Component: TypographyComponent =
    ("c" in rest
      ? rest.c
      : "component" in rest
        ? rest.component
        : typographyComponents.find((typographyComponentVariant) =>
            restKeys.includes(typographyComponentVariant),
          )) || defaultTypographyComponent;

  const weight: TypographyWeight =
    ("w" in rest
      ? rest.w
      : "weight" in rest
        ? rest.weight
        : typographyWeights.find((typographyWeightVariant) =>
            restKeys.includes(typographyWeightVariant),
          )) || defaultTypographyWeight;

  const size: TypographySize =
    ("s" in rest
      ? rest.s
      : "size" in rest
        ? rest.size
        : defaultTypographySize) || defaultTypographySize;

  const cssColor = "color" in rest ? rest.color : undefined;

  const [customColor] = Object.entries(rest).find(
    ([restKey, restValue]) =>
      restValue === true && typographyColors.includes(restKey),
  ) || [undefined];

  const typographyVariantClassName = `typography--text-style-${weight}-type-${size}`;
  const typographyColorClassName = customColor && `typography--${customColor}`;

  return (
    <Component
      style={{ color: cssColor }}
      className={cn([
        "typography",
        typographyVariantClassName,
        typographyColorClassName,
        className,
      ])}
    >
      {children}
    </Component>
  );
};
