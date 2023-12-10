import React from "react";
import { NavigationItemData } from ".";
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
    <div className="dashboard__navigation-group">
      <p className="navigation-group__name">{name}</p>
      <div className="navigation-group__items">
        {navigationItems.map((navigationItem) => (
          <NavigationItem key={navigationItem.path} {...navigationItem} />
        ))}
      </div>
    </div>
  );
};
