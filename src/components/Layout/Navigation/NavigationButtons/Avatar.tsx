import React from "react";
import styles from "@/styles/components/Navigation.module.scss";
import avatarPhoto from "@/assets/img/avatar.jpg";
import Image from "next/image";
import Link from "next/link";

export const Avatar = () => {
  return (
    <Link href="#" className={styles.navigation__avatar}>
      <Image alt="Profile photo" src={avatarPhoto} />
    </Link>
  );
};
