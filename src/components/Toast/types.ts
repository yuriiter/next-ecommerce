import { ReactNode } from "react";

export type ToastType = "success" | "warning" | "info" | "error" | "pending";

export type ToastParams = {
  type: ToastType;
  content: ReactNode;
  duration?: number;
};

export type ToastData = ToastParams & {
  id: string;
};

export type PromisifyToastResultType = Exclude<ToastType, "pending" | "error">;

export type PromisifyToastParams = {
  pending: ReactNode;
  error?: ReactNode;
} & {
  [K in PromisifyToastResultType]?: {
    [P in Extract<PromisifyToastResultType, K>]?: ReactNode;
  };
}[PromisifyToastResultType];
