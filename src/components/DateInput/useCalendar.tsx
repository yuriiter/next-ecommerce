import { useClickOutside } from "@/hooks/useClickOutside";
import { mod } from "@/utils";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

export const useCalendar = (
  value: Date | undefined,
  onChange: (newValue: Date) => void,
  min: Date,
  max: Date | undefined
) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [monthPage, setMonthPage] = useState(new Date().getMonth());
  const [yearPage, setYearPage] = useState(new Date().getFullYear());

  const startAndEndOfMonth: [Date, Date] = useMemo(() => {
    const startDate = new Date(yearPage, monthPage, 1);
    const endDate = new Date(yearPage, monthPage + 1, 0);

    return [startDate, endDate];
  }, [monthPage, yearPage]);

  useEffect(() => {
    if (!isCalendarOpen) {
      const currentPageDate = value || new Date();
      setMonthPage(currentPageDate.getMonth());
      setYearPage(currentPageDate.getFullYear());
    }
  }, [isCalendarOpen, value]);

  const calendarRef = useRef<HTMLDivElement>(null);
  useClickOutside(calendarRef, () => setIsCalendarOpen(false));

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

  const toggleIsCalendarOpen = () => setIsCalendarOpen((prev) => !prev);

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

  return {
    isCalendarOpen,
    toggleIsCalendarOpen,
    monthPage,
    yearPage,
    incrementMonth,
    decrementMonth,
    calendarCells,
    calendarRef,
  };
};
