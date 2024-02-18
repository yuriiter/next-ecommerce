import React, { useContext } from "react";
import { ToastContext } from "./ToastContext";
import { Toast } from "./Toast";

export const ToastContainer = () => {
  const { toasts } = useContext(ToastContext);

  console.log("bp1", toasts);
  return (
    <div className="toast__container">
      {toasts.map((toast) => (
        <Toast {...toast} key={toast.id} />
      ))}
    </div>
  );
};
