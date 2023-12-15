import { cn } from "@/utils";
import { ReactNode } from "react";
import { useHideNavigation } from "../Layout/Navigation/useHideNavigation";
import { createStyleTranslateY } from "../Layout/Navigation/utils";

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
  const [translateToTop, navigationHeight] = useHideNavigation();
  const styleTranslateY = createStyleTranslateY(
    translateToTop,
    navigationHeight,
  );

  return (
    <>
      <aside
        className={cn(["sidebar", hidden && "sidebar--hidden", className])}
        style={styleTranslateY}
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
