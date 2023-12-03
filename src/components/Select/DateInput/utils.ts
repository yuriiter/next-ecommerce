export const dateToString = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const stringToDate = (dateAsString: string) => new Date(dateAsString);
