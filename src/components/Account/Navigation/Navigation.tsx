import React from "react";
import { dashboardNavigation } from "./constants";
import { NavigationGroup } from "./NavigationGroup";

export const Navigation = () => {
  return (
    <div className="dashboard__navigation">
      {Object.entries(dashboardNavigation).map(
        ([groupName, navigationItems]) => (
          <NavigationGroup
            key={groupName}
            name={groupName}
            navigationItems={navigationItems}
          />
        ),
      )}
    </div>
  );
};
