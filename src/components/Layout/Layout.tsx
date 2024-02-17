import React, { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ToastContainer } from "../Toast/ToastContainer";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="content">
        <Navigation />
        <div className="width-sidebar">
          <div className="width-sidebar__content">{children}</div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};
