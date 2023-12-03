import { cn } from "@/utils";
import React from "react";

type PointMarkProps = {
  variant: "dark" | "light" | "empty";
};

export const PointMark = ({ variant }: PointMarkProps) => {
  const isLightVariant = variant === "light";
  const isEmptyVariant = variant === "empty";
  const variantClassName = isLightVariant
    ? "point-mark--light"
    : isEmptyVariant
      ? "point-mark--empty"
      : "";

  return <div className={cn(["point-mark", variantClassName])}></div>;
};
