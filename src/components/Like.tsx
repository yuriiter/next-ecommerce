import React from "react";
import { LikeIcon } from "./svg/icons";
import { cn } from "@/utils";

type LikeProps = {
  isLiked: boolean;
  onClick: () => void;
};

export const Like = ({ isLiked, onClick }: LikeProps) => {
  return (
    <LikeIcon
      className={cn(["like-button", isLiked && "like-button--liked"])}
      onClick={onClick}
    />
  );
};
