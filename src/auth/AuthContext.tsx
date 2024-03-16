import {
  Dispatch,
  PropsWithChildren,
  Reducer,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { AuthData, AuthAction } from "./types";
import { useGetSession } from "@/queries/useGetSession";
import { useRouter } from "next/router";

const reducer: Reducer<AuthData, AuthAction> = (prevState, action) => {
  switch (action.type) {
    case "NOT_AUTHENTICATED":
      if (prevState.authenticated === true)
        return { authenticated: false, fetching: false };
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
  authData: { authenticated: false, fetching: true },
  authDispatch: () => {},
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const { pathname } = useRouter();
  const [authData, authDispatch] = useReducer<typeof reducer>(reducer, {
    authenticated: false,
    fetching: true,
  });

  const [sessionResponse, getSession] = useGetSession(true);

  useEffect(() => {
    getSession();
  }, [pathname]);

  useEffect(() => {
    if (sessionResponse.type === "pending") authDispatch({ type: "PENDING" });
    else if (sessionResponse.type === "error")
      authDispatch({ type: "NOT_AUTHENTICATED" });
    else if (sessionResponse.type === "pause")
      authDispatch({ type: "NOT_AUTHENTICATED" });
    else {
      const data = sessionResponse.data?.data;
      const statusCode = sessionResponse.data?.statusCode;
      if (statusCode === 200 && data) {
        const { email, fullName } = data;
        authDispatch({ type: "AUTHENTICATED", payload: { email, fullName } });
      }
    }
  }, [sessionResponse]);

  return (
    <AuthContext.Provider value={{ authData, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
