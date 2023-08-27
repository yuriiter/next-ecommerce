import React from "react";
import { Logo } from "../../Logo";
import styles from "@/styles/components/Navigation.module.scss";
import { Search } from "./Search";
import { NavigationButtons } from "./NavigationButtons/NavigationButtons";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className="container">
        <Logo />
        <Search />
        <NavigationButtons />
      </div>
    </div>
  );
};
