import { CardsContainer } from "@/components/Cards";
import { ShowMore } from "@/components/Cards/ShowMore";
import { PickerSection } from "@/components/Picker/PickerSection";
import { usePickerSectionData } from "@/components/Picker/hooks/usePickerSectionData";
import { SidebarFilters } from "@/components/Sidebar";
import { recommendationCars } from "@/constants/mockupData";
import { useFilters } from "@/hooks/useFilters";
import Head from "next/head";
import React, { useMemo, useState } from "react";

export default function SpecificCategory() {
  const [filters, onChangeFilters] = useFilters();

  const [recommendationCarsDisplayLimit, setRecommendationCarsDisplayLimit] =
    useState(8);

  const recommendationCarsToDisplay = useMemo(() => {
    return recommendationCars.slice(0, recommendationCarsDisplayLimit);
  }, [recommendationCarsDisplayLimit]);

  const { pickUpData, setPickUpData, dropOffData, setDropOffData } =
    usePickerSectionData();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="with-sidebar">
        <SidebarFilters
          inputs={filters}
          onChangeFilters={onChangeFilters}
          hidden={false}
        />

        <div className="with-sidebar__content">
          <PickerSection
            className="container"
            pickUpData={pickUpData}
            setPickUpData={setPickUpData}
            dropOffData={dropOffData}
            setDropOffData={setDropOffData}
          />

          <section className="container cards__section cards__section--recommended">
            <CardsContainer
              cards={recommendationCarsToDisplay}
              title="Recomendation cars"
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
