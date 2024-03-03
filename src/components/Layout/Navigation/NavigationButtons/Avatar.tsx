import React from "react";
import { cn } from "@/utils";
import { AvatarIcon } from "@/components/svg/icons";
import { IconButton } from "@/components/Button";

type AvatarProps = {
  className?: string;
  asButton?: boolean;
};

export const Avatar = ({ className, asButton = false }: AvatarProps) => {
  return (
    <IconButton
      disabled={!asButton}
      variant="secondary"
      size="md"
      className={cn(["navigation__button ", className])}
    >
      <AvatarIcon />
    </IconButton>
  );
};
