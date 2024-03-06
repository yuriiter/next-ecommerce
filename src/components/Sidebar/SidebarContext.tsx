import { createContext, PropsWithChildren, useCallback, useState } from "react";

export const SidebarContext = createContext<{
  hidden: boolean;
  toggleSidebar: () => void;
}>({
  hidden: false,
  toggleSidebar: () => null,
});

export const SidebarContextProvider = ({ children }: PropsWithChildren) => {
  const [hidden, setHidden] = useState(false);
  const toggleSidebar = useCallback(() => setHidden((current) => !current), []);

  return (
    <SidebarContext.Provider value={{ hidden, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
