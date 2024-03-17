import { CSSProperties } from "react";
import { ZodError, ZodSchema, z } from "zod";
import { Time } from "./components/Select/TimeInput/types";

export const mod = (a: number, n: number): number => {
  return a - n * Math.floor(a / n);
};

export const clamp = (min: number, max: number, value: number) =>
  Math.min(Math.max(value, min), max);

export const makeCapacityString = (peopleCapacity: number) =>
  peopleCapacity === 1 ? "1 person" : `${peopleCapacity} people`;

export const cn = (classNames: (string | undefined | null | boolean)[]) =>
  classNames
    .filter(
      (className) => typeof className === "string" && className.length > 0
    )
    .join(" ");

export const joinStyles = (
  styles: (CSSProperties | undefined | null | boolean)[]
): CSSProperties => {
  const validStyles = styles.filter(
    (style) => typeof style === "object" && style !== null
  ) as CSSProperties[];

  const mergedStyles = validStyles.reduce((acc, style) => {
    return { ...acc, ...style };
  }, {});

  return mergedStyles;
};

export const copy = <T>(ob: T) => JSON.parse(JSON.stringify(ob)) as T;

export const uuid = () => {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

export const promisedTimeout = (duration: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), duration);
  });

export const isValidJSON = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

export const zodResolver = <T>(schema: ZodSchema<T>) => {
  return (data: Partial<z.infer<typeof schema>>) => {
    try {
      schema.parse(data);
      return {};
    } catch (e) {
      if (e instanceof ZodError) {
        return e.flatten().fieldErrors;
      } else throw e;
    }
  };
};

export const setTimeOfDate = (originalDate: Date, time: Time): Date => {
  const year = originalDate.getFullYear();
  const month = originalDate.getMonth();
  const day = originalDate.getDate();

  let { hr, min, ampm } = time;

  if (ampm === "PM" && hr !== 12) {
    hr = hr + 12;
  } else if (ampm === "AM" && hr === 12) {
    hr = 0;
  }

  const newDate: Date = new Date(year, month, day, hr, min);

  return newDate;
};

export const dateOrDateStringToDate = (
  dateOrDateString: string | Date | undefined
) =>
  typeof dateOrDateString === "string"
    ? new Date(dateOrDateString)
    : dateOrDateString;
