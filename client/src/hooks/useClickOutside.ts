import { RefObject, useEffect } from "react";

export const useClickOutside = (
  elementRef: RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef &&
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        callback(event);
      }
    };

    if (elementRef?.current)
      document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [elementRef, callback]);
};
