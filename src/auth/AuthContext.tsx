import {
  Dispatch,
  PropsWithChildren,
  Reducer,
  createContext,
  useReducer,
} from "react";
import { AuthData, AuthAction } from "./types";

const reducer: Reducer<AuthData, AuthAction> = (prevState, action) => {
  switch (action.type) {
    case "NOT_AUTHENTICATED":
      if (prevState.authenticated === true) return { authenticated: false };
      break;
    case "AUTHENTICATED":
      const { email, fullName } = action.payload;
      if (
        prevState.authenticated === false ||
        prevState.email !== email ||
        prevState.fullName !== fullName
      )
        return { authenticated: true, email, fullName };
  }

  return prevState;
};

export const AuthContext = createContext<{
  authData: AuthData;
  authDispatch: Dispatch<AuthAction>;
}>({
  authData: { authenticated: false },
  authDispatch: () => {},
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [authData, authDispatch] = useReducer<typeof reducer>(reducer, {
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authData, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
