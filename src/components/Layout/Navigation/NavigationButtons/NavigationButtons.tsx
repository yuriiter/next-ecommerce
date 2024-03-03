import React from "react";
import { IconButton } from "@/components/Button";
import {
  HeartIcon,
  NotificationIcon,
  SettingIcon,
} from "@/components/svg/icons";
import { Avatar } from "./Avatar";
import { Badge } from "@/components/Badge";
import { useMQ } from "@/hooks/mediaQuery/useMQ";
import { Tooltip } from "@/components/Tooltip/Tooltip";

export const NavigationButtons = () => {
  const isMobile = useMQ("SM", "max");

  return (
    <div className="navigation__buttons">
      <Tooltip content="Favourites" placement="center-bottom">
        <IconButton
          variant="secondary"
          size={isMobile ? "sm" : "md"}
          className={`navigation__button`}
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
      <Tooltip content="Settings" placement="center-bottom">
        <IconButton
          variant="secondary"
          size={isMobile ? "sm" : "md"}
          className={`navigation__button`}
        >
          <SettingIcon />
        </IconButton>
      </Tooltip>
      <Tooltip content="Profile" placement="center-bottom">
        <Avatar asButton />
      </Tooltip>
    </div>
  );
};
