import { CarData } from "@/types";
import carCardMockup from "@/assets/img/card_car_mockup.png";
import { SidebarInputs } from "@/components/Sidebar/types";

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

export const sidebarInputs: SidebarInputs = {
  type: [
    {
      name: "Sport",
      numOfItemsOfType: 10,
      value: true,
      inputType: "switch",
    },
    {
      name: "SUV",
      numOfItemsOfType: 12,
      value: false,
      inputType: "switch",
    },
    {
      name: "MPV",
      numOfItemsOfType: 16,
      value: false,
      inputType: "switch",
    },
    {
      name: "Sedan",
      numOfItemsOfType: 20,
      value: true,
      inputType: "switch",
    },
    {
      name: "Coupe",
      numOfItemsOfType: 14,
      value: false,
      inputType: "switch",
    },
    {
      name: "Hatchback",
      numOfItemsOfType: 14,
      value: true,
      inputType: "switch",
    },
  ],
  capacity: [
    {
      name: "2 Person",
      numOfItemsOfType: 16,
      value: false,
      inputType: "switch",
    },
    {
      name: "4 Person",
      numOfItemsOfType: 20,
      value: false,
      inputType: "switch",
    },
    {
      name: "6 Person",
      numOfItemsOfType: 14,
      value: false,
      inputType: "switch",
    },
    {
      name: "8 Person",
      numOfItemsOfType: 14,
      value: false,
      inputType: "switch",
    },
  ],
  price: [
    {
      name: "",
      value: 1000,
      inputType: "range",
    },
  ],
};

export const carMockup = popularCarsMockup[0];
