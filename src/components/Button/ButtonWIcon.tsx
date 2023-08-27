import React, { cloneElement } from "react";
import { ButtonWIconProps } from "./types";
import styles from "@/styles/components/Button.module.scss";
import { Button } from ".";

export const ButtonWIcon = ({
  icon,
  iconBefore = true,
  children,
  size = "sm",
  ...rest
}: ButtonWIconProps) => {
  const iconClass = `${styles.button__icon}`;

  return (
    <Button {...rest} size={size}>
      {iconBefore && <div className={iconClass}>{icon}</div>}
      {children}
      {!iconBefore && <div className={iconClass}>{icon}</div>}
    </Button>
  );
};
