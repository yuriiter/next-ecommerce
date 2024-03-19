import { CSSProperties } from "react";
import { ZodError, ZodSchema, z } from "zod";
import { Time } from "./components/Select/TimeInput/types";
import { SidebarInputGroup } from "./components/Sidebar/types";
import { PickerData } from "./components/Picker/types";

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

export const sidebarInputsToQueryState = (sidebarInputs: SidebarInputGroup[]) =>
  sidebarInputs.reduce((filtersObject, group) => {
    group.inputs.forEach(({ key, value }) => {
      filtersObject[key] = value;
    });
    return filtersObject;
  }, {});

type ConvertPickerDataParams = {
  pickUpData: PickerData | undefined;
  dropOffData: PickerData | undefined;
};

export const convertPickerData = ({
  pickUpData,
  dropOffData,
}: ConvertPickerDataParams) => {
  const pickUpLocation = pickUpData?.location;
  const pickUpDate =
    pickUpData?.date instanceof Date
      ? pickUpData?.date.toISOString()
      : pickUpData?.date;
  const pickUpTime = pickUpData?.time;
  const dropOffLocation = dropOffData?.location;
  const dropOffDate =
    dropOffData?.date instanceof Date
      ? dropOffData?.date.toISOString()
      : dropOffData?.date;
  const dropOffTime = dropOffData?.time;

  const rentalData = {
    pickUpLocation: pickUpLocation,
    pickUpDate: pickUpDate,
    pickUpTime: pickUpTime,
    dropOffLocation: dropOffLocation,
    dropOffDate: dropOffDate,
    dropOffTime: dropOffTime,
  };

  if (Object.values(rentalData).includes(undefined)) return {};
  else return rentalData;
};

export const deepObjectCompare = (obj1: unknown, obj2: unknown) => {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!deepObjectCompare(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};
