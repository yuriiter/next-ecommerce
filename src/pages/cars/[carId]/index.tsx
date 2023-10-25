import { CarDetail } from "@/components/CarDetail";
import { CardsContainer } from "@/components/Cards";
import { ShowMore } from "@/components/Cards/ShowMore";
import { Sidebar } from "@/components/Sidebar";
import {
  carMockup,
  recommendationCars,
  sidebarInputs,
} from "@/constants/mockupData";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useCallback, useMemo, useState } from "react";

export default function CarPage() {
  const [filters, setFilters] = useState(sidebarInputs);

  const onChangeFilters = useCallback(
    (inputGroupName: string, inputName: string, newValue: boolean | number) => {
      setFilters((prevFilters) => {
        const groupInputs = prevFilters[inputGroupName];
        const input = groupInputs.find(({ name }) => name === inputName);

        if (!input) return prevFilters;

        input.value = newValue;

        return {
          ...prevFilters,
          [inputGroupName]: [...groupInputs],
        };
      });
    },
    []
  );

  const [recommendationCarsDisplayLimit, setRecommendationCarsDisplayLimit] =
    useState(8);

  const recommendationCarsToDisplay = useMemo(() => {
    return recommendationCars.slice(0, recommendationCarsDisplayLimit);
  }, [recommendationCarsDisplayLimit]);

  const router = useRouter();
  const { carId } = router.query;

  console.log(carId, carMockup(carId));

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="category">
        <Sidebar
          inputs={filters}
          onChangeFilters={onChangeFilters}
          className="category__sidebar"
          hidden
        />

        <div className="category__content">
          <section className="container car-detail">
            <CarDetail data={carMockup(carId)} />
          </section>
          <section className="container cards__section cards__section--recommended">
            <CardsContainer
              cards={recommendationCarsToDisplay}
              title="Recent cars"
              horizontalScrolling
            />
            <ShowMore
              step={8}
              totalItemsCount={recommendationCars.length}
              itemsToShowLimit={recommendationCarsDisplayLimit}
              setItemsToShowLimit={setRecommendationCarsDisplayLimit}
              itemNamePlural="cars"
              itemNameSingular="car"
            />
          </section>
        </div>
      </div>
    </>
  );
}
