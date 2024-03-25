import { SelectOption } from "@/components/Select/types";
import { SidebarInputGroup } from "@/components/Sidebar/types";

export const sidebarInputs: SidebarInputGroup[] = [
  {
    groupName: "type",
    inputs: [
      {
        name: "Sport",
        value: false,
        key: "typeSport",
      },
      {
        name: "SUV",
        value: false,
        key: "typeSUV",
      },
      {
        name: "MPV",
        value: false,
        key: "typeMPV",
      },
      {
        name: "Sedan",
        value: false,
        key: "typeSedan",
      },
      {
        name: "Coupe",
        value: false,
        key: "typeCoupe",
      },
      {
        name: "Hatchback",
        value: false,
        key: "typeHatchback",
      },
    ],
  },
  {
    groupName: "capacity",
    inputs: [
      {
        name: "2 Person",
        value: false,
        key: "capacity2",
      },
      {
        name: "4 Person",
        value: false,
        key: "capacity4",
      },
      {
        name: "6 Person",
        value: false,
        key: "capacity6",
      },
      {
        name: "8 Person",
        value: false,
        key: "capacity8",
      },
    ],
  },
  {
    groupName: "price",
    inputs: [
      {
        name: "",
        value: 100,
        key: "price",
      },
    ],
  },
];

export const locationOptions: SelectOption[] = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];
