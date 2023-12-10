import { useCallback, useEffect, useState, useRef } from "react";

export const useHideNavigation = () => {
  const [hide, setHide] = useState(false);
  const prevScrollTopRef = useRef<number>(0);

  useEffect(() => {
    prevScrollTopRef.current = window.scrollY;
  }, []);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setHide(scrollY > prevScrollTopRef.current && scrollY > 132);
    prevScrollTopRef.current = scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hide;
};
