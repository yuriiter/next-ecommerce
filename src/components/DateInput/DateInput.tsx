import React from "react";
import { ArrowDownIcon } from "../svg/icons";
import { useCalendar } from "./useCalendar";
import { mod } from "@/utils";
import { dateToString } from "./utils";
import { daysOfWeek, months } from "./constants";

type DateInputProps = {
  placeholder?: string;
  min?: Date;
  max?: Date;
  value: Date | undefined;
  onChange: (newValue: Date) => void;
};

export const DateInput = ({
  placeholder,
  min = new Date(),
  max,
  value,
  onChange,
}: DateInputProps) => {
  const {
    isCalendarOpen,
    toggleIsCalendarOpen,
    monthPage,
    yearPage,
    incrementMonth,
    decrementMonth,
    calendarCells,
    calendarRef,
  } = useCalendar(value, onChange, min, max);

  const valueAsString = value ? dateToString(value) : value;

  return (
    <div ref={calendarRef} className="select">
      <div className="select__data" onClick={toggleIsCalendarOpen}>
        {valueAsString && (
          <span className="select__value">{valueAsString}</span>
        )}
        {!valueAsString && placeholder && (
          <span className="select__placeholder">{placeholder}</span>
        )}
        <ArrowDownIcon
          className={`select__arrow-down ${
            isCalendarOpen ? "select__arrow-down--rotate" : ""
          }`}
        />
      </div>
      <div
        tabIndex={isCalendarOpen ? 0 : -1}
        className={`calendar select__dropdown ${
          isCalendarOpen ? "select__dropdown--open" : ""
        }`}
      >
        <div className="calendar__selected-date">
          <div
            className={`calendar__selected-year ${
              !value ? "calendar__selected-year--not-selected" : ""
            }`}
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
      </div>
    </div>
  );
};
