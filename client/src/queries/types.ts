export type Permission = "user" | "admin";

export type UserSignInResponse = {
  email: string;
  fullName: string;
  permission: Permission;
};

export type Credentials = {
  email: string;
  password: string;
};
