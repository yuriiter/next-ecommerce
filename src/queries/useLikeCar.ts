import { usePut } from "@/hooks/fetch/usePut";

export const useLikeCar = (carId: string) => {
  const [, sendLikeCallback] = usePut({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars/${carId}/favourites`,
    data: { newValue: false },
    pause: true,
  });

  return (newValue: boolean) => sendLikeCallback({ data: { newValue } });
};
