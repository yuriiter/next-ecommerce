import React from "react";
import { Logo } from "../../Logo";
import { Search } from "./Search";
import { NavigationButtons } from "./NavigationButtons/NavigationButtons";
import { useHideNavigation } from "./useHideNavigation";
import { useRouter } from "next/router";
import { cn } from "@/utils";

export const Navigation = () => {
  const hide = useHideNavigation();
  const router = useRouter();
  const hideSearch =
    router.pathname === "/cars/[carId]/rent" ||
    router.asPath === "/cars/[carId]/rent";

  return (
    <>
      <div className={cn(["navigation", hide && "navigation--hidden"])}>
        <div className={`container navigation__container`}>
          <Logo />
          {!hideSearch && <Search />}
          <NavigationButtons />
        </div>
      </div>
      <div className="navigation__placeholder"></div>
    </>
  );
};
