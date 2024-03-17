import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

const useURLQueryState = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const router = useRouter();

  const getQueryValue = useCallback((): T => {
    const queryValue = router.query[key];
    if (queryValue !== undefined) {
      try {
        return JSON.parse(decodeURIComponent(queryValue as string)) as T;
      } catch (error) {
        return decodeURIComponent(queryValue as string) as T;
      }
    }
    return initialValue;
  }, [key, JSON.stringify(router.query[key])]);

  const setQueryValue = useCallback(
    (value: T) => {
      const { query } = router;
      if (typeof value === "string") query[key] = value;
      else query[key] = encodeURIComponent(JSON.stringify(value));
      if (value === undefined || value === null) delete query[key];
      router.push({ query }, undefined, { shallow: true });
    },
    [key, router, router.query]
  );

  const currentState = useMemo(() => getQueryValue(), [getQueryValue]);

  const updateQuery = useCallback(
    (value: T) => {
      setQueryValue(value);
    },
    [setQueryValue]
  );

  return [currentState, updateQuery];
};

export default useURLQueryState;
