import React, { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ToastContainer } from "../Toast/ToastContainer";
import { ToastContextProvider } from "../Toast/ToastContext";
import { SidebarContextProvider } from "../Sidebar/SidebarContext";
import { ModalWindowContextProvider } from "../ModalWindow/ModalWindowContext";
import { AuthContextProvider } from "@/auth/AuthContext";
import { ModalWindows } from "../ModalWindows/ModalWindows";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <AuthContextProvider>
      <ModalWindowContextProvider>
        <SidebarContextProvider>
          <ToastContextProvider>
            <div className="content">
              <Navigation />
              <div className="width-sidebar">
                <div className="width-sidebar__content">
                  {children}
                  <ModalWindows />
                </div>
              </div>
              <Footer />
            </div>
            <ToastContainer />
          </ToastContextProvider>
        </SidebarContextProvider>
      </ModalWindowContextProvider>
    </AuthContextProvider>
  );
};
