import { cn } from "@/utils";
import { ReactNode } from "react";
import { useHideNavigation } from "../Layout/Navigation/useHideNavigation";
import { useSidebar } from "./useSidebar";

type SidebarProps = {
  children: ReactNode;
  className?: string;
};

export const Sidebar = ({ children, className }: SidebarProps) => {
  const { hidden } = useSidebar();
  const [_translateToTop, navigationHeight] = useHideNavigation();

  return (
    <>
      <aside
        className={cn(["sidebar", hidden && "sidebar--hidden", className])}
      >
        <div
          className="sidebar__placeholder"
          style={{ height: `${navigationHeight}px` }}
        ></div>
        <div
          className="sidebar__inner-wrapper"
          style={{
            top: `${navigationHeight}px`,
            height: `calc(100vh - ${navigationHeight}px)`,
          }}
        >
          {children}
        </div>
      </aside>
    </>
  );
};
