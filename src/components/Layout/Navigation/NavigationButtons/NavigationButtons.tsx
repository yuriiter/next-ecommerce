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

export const NavigationButtons = () => {
  const isMobile = useMQ("SM", "max");

  return (
    <div className="navigation__buttons">
      <IconButton
        variant="secondary"
        size={isMobile ? "sm" : "md"}
        className={`navigation__button`}
      >
        <HeartIcon />
      </IconButton>
      <Badge>
        <IconButton
          variant="secondary"
          size={isMobile ? "sm" : "md"}
          className={`navigation__button`}
        >
          <NotificationIcon />
        </IconButton>
      </Badge>
      <IconButton
        variant="secondary"
        size={isMobile ? "sm" : "md"}
        className={`navigation__button`}
      >
        <SettingIcon />
      </IconButton>
      <Avatar />
    </div>
  );
};
