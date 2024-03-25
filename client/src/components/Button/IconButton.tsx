import React from "react";
import { IconButtonProps } from "./types";
import { cn } from "@/utils";
import { Button } from "./Button";

export const IconButton = ({
  className,
  children,
  size = "sm",
  ...rest
}: IconButtonProps) => {
  return (
    <Button
      {...rest}
      size={size}
      className={cn(["button--icon-only", className])}
    >
      <div className="button__icon">{children}</div>
    </Button>
  );
};
