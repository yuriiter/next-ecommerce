import dynamic from "next/dynamic";
import { useAuth } from "@/auth/useAuth";
import { PropsWithChildren, useRef } from "react";
import { useRouter } from "next/router";
import { MODAL_WINDOW } from "@/types/modalWindow";
import { Typography } from "./Typography/Typography";
import { LoadingPoints } from "./LoadingPoints";

const AuthGuardNoDynamic = ({ children }: PropsWithChildren) => {
  const pushedRef = useRef(false);
  const router = useRouter();
  const { authData } = useAuth();

  if (!authData.authenticated) {
    if (authData.fetching) {
      return (
        <Typography className="text-center" secondary300 size="16">
          Loading <LoadingPoints />
        </Typography>
      );
    }

    if (!pushedRef.current) {
      pushedRef.current = true;
      router.push({
        pathname: "/",
        query: {
          modal: MODAL_WINDOW.SIGN_IN,
          redirect: window.location.pathname,
        },
      });
    }
    return null;
  }

  return children;
};

export const AuthGuard = dynamic(() => Promise.resolve(AuthGuardNoDynamic), {
  ssr: false,
});
