import React from "react";
import { Logo } from "../../Logo";
import { Search } from "./Search";
import { NavigationButtons } from "./NavigationButtons/NavigationButtons";
import { useHideNavigation } from "./useHideNavigation";
import { cn } from "@/utils";
import { useIsOnRoute } from "@/hooks/useIsOnRoute";

export const Navigation = () => {
  const translateToTop = useHideNavigation();
  const hideSearch = useIsOnRoute(["/cars/[carId]/rent", "/account"]);

  return (
    <>
      <div
        className={cn([
          "navigation",
          "to-top",
          translateToTop && "to-top--active",
        ])}
      >
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
