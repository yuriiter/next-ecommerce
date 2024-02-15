import { cn } from "@/utils";
import React, { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { IconButton } from "../Button";
import { Close } from "../svg/icons";
import { Typography } from "../Typography/Typography";

type DialogWrapperProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title: ReactNode;
};

export const DialogWrapper = ({
  open,
  setOpen,
  children,
  title,
}: DialogWrapperProps) => {
  const closeDialog = () => setOpen(false);
  return (
    <div
      className={cn([
        "dialog__wrapper",
        open && "dialog__wrapper--open",
        !open && "dialog__wrapper--closed",
      ])}
    >
      <div className="dialog__content"><div className="dialog__header">
        {typeof title === "string" ? (
          <Typography h3 bold size="20" className="dialog__title">
            {title}
          </Typography>
        ) : (
          <div className="dialog__title">{title}</div></div>
        )}
        <IconButton onClick={closeDialog}>
          <Close />
        </IconButton>
      </div>
      {children}
    </div>
  );
};
