import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

const useURLQueryState = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const router = useRouter();

  const getQueryValue = useCallback((): T => {
    const queryValue = router.query[key];
    if (queryValue !== undefined) {
      try {
        return queryValue as T;
      } catch (error) {
        console.error("Error parsing query value:", error);
      }
    }
    return initialValue;
  }, [key, initialValue, router.query]);

  const setQueryValue = useCallback(
    (value: T) => {
      const query = { ...router.query };
      if (typeof value === "object")
        query[key] = encodeURIComponent(JSON.stringify(value));
      else query[key] = value;
      if (value === undefined || value === null) delete query[key];
      router.replace({ pathname: router.pathname, query }, undefined, {
        shallow: true,
      });
    },
    [key, router],
  );

  const currentState = useMemo(() => getQueryValue(), [getQueryValue]);

  const updateQuery = useCallback(
    (value: T) => {
      setQueryValue(value);
    },
    [setQueryValue],
  );

  return [currentState, updateQuery];
};

export default useURLQueryState;
