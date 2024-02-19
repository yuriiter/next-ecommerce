import React, { ReactNode, useEffect, useRef, useState } from "react";
import { ToastData, ToastType } from "./types";
import { cn } from "@/utils";
import { useToast } from "./useToast";
import { Timeout } from "@/timeout";
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
  const timeoutRef = useRef<Timeout>();
  const [shouldPause, setShouldPause] = useState(false);
  const toastElementRef = useRef<HTMLDivElement>(null);
  const toast = useToast();
  const [disappearAnimationFlag, setDisappearAnimationFlag] = useState(false);

  const closeToast = () => setDisappearAnimationFlag(true);

  useEffect(() => {
    setDisappearAnimationFlag(false);
    if (type === "pending") return;
    timeoutRef.current = new Timeout(closeToast, duration);
    return () => timeoutRef.current?.pause();
  }, [duration, type]);

  useEffect(() => {
    if (!timeoutRef.current || type === "pending") return;
    const isPaused = timeoutRef.current.getIsPaused();
    if (!isPaused && shouldPause) timeoutRef.current.pause();
    else if (isPaused && !shouldPause) timeoutRef.current.resume();
  }, [shouldPause, type]);

  const removeSelf = () => {
    if (disappearAnimationFlag) toast.removeToast(id);
  };

  const pause = () => setShouldPause(true);
  const resume = () => setShouldPause(false);

  return (
    <div
      onMouseEnter={pause}
      onMouseLeave={resume}
      ref={toastElementRef}
      onAnimationEnd={removeSelf}
      className={cn([
        "toast no-shrink",
        disappearAnimationFlag && "toast--disappear",
        `toast--${type}`,
      ])}
    >
      <div
        className="toast__icon no-shrink"
        style={{ animationPlayState: shouldPause ? "paused" : "" }}
      >
        {toastIcons[type] ?? <ToastInfo />}
      </div>
      <div className="toast__content no-shrink">{content}</div>
      <Close onClick={closeToast} className="toast__close" />
      {type !== "pending" ? (
        <div
          className="toast__progress"
          style={{
            animationDuration: `${Math.max(duration - 50, 0)}ms`,
            animationPlayState: shouldPause ? "paused" : "",
          }}
        ></div>
      ) : null}
    </div>
  );
};
