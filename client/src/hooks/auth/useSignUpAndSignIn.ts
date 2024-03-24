import { useAuth } from "@/auth/useAuth";
import { useSignUp } from "@/queries/useSignUp";
import { SignUpData } from "@/schemas/credentials.schema";
import { useCallback } from "react";
import { useSignInAndSetAuthData } from "./useSignInAndSetAuthData";

export const useSignUpAndSignIn = (): [
  typeof signInResponse,
  typeof signUpAndSignIn
] => {
  const { authDispatch } = useAuth();

  const [_signUpResponse, signUpCallback] = useSignUp({
    data: { fullName: "", email: "", password: "" },
    pause: true,
  });

  const [signInResponse, signInAndSetAuthData] = useSignInAndSetAuthData();

  const signUpAndSignIn = useCallback(
    async (credentials: Omit<SignUpData, "confirmPassword">) => {
      const signUpPromise = new Promise(async (resolve, reject) => {
        const signUpResponse = await signUpCallback({ data: credentials });
        if (signUpResponse.type === "error") {
          authDispatch({
            type: "NOT_AUTHENTICATED",
          });
          reject(signUpResponse.error);
        } else if (signUpResponse.type === "success") {
          const { email, fullName } = signUpResponse.data?.data ?? {
            email: undefined,
            fullName: undefined,
          };
          if (email === undefined || fullName === undefined) {
            authDispatch({
              type: "NOT_AUTHENTICATED",
            });

            reject("Internal server error");
          } else {
            resolve(signInAndSetAuthData(credentials));
          }
        }
      });
      return signUpPromise;
    },
    [authDispatch, signInAndSetAuthData, signUpCallback]
  );

  return [signInResponse, signUpAndSignIn];
};
