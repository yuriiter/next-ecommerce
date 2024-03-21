import { MODAL_WINDOW } from "@/types/modalWindow";
import { ModalWindow } from "@/components/ModalWindow/ModalWindow";
import React from "react";
import { StepInput } from "../Rent/Steps/StepInput";
import { useForm } from "@/hooks/forms/useForm";
import { Credentials } from "@/queries/types";
import { Button } from "../Button";
import { useToast } from "../Toast/useToast";
import { zodResolver } from "@/utils";
import { credentialsSchema } from "@/schemas/credentials.schema";
import { Typography } from "../Typography/Typography";
import Link from "next/link";
import { useSignInAndSetAuthData } from "@/hooks/auth/useSignInAndSetAuthData";
import { useAuth } from "@/auth/useAuth";
import { useModalWindow } from "../ModalWindow/useModalWindow";
import { useRouter } from "next/router";

export const SignIn = () => {
  const router = useRouter();
  const { setOpenWindowId } = useModalWindow();
  const { authData } = useAuth();
  const { promisify } = useToast();
  const [signInResponse, signIn] = useSignInAndSetAuthData();
  const { register, handleSubmit, formState } = useForm<Credentials>({
    initialValues: {
      email: "",
      password: "",
    },
    validationFunction: zodResolver(credentialsSchema),
    onValid: (data) => {
      promisify(
        signIn(data as Credentials).then(() => {
          if (typeof router.query.redirect === "string") {
            router.push(router.query.redirect);
          } else setOpenWindowId(null);
        }),
        {
          pending: "Signing in...",
          success: "Successfully signed in",
          error: "Bad credentials",
        }
      );
    },
  });

  if (authData.authenticated) return null;

  return (
    <ModalWindow title="Sign in" id={MODAL_WINDOW.SIGN_IN}>
      <form onSubmit={handleSubmit} className="auth-form">
        <StepInput
          label="Email"
          placeholder="Your email"
          {...register("email")}
          error={formState.errors["email"] ?? undefined}
        />
        <StepInput
          label="Password"
          placeholder="Your password"
          inputProps={{ type: "password" }}
          {...register("password")}
          error={formState.errors["password"] ?? undefined}
        />
        <Button
          disabled={signInResponse.type === "pending" || authData.authenticated}
          className="auth-form__submit"
          type="submit"
          size="lg"
        >
          Submit
        </Button>
        <Typography>
          Don't have an account?{" "}
          <Link
            href={{
              pathname: "/",
              query: {
                modal: MODAL_WINDOW.SIGN_UP,
                redirect: router.query.redirect,
              },
            }}
          >
            Sign up here
          </Link>
        </Typography>
      </form>
    </ModalWindow>
  );
};
