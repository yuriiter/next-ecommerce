import { useAuth } from "@/auth/useAuth";
import { Credentials } from "@/queries/types";
import { useAuthQueries } from "@/queries/useAuthQueries";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useAuthWithActions = () => {
  const { authDispatch } = useAuth();
  const { signIn, signUp, signOut } = useAuthQueries();
  const router = useRouter();

  const signInAndSetAuthData = useCallback(
    async (credentials: Credentials) => {
      const signInPromise = new Promise(async (resolve, reject) => {
        const signInResponse = await signIn(credentials);
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
      // return promisify(signInPromise, {
      //   error: "An error occurred during authentication",
      //   pending: "Signing in...",
      //   success: "Successfully signed in",
      // });
    },
    [authDispatch, signIn]
  );

  const signUpAndSignIn = useCallback(
    async (credentials: Credentials) => {
      const signUpPromise = new Promise(async (resolve, reject) => {
        const signUpResponse = await signUp(credentials);
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
            resolve(signIn(credentials));
          }
        }
      });
      return signUpPromise;
      // return promisify(signUpPromise, {
      //   error: "An error occurred during signing up",
      //   pending: "Signing up...",
      //   success: "Successfully signed up",
      // });
    },
    [authDispatch, signIn, signUp]
  );

  const signOutAndGoHome = useCallback(async () => {
    const signOutPromise = new Promise(async (resolve, reject) => {
      const signOutResponse = await signOut();

      if (signOutResponse.type === "error") {
        reject(signOutResponse.error);
      } else if (signOutResponse.type === "success") {
        authDispatch({ type: "NOT_AUTHENTICATED" });
        router.push("/");
        resolve("OK");
      }

      // return promisify(signUpPromise, {
      //   error: "An error occurred during signing out",
      //   pending: "Signing out...",
      //   success: "Successfully signed out",
      // });
    });

    return signOutPromise;
  }, [authDispatch, router, signOut]);

  return { signInAndSetAuthData, signUpAndSignIn, signOutAndGoHome };
};
