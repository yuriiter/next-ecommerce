import { SidebarInputGroup } from "./components/Sidebar/types";

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
      (className) => typeof className === "string" && className.length > 0,
    )
    .join(" ");

export const copy = <T>(ob: T) => JSON.parse(JSON.stringify(ob)) as T;
