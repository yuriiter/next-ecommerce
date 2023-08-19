import Link from "next/link";
import React from "react";
import styles from "@/styles/components/Logo.module.scss";

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      Morent
    </Link>
  );
};
