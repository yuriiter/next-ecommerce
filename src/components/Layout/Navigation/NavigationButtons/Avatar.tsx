import React from "react";
import avatarPhoto from "@/assets/img/avatar.jpg";
import Image from "next/image";
import Link from "next/link";

export const Avatar = () => {
  return (
    <Link href="#" className="navigation__avatar">
      <Image alt="Profile photo" src={avatarPhoto} />
    </Link>
  );
};
