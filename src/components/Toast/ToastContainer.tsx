import React, { useContext } from "react";
import { ToastContext } from "./ToastContext";

export const ToastContainer = () => {
  const { toasts } = useContext(ToastContext);

  return <div className="toast__container"></div>;
};
