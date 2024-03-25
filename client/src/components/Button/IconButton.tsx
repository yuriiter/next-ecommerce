import React from "react";
import { Button } from ".";
import { IconButtonProps } from "./types";
import { cn } from "@/utils";

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
