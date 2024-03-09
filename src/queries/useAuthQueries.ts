import { useDelete } from "@/hooks/fetch/useDelete";
import { usePost } from "@/hooks/fetch/usePost";
import { StandardResponse } from "@/types/query";
import { Credentials, UserSignInResponse } from "./types";
import { useCallback } from "react";

export const useAuthQueries = () => {
  const [_, signInQuery] = usePost<
    StandardResponse<UserSignInResponse>,
    Credentials
  >({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/session`,
    data: { userEmail: "", password: "" },
    pause: true,
  });

  const [__, signUpQuery] = usePost<StandardResponse<undefined>, Credentials>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
    data: { userEmail: "", password: "" },
    pause: true,
  });

  const [___, signOut] = useDelete<StandardResponse<undefined>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/session`,
    pause: true,
  });

  const signIn = useCallback(
    (credentials: Credentials) => signInQuery({ data: credentials }),
    [signInQuery]
  );

  const signUp = useCallback(
    (credentials: Credentials) => signUpQuery({ data: credentials }),
    [signUpQuery]
  );

  return { signIn, signUp, signOut };
};
