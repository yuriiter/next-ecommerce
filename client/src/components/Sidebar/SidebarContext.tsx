import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useState,
} from "react";

export const SidebarContext = createContext<{
  hidden: boolean;
  setHidden: Dispatch<SetStateAction<boolean>>;
}>({
  hidden: false,
  setHidden: () => null,
});

export const SidebarContextProvider = ({ children }: PropsWithChildren) => {
  const [hidden, setHidden] = useState(false);

  return (
    <SidebarContext.Provider value={{ hidden, setHidden }}>
      {children}
    </SidebarContext.Provider>
  );
};
