import { ReactNode } from "react";

type CarType = "SUV" | "sport" | "hatchback" | "sedan";

export type CarData = {
  id: string;
  name: string;
  carType: CarType;
  fuelCapacity: number;
  peopleCapacity: number;
  isManual: boolean;
  price: number;
  previousPrice?: number;
  isInFavorites: boolean;
};

export type LinkData = {
  href: string;
  content: ReactNode;
};
