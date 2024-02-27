import { useRouter } from "next/router";
import { SetStateAction, useCallback, useMemo } from "react";

const floatRegex = /^-?\d+(\.\d+)?$/;

const transformString = (value: string | string[] | undefined) => {
  if (value === "true" || value === "True" || value === "") return true;
  else if (value === "false" || value === "False") return false;
  else if (Array.isArray(value) || value === undefined) return value;
  else if (floatRegex.test(value)) return parseFloat(value);
  else return value;
};

export const useURLQueryObjectState = <T extends Record<string, unknown>>(
  initialValue: T
): [T, (newValueOrAction: SetStateAction<T>) => void] => {
  const router = useRouter();

  const getQueryValue = useCallback((): T => {
    const valueKeys = Object.keys(initialValue);
    const currentValue = valueKeys.reduce((acc, key) => {
      const value = router.query[key];
      if (value === undefined) return acc;

      return {
        ...acc,
        [key]: transformString(value),
      };
    }, {});

    return currentValue as T;
  }, [initialValue, router.query]);

  const currentState = useMemo(() => getQueryValue(), [getQueryValue]);

  const updateQuery = useCallback(
    (newValueOrAction: SetStateAction<T>) => {
      const newValue =
        typeof newValueOrAction !== "function"
          ? newValueOrAction
          : newValueOrAction(currentState);

      const keyValuePairsToSave = Object.entries(newValue).reduce(
        (acc, [key, value]) => {
          if (value === undefined || value === initialValue[key]) {
            delete acc[key];
          } else {
            acc[key] = value;
          }
          return acc;
        },
        {}
      );

      router.push(
        { pathname: window.location.pathname, query: keyValuePairsToSave },
        undefined,
        {
          shallow: true,
        }
      );
    },
    [router]
  );

  return [currentState, updateQuery];
};
