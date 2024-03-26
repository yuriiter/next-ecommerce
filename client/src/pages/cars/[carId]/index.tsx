import { CarDetail } from "@/components/CarDetail";
import { CardsContainer } from "@/components/Cards";
import { ShowMore } from "@/components/Cards/ShowMore";
import { StandardHead } from "@/components/StandardHead";
import useURLQueryState from "@/hooks/URLQueries/useURLQueryState";
import { useGetCar } from "@/queries/useGetCar";
import { useGetCars } from "@/queries/useGetCars";
import { useRouter } from "next/router";
import React from "react";

export default function CarPage() {
  const router = useRouter();
  const { carId } = router.query;
  const [carResponse] = useGetCar(carId as string, false);
  const [recommendationCarsDisplayLimit, setRecommendationCarsDisplayLimit] =
    useURLQueryState("pageSize", 8);

  const [recommendedCarsResponse] = useGetCars({
    queryParams: {
      recommendedFlag: true,
      popularFlag: true,
      page: 0,
      pageSize: recommendationCarsDisplayLimit,
    },
  });

  return (
    <>
      <StandardHead
        pageName={`Car Detail ${carResponse.data?.data?.name ?? ""}`}
      />
      <section className="container car-detail">
        <CarDetail
          data={carResponse.data?.data}
          loading={carResponse.type === "pending"}
        />
      </section>
      <section className="container cards__section cards__section--recommended">
        <CardsContainer
          cards={recommendedCarsResponse.data?.data?.documents ?? []}
          title="Recent cars"
          horizontalScrolling
          loading={recommendedCarsResponse.type === "pending"}
        />
        <ShowMore
          step={8}
          totalItemsCount={recommendedCarsResponse.data?.data?.count ?? 0}
          itemsToShowLimit={recommendationCarsDisplayLimit}
          setItemsToShowLimit={setRecommendationCarsDisplayLimit}
          itemNamePlural="cars"
          itemNameSingular="car"
        />
      </section>
    </>
  );
}
