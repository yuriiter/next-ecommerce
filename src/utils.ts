export const mod = (a: number, n: number): number => {
  return a - n * Math.floor(a / n);
};
