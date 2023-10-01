import { CarData } from "@/types";
import carCardMockup from "@/assets/img/card_car_mockup.png";

export const popularCarsMockup: CarData[] = [
  {
    id: "1",
    name: "Koenigsegg",
    carType: "sport",
    fuelCapacity: 90,
    peopleCapacity: 2,
    isManual: true,
    price: 99,
    previousPrice: undefined,
    isInFavorites: true,
    thumbnailURL: carCardMockup,
  },
  {
    id: "2",
    name: "Nissan GT - R",
    carType: "sport",
    fuelCapacity: 80,
    peopleCapacity: 2,
    isManual: true,
    price: 80,
    previousPrice: 100,
    isInFavorites: false,
    thumbnailURL: carCardMockup,
  },
  {
    id: "3",
    name: "Rolls - Royce",
    carType: "sedan",
    fuelCapacity: 70,
    peopleCapacity: 2,
    isManual: true,
    price: 96,
    previousPrice: undefined,
    isInFavorites: true,
    thumbnailURL: carCardMockup,
  },
  {
    id: "4",
    name: "Nissan GT - R",
    carType: "sport",
    fuelCapacity: 80,
    peopleCapacity: 2,
    isManual: true,
    price: 80,
    previousPrice: 100,
    isInFavorites: false,
    thumbnailURL: carCardMockup,
  },
];

export const recommendationCars = [
  ...popularCarsMockup,
  ...popularCarsMockup,
  ...popularCarsMockup,
].map((carData, index) => ({ ...carData, id: String(index + 1) }));
