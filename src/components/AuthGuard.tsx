import dynamic from "next/dynamic";
import { useAuth } from "@/auth/useAuth";
import { PropsWithChildren, useRef } from "react";
import { useRouter } from "next/router";

const AuthGuardNoDynamic = ({ children }: PropsWithChildren) => {
  const pushedRef = useRef(false);
  const router = useRouter();
  const { authData } = useAuth();

  if (!authData.authenticated) {
    if (!pushedRef.current) {
      pushedRef.current = true;
      router.push("/");
    }
    return <></>;
  }

  return children;
};

export const AuthGuard = dynamic(() => Promise.resolve(AuthGuardNoDynamic), {
  ssr: false,
});
