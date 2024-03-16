import { usePost } from "@/hooks/fetch/usePost";
import { SignUpData } from "@/schemas/credentials.schema";
import { StandardResponse } from "@/types/query";

type UseSignUpParams = {
  data: Omit<SignUpData, "confirmPassword">;
  pause: boolean;
};

export const useSignUp = ({ data, pause }: UseSignUpParams) =>
  usePost<StandardResponse<undefined>, Omit<SignUpData, "confirmPassword">>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
    data,
    pause,
  });
