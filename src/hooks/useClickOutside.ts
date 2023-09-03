import { MouseEventHandler, RefObject, useEffect } from "react";

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
      document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [elementRef, callback]);
};
