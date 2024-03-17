export type Nullable<T> = T | null | undefined

export type AllOrNothing<T extends Record<string, any>> =
    | {
          [K in keyof T]: T[K]
      }
    | {
          [K in keyof T]?: never
      }
