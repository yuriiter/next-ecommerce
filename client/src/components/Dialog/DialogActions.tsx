import { PropsWithChildren } from "react";

export const DialogActions = ({ children }: PropsWithChildren) => {
  return <div className="dialog__actions">{children}</div>;
};
