export const mod = (a: number, n: number): number => {
  return a - n * Math.floor(a / n);
};

export const clamp = (min: number, max: number, value: number) =>
  Math.min(Math.max(value, min), max);

export const makeCapacityString = (peopleCapacity: number) =>
  peopleCapacity === 1 ? "1 person" : `${peopleCapacity} people`;
