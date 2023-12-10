import { SingleTrueKey } from "@/types/utils";
import {
  typographyComponents,
  typographySizes,
  typographyWeights,
} from "./constants";
import { ReactNode } from "react";

export type TypographyComponent = (typeof typographyComponents)[number];

export type TypographyWeight = (typeof typographyWeights)[number];

export type TypographySize = (typeof typographySizes)[number];

type TypographyComponentProp =
  | {
      c?: TypographyComponent;
    }
  | {
      component?: TypographyComponent;
    }
  | SingleTrueKey<TypographyComponent>;

type TypographyWeightProp =
  | {
      w?: TypographyWeight;
    }
  | {
      weight?: TypographyWeight;
    }
  | SingleTrueKey<TypographyWeight>;

type TypographySizeProps =
  | {
      s?: TypographySize;
    }
  | {
      size?: TypographySize;
    };

type TypographyGeneralProps = {
  className?: string;
  children?: ReactNode;
};

export type TypographyProps = TypographyComponentProp &
  TypographyWeightProp &
  TypographySizeProps &
  TypographyGeneralProps;
