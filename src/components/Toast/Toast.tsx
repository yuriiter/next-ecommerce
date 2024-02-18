import React, { useEffect, useRef, useState } from "react";
import { ToastData } from "./types";
import { cn } from "@/utils";
import { useToast } from "./useToast";

type ToastProps = ToastData;

export const Toast = ({ id, type, duration = 3000, content }: ToastProps) => {
  const toastElementRef = useRef<HTMLDivElement>(null);
  const toast = useToast();
  const [disappearAnimationFlag, setDisappearAnimationFlag] = useState(false);

  useEffect(() => {
    setDisappearAnimationFlag(false);
    if (type === "pending") return;
    const timeout = setTimeout(() => {
      setDisappearAnimationFlag(true);
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
      className={cn(["toast", disappearAnimationFlag && "toast--disappear"])}
    >
      <div className="toast__icon"></div>
      <div className="toast__content">{content}</div>
      <button className="toast__close"></button>
      <div
        className="toast__progress"
        style={{ animationDuration: `${duration}ms` }}
      ></div>
    </div>
  );
};
