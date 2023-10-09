import { ReactNode } from "react";

type CarType = "SUV" | "sport" | "hatchback" | "sedan";

export type Review = {
  avatar: string;
  fullName: string;
  caption: string;
  date: Date;
  rating: number;
  comment: string;
};

export type CarData = {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  carType: CarType;
  fuelCapacity: number;
  peopleCapacity: number;
  isManual: boolean;
  price: number;
  previousPrice?: number;
  isInFavorites: boolean;
  thumbnail: string;
  photos: string[];
  description: string;
  rating: number;
  numOfVotes: number;
  reviews: Review[];
};

export type LinkData = {
  href: string;
  content: ReactNode;
};
