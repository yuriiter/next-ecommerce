import { cn } from "@/utils";
import React, { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { IconButton } from "../Button";
import { Close } from "../svg/icons";
import { Typography } from "../Typography/Typography";
import { useKeyEvent } from "@/hooks/useKeyEvent";

type ModalWindowProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title: ReactNode;
};

export const ModalWindow = ({
  open,
  setOpen,
  children,
  title,
}: ModalWindowProps) => {
  const closeModalWindow = () => setOpen(false);
  useKeyEvent("Escape", closeModalWindow);

  return (
    <div
      tabIndex={-1}
      className={cn([
        "modal-window",
        open && "modal-window--open",
        !open && "modal-window--closed",
      ])}
    >
      <div className="modal-window__content">
        <div className="modal-window__header">
          {typeof title === "string" ? (
            <Typography h3 bold size="20" className="modal-window__title">
              {title}
            </Typography>
          ) : (
            <div className="modal-window__title">{title}</div>
          )}
          <div>
            <IconButton onClick={closeModalWindow}>
              <Close />
            </IconButton>
            <Typography bold secondary400 size="14" className="text-center">
              ESC
            </Typography>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
