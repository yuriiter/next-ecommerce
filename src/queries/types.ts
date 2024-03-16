import { Permission } from "../../server/src/types/user";

export type UserSignInResponse = {
  email: string;
  fullName: string;
  permission: Permission;
};

export type Credentials = {
  email: string;
  password: string;
};
