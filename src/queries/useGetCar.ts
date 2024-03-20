import { useGet } from "@/hooks/fetch/useGet";
import { CarData } from "@/types";
import { StandardResponse } from "@/types/query";

export const useGetCar = (carId: string, pause: boolean) =>
  useGet<StandardResponse<CarData>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars/${carId}`,
    pause,
  });
