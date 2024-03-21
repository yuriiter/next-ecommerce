import { cn } from "@/utils";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { IconButton } from "../Button";
import { Close } from "../svg/icons";
import { Typography } from "../Typography/Typography";
import { useKeyEvent } from "@/hooks/useKeyEvent";
import { useModalWindow } from "./useModalWindow";
import { AnimatedDisplay } from "@/components/AnimatedDisplay";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

type ModalWindowWithIdStateProps = {
  id?: never;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type ModalWindowWithIdOpenProps = {
  id: string;
  open?: never;
  setOpen?: never;
};

type ModalWindowProps = {
  children: ReactNode;
  title: ReactNode;
} & (ModalWindowWithIdStateProps | ModalWindowWithIdOpenProps);

const ModalWindowNoDynamic = ({
  open,
  setOpen,
  children,
  title,
  id,
}: ModalWindowProps) => {
  const router = useRouter();
  const { openWindowId, setOpenWindowId } = useModalWindow();
  const closeModalWindow = () => {
    if (id) setOpenWindowId(null);
    setOpen?.(false);
    const { query } = router;
    delete query.redirect;
    router.push({ query: { ...query } });
  };
  useKeyEvent("Escape", closeModalWindow);

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
            <IconButton onClick={closeModalWindow}>
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

export const ModalWindow = dynamic(
  () => Promise.resolve(ModalWindowNoDynamic),
  { ssr: false }
);
