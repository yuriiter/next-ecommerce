import { cn } from "@/utils";
import { ReactNode } from "react";
import { useHideNavigation } from "../Layout/Navigation/useHideNavigation";

type SidebarProps = {
  children: ReactNode;
  hidden?: boolean;
  className?: string;
};

export const Sidebar = ({
  children,
  hidden = false,
  className,
}: SidebarProps) => {
  const translateToTop = useHideNavigation();
  console.log("2", hidden);

  return (
    <>
      <aside
        className={cn([
          "sidebar",
          hidden && "sidebar--hidden",
          translateToTop && "to-top--active",
          className,
        ])}
      >
        <div className="sidebar__input-groups">{children}</div>
      </aside>
    </>
  );
};
