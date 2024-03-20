import React from "react";
import { IconButton } from "@/components/Button";
import { HeartIcon, NotificationIcon } from "@/components/svg/icons";
import { Badge } from "@/components/Badge";
import { useMQ } from "@/hooks/mediaQuery/useMQ";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { useModalWindow } from "@/components/ModalWindow/useModalWindow";
import { MODAL_WINDOW } from "@/types/modalWindow";
import { Select } from "@/components/Select/Select";
import { SelectOption } from "@/components/Select/types";
import { AvatarMenu } from "./AvatarMenu";
import { useAuth } from "@/auth/useAuth";

export const NavigationButtons = () => {
  const { authData } = useAuth();
  const { openWindowId, setOpenWindowId } = useModalWindow();
  const isMobile = useMQ("SM", "max");

  const toggleFavouritesModalWindow = () => {
    if (!authData.authenticated && !authData.fetching)
      setOpenWindowId(MODAL_WINDOW.SIGN_IN);
    else if (openWindowId === null) setOpenWindowId(MODAL_WINDOW.FAVOURITES);
    else setOpenWindowId(null);
  };

  return (
    <div className="navigation__buttons">
      <Tooltip content="Favourites" placement="center-bottom">
        <IconButton
          disabled={!authData.authenticated && authData.fetching}
          variant="secondary"
          size={isMobile ? "sm" : "md"}
          className={`navigation__button`}
          onClick={toggleFavouritesModalWindow}
        >
          <HeartIcon />
        </IconButton>
      </Tooltip>
      <Badge show={false}>
        <Select
          className="menu"
          placement="left-bottom"
          forceUseNativeSelect={false}
          renderInput={({ toggleDropdownOpen, isDropdownOpen }) => (
            <Tooltip
              manualOpen={isDropdownOpen ? false : undefined}
              content="No notifications yet"
              placement="center-bottom"
            >
              <IconButton
                disabled
                variant="secondary"
                size={isMobile ? "sm" : "md"}
                className={`navigation__button`}
                onClick={toggleDropdownOpen}
              >
                <NotificationIcon />
              </IconButton>
            </Tooltip>
          )}
          value={undefined}
          onChange={function (newValue: SelectOption | undefined): void {
            console.log(newValue);
          }}
          options={["Hello", "Hello2", "Hello3"]}
        />
      </Badge>
      <AvatarMenu />
    </div>
  );
};
