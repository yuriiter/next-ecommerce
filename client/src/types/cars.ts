export type CarType = "SUV" | "sport" | "hatchback" | "sedan";

export type PickerDataFromServer = {
  location?: string;
  dateTime?: Date;
};

export type ImageData = {
  name: string;
  desc: string;
  img: {
    data?: Buffer;
    contentType?: string;
    url?: string;
  };
};

export type RentalData = {
  _id: string;
  car: CarData;
  pickUpData: PickerDataFromServer | undefined;
  dropOffData: PickerDataFromServer | undefined;
  total: number;
};

export type Review = {
  _id: string;
  user: UserData;
  caption: string;
  date: Date;
  rating: number;
  comment: string;
};

export type CarData = {
  _id: string;
  name: string;
  title: string;
  subtitle: string;
  carType: CarType;
  fuelCapacity: number;
  peopleCapacity: number;
  isManual: boolean;
  price: number;
  previousPrice?: number;
  recommendedFlag: boolean;
  popularFlag: boolean;
  thumbnail: ImageData;
  photos: ImageData[];
  description: string;
  rating: number;
  numOfVotes: number;
  reviews: Review[];
  isFavouriteForUsers: string[];
  isInFavourites: boolean;
};

export type LinkData = {
  href: string;
  content: any;
};

export type UserData = {
  _id: string;
  email: string;
  avatar?: string;
  fullName: string;
  favouriteCars: string[];
};
