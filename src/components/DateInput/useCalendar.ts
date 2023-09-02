import { useMemo, useState } from "react";

export const useCalendar = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [monthPage, setMonthPage] = useState(new Date().getMonth());
  const [yearPage, setYearPage] = useState(new Date().getFullYear());

  const startAndEndOfMonth: [Date, Date] = useMemo(() => {
    const startDate = new Date(yearPage, monthPage, 1);
    const endDate = new Date(yearPage, monthPage + 1, 0);

    return [startDate, endDate];
  }, [monthPage, yearPage]);

  return {
    startAndEndOfMonth,
    isCalendarOpen,
    setIsCalendarOpen,
    monthPage,
    setMonthPage,
    yearPage,
    setYearPage,
  };
};
