import React from "react";
import { IconButton } from "@/components/Button";
import {
  HeartIcon,
  NotificationIcon,
  SettingIcon,
} from "@/components/svg/icons";
import { Avatar } from "./Avatar";

export const NavigationButtons = () => (
  <div className="navigation__buttons">
    <IconButton variant="secondary" size="md" className={`navigation__button`}>
      <HeartIcon />
    </IconButton>
    <IconButton variant="secondary" size="md" className={`navigation__button`}>
      <NotificationIcon />
    </IconButton>
    <IconButton variant="secondary" size="md" className={`navigation__button`}>
      <SettingIcon />
    </IconButton>
    <Avatar />
  </div>
);
