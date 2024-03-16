import { Select } from "@/components/Select/Select";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Avatar } from "./Avatar";
import React, { useMemo } from "react";
import { useModalWindow } from "@/components/ModalWindow/useModalWindow";
import { MODAL_WINDOW } from "@/types/modalWindow";
import { SelectOption } from "@/components/Select/types";
import { useAuth } from "@/auth/useAuth";
import { useMQ } from "@/hooks/mediaQuery/useMQ";
import { useSignOutAndGoHome } from "@/hooks/auth/useSignOutAndGoHome";
import { Badge } from "@/components/Badge";

export const AvatarMenu = () => {
  const isMobile = useMQ("SM", "max");
  const { authData } = useAuth();
  const { setOpenWindowId } = useModalWindow();
  const [_signOutResponse, signOut] = useSignOutAndGoHome();

  const avatarMenuOptionToAction = useMemo(() => {
    const map = {
      "Sign in": () => setOpenWindowId(MODAL_WINDOW.SIGN_IN),
      "Sign up": () => setOpenWindowId(MODAL_WINDOW.SIGN_UP),
      "Sign out": () => signOut(),
    };

    if (authData.authenticated) {
      delete map["Sign in"];
      delete map["Sign up"];
    } else delete map["Sign out"];

    return map;
  }, [setOpenWindowId, authData]);

  const onMenuSelect = (newValue: SelectOption | undefined) => {
    if (typeof newValue !== "string") return;
    const action = avatarMenuOptionToAction[newValue];

    if (typeof action === "function") action(newValue);
  };

  return (
    <Badge
      animated={false}
      show={authData.authenticated}
      className="menu__badge"
    >
      <Select
        className="menu"
        placement="left-bottom"
        forceUseNativeSelect={false}
        renderInput={({ toggleDropdownOpen, isDropdownOpen }) => (
          <Tooltip
            content="Profile"
            placement="center-bottom"
            manualOpen={isDropdownOpen ? false : undefined}
          >
            <Avatar
              size={isMobile ? "sm" : "md"}
              asButton
              onClick={toggleDropdownOpen}
            />
          </Tooltip>
        )}
        value={undefined}
        onChange={onMenuSelect}
        options={Object.keys(avatarMenuOptionToAction)}
      />
    </Badge>
  );
};
