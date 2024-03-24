import React from "react";
import { Logo } from "../../Logo";
import { Search } from "./Search";
import { NavigationButtons } from "./NavigationButtons/NavigationButtons";
import { useHideNavigation } from "./useHideNavigation";
import { cn } from "@/utils";
import { useIsOnRoute } from "@/hooks/useIsOnRoute";
import { createStyleTranslateY } from "./utils";

export const Navigation = () => {
  const hideSearch = useIsOnRoute(["/cars/[carId]/rent", "/account"]);
  const [translateToTop, navigationHeight] = useHideNavigation();
  const styleTranslateY = createStyleTranslateY(
    translateToTop,
    navigationHeight,
  );

  return (
    <>
      <div className={cn(["navigation", "to-top"])} style={styleTranslateY}>
        <div className={`container navigation__container`}>
          <Logo />
          {!hideSearch && <Search />}
          <NavigationButtons />
          {!hideSearch && <Search className="search--mobile" />}
        </div>
      </div>
      <div
        style={{ marginBottom: `${navigationHeight}px` }}
        className="navigation__placeholder"
      ></div>
    </>
  );
};
