import { useEffect, useMemo, useState } from "react";

export const useCalendar = (value: Date | undefined) => {
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
