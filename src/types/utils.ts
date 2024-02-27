import { CSSProperties, HTMLAttributes, ComponentPropsWithoutRef } from "react";

export type StringUnionToBooleanKeys<T extends string> = {
  [TrueKey in T]?: boolean;
};

export type CamelCase<
  S extends string,
  IsStart = true,
> = S extends `${infer First}-${infer Rest}`
  ? IsStart extends true
    ? `${First}${CamelCase<Capitalize<Rest>, false>}`
    : `${Capitalize<First>}${CamelCase<Capitalize<Rest>, false>}`
  : IsStart extends true
    ? undefined
    : Capitalize<S>;

export type WithStyleAndClassName = {
  className?: string;
  style?: CSSProperties;
};

export type Tags = keyof JSX.IntrinsicElements;

export type WithAsProp<T extends Tags> = {
  as?: T | Tags;
} & (ComponentPropsWithoutRef<T> & HTMLAttributes<HTMLOrSVGElement>);
