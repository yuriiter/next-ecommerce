import { useGet } from "@/hooks/fetch/useGet";
import { CarsQuery, StandardResponse } from "@/types/query";

// TODO: specify reponse data type
type UseGetCarsParams = {
  pause?: boolean;
  queryParams?: CarsQuery;
};
export const useGetCars = ({ pause, queryParams }: UseGetCarsParams) =>
  useGet<StandardResponse<{}>, CarsQuery>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars`,
    queryParams,
    pause,
  });
