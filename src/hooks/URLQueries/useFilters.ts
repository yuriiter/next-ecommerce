import { useCallback, useMemo } from "react";
import { sidebarInputs } from "@/constants/mockupData";
import { SidebarInputGroup } from "@/components/Sidebar/types";
import { useURLQueryObjectState } from "./useURLQueryObjectState";
import { copy } from "@/utils";

const sidebarInputsToQueryState = (sidebarInputs: SidebarInputGroup[]) =>
  sidebarInputs.reduce((filtersObject, { groupName, inputs }) => {
    const inputsString = inputs
      .filter(({ value }) => ![null, undefined, false, ""].includes(value))
      .join(",");

    if (inputsString !== "") filtersObject[groupName] = inputsString;
    return filtersObject;
  }, {});

export const useFilters = (): [
  SidebarInputGroup[],
  (
    inputGroupName: string,
    inputName: string,
    newValue: boolean | number,
  ) => void,
] => {
  const [filters, setFilters] = useURLQueryObjectState(
    sidebarInputsToQueryState(sidebarInputs),
  );

  const onChangeFilters = useCallback(
    (key: string, newValue: boolean | number) => {
      const sidebarInputsCopy = copy(filtersFormValues);

      for (const group of sidebarInputsCopy) {
        const searchedInput = group.inputs.find(
          ({ key: iteratedKey }) => iteratedKey === key,
        );
        if (!searchedInput) continue;
        searchedInput.value = newValue;
        setFilters(sidebarInputsToQueryState(sidebarInputsCopy));
        break;
      }
    },
    [filters, setFilters],
  );

  const filtersFormValues = useMemo(() => {
    const sidebarInputsCopy = copy(sidebarInputs);
    sidebarInputsCopy.forEach((group) =>
      group.inputs.forEach((input) => {
        input.value = filters[input.key] ?? input.value;
      }),
    );

    return sidebarInputsCopy;
  }, [filters]);

  return [filtersFormValues, onChangeFilters];
};
