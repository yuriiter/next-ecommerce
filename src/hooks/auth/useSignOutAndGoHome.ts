import { useAuth } from "@/auth/useAuth";
import { useSignOut } from "@/queries/useSignOut";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useSignOutAndGoHome = (): [
  typeof signOutResponse,
  typeof signOutAndGoHome
] => {
  const router = useRouter();
  const { authDispatch } = useAuth();
  const [signOutResponse, signOutCallback] = useSignOut(true);

  const signOutAndGoHome = useCallback(async () => {
    const signOutPromise = new Promise(async (resolve, reject) => {
      const signOutResponse = await signOutCallback();

      if (signOutResponse.type === "error") {
        reject(signOutResponse.error);
      } else if (signOutResponse.type === "success") {
        authDispatch({ type: "NOT_AUTHENTICATED" });
        router.push("/");
        resolve("OK");
      }
    });

    return signOutPromise;
  }, [authDispatch, router, signOutCallback]);

  return [signOutResponse, signOutAndGoHome];
};
