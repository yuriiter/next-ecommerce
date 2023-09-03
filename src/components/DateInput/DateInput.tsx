import React, { ReactNode, useEffect, useMemo, useRef } from "react";
import { ArrowDownIcon } from "../svg/icons";
import { useCalendar } from "./useCalendar";
import { generateMonthDays, monthDaysGaps } from "./utils";
import { mod } from "@/utils";
import { assert } from "console";
import { useClickOutside } from "@/hooks/useClickOutside";

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
const engDaysOfWeek = [
  "sun",
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
] as const;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const dateToString = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

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
  const valueAsString = useMemo(
    () => (value ? dateToString(value) : value),
    [value]
  );
  const {
    startAndEndOfMonth,
    isCalendarOpen,
    setIsCalendarOpen,
    monthPage,
    setMonthPage,
    yearPage,
    setYearPage,
  } = useCalendar(value);

  const calendarRef = useRef<HTMLDivElement>(null);
  useClickOutside(calendarRef, () => setIsCalendarOpen(false));

  const toggleIsCalendarOpen = () => setIsCalendarOpen((prev) => !prev);

  const calendarCells = useMemo(() => {
    const [startDate, endDate] = startAndEndOfMonth;
    const dayOfWeekStart = startDate.getDay();

    const cells: ReactNode[] = [];

    for (let i = 0; i < mod(dayOfWeekStart - 1, 7); i++) {
      cells.push(
        <div key={`startGap-${i}`} className="calendar__day-container"></div>
      );
    }
    for (let i = startDate.getDate(); i <= endDate.getDate(); i++) {
      const handleSelect = () => {
        const copyCurrentMonthDate = new Date(startDate);
        copyCurrentMonthDate.setDate(i);
        onChange(copyCurrentMonthDate);
      };

      const isSelected =
        value?.getDate() === i &&
        value?.getFullYear() === yearPage &&
        value?.getMonth() === monthPage;

      const isDisabled =
        min.getTime() >
          new Date(
            yearPage,
            monthPage,
            i,
            min.getHours(),
            min.getMinutes(),
            min.getSeconds(),
            min.getMilliseconds()
          ).getTime() ||
        (max &&
          max.getTime() <
            new Date(
              yearPage,
              monthPage,
              i,
              max.getHours(),
              max.getMinutes(),
              max.getSeconds(),
              max.getMilliseconds()
            ).getTime());

      cells.push(
        <button
          disabled={isDisabled}
          key={`day-${i}`}
          className={`calendar__day-container calendar__days-of-month ${
            isSelected ? "calendar__days-of-month--selected" : ""
          }`}
          onClick={handleSelect}
        >
          <span className="calendar__day">{i}</span>
        </button>
      );
    }

    return cells;
  }, [startAndEndOfMonth, value]);

  const incrementMonth = () => {
    if (monthPage === 11) {
      setMonthPage(0);
      setYearPage((prevYearPage) => prevYearPage + 1);
    } else setMonthPage((prevMonthPage) => prevMonthPage + 1);
  };

  const decrementMonth = () => {
    if (monthPage === 0) {
      setMonthPage(11);
      setYearPage((prevYearPage) => prevYearPage - 1);
    } else setMonthPage((prevMonthPage) => prevMonthPage - 1);
  };

  return (
    <div className="date-input">
      <div className="date-input__data" onClick={toggleIsCalendarOpen}>
        {valueAsString && (
          <span className="date-input__value">{valueAsString}</span>
        )}
        {!valueAsString && placeholder && (
          <span className="date-input__placeholder">{placeholder}</span>
        )}
        <ArrowDownIcon
          className={`date-input__arrow-down ${
            isCalendarOpen ? "date-input__arrow-down--rotate" : ""
          }`}
        />
      </div>
      <div
        ref={calendarRef}
        className={`calendar date-input__calendar ${
          isCalendarOpen ? "date-input__calendar--open" : ""
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
