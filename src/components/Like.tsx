import React from "react";
import { LikeIcon } from "./svg/icons";

type LikeProps = {
  isLiked: boolean;
  onClick: () => void;
};

export const Like = ({ isLiked, onClick }: LikeProps) => {
  return (
    <LikeIcon
      className={`like-button ${isLiked ? "like-button--liked" : ""}`}
      onClick={onClick}
    />
  );
};
