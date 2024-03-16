export type AuthData =
  | { authenticated: false; fetching: boolean }
  | {
      authenticated: true;
      email: string;
      fullName: string;
    };

export type AuthAction =
  | { type: "PENDING" }
  | { type: "NOT_AUTHENTICATED" }
  | { type: "AUTHENTICATED"; payload: { email: string; fullName: string } };
