import { Dispatch, PropsWithChildren, createContext } from "react";
import { AuthData, AuthAction } from "./types";
import { useCheckAuth } from "./useCheckAuth";

export const AuthContext = createContext<{
  authData: AuthData;
  authDispatch: Dispatch<AuthAction>;
}>({
  authData: { authenticated: false, fetching: true },
  authDispatch: () => {},
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const { authData, authDispatch } = useCheckAuth();

  return (
    <AuthContext.Provider value={{ authData, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
