import React from "react";
import { Logo } from "../../Logo";
import { Search } from "./Search";
import { NavigationButtons } from "./NavigationButtons/NavigationButtons";
import { useHideNavigation } from "./useHideNavigation";

export const Navigation = () => {
  const hide = useHideNavigation();

  return (
    <>
      <div className={`navigation ${hide ? "navigation--hidden" : ""}`}>
        <div className={`container navigation__container`}>
          <Logo />
          <Search />
          <NavigationButtons />
        </div>
      </div>
      <div className="navigation__placeholder"></div>
    </>
  );
};
