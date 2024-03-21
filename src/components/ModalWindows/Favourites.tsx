import { MODAL_WINDOW } from "@/types/modalWindow";
import { ModalWindow } from "@/components/ModalWindow/ModalWindow";
import React, { useEffect } from "react";
import { CardsContainer } from "../Cards";
import { useGetCars } from "@/queries/useGetCars";
import { useAuth } from "@/auth/useAuth";

export const Favourites = () => {
  const { authData } = useAuth();
  const [carsResponse, fetchCars] = useGetCars({
    queryParams: { favourites: true, pageSize: 100000 },
    pause: true,
  });

  useEffect(() => {
    if (authData.authenticated) fetchCars();
  }, [authData, fetchCars]);

  if (!authData.authenticated) return null;

  return (
    <ModalWindow title="Your favourite cars" id={MODAL_WINDOW.FAVOURITES}>
      <CardsContainer
        cards={
          carsResponse.type === "success"
            ? carsResponse.data?.data?.documents ?? []
            : []
        }
        loading={carsResponse.type === "pending"}
        title=""
      />
    </ModalWindow>
  );
};
