import React from "react";
import { Logo } from "../Logo";
import styles from "@/styles/components/Navigation.module.scss";
import { Search } from "../Search";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className="container">
        <Logo />
        <Search />
      </div>
    </div>
  );
};
