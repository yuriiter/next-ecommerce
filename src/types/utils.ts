export type SingleTrueKey<T extends string> = {
  [TrueKey in T]?: true;
} & {
  [FalseKey in T]?: false;
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
