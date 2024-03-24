import React from "react";
import { dashboardNavigation } from "./constants";
import { NavigationGroup } from "./NavigationGroup";
import { NavigationItem } from "./NavigationItem";
import { Logout } from "@/components/svg/icons";

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
      <NavigationItem
        className="mt-auto"
        icon={<Logout />}
        label={"Logout"}
        path={"/logout"}
      />
    </div>
  );
};
