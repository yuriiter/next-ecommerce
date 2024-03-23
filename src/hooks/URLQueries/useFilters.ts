import { useCallback, useMemo } from "react";
import { sidebarInputs } from "@/constants/mockupData";
import { SidebarInputGroup } from "@/components/Sidebar/types";
import { useURLQueryObjectState } from "./useURLQueryObjectState";
import { copy, sidebarInputsToQueryState } from "@/utils";
import useURLQueryState from "./useURLQueryState";

export const useFilters = (): [SidebarInputGroup[], typeof onChangeFilters] => {
  const [_pageSize, setPageSize] = useURLQueryState<number | undefined>(
    "pageSize",
    undefined
  );
  const [filters, setFilters] = useURLQueryObjectState(
    sidebarInputsToQueryState(sidebarInputs)
  );

  const onChangeFilters = useCallback(
    (key: string, newValue: boolean | number) => {
      const sidebarInputsCopy = copy(filtersFormValues);

      for (const group of sidebarInputsCopy) {
        const searchedInput = group.inputs.find(
          ({ key: iteratedKey }) => iteratedKey === key
        );
        if (!searchedInput) continue;
        searchedInput.value = newValue;
        setPageSize(undefined);
        setFilters(sidebarInputsToQueryState(sidebarInputsCopy));
        window.scrollTo({ top: 0 });
        break;
      }
    },
    [setFilters, setPageSize]
  );

  const filtersFormValues = useMemo(() => {
    const sidebarInputsCopy = copy(sidebarInputs);
    sidebarInputsCopy.forEach((group) =>
      group.inputs.forEach((input) => {
        input.value = filters[input.key] ?? input.value;
      })
    );

    return sidebarInputsCopy;
  }, [filters]);

  return [filtersFormValues, onChangeFilters];
};
