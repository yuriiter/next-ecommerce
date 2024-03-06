export type AuthData =
  | {
      authenticated: false;
    }
  | {
      authenticated: true;
      email: string;
      fullName: string;
    };

export type AuthAction =
  | { type: "NOT_AUTHENTICATED" }
  | { type: "AUTHENTICATED"; payload: { email: string; fullName: string } };
