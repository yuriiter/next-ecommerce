import React, { cloneElement } from "react";
import { Button } from ".";
import { IconButtonProps } from "./types";
import styles from "@/styles/components/Button.module.scss";

export const IconButton = ({
  className = "",
  children,
  size = "sm",
  ...rest
}: IconButtonProps) => {
  const iconSizeModifier = styles[`button__icon--${size}`];
  const iconClass = `${styles.button__icon} ${iconSizeModifier}`;
  const buttonIconOnlyModifier = "button--icon-only";

  return (
    <Button
      {...rest}
      size={size}
      className={`${styles[buttonIconOnlyModifier]} ${className}`}
    >
      <div className={iconClass}>{children}</div>
    </Button>
  );
};
