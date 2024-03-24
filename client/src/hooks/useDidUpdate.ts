import { useEffect, useRef } from "react";

export const useDidUpdate: typeof useEffect = (cb, deps) => {
  const didMountFlagRef = useRef(false);

  useEffect(() => {
    if (!didMountFlagRef.current) {
      didMountFlagRef.current = true;
      return;
    }
    return cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
