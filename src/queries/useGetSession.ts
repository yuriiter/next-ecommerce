import { useGet } from "@/hooks/fetch/useGet";
import { StandardResponse } from "@/types/query";
import { UserSignInResponse } from "./types";

export const useGetSession = (pause: boolean) =>
  useGet<StandardResponse<UserSignInResponse>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/session`,
    pause,
  });
