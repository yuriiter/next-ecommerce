import { CardsContainer } from "@/components/Cards";
import { ShowMore } from "@/components/Cards/ShowMore";
import { PickerSection } from "@/components/Picker/PickerSection";
import { usePickerSectionData } from "@/components/Picker/hooks/usePickerSectionData";
import { PickerData } from "@/components/Picker/types";
import { WithSidebarFilters } from "@/components/Sidebar/SidebarFilters/WithSidebarFilters";
import { StandardHead } from "@/components/StandardHead";
import { useFilters } from "@/hooks/URLQueries/useFilters";
import useURLQueryState from "@/hooks/URLQueries/useURLQueryState";
import { useDidUpdate } from "@/hooks/useDidUpdate";
import { useGetCars } from "@/queries/useGetCars";
import { convertPickerData, sidebarInputsToQueryState } from "@/utils";
import { useRouter } from "next/router";
import React from "react";

export default function Cars() {
  const router = useRouter();
  const [filters, onChangeFilters] = useFilters();
  const [carsDisplayLimit, setCarsDisplayLimit] = useURLQueryState(
    "pageSize",
    8
  );

  const { pickUpData, setPickUpData, dropOffData, setDropOffData } =
    usePickerSectionData();
  const [search] = useURLQueryState("search", "");
  const [pickUpStateFromQuery] = useURLQueryState<PickerData>("pickUp", {});
  const [dropOffStateFromQuery] = useURLQueryState<PickerData>("dropOff", {});

  const [carsResponse] = useGetCars({
    queryParams: {
      ...Object.fromEntries(
        Object.entries(sidebarInputsToQueryState(filters)).filter(
          ([, value]) => value !== false
        )
      ),
      ...convertPickerData({
        pickUpData: pickUpStateFromQuery,
        dropOffData: dropOffStateFromQuery,
      }),
      search: search === "" ? undefined : search,
      page: 0,
      pageSize: carsDisplayLimit,
    },
  });

  useDidUpdate(() => {
    if (Array.isArray(router.query) && router.query?.length !== 0)
      setCarsDisplayLimit(8);
  }, [
    JSON.stringify({
      ...Object.fromEntries(
        Object.entries(sidebarInputsToQueryState(filters)).filter(
          ([, value]) => value !== false
        )
      ),
      ...convertPickerData({
        pickUpData: pickUpStateFromQuery,
        dropOffData: dropOffStateFromQuery,
      }),
      search: search === "" ? undefined : search,
    }),
  ]);

  return (
    <>
      <StandardHead pageName="List of cars" />

      <WithSidebarFilters inputs={filters} onChangeFilters={onChangeFilters}>
        <PickerSection
          className="container"
          pickUpData={pickUpData}
          setPickUpData={setPickUpData}
          dropOffData={dropOffData}
          setDropOffData={setDropOffData}
        />

        <section className="container cards__section cards__section--recommended">
          <CardsContainer
            cards={carsResponse.data?.data?.documents ?? []}
            title="Filtered cars"
            loading={carsResponse.type === "pending"}
          />
          <ShowMore
            step={8}
            totalItemsCount={
              carsResponse.type === "success"
                ? carsResponse.data?.data?.count ?? 0
                : 0
            }
            itemsToShowLimit={carsDisplayLimit}
            setItemsToShowLimit={setCarsDisplayLimit}
            itemNamePlural="cars"
            itemNameSingular="car"
          />
        </section>
      </WithSidebarFilters>
    </>
  );
}
