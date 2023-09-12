import { SelectOption } from "../types";
import { Time } from "./types";

export const timeAsString = (time: Time) =>
  `${time.hr.toString().padStart(2, "0")}:${time.min
    .toString()
    .padStart(2, "0")} ${time.ampm}`;

export const stringAsTime = (str: string) => {
  const regex = /^(\d{2}):(\d{2})\s(AM|PM)$/;

  const matches = str.match(regex);

  if (matches) {
    const hr = parseInt(matches[1], 10);
    const min = parseInt(matches[2], 10);
    const ampm = matches[3];

    if (hr >= 1 && hr <= 12 && min >= 0 && min <= 59) {
      return { hr, min, ampm } as Time;
    }
  }

  throw new Error("Cannot parse string as Time: invalid format");
};

export const timeAsSelectOption = (time: Time) => {
  const timeString = timeAsString(time);
  const timeAmPM = timeString.split(" ");
  return {
    value: timeString,
    label: timeAmPM[0],
    icon: timeAmPM[1],
  } as SelectOption;
};

export const generateTimeOptions = () => {
  const amTimes: Time[] = [];
  const pmTimes: Time[] = [];

  for (let hr = 1; hr <= 12; hr++) {
    for (let min = 0; min < 60; min += 30) {
      const amTime: Time = {
        hr,
        min,
        ampm: "AM",
      };
      const pmTime: Time = {
        hr,
        min,
        ampm: "PM",
      };
      amTimes.push(amTime);
      pmTimes.push(pmTime);
    }
  }
  return [...amTimes, ...pmTimes];
};
