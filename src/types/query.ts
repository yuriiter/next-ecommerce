export type SortFilter = {
  page?: number;
  pageSize?: number;
};

export type CarsQuery = SortFilter & {
  typeSport?: boolean;
  typeSUV?: boolean;
  typeMPV?: boolean;
  typeSedan?: boolean;
  typeCoupe?: boolean;
  typeHatchback?: boolean;
  capacity2?: boolean;
  capacity4?: boolean;
  capacity6?: boolean;
  capacity8?: boolean;
  price?: number;
  search?: string;
  favourites?: boolean;
};

export type StandardResponse<T> = {
  statusCode: number;
  message: string;
  data?: T;
};
