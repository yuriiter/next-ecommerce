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
  "12",
  "14",
  "16",
  "18",
  "20",
  "24",
  "32",
  "36",
  "40",
  "72",
] as const;

export const typographyColorVariants = [
  "primary",
  "success",
  "error",
  "warning",
  "information",
  "secondary",
] as const;

export const typographyColorWeights = [
  "0",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as const;

export const typographyColors = typographyColorVariants.flatMap((variant) =>
  typographyColorWeights.map((weight) => `${variant}${weight}`)
);

export const defaultTypographyComponent = "p" as const;

export const defaultTypographyWeight = "regular" as const;

export const defaultTypographySize = "16" as const;
