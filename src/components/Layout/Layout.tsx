import React, { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="content">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
