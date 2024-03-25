import React from "react";
import { NavigationItemData } from "./types";
import { NavigationItem } from "./NavigationItem";

type NavigationGroupProps = {
  name: string;
  navigationItems: NavigationItemData[];
};

export const NavigationGroup = ({
  name,
  navigationItems,
}: NavigationGroupProps) => {
  return (
    <div className="navigation-group">
      <p className="navigation-group__name">{name}</p>
      <div className="navigation-group__items">
        {navigationItems.map((navigationItem) => (
          <NavigationItem key={navigationItem.path} {...navigationItem} />
        ))}
      </div>
    </div>
  );
};
