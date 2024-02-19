import React from "react";
import { ButtonProps } from "./types";
import { Button } from ".";
import { cn } from "@/utils";
import { Loader } from "../svg/icons";

type LoadingButtonProps = ButtonProps & {
  loading?: boolean;
};

export const LoadingButton = ({
  loading,
  className,
  children,
  ...rest
}: LoadingButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn([
        className,
        "button--with-loader",
        loading && "button--loading",
      ])}
    >
      <Loader className="loader button__loader" />
      {children}
    </Button>
  );
};
