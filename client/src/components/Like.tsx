import React, { useState } from "react";
import { LikeIcon } from "./svg/icons";
import { cn } from "@/utils";
import { useAuth } from "@/auth/useAuth";
import { useModalWindow } from "./ModalWindow/useModalWindow";
import { MODAL_WINDOW } from "@/types/modalWindow";

type LikeProps = {
  isLiked: boolean;
  sendRequest: (newValue: boolean) => void;
};

export const Like = ({ isLiked: initialIsLiked, sendRequest }: LikeProps) => {
  const { authData } = useAuth();
  const { setOpenWindowId } = useModalWindow();
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [animation, setAnimation] = useState(false);

  const onClick = () => {
    if (!authData.authenticated) {
      setOpenWindowId(MODAL_WINDOW.SIGN_IN);
      return;
    }
    setAnimation(true);
    sendRequest(!isLiked);
    setIsLiked((prev) => {
      return !prev;
    });
  };

  return (
    <LikeIcon
      className={cn([
        "like-button",
        isLiked && "like-button--liked",
        animation && "like-button--animate-on-appear",
      ])}
      onClick={onClick}
      onAnimationEnd={() => setAnimation(false)}
    />
  );
};
