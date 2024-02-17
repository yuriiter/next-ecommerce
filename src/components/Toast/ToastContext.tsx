import {
  createContext,
  Dispatch,
  PropsWithChildren,
  Reducer,
  useReducer,
} from "react";
import { ToastData } from "./types";
import { reducer, ToastAction } from "./reducer";

export const ToastContext = createContext<{
  toasts: ToastData[];
  dispatch: Dispatch<ToastAction>;
}>({ toasts: [], dispatch: () => null });

export const ToastContextProvider = ({ children }: PropsWithChildren) => {
  const [toasts, toastsDispatch] = useReducer<
    Reducer<ToastData[], ToastAction>,
    ToastData[]
  >(reducer, [], () => []);

  return (
    <ToastContext.Provider value={{ toasts: toasts, dispatch: toastsDispatch }}>
      {children}
    </ToastContext.Provider>
  );
};
