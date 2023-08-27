import React from "react";
import { Logo } from "../../Logo";
import { Search } from "./Search";
import { NavigationButtons } from "./NavigationButtons/NavigationButtons";

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className={`container navigation__container`}>
        <Logo />
        <Search />
        <NavigationButtons />
      </div>
    </div>
  );
};
