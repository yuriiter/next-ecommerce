import { cn } from "@/utils";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { IconButton } from "../Button";
import { Close } from "../svg/icons";
import { Typography } from "../Typography/Typography";
import { useKeyEvent } from "@/hooks/useKeyEvent";
import { AnimatedDisplay } from "@/components/AnimatedDisplay";

type DialogProps = {
  open: boolean;
  close: () => void;
  children: ReactNode;
};

export const Dialog = ({ open, close, children }: DialogProps) => {
  useKeyEvent("Escape", close);

  return (
    <div className={cn(["dialog__wrapper", open && "dialog__wrapper--open"])}>
      <AnimatedDisplay tabIndex={-1} display={open} className={cn(["dialog"])}>
        <div className="dialog__content">{children}</div>
      </AnimatedDisplay>
    </div>
  );
};
