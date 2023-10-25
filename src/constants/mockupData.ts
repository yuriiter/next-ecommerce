import { CarData } from "@/types";
import { SidebarInputs } from "@/components/Sidebar/types";
import avatarPhoto from "@/assets/img/avatar.jpg";
import carGallery1 from "@/assets/img/car_gallery_1.jpeg";
import carGallery2 from "@/assets/img/car_gallery_2.jpeg";
import carCardMockup from "@/assets/img/card_car_mockup.png";

export const popularCarsMockup: CarData[] = [
  {
    id: "1",
    name: "Koenigsegg",
    title: "A Superfast Sports Car",
    subtitle: "Limited Edition",
    carType: "sport",
    fuelCapacity: 90,
    peopleCapacity: 2,
    isManual: true,
    price: 99,
    previousPrice: undefined,
    isInFavorites: true,
    thumbnail: carCardMockup,
    photos: [carGallery1, carGallery2],
    description:
      "The Koenigsegg is a limited edition superfast sports car designed for speed enthusiasts.",
    rating: 4.8,
    numOfVotes: 120,
    reviews: [
      {
        id: "1",
        avatar: avatarPhoto,
        fullName: "John Doe",
        caption: "Awesome Car!",
        date: new Date("2023-10-01"),
        rating: 5,
        comment:
          "I love the Koenigsegg. It's incredibly fast and handles like a dream.",
      },
      {
        id: "2",
        avatar: avatarPhoto,
        fullName: "Jane Smith",
        caption: "Impressive Performance",
        date: new Date("2023-09-28"),
        rating: 4.5,
        comment:
          "The Koenigsegg is a beast on the road. However, it's not very fuel-efficient.",
      },
      // Additional Reviews
      {
        id: "9",
        avatar: avatarPhoto,
        fullName: "Samuel Johnson",
        caption: "Unbelievable Speed!",
        date: new Date("2023-10-15"),
        rating: 5,
        comment:
          "The Koenigsegg is a true masterpiece of engineering. It feels like you're flying on the road.",
      },
      {
        id: "10",
        avatar: avatarPhoto,
        fullName: "Olivia White",
        caption: "Jaw-Dropping Design",
        date: new Date("2023-10-12"),
        rating: 4.7,
        comment:
          "The design of the Koenigsegg is stunning, and the performance matches the looks. A real head-turner.",
      },
    ],
  },
  {
    id: "2",
    name: "Nissan GT - R",
    title: "A Superfast Sports Car",
    subtitle: "Limited Edition",
    carType: "sport",
    fuelCapacity: 80,
    peopleCapacity: 2,
    isManual: true,
    price: 80,
    previousPrice: 100,
    isInFavorites: false,
    thumbnail: carCardMockup,
    photos: [carGallery1, carGallery2],
    description:
      "The Nissan GT-R is a legendary sports car known for its performance and speed.",
    rating: 4.5,
    numOfVotes: 95,
    reviews: [
      {
        id: "3",
        avatar: avatarPhoto,
        fullName: "Michael Johnson",
        caption: "Great Performance",
        date: new Date("2023-09-25"),
        rating: 4.5,
        comment:
          "The GT-R's acceleration is mind-blowing. A true sports car experience.",
      },
      {
        id: "4",
        avatar: avatarPhoto,
        fullName: "Sarah Adams",
        caption: "Good but Expensive",
        date: new Date("2023-09-20"),
        rating: 4,
        comment:
          "The Nissan GT-R is a great car, but the price is on the higher side.",
      },
      // Additional Reviews
      {
        id: "11",
        avatar: avatarPhoto,
        fullName: "Jason Turner",
        caption: "A Thrill to Drive",
        date: new Date("2023-10-10"),
        rating: 4.6,
        comment:
          "The Nissan GT-R provides an adrenaline rush every time you step on the gas. It's addictive!",
      },
      {
        id: "12",
        avatar: avatarPhoto,
        fullName: "Sophia Davis",
        caption: "Exhilarating Experience",
        date: new Date("2023-10-08"),
        rating: 4.5,
        comment:
          "Driving the GT-R is like being in a racing game. It's fast, responsive, and incredibly fun.",
      },
    ],
  },
  {
    id: "3",
    name: "Rolls - Royce",
    title: "A Superfast Sports Car",
    subtitle: "Limited Edition",
    carType: "sedan",
    fuelCapacity: 70,
    peopleCapacity: 2,
    isManual: true,
    price: 96,
    previousPrice: undefined,
    isInFavorites: true,
    thumbnail: carCardMockup,
    photos: [carGallery1],
    description:
      "The Rolls-Royce is the epitome of luxury and class in a sedan.",
    rating: 4.9,
    numOfVotes: 150,
    reviews: [
      {
        id: "5",
        avatar: avatarPhoto,
        fullName: "Emily Parker",
        caption: "Absolute Luxury",
        date: new Date("2023-09-15"),
        rating: 5,
        comment:
          "The Rolls-Royce is the most luxurious car I've ever driven. A true masterpiece.",
      },
      {
        id: "6",
        avatar: avatarPhoto,
        fullName: "David Brown",
        caption: "Class and Elegance",
        date: new Date("2023-09-10"),
        rating: 4.8,
        comment:
          "The Rolls-Royce defines class and elegance. It's a status symbol.",
      },
      // Additional Reviews
      {
        id: "13",
        avatar: avatarPhoto,
        fullName: "William Carter",
        caption: "Unmatched Luxury",
        date: new Date("2023-10-05"),
        rating: 5,
        comment:
          "The Rolls-Royce is not just a car; it's a lifestyle statement. The level of luxury is beyond words.",
      },
      {
        id: "14",
        avatar: avatarPhoto,
        fullName: "Emma Johnson",
        caption: "Status and Comfort",
        date: new Date("2023-10-02"),
        rating: 4.9,
        comment:
          "Owning a Rolls-Royce makes you feel like royalty. It's the pinnacle of comfort and elegance.",
      },
    ],
  },
  {
    id: "4",
    name: "Nissan GT - R",
    title: "A Superfast Sports Car",
    subtitle: "Limited Edition",
    carType: "sport",
    fuelCapacity: 80,
    peopleCapacity: 2,
    isManual: true,
    price: 80,
    previousPrice: 100,
    isInFavorites: false,
    thumbnail: carCardMockup,
    photos: [carGallery1, carGallery2],
    description:
      "The Nissan GT-R is a legendary sports car known for its performance and speed.",
    rating: 4.5,
    numOfVotes: 95,
    reviews: [
      {
        id: "7",
        avatar: avatarPhoto,
        fullName: "Chris Johnson",
        caption: "Incredible Speed",
        date: new Date("2023-09-05"),
        rating: 4.5,
        comment:
          "The GT-R's speed and handling are outstanding. A true sports car experience.",
      },
      {
        id: "8",
        avatar: avatarPhoto,
        fullName: "Megan Lewis",
        caption: "Pricey, but Worth It",
        date: new Date("2023-08-30"),
        rating: 4.2,
        comment:
          "The Nissan GT-R is on the expensive side, but the performance justifies the cost.",
      },
      // Additional Reviews
      {
        id: "15",
        avatar: avatarPhoto,
        fullName: "Daniel Smith",
        caption: "Unmatched Performance",
        date: new Date("2023-09-28"),
        rating: 4.6,
        comment:
          "The second Nissan GT-R is just as impressive as the first one. It's a legend for a reason.",
      },
      {
        id: "16",
        avatar: avatarPhoto,
        fullName: "Lily Adams",
        caption: "Affordable Exhilaration",
        date: new Date("2023-09-25"),
        rating: 4.4,
        comment:
          "You get a lot of performance for the price with the GT-R. It's a bargain for a sports car.",
      },
    ],
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

export const carMockup = (id: string) =>
  popularCarsMockup.find(({ id: carId }) => carId === id);
