import useURLQueryState from "@/hooks/URLQueries/useURLQueryState";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export const DialogContext = createContext<{
  openWindowId: string | null;
  setOpenWindowId: Dispatch<SetStateAction<string | null>>;
}>({
  openWindowId: null,
  setOpenWindowId: () => null,
});

export const DialogContextProvider = ({ children }: PropsWithChildren) => {
  // const [openWindowId, setOpenWindowId] = useState<string | null>(null);
  const [openWindowId, setOpenWindowId] = useURLQueryState<string | null>(
    "modal",
    null
  );

  return (
    <DialogContext.Provider value={{ openWindowId, setOpenWindowId }}>
      {children}
    </DialogContext.Provider>
  );
};
