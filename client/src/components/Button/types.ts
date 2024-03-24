import { LinkProps } from "next/link";
import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "minimal";
type ButtonSize = "sm" | "md" | "lg";

type OwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
};

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = OwnProps &
  (Omit<HTMLButtonProps, "children"> | Omit<LinkProps, "children">);

export type ButtonWIconProps = {
  icon: ReactElement;
  iconBefore?: boolean;
} & ButtonProps;

export type IconButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactElement;
  className?: string;
} & (Omit<HTMLButtonProps, "children"> | Omit<LinkProps, "children">);
