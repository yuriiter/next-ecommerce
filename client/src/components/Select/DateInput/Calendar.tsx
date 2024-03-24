import React from "react";
import { useCalendar } from "./useCalendar";
import { daysOfWeek, months } from "./constants";
import { cn, mod } from "@/utils";
import { ArrowDownIcon } from "@/components/svg/icons";

type CalendarProps = {
  min: Date;
  max?: Date;
  value: Date | undefined;
  onChange: (newValue: Date) => void;
};

export const Calendar = ({ min, max, value, onChange }: CalendarProps) => {
  const { monthPage, yearPage, incrementMonth, decrementMonth, calendarCells } =
    useCalendar(value, onChange, min, max);

  return (
    <>
      <div className="calendar__selected-date">
        <div
          className={cn([
            "calendar__selected-year",
            !value && "calendar__selected-year--not-selected",
          ])}
        >
          {value ? value.getFullYear() : yearPage}
        </div>
        {value && (
          <div className="calendar__selected-day-month">
            {daysOfWeek[mod(value.getDay() - 1, 7)].slice(0, 3)},{" "}
            {months[value.getMonth()].slice(0, 3)}
          </div>
        )}
      </div>
      <div className="calendar__controllers">
        <button
          className="calendar__arrow calendar__arrow--left"
          onClick={decrementMonth}
          disabled={
            monthPage - 1 < min.getMonth() && yearPage <= min.getFullYear()
          }
        >
          <ArrowDownIcon />
        </button>
        <div className="calendar__date-page">
          {months[monthPage]} {yearPage}
        </div>
        <button
          className="calendar__arrow calendar__arrow--right"
          onClick={incrementMonth}
          disabled={
            max &&
            monthPage + 1 > max.getMonth() &&
            yearPage >= max.getFullYear()
          }
        >
          <ArrowDownIcon />
        </button>
      </div>
      <div className="calendar__days">
        {daysOfWeek.map((dayOfWeek) => (
          <div
            key={dayOfWeek}
            className="calendar__day-container calendar__days-of-week"
          >
            {dayOfWeek.slice(0, 2)}
          </div>
        ))}
        {calendarCells}
      </div>
    </>
  );
};
