import React from "react";
import { ButtonProps } from "./types";
import Link from "next/link";

export const Button = ({
  variant = "primary",
  size = "sm",
  children,
  className = "",
  ...rest
}: ButtonProps) => {
  const variantModifier = `button--${variant}`;
  const sizeModifier = `button--${size}`;

  const componentClassName = `button ${variantModifier} ${sizeModifier} ${className}`;

  if ("href" in rest) {
    return (
      <Link className={componentClassName} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={componentClassName} {...rest}>
      {children}
    </button>
  );
};
