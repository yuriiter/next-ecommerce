import React from "react";
import { cn } from "@/utils";
import { AvatarIcon } from "@/components/svg/icons";
import { IconButton } from "@/components/Button";

type AvatarProps = {
  className?: string;
  asButton?: boolean;
  size?: "sm" | "md" | "lg";
};

export const Avatar = ({
  className,
  asButton = false,
  size = "md",
}: AvatarProps) => {
  return (
    <IconButton
      disabled={!asButton}
      variant="secondary"
      size={size}
      className={cn(["navigation__button ", className])}
    >
      <AvatarIcon />
    </IconButton>
  );
};
