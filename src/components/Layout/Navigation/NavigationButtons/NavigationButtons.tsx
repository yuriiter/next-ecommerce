import React from "react";
import { IconButton } from "@/components/Button";
import { HeartIcon, NotificationIcon } from "@/components/svg/icons";
import { Avatar } from "./Avatar";
import { Badge } from "@/components/Badge";
import { useMQ } from "@/hooks/mediaQuery/useMQ";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { useModalWindow } from "@/components/ModalWindow/useModalWindow";
import { MODAL_WINDOW } from "@/types/modalWindow";

export const NavigationButtons = () => {
  const { openWindowId, setOpenWindowId } = useModalWindow();
  const isMobile = useMQ("SM", "max");

  const toggleFavouritesModalWindow = () => {
    if (openWindowId === null) setOpenWindowId(MODAL_WINDOW.FAVOURITES);
    else setOpenWindowId(null);
  };

  return (
    <div className="navigation__buttons">
      <Tooltip content="Favourites" placement="center-bottom">
        <IconButton
          variant="secondary"
          size={isMobile ? "sm" : "md"}
          className={`navigation__button`}
          onClick={toggleFavouritesModalWindow}
        >
          <HeartIcon />
        </IconButton>
      </Tooltip>
      <Badge>
        <Tooltip content="Notifications" placement="center-bottom">
          <IconButton
            variant="secondary"
            size={isMobile ? "sm" : "md"}
            className={`navigation__button`}
          >
            <NotificationIcon />
          </IconButton>
        </Tooltip>
      </Badge>
      <Tooltip content="Profile" placement="center-bottom">
        <Avatar size={isMobile ? "sm" : "md"} asButton />
      </Tooltip>
    </div>
  );
};
