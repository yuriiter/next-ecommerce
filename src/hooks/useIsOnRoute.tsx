import { useRouter } from "next/router";

export const useIsOnRoute = (pathes: string[]) => {
  const router = useRouter();
  const isOnRoute = pathes.some(
    (path) => router.pathname === path || router.asPath === path,
  );

  return isOnRoute;
};
