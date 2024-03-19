import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useCallback, useMemo } from "react";

const useURLQueryState = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
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
    [key, router]
  );

  const currentState = useMemo(() => getQueryValue(), [getQueryValue]);

  const updateQuery: Dispatch<SetStateAction<T>> = useCallback(
    (action) => {
      if (action instanceof Function) setQueryValue(action(currentState));
      else setQueryValue(action);
    },
    [setQueryValue]
  );

  return [currentState, updateQuery];
};

export default useURLQueryState;
