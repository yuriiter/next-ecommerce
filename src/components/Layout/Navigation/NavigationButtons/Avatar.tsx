import React from "react";
import avatarPhoto from "@/assets/img/avatar.jpg";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";

type AvatarProps = {
  className?: string;
};

export const Avatar = ({ className }: AvatarProps) => {
  return (
    <Link href="#" className={cn(["navigation__avatar", className])}>
      <Image alt="Profile photo" src={avatarPhoto} />
    </Link>
  );
};
