import { useAuth } from "@/auth/useAuth";
import { Credentials } from "@/queries/types";
import { useSignIn } from "@/queries/useSignIn";
import { useCallback } from "react";

export const useSignInAndSetAuthData = (): [
  typeof signInResponse,
  typeof signInAndSetAuthData
] => {
  const { authDispatch } = useAuth();
  const [signInResponse, signInCallback] = useSignIn({
    data: { email: "", password: "" },
    pause: true,
  });

  const signInAndSetAuthData = useCallback(
    async (credentials: Credentials) => {
      const signInPromise = new Promise(async (resolve, reject) => {
        const signInResponse = await signInCallback({ data: credentials });
        if (signInResponse.type === "error") {
          authDispatch({
            type: "NOT_AUTHENTICATED",
          });
          reject(signInResponse.error);
        } else if (signInResponse.type === "success") {
          const { email, fullName } = signInResponse.data?.data ?? {
            email: undefined,
            fullName: undefined,
          };
          if (email === undefined || fullName === undefined) {
            authDispatch({
              type: "NOT_AUTHENTICATED",
            });
            reject("Internal server error");
          } else {
            authDispatch({
              type: "AUTHENTICATED",
              payload: { email, fullName },
            });
            resolve("OK");
          }
        }
      });
      return signInPromise;
    },
    [authDispatch, signInCallback]
  );

  return [signInResponse, signInAndSetAuthData];
};
