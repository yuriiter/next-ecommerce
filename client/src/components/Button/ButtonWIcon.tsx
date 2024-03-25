import React from "react";
import { ButtonWIconProps } from "./types";
import { Button } from "./Button";

export const ButtonWIcon = ({
  icon,
  iconBefore = true,
  children,
  size = "sm",
  ...rest
}: ButtonWIconProps) => {
  return (
    <Button {...rest} size={size}>
      {iconBefore && <div className="button__icon">{icon}</div>}
      {children}
      {!iconBefore && <div className="button__icon">{icon}</div>}
    </Button>
  );
};
