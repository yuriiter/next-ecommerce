import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export const ModalWindowContext = createContext<{
  openWindowId: string | null;
  setOpenWindowId: Dispatch<SetStateAction<string | null>>;
}>({
  openWindowId: null,
  setOpenWindowId: () => null,
});

export const ModalWindowContextProvider = ({ children }: PropsWithChildren) => {
  const [openWindowId, setOpenWindowId] = useState<string | null>(null);

  return (
    <ModalWindowContext.Provider value={{ openWindowId, setOpenWindowId }}>
      {children}
    </ModalWindowContext.Provider>
  );
};
