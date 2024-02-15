import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

const floatRegex = /^-?\d+(\.\d+)?$/;

const transformString = (value: string | string[] | undefined) => {
  if (value === "true" || value === "True" || value === "") return true;
  else if (value === "false" || value === "False") return false;
  else if (Array.isArray(value) || value === undefined) return value;
  else if (floatRegex.test(value)) return parseFloat(value);
  else return value;
};

export const useURLQueryObjectState = <T extends Record<string, unknown>>(
  initialValue: T,
): [T, (newValue: T) => void] => {
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
    (newValue: T) => {
      console.log("bp1", newValue);
      const keyValuePairsToSave = Object.entries(newValue).reduce(
        (acc, [key, value]) => {
          if (value === undefined || value === initialValue[key]) {
            delete acc[key];
          } else {
            acc[key] = value;
          }
          return acc;
        },
        {},
      );

      const newQuery = {
        categoryId: router.query.categoryId,
        ...keyValuePairsToSave,
      };

      router.replace({ query: newQuery }, undefined, {
        shallow: true,
      });
    },
    [router],
  );
  // console.log(JSON.stringify(currentState));

  return [currentState, updateQuery];
};
