import { TypographyComponent, TypographySize, TypographyWeight } from "./types";

export const typographyComponents = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
] as const;

export const typographyWeights = [
  "regular",
  "medium",
  "semibold",
  "bold",
] as const;

export const typographySizes = [
  12, 14, 16, 18, 20, 24, 32, 36, 40, 72,
] as const;

export const defaultTypographyComponent: TypographyComponent = "p";

export const defaultTypographyWeight: TypographyWeight = "regular";

export const defaultTypographySize: TypographySize = 16;
