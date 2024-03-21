import { MODAL_WINDOW } from "@/types/modalWindow";
import { ModalWindow } from "@/components/ModalWindow/ModalWindow";
import React, { useEffect } from "react";
import { CardsContainer } from "../Cards";
import { useGetCars } from "@/queries/useGetCars";
import { useAuth } from "@/auth/useAuth";
import { useModalWindow } from "../ModalWindow/useModalWindow";

export const Favourites = () => {
  const { openWindowId } = useModalWindow();
  const { authData } = useAuth();
  const [carsResponse, fetchCars] = useGetCars({
    queryParams: { favourites: true, pageSize: 100000 },
    pause: true,
  });

  useEffect(() => {
    if (authData.authenticated && openWindowId === MODAL_WINDOW.FAVOURITES)
      fetchCars();
  }, [authData, fetchCars, openWindowId]);

  if (!authData.authenticated) return null;

  return (
    <ModalWindow title="Your favourite cars" id={MODAL_WINDOW.FAVOURITES}>
      <CardsContainer
        cards={carsResponse.data?.data?.documents ?? []}
        loading={carsResponse.type === "pending"}
        title=""
      />
    </ModalWindow>
  );
};
