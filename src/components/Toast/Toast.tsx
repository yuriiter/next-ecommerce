import React, { ReactNode, useEffect, useRef, useState } from "react";
import { ToastData, ToastType } from "./types";
import { cn } from "@/utils";
import { useToast } from "./useToast";
import {
  Close,
  Loader,
  ToastError,
  ToastInfo,
  ToastSuccess,
} from "../svg/icons";

type ToastProps = ToastData;

const toastIcons: Record<ToastType, ReactNode> = {
  error: <ToastError />,
  pending: <Loader />,
  info: <ToastInfo />,
  success: <ToastSuccess />,
};

export const Toast = ({ id, type, duration = 3000, content }: ToastProps) => {
  const toastElementRef = useRef<HTMLDivElement>(null);
  const toast = useToast();
  const [disappearAnimationFlag, setDisappearAnimationFlag] = useState(false);

  const closeToast = () => setDisappearAnimationFlag(true);

  useEffect(() => {
    setDisappearAnimationFlag(false);
    if (type === "pending") return;
    const timeout = setTimeout(() => {
      closeToast();
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration, type]);

  const removeSelf = () => {
    if (disappearAnimationFlag) toast.removeToast(id);
  };

  return (
    <div
      ref={toastElementRef}
      onAnimationEnd={removeSelf}
      className={cn([
        "toast",
        disappearAnimationFlag && "toast--disappear",
        `toast--${type}`,
        "no-shrink",
      ])}
    >
      <div className="toast__icon no-shrink">
        {toastIcons[type] ?? <ToastInfo />}
      </div>
      <div className="toast__content no-shrink">{content}</div>
      <Close onClick={closeToast} className="toast__close" />
      {type !== "pending" ? (
        <div
          className="toast__progress"
          style={{ animationDuration: `${Math.max(duration - 50, 0)}ms` }}
        ></div>
      ) : null}
    </div>
  );
};
