import { cn } from "@/utils";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { IconButton } from "../Button";
import { Close } from "../svg/icons";
import { Typography } from "../Typography/Typography";
import { useKeyEvent } from "@/hooks/useKeyEvent";
import { useDialog } from "./useDialog";
import { AnimatedDisplay } from "@/components/AnimatedDisplay";
import dynamic from "next/dynamic";

type DialogWithIdStateProps = {
  id?: never;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type DialogWithIdOpenProps = {
  id: string;
  open?: never;
  setOpen?: never;
};

type DialogProps = {
  children: ReactNode;
  title: ReactNode;
} & (DialogWithIdStateProps | DialogWithIdOpenProps);

const DialogNoDynamic = ({
  open,
  setOpen,
  children,
  title,
  id,
}: DialogProps) => {
  const { openWindowId, setOpenWindowId } = useDialog();
  const closeDialog = () => {
    if (id) setOpenWindowId(null);
    setOpen?.(false);
  };
  useKeyEvent("Escape", closeDialog);

  const finalOpen = typeof id === "string" ? id === openWindowId : open;

  return (
    <AnimatedDisplay
      tabIndex={-1}
      display={finalOpen}
      className={cn(["modal-window"])}
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
            <IconButton onClick={closeDialog}>
              <Close />
            </IconButton>
          </div>
        </div>
        <div className="divider-x"></div>
        {children}
      </div>
    </AnimatedDisplay>
  );
};

export const Dialog = dynamic(() => Promise.resolve(DialogNoDynamic), {
  ssr: false,
});
