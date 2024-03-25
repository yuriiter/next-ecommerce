import { StringUnionToBooleanKeys } from "@/types/utils";
import { CSSProperties, ReactNode } from "react";
import {
  typographyColorVariants,
  typographyColorWeights,
  typographyComponents,
  typographySizes,
  typographyWeights,
} from "./constants";

export type TypographyComponent = (typeof typographyComponents)[number];

export type TypographyWeight = (typeof typographyWeights)[number];

export type TypographySize = (typeof typographySizes)[number];

export type TypographyColorVariant = (typeof typographyColorVariants)[number];

export type TypographyColorWeight = (typeof typographyColorWeights)[number];

type TypographyComponentProp =
  | {
      c?: TypographyComponent;
    }
  | {
      component?: TypographyComponent;
    }
  | StringUnionToBooleanKeys<TypographyComponent>;

type TypographyWeightProp =
  | {
      w?: TypographyWeight;
    }
  | {
      weight?: TypographyWeight;
    }
  | StringUnionToBooleanKeys<TypographyWeight>;

type TypographySizeProps =
  | {
      s?: TypographySize;
    }
  | {
      size?: TypographySize;
    };

export type ColorMap = {
  [Variant in TypographyColorVariant as `${Variant}${TypographyColorWeight}`]?: boolean;
};

type TypographyColorProps = { color: CSSProperties["color"] } | ColorMap;

type TypographyGeneralProps = {
  className?: string;
  children?: ReactNode;
};

export type TypographyProps = TypographyComponentProp &
  TypographyWeightProp &
  TypographySizeProps &
  TypographyGeneralProps &
  TypographyColorProps;
