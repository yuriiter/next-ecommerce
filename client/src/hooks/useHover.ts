import { useState } from "react";

export const useHover = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  return {
    isHover,
    onMouseEnter,
    onMouseLeave,
  };
};
