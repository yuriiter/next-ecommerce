import { MODAL_WINDOW } from "@/types/modalWindow";
import { ModalWindow } from "@/components/ModalWindow/ModalWindow";
import React from "react";
import { useAuthQueries } from "@/queries/useAuthQueries";

export const SignUp = () => {
  const { signUp } = useAuthQueries();

  return (
    <ModalWindow title="Your favourite cars" id={MODAL_WINDOW.SIGN_IN}>
      <form></form>
    </ModalWindow>
  );
};
