import React from "react";
import styles from "@/styles/components/Navigation.module.scss";
import { IconButton } from "@/components/Button";
import { HeartIcon, NotificationIcon, SettingIcon } from "@/components/icons";
import buttonStyles from "@/styles/components/Button.module.scss";
import { Avatar } from "./Avatar";

export const NavigationButtons = () => (
  <div className={styles.navigation__buttons}>
    <IconButton
      variant="secondary"
      size="md"
      className={`${styles.navigation__button} ${buttonStyles["button--navigation"]}`}
    >
      <HeartIcon />
    </IconButton>
    <IconButton
      variant="secondary"
      size="md"
      className={`${styles.navigation__button} ${buttonStyles["button--navigation"]}`}
    >
      <NotificationIcon />
    </IconButton>
    <IconButton
      variant="secondary"
      size="md"
      className={`${styles.navigation__button} ${buttonStyles["button--navigation"]}`}
    >
      <SettingIcon />
    </IconButton>
    <Avatar />
  </div>
);
