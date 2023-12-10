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
} from "./constants";
import { cn } from "@/utils";

export const Typography = ({
  className,
  children,
  ...rest
}: TypographyProps) => {
  const Component: TypographyComponent =
    ("c" in rest
      ? rest.c
      : "component" in rest
        ? rest.component
        : typographyComponents.find((typographyComponentVariant) =>
            Object.keys(rest).includes(typographyComponentVariant),
          )) || defaultTypographyComponent;

  const weight: TypographyWeight =
    ("w" in rest
      ? rest.w
      : "weight" in rest
        ? rest.weight
        : typographyWeights.find((typographyWeightVariant) =>
            Object.keys(rest).includes(typographyWeightVariant),
          )) || defaultTypographyWeight;

  const size: TypographySize =
    ("s" in rest
      ? rest.s
      : "size" in rest
        ? rest.size
        : defaultTypographySize) || defaultTypographySize;

  const typographyVariantClassName = `typography--text-style-${weight}-type-${size}`;

  return (
    <Component
      className={cn(["typography", typographyVariantClassName, className])}
    >
      {children}
    </Component>
  );
};
