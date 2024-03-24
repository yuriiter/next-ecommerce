import React from "react";
import { Favourites } from "./Favourites";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const ModalWindows = () => {
  return (
    <>
      <Favourites />
      <SignIn />
      <SignUp />
    </>
  );
};
