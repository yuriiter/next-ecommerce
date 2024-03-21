import React, { PropsWithChildren } from "react";
import { Typography } from "../Typography/Typography";

export const DialogHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="dialog__header">
      {typeof children === "string" ? (
        <Typography h3 bold size="20" className="dialog__title">
          {children}
        </Typography>
      ) : (
        <div className="dialog__title">{children}</div>
      )}
    </div>
  );
};
