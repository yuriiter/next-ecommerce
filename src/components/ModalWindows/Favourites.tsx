import { MODAL_WINDOW } from "@/types/modalWindow";
import { ModalWindow } from "@/components/ModalWindow/ModalWindow";
import React from "react";
import { CardsContainer } from "../Cards";
import { useGetCars } from "@/queries/useGetCars";

export const Favourites = () => {
  const [carsData, fetch] = useGetCars({ queryParams: { favourites: true } });

  // if(carsData.type === "success") {
  //   carsData.data?.data.
  // }

  return (
    <ModalWindow title="Your favourite cars" id={MODAL_WINDOW.FAVOURITES}>
      <CardsContainer cards={[]} title="" />
    </ModalWindow>
  );
};
