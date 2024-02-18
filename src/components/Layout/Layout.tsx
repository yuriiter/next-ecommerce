import React, { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ToastContainer } from "../Toast/ToastContainer";
import { ToastContextProvider } from "../Toast/ToastContext";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <ToastContextProvider>
      <div className="content">
        <Navigation />
        <div className="width-sidebar">
          <div className="width-sidebar__content">{children}</div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </ToastContextProvider>
  );
};
