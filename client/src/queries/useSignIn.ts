import { usePost } from "@/hooks/fetch/usePost";
import { StandardResponse } from "@/types/query";
import { Credentials, UserSignInResponse } from "./types";

type UseSignInParams = {
  pause: boolean;
  data: Credentials;
};

export const useSignIn = ({ data, pause }: UseSignInParams) =>
  usePost<StandardResponse<UserSignInResponse>, Credentials>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/session`,
    data,
    pause,
  });
